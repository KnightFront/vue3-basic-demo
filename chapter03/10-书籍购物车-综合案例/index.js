Vue.createApp({
    template: "#my-app",
    data () {
        return {
            books:[
                {
                    id:1,
                    name:"《算法导论》",
                    author:"Richard E.B.Bird",
                    price:85.00,
                    date:"2006-9-1",
                    count:1
                },
                {
                    id:2,
                    name:"《UNIX编程艺术》",
                    author:"Brian W.Kernighan",
                    date:"2006-9-1",
                    price:59.00,
                    count:1
                },
                {
                    id:3,
                    name:"《编程珠玑》",
                    date:"2006-9-1",
                    author:"Martin Fowler",
                    price:35.00,
                    count:1
                },
                {
                    id:4,
                    name:"《代码大全》",
                    date:"2006-9-1",
                    author:"Martin Fowler",
                    price:39.00,
                    count:1
                }
            ]
        }
    },
    computed: {
        totalPrice() {
            let finalPrice = 0;
            for (const book of this.books) {
                finalPrice += book.price * book.count;
            }
            return finalPrice;
        },
        formatPrice() {
            return (price) => {
                return '￥' + price.toFixed(2);
            }
        }
    },
    methods: {
        increment(index) {
            this.books[index].count++;
        },
        decrement(index){
            this.books[index].count--;
        },
        removeBook(index) {
            this.books.splice(index, 1);
        }
    }
}).mount("#app");