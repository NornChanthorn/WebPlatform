<template>
	<div class="layout-topbar">
		<router-link to="/" class="layout-topbar-logo">
			<img alt="Logo" src="../../../../public/images/Poscar.png" />
		</router-link>
		<button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
			<i class="pi pi-bars"></i>
		</button>

		<button class="p-link layout-topbar-menu-button layout-topbar-button"
			v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
			<i class="pi pi-ellipsis-v"></i>
		</button>
		<ul class="layout-topbar-menu hidden lg:flex origin-top">
			<li>
				<div class="language">
					<SelectButton class="mt-1" id="locale-select" v-model="currentLocale" :options="supportLocales"
						aria-labelledby="single" />
				</div>
			</li>
			<li class="inline-flex">
				<button class="p-link layout-topbar-button mr-2">
					<i class="pi pi-user"></i>
					<span>Profile</span>
				</button>
				<div class="mr-3 mt-3 text-blue-700">
					{{ name }}
				</div>
			</li>
			<li>
				<Button label="Logout" class="p-button p-button-danger mt-1" @click="logout" />
			</li>
		</ul>
	</div>
</template>

<script>
import { watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { SUPPORT_LOCALES } from '../../i18n'
export default {
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
	methods: {
		logout(e) {
			console.log('ss')
			e.preventDefault()
			this.$axios.get('/sanctum/csrf-cookie').then(response => {
				this.$axios.post('http://127.0.0.1:8000/api/logout')
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
		onMenuToggle(event) {
			this.$emit('menu-toggle', event);
		},
		onTopbarMenuToggle(event) {
			this.$emit('topbar-menu-toggle', event);
		},
	},
	data() {
		return {
			name: null,
		}
	},
	created() {
		if (window.Laravel.user) {
			this.name = window.Laravel.user.name
		}
	},
}
</script>


