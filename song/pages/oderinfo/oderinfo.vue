<template>
	<view class="u-flex conss">
		<view class="box u-card-wrap ">
			<view class="mainbox">
				<u-steps class='steps' :list="numList" :current="1"></u-steps>
			</view>
		</view>


		<view class="box u-card-wrap1 ">
			<view class="mainbox1 ">
				<view> 取件码{{123456}}</view>
				<view> 地址{{123456}}</view>
				<view> 快递公司{{123456}}</view>

			</view>
			<view class="mainbox1">

				<!-- <u-button class='button' @click='getpick(false)'></u-button> -->
				<u-button class='button' @click='getpick(true) '>送达楼下</u-button>
			</view>
		</view>
		<u-action-sheet :list="list" v-model="show" @click="click" :tips="tips" :cancel-btn="true"></u-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				tips: {
					text: '确认送达',
					color: '#909399',
					fontSize: 24
				},
				list: [

					{
						text: '确认送达',
						color: 'blue',
						fontSize: 28
					},

					// {
					// 	text: '未送达',
					// 	color: 'red',
					// 	fontSize: 28
					// },
				],
				show: false,

				numList: [{
					name: '下单'
				}, {
					name: '取件'
				}, {
					name: '送货'
				}, {
					name: '楼下'
				}, ],
			}
		},
		onLoad(option) {
			console.log(option)
		},
		methods: {
			click(index) {
				console.log(`点击了第${index + 1}项，内容为：${this.list[index].text}`)
				if (index == 0) {
					//取到
				} else {
					//未取到
				}
			},
			getpick(val) {
				if (val) {
					this.show = true
					console.log('找到快递')
				} else {
					this.show = true
					console.log('未找到')
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.conss {
		background-color: #f3f4f6;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 10rpx 0;
	}

	.steps {
		width: 80%;
		height: 30%;

	}

	.u-card-wrap {

		// padding: 10px;
		margin: 10rpx auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;


	}

	.u-card-wrap1 {

		// padding: 10px;
		margin: 10rpx auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;


	}

	.box {
		width: 90%;
		height: 350rpx;

		border-radius: 25px;
		// border: 1rpx solid red;
		overflow: hidden;
	}

	.mainbox {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

	}

	.mainbox1 {
		width: 100%;
		height: 80%;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;

	}
</style>
