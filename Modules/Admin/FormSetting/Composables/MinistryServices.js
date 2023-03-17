import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useMinistry() {
    const ministry = ref([])
    const ministries = ref([])

    const errors = ref('')
    const router = useRouter()

    const getMinistries = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/ministry')
        ministries.value = response.data
    }

    const getMinistry = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/ministry/${id}`)
        ministry.value = response.data.data
    }

    const storeMinistry = async (data) => {
        errors.value = ''
        try {
            await axios.post('http://127.0.0.1:8000/api/ministry', data)
            await router.push({ name: 'Ministry' })
           
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }

    }

    const updateMinistry = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`http://127.0.0.1:8000/api/ministry/${id}`, ministry.value)
           
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }
    }
    const destroyMinistry= async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/ministryy/${id}`)
    }

    return {
        errors,
        ministry,
        ministries,
        getMinistries,
        getMinistry,
        storeMinistry,
        updateMinistry,
        destroyMinistry,

    }
}