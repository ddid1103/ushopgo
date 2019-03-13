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
				console.log($(".notice ul li").length)
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
 	
/*
	 第一步 ：  鼠标移入小图区   显示大图显示区和遮罩层mask
	 第二步 ：  鼠标移出小图区   隐藏大图显示区和遮罩层mask
	 第三步 ： 鼠标在小图区移动  让mask跟随鼠标移动  
	 		 注意 ：mask的边界处理
	 		 
	 		 设置右侧的大图和mask的移动方向相反
	 */
	
	var small = $id("small"), //小图区
	    mask = $id("mask"),   //小图显示区 遮罩层
	    big = $id("big"),	  //大图显示区
	    bigImg = $id("bigImg"), //大图区
	    smallImg = document.getElementsByClassName("smallImg")[0]; //小图
  
	small.onmouseover = function(){
		big.style.display = "block";
		mask.style.display = "block";
	}
	small.onmouseout = function(){
		big.style.display = "none";
		mask.style.display = "none";
	}
 	small.onmousemove = function(e){
 		var e = e || event ;
 		var x = e.pageX - box.offsetLeft - mask.offsetWidth/2;
 		var y = e.pageY - box.offsetTop - mask.offsetHeight/2;
 		var maxL = box.offsetWidth - mask.offsetWidth;
 		var maxT = box.offsetHeight - mask.offsetHeight;
 		x = Math.min( Math.max( 0,x ) , maxL );
 		y = Math.min( Math.max( 0,y ) , maxT );
 		mask.style.left = x + "px";
 		mask.style.top = y + "px";	
 		var bigImgLeft = -x * (bigImg.offsetWidth - big.offsetWidth)/(smallImg.offsetWidth - mask.offsetWidth);
 		var bigImgTop = -y * (bigImg.offsetHeight - big.offsetHeight)/(smallImg.offsetHeight - mask.offsetHeight);
 		bigImg.style.left = bigImgLeft +"px";
 		bigImg.style.top = bigImgTop + "px";	
 	}	
 //tab
    var olist = $id("list").children;
       ulist = $id("smalluu").children;
       for( var i = 0 ; i < olist.length ; i++ ){
       		olist[i].index = i
       		olist[i].onclick = function(){
       			for( var j = 0 ; j < olist.length ; j++ ){
       				ulist[j].style.display = "none";
       			}
       			var ind = this.index;
       			ulist[ind].style.display = "block";
       			smallImg = document.getElementsByClassName("smallImg")[ind];
       			src1 = this.children[0].src;
       			console.log(src1);
       			bigImg.src = src1;
       			console.log(smallImg.offsetWidth);
       		}
       }
       	
 	/*var $olist = $("#list li"),
 		$oUl = $("#smalluu li"),
 		$bigImg = $("#big img");
 	$olist.on("click",function(){
 		index = $(this).index();
 		console.log(index);
 		src1 = $(this).find("img").attr("src");
 		console.log(src1);
 		$bigImg.attr( "src" ,src1);
 		console.log($bigImg.attr("src"));
 		$smallImg = $(".smallImg").eq(index);
 		
 		console.log($smallImg.width(),$bigImg.width(),
 		$("#big").width(),$("#mask").width(),
 		$bigImg.css("top"),$bigImg.css("left"));	
 		$oUl.eq(index)
 		    .show()
 		    .siblings()
 		    .hide();
 	})*/
 	
 	/*商品详情中的吸顶效果*/
 	var $up = $("#up"),
 	    $goodlist = $("#goodlist"),
 	    $say = $("#say"),
 	    $serve = $("#serve");
 	$(window).scroll(function(){
 		/*console.log($(document).scrollTop());*/
 		var h1 = 900;
 		if( $(document).scrollTop() > 890 ){
 			$up.css({"position":"fixed"});
 			$up.css({"top":"0"});
 		}else{
 			$up.css({"position":""})
 		}
 	})
 	$goodlist.click(function(){
 		$("body,html").animate({"scrollTop":880},1000);
 	})
 	$say.click(function(){
 		$("body,html").animate({"scrollTop":15070},1500);
 	})
 	$serve.click(function(){
 		$("body,html").animate({"scrollTop":15350},1500);
 	})
 	$("#up li").click(function(){
 		$(this).addClass("bian")
               .siblings() 		           
 		       .removeClass("bian");
 	})
 	
 }