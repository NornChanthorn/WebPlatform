<template>
    <div v-if="role_id== 0" class="card mt-7">
        <div class="ml-12 w-10/12">
            <h6 class="text-xl text-green-400 ">Your request have been approved</h6>
            <p>Congratulation ! </p>
        </div>
    </div>

    <div class="card" v-else>
        <div class="p-fluid grid">
            <div class="field col-12 md:col-4">
                <div
                    class="card hover:scale-105 transition duration-300 ease-in-out border-double border-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white">
                    <div class="inline-flex">
                        <p class="mr-3 text-6xl">7</p>
                        <p class="p-title text-xl leading-loose">ចំនួនបេក្ខជនបានដាក់ស្នើតាមអនទ្បាញ</p>
                    </div>
                    <p class="block leading-tight">Applicant count</p>
                </div>
            </div>
            <div class="field col-12 md:col-4">
                <div
                    class="card hover:scale-105 transition duration-300 ease-in-out border-double border-4 bg-gradient-to-r from-slate-600 to-slate-400 text-white">
                    <div class="inline-flex">
                        <p class="mr-3 text-6xl">5</p>
                        <p class="p-title text-xl leading-loose">ចំនួនបេក្ខជនបាននិងកំពុងបំពេញឯកសារតាមអនទ្បាញ</p>
                    </div>
                    <p class="block">Applicant draft count</p>
                </div>
            </div>
            <div class="field col-12 md:col-4">
                <div
                    class="card hover:scale-105 transition duration-300 ease-in-out border-double border-4 bg-gradient-to-r from-blue-800 to-blue-400 text-white">
                    <div class="inline-flex">
                        <p class="mr-3 text-6xl">12</p>
                        <p class="p-title text-xl leading-loose">ចំនួនសរុបបេក្ខជនទាំងអស់</p>
                    </div>
                    <p class="block">Total applicant count</p>
                </div>
            </div>
            <div class="field col-12 md:col-4">
                <div class="card hover:scale-105 transition duration-300 ease-in-out border-double border-4 bg-gradient-to-r from-green-600 to-green-400 text-white"
                    style="background-color:indianred; color:white">
                    <div class="inline-flex">
                        <p class="mr-3 text-6xl">4</p>
                        <p class="p-title text-xl leading-loose">ចំនួនបេក្ខជនបានពិនិត្យផ្ទៀងផ្ទាត់ឯកសារតាមអនទ្បាញ</p>
                    </div>
                    <p class="block">Approved applicant count</p>
                </div>
            </div>
            <div class="field col-12 md:col-4">
                <div
                    class="card hover:scale-105 transition duration-300 ease-in-out border-double border-4 bg-gradient-to-r from-amber-600 to-amber-400 text-white">
                    <div class="inline-flex">
                        <p class="mr-3 text-6xl">3</p>
                        <p class="p-title text-xl leading-loose">ចំនួនបេក្ខជនមិនទាន់បានពិនិត្យផ្ទៀងផ្ទាត់ឯកសារតាមអនទ្បាញ
                        </p>
                    </div>
                    <p class="block">Pending applicant count</p>
                </div>
            </div>
            <div class="field col-12 md:col-4">
                <div
                    class="card hover:scale-105 transition duration-300 ease-in-out border-double border-4 bg-gradient-to-r from-lime-600 to-lime-400 text-white">
                    <div class="inline-flex">
                        <p class="mr-3 text-6xl">2</p>
                        <p class="p-title text-xl leading-loose">ចំនួនបេក្ខជនបានពិនិត្យផ្ទៀងផ្ទាត់ឯកសារនៅសាលារួចរាល់</p>
                    </div>
                    <p class="block">Applicant document checked count</p>
                </div>
            </div>
            <div class="field col-12 md:col-4">
                <div
                    class="card hover:scale-105 transition duration-300 ease-in-out border-double border-4 bg-gradient-to-r from-sky-600 to-sky-400 text-white">
                    <div class="inline-flex">
                        <p class="mr-3 text-6xl">3</p>
                        <p class="p-title text-xl leading-loose">ចំនួនបេក្ខជនបានបង់ប្រាក់សុំសិទ្ធប្រលង</p>
                    </div>
                    <p class="block">Applicant payment count</p>
                </div>
            </div>
            <div class="field col-12 md:col-4">
                <div
                    class="card hover:scale-105 transition duration-300 ease-in-out border-double border-4 bg-gradient-to-r from-red-600 to-red-400 text-white">
                    <div class="inline-flex">
                        <p class="mr-3 text-6xl">3</p>
                        <p class="p-title text-xl leading-loose">
                            ចំនួនបេក្ខជនបានបដិសេធបន្ទាប់ពីពិនិត្យផ្ទៀងផ្ទាត់ឯកសារតាមអនទ្បាញ</p>
                    </div>
                    <p class="block">Rejected applicant count</p>
                </div>
            </div>
        </div>
        <div class="p-fluid grid">
            <div class="field col-12 md:col-6">
                <Chart type="polarArea" :data="chartData" :options="chartOptions" />
            </div>
            <div class="field col-12 md:col-6">
                <Chart type="doughnut" :data="chartData" :options="lightOptions" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {

    name: "Dashboard",
    setup() {
        const chartData = ref({
            datasets: [{
                data: [7, 5, 12, 4, 3, 2, 3, 3],
                backgroundColor: ["#FA4D00", "#183238", "#0300FF", "#29FF5A", "#D6FF0D", "#61FA00", "#26DFFF", "#FF1900"],
                label: 'My dataset'
            }],
            labels: ["Applicant count", "Applicant draft count", "Total applicant count", "Approved applicant count", "Pending applicant count", "Applicant document checked count", "Applicant payment count", "Rejected applicant count"]
        });

        const chartOptions = ref(
            {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: '#ebedef'
                        }
                    }
                }
            }
        );

        return { chartData, chartOptions }
    },
    data(){
        return{
            role_id: null

        }
    },
    created(){
        if (window.Laravel.isLoggedin && window.Laravel.user) {
            this.isLoggedIn = true
            this.role_id= window.Laravel.user.role_ids     
        }
    },
    beforeRouteEnter(to, from, next) {
        if (!window.Laravel.isLoggedin) {
            window.location.href = "/en/login";
        }
        next();
    },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bokor&display=swap');

.p-title {
    font-family: 'Bokor', cursive;
}
</style>