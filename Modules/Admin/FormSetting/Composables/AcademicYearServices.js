import { ref } from 'vue'
import axios from 'axios'


export default function AcademicYearServices() {

    const AcademicYears = ref([])

    const academics = ref([])
    const academic = ref([])
    const errors= ref('')

    const getAcademicYears = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/academic_years')
        AcademicYears.value = response.data.data
    }

    const getAcademics = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/academic_years')
        academics.value = response.data
    }

    const getAcademic = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/academic_years/${id}`)
        academic.value = response.data.data
    }

    const storeAcademic = async (data) => {
        errors.value = ''
        try {
            await axios.post('http://127.0.0.1:8000/api/academic_years', data)
            await router.push({ name: 'Academic' })     
        } catch (e) {
            if (e.response=== 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }
       

    }

    const updateAcademic = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`http://127.0.0.1:8000/api/academic_years/${id}`, academic.value)
           
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }
    }
    const destroyAcademic = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/academic_years/${id}`)
    }
    

    return {
        AcademicYears,
        academic,
        academics,
        getAcademicYears,
        getAcademics,
        storeAcademic,
        updateAcademic,
        destroyAcademic,
        getAcademic
    }
}
