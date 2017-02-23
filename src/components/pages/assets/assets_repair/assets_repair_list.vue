<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/assets_repair' }">维修</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form ref="form" :model="form">
            <el-row :gutter="35" class="search-block" style="margin-right: 0">
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="车牌号" label-width="80px">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="维修状态" label-width="80px">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary">搜索</el-button>
                </el-col>
            </el-row>
        </el-form>
        <div class="search-block" style="padding-bottom: 20px">
            <el-button type="primary" @click="addCar">车辆维修</el-button>
        </div>

        <template>
            <el-table
                    :data="tableData"
                    style="width: 100%; margin-top: 20px">
                <el-table-column
                        prop="date"
                        label="车牌号"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="车辆品牌"
                        width="180">
                    <el-table-column
                            prop="name"
                            label="车辆型号"
                            width="120">
                    </el-table-column>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="供应商">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="行驶里程">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="近30天运营率"
                        width="130">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="所在城市">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="车辆状态">
                    <el-table-column
                            prop="address"
                            label="GPS状态">
                    </el-table-column>
                </el-table-column>

                <el-table-column
                        prop="address"
                        label="创建时间">
                </el-table-column>
            </el-table>
        </template>
        <template>
            <div class="pages">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage1"
                        :page-size="100"
                        layout="total, prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </template>

    </div>
</template>
<style>
    .pages {
        text-align: right;
        margin-top: 20px;
    }

</style>
<script>


    import moment from 'moment'

    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex' // 上传

    export default {
        data() {
            return {
                activeName: 'first',
                value1: true,
                form: {
                    name: '',
                },
                currentPage1: 1,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage1 = val;
                console.log(`当前页: ${val}`);
            },
            addCar() {
                this.$router.push('/assets_repair/detail')
            },
            ...mapActions([])
        },
        computed: {
            ...mapState({
//                get_user_type_list: state => state.get_user_type_list,
            })
        },
        created() {
        }

    }


</script>