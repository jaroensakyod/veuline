<template>
  <div>
    <v-app-bar
      color="primary"
      dense
      flat
      dark
    >
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="set-padding">
            <div class="text-center mt-10">
              <img src="~/assets/welcome.png" alt="" width="236px">
              <h1 class="text-title">Welcome  {{ name }} {{ lname }}</h1>
              <p class="mt-7">
                Welcome to the promoney<br/>
              </p>
            </div>
            <v-btn rounded color="primary" dark class="w-100 mt-10 my-btn" @click="dashboard">Dashboard</v-btn>
            <div class="w-100 text-center my-btn outlined text-primary mt-5" @click="close">Close</div>                    
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {  
  data(){
    return {
      name: this.$store.getters.getRegister.firstName,
      lname: this.$store.getters.getRegister.lastName
    }
  },
  methods: {
    dashboard(){
      this.$router.push('/dashboard')
    },
    close(){
              this.$router.push('/')
//       liff.closeWindow();
    }
  }
}
</script>