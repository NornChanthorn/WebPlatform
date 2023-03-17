<template>
    <div class="navbar-nav" v-if="isLoggedIn">
        <div :class="containerClass" @click="onWrapperClick">
            <div >  
                <aside class="">
                  <div class="fixed inset-0 flex ">                  
                    <div class="absolute flex h-screen  "
                        :class="[right ? 'right-10 flex-column ' : 'left-0 flex-row-reverse' ]">
                        <div  class=" bg-blue-600 transition-all duration-700 overflow-hidden"
                                :class="[open ? 'openSidebar' : 'closeSidebar ']">         
                            <div class="inline layout-profile" >                   
                                <button
                                    @click.prevent="toggle()"
                                        class="pr-3 fixed pt-3 w-20 my-auto text-white  text-center focus:outline-none  transition-color duration-300 pi pi-bars aligh-center"
                                        style="font-size: 24px;">                       
                                </button>               
                                <div class=" sidebar-content ">
                                    <div class="text-center ml-28 mt-12" >
                                        <img class=" border-2 rounded-full border-white-300" src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png" alt="" style="height: 80px">
                                        <h6 class="text-white font-bold mt-2">{{name}}</h6>
                                    </div>             
                                </div>
                            </div> 
     <!--  -------------------------Menu--------------------------------  -->  
                            <div v-if="role_id == 0" class="">              
                                <div class=" text-white hover:bg-blue-500 " >                  
                                    <div class="overflow-hidden p-3 text-center  ">
                                       <router-link :to="{name: 'dashboard'}" class="flex"  style="color: white">
                                        <span class="material-symbols-outlined " style="font-size: 28px;">feed</span>
                                        <p class="ml-4  mt-2 menu-text"> {{$t('Applicant Form')}}</p>               
                                       </router-link>     
                                    </div>                   
                                </div> 
                                <div class=" text-white hover:bg-blue-500" >                  
                                    <div class="overflow-hidden p-3 text-center ">
                                       <router-link :to="{name: 'Form'}" class="flex"  style="color: white">
                                        <span class="material-symbols-outlined" style="font-size: 28px;">preview</span>
                                        <p class="ml-4  mt-2"> {{$t('PreviewForm')}}</p>               
                                       </router-link>     
                                    </div>                   
                                </div> 
                                <div class=" text-white hover:bg-blue-500" >                  
                                    <div class="overflow-hidden p-3 text-center ">
                                       <router-link :to="{name: 'Account'}" class="flex"  style="color: white">
                                        <span class="material-symbols-outlined" style="font-size: 28px;">account_circle</span>
                                        <p class="ml-4  mt-2"> {{$t('Account')}}</p>               
                                       </router-link>     
                                    </div>                   
                                </div>  
                            </div>
     <!-- _____________________________________For admin________________________________________ -->
                            <div v-else class="test2 overflow-auto scrollbar-hide">
                                <div class=" text-white hover:bg-blue-500 " >                  
                                    <div class="overflow-hidden p-2 text-center ">
                                        <router-link :to="{name: 'dashboard'}" class="flex"  style="color: white">
                                            <span class="material-symbols-outlined " style="font-size: 28px;">dashboard</span>
                                            <p class="ml-4  mt-2 "> {{$t('Dashboard')}}</p>               
                                        </router-link>     
                                    </div>                   
                                </div> 
                                    <!-- Applicant List/Draft/Registered -->
                                <div class=" text-white hover:bg-blue-500 " >                  
                                    <div class="overflow-hidden p-2 text-center ">
                                        <router-link :to="{name: 'applicant'}" class="flex "  style="color: white">
                                            <span class="material-symbols-outlined " style="font-size: 30px;">people</span>
                                            <p class="ml-4  mt-2 "> {{$t('Applicant')}}</p>               
                                        </router-link>     
                                    </div>                   
                                </div>
                                <!-- Document check -->
                                <div class=" text-white hover:bg-blue-500" >                  
                                    <div class="overflow-hidden p-2 text-center w-full ">
                                        <router-link :to="{name: 'document'}" class="oerflow-visible flex"  style="color: white" :class="[open ? 'inline' : 'block ']">
                                            <span class="material-symbols-outlined " style="font-size: 28px;">task</span>
                                            <p class="ml-4  mt-2 menu-text "> {{$t('Document Check')}} </p>               
                                        </router-link> 
                                        <!-- <p class="ml-4  mt-2 "> {{$t('Document Check')}}</p>       -->
                                    </div>                   
                                </div>
                                 <!-- Payment -->
                                 <div class=" text-white hover:bg-blue-500 " >                  
                                    <div class="overflow-hidden p-2 text-center w-full ">
                                        <router-link :to="{name: 'payment'}" class="flex"  style="color: white">
                                            <span class="material-symbols-outlined " style="font-size: 28px;">payments</span>
                                            <p class="ml-4  mt-2 menu-text"> {{$t('Applicant Payment')}}</p>               
                                        </router-link>     
                                    </div>                   
                                </div>
                                <!-- Student-->
                                 <div class=" text-white hover:bg-blue-500 " >                  
                                    <div class="overflow-hidden p-2 text-center ">
                                        <router-link :to="{name: 'student'}" class="flex"  style="color: white">
                                            <span class="material-symbols-outlined " style="font-size: 28px;">school</span>
                                            <p class="ml-4  mt-2 "> {{$t('Student ')}}</p>               
                                        </router-link>     
                                    </div>                   
                                </div>

                                <!-- _______________FormSetting_____________  -->
                                <div class=" text-white hover:bg-blue-500 " >                  
                                        <a class="flex overflow-hidden  text-center ml-1 scrollbar-hide "  style="color: white" v-if="subFormSetting== false" @click="openSubSetting()">
                                            <span class="material-symbols-outlined mt-2 ml-1" style="font-size: 28px;">settings_applications</span>
                                            <p class="ml-4  pt-3 menu-text"> {{$t('Form Setting')}}</p>    
                                            <span class="material-symbols-outlined mt-2 ml-4 pt-2" style="font-size: 23px;">expand_more</span>             
                                        </a>                        
                                </div> 
                                <div class=" text-white  scrollbar-hide" v-if="subFormSetting== true" >                  
                                    <a class="flex overflow-hidden  text-center ml-1"  style="color: white" @click="closeSubSetting()">
                                            <span class="material-symbols-outlined mt-2 ml-1" style="font-size: 28px;">settings</span>
                                            <p class="ml-4  pt-3 menu-text"> {{$t('Form Setting')}}</p> 
                                            <span class="material-symbols-outlined mt-2 ml-4 pt-2" style="font-size: 23px;">expand_less</span>              
                                    </a>  
                                    <div class="overflow-hidden p-2 text-center  transition-all duration-500  " >
                                        <a  class="flex hover:bg-blue-500 pl-7 p-2"  style="color: white">
                                            <router-link :to="{name: 'AAT'}" class="flex "  style="color: white">
                                              <span class="material-symbols-outlined" style="font-size: 24px;">radio_button_checked</span>
                                              <p class="ml-4  mt-1 menu-text"> {{$t('Appplicant Academic Type')}}</p>               
                                           </router-link>                
                                        </a> 
                                        <a  class="flex hover:bg-blue-500 pl-7 p-2"  style="color: white">
                                            <router-link :to="{name: 'Institute'}" class="flex "  style="color: white">
                                              <span class="material-symbols-outlined" style="font-size: 24px;">radio_button_checked</span>
                                              <p class="ml-4  mt-1"> {{$t('Institute')}}</p>               
                                           </router-link>                
                                        </a> 
                                        <a class="flex hover:bg-blue-500 pl-7 p-2 overflow-hidden"  >
                                            <router-link v-can="'smtp config'" :to="{ name: 'Section', params: { id: 1, locale } }" class="inline-flex" style="color: white;">
                                                <span class="material-symbols-outlined" style="font-size: 24px;">radio_button_checked</span>
                                                <p class="ml-4  mt-1">{{ $t('Section') }}</p>
                                            </router-link>            
                                        </a>  
                                        <a  class="flex hover:bg-blue-500 pl-7 p-2"  style="color: white">
                                            <router-link :to="{name: 'Ministry'}" class="flex"  style="color: white">
                                              <span class="material-symbols-outlined" style="font-size: 24px;">radio_button_checked</span>
                                              <p class="ml-4  mt-1"> {{$t('Ministry')}}</p>               
                                           </router-link>              
                                        </a>
                                        <a  class="flex hover:bg-blue-500 pl-7 p-2"  style="color: white">
                                            <router-link :to="{name: 'Degree'}" class="flex"  style="color: white">
                                              <span class="material-symbols-outlined" style="font-size: 24px;">radio_button_checked</span>
                                              <p class="ml-4  mt-1"> {{$t('Degree')}}</p>               
                                           </router-link>              
                                        </a> 
                                        <a  class="flex hover:bg-blue-500 pl-7 p-2"  style="color: white">
                                            <router-link :to="{name: 'AcademicYear'}" class="flex"  style="color: white">
                                              <span class="material-symbols-outlined" style="font-size: 24px;">radio_button_checked</span>
                                              <p class="ml-4  mt-1"> {{$t('Academic Year')}}</p>               
                                           </router-link>              
                                        </a> 
                                        <a  class="flex hover:bg-blue-500 pl-7 p-2"  style="color: white">
                                            <router-link :to="{name: 'ApplicantType'}" class="flex"  style="color: white">
                                              <span class="material-symbols-outlined" style="font-size: 24px;">radio_button_checked</span>
                                              <p class="ml-4  mt-1 menu-text"> {{$t('Applicant Type')}}</p>               
                                           </router-link>              
                                        </a>   
                                        <a  class="flex hover:bg-blue-500 pl-7 p-2"  style="color: white">
                                            <router-link :to="{name: 'StudentType'}" class="flex"  style="color: white">
                                              <span class="material-symbols-outlined" style="font-size: 24px;">radio_button_checked</span>
                                              <p class="ml-4 mt-1 menu-text"> {{$t('Student Type')}}</p>               
                                           </router-link>              
                                        </a>     
                                    </div>                    
                                </div>

                                <!-- Account -->
                                <div class=" text-white hover:bg-blue-500 " >                  
                                    <div class="overflow-hidden p-2 text-center w-full ">
                                        <router-link :to="{name: 'Account'}" class="flex"  style="color: white">
                                            <span class="material-symbols-outlined " style="font-size: 28px;">account_circle</span>
                                            <p class="ml-4  mt-2 "> {{$t('Account')}}</p>               
                                        </router-link>     
                                    </div>                   
                                </div>
                               <!-- Setting -->
                                 <div class=" text-white hover:bg-blue-500 " >                  
                                        <a class="flex overflow-hidden  text-center ml-1  "  style="color: white" v-if="openSetting== false" @click="clickOpenSetting()">
                                            <span class="material-symbols-outlined mt-2 ml-1" style="font-size: 28px;">settings</span>
                                            <p class="ml-4  pt-3 "> {{$t('Setting')}}</p>    
                                            <span class="material-symbols-outlined mt-2 ml-16 pt-2" style="font-size: 23px;">expand_more</span>             
                                        </a>                        
                                </div>  
                                <div class=" text-white scrollbar-hide " v-if="openSetting==true">                  
                                        <a class="flex overflow-hidden  text-center ml-1 scrollbar-hide "  style="color: white" @click="clickCloseSetting()">
                                            <span class="material-symbols-outlined mt-2 ml-1" style="font-size: 28px;">settings</span>
                                            <p class="ml-4  pt-3 "> {{$t('Setting')}}</p>    
                                            <span class="material-symbols-outlined mt-2 ml-16 pt-2" style="font-size: 23px;">expand_less</span>             
                                        </a>     
                                        <div class="overflow-hidden p-2 text-center  transition-all duration-500  ">
                                            <a  class="flex hover:bg-blue-500 pl-7 p-2"  style="color: white">
                                                <router-link :to="{name: 'email'}" class="flex "  style="color: white">
                                                    <span class="material-symbols-outlined" style="font-size: 24px;">mail</span>
                                                    <p class="ml-4  mt-1 menu-text"> {{$t('Email configuration')}}</p>               
                                                </router-link>                
                                            </a> 
                                            <a  class="flex hover:bg-blue-500 pl-7 p-2"  style="color: white">
                                                <router-link :to="{name: 'users'}" class="flex "  style="color: white">
                                                    <span class="material-symbols-outlined" style="font-size: 24px;">manage_accounts</span>
                                                    <p class="ml-4  mt-1 menu-text"> {{$t('User Management')}}</p>               
                                                </router-link>                
                                            </a> 
                                            <a  class="flex hover:bg-blue-500 pl-7 p-2"  style="color: white">
                                                <router-link :to="{name: 'roles'}" class="flex "  style="color: white" >
                                                    <span class="material-symbols-outlined" style="font-size: 24px;">verified_user</span>
                                                    <p class="ml-4  mt-1 menu-text"> {{$t('Role Permission')}}</p>               
                                                </router-link>                
                                            </a> 
                                            <a  class="flex hover:bg-blue-500 pl-7 p-2"  style="color: white">
                                                <router-link :to="{name: 'translations'}" class="flex "  style="color: white" >
                                                    <span class="material-symbols-outlined" style="font-size: 24px;">g_translate</span>
                                                    <p class="ml-4  mt-1 menu-text"> {{$t('Translate Management')}}</p>               
                                                </router-link>                
                                            </a> 

                                        </div>                   
                                </div> 
                            </div>                   
                        </div>               
                    </div> 
                </div>
            </aside>
            </div>
            <div class="layout-main overflow-hidden transition-all duration-700 float-right" 
               :class="[open ? 'openLayout ' :  'closeLayout  ']" >
                <header class="">
                    <Navbar></Navbar>
                </header>
                <div class=" " >
                    <router-view></router-view>
                </div>
                <AppFooter></AppFooter>
                <AppConfig :layoutMode="layoutMode" @layout-change="onLayoutChange" />
                <transition name="layout-mask">
                    <div class="layout-mask p-component-overlay" v-if="mobileMenuActive"></div>
                </transition>
            </div>
        </div>
    </div>
    <div class="navbar-nav " v-else>
        <Login/>
        <router-view />
    </div>
