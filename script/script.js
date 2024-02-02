Vue.createApp({
    data(){
        return {
            buttonText: "Позвать поляка",
            greetingTheBeaver: "BÓBR! JA PERDOLE!",
            isActive: false,
        }
    },
    computed:{
        changingTheLabel: function(){
            if(!this.isActive){
                this.buttonText = "Позвать поляка";
            }
            else{
                this.buttonText = "O KURWA";
            }
        },
    },
    methods:{

    },
}).mount("#app");