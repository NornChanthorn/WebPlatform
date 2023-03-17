<template>   
 <body class="ml-24">
     <Toast></Toast>
        <div class="columns-2 w-10/12  flex space-x-16 split p-3 mt-4 lg:ml-32 xl:ml-24 md:ml-2 " style="height: 50vh" >
            <div class="mt-2">  
                <div class=" " >
                 
                    <template v-if="preview" >
                        <img :src="preview" class="rounded" style="width: 150px;" />         
                    </template>
                    <template v-else >
                        <div class="lg:bg-gray-400 md:bg-gray-400 xl:bg-gray-400 bg-gray-400" style="width: 145px; height: 145px;"> </div>              
                    </template> 
                    <div class="bg-blue-500 text-white p-1 text-center relative">
                        <label for="my-file" class="p-1 " :to="{params: {locale}}">{{$t('change profile')}}</label>
                        <input type="file" accept="image/*" @change="previewImage" class="hidden"   id="my-file"> 
                    </div>
                    <Button v-if="preview" :label="$t('save')" class="w-full mt-3" ></Button>
                </div>                                      
            </div>
            <Divider layout="vertical" />
            <div class=" lg:w-1/2 xl:w-1/2 "> 
                <div class="  w-full xl:px-7 lg:px-5 md:px-5 sm:p-1 p-1">
                    <div class="w-full lg:w-11/12">
                        <label for="name" class="w-24 ml-1" :to="{  params: { locale } }">{{ $t('Name') }}</label><br>
                        <InputText id="name " v-model="user.name" required="true" autofocus class="w-full"/> <br> <br>
                        <label for="name" class="w-24 ml-1 " :to="{  params: { locale } }">{{ $t('Email') }} </label><br>
                        <InputText id="name" v-model="user.email" required="true" autofocus class="w-full" />        
                    </div>
                    <div class="xl:flex lg:flex md:flex mt-3 w-full xl:justify-between lg:justify-between  md:justify-between sm:inline  ">
                         <Button class="sm:p-buttom-sm" @click="update()" :to="{params: {locale}}" :label="$t('save')"></Button>
                         <Button class="sm:p-buttom-sm" @click="openChangePass" :to="{params: {locale}}" >{{$t('Change password')}}</Button> 
                    </div> 
                    <br>        
                </div> 
            </div>
        </div>
        <Dialog :header="$t('Change password')" v-model:visible="displayPass" :style="{width: '40vw'}" :to="{params: {locale}}">
            <div class="field xl:ml-16 lg:ml-16 md:ml-12 sm:ml-8 ml-4 mt-2">  
                <div v-if="error">
                    <span class="text-red-400 ">{{error}}</span>
                </div>               
                <form action="" class="sidebar">
                    <label for="Name" class="w-24 mt-2 " :to="{params : {locale}}"> {{$t('Current password')}}<span class="text-red-600 ">*</span></label><br>
                    <InputText id="name" v-model.trim="form.current_password" required="true" autofocus 
                    :class="{ 'p-invalid': submitted && !form.current_password}" /> <br>
                    <small class="p-error " v-if="submitted && !form.current_password" :to="{params: {locale}}">{{$t('current password is required')}}</small> <br>

                    <label for="name" class="w-24 mt-2 " :to="{params : {locale}}">{{$t('New password')}} <span class="text-red-600 ">*</span></label><br>
                    <Password v-model="form.new_password" toggleMask     
                    :class="{ 'p-invalid': submitted && !form.new_password}" /> <br>
                    <small class="p-error " v-if="submitted && !form.new_password" :to="{params: {locale}}">{{$t('password is required')}}</small><br>

                    <label for="name" class="w-24 mt-2 " :to="{params : {locale}}">{{$t('Confirm password')}}<span class="text-red-600 ">*</span></label><br>
                    <Password v-model="form.new_confirm_password" toggleMask      
                    :class="{ 'p-invalid': submitted && !form.new_confirm_password}" /> <br>
                    <small class="p-error " v-if="submitted && !form.new_confirm_password" :to="{params: {locale}}">{{$t('confirm password is required')}}</small> 
                    <br>
                </form>
            </div>
            <template #footer>
                     <div class="justify-between flex w-9/12 xl:ml-16 lg:ml-16 md:ml-12 sm:ml-8 ml-4">
                    <Button :label="$t('Cancel')" icon="pi pi-times" class="p-button-secondary" @click="closeBasic" :to="{params : {locale}}"/>
                    <Button :label="$t('Save')" icon="pi pi-check pi-success" class="p-button-success" :to="{params : {locale}}" @click="changePass()" />
                    </div>         
            </template>                       
        </Dialog>
    </body>
</template>
<script>
import { defineComponent, watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { SUPPORT_LOCALES } from '../../i18n'
export default{
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
    data(){
        return{
            displayUpdate: false,
            displayPass: false,
            user:{
                name: '',
                email: '',
                password: '',
           },
           form: {
              current_password: '',
              new_password: '',
              new_confirm_password: '',
           },
          errors:{},
          preview: null,
          image: null,
          preview_list: [],
          image_list: [],   
          error: null,  
          submitted :false,    
        }
    },
    created(){
       this.getUser()
    },
    methods: {
        previewImage: function(event) {
               var input = event.target;
               if (input.files) {
               var reader = new FileReader();
               reader.onload = (e) => {
                  this.preview = e.target.result;
               }
               this.image=input.files[0];
               reader.readAsDataURL(input.files[0]);
               }
            },
        openUpdate(){
            this.displayUpdate= true;
        },
        closeBasic(){
            this.displayUpdate= false;
            this.displayPass= false
        },
        openChangePass(){
            this.displayPass= true;
        },
        getUser(){
            axios.get('http://127.0.0.1:8000/api/getUser').then(
              res=>{
                this.user= res.data
                console.log(res)            
            }).catch(er=>{
                console.log(er)
            })
        },
        update(){
            this.submitted= true,
            axios.put('http://127.0.0.1:8000/api/update', this.user).then(
               res=>{
                this.getUser()
                this.closeBasic()
                this.$router.push({name: 'Account'})
                this.$toast.add({severity:'info', summary:'Sucessful', detail:'Your update is successfully', life: 3000});
               }
            ).catch(er=>{
                console.log(er)
            })
        },
        async changePass(){
            this.error= '',
            this.submitted= true,
            await axios.put('http://127.0.0.1:8000/api/changePass', this.form).then(
                res=>{
                    console.log(res)
                    this.closeBasic()
                    this.getUser()
                    this.$router.push({name: 'Account'})
                }
            ).catch(er=>{
                if(er.response.status === 422){
                    this.error=  er.response.data.message
                }            
            })
        }     
    }
   
}

</script>
<style>  
    .pf img{
      
        width: 185px;
        z-index: -1;
        margin-right: 20px;
       
    
      
        
    }
    .app{
        width: 100%;
    }
    
</style>