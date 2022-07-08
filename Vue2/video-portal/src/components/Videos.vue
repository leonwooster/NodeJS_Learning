<template>
    <ul>
        <ItemComp v-for="v in videos" v-bind:key="v.id" v-bind:video="v"></ItemComp>
    </ul>    
</template>

<script>
    import ItemComp from "./Item.vue"

    export default {
        name: "VideosComp",
        props:{
            videos: Array,
        },
        components:{ItemComp}
    }
</script>

<style>

</style>