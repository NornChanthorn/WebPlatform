<template>
    <body>
    <!-- <div class="mt-1 p-0 ml-12">
        <span class="pi pi-file" style="color: blue">  Preview Application form </span>
    </div> -->
    <main class="ml-2  w-11/12 h-auto" id="form">
        <div class="flex mt-4">
            <div class=" w-9/12 p-3">
                <div class="text-center">
                    <h5>ព្រះរាជាណាចក្រកម្ពុជា</h5>
                    <h5>ជាតិ សាសនា ព្រះមហាក្សត្ស</h5>
                </div>
            </div>
            <div class="p-3">
                <img  class="border border-blue-300 lg:w-52 md:w-32 sm:w-24 w-24" src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" alt="">
            </div>
        </div>
        <div class="ml-9">
            <div class="flex">
                <div class="p-3 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold">ព័ត៌មានផ្ទាល់ខ្លួន</div>
                <divider></divider>
            </div>
            <div class="columns-2 lg:ml-6 mt-5">
                <div class="flex ">
                    <label for="" class="w-1/2">ជ្រើសយកជំនាញ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ជា </label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5">
                <div class="flex ">
                    <label for="" class="w-1/2">គោត្តនាម និងនាម </label>
                    <p>{{user.kh_name}}</p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">អក្សរពុម្ពឡាតាំង </label>
                    <p>{{user.name}}</p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5">
                <div class="flex ">
                    <label for="" class="w-1/2">ភេទ </label>
                    <p>{{user.gender}}</p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ថ្ងៃខែឆ្នាំកំណើត </label>
                    <p>{{user.dob}}</p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">សញ្ជាតិ </label>
                    <p>ខ្មែរ</p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">អុីមែល </label>
                    <p>{{user.email}}</p>
                </div>
            </div>
            <!-- --------------------------------------------------- -->
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">លេខទូរស័ព្ទផ្ទាល់ខ្លួន </label>
                    <p>{{user.phone_number}}</p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">លេខទូរស័ព្ទ​(Telegram) </label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">មុខជំនាញឯកទេស</label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">លេខអត្តសញ្ញាណ​ប័ណ្ណឬឆាយា</label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ភាសាប្រលង</label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">កម្រិតវប្បធម៏ </label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">គ្រឹះស្ថានសិក្សា</label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">កម្រិតវប្បធម៏ទូទៅ </label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ពិការភាព </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ការពិពណ៍នាពិការភាព </label>
                    <p></p>
                </div>
            </div>
 <!-- ________________________________ទីកន្លែងកំណើត_________________________________ -->
            <div class="lg:ml-6 mt-5 ">ទីកន្លែងកំណើត​ : </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">កើតនៅភូមិ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ឃុំ/សង្កាត់</label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ស្រុក/ខណ្ឌ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">រាជធានី/ខេត្ត </label>
                    <p></p>
                </div>
            </div>
    <!-- _____________________________ទំនាក់ទំនង_______________________________________ -->
            <div class="flex mt-5">
                <div class="p-3 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold ">ទំនាក់ទំនង</div>
                <divider></divider>
            </div>
            <div class="lg:ml-6 mt-4 ">អាសយដ្ធានបច្ចុប្បន្ន​ : </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ផ្ទះ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ផ្លូវ </label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">កើតនៅភូមិ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ឃុំ/សង្កាត់</label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ស្រុក/ខណ្ឌ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">រាជធានី/ខេត្ត </label>
                    <p></p>
                </div>
            </div>

            <div class="lg:ml-6 mt-4 ">អ្នកដែលទាក់ទងបាននៅភ្នំពេញ: </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ឈ្មោះ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ត្រូវជាអ្វីនឹងអ្នក </label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ទីកន្លែងធ្វើការ/ផ្ទះ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">លេខទូរស័ព្ទ </label>
                    <p></p>
                </div>
            </div>
    <!-- _________________________________អំពីក្រុមគ្រួសារ_______________________________________ -->
            <div class="flex mt-5">
                <div class="p-3 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold">អំពីក្រុមគ្រួសារ</div>
                <divider></divider>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ព័ត៌មានគ្រួសារ </label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ប្តីរឺប្រពន្ធឈ្មោះ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ថ្ងៃខែឆ្នាំកំណើត </label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ទីកន្លែងកំណើត​ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ស្រុក/ខណ្ឌ </label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ឃុំ/សង្កាត់</label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ភូមិ</label>
                    <p></p>
                </div>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">កម្រិតវប្បធម៏</label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">មុខរបរ</label>
                    <p></p>
                </div>
            </div>
            <div class="columns-3 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">កូនចំនួន</label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ស្រី</label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ប្រុស</label>
                    <p></p>
                </div>
            </div>
    <!-- ____________________________________អំពីឪពុកម្តាយនឹងបងប្អូនបង្កើត__________________________________________ -->
            <div class="flex mt-5">
                <div class="p-3 w-52 lg:w-96 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold">អំពីឪពុកម្តាយនឹងបងប្អូនបង្កើត</div>
                <divider></divider>
            </div>
            

            <div class="columns-3 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ឪពុកឈ្មោះ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ឆ្នាំកំណើត </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ស្ថានភាព </label>
                    <p></p>
                </div>
            </div>
            <div class="columns-3 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">មុខរបរសព្វថ្ងៃ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">អាសយដ្ធានបច្ចុប្បន្ន​ </label>
                    <p class="ml-6"></p>
                </div>
            </div>
            <div class="columns-3 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">ម្តាយឈ្មោះ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ឆ្នាំកំណើត </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ស្ថានភាព </label>
                    <p></p>
                </div>
            </div>
            <div class="columns-3 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">មុខរបរសព្វថ្ងៃ </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">អាសយដ្ធានបច្ចុប្បន្ន​ </label>
                    <p class="ml-6"></p>
                </div>
            </div>
            <div class="columns-3 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-1/2">បងប្អូនចំនួន </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ស្រី </label>
                    <p></p>
                </div>
                <div class="flex ">
                    <label for="" class="w-1/2">ប្រុស </label>
                    <p></p>
                </div>
            </div>
