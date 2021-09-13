<template>
    <p>Todo Item</p>
    <Button @click="cancel">Voltar</Button>
</template>

<script>
export default {
    methods:{
        cancel(){
            this.$emit("cancel"); //EMITINDO O EVENTO CANCEL
        },
    }
}
</script>

<style scoped>

</style>