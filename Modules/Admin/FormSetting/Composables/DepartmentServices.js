import {
    ref
} from 'vue'
import axios from 'axios'
import {
    useRouter
} from 'vue-router'

export default function DepartmentServices() {

    const department = ref([])
    const departments = ref([])

    const errors = ref('')
    const router = useRouter()

    const getDepartments = async () => {
        let response = await axios.get('/api/departments')
        departments.value = response.data
    }

    const showDepartment = async (id) => {
        let response = await axios.get(`/api/departments/${id}`)
        department.value = response.data.data
    }

    const storeDepartment = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/departments', data)
            await router.push({
                name: 'departments'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const updateDepartment = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/departments/${id}`, department.value)
            await router.push({
                name: 'departments'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const destroyDepartment = async (id) => {
        await axios.delete(`/api/departments/${id}`)
    }

    return {
        errors,
        department,
        departments,
        getDepartments,
        storeDepartment,
        showDepartment,
        updateDepartment,
        destroyDepartment,
    }
}
