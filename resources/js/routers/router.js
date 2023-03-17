import {
    createRouter,
    createWebHistory
} from 'vue-router'

import {
    setI18nLanguage,
    loadLocaleMessages,
    SUPPORT_LOCALES
} from '../i18n'

import App from '../App.vue';

export function setupRouter(i18n) {
    const locale = i18n.mode === 'legacy' ? i18n.global.locale : i18n.global.locale.value
    // setup routes
    const routes = [{
            name: 'App',
            path: '/:locale/',
            component: App,
            children: [{
                    name: 'dashboard',
                    path: '/:locale/',
                    component: () => import('../Components/Pages/Dashboard.vue')
                },
                //Applicants
                {
                    name: 'applicant',
                    path: '/:locale/applicant',
                    component: () => import('../../../Modules/Admin/Applicants/Components/Applicant.vue')
                },
                 //DocumentCheck
                 {
                    name: 'document',
                    path: '/:locale/payment',
                    component: () => import('../../../Modules/Admin/Document/Components/DocumentCheck.vue')
                },
                //Payment
                {
                    name: 'payment',
                    path: '/:locale/payment',
                    component: () => import('../../../Modules/Admin/Payment/Components/payment.vue')
                },
                //Report
                {
                    name: 'report',
                    path: '/:locale/report',
                    component: () => import('../../../Modules/Admin/Report/Components/report.vue')
                },
                 //Student
                 {
                    name: 'student',
                    path: '/:locale/student',
                    component: () => import('../../../Modules/Admin/Students/Components/Student.vue')
                },
                //Settings
                {
                    name: 'email',
                    path: '/:locale/Email',
                    component: () => import('../../../Modules/Admin/Settings/Components/EmailConfiguration/Email.vue'),
                    children: [{
                        name: 'smtps',
                        path: '/:locale/Settings/EmailConfiguration/SmtpSetting/:id',
                        component: () => import('../../../Modules/Admin/Settings/Components/EmailConfiguration/Smtp.vue')
                    }, ]
                },
                {
                    name: 'roles',
                    path: '/:locale/Settings/RoleManagement',
                    component: () => import('../../../Modules/Admin/Settings/Components/RoleManagement/Roles.vue')
                },
                {
                    name: 'users',
                    path: '/:locale/Settings/UserManagement',
                    component: () => import('../../../Modules/Admin/Settings/Components/UserManagement/Users.vue')
                },
                {
                    path: '/:locale/Settings/LanguageManagement',
                    name: 'translations',
                    component: () => import('../../../Modules/Admin/Settings/Components/Translations/Translation.vue')
                },

                //FORM SETTING//
                {
                    name: 'AAT',
                    path: '/:locale/FormSetting/AAT',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/ApplicantAcademicType/AAT.vue'),
                },

                {
                    name: 'departments',
                    path: '/:locale/Settings/Department',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/Department/Departments.vue')
                },

                {
                    name: 'provinces',
                    path: '/:locale/FormSetting/Province',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/Province/Province.vue')
                },

                {
                    name: 'districts',
                    path: '/:locale/FormSetting/District',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/District/District.vue')
                },
                {
                    name: 'Section',
                    path: '/:locale/FormSetting/Section',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/Section/Section.vue')
                },
                {
                    name: 'Institute',
                    path: '/:locale/FormSetting/Institute',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/Institute/Institute.vue')
                },
                {
                    name: 'Ministry',
                    path: '/:locale/FormSetting/Ministry',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/Ministry/Ministry.vue')
                },

                {
                    name: 'foreignlangs',
                    path: '/:locale/FormSetting/ForeignLang',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/ForeignLang/ForeignLang.vue')
                },

                {
                    path: '/:locale/Setting/FormSetting/studentType',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/StudentType/StudentType.vue'),
                    name: 'StudentType',

                },

                {
                    path: '/:locale/Setting/FormSetting/degree',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/Degree/Degree.vue'),
                    name: 'Degree'
                },

                {
                    path: '/:locale/Setting/FormSetting/academic',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/AcademicYear/AcademicYear.vue'),
                    name: 'AcademicYear'
                },

                {
                    path: '/:locale/Setting/FormSetting/AppplicanType',
                    component: () => import('../../../Modules/Admin/FormSetting/Components/ApplicantType/ApplicantType.vue'),
                    name: 'ApplicantType'
                },

                {
                    path: '/:locale/Account',
                    component: () => import('../Components/Pages/Account.vue'),
                    name: 'Account'
                },

                //Applicant Users
                {
                    path: '/:locale/ApplicantForm',
                    component: () => import('../../../Modules/User/ApplicantForm/Components/ApplicantForm.vue'),
                    name: 'applicantForm'
                },

                {
                    path: '/:locale/Form',
                    component: () => import('../../../Modules/User/PreviewApplicantForm/Components/form.vue'),
                    name: 'Form'
                },
            ]
        },

        //Authentication
        {
            name: 'login',
            path: '/:locale/login',
            component: () => import('../Components/Auth/Login.vue'),
        },
        {
            name: 'register',
            path: '/:locale/register',
            component: () => import('../Components/Auth/Register.vue'),
        },

        //PathMatch
        {
            path: '/:pathMatch(.*)*',
            redirect: () => `/${locale}`
        },

    ]

    // create router instance
    const router = createRouter({
        history: createWebHistory(),
        routes
    })

    // navigation guards
    router.beforeEach(async to => {
        const paramsLocale = to.params.locale

        // use locale if paramsLocale is not in SUPPORT_LOCALES
        if (!SUPPORT_LOCALES.includes(paramsLocale)) {
            return `/${locale}`
        }

        // load locale messages
        if (!i18n.global.availableLocales.includes(paramsLocale)) {
            await loadLocaleMessages(i18n, paramsLocale)
        }

        // set i18n language
        setI18nLanguage(i18n, paramsLocale)
    })

    return router
}
