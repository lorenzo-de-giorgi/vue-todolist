import {todo} from './data.js';

const {createApp} = Vue;

createApp({
    data() {
        return {
            todo: todo,
            itemText: '',
            done: '',
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
        addTodo(){
            const newObj = {
                id: null, //generare id
                text: this.itemText, //inserir valore
                done: false
            }
            let nextId = 0;
            this.todo.forEach((el) => {
                if(nextId < el.id){
                    nextId = el.id
                }
            });
            newObj.id = nextId + 1;
            this.todo.unshift(newObj);
            // todo.unshift(newObj);
            this.itemText = '';
        }
    },
    computed: {
        filteredTodo(){
            return this.todo.filter((el) => {
                if(this.done === ''){
                    return true;
                }
                if(this.done === 'false'){
                    return el.done === false
                }
                if(this.done === 'true'){
                    return el.done === true
                }
            })
        }
    },
    mounted() {
        console.log(this.todo)
    },
}).mount('#app')