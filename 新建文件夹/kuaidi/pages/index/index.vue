<template>
	<view class="content">
	
		<view class="mainbox">
			<view class="mould" @click="gopage('kuaid')">
				<view class="modelimg">
					<image class="modelimgbox" src="../../static/img/kuaidiche.png"></image>
				</view>
				<view class="modeltitle">
					<button class="getphone" open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">代取快递</button>
				</view>
			</view>
			<view class="mould"></view>
			<view class="mould"></view>
			<view class="mould"></view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vxcode: ""

			}

		},
		onLoad() {
			this.userLogin()
		

		},
		methods: {
			//用户登陆

			onLogin() {
				let that = this
				wx.login({
					success: function(res) {
						if (res.code) {
							that.vxcode = res.code
							console.log(that.vxcode)
							console.log('获取code' + res.code)
							
						
							
							// uni.request({  
							//                  url: 'https://www.xx123.com//common/unionId.do',        //演示地址，请以你的后端接口为准  
							//                  method:'POST',  
							//                  data: {  
							//                      code: res.code              //wx.login 登录成功后的code  
							//                  },  
							//                  success: (cts) => {  
							//                      // 换取成功后 暂存这些数据 留作后续操作  
							//                      this.openid=cts.data.openid     //openid 用户唯一标识  
							//                      this.unionid=cts.data.unionid     //unionid 开放平台唯一标识  
							//                      this.session_key=cts.data.session_key     //session_key  会话密钥  
							//                  }  
							//              });  

						}
					},
					fail: function(res) {
						console.log('登录失败')
					}
				})

			},
			userLogin() {
				let that = this
				wx.checkSession({
					success: function(res) {
						//存在登陆态
						console.log('用户登录凭证（有效期五分钟）', res)
						console.log('获取code' + that.vxcode)

					},
					fail: function() {
						console.log(555555)
						//不存在登陆态
						that.onLogin()
					}
				})
			},
			onGetPhoneNumber(e) {
				if (e.detail.errMsg == "getPhoneNumber:fail user deny") { //用户决绝授权  

					//拒绝授权后弹出一些提示  

				} else { //允许授权  

					console.log('允许授权')
					console.log('获取code' + this.vxcode)
					console.log(e.detail.encryptedData)
					console.log(e)
					// e.detail.encryptedData //加密的用户信息  
					// e.detail.iv //加密算法的初始向量  时要用到  
					
					
					//获取手机号码
					this.$store.commit('chnagewxphone',{
						wxphone : '1234545454545'
					})
				}
			
				
				
			},

			gopage(page) {
				uni.navigateTo({
					url: `/pages/${page}/${page}`
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 99%;
		height: 900rpx;
		border: 1px solid blue;
	}

	.getphone {
		margin-top: 10rpx;
		padding: 10rpx 25rpx;
		width: 90%;
		height: 80%;
		font-size: 25px;
		line-height: 25px;
		color: #fff;
		background: rgba(0, 0, 0, .1);
		filter: progid:DXImageTransform.Microsoft.gradient(gradientType=0, startColorstr=#50000000, endColorstr=#50000000)\9;

	}

	.mainbox {
		width: 70%;
		height: 800rpx;
		border: 1px solid red;
		display: flex;
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 50% 50%;
		// grid-row-gap: 20px;
		// grid-column-gap: 20px;
		justify-items: center;
		align-items: center;

		.mould {
			width: 90%;
			height: 90%;
			background-color: #45afff;
			border-radius: 15px;
			overflow: hidden;

			.modelimg {
				width: 100%;
				height: 50%;


			}

			.modeltitle {
				width: 100%;
				height: 50%;

			}

			.modelimgbox {
				width: 100%;
				height: 100%;
				display: block;
			}
		}
	}
</style>
