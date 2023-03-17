<template>
    <body >
        <div class="layout-wrapper-light" >                     
            <main>         
                <div class="layout-menu-wrapper" id="layout-menu-wrapper"  >                             
                    <aside>     
                        <div class="fixed inset-0 flex ">            
                            <div
                                class="absolute flex h-screen  "
                                :class="[right ? 'right-10 flex-column ' : 'left-0 flex-row-reverse' ]">                 
                                <div  class=" bg-blue-600 transition-all duration-700 overflow-hidden" v-if="user.role=='admin'"
                                      :class="[open ? 'w-64' : 'w-16']">               
                                    <div class=" inline-flex">                  
                                        <button
                                            @click.prevent="toggle()"
                                            class="pr-3 pt-3  mt-3 w-20 my-auto text-white  text-center focus:outline-none  transition-color duration-300 pi pi-bars aligh-center fixed"
                                            style="font-size: 24px;">                 
                                       </button>                 
                                       <div class="w-50  ml-9  inline-flex">
                                            <div class="inline ml-10 w-24 space-y-0 ">
                                                <img class=" border-2 rounded-full border-white-300" src="https://stickershop.line-scdn.net/stickershop/v1/product/15683706/LINEStorePC/main.png;compress=true" alt="">
                                                <h6 class="text-white font-bold mt-2">Chanthorn</h6>
                                            </div>             
                                        </div>
    
                                                                    
                                    </div> 
                                    
               

           

                                    <div >
                                        <div class="mt-6 flex hover:bg-blue-500 pt-2 pb-2 "  >                                                  
                                            <div class="inline ml-6 overflow-hidden ">
                                                <button class="pi pi-home " style="color: white; font-size: 20px;"   >
                                                <a href="/dashboard" class="text-white ml-6  no-underline  text-base" >Dashboard</a>
                                                </button>     
                                            </div>                                             
                                        </div>                                         
                                        <div class=" flex hover:bg-blue-500 pt-2 pb-2 " >                                                 
                                            <div class="inline ml-6 overflow-hidden ">
                                                <button class="fa fa-users " style="color: white; font-size: 20px;">
                                                <a href="/formed" class="text-white ml-6  no-underline text-base " >Applicant</a>
                                                </button>     
                                            </div>                                                  
                                        </div>  
                                        <div class=" flex hover:bg-blue-500 pt-2 pb-2 "    >                                                
                                            <div class="inline ml-6 overflow-hidden " >
                                                <button class="fa fa-check-square  " style="color: white; font-size: 20px;" >
                                                    <a href="/account" class="text-white ml-6 no-underline fixed text-base  " >Applicant Document Check</a>
                                                </button>                                                      
                                            </div>                                                 
                                        </div> 
                                        <div class=" flex hover:bg-blue-500 pt-2 pb-2 "    >                     
                                            <div class="inline ml-6 overflow-hidden" >
                                                <button class="fa fa-money fa-lg " style="color: white; font-size: 20px;"  >
                                                    <a href="/account" class="text-white ml-6  no-underline text-base fixed" >Applicant payment</a>
                                                </button>                        
                                            </div>                                                             
                                        </div> 
                                        <div class=" flex hover:bg-blue-500 pt-2 pb-2 "    >                     
                                            <div class="inline ml-6 overflow-hidden" >
                                                <button class="fa fa-file-text " style="color: white; font-size: 20px;"  >
                                                    <a href="/account" class="text-white ml-6  no-underline text-base" >Report</a>
                                                </button>                        
                                            </div>                                                        
                                        </div>   
                                        <div class=" flex hover:bg-blue-500 pt-2 pb-2 "    >                     
                                            <div class="inline ml-6 overflow-hidden" >
                                                <button class="fa fa-graduation-cap" style="color: white; font-size: 20px;"  >
                                                    <a href="/account" class="text-white ml-6  no-underline text-base" >Student</a>
                                                </button>                        
                                            </div>                                                          
                                        </div> 
                                        <div class=" flex hover:bg-blue-500 pt-2 pb-2 "    >                     
                                            <div class="inline ml-6 overflow-hidden" >
                                                <button class="fa fa-address-card  " style="color: white; font-size: 20px;"  >
                                                    <a href="/account" class="text-white ml-6  no-underline text-base fixed" >Form Setting</a>
                                                </button>                        
                                            </div>                                                      
                                        </div>   
                                        <div class=" flex hover:bg-blue-500 pt-2 pb-2 "    >                     
                                            <div class="inline ml-6 overflow-hidden" >
                                                <button class="fa fa-user-circle-o fa-lg " style="color: white; font-size: 20px;"  >

                                                    <router-link :to="{ name: 'Account'}" class="text-white ml-6  no-underline text-base">Account</router-link>
                                                </button>                        
                                            </div>                                                        
                                        </div>  
                                        <div class=" flex hover:bg-blue-500 pt-2 pb-2 "    >                     
                                            <div class="inline ml-6 overflow-hidden" >
                                                <button class="fa fa-cog " style="color: white; font-size: 22px;"  >
                                                    <a href="/account" class="text-white ml-6  no-underline text-base" >Setting</a>
                                                </button>                        
                                            </div>                                                              
                                        </div>  
                                    </div>
   
                                </div>


                                <div  class=" bg-blue-600 transition-all duration-700 overflow-hidden" v-else
                                      :class="[open ? 'w-56' : 'w-16']"> 
                                                    
                                    <div class=" inline-flex">                  
                                        <button
                                            @click.prevent="toggle()"
                                            class="pr-3  mt-3 w-20 my-auto text-white  text-center focus:outline-none  transition-color duration-300 pi pi-bars aligh-center fixed"
                                            style="font-size: 24px;">                                                        
                                        </button>                                             
                                        <div class="w-50 h-24 ml-11   mt-12" :class="[open ? 'w-32' : 'w-32']">
                                            <div class="inline"  >
                                                <img class=" ml-10 w-75 p-0 border-2 rounded-full border-white-300 "   src="https://wallpaperaccess.com/full/25188.jpg" alt="">
                                                <h3 class="ml-6 text-white w-100 text-center">{{user.name}}</h3>
                                            </div>                                                           
                                        </div>                                                                   
                                    </div> 
                                    <div>
                                        <div class="mt-3 flex hover:bg-blue-500 pt-3 pb-3 "  >               
                                            <div class="inline ml-6 overflow-hidden ">
                                                <button class="fa fa-address-book-o fa-lg" style="color: white; font-size: 24px;"   >
                                                    <a href="/applicant1" class="text-white ml-6  no-underline text-lg hover:text-black" >Applicant</a>
                                                </button>     
                                            </div>                      
                                        </div>                        
                                        <div class=" flex hover:bg-blue-500 pt-3 pb-3 " >                       
                                            <div class="inline ml-6 overflow-hidden ">
                                                <button class="fa fa-eye fa-lg" style="color: white; font-size: 24px;">
                                                    <a href="/formed" class="text-white ml-6  no-underline text-lg hover:text-black" >Form</a>
                                                </button>     
                                            </div>                            
                                        </div>  
                                        <div class=" flex hover:bg-blue-500 pt-3 pb-3 "    >                          
                                            <div class="inline ml-6 overflow-hidden" >
                                                <button class="fa fa-user-circle-o fa-lg " style="color: white"  >                     
                                                    <router-link :to="{ name: 'Account'}" class="text-white ml-6  no-underline text-base">Account</router-link>
                                                </button>                    
                                            </div>                  
                                        </div>      
                                    </div>                               
                                </div>
                            </div> 
                        </div>
                    </aside>  
                           
                </div>
                            
                <div class="layout-main ml-40 transition-all duration-700 " 
                    :class="[open ? 'w-5/6 float-right' : 'topbar float-right']" >
                    <header>
                        <Navbar></Navbar>
                    </header>
                    <div class="layout-content layout-documentation " id="doc"  >
                        <router-view></router-view>
                    </div>
                </div>
            </main>
        </div> 

           
        </body>	
    
               
            
        </template>
        
        <script>
import Navbar from '../Layout/Navbar.vue';
// import { useStore } from 'vuex'
// import { onMounted } from '@vue/runtime-core';          

    export default {
      components: { Navbar },  
      name: 'home',
              
        data() {
            return {
                right: false,
                open: false,
                dimmer: true,
                isLoggedin: true,
                user: [],
            
                    
            };
        },
        async created(){
            await axios.get('getUser').then(
                res=>{
                    console.log(res)
                    this.user= res.data     
                }
            ).catch(er=>{

                console.log(er)
            })
        },

        methods:{
            toggle(){
                 this.open = !this.open;
            },
        }
                   
    };
        
</script>
        
        <style>
            :root{
                --sidebar-width: 300px;
            }
          .app{
            display: flex;           
          }
          .topbar{
            width: 95%;
           
          }
          *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
       
        .fade-enter-active,
        .fade-leave-active {
            transition: opacity 1s ease-out;
        }
        .title{
            margin-bottom: 60px;
        }
       
        
        .fade-enter,
        .fade-leave-to {
            opacity: 0;
        }

      
    
        </style>

<!-- <template>
  
</template>
<script></script> -->