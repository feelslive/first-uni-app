module.exports = (param) =>{
	let url = param.url;
	let method = param.method;
	let header = param.header || {};
	let data = param.data || {};
	
	//请求方法
	if(method){
		method = method.toUpperCase();
		if(method == "POST") {
			header = {"content-type":"application/x-www-form-urlencoded"}
		}
	}
	
	//发起请求loading
	if(!param.hideLoading){
		uni.showLoading({title:"加载中..."})
	}
	
	//发起请求
	uni.request({
		url:url,
		method: method || "GET",
		header: header,
		data: data,
		success: res => {
			if(res.statusCode && res.statusCode != 200) {
				uni.showModal({
					content: res.msg
				})
				return;
			}
			typeof param.success == "function" && param.success(res.data)
		},
		fail: err => {
			uni.showModal({
				content: err.msg || "网络异常"
			})
		},
		complete: (e) =>{
			uni.hideLoading();
			typeof param.complete == "function" && param.complete(e.data);
			return;
		}
	})
	
	
	
}