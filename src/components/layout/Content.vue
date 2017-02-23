<template>
    <div>
        <div class="page-container">

            <!-- Page content -->
            <div class="page-content">

                <app-sidebar></app-sidebar>

                <!-- Main content -->
                <app-header></app-header>

                <router-view class="view body_right content" transition transition-mode="out-in">
                </router-view>


            </div>

            <!-- /page content -->
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>

    import Sidebar from './Sidebar.vue'
    import Footer from './Footer.vue'
    import Header from './Header.vue'

    module.exports = {
        name: 'Container',
        data: function () {
            return {
                menu: this.$parent.$data.menu || []
            }
        },
        replace: false,
        components: {
            'app-sidebar': Sidebar,
            'app-footer': Footer,
            'app-header': Header,

        },
        created() {
            // 修正右边高度
//            console.log(this.$el.querySelect('.body_right'));

        },
        mounted() {
            this.$nextTick(function () {
                let leftHeight = $(window).height() - 60;
                $('.bodyer-left').css('min-height', leftHeight);
                $('#main').css('min-height', $('.bodyer-left').height());
                $(window).on('resize', function () {
                    var leftHeight = $(window).height() - 60;
                    $('.bodyer-left').css('height', leftHeight);
                    $('.page-content').css('min-height', $('.bodyer-left').height());
                });
            })
        },

    }

</script>

<style>
    .view {
    }
    .body_right {
        /*position: absolute;*/
        /*left: 240px;*/
        margin-left: 220px;
        /*width: 100%;*/
    }
    .page-content {
        overflow: hidden;
    }
    .page_right {
        padding: 24px 30px;
    }

</style>