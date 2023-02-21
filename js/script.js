const { createApp } = Vue

createApp({
    data() {
        return{
            toDoList: [
                {
                    text:'Lavare il cane',
                    done: false,
                },{
                    text:'Fare la spesa',
                    done: false,
                },{
                    text:'Buttare lo sporco',
                    done: true,
                },{
                    text:'Pulire i vetri',
                    done: false,
                },
            ],
            newToDo: '',
        }
    },
    methods: {
        removeToDo(index) {
            this.toDoList.splice(index, 1);
        },
        addToDo() {
            const newToDo = this.newToDo;
            this.toDoList.push({
                text: newToDo,
                done: false,
            });
            this.newToDo = '';
        }
    }
}).mount('#app')
