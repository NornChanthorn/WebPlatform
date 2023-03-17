import {
    ref
} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function StudentTypeServices() {

    const StudentTypes = ref([])
    const st_type = ref([])
    const subStudent= ref([])
    const subStudents= ref([])

    const errors = ref('')
    const router = useRouter()

    const getStudentTypes = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/student_types')
        StudentTypes.value = response.data.data
        console.log(StudentTypes)
    }
    const getSubStudents= async()=>{
        let response = await axios.get('http://127.0.0.1:8000/api/student_types')
        subStudents.value = response.data.data
        console.log(StudentTypes)
    }

    const getSt_type = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/student_types/${id}`)
        st_type.value = response.data.data
    }
    const getSubStudent = async (id) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/subStudent/${id}`)
        subStudent.value = response.data.data
    }

    const storeSt_type = async (data) => {
        errors.value = ''
        try {
            await axios.post('http://127.0.0.1:8000/api/student_types', data)
            await router.push({
                name: 'StudentType'
            })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }
    }

    const updateSt_type = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`http://127.0.0.1:8000/api/student_types/${id}`, st_type.value)

        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }
    }
    const destroySt_type = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/student_types/${id}`)
    }
    const storeSubStudent = async (data) => {
        errors.value = ''
        try {
            await axios.post('http://127.0.0.1:8000/api/subStudent', data)
            await router.push({
                name: 'StudentType'
            })

        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.message
                }
            }
        }
    }
    return {
        StudentTypes,
        st_type,
        errors,
        subStudent,
        getStudentTypes,
        updateSt_type,
        storeSt_type,
        destroySt_type,
        storeSt_type,
        storeSubStudent,
        getSubStudent,
        getSubStudents,
        getStudentTypes,
        getSt_type
    }
}
