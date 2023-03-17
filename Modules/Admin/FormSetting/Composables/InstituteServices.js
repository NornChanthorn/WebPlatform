import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useInstitute() {
    const institute = ref([])
    const institutes = ref([])
    const errors = ref('')
    const router = useRouter()

    const getInstitutes = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/institute')
        institutes.value = response.data
    }

    const getInstitute = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/institute/${id}`)
        institute.value = response.data.data
    }

    const storeInstitute = async (data) => {
        errors.value = ''
        try {
            await axios.post('http://127.0.0.1:8000/api/institute', data)
            await router.push({ name: 'Institute' })   
        } catch (e) { 
            if(e.response.status===422){
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }else{
                console.log(e)
            }
            
        }

    }
    const updateInstitute = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`http://127.0.0.1:8000/api/institute/${id}`, institute.value)
           
        } catch (e) {    
            if(e.response.status===422){
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }else{
                console.log(e)
            }

        }
    }
    const destroyInstitute = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/institute/${id}`)
    }

    return {
        errors,
        institute,
        institutes,
        getInstitutes,
        getInstitute,
        storeInstitute,
        updateInstitute,
        destroyInstitute,

    }
}