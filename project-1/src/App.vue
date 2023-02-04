<script setup>
import {ref} from 'vue'
import {myword} from'./makeword.js/'
import iconmoon from './components/icons/TypcnWeatherNight.vue'
import iconsun from './components/icons/TypcnWeatherSunny.vue'
import 'tw-elements';
let word=[]
let allword = ref([])
const findword=(word)=>{
 return allword.value.filter((x)=>x.word===word)
}
const makewords = (word, meaning) => {
    if (word === undefined || word === null || word === '' || meaning === undefined || meaning === null || meaning === '') {
        notnull.value=1
        setTimeout(() => {  notnull.value=0 }, 4500);
    } else {
      if(allword.value.length===0){
        let x=new myword(word,meaning)
        allword.value.push(x)
        addcomplete.value=1
        setTimeout(() => {  addcomplete.value=0 }, 4500);
      }else{
        let check=findword(word)
        if(check.length==0){
          let x=new myword(word,meaning)
          allword.value.push(x)
          addcomplete.value=1
          setTimeout(() => {  addcomplete.value=0 }, 4500);
        }else{
          nocomplete.value=1
         setTimeout(() => {  nocomplete.value=0 }, 4500);
        }
      }
    }
}
var darks=ref(0)
const themes=()=>{
if(darks.value===0){
    darks.value=1
}else{
    darks.value=0
}
}
var hid=ref(1)
const hidnev=()=>{
if(hid.value===0){
    hid.value=1
}else{
    hid.value=0
}
}
var main=ref(1)
var add=ref(0)
var show=ref(0)
var game=ref(0)
var category=ref(0)
var addcomplete=ref(0)
var nocomplete=ref(0)
var notnull=ref(0)

const display=(disp)=>{
  if(disp===0){
    main.value=1
    add.value=0
    show.value=0
    game.value=0
    category.value=0
  }
  if(disp===1){
    var audio = new Audio('./sound/button-11.mp3')
    audio.play()
    main.value=0
    add.value=1
    show.value=0
    game.value=0
    category.value=0
  }
  if(disp===2){
    main.value=0
    add.value=0
    show.value=1
    game.value=0
    category.value=0
  }
  if(disp===3){
    main.value=0
    add.value=0
    show.value=0
    game.value=1
    category.value=0
  }
  if(disp===4){
    main.value=0
    add.value=0
    show.value=0
    game.value=0
    category.value=1
  }
}
</script>
 
<template>
  
    <!-- theme -->
    <div :class="darks===0?'dark':''" class="font-mali ">
        <!-- nav -->
        <div class=" h-screen dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 dark:bg-gradient-to-r bg-gradient-to-l from-indigo-100 via-gray-200 to-gray-50">
    <div >
<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900" :class="main===1?'hidden':''">
  <div class=" flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center" @click="display(0)">
        <img src="./IMG/LOGO.png" class="h-10 mr-3 sm:h-14" alt=" Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Remwords</span>
    </a>
    <div class="md:hidden flex ">
   <button @click="hidnev()" class="mr-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path :fill="darks===1?'currentColor':'#ffffff'" d="M21 18h-9v-2h9v2Zm0-5H3v-2h18v2Zm0-5H3V6h18v2Z"></path></svg>
</button>
    </div>
    <div class=" w-full md:block md:w-auto " :class="hid===0?'hidden':''" >
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       
        <li class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer" @click="display(1)" :class="add===1?'sm:dark:bg-slate-50 sm:rounded-lg  sm:bg-indigo-100':''">
          เพิ่มคำศัพท์ 
        </li>
        <li class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer" @click="display(2)" :class="show===1?'sm:dark:bg-slate-50 sm:rounded-lg sm:bg-indigo-100':''">
          แสดงคำศัพท์
        </li>
        <li class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer" @click="display(4)" :class="category===1?'sm:dark:bg-slate-50 sm:rounded-lg sm:bg-indigo-100':''">
          หมวดหมู่
        </li>
        <li class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer " @click="display(3)" :class="game===1?'sm:dark:bg-slate-50 sm:rounded-lg sm:bg-indigo-100':''">
          ทายคำศัพท์
        </li>
        <li>
            <div class="flex">
                <h1 class="mr-4 font-extrabold text-emerald-500 dark:text-blue-500">THEME :</h1>
            <div class="ml-0" @click="themes()" :class="darks===1?'hidden':''"><iconmoon></iconmoon> </div>
            <div class="ml-0" @click="themes()" :class="darks===0?'hidden':''"><iconsun></iconsun> </div>
        </div>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
