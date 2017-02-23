<template>
    <div class="order-page">
        <el-form ref="form" :model="form">
            <el-row :gutter="35" class="search-block">
                <el-col :span="5">
                    <div class=" bg-purple">
                        <el-form-item label="用户" label-width="50px">
                            <el-input v-model="form.name" size="small"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="订单状态" label-width="70px">
                            <el-input v-model="form.name" size="small"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="创建时间" label-width="100px">
                            <el-date-picker v-model="form.lasttime" type="daterange">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class=" bg-purple">
                        <el-form-item label="付款时间" label-width="80px">
                            <el-date-picker v-model="form.regtime" type="daterange">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class=" bg-purple">
                        <el-form-item label="电话" label-width="50px">
                            <el-input v-model="form.tel" size="small"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class=" bg-purple" style="text-align: right">
                        <el-button type="primary" size="small">搜索</el-button>
                    </div>
                </el-col>

            </el-row>
        </el-form>
        <div class="double-t">
            <template>
                <el-table :data="userdata" style="width: 100%; margin-top: 20px">
                    <el-table-column label="交易单号">
                        <template scope="scope">
                            <p>{{ scope.row.order }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column label="姓名">
                        <el-table-column label="电话">
                            <template scope="scope">
                                <el-button @click.native.prevent="userDetails(scope.$index, userdata)" type="text">
                                    <p>{{ scope.row.name }}</p>
                                    <p>{{ scope.row.tel }}</p>
                                </el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column prop="garage" label="解锁车库">
                    </el-table-column>
                    <el-table-column prop="state" label="订单状态">
                    </el-table-column>
                    <el-table-column label="创建时间">
                        <el-table-column label="付款时间">
                            <template scope="scope">
                                <p>{{ scope.row.times }}</p>
                                <p>{{ scope.row.times2 }}</p>
                            </template>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column prop="b" label="操作">
                        <template scope="scope">
                            <el-button @click.native.prevent="details(scope.$index, userdata)" type="text">
                                查看详情
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>
<style>
    .search-block {
        padding: 24px 20px 8px 20px;
        border: 1px #e4ebf1 solid;
        background: #fff;
        margin-top: 20px;
        margin-left: 0 !important;
    }
    
    .search-block .el-col {
        padding-left: 0 !important;
    }
</style>
<script>


    import moment from 'moment'

    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex' // 上传

    export default {
        data() {
            return {
                options: [],
                form: {
                    name: '',
                    tel: '',
                    lasttime: '',
                    regtime: '',
                },
                userdata: [
                    {
                        order:'20170109172105951',
                        name:'许三多',
                        tel:'18523658754',
                        garage:'四门轿车',
                        state:'已付款',
                        times:'2017-01-20 20:22',
                        times2:'2017-01-20 20:22'
                    },
                    {
                        order:'20170109172105951',
                        name:'许三多',
                        tel:'18523658754',
                        garage:'四门轿车',
                        state:'已付款',
                        times:'2017-01-20 20:22',
                        times2:'2017-01-20 20:22'
                    },
                    {
                        order:'20170109172105951',
                        name:'许三多',
                        tel:'18523658754',
                        garage:'四门轿车',
                        state:'已付款',
                        times:'2017-01-20 20:22',
                        times2:'2017-01-20 20:22'
                    },
                    {
                        order:'20170109172105951',
                        name:'许三多',
                        tel:'18523658754',
                        garage:'四门轿车',
                        state:'已付款',
                        times:'2017-01-20 20:22',
                        times2:'2017-01-20 20:22'
                    },
                    {
                        order:'20170109172105951',
                        name:'许三多',
                        tel:'18523658754',
                        garage:'四门轿车',
                        state:'已付款',
                        times:'2017-01-20 20:22',
                        times2:'2017-01-20 20:22'
                    }

                ]
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
            details(index, rows) {
                this.$router.push({path: '/user/order/detail', query: {id: rows[index].id}})
            },
            userDetails(index, rows){
                this.$router.push({path: '/user/detail', query: {id: rows[index].id}})
            },
            ...mapActions([
//            'commit_audi_createt'
            ])
        },
        computed: {
            ...mapState({
//                get_user_type_list: state => state.get_user_type_list,
            })
        },
        created() {
        },

    }


</script>
<style>
    .search-block {
        margin-right: 0 !important;
    }
    
    .user-icon,
    .lock-icon {
        width: 18px;
        height: 18px;
        display: inline-block;
        margin-right: 5px;
        float: left;
    }
    
    .user-w,
    .user-m,
    .lock,
    .unlock {
        background: url(/static/images/woman.png) center center no-repeat;
    }
    
    .user-m {
        background-image: url(/static/images/man.png);
    }
    
    .lock {
        background-image: url(/static/images/lock.png);
    }
    
    .unlock {
        background-image: url(/static/images/unlock.png);
    }
</style>