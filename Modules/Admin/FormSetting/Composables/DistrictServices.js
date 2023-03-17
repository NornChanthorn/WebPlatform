import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function DistrictServices() {
    const district = ref([])
    const districts = ref([])

    const errors = ref('')
    const router = useRouter()

    const getDistricts = async () => {
        let response = await axios.get('/api/districts')
        districts.value = response.data.data
    }

    const showDistrict = async (id) => {
        let response = await axios.get(`/api/districts/${id}`)
        district.value = response.data.data
    }

    const storeDistrict = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/districts', data)
            await router.push({
                name: 'districts'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateDistrict = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/districts/${id}`, district.value)
            await router.push({
                name: 'districts'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyDistrict = async (id) => {
        await axios.delete(`/api/districts/${id}`)
    }

    return {
        errors,
        district,
        districts,
        getDistricts,
        storeDistrict,
        showDistrict,
        updateDistrict,
        destroyDistrict,
    }
}
