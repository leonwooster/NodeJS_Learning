<template>
    <div>
        <input type="text" @input="onChange"/>
    </div>
</template>

<script>
    export default{
        name:"SearchInput",
        methods:{
            onChange: function(event)
            {
                console.log(event.target.value);
                this.$emit('newTerm', event.target.value);
            }
        }
    };
</script>

<style>
</style>    