<template>
    <div >
        <h2 class="title_vue">{{ title }}</h2>
        <p class="content_vue">
        abccc
        </p>
    </div>
    
</template>

<script>


export default {
    data() {
        return {
            title: "我是vue标题tttttt"
        }
    }
}
</script>

<style>
.title_vue {
    color: green;
    font-size: 100px;
}
.content_vue {
    color: red;
    font-size: 30px;
}
</style>