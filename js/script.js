const { createApp } = Vue

  createApp({
    data() {
      return {
        message: "", 
        title: "", 
        srcImage: "img/Orange_Bulls_Logo.png"
      }
    }, 

    methods: {
        titleDynamic: function (event) {
         this.title = this.message; 
        }
    }

  }).mount('#app')

