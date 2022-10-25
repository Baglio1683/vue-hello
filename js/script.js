const { createApp } = Vue

  createApp({
    data() {
      return {
        message: "", 
        title: ""
      }
    }, 

    methods: {
        titleDynamic: function (event) {
         this.title = this.message; 
         return this.title
        }
    }

  }).mount('#app')

