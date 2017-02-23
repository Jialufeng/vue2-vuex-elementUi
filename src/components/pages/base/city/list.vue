<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/base' }">基础设置</el-breadcrumb-item>
            <el-breadcrumb-item>服务城市</el-breadcrumb-item>
        </el-breadcrumb>

        <template>
            <el-table :data="tableData" style="width: 100%; margin-top: 20px">
                <el-table-column prop="address" label="服务城市">
                </el-table-column>
                <el-table-column prop="date" label="创建时间">
                </el-table-column>
                <el-table-column prop="name" label="操作人">
                </el-table-column>
                <el-table-column prop="date" label="操作时间">
                </el-table-column>
                <el-table-column prop="b" label="操作">
                        <template scope="scope">
                            <el-button @click.native.prevent="edit(scope.$index, tableData)" type="text" size="small">
                                编辑
                            </el-button>
                        </template>
                    </el-table-column>
            </el-table>
        </template>
        <template>
            <div class="pages">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-size="100"
                    layout="total, prev, pager, next" :total="1000">
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
                currentPage1:1,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海'
                }]
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
            edit(index, rows) {
                this.$router.push({path: '/base/limitnum', query: {id: rows[index].id}})
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage1 = val;
                console.log(`当前页: ${val}`);
            },
            deleteRow(index, rows) {
                this.$router.push({
                    path: '/assets/detail',
                    query: {id: rows[index].id}
                });

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