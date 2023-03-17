import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function SectionServices() {

    const Sections = ref([])
    const sections = ref([])
    const section = ref([])
    const errors= ref('')
    const department = ref([])
    const router = useRouter()

    const getSectionByDepartment = async (department_id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/sections_by_department/${department_id}`)
        Sections.value = response.data.data
    }

    const getSections = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/section')
        sections.value = response.data      
    }
    const getDepartment= async ()=>{
        let response = axios.get('http://127.0.0.1:8000/api/departments')
        department.value= response.data
        console.log(response)
    }
    const getSection = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/section/${id}`)
        section.value = response.data     
    }
    const updateSection = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`http://127.0.0.1:8000/api/section/${id}`, section.value)

        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }
    }
    const storeSection = async (data) => {
        errors.value = ''
        try {
            await axios.post('http://127.0.0.1:8000/api/section', data)
            await router.push({ name: 'Section' })        
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }
    }

    return {
        Sections,
        sections,
        section,
        errors,
        getSectionByDepartment,
        getSection,
        storeSection,
        getSections,
        getDepartment,
        updateSection,
        
    }
}
