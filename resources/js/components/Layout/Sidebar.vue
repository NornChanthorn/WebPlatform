<template> 
<aside>
    <div class="fixed inset-0 flex ">
       <!-- Sidebar -->
       <div
           class="absolute flex h-screen  "
           :class="[right ? 'right-10 flex-column ' : 'left-0 flex-row-reverse' ]">
           <div  class=" bg-blue-600 transition-all duration-700 overflow-hidden"
                :class="[open ? 'w-60' : 'w-16']"> 
                   
               <div class=" inline ">                   
                   <button
                       @click.prevent="toggle()"
                           class="pr-3  pt-3 w-20 my-auto text-white  text-center focus:outline-none  transition-color duration-300 pi pi-bars aligh-center"
                           style="font-size: 24px;">                       
                   </button>               
                   <div class="w-50  ml-9  inline-flex">
                        <div class="inline ml-10 w-24 space-y-0 ">
                            <img class=" border-2 rounded-full border-white-300" src="https://stickershop.line-scdn.net/stickershop/v1/product/15683706/LINEStorePC/main.png;compress=true" alt="">
                            <h6 class="text-white font-bold mt-2">Chanthorn</h6>
                        </div>             
                    </div>
               </div>
<!-- _____________________Menu at Sidebar__________________________  -->
               <div class="">
                    <div class="mt-3 flex hover:bg-blue-500 pt-3 pb-3">                   
                        <div class="inline ml-6 overflow-hidden ">
                            <button class="fa fa-address-book-o fa-lg" style="color: white; font-size: 24px;"   >                       
                               <a href="" class="text-white ml-6  no-underline text-lg hover:text-black" >Applicant</a>
                            </button>     
                        </div>              
                    </div>            
                    <div class=" flex hover:bg-blue-500 pt-3 pb-3 " >                  
                        <div class="inline ml-6 overflow-hidden ">
                            <button class="fa fa-eye fa-lg" style="color: white; font-size: 24px;">
                            <a href="" class="text-white ml-6  no-underline text-lg hover:text-black" >Form</a>
                            </button>     
                        </div>                   
                    </div>  
                    <div class=" flex hover:bg-blue-500 pt-3 pb-3 "    >                 
                        <div class="inline ml-6 overflow-hidden" >
                            <button class="fa fa-user-circle-o fa-lg " style="color: white"  >
                            <a href="" class="text-white ml-6  no-underline text-lg" >Account</a>
                            </button>                      
                        </div>                 
                    </div>  
               </div> 
           </div>
       </div> 
   </div>
</aside>      
</template>
<script>
  
  export default {
  data() {
      return {
          open: false,
          dimmer: true,
          right: false,
      };
  },
  
  methods: {
      toggle() {
          this.open = !this.open;
      },   
  }
};

</script>
<style>
.fade-enter-active,
.fade-leave-active {
   transition: opacity 1s ease-out;
}
.title{
   margin-bottom: 60px;
}
.fade-enter,
.fade-leave-to {
   opacity: 0;
}

</style>
