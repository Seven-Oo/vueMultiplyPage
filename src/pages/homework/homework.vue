<template>
	<div id="homework">
		<div class="clearfix" style="margin: 20px 0 20px 20px;">
			<h3 class="left" style="margin-right:20px;">{{ msg }}</h3>
			<div class="left">
				<el-link type="primary" href="index.html">回首页</el-link>
				<el-link type="primary" href="test.html">去测试页</el-link>
			</div>
		</div>

		<el-tabs type="border-card" class="hw_tabs">
			<el-tab-pane label="作业管理">
				<el-form :inline="true">
					<el-form-item>
						<el-input
							v-model="input"
							placeholder="请输入内容"
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" icon="el-icon-search"
							>查询</el-button
						>
					</el-form-item>
				</el-form>
				<el-table
                    border
					ref="multipleTable"
					:data="tableData"
					tooltip-effect="dark"
					style="width: 100%"
					@selection-change="handleSelectionChange"
				>
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column prop="title" label="标题 ">
					</el-table-column>
					<el-table-column prop="deadline" label="截止时间" width="200">
					</el-table-column>
					<el-table-column prop="status" label="状态" width="70">
					</el-table-column>
                    <el-table-column prop="viewAnswer" label="查看答案" width="90">
					</el-table-column>
                    <el-table-column prop="modify" label="修改" width="120">
                        <template slot-scope="scope">
                            <i class="el-icon-edit"></i>
                            <span>{{ scope.row.modify }}</span>
                        </template>
					</el-table-column>
                    <el-table-column prop="submit" label="提交" width="120">
					</el-table-column>
                    <el-table-column prop="unCheck" label="未批阅" width="120">
					</el-table-column>
                    <el-table-column prop="totalSumbit" label="总提交数" width="120">
                        <template slot-scope="scope">
                            <span style="margin-right:10px;">{{ scope.row.totalSumbit }}</span>
                            <i class="el-icon-view"></i>
                        </template>
					</el-table-column>
                    <el-table-column prop="statistical" label="统计信息" width="120">
					</el-table-column>
                    <el-table-column prop="goodHw" label="优秀作品" width="120">
					</el-table-column>
                    <el-table-column prop="check" label="批阅" width="120">
					</el-table-column>
                    <el-table-column prop="packToDownload" label="打包下载" width="120">
                        <template slot-scope="scope">
                            <i style="margin-right:10px;" class="el-icon-folder-add"></i>
                            <i class="el-icon-download"></i>
                            <span>{{ scope.row.packToDownload }}</span>
                        </template>
					</el-table-column>
				</el-table>
			</el-tab-pane>
			<el-tab-pane label="等级标准维护">配置管理</el-tab-pane>
			<el-tab-pane label="统计分析">角色管理</el-tab-pane>
			<el-tab-pane label="作业模板管理">定时任务补偿</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	name: 'Homework',
	data() {
		return {
			msg: '这是作业页面',
            input: '',
            tableData: [{
                title: '赵划水是个大傻子',
                deadline: '2020年11月11日 23:59:59',
                status: '未发布',
                viewAnswer: '不允许',
                modify: '',
                submit: 3,
                unCheck: 2,
                totalSumbit: 3 + '',
                statistical: '',
                goodHw: '',
                check: '',
                packToDownload: ''
            }, {
                title: '肚肚是个大佬',
                deadline: '2020年2月14日 23:59:59',
                status: '发布',
                viewAnswer: '允许',
                modify: '',
                submit: 8,
                unCheck: 0,
                totalSumbit: 1,
                statistical: '',
                goodHw: '',
                check: '',
                packToDownload: ''
            }, {
                title: '小白是个怂货',
                deadline: '2022年2月14日 23:59:59',
                status: '发布',
                viewAnswer: '允许',
                modify: '',
                submit: 200,
                unCheck: 60,
                totalSumbit: 121,
                statistical: '',
                goodHw: '',
                check: '',
                packToDownload: ''
            }, {
                title: '小可爱是个大美女',
                deadline: '2020年2月14日 23:59:59',
                status: '发布',
                viewAnswer: '允许',
                modify: '',
                submit: 8,
                unCheck: 0,
                totalSumbit: 0,
                statistical: '',
                goodHw: '',
                check: '',
                packToDownload: ''
            }, {
                title: '小胖纸是个准妈妈',
                deadline: '2020年2月14日 23:59:59',
                status: '发布',
                viewAnswer: '允许',
                modify: '',
                submit: 8,
                unCheck: 0,
                totalSumbit: 6,
                statistical: '',
                goodHw: '',
                check: '',
                packToDownload: ''
            }],
            multipleSelection: []
        }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
}
</script>

<style scoped>
.hw_tabs {
	margin: 0 20px;
}
i {
    cursor: pointer;
}
</style>
