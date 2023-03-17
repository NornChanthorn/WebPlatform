import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function DegreeServices() {
    const degree = ref([])
    const degrees = ref([])

    const errors = ref('')
    const router = useRouter()

    const getDegrees = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/degree')
        degrees.value = response.data
    }

    const getDegree = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/degree/${id}`)
        degree.value = response.data.data
    }

    const storeDegree = async (data) => {
        errors.value = ''
        try {
            await axios.post('http://127.0.0.1:8000/api/degree', data)
            await router.push({ name: 'Degree' })     
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }

    }

    const updateDegree = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`http://127.0.0.1:8000/api/degree/${id}`, degree.value)        
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }else{
                console.log(e)
            }
        }
    }
    const destroyDegree= async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/degree/${id}`)
    }

    return {
        errors,
        degree,
        degrees,
        getDegrees,
        getDegree,
        storeDegree,
        updateDegree,
        destroyDegree,

    }
}