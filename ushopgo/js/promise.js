//使用promise对象完成  承诺使用该对象完成ajax请求服务器数据 （ajax）
	function ajaxPromise(url){
		var pro = new Promise(function(success,failed){
			var ajax = null;
			if( window.XMLHttpRequest ){
				ajax = new XMLHttpRequest();
			}else{
				ajax = new ActiveXObject("Microsoft.XMLHTTP");
			}
			ajax.open("get",url);
			ajax.send();
			ajax.onreadystatechange = function(){
				if( ajax.readyState == 4 && ajax.status == 200 ){//成功的条件
					success(ajax.responseText);
				}
			}
			//经过一段时间后 都没有拿到服务器返回的结果  基本上就是失败了
			setTimeout(function(){
				failed("数据请求失败");
			},5000)
		})
		return pro;
	}