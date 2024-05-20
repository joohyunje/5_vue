<template>
    <input type="checkbox" v-model="checked"> 테스트
    <br>
</template>
<script>
// 기본 내보내기할 내용을 정의할 수 있다
// 컴포넌튿 등을 다른 파일에서 쉽게 가져와 사용할 수 있다.
    export default {
        name : 'CheckboxItem',
        data() {
            return {
                checked : false
            }
        },
    }
</script>
<style lang="">
    
</style>