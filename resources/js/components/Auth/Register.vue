<template>
    <body class="h-100  w-full bg-white"> 
        <Toast/>   
        <div class="xl:flex lg:flex md:flex sm:inline  gaps-3 inline ">
            <div class="w-full md:h-screen sm:h-40 sm:w-10/12  text-center lg:ml-24 sm:bg-blue-500 md:bg-white bg-blue-400">
                <div class="lg:ml-12 pt-11  sm:ml-56 md:ml-24 md:mt-40 ml-48  ">
                    <img src="../../../../public/images/Poscar.png" alt="" class=" text-center sm:static md:ml-4 sm:ml-3  lg:w-80 sm:w-56 sm:mb-10 w-52 ">
                </div>
            </div>
            <div class="bg-blue-400  h-screen w-full">
                <div class="pt-12">
                    <h3 class="text-2xl text-white text-center text-bold ">ចុះឈ្មោះ</h3>
                    <div v-if="error" class="text-center">
                        <div >
                          <h6 class="text-red-500  ">{{error}}</h6>
                        </div>        
                    </div>      
                    <form action="" class="text-center mt-1">
                        <div class=" w-10/12 text-start ml-16 ">
                            <InputText id="email" type="email" v-model="form.email" class="w-11/12" placeholder="អ៊ីមែល"
                                 autocomplete="false" required="true"
                                :class="{ 'p-invalid': submitted && !form.email }"/> 
                                <br><small class="p-error" v-if="submitted && !form.email">សូមបំពេញអ៊ីមែល.</small><br>
                            <div class="columns-2  w-11/12 gap-3  flex">
                                <div class="w-full">
                                     <InputText type="text" v-model="form.kh_name" autocomplete="off" class="w-full" placeholder="ឈ្មោះជាអក្សរខ្មែរ"  :class="{ 'p-invalid': submitted && !form.kh_name }"/>
                                     <small class="p-error" v-if="submitted && !form.kh_name">សូមបំពេញឈ្មោះ.</small><br>
                                </div>
                                <div class="w-full">
                                    <InputText type="text" v-model="form.name" class="w-full" placeholder="ឈ្មោះជាអក្សរឡាតាំង" :class="{ 'p-invalid': submitted && !form.name }"/>
                                    <small class="p-error" v-if="submitted && !form.name">សូមបំពេញឈ្មោះជាអក្សរឡាតាំង.</small><br>
                                </div> 
                            </div>
                            <div class="columns-2  w-11/12 gap-2 mt-1 flex ">
                                <div class="col radio text-white space-x-5 flex">
                                    <div class="flex">
                                       <RadioButton name="gender" value="male" v-model="form.gender" class="" />
                                       <label for="rb1" class="ml-4">ប្រុស</label> 
                                    </div>
                                    <div class="flex">
                                       <RadioButton name="gender" value="femals" v-model="form.gender" class="" />
                                        <label for="" class="ml-4">ស្រី</label> 
                                    </div>
                                </div>
                                <div class="col w-full ">
                                    <InputText id="phonenumber" type="text" class="w-full ml-2" placeholder="លេខទូរស័ព្ទ" v-model="form.phone_number" 
                                     :class="{ 'p-invalid': submitted && !form.phone_number }" />   
                                    <small class="p-error" v-if="submitted && !form.phone_number">សូមបំពេញលេខទូរស័ព្ទ.</small><br>
                                </div>
                            </div>
                            <Calendar v-model="form.dob" inputId="icon" :showIcon="true" placeholder="ថ្ងៃខែឆ្នាំកំណើត" class="w-11/12 mt-1 " 
                            :class="{ 'p-invalid': submitted && !form.dob }"/> 
                            <br><small class="p-error" v-if="submitted && !form.dob">សូមបំពេញថ្ងៃខែកំណើត.</small><br>
                            <div class="columns-2  w-11/12 gap-2  flex ">
                                <div class="w-full">
                                    <InputText id="password1" type="password" v-model="form.password" class="w-full" placeholder="ពាក្យសម្ងាត់" autocomplete="false" 
                                    :class="{ 'p-invalid': submitted && !form.password }"/>
                                    <small class="p-error" v-if="submitted && !form.password">សូមបំពេញពាក្យសម្ងាត់.</small><br>
                                </div>
                                <div class="w-full">
                                    <InputText id="password2" type="password" v-model="form.password_confirmation" class="w-full" placeholder="បញ្ជាក់ពាក្យសម្ងាត់" autocomplete="false" 
                                    :class="{ 'p-invalid': submitted && !form.password_confirmation }"/><br>
                                    <small class="p-error" v-if="submitted && !form.password_confirmation">សូមបំពេញពាក្យសម្ងាត់.</small><br>     
                                </div>    
                            </div>
                            <div v-for="course in AAT" :key="course.id" class="text-white  relative flex">
                                <div v-if="course.dt_registration_deadline > currentDate()" class="space-x-5"  >
                                    <RadioButton  :value="course.display_name" optionValue="id" v-model="form.course_name" class="" />
                                    <label for="">{{course.display_name}}</label>       
                                </div>                    
                            </div>         
                            <small class="p-error" v-if="(submitted && !form.course_name)">សូមជ្រើសរើសវគ្គសិក្សា.</small><br> 
                            <Button label="ដាក់ស្នើ" class=" w-11/12 p-button-primary mt-3" @click="verify=true"></Button>
                            <Button label="ត្រឡប់ទៅទំព័រដើម" class=" w-11/12 p-button-success mt-3" @click="BackToLogin()" ></Button>   
                        </div>
                    </form>
                </div>     
            </div>
        </div>
        <Dialog v-model:visible="verify" :style="{ width: '450px' }"  :modal="true" class="p-fluid" header="Confirm" >
             <div class="ml-24">
                <h5>អ្នកបានជ្រើសរើស: {{form.course_name}}</h5>         
             </div>
             <template #footer >
                <div class="justify-between flex w-9/12 ml-16">
                     <Button label="យល់ព្រម" @click="register()" class="p-button-success  "></Button>
                    <Button label="បោះបង់" @click="closeVertify()" class="p-button-danger"></Button>
                </div>
              </template>
        </Dialog>
    </body>
