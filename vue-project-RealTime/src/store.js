import axios from "axios";
import {createStore} from 'vuex'
import router from "./router";


const store=createStore({

    state :{

        token : '',

        RealArray :[]

    },

    getters :{

        pollToken(state){

            return state.token  !== ""


        },

        RealDataGo(state){
            return state.RealArray;
        }



    },

    mutations :{

        localdanGetir(state){

            let idToken= localStorage.getItem('token');
            if(idToken){
                state.token=idToken
            }else{
                router.replace('/login')
            }

        },



        updateToken(state, gelenToken){
            state.token = gelenToken
        },


        UpMehsulReal(state, realdata){

            state.RealArray.push(realdata)


        }

    },

    actions :{

        sendData({commit}, gelenData){

           
            let api = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

            if(gelenData.Show){
                api = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
            }

            axios.post(api + "AIzaSyCnGXsXUc9fhHVC2Z3EOl4fnsUNvUaDm0U" , 
            {
                email : gelenData.email,
                password : gelenData.password,
                returnSecureToken : true
            }
            ).then( response => {
                 let x =  response.data.idToken;

                //  console.log(response);

                 commit('updateToken', x);
                 router.replace('/')
                 localStorage.setItem('token', x);

            } )
        },

        CixisData({state}){
            localStorage.removeItem('token')
            state.token=''
            router.replace('/login')

        },




        SendReal({commit}, GelenAdd ){

            axios.post('https://portfolio-534ea-default-rtdb.firebaseio.com/Apple.json',GelenAdd)
            .then(response =>{
                console.log(response);

                commit('UpMehsulReal',GelenAdd)

            })

        },

        // SendReall({commit}, GelenAdd ){

        //     axios.post('https://portfolio-534ea-default-rtdb.firebaseio.com/mac.json',GelenAdd)
        //     .then(response =>{
        //         console.log(response);

        //         commit('UpMehsulReal',GelenAdd)

        //     })

        // },

        BringReal({commit}){
            axios.get('https://portfolio-534ea-default-rtdb.firebaseio.com/Apple.json')
            .then(response=>{
               
                let data =response.data

                for(let key in data){
                    data[key].key=key
                    commit('UpMehsulReal', data[key])
                }
            })

        },






    }

  


})

export default store