<template>
    <div class="clock">{{ now }} </div>
</template>
<script>
    export default {
        data(){
        return {
            message:'Time Format',
            now : new Date()
        }
    },
    methods:{
        UpdateDateTime(){
            // console.log("update me now"); 
            // this.now =new Date();
            const d =
            this.format==="short" ? new Date().toLocaleTimeString() : new Date();
            this.now=d;
            console.log(d);

        }
    },
    mounted(){
        setInterval(()=>{
            this.UpdateDateTime();
        },1000);
    }
    };
</script>
<style>
.clock{
    background-color: black;
    color: cornsilk;
}
</style>
