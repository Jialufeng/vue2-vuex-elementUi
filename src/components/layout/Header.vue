<template>

    <div>


        <!-- Main navbar -->
        <div class="navbar" style="display: flex; padding-top: 20px; padding-right: 20px; justify-content: flex-end">
            <!--<div class="navbar-header">-->
            <!--<a class="navbar-brand" href="/"><img src="/static/images/logo.png" alt=""></a>-->
            <!--</div>-->
            <div class="">
				<span class="nav-head"></span>
                <span>lufeng</span>

            </div>

            <!--<div class="navbar-collapse collapse" id="navbar-mobile">-->
            <!--&lt;!&ndash;<ul class="nav navbar-nav">&ndash;&gt;-->
            <!--&lt;!&ndash;<li><a class="sidebar-control sidebar-main-toggle hidden-xs"><i class="icon-paragraph-justify3"></i></a></li>&ndash;&gt;-->
            <!--&lt;!&ndash;</ul>&ndash;&gt;-->
            <!--</div>-->
        </div>
        <!-- /main navbar -->

        <!-- Page header -->

        <!--<div class="page-header-content">
            <div class="page-title">
                <h4><i class="icon-arrow-left52 position-left"></i> <span class="text-semibold">Home</span> - Dashboard <small>Hello, Victoria!</small></h4>
            </div>

            <div class="heading-elements">
                <div class="heading-btn-group">
                    <a href="#" class="btn btn-link btn-float has-text"><i class="icon-bars-alt text-primary"></i><span>Statistics</span></a>
                    <a href="#" class="btn btn-link btn-float has-text"><i class="icon-calculator text-primary"></i> <span>Invoices</span></a>
                    <a href="#" class="btn btn-link btn-float has-text"><i class="icon-calendar5 text-primary"></i> <span>Schedule</span></a>
                </div>
            </div>
        </div>-->
    </div>
    <!-- /page header -->
    </div>

</template>
<script>
    import  {AuthMgr} from  '../../api/apis';
    export  default {
        data(){
            return {
                name: '',

            }
        },
        methods: {
//            on_logout() {
//				sessionStorage.removeItem('token'),
//				sessionStorage.removeItem('username');
//				window.location.href = AuthMgr;
//				return;
//			}
        },
        created() {
//			let _this =this;
//			let timer = setInterval(function(){
//				_this.name = sessionStorage.getItem('username');
//				if(_this.name!==null){
//					clearInterval(timer);
//				}
//			},100);
        }
    }
</script>
<style>
    .nav-head {
        width: 40px;
        height: 40px;
        background: #38C34E;
        display: inline-block;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 5px;
    }
    .navbar-brand {
        padding: 8px 20px 0;
    }

    .navbar-brand img {
        height: 26px;
        margin-top: 8px;
    }

    .form-horizontal .control-label:not(.text-right) {
        text-align: right;
    }

    .navbar {
        height: 60px;
        background: #FFF;
    }
</style>