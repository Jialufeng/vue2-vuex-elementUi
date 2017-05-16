<template>
    <div class="page_right">
        {{detail}}
    </div>
</template>
<style>

    .el-date-editor--daterange.el-input{
        width: 100% !important;
    }
    .search-block {
        margin-right: 0 !important;
    }
</style>
<script>


    import moment from 'moment'



    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                detail:'详情'
            }
        },
        component: {
        },

        watch: {},
        methods: {

            ...mapActions([
//            'file'
            ])
        },
        computed: {
            ...mapState({
//                get_file: state => state.get_file,
            })
        },
        created() {
            //
        },

    }


</script>
