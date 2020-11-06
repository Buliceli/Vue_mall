<!--  -->
<template>
    <div>
        <div class="parm">相关参数1</div>
        <div class="parm">相关参数2</div>
        <div class="parm">相关参数3</div>
        <div class="parm">相关参数4</div>
        <div class="parm">相关参数5</div>
        <div class="parm6">相关参数6</div>
    </div>
</template>

<script>
    export default {
        name:'DetailParmView',
        props:[''],
        data () {
            return {

            };
        },
        components: {},
        computed: {},
        beforeMount() {},
        mounted() {},
        methods: {},
        watch: {}

    }

</script>

<style scoped>
.parm {
    height: 2.1875rem;
    text-align: center;
    line-height: 2.1875rem;
}
.parm6{
    background-color: yellow;
    height: 3.125rem;
    line-height: 3.125rem;
}
</style>