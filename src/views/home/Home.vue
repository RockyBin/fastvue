<template>
    <div class="index">
        home
    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted(){
        this.fetch.get('/api/index').then(res=>{
            console.log(res);
        })
    },
}
</script>

<style lang="">
    
</style>