<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Dashboard</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-3 text-primary text-title text-center">
            {{ list.date }}
          </div>
        </v-col>
        <v-col cols="12">
          <Card
            v-for="item in list.sessions"
            :session="item"
            :key="item.id"
            :active="selecteddashboard.includes(item.id)"
            v-on:moreDetail="moreDetail(item)"
            v-on:choosedashboard="choosedashboard(item)" />          
        </v-col>
        <v-col cols="12">
          <div class="set-padding">
            <v-btn
              rounded
              color="primary"
              dark
              class="w-100 mt-3 my-btn"
              @click="next"
              >Next</v-btn
            >
          </div>
          <div v-if="index > 0" class="w-100 mt-3 text-center my-btn text-primary" @click="back">Back</div>
          <div v-if="index > 0" class="w-100 mt-3 text-center my-btn text-primary" @click="home">Home</div>
        </v-col>
      </v-row>
      <v-dialog v-model="isShowDialog" max-width="290">
        <v-card class="dialog-card"> 
          <v-img
            class="white--text align-end"
            height="200px"
            :src="dialog.image"
          >
          </v-img>
          <v-card-title class="headline">{{ dialog.title }}</v-card-title>
          <v-card-text>
            <p>เวลา: {{ dialog.time }}</p>
            <p>ร้าน: {{ dialog.place }}</p>
            <p class="detail">
              {{ dialog.detail }}
            </p>
            <p>
              ยืนยัน: <br/>
              <span v-html="dialog.spakers"></span>              
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>            
            <v-btn class="text-primary" text @click="isShowDialog = false">
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import Card from '~/components/Card'
export default {
  components: {
    Card
  },
  data(){
    return {
      isShowDialog: false,
      index: 0,
      dialog: {
        title: '',
        time: '',
        place: '',
        image: '',
        detail: '',
        spakers: ''
      },
      selecteddashboard: [],
      list: [],
      dashboard: this.$store.getters.getdashboard    
    }
  },
  mounted(){
    // api 
    this.list = this.dashboard[this.index]
  },
  methods: {
    back() {
      this.index = this.index-1
      this.list = this.dashboard[this.index]
    },
    home() {
      this.$router.push('/')
    },
    next() {
      if(this.index == this.dashboard.length -1){
        // api save register dashboard 
        this.$axios.patch(`https://test-a1626-default-rtdb.asia-southeast1.firebasedatabase.app/line-test-86f08-default-rtdb/data/~2F/dashboard/line:001.json`, { ...this.selecteddashboard }).then((res) => {
          this.$router.push('/dashboard/done')
        }).catch(e => console.log(e)) 
      }else{
        this.index = this.index+1
        this.list = this.dashboard[this.index]
      }      
    },
    moreDetail(item){
      this.isShowDialog = true
      this.dialog = item
    },
    choosedashboard(item){
      const listId = this.list.sessions.map(session => session.id)
      this.selecteddashboard = this.selecteddashboard.filter(session => !listId.includes(session))
      this.selecteddashboard.push(item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-card{
  p{
    margin-bottom: 0;
  }
  .v-card__title.headline{
    font-size: 20px !important;
  }
  .v-card__text{
    padding-bottom: 0;
  }
  .detail{
    margin: 10px 0;
  }
}
</style>