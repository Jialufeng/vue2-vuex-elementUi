<template>
    <div>
        <!--<app-header></app-header>-->

        <app-content>


        </app-content>
    </div>
</template>
<script>

//    import Header from './components/layout/Header.vue'
    import Content from './components/layout/Content.vue'
    import  store  from  './vuex/store.js'
    import { mapState, mapActions } from 'vuex'
    module.exports = {
        name: 'Container',
        data: function () {
            return {
                menu: require('./../config/menu.js') || []
            }
        },
        replace: false,
        components: {
//            'app-header': Header,
            'app-content': Content,
        },
        store
    }

</script>
<style>
    .page-container {
        /*padding: 20px 20px;*/
    }
</style>