</template>

<script>
export default {
    setup(){
    },
    
    data() {
        return {
            form: {
                name: '',
                kh_name: '',
                email: '',
                password: '',
                dob: '',
                phone_number: '',
                gender: '',
                course_name: '',
                course_id: '',
            },
            AAT: [],
            error: null,
            submitted: false,
            ResetDialog:false,
            isLoggedin: true,
            ATT_: [],
            verify: false,
            message: '',
        }
    },
    created(){
        this.showCourse();

    },
    methods: {
        showSuccess() {

        },
        async register() {
           this.submitted= true,
           this.message= ''  
           await axios.post('http://127.0.0.1:8000/api/register',this.form).then(
                res => {
                  this.form= res.data
                  this.closeVertify()       
                  this.$router.push({name: 'dashboard'})         
                }
            ).catch(er => {
                if(er.response.status==422){
                   this.error= er.response.data.message
                   this.closeVertify()
                }else{
                    console.log(er)
                    this.closeVertify()
                }
            })
        },
        BackToLogin(){
           this.$router.push({name: 'login'}) 
        },
        goHome(){
            this.$router.push({name: 'Form'})
        },
        openVerify(){   
            this.verify= true      
        },
        closeVertify(){
           this.verify= false
        },
        async showCourse(){
          await axios.get('http://127.0.0.1:8000/api/applicant_academic_types').then(
            res=>{
                this.AAT= res.data.data
                console.log(res)
            }
          )  
        },
        currentDate(){
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + 
            today.getSeconds();
            const dateTime = date+' '+time;   
            return dateTime;
        },
    },
    beforeRouteEnter(to, from, next) {
        if (window.Laravel.isLoggedin) {
            return next('dashboard');
        }
        next();
    }
}
</script>
