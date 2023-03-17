<template> 
    <body class="h-100  w-full">   
        <div class="columns-2  gaps-3 ">
            <div class="w-full  h-screen sm:w-10/12 sm:relative text-center">
                <div class="ml-12 pt-52 xl:ml-36 lg:ml-36">
                    <img src="../../../../public/images/Poscar.png" alt="" class=" text-center sm:static md:ml-4 sm:ml-3  lg:w-80 sm:w-9/12 ">
                </div>
            </div>
            <div class="bg-blue-500 h-screen">
                <div class="pt-32">
                    <h3 class="text-2xl text-white text-center text-bold ">Login</h3>
                    <div v-if="error" class="">
                        <span class="text-red-500 xl:ml-40 lg:ml-36 md:ml-24 sm:12 ml-12">{{error}}</span>
                    </div>
                    <form action="" class="text-center mt-2">
                        <InputText id="username" type="email " v-model="email" class="w-7/12 " placeholder="Email" 
                        :class="{ 'p-invalid': submitted &&!email }"/><br>
                        <small class="p-error" v-if="submitted && !email">Email is required.</small><br>
                        <InputText id="username" type="password" :feedback="false" v-model="password" class="w-7/12" placeholder="Password" 
                        :class="{ 'p-invalid': submitted &&!password }"/><br>
                        <small class="p-error" v-if="submitted && !password">Password is required.</small>
                        <br>
                        <Button label="Submit" @click="handleSubmit" class="bg-blue-700 text-white w-7/12"></Button><br><br>
                        <div v-for="course in newCourse" :key="course.id">
                           <Button label="Register" v-if="course.dt_registration_deadline > currentDate()" class=" w-7/12 p-button-success" @click="Register"></Button>
                        </div>
                        
                    </form>
                    <div class="text-center mt-2">
                        <a class="text-blue-200 hover:text-blue-500" @click="openResetDialog">Forget password?</a>
                    </div>
                </div>           
            </div>
        </div>
        <!-- check on reset password via email -->
        <Dialog header="Reset Password" v-model:visible="ResetDialog" :modal="true"  :filters="filters"  :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width: '45vw'}">
            <div class="field ml-16">
                <h5 class=" p-2">Enter email to reset your password</h5>
                <label for="name" class="w-24">Email <span class="text-red-600">*</span></label>
                <InputText
                v-model="email"
                required="true"
                autofocus
                v-bind:class="{'is-invalid' : errorEmail, 'is-valid': infoEmail}"/>
                <div class="invalid-feedback">{{errorEmail}}</div>
                <div class="valid-feedback">{{infoEmail}}</div>
            </div>
            <template #footer>
                <div class="justify-between flex w-75 ml-16">
                    <Button label="Cancel" icon="pi pi-times" class="p-button-secondary" @click="ResetDialog=false" />
                    <Button label="Send" icon="" class="p-button-success" @click="sendToken()" />
                </div>
            </template>
        </Dialog>
    </body>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            error: null,
            userPermission: '',
            userRole: '',
            isLoggedin: true,
            ResetDialog: false,
            isLoading: false,
            emailSent: false,
            errorEmail: null,
            token: '',
            errrorNewPassword: '',
            passwordAgain: '',
            errorPasswordAgain: '',
            tokenValid: false,
            infoEmail: null,
            submitted: false,
            newCourse: []
        }
    },
    created(){
         this.checkCourse()
    },
    methods: {
        getRole() {
            this.$axios.get('/sanctum/csrf-cookie').then(response => {
                this.$axios.get('http://127.0.0.1:8000/api/users', {
                    email: this.email,
                    id: this.id,
                })
                    .then(response => {
                        console.log(response.data)
                    })
            })
        },
        
        handleSubmit(e) {
            e.preventDefault()
            if (this.password.length > 0 && this.email.length>0) {
                this.$axios.get('/sanctum/csrf-cookie').then(response => {
                    this.error='';
                    this.submitted= true,
                    this.$axios.post('http://127.0.0.1:8000/api/login', {
                        email: this.email,
                        password: this.password
                    }).then(
                        res=>{
                            if(res.data.success==true){
                                this.getUserPerm();
                                this.getUserRole();
                                this.$router.go('/dashboard');
                            }else{

                                
                                
                            }
                        }       
                    ).catch(er=>{
                        if(er.response.status===422){
                            this.error= er.response.data.message
                        }else{
                            this.error= "Email and Password not match"
                        }
                    })
                        
                })
            }else {
                this.error= "Field required!"
            }
        },
        getUserPerm() {
            this.$axios.get('http://127.0.0.1:8000/api/getUserPerm').then(response => {
                this.userPermission = response.data;
                localStorage.setItem("permissions", JSON.stringify(this.userPermission));
            })
        },
        getUserRole() {
            this.$axios.get('http://127.0.0.1:8000/api/getUserRole').then(response => {
                this.userRole = response.data;
                localStorage.setItem("roles", JSON.stringify(this.userRole));
            })
        },
        openResetDialog() {
            this.ResetDialog = true
        },

        async sendToken() {
            this.errorEmail = null;
            if (!this.email) {
                this.errorEmail = 'Email address is required';
            }
            if (!this.errorEmail) {
                const data = {
                    email: this.email
                }
                axios.post('sendToken', data).then(
                    res => {
                        this.infoEmail = 'Email sent'
                    }
                ).catch(er => {
                    this.errorEmail = er.response.data.er
                })
            }
        },
        Register(){
            this.$router.push({name:'register'});
        },
        async checkCourse(){
            await axios.get('http://127.0.0.1:8000/api/applicant_academic_types').then(
            res=>{
                this.newCourse= res.data.data
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
