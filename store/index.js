export const state = () => ({
          dialog: {
            isShow: false,
            title: '',
            message: ''
          },
          line: {
            pictureUrl: null,
            displayName: null,
            userId: null
          },
          survey: {
            survey1: 5,
            survey2: '',
            survey3: '',
          },
          user: {
            firstname: '',
            lastname: '',
            gender: 1,
            email: '',
            phone: '',
            birthday: '',
            company: '',
            position: ''
          },
          register: {
            firstname: '',
            lastname: '',
            gender: 1,
            email: '',
            phone: '',
            birthday: new Date().toISOString().substr(0, 10),
            company: '',
            position: ''
          },
          data: {  
            dashboard: [
              {
                date: " ",
                sessions: [
                  {
                    id: 1,
                    title: "IPhon 13",
                    topic: "IPhon 13",
                    spaker: "ฝากกับเรา",
                    image: "https://img.kaidee.com/prd/20190701/348403654/m/396d4a4d-3782-47a4-afb8-88c9d8013fe8.jpg",
                    detail:
                      "ฝากไว้กับร้าน ฝากกับเราเมื่อวันที่ 1 มิถุนายน 2565 ",
                    time: "Time : 13: 30 - 16: 30",
                    spakers: "- คุณ การ<br>ผู้รับฝาก",
                    place: "101"
                  },
                  {
                    id: 2,
                    title: "IPhon 13",
                    topic: "IPhon 13",
                    spaker: "ฝากกับเรา",
                    image: "https://img.kaidee.com/prd/20190701/348403654/m/396d4a4d-3782-47a4-afb8-88c9d8013fe8.jpg",
                    detail:
                      "ฝากไว้กับร้าน ฝากกับเราเมื่อวันที่ 1 มิถุนายน 2565 ",
                    time: "Time : 13: 30 - 16: 30",
                    spakers: "- คุณ การ<br>ผู้รับฝาก",
                    place: "101"
                  },
                  {
                    id: 3,
                    title: "IPhon 13",
                    topic: "IPhon 13",
                    spaker: "ฝากกับเรา",
                    image: "https://img.kaidee.com/prd/20190701/348403654/m/396d4a4d-3782-47a4-afb8-88c9d8013fe8.jpg",
                    detail:
                      "ฝากไว้กับร้าน ฝากกับเราเมื่อวันที่ 1 มิถุนายน 2565 ",
                    time: "Time : 13: 30 - 16: 30",
                    spakers: "- คุณ การ<br>ผู้รับฝาก",
                    place: "101"
                  }
                ]
              },
              {
                date: " ",
                sessions: [
                  {
                    id: 4,
                    title: "IPhon 13",
                    topic: "IPhon 13",
                    spaker: "ฝากกับเรา",
                    image: "https://img.kaidee.com/prd/20190701/348403654/m/396d4a4d-3782-47a4-afb8-88c9d8013fe8.jpg",
                    detail:
                      "ฝากไว้กับร้าน ฝากกับเราเมื่อวันที่ 1 มิถุนายน 2565 ",
                    time: "Time : 13: 30 - 16: 30",
                    spakers: "- คุณ การ<br>ผู้รับฝาก",
                    place: "101"
                  },
                  {
                    id: 5,
                    title: "IPhon 13",
                    topic: "IPhon 13",
                    spaker: "ฝากกับเรา",
                    image: "https://img.kaidee.com/prd/20190701/348403654/m/396d4a4d-3782-47a4-afb8-88c9d8013fe8.jpg",
                    detail:
                      "ฝากไว้กับร้าน ฝากกับเราเมื่อวันที่ 1 มิถุนายน 2565 ",
                    time: "Time : 13: 30 - 16: 30",
                    spakers: "- คุณ การ<br>ผู้รับฝาก",
                    place: "101"
                  },
                  {
                    id: 6,
                    title: "IPhon 13",
                    topic: "IPhon 13",
                    spaker: "ฝากกับเรา",
                    image: "https://img.kaidee.com/prd/20190701/348403654/m/396d4a4d-3782-47a4-afb8-88c9d8013fe8.jpg",
                    detail:
                      "ฝากไว้กับร้าน ฝากกับเราเมื่อวันที่ 1 มิถุนายน 2565 ",
                    time: "Time : 13: 30 - 16: 30",
                    spakers: "- คุณ การ<br>ผู้รับฝาก",
                    place: "101"
                  }
                ]
              }
            ]
          }
        })
        
        export const getters = {
          getUser(state){
            return state.user  
          },
          getRegister(state){
            return state.register
          },
          getDialog(state){
            return state.dialog
          },
          getdashboard(state){
            return state.data.dashboard
          },
          getAgenda(state){
            return state.data.agenda
          },
          getSurvey(state){
            return state.survey
          },
          getLine(state){
            return state.line
          }
        }
        
        export const mutations = {
          SET_REGISTER(state, data){
            state.register = {
              ...state.register,
              ...data
            }
          },
          SET_USER(state, data){
            state.user = {
              ...state.user,
              ...data
            }
          },
          SET_DIALOG(state, data){
            state.dialog = {
              ...state.dialog,
              ...data
            }
          },
          SET_SURVEY(state, data){
            state.survey = {
              ...state.survey,
              ...data
            }
          },
          SET_LINE(state, data){
            state.line = {
              ...state.line,
              ...data
            }
          }
        }
        
        export const actions = {
          setUser({ commit }, data){
            commit('SET_USER', data)
          },
          setRegister({ commit }, data){
            commit('SET_REGISTER', data)
          },
          setDialog({ commit }, data){
            commit('SET_DIALOG', data)
          },
          setSurvey({ commit }, data){
            commit('SET_SURVEY', data)
          },
          setLine({ commit }, data){
            commit('SET_LINE', data)
          }
        }