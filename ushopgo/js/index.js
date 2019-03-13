 function fn(msg){
	 	var pro = msg.s;//["日历", "日期", "日元汇率", "日元", "如懿传", "人民币兑美元", "人民网"]
	 	var str = "";
	 	for( var i = 0 ; i < pro.length ; i++ ){
	 		str += `<li><a href="https://www.baidu.com/s?wd=${pro[i]}">${pro[i]}</a></li>`;
	 	}
	 	box1.innerHTML = str ;
	 }
	
window.onload = function(){
	//nav 导航条
	$p = $(".sysp p");
	$dd = $(".alnav dd");
	$ol = $(".alnav ol")
	$p.on("mouseover",function(){
		$dd.css("display","block");
	})
	$p.on("mouseout",function(){
		$dd.css("display","none");
	})
	$dd.on("mousemove",function(){
		$dd.css("display","block");
	})
	$dd.on("mouseout",function(){
		$dd.css("display","none");
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
	//jsonp跨域请求
	var search = document.getElementById("txt");
	search.onkeyup = function(){
		var txt = this.value;
		/*console.log(txt);*/
		var script = document.createElement("script");
		document.body.appendChild(script);
		script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+txt+"&cb=fn";
	}
	
	
	
	
	
	
	
	//banner 无缝轮播
	   banner();
	function banner(){  	
		    var oUl = document.getElementById("banner-inner");
		    var blist = document.getElementById("blist").children;
		    var ban = document.getElementById("banner");
		    var st1 = document.getElementById("banner1").children[3];
		    var st2 = document.getElementById("banner1").children[4];
		    var target = 0;
		    var timer = null;
		    var index = 0;
		    timer = setInterval( autoPlay,2500 );
		function autoPlay(){
			index++;
			for( var i = 0 ; i < blist.length ; i++ ){
				blist[i].children[0].className ="";
			}
			if( index == blist.length + 1 ){
				index = 1; // 当图片到第4张是 index显示第二张
				oUl.style.left = 0; //当图片到最后一张时强制让left=0;
			}
			blist[index ==blist.length ? 0 : index].children[0].className = "current";
			startMove( oUl,{left:-index*1263} )
		}
		for( let i = 0 ; i < blist.length ; i++ ){
			blist[i].onmouseover = function(){
				clearInterval( timer );
				index = i - 1 ;
				autoPlay();
			}
			blist[i].onmouseout = function(){
				timer = setInterval( autoPlay,2500 );			
			}
		}
		ban.onmouseover = function(){
			st1.style.display = "block";
			st2.style.display = "block";
		}
		ban.onmouseout = function(){
			st1.style.display = "none";
			st2.style.display = "none";
		}
		st1.onmouseover = function(){
			clearInterval( timer );
			st1.style.backgroundPositionX = "-92px";
			st1.style.backgroundPositionY = "-76px";
		}
		st1.onmouseout = function(){
			st1.style.backgroundPositionX = "0";
			st1.style.backgroundPositionY = "0";
			timer = setInterval( autoPlay,2500 );
		}
		st2.onmouseover = function(){
			clearInterval( timer );
			st2.style.backgroundPositionX = "-92px";
			st2.style.backgroundPositionY = "0";
		}
		st2.onmouseout = function(){
			st2.style.backgroundPositionX = "0";
			st2.style.backgroundPositionY = "-76px";
			timer = setInterval( autoPlay,2500 );
		}
		st1.onclick = function(){
			if( target == -1263 * 2 ){
				target = -1263 * 2 ;
			}else{
				target -= 1263;	
			}
			startMove( oUl , {left:target} )
		}
		st2.onclick = function(){
			if( target == 0 ){
				target = 0 ;
			}else{
				target += 1263;	
			}
			startMove( oUl , {left:target} )
		}
	
	}
	
	 
	 
	//liveShow   倒计时
	var time1 = document.getElementsByClassName("time1");
	var start = new Date();
	var end = new Date("2019-1-26 15:47:00");
	//第二步 ： 获取时间差    t  秒 
	var t = (end.getTime() - start.getTime())/1000;
	for(var i = 0 ; i < time1.length;i++){
		showTime(time1[i]);	
	}
	function showTime(time){
		if( t < 0 ){
			time.innerHTML = "商品下架了";
			return;
		}
		//剩余小时数
		var h = parseInt(t/3600);
		//剩余的分钟
		var m = parseInt( (t - h*3600)/60 );
		//剩余的秒数
		var s = parseInt( t - h*3600 - m*60 );
		time.innerHTML = h + ":" + m + ":" + s;
	}
	var timer = setInterval( function(){
		t--;
		if( t < 0 ){
			clearInterval( timer );
			time1.innerHTML = "商品下架了";
		}else{
			
			for(var i = 0 ; i < time1.length;i++){
				showTime(time1[i]);
			}
		}
	},1000 )
	
	
	
	//daily  鼠标控制图片滚动
	$sp1 = $(".daily_inner .sp1");
	$sp2 = $(".daily_inner .sp2");
	$ulist = $(".daily_inner ul")
	$sp1.on("click",function(){
		$ulist.animate({left:-723},1200)
	})
	$sp2.on("click",function(){
		$ulist.animate({left:0},1200)
	})
		
	// main  请求ajax 加载页面中的数据
	main();
	function main(){
		var main_ul = document.getElementById("main_u");
		var promise = ajaxPromise("main.json?id="+Math.random());
		promise.then(function(msg){
			var arr = JSON.parse(msg);
			//console.log(arr);
			var str = "";
			for( var i = 0 ; i < arr.length ; i++ ){
				var pro = arr[i];
				str +=`<li>
				       <a href="page.html" target = "_blank">
						<img src="img/${pro.src}" alt="" />
						<p class="mp1">${pro.pname}</p>
						<p class="mp2">${pro.sname}</p>
						<p class="mp3">
							<span class="price">
								<i>￥</i>${pro.price}
							</span>
							<span class="sale_price">
								<i>￥</i>${pro.old}
							</span>
							<span class="purchased">
								<i>${pro.num}人</i>
								已购买
							</span>
						</p>
						<h4></h4>
						</a>
					</li>`
			}
			main_ul.innerHTML = str;
		})
		
	}
	
	
	
	//side  滚动条事件返回顶部
	var sidtop = document.getElementById("return_top").children[1];
	window.onscroll = function(){
		var stop = document.documentElement.scrollTop || document.bodyscrollTop
		sidtop.onclick = function(){
			stop = 0;
		}
	}
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

}