</template>

<script>
import { defineComponent, watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { SUPPORT_LOCALES } from './i18n'
import AppTopbar from './Components/Layout/AppTopbar.vue';
import AppConfig from './Components/Layout/AppConfig.vue';
import AppFooter from './Components/Layout/AppFooter.vue';
import AppMenu from './Components/Layout/AppMenu.vue';
import Login from './Components/Auth/Login.vue';
import Sidebar from '../js/components/Layout/Sidebar.vue'
import Navbar from '../js/components/Layout/Navbar.vue'
export default defineComponent({
    name: "App", 
    components: {
        AppTopbar,
        AppConfig,
        AppFooter,
        AppMenu,
        Login,
        Sidebar,
        Navbar
    },
    setup() {
        const router = useRouter()
        const { locale } = useI18n({ useScope: 'global' })
        const currentLocale = ref(locale.value)
        watch(router.currentRoute, route => {
            currentLocale.value = route.params.locale
        })
        watch(currentLocale, val => {
            router.push({
                name: router.currentRoute.value.name,
                params: { locale: val }
            })
        })
        return { locale, currentLocale, supportLocales: SUPPORT_LOCALES }
    },

    data() {
        return {
            isLoggedIn: false,
            layoutMode: 'static',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false,
            open: false,
            dimmer: true,
            right: false,
            name: null,
            role_id: null,
            photo: null,
            subFormSetting: false,
            openSetting: false
        }
    },

    created() {
        if (window.Laravel.isLoggedin && window.Laravel.user) {
            this.isLoggedIn = true
            this.name= window.Laravel.user.name
            this.role_id= window.Laravel.user.role_ids
            this.photo= window.Laravel.user.profile_photo
           
        }
    },

    watch: {
        $route() {
            this.menuActive = false;
            this.$toast.removeAllGroups();
        }
    },

    methods: {
        logout(e) {
            console.log('ss')
            e.preventDefault()
            this.$axios.get('/sanctum/csrf-cookie').then(response => {
                this.$axios.post('/api/logout')
                    .then(response => {
                        if (response.data.success) {
                            window.location.href = "/en/Login"
                        } else {
                            console.log(response)
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        },
        openSubSetting(){
          this.subFormSetting= true
        },
        closeSubSetting(){
            this.subFormSetting= false
        },
        clickOpenSetting(){
           this.openSetting= true
        },
        clickCloseSetting(){
          this.openSetting= false
        },
        toggle() {
          this.open = !this.open;
        },
        onWrapperClick() {
            if (!this.menuClick) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }
            this.menuClick = false;
        },
        onMenuToggle(e) {
            this.menuClick = true;
            if (this.isDesktop()) {
                if (this.layoutMode === 'overlay') {
                    if (this.mobileMenuActive === true) {
                        this.overlayMenuActive = true;
                    }
                    this.overlayMenuActive = !this.overlayMenuActive;
                    this.mobileMenuActive = false;
                }
                else if (this.layoutMode === 'static') {
                    this.staticMenuInactive = !this.staticMenuInactive;
                }
            }
            else {
                this.mobileMenuActive = !this.mobileMenuActive;
            }
            e.preventDefault();
        },
        onSidebarClick() {
            this.menuClick = true;
        },
        onMenuItemClick(event) {
            if (event.item && !event.item.items) {
                this.overlayMenuActive = false;
                this.mobileMenuActive = false;
            }
        },
        onLayoutChange(layoutMode) {
            this.layoutMode = layoutMode;
        },
        addClass(element, className) {
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        },
        removeClass(element, className) {
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        },
        isDesktop() {
            return window.innerWidth >= 992;
        },
        isSidebarVisible() {
            if (this.isDesktop()) {
                if (this.layoutMode === 'static')
                    return !this.staticMenuInactive;
                else if (this.layoutMode === 'overlay')
                    return this.overlayMenuActive;
            }
            return true;
        },
    },
    computed: {
        containerClass() {
            return ['layout-wrapper', {
                'layout-overlay': this.layoutMode === 'overlay',
                'layout-static': this.layoutMode === 'static',
                'layout-static-sidebar-inactive': this.staticMenuInactive && this.layoutMode === 'static',
                'layout-overlay-sidebar-active': this.overlayMenuActive && this.layoutMode === 'overlay',
                'layout-mobile-sidebar-active': this.mobileMenuActive,
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }];
        },
    },
    beforeUpdate() {
        if (this.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    },
})
</script>
<style>
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
.test2{
    height: 75%;
    overflow-y: scroll;
}
p{
    /* margin-left: 30px;
    position: relative;
    max-lines: 1;
    overflow: hidden; */
 
    
}
.menu-text{
    overflow: hidden; 
  text-overflow: ellipsis; 
  white-space: nowrap;
    
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

</style>
