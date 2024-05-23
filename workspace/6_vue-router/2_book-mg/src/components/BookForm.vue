<template lang="">
    <div>
        <form @submit.prevent='addBook'>
            <input type="text" v-model='title' placeholder='Title' required>
            <input type="text" v-model='author' placeholder='Author' required>
            <button type='submit'>추가</button>
        </form>
    </div>
</template>
<script>
export default {
    name : "BookForm",
    data() {
        return {
            title : '',
            author : ''
        }
    },
    methods: {
        addBook(){
            let book = {
                title : this.title,
                author : this.author
            }
            this.emitter.emit('add', book)
            this.title = ''
            this.author = ''
        }
    }
}
</script>
<style lang="">
    
</style>