import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function ATTServices() {
    const ApplicantAcademicType = ref([])
    const ApplicantAcademicTypes = ref([])
    
    const Files = ref([])

    const errors = ref('')
    const router = useRouter()

    const getApplicantAcademicTypes = async () => {
        let response = await axios.get('/api/applicant_academic_types')
        ApplicantAcademicTypes.value = response.data.data
    }

    const showApplicantAcademicType = async (id) => {
        let response = await axios.get(`/api/applicant_academic_types/${id}`)
        ApplicantAcademicType.value = response.data.data
    }

    const storeApplicantAcademicType = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/applicant_academic_types', data)
            await router.push({
                name: 'AAT'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateApplicantAcademicType = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/applicant_academic_types/${id}`, ApplicantAcademicType.value)
            await router.push({
                name: 'AAT'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyApplicantAcademicType = async (id) => {
        await axios.delete(`/api/applicant_academic_types/${id}`)
    }

    const getFiles = async (id) => {
        let response = await axios.get(`/api/files/${id}`)
        Files.value = response.data.data
    }

    return {
        errors,
        ApplicantAcademicType,
        ApplicantAcademicTypes,
        getApplicantAcademicTypes,
        storeApplicantAcademicType,
        showApplicantAcademicType,
        updateApplicantAcademicType,
        destroyApplicantAcademicType,
        getFiles,
        Files,
    }
}
