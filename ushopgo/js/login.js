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
	
	//登录功能实现   记住密码功能       14天
	/*var login = document.getElementById("btn");
	var ck = document.getElementById("check");
	var json = getCookie("info");
	console.log(json);
	login.onclick = function(){
		var strTel = $id("yztel").value;
		var strPwd = $id("yzpwd").value;
		if( strTel == json.tel && strPwd == json.pwd ){
			location.href = "index.html";
		}	
		if( ck.checked ){
			setCookie( "obj",JSON.stringify(json),10 );
		}
	}
	
	if( getCookie("obj") ){
		var obj = getCookie("obj");
		$id("yztel").value = obj.tel;
		$id("yzpwd").value = obj.pwd;
		ck.checked = true;
	}*/
	var login = document.getElementById("btn");
	var ck = document.getElementById("check");
	login.onclick = function(){
		var arr = getCookie("info");
		console.log(arr);
		var strTel = $id("yztel").value;
		var strPwd = $id("yzpwd").value;
		for( var i = 0 ; i < arr.length ; i++ ){
			if( strTel == arr[i].tel && strPwd == arr[i].pwd ){
				location.href = "index.html";
			}	
			if( ck.checked ){
				setCookie( "obj",JSON.stringify(arr[i]),10 );
			}
			
		}
	}
	
	if( getCookie("obj") ){
		var obj = getCookie("obj");
		$id("yztel").value = obj.tel;
		$id("yzpwd").value = obj.pwd;
		ck.checked = true;
	}
}
