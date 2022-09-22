<template>
  <view class="">
    <view class="u-card-wrap">
      <u-card
        :title="title"
        :sub-title="subTitle"
        :padding="padding"
        :border="true"
        margin="30rpx"
      >
        <view class="" slot="body">
          <view
            class="u-body-item u-flex u-col-between u-p-t-1 u-border-bottom itemcss"
            v-for="(item, index) in 15"
            @click="oderinfo(item)"
            :key="index"
          >
            <view class="u-body-item-title u-line-2">
              订单号：{{ index + "565656" }} <br />
              取件码：{{ 1234 }} 公司：{{ "京东" }}
              <br />
              地 址：{{ "1栋2楼" }}
              <br />
              下订单时间{{ "2011-15656" }}
            </view>
          </view>
        </view>
        <view class="" slot="foot">
          <u-icon v-if="bottomSlot" name="chat-fill" size="34" label="30评论"></u-icon>
        </view>
      </u-card>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "今日任务",
      subTitle: "已完成：20，未完成30",
      padding: 25,
      bottomSlot: true,
      border: true,
    };
  },
  mounted() {
    this.DeliverOrder();
  },
  methods: {
    getNotAllocationPickOrder() {
      let that = this;
      uni.request({
        data: {},
        method: "GET",
        header: {
          authorization: "Bearer " + uni.getStorageSync("token"),
        },
        url: this.$beseURL + "/getData/getNotFishOrder",
        success: (res) => {
          console.log("getNotFishOrder", res);
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },
    DeliverOrder() {
      let that = this;
      uni.request({
        data: {
          DeliverPhone:"18582707259",
        },
        method: "POST",
        header: {
          authorization: "Bearer " + uni.getStorageSync("token"),
        },
        url:"http://8.140.56.185:8085/SentData/DeliverOrder",
        success: (res) => {
          console.log("DeliverOrder", res);
       
        },
        fail: (res) => {
          console.log(res);
        },
      });
    },

    oderinfo(val) {
      console.log(val);
      uni.navigateTo({
        url: "/pages/oderinfo/oderinfo?" + `oderid=${val}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.u-card-wrap {
  background-color: $u-bg-color;
  padding: 1px;
}

.u-body-item {
  font-size: 32rpx;
  color: #333;
  padding: 20rpx 10rpx;
}

.itemimg {
  width: 120rpx;
  flex: 0 0 120rpx;
  height: 120rpx;
  border-radius: 8rpx;
  margin-left: 12rpx;
  padding: 10px 5px;
}

.itemcss {
  background-color: $u-bg-color;
  margin: 20rpx 0;
  border-radius: 10rpx;
}
</style>
