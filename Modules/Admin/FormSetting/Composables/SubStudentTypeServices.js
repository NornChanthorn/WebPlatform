import { ref } from 'vue'
import axios from 'axios'

export default function SubStudentTypeServices() {

    const SubStudentTypes = ref([])

    const getSubStudentTypes = async (student_type_id) => {
        let response = await axios.get(`/api/get_sub_student_type_by_student_type/${student_type_id}`)
        SubStudentTypes.value = response.data.data
    }

    return {
        SubStudentTypes,
        getSubStudentTypes,
    }
}
