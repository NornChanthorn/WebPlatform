<template>

	<div class="layout-menu-container  ">
		<div class="layout-menu " v-if="role_ids == 1">
			<li>
				<ul>
					<router-link  :to="{ name: 'applicantForm', params: { locale } }">	
						<span class="material-symbols-outlined mr-3">save_as</span>
						{{ $t('Applicant Form')}}
				    </router-link>
				</ul>
			</li>
			<li>
				<ul>
					<router-link :to="{ name: 'Form', params: { locale } }">
						<span class="material-symbols-outlined mr-3 ">inventory</span>
						{{ $t('preview applicant form') }}
					</router-link>
				</ul>
			</li>
			<li>
				<ul>
					<router-link :to="{ name: 'Account', params: { locale } }">
						<i class="material-symbols-outlined mr-3 mb-2">account_circle</i>
						{{ $t('Account') }}
					</router-link>
				</ul>
			</li>
		</div>
		<div class="layout-menu" v-else>
			<!-- DASHBOARD -->
			<li>
				<ul>
					<router-link :to="{ name: 'dashboard', params: { locale } }">
						<i class="material-symbols-outlined mb-2 mr-2">dashboard_customize</i>
						{{ $t('Dashboard') }}
					</router-link>
				</ul>
			</li>
			<!-- Applicant List/Draft/Registered -->
			<li>
				<ul>
					<router-link :to="{ name: 'applicant', params: { locale } }">
						<i class="material-symbols-outlined mb-1 mr-2">supervised_user_circle</i>
						{{ $t('Applicants') }}
					</router-link>
				</ul>
			</li>
			<!-- Document Check -->
			<li>
				<ul>
					<router-link :to="{ name: 'document', params: { locale } }">
						<i class="material-symbols-outlined mb-1 mr-2">inventory</i>
						{{ $t('Applicant Document Check') }}
					</router-link>
				</ul>
			</li>
			<!-- Payment -->
			<li>
				<ul>
					<router-link :to="{ name: 'payment', params: { locale } }">
						<i class="material-symbols-outlined mb-1 mr-2">payments</i>
						{{ $t('Applicant Payment') }}
					</router-link>
				</ul>
			</li>
			<!-- Report -->
			<li>
				<ul>
					<router-link :to="{ name: 'report', params: { locale } }">
						<i class="material-symbols-outlined mb-1 mr-2">summarize</i>
						{{ $t('Report') }}
					</router-link>
				</ul>
			</li>
			<!-- Student -->
			<li>
				<ul>
					<router-link :to="{ name: 'student', params: { locale } }">
						<i class="material-symbols-outlined mb-1 mr-2">productivity</i>
						{{ $t('Student') }}
					</router-link>
				</ul>
			</li>
			<!-- FORM SETTING -->
			<li>
				<a v-if="subFormSetting == false" @click="openSubFormSetting"
					v-can:any="'department list|district list|province list|foreign-languages list|section list'">
					<i class="material-symbols-outlined mb-2 mr-2">file_copy</i>
					<ul>
						{{ $t('Form setting') }}
					</ul>
					<i class="material-symbols-outlined menuitem-toggle-icon">expand_more</i>
				</a>
				<a v-else @click="closeSubFormSetting" class="text-blue-500 font-bold">
					<i class="material-symbols-outlined mb-2 mr-2">file_copy</i>
					<ul>
						{{ $t('Form setting') }}
					</ul>
					<i class="material-symbols-outlined menuitem-toggle-icon">expand_less</i>
				</a>
				<ul v-if="subFormSetting == true">
					<ul>
						<router-link :to="{ name: 'AAT', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('Applicant Academic Type') }}
						</router-link>
					</ul>

					<ul>
						<router-link v-can="'department list'" :to="{ name: 'departments', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('Department') }}
						</router-link>
					</ul>

					<ul>
						<router-link v-can="'district list'" :to="{ name: 'districts', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('District') }}
						</router-link>
					</ul>

					<ul>
						<router-link v-can="'province list'" :to="{ name: 'provinces', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('Province') }}
						</router-link>
					</ul>

					<ul>
						<router-link v-can="'foreign-languages list'"
							:to="{ name: 'foreignlangs', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('Foreign Languages') }}
						</router-link>
					</ul>

					<ul>
						<router-link v-can="'academic-year list'" :to="{ name: 'AcademicYear', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('Academic year') }}
						</router-link>
					</ul>

					<ul>
						<router-link v-can="'applicant-type list'" :to="{ name: 'ApplicantType', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('Applicant type') }}
						</router-link>
					</ul>

					<ul>
						<router-link v-can="'ministry list'" :to="{ name: 'Ministry', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('Ministry') }}
						</router-link>
					</ul>

					<ul>
						<router-link v-can="'institute list'" :to="{ name: 'Institute', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('Institute') }}
						</router-link>
					</ul>
					<ul>
						<router-link v-can="'degree list'" :to="{ name: 'Degree', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('Degree') }}
						</router-link>
					</ul>
					<ul>
						<router-link v-can="'section list'" :to="{ name: 'Section', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('Section') }}
						</router-link>
					</ul>
					<ul>
						<router-link v-can="'student-type list'" :to="{ name: 'StudentType', params: { locale } }">
							<i class="material-symbols-outlined ml-3 mr-2 text-sm">radio_button_checked</i>
							{{ $t('Student type') }}
						</router-link>
					</ul>
				</ul>
			</li>
			<!-- SETTINGS -->
			<li>
				<a v-if="subSetting == false" @click="openSubSetting">
					<i class="material-symbols-outlined mb-2 mr-2">settings</i>
					<ul>
						{{ $t('Setting') }}
					</ul>
					<i class="material-symbols-outlined menuitem-toggle-icon">expand_more</i>
				</a>
				<a v-else @click="closeSubSetting" class="text-blue-500 font-bold">
					<i class="material-symbols-outlined mb-2 mr-2 ">settings</i>
					<ul>
						{{ $t('Setting') }}
					</ul>
					<i class="material-symbols-outlined menuitem-toggle-icon">expand_less</i>
				</a>
				<ul v-if="subSetting == true">
					<ul>
						<router-link v-can="'smtp config'" :to="{ name: 'smtps', params: { id: 1, locale } }">
							<i class="material-symbols-outlined ml-2 mb-1 mr-2 text-2xl">mail</i>
							{{ $t('Email Configuration') }}
						</router-link>
					</ul>
					<ul>
						<router-link v-can="'role list'" :to="{ name: 'roles', params: { locale } }">
							<i class="material-symbols-outlined ml-2 mb-1 mr-2 text-2xl">admin_panel_settings</i>
							{{ $t('Role Management') }}
						</router-link>
					</ul>
					<ul>
						<router-link :to="{ name: 'users', params: { locale } }">
							<i class="material-symbols-outlined ml-2 mb-1 mr-2 text-2xl">group</i>
							{{ $t('User Management') }}
						</router-link>
					</ul>
					<ul>
						<router-link v-can="'translation list'" :to="{ name: 'translations', params: { locale } }">
							<i class="material-symbols-outlined ml-2 mb-1 mr-2 text-2xl">translate</i>
							{{ $t('Translation Management') }}
						</router-link>
					</ul>
				</ul>
			</li>
			<li>
				<ul>
					<router-link :to="{ name: 'Account', params: { locale } }">
						<i class="material-symbols-outlined mb-1 mr-2">account_circle</i>
						{{ $t('Account') }}
					</router-link>
				</ul>
			</li>
		</div>
	</div>
</template>
<script>
import { defineComponent, watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { SUPPORT_LOCALES } from '../../i18n'
export default defineComponent({
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

		const subSetting = ref(false);
		const openSubSetting = () => {
			subSetting.value = true;
		}
		const closeSubSetting = () => {
			subSetting.value = false;
		}
		const subFormSetting = ref(false);
		const openSubFormSetting = () => {
			subFormSetting.value = true;
		}
		const closeSubFormSetting = () => {
			subFormSetting.value = false;
		}
		return { locale, currentLocale, supportLocales: SUPPORT_LOCALES, subSetting, openSubSetting, closeSubSetting, subFormSetting, openSubFormSetting, closeSubFormSetting }
	},
	data() {
		return {
			role_ids: null,
		}
	},
	created() {
		if (window.Laravel.user) {
			this.role_ids = window.Laravel.user.role_ids
		}
	},
})
</script>
