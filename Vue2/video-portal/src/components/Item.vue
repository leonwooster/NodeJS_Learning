<template>
    <li>
        {{ video.id }}
    </li>
</template>

<script>
export default{
    name : "ItemComp",
    props: {
        video: Object
    }
}
</script>

<style>
</style>