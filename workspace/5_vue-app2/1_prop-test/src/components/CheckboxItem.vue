<template>
    <input type="checkbox" :checked="checked">{{number}}{{name}}
    <br>
</template>
<script>
// 기본 내보내기할 내용을 정의할 수 있다
// 컴포넌튿 등을 다른 파일에서 쉽게 가져와 사용할 수 있다.
    export default {
        name : 'CheckboxItem',
        props : ['name', 'checked', 'number']
    }
</script>
<style lang="">
    
</style>