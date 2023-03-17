<template>
    
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-1 rounded dark:bg-gray-900 w-full">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center ">
        <img src="../../../../assets/622876d1e94c5.png" class="lg:h-20 lg:ml-2 xl:ml-2 xl:h-20 md:h-16 sm:h-12 h-9" alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
        <li>
          <div class="language">
            <SelectButton class="mt-1"  v-model="currentLocale" :options="supportLocales"
              aria-labelledby="single" />
          </div>
        </li>
        <li class="inline-flex">
          <button class="p-link space-x-3 mr-2 p-2 ">
            <i class="pi pi-user border border-black rounded p-1 "></i>
            <span>{{ name }}</span>
          </button>
        </li>
        <li>
          <Button label="Logout" class="p-button-danger mt-1" @click="logout(e)"></Button>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
</template>
<script>
import { watch, ref } from 'vue'
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
          name: null,
   
       }
    },
    created() {
		if (window.Laravel.user) {
			this.name = window.Laravel.user.name
    
		}
	},
    methods:{
        logout(e) {
            axios.get('/sanctum/csrf-cookie').then(response => {
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
    }

}
</script>