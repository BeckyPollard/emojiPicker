const app = new Vue({
    el: '#app', //what element it connect to
    data: {
        search: "",
        goodmorning: 'Good morning!', //this will render in the {{goodmorning}}
        food: [
            {name: 'Pizza', icon: '🍕'},
            {name: 'Hotdog', icon: '🌭'},
            {name: 'Burger', icon: '🍔'},
            {name: 'Bacon', icon: '🥓'},
            {name: 'Pancakes', icon: '🥞'},
            {name: 'Taco', icon: '🌮'},
            {name: 'Fries', icon: '🍟'},
        ],
        sort_modifier: 1
    },
    computed: {
        filtered_food(){
            return this.food
                .filter(f => f.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
                .sort((a, b)=>{
                    if (a.name > b.name) return this.sort_modifier;
                    if (a.name < b.name) return -1 * this.sort_modifier;
                    return 0;
                })
        },
        sort_btn_text() {
            return this.sort_modifier>0?'A-Z':'Z-A'
        }
    },
    methods: {
        toggleSort() {
            this.sort_modifier = -1 * this.sort_modifier;
        }
    }
})