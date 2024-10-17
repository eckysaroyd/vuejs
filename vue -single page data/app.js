const app  = Vue.createApp({
    // data,function
   data(){
    return {
        title:"hello there vue title",
        author:"I am Author",
        age:45
       }
   }
})
app.mount("#app")