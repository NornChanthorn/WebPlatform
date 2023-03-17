import {
    ref
} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function ApplicantTypeServices() {

    const ApplicantTypes = ref([])
    const app_types= ref([])
    const app_type = ref([])
    const errors= ref([])
    const router = useRouter()
   

    const getApplicantTypes = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/applicant_type')
        ApplicantTypes.value = response.data
    }

    const getApp_types = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/applicant_type')
        app_types.value = response.data
    }
    const getApp_type = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/applicant_type/${id}`)
        app_type.value = response.data
    }

    const storeApp_type = async (data) => {
        errors.value = ''
        try {
            await axios.post('http://127.0.0.1:8000/api/applicant_type', data)
            await router.push({
                name: 'ApplicantType'
            })

        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }

    }

    const updateApp_type = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`http://127.0.0.1:8000/api/applicant_type/${id}`, app_type.value)
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }
    }
    const destroyApp_type = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/applicant_type/${id}`)
    }


    return {
        ApplicantTypes,
        app_type,
        app_types,
        errors,
        getApplicantTypes,
        getApp_type,
        storeApp_type,
        destroyApp_type,
        updateApp_type,
        getApp_types,
    }
}
