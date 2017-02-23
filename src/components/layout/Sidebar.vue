<template>

    <!-- Main sidebar -->

    <div class="sidebar bodyer-left fl">
        <a class="navbar-brand" href="/" style="padding: 45px 0; display: block;text-align: center"><img src="/static/images/cuco.png" alt=""></a>

        <div class="sidebar-content">
            <!-- Main navigation -->
            <div class="sidebar-category sidebar-category-visible">
                <!--<div class="category-title h6">-->
                    <!--<span></span>-->
                    <!--<ul class="icons-list">-->
                        <!--<li>-->
                            <!--<a href="javascript:;" data-action="collapse"></a>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
                <sidebar-menu></sidebar-menu>
            </div>
            <!-- /main navigation -->
        </div>
    </div>
    <!-- /main sidebar -->

</template>

<script>
    
  import SidebarMenu from './../widgets/sidebar-menu'

  module.exports = {
    data: function () {
      return {
        menu: this.$parent.$data.menu || []
      }
    },
    components: {
      'sidebar-menu': SidebarMenu
    }
  }
</script>
<style>
    .bodyer-left {
        background: #2f3239;
    }
    .bodyer-left .el-menu {
        background: none;
    }
    .bodyer-left .el-submenu {
        border-bottom: 1px #25282f solid;
    }
    .bodyer-left .el-submenu .el-menu {
        background: #27282d;
    }
    .bodyer-left .el-menu-item {
        padding-left: 85px !important;
    }
    .bodyer-left .el-submenu .el-menu-item:hover, .bodyer-left .el-submenu__title:hover {
        background-color: #6193dc;
        color: #fff;
    }
    .bodyer-left .el-menu-item, .bodyer-left .el-submenu__title {
        color: #9295a6;
    }
    .bodyer-left .el-menu-item-group__title {
        padding-top: 0;
    }
    .el-icon-message {
        margin-left: 40px;
    }
    .sidebar {
        position: absolute;
        left: 0;
        float: left;
        overflow: hidden;
        width: 212px;
        /*position: absolute;*/
    }
    .bodyer-left .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .bodyer-left .el-menu-item.is-active {
        color: #fff;
    }

</style>
