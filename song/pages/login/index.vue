<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎登录快递管理系统</view>
			<u-input v-model="accout" type="number" :border="border" placeholder="请输入手机号" />
			<u-input v-model="passwd" type="password" :border="border" :password-icon="true" placeholder="请输入密码"
				style='margin-top: 5px;' />
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">登录</button>
			<view class="alternative">
				<view class="password"></view>
				<view class="issue" @click="open">遇到问题</view>
			</view>
		</view>
		<view>
			<u-modal v-model="show" :content="content"></u-modal>

		</view>
			<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				accout: '',
				passwd: "",
				border: true,
				show: false,
				content: '东临碣石，以观沧海'
			}
		},
		computed: {



			inputStyle() {
				let style = {};
				if (this.tel) {
					style.color = "#fff";
					style.backgroundColor = this.$u.color['warning'];
				}
				return style;
			}
		},
		methods: {
			login() {
				uni.request({
					data: {
						Account: this.accout,
						password: this.passwd
					},
					method: "POST",
					header: {},
					url: 'http://8.140.56.185:8085/user/login',
					success: (res) => {
						if (res.data.code == 0) {
							console.log(res.data.token)
							uni.setStorageSync('token',res.data.token)
							this.showToast(true) 
						}
						if (res.data.code == -1) {
							console.log(res.data.msg)
							this.showToast(false) 
						}
					},
					fail: (res) => {
					

					}
				})
			},
			showToast(type) {
				if(type){
					this.$refs.uToast.show({
						title: '登录成功',
						type: 'success',
						url: 'pages/index/index'
					})
				}else{
					this.$refs.uToast.show({
										title: '登录失败,请检测账号或者密码',
										type: 'warning',
										
									})
				}
			
			},
			open() {
				this.show = true;
			},

			submit() {
				let le = 1

				this.login()


				// if (le==1) {
				// 	this.$u.route({
				// 		url: 'pages/index/index'
				// 	})
				// }
			}
		}
	};
</script>

<style lang="scss" scoped>
	.inputbox {
		display: block;
		margin: 5rpx;
		width: 92%;
		height: 80rpx;
		font-size: 18px;
		padding: 10rpx;
	}

	.wrap {
		font-size: 28rpx;

		.content {
			width: 600rpx;
			margin: 80rpx auto 0;

			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 100rpx;
			}

			input {
				text-align: left;
				margin-bottom: 10rpx;
				padding-bottom: 6rpx;
			}



			.getCaptcha {
				margin: 50rpx 0;
				background-color: rgb(253, 243, 208);
				color: $u-tips-color;
				border: none;
				font-size: 30rpx;
				padding: 12rpx 0;

				&::after {
					border: none;
				}
			}

			.alternative {
				color: $u-tips-color;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
			}
		}

		.buttom {
			.loginType {
				display: flex;
				padding: 350rpx 150rpx 150rpx 150rpx;
				justify-content: space-between;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: $u-content-color;
					font-size: 28rpx;
				}
			}

			.hint {
				padding: 20rpx 40rpx;
				font-size: 20rpx;
				color: #F0AD4E;

				.link {
					color: $u-type-warning;
				}
			}
		}
	}
</style>
