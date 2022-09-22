<template>
	<view class="content">

		<view class="selectbox">

			<u-form :model="selectvalu" ref="uForm">
				<u-form-item label="选择快递公司:" label-width="250" :label-style="{ fontSize: '35rpx',fontWeight:'600'}">
					<u-input v-model="selectvalu.compy" :type="type" :border="border" @click="compeyshow = true" />
					<u-action-sheet :list="compeylist" v-model="compeyshow" @click="actionSheetcompey">
					</u-action-sheet>
				</u-form-item>
				<u-form-item label="请输入取件码" label-width="250" :label-style="{ fontSize: '35rpx',fontWeight:'600'}">
					<u-input :border="border" v-model="selectvalu.qucode" />
				</u-form-item>


				<u-form-item label="选择快递大小" label-width="250" :label-style="{ fontSize: '35rpx',fontWeight:'600'}">
					<u-input v-model="selectvalu.boxsize" :type="type" :border="border" @click="boxsizeshow = true" />
					<u-action-sheet :list="boxsizelist" v-model="boxsizeshow" @click="actionSheetboxsize">
					</u-action-sheet>
				</u-form-item>


				<u-form-item label="选择送货方式：" label-width="250" :label-style="{ fontSize: '35rpx',fontWeight:'600'}">
					<u-input v-model="selectvalu.addtype" :type="type" :border="border" @click="addtypeshow = true" />
					<u-action-sheet :list="addtypelist" v-model="addtypeshow" @click="actionSheetaddtype">
					</u-action-sheet>
				</u-form-item>

				<u-form-item label="选择收货地址：" label-width="250" :label-style="{ fontSize: '35rpx',fontWeight:'600'}">
					<u-input v-model="selectvalu.adderr" :type="type" :border="border" @click="adderrshow = true" />
					<u-action-sheet :list="addresslist" v-model="adderrshow" @click="actionSheetaddress">
					</u-action-sheet>

				</u-form-item>

				<u-form-item v-if="ISroom" label="输入寝室号：" label-width="250"
					:label-style="{ fontSize: '35rpx',fontWeight:'600'}">
					<u-input v-model="selectvalu.room" :border="border" />

				</u-form-item>

			</u-form>



			<view class="jieg">
				<view class="prices">
					<h2> {{price}}元</h2>
				</view>
			</view>
			<view>
				<u-button :type="popshow?'':'primary'" shape="square" @click="putdata" style="margin-top: 10rpx;">提交信息
				</u-button>
			</view>

		</view>
		<view class="pop" v-show="popshow">
			<view>
				<view class="jieg">
					<view class="recode">
						验证码: <span style='font-size: 20px;font-weight: 700;color: #e4670d;'>{{recode}}</span>
					</view>
				</view>
				<view class="qrimgbox">
					<h3> 请<span style='color: red;'>复制验证码</span>
						点击复制并跳转付款后 <span style='color: red;'>长按</span>识别付款二维码并且 <span style='color: red;'>备注验证码</span>
					</h3>
					<button data-clipboard-action="copy" class="cobyOrderSn" :data-clipboard-text="recode"
						@click="copyLink">复制并跳转付款</button>
				</view>
			</view>
			<u-top-tips ref="uTips"></u-top-tips>

		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				system: "",
				copyBtn: null, //存储初始化复制按钮事件
				href: 'http://8.140.56.185:8085/static/Collection.png',
				qrimg: "",
				popshow: false,
				selectvalu: {
					compy: "",
					compyvalue: 0,
					boxsize: "",
					boxsizevalue: 0,
					adderr: "",
					adderrvalue: 0,
					qucode: "",
					addtype: "",
					addtypevalue: 0,
					room: ""
				},
				type: 'select',
				border: true,
				compeyshow: false,
				boxsizeshow: false,
				adderrshow: false,
				addtypeshow: false,
				price: 0,
				recode: 5666,
				ISroom: false,

				addtypelist: [{
					text: "寝室楼下自取",
					value: 1,

				}, {
					text: "送至寝室",
					value: 5
				}],
				compeylist: [{
						text: '京东',
						value: 1
					},
					{
						text: '顺丰',
						value: 2
					},
					{
						text: '圆通',
						value: 3
					},

				],
				boxsizelist: [{
						text: '约1kg内小件',
						value: 1
					},
					{
						text: '约1.5kg内小件',
						value: 2
					},
					{
						text: '约2kg内小件',
						value: 3
					},

				],
				addresslist: [{
						text: '1栋1楼',
						value: 1
					},
					{
						text: '1栋2楼',
						value: 1.5
					},
					{
						text: '1栋5楼',
						value: 3
					},

				],

			}
		},
		onLoad() {

		},
		mounted() {
			//判断设备
			this.isAndroidOrIOS()
			// 获取支付图片


			//获取快递公司及价格

			//
		},

		methods: {
			gorequest() {
				console.log(6666)
				let token =
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdXQiOiIxODU4MjcwNzI1OSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNjMxMjg5NjM5LCJleHAiOjE2MzEyOTMyMzl9.Z85rRnGBsr3THVPQnwWanxmNDfnXwdYw3zPnptEBwDg'
				uni.setStorageSync('token', token)

				uni.request({
					data: {
						person:'嗨嗨'
						// customerid: this.$store.state.wxphone,
						// ExpressType: `${this.selectvalu.compy}`,
						// PickCode: `${this.selectvalu.qucode}`,
						// size: `${this.selectvalu.boxsize}`,
						// address: `${this.selectvalu.adderr} -${this.selectvalu.room}`,
						// price: `${this.price}`,
						// isroom: this.ISroom,
					},
					method: "POST",
					header: {
						authorization: "Bearer " + uni.getStorageSync("token"),
						'Content-type':'application/x-www-form-urlencoded'
					},
					url: 'http://8.140.56.185:8085/getData/task/TaskOrderList',
					success: (res) => {
						console.log(res)
					},
					fail: (res) => {

						console.log(res)
					}
				})

			},

			isAndroidOrIOS() {
				let type = uni.getSystemInfoSync().platform
				switch (type) {
					case 'android':
						this.system = 'android'
						break;
					case 'ios':
						this.system = 'ios'
						break;
					default:
						this.system = 'other'
						break;

				}
			},
			copyLink() {
				let _this = this;
				let clipboard = new this.clipboard(".cobyOrderSn");
				console.log(clipboard)
				clipboard.on('success', function() {

					_this.$refs.uTips.show({
						title: '复制成功，正在跳转',
						type: 'success',
						duration: '2000'
					})

					setTimeout(() => {
						_this.openURL()
					}, 2000)

				});
				clipboard.on('error', function() {
					_this.$refs.uTips.show({
						title: '复制失败，请记住验证码并且备注',
						type: 'error',
						duration: '5000'
					})
					setTimeout(() => {
						_this.openURL()
					}, 6000)



				});
			},


			openURL() {
				// #ifdef APP-PLUS
				plus.runtime.openURL(this.href) //这里默认使用外部浏览器打开而不是内部web-view组件打开
				// #endif
				// #ifdef H5

				if (this.system == 'ios') {
					window.location = this.href
				} else {
					window.open(this.href)
				}



				// #endif
			},
			putdata() {
				console.log('手机发,', this.$store.state.wxphone)
				console.log('putdata')
				// this.popshow = true
				// this.pay()



				this.gorequest()

			},

			// pay() {
			// 	uni.requestPayment({
			// 		// 当前时间
			// 		timeStamp: res.data.timeStamp,
			// 		// 随机字符串
			// 		nonceStr: res.data.nonceStr,
			// 		// 统一下单接口返回的 prepay_id 
			// 		package: res.data.appPackage,
			// 		// 签名算法
			// 		signType: res.data.signType,
			// 		// 签名
			// 		paySign: res.data.paySign,
			// 		//调用支付成功
			// 		success: function(success) {
			// 			// 支付成功的回调中 创建成功
			// 			console.log("success:", success)
			// 			uni.showModal({
			// 				title: res.msg,
			// 				showCancel: false,
			// 				success: function(res) {
			// 					//成功之后
			// 				}
			// 			});
			// 		},
			// 		//调用支付失败或用户取消
			// 		fail: function(err) {
			// 			// 支付失败的回调中 用户未付款
			// 			uni.showModal({
			// 				title: '支付取消',
			// 				showCancel: false,
			// 				success: function(res) {
			// 					//失败之后
			// 				}
			// 			});
			// 		}
			// 	});
			// },
			comprice() {
				let val = 0
				val = parseInt(this.selectvalu.compyvalue) + parseInt(this.selectvalu.boxsizevalue) + parseInt(this
					.selectvalu.adderrvalue) + parseInt(this.selectvalu.addtypevalue)

				console.log(val)
				this.price = val
			},
			actionSheetaddtype(index) {
				console.log(555, index)


				this.selectvalu.addtype = this.addtypelist[index].text;
				this.selectvalu.addtypevalue = this.addtypelist[index].value;
				// console.log(this.selectvalu)
				if (index == 1) {
					this.ISroom = true
				} else(
					this.ISroom = false
				)

				this.comprice()
			},
			actionSheetcompey(index) {
				this.selectvalu.compy = this.compeylist[index].text;
				this.selectvalu.compyvalue = this.compeylist[index].value;
				console.log(this.selectvalu)
				this.comprice()
			},
			actionSheetboxsize(index) {
				this.selectvalu.boxsize = this.boxsizelist[index].text;
				this.selectvalu.boxsizevalue = this.boxsizelist[index].value;
				this.comprice()
			},
			actionSheetaddress(index) {
				this.selectvalu.adderr = this.addresslist[index].text;
				this.selectvalu.adderrvalue = this.addresslist[index].value;
				this.comprice()
			}

		}
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10rpx;

	}

	.selectbox {
		width: 99%;
		height: 50%;
		/* border: 1rpx solid red; */
		box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: flex-start;
		border-radius: 15rpx;
		padding: 20rpx;
	}

	.selectitem {
		width: 99%;
		height: 100rpx;
		/* border: 1px solid red; */
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: nowrap;
		position: relative;
		border-radius: 15rpx;

	}

	.textbox {

		width: 43%;
		height: 100%;
		display: block;
		margin: 2px 0;
		text-align: center;
		line-height: 100rpx;
		/* border: 1rpx solid #007AFF; */
		border-radius: 15rpx;
	}

	.inputtbox {

		display: flex;
		justify-content: center;
		align-items: center;
		width: 49%;
		height: 100%;
		margin: auto;
		border-radius: 15rpx;

	}

	.jieg {
		box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
		padding: 10rpx;
		width: 80%;
		height: 100rpx;
		text-align: center;
		margin: 5rpx auto;
		border-radius: 15rpx;
	}

	.prices {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
	}

	.recode {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
	}

	.pop {
		width: 99%;
		height: 500rpx;
		/* border: 1rpx solid #18B566; */
		box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);
		border-radius: 15rpx;
		margin: 40rpx 0;
		padding: 10px 50px;
	}

	.cobyOrderSn {
		width: 70%;
		height: auto;
		background-color: #007AFF;
	}

	.qrimgbox {
		padding: 0 30px;
	}
</style>
