//设置cookie
function setCookie(key,value,day){
	if(day){
		var now = new Date;
		now.setDate( now.getDate() + day )
		document.cookie = `${key}=${value};expires=${now}`
	}else{
		
		document.cookie = `${key}=${value}`
	}
}

//获取cookie
function getCookie(key){
	var str = document.cookie;//"uname=mark; age=18; tel=1888888778; addr=bj; sex=男"	
	if( str ){
		var reg = /\s+/g;
		var str = str.replace( reg , "" );
		var arr = str.split(";");//将字符串拆分成数组
 //console.log(arr); ["uname=mark", "age=18", "tel=1888888778", "addr=bj", "sex=男"]
		//arr[0].split("=")[1]
		//遍历数组  找到键对应的值
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == key ){
				brr = item[1];
				return JSON.parse(brr);
			}
		}
		//循环结束后 如果没有找到key 就返回一个""
			return "";	
	}
	//如果没有cookie  返回一个""
	return "";
}

//删除cookie
function removeCookie(){
	setCookie(key,"",-1)
}
