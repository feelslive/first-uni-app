<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view v-for="item in list" :key="item.product_id">
			{{item.product_name}} {{item.product_id}}
		</view>
	</view>
</template>

<script>
	import API from "../../http/api.js"
	export default {
		data() {
			return {
				title: 'my-uni',
				list: []
			}
		},
		onLoad() {
			console.log("onload")
			this.http({
				url: API.getList,
				data: {
					merchant_id:"19521"
				},
				success: res=>{
					console.log(res)
					this.list = res.result;
				},
				fail: err =>{
					console.log(err)
				}
			})
		},
		onShow() {
			
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
