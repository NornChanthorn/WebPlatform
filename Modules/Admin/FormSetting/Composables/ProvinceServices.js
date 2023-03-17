import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function ProvinceServices() {
    const province = ref([])
    const provinces = ref([])

    const errors = ref('')
    const router = useRouter()

    const getProvinces = async () => {
        let response = await axios.get('/api/provinces')
        provinces.value = response.data.data
    }

    const showProvince = async (id) => {
        let response = await axios.get(`/api/provinces/${id}`)
        province.value = response.data.data
    }

    const storeProvince = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/provinces', data)
            await router.push({
                name: 'provinces'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateProvince = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/provinces/${id}`, province.value)
            await router.push({
                name: 'provinces'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyProvince = async (id) => {
        await axios.delete(`/api/provinces/${id}`)
    }

    return {
        errors,
        province,
        provinces,
        getProvinces,
        storeProvince,
        showProvince,
        updateProvince,
        destroyProvince,
    }
}