<!-- mainnnnnn -->
<div :class="main===1?'':'hidden'"> 
  <div class="block text-gray-700 text-center">
  
  <h1 class="pt-10 font-extrabold md:text-8xl dark:text-white sm:text-8xl pt-52">Remwords</h1>
  <button @click="display(1)" class="text-white bg-emerald-500 hover:bg-emerald-700 focus:ring-4
 focus:ring-emerald-900 font-medium rounded-lg text-sm px-5 py-2.5 
 mr-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-500 focus:outline-none
  dark:focus:ring-blue-800 mt-10 ml-10">START</button>
</div>
</div>
<!-- add -->
  </div>
  <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" :class="addcomplete===1?'':'hidden'">
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">เพิ่มคำศัพท์สำเร็จ</p>
    </div>
  </div>
</div>
<div class="bg-red-300 border-t-4 border-red-500 rounded-b text-red-800 px-4 py-3 shadow-md" :class="nocomplete===1?'':'hidden'">
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-red-700 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">เพิ่มคำศัพท์ไม่สำเร็จ</p>
      <p class="text-sm">เนื่องจากมีคำศัพท์นี้อยู่เเล้ว</p>
    </div>
  </div>
</div>
<div class="bg-yellow-100 border-t-4 border-yellow-300 rounded-b text-red-800 px-4 py-3 shadow-md" :class="notnull===1?'':'hidden'">
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-yellow-600 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">กรุณากรอกข้อมูลให้ครบ</p>
    </div>
  </div>
</div>
    <div class=" flex justify-center mt-16 " :class="add===1?'':'hidden'">
    <div>
        <label class="dark:text-white">คำศัพท์</label>
        <input type="text" class="border-b-2 ml-2 dark:bg-gray-700 dark:text-gray-100 rounded-2xl" v-model="word" placeholder=" word....">
        <br>
        <br>
        <label class="dark:text-white">คำแปล</label>
        <input type="text" class="border-b-2 ml-2 dark:bg-gray-700 dark:text-gray-100 rounded-2xl" v-model="meaning" placeholder=" meaning...">
        <br>
        <button class="text-white bg-emerald-500 hover:bg-emerald-700 focus:ring-4
 focus:ring-emerald-900 font-medium rounded-lg text-sm px-5 py-2.5 
 mr-2 mb-2 dark:bg-blue-300 dark:hover:bg-blue-500 focus:outline-none
  dark:focus:ring-blue-800 mt-10 ml-10" @click="makewords(word, meaning)">บันทึกคำศัพท์</button>
    </div>
   </div>
   <!--show -->
   <div :class="show===1?'':'hidden'"> 
    <div>
  <table class="center ml-auto mr-auto table-auto w-full">
    <tr class="bg-gray-50 border-b-2 border-gray-400 dark:bg-gray-900">
      <th class="text-gray-700 dark:text-gray-400">#No.</th>
      <th class="text-gray-700 dark:text-gray-400">Word</th>
      <th class="text-gray-700 dark:text-gray-400">Meaning</th>
    </tr>
    <tr v-for="(wordlist,index) in allword" :class="index%2===0?'bg-gradient-to-r from-indigo-100 via-gray-200 to-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 dark:bg-gradient-to-r ':'bg-gradient-to-l from-indigo-100 via-gray-200 to-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 dark:bg-gradient-to-l'" >
      <td class="text-gray-700 dark:text-gray-400 text-center p-3 border-red-700">{{ index+1 }}</td>
      <td class="text-gray-700 dark:text-gray-400 text-center p-3">{{ wordlist.word}}</td>
      <td class="text-gray-700 dark:text-gray-400 text-center p-3">{{ wordlist.meaning }}</td>
    </tr>
  </table>
    <!-- <ul>
    <li v-for="word in allword">
      </div>
    </li>
  </ul> -->
  </div>
</div>
<!-- game -->
<div :class="game===1?'':'hidden'"> 
 
</div>
<!-- cate-->
<div :class="category===1?'':'hidden'"> 


</div>
<!-- theme  -->
 </div>
</div>

</template>
 
<style scoped>
</style>