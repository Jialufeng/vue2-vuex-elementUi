<template>
    <div class="page_right task_tab">
        {{name}}
    </div>


</template>
<style>


</style>
<script>


    import moment from 'moment'
    import {mapState, mapActions} from 'vuex'
    export default {
        data() {
            return {
                name: '二级'
            }
        },
        component: {
        },

        watch: {},
        methods: {


            ...mapActions([
            ])
        },
        computed: {
            ...mapState({
            })
        },
        created() {
        },

    }
</script>