<template lang="">
    <div>
        <ul>
            <li v-for="book in books" :key='book.id'>
                <p>{{book.title}}</p>
                <hr>
                <p>{{book.author}}</p>
                <br>
                <button @click='removeBooks(book.id)'>삭제</button>

            </li>
        </ul>
    </div>
</template>
<script>
let i = 1;
export default {
    name : 'BookList',

    created(){
        this.emitter.on('add', this.addBook)
        this.loadBook()
    },
    data(){
        return {
            books : []
        }
    },
    methods: {
        addBook(book){
            let newBook = {id : i++, title : book.title, author : book.author}
            this.books.push(newBook)
            this.saveBook();
        },

        removeBooks(id){
            this.books = this.books.filter(book => book.id != id)
            this.saveBook()
        },

        // 로컬 스토리지에 저장!
        saveBook(){
            localStorage.setItem('books', JSON.stringify(this.books))
        },

        //로컬 스토리지에서 데이터 가져오기!
        loadBook(){
            let localBooks = localStorage.getItem('books')
            if(localBooks){
                this.books = JSON.parse(localBooks)
            }
        }

    },
}
</script>
<style lang="">
    
</style>