import {
    ref
} from 'vue'
import axios from 'axios'

export default function ApplicantServices() {
    const applicant = ref([])
    const applicants = ref([])
    const errors = ref('')
    const getRegisteredApplicants = async (id) => {
        let response = await axios.get(`/api/registered_applicants/${id}`)
        applicants.value = response.data.data
    }

    return {
        errors,
        applicant,
        applicants,
        getRegisteredApplicants,
    }
}
