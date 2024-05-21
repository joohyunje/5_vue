<template lang="">
    <div>
        노래제목 : <input type='text' v-model='name'>
        <button @click="$emit('inputCompleted', {name})">이벤트 발신</button>
    </div>
</template>
<script>
export default {
    name : 'InputPopName',
    data() {
        return {
            name : ''
        }
    },
}
</script>
<style lang="">
    
</style>