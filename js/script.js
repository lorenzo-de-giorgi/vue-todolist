import {todo} from './data.js';

const {createApp} = Vue;

createApp({
    data() {
        return {
            todo: todo,
        }
    },
    methods: {
        toggleDone(id){
            const item = this.todo.find((el) => {
                return el.id === id;
            })
            console.log(item)
            if(item){
                item.done = !item.done
            }
        },
        removeItem(id){
            const i = this.todo.findIndex((el) => el.id === id);
            if(i !== -1){
                this.todo.splice(i, 1);
            }
        },
    },
    computed: {
    },
    mounted() {
        console.log(this.todo)
    },
}).mount('#app')