<!-- ________________________________Job history_____________________________________________ -->
            <div class="flex mt-5">
                <div class="p-3 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 lg:text-xl sm:text-sm font-bold">ប្រវត្តិការងារ</div>
                <divider></divider>
            </div>
            <DataTable :value="work_history" responsiveLayout="scroll">
                <Column field="id" header="ថ្ងៃខែឆ្នាំបំពេញការងារ"></Column>
                <Column field="name" header="ថ្ងៃខែឆ្នាំបញ្ចប់ការងារ"></Column>
                <Column field="category" header="អង្គភាព-ក្រសួង-ស្ថាប័ន"></Column>
                <Column field="quantity" header="មុខដំណែង"></Column>
                <Column field="quantity" header="ខេត្ត/រាជធានី"></Column>
            </DataTable>
<!-- ________________________________Attachment_____________________________________________ -->
            <div class="flex mt-5">
                <div class="p-1 w-52 lg:w-52 sm:w-44 md:w-52 md:ml-3 sm:ml-2 font-bold sm:text-sm lg:text-xl">ឯកសារភ្ជាប់</div>
                <divider></divider>
            </div>
            <div class="columns-2 lg:ml-6 mt-5 ">
                <div class="flex ">
                    <label for="" class="w-77">អត្តសញ្ញាណប័ត្រ​ រឺ​ឆាយាសង្ឃ​ (ព្រះសង្ឃ)</label>
                </div>
                <div class="flex ">
                   <Button label="មើល" class="p-button-warning text-white"></Button>
                </div>
            </div>
            <div class=" flex xl:ml-44 lg:ml-16 md:ml-12 sm:ml-6 mt-5 ">
                <span class="material-symbols-outlined bg-red-300">done</span>
                <p>ខ្ញុំបាទ/នាងខ្ញុំសូមធានាទទួលខុសត្រូវចំពោះមុខច្បាប់ថាព័ត៍មានដែលបំពេញខាងលើនេះត្រឹមត្រូវប្រាកដមែន</p>
            </div>
            <div class="flex lg:w-1/2 lg:justify-between md:justify-between md:w-1/2 xl:justify-between xl:w-1/2 lg:ml-36 md:ml-44 xl:ml-56 mt-4 sm:justify-between sm:w-1/2 sm:ml-32 justify-between w-9/12 ml-12 mb-16">
                <Button label="ដាក់ស្នើរ"></Button>
                <Button label="បោះពុម្ភ" class="p-button-success" @click="PrintPDF()"></Button>
            </div>
        </div>
    </main>
    </body>
</template>
<script>

export default{
    data(){
        return{
          user: []
        }
    },
    created(){
        this.getUser()
    },
    methods:{
        printOut(){
            axios.get('/api/printPDF',  {responseType: 'blob'} ).then(
                res=>{
                    var fileURL = window.URL.createObjectURL(new Blob([res.data]));
                    var fileLink = document.createElement('a');
                    fileLink.href = fileURL;
                    fileLink.setAttribute('download', 'file.pdf');
                    document.body.appendChild(fileLink);
                    fileLink.click();
                }
            ).catch(e=>{
                console.log(e)
            })
        },
        PrintPDF(){
            axios.get('/api/printPDF', {responseType: 'arraybuffer'} ).then(response => {
            let blob = new Blob([response.data], { type: 'application/pdf' })
            let link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = 'form.pdf'
            link.click()
            })
        },
        getUser(){
            axios.get('/api/getUser').then(
                res=>{
                    this.user= res.data
                    console.log(res)
                }
            ).catch(er=>{
                console.log(er)
            })
        }

       
    }
}
</script>
