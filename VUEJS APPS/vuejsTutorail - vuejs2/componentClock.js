Vue.component("ecky-clock",{    
    // “Props” is a special keyword which stands for properties. It can be registered on a component to pass data from a parent component to one of its children components.
    props:["format"],
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
    },
    template: `<div class="clock">{{now}}</div>`
});