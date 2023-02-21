const { createApp } = Vue

createApp({
    data() {
        return{
            toDoList: [
                {
                    text:'Fare la spesa',
                    done: true,
                },{
                    text:'Fare la spesa',
                    done: true,
                },{
                    text:'Fare la spesa',
                    done: false,
                },{
                    text:'Fare la spesa',
                    done: false,
                },
            ],
        }
    },
    methods: {
        removeToDo(index) {
            this.toDoList.splice(index, 1)
        }
    }
}).mount('#app')
