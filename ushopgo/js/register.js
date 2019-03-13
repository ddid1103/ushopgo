 window.onload = function(){
   //sidebar  侧边栏浮动的图标
	var user = document.getElementsByClassName("bar_top")[0].children[0],
	    uhover = document.getElementsByClassName("user_hover")[0],
	    side1 = document.getElementsByClassName("side1")[0];
	    care = document.getElementsByClassName("bar_top")[0].children[1],
	    side2 = care.children[0];
	    p1 = care.children[1];
	    ser = document.getElementsByClassName("bar_top")[0].children[2],
	    side3 = ser.children[0];
	    p2 = ser.children[1];
		user.onmouseover = function(){
			side1.style.backgroundPositionX = "-46px";
			uhover.style.right = "36px";	
		}
		user.onmouseout = function(){
			side1.style.backgroundPositionX = 0;
			uhover.style.right = "-263px";	
		}
		care.onmouseover = function(){
			side2.style.backgroundPositionX = "-46px";
			p1.style.right = "36px";
		}
		care.onmouseout = function(){
			side2.style.backgroundPositionX = 0;
			p1.style.right = "-90px";
		}
		ser.onmouseover = function(){
			side3.style.backgroundPositionX = "-46px";
			p2.style.right = "36px";
		}
		ser.onmouseout = function(){
			side3.style.backgroundPositionX = 0;
			p2.style.right = "-90px";
		}
		
		
	//下面用jq实现
	var code = $(".code"),
		side4 = $(".side4"),
		p3 = $(".bar_bot .code p"),
		ask = $(".ask"),
		side5 = $(".side5"),
		p4 = $(".bar_bot .ask p"),
		retop = $(".return_top"),
		side6 = $(".side6"),
		p5 = $(".bar_bot .return_top p");
		code.on("mouseover",function(){
			side4.css("background-position-x","-46px");
			p3.css("right","36px");
		}).on("mouseout",function(){
			side4.css("background-position-x",0);
			p3.css({"right":"-135px","top":"-73px"});
		})
		ask.on("mouseover",function(){
			side5.css("background-position-x","-46px");
			p4.css("right","36px");
		}).on("mouseout",function(){
			side5.css("background-position-x",0);
			p4.css("right","-90px");
		})
		retop.on("mouseover",function(){
			side6.css("background-position-x","-46px");
			p5.css("right","36px");
		}).on("mouseout",function(){
			side6.css("background-position-x",0);
			p5.css("right","-90px");
		})
		
	//top
	top();
	function top(){
		var $oUl = $(".notice ul"),
			index = 0,
			timer = null;
			timer = setInterval(autoPlay,2000);
			//console.log($(".notice ul li").length)
		    function autoPlay(){
		    	index ++;
		    	if(index == $(".notice ul li").length){
		    		index=1;
		    		$oUl.css("top",0)
		    	}
		    	$oUl.animate({"top":-index*28},1500)	
		    }
			
		$(".notice ul li").on("mouseover",function(){
			//console.log(this);
			clearInterval(timer);
			$(this).find("a").css("color","red");
		}).on("mouseout",function(){
			$(this).find("a").css("color","#666");
			timer = setInterval(autoPlay,2000);
		})	
	}
 	
 	//表单验证
 	
 	//验证手机号码
 	var flagTel = null;
 	$id("tel").onfocus = function(){
 		$id("etips").style.display="block";
 	}
 	$id("tel").onblur = function(){
 		var reg = /^1[35678]\d{9}$/;
 		var str = this.value;
 		if( reg.test(str) ){
 			$id("phonea1").className = "i-name dui";
 			$id("etips").style.display = "none";
 			flagTel = true;
 		}else{
 			$id("phonea1").className = "";
 			$id("etips").innerHTML = "手机格式不正确，请核对后再输入";
 			flagTel = false;
 		}
 	}
 	//验证码
 	var flagYz = null;
 	$id("s1").innerHTML = yzm();
 	$id("change").onclick = function(){
 		$id("s1").innerHTML = yzm();
 	}
 	$id("yz").onblur = function(){
 		var str = $id("s1").innerHTML;
 		//console.log($id("s1").innerHTML);
 		//console.log($id("yz").value);
 		var yzstr = this.value;
 		if( str == yzstr ){
 			flagYz = true;
 			$id("yetips").style.display = "none";
 		}else{
 			$id("yetips").style.display = "block";
 			$id("yetips").innerHTML = "验证码输入错误";
 			flagYz = false;
 		}
 	}
 	//设置密码
 	var flagPwd = null;
 	$id("pwd").onfocus = function(){
 		$id("petips").style.display = "block";
 		$id("petips").innerHTML = "6-20位字符，可使用数字、字母或符号的组合";
 	}
 	$id("pwd").onblur = function(){
 		var reg = /^\w{6,20}$/;
 		var str = this.value;
 		if( reg.test(str) ){
 			$id("phonea2").className = "i-name dui";
 			$id("petips").style.display = "none";
 			flagPwd = true;
 		}else{
 			$id("petips").innerHTML = "请输入正确的密码格式";
 		}
 	}
 	//第二次输入密码
 	var flagQpwd = null;
 	$id("qpwd").onfocus = function(){
 		$id("qetips").style.display = "block";
 		$id("qetips").innerHTML = "请确认密码";
 	}
 	$id("qpwd").onblur = function(){
 		var strpwd = $id("pwd").value;
 		var str = this.value;
 		if( strpwd == str ){
 			$id("phonea3").className = "i-name dui";
 			$id("qetips").style.display = "none";
 			flagQpwd = true;
 		}else{
 			$id("qetips").innerHTML = "两次密码输入不一致";
 		}
 	}
 	
 	//复选框必须选中
 	function checkAgree(){
 		var count = 0;
 		if( $id("xz").checked ){
 			count++;
 		}
 		if( count == 1 ){
 			return true;
 		}else{
 			return false;
 		}	
 	}
 	
 	//存cookie
 	var btn2 = document.querySelector("#btn2");
 	btn2.onclick = function(){
 		var arr = [];
 		var list = {};
 		var strTel = $id("tel").value;
 		var strPwd = $id("pwd").value;
 		list = {"tel":strTel,"pwd":strPwd};
 		if( flagTel && flagYz && flagPwd && flagQpwd && checkAgree() ){
 			var brr = getCookie("info");
 			var flag = true;
 			if( brr.length > 0 ){
 				arr = brr ;
 				//console.log(brr);
 				for( var i = 0 ; i < arr.length ; i++ ){
 					if( arr[i].tel == list.tel ){
 						flag = false;
 						alert("该手机号已被注册");
 						break;
 					}
 				}	
 			}
 			//console.log(list);
 			if( flag ){
 				arr.push(list);	
 				setCookie("info",JSON.stringify(arr),10);
 				location.href = "login.html";
 			}
 			//console.log(arr);
 			return true;
 		}
 		return false;
 	}
 }



		