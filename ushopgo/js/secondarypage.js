window.onload = function(){
	
	//nav 导航条
	nav();
	function nav(){
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
		}
	
	
	//top
	top();
	function top(){
			var $oUl = $(".notice ul"),
				index = 0,
				timer = null;
				timer = setInterval(autoPlay,2000);
				/*console.log($(".notice ul li").length)*/
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
	
	//顶部和底部的导航栏
		hover(".erji ul li");
		hover(".erji2 ul li");
        function hover(obj){
	   	var $ulist =$(obj);
	    $ulist.eq(1).on("mouseover",function(){
	    	$(this).find("img").attr("src","img/icon_b_208.png");
	    	$(this).find("p").css("color","#eb0007");
	    }).on("mouseout",function(){
	    	$(this).find("img").attr("src","img/icon_a_208.png");
	    	$(this).find("p").css("color","");
	    })
	     $ulist.eq(2).on("mouseover",function(){
	    	$(this).find("img").attr("src","img/icon_b_403.png");
	    	$(this).find("p").css("color","#eb0007");
	    }).on("mouseout",function(){
	    	$(this).find("img").attr("src","img/icon_a_403.png");
	    	$(this).find("p").css("color","");
	    })
	    $ulist.eq(3).on("mouseover",function(){
	    	$(this).find("img").attr("src","img/icon_b_208.png");
	    	$(this).find("p").css("color","#eb0007");
	    }).on("mouseout",function(){
	    	$(this).find("img").attr("src","img/icon_a_208.png");
	    	$(this).find("p").css("color","");
	    })
	    $ulist.eq(4).on("mouseover",function(){
	    	$(this).find("img").attr("src","img/icon_b_207.png");
	    	$(this).find("p").css("color","#eb0007");
	    }).on("mouseout",function(){
	    	$(this).find("img").attr("src","img/icon_a_207.png");
	    	$(this).find("p").css("color","");
	    })
        	
        }
		
	//link
	//link();
	function link(){
		var $link_list = $("#link_u li"),
		    $discuss = $("#goods-discuss"),
		    $con = $("#con");
			$link_list.on("mouseover",function(){
				$(this).css({"overflow":"visible"});
				$con.css({"position":"absolute"})
				$discuss.fadeIn(300);
			}).on("mouseout",function(){
				$(this).css({"overflow":"hidden"});	
				$discuss.fadeOut(300);
			})	
			
	}
	
	//link请求ajax
	var link_u = document.getElementById("link_u");
	var promise = ajaxPromise("link.json?id="+Math.random());
	var index = 1,
	    pageNum = 9,
	    u = document.getElementById("u");
	    showData();
	function showData(){
		promise.then(function(msg){
			console.log(JSON.parse(msg));
			var arr = JSON.parse(msg);
			var str = "";
			for( var i = (index-1)*pageNum ; i < index*pageNum ; i++ ){
				var pro = arr[i];
				if( i < arr.length ){
				str += `<a href="page.html" target="_blank">
		    			<li>
		    				<img src="img/${pro.src}" alt="" />
		    				<p class="link_p1">${pro.pname}</p>
		    				<p class="link_p2 p16">
		    					<sapn class="price">${pro.price}</sapn>
		    					<span class="say">评论<i>${pro.say}</i>条</span>
		    				</p>
		    				<p class="link_p3">
		    					<span class="label-mian l"><strong>免运费</strong></span>
		    					<span class="score-icon l"><i>积</i>${pro.jf}</span>
		    				</p>
		    				<div class="goods-discuss" id="goods-discuss">
		    					<h4 class="discuss-tit">会员评价：</h4>
		    					<span>
	                    			<img src="img/leftyin.jpg">
	                			</span>
	                			<span class="str">${pro.pj}</span>
	                			<span>
	                    			<img src="img/rightyin.jpg">
	                			</span>
		    				</div>
		    			</li>
		    		</a>`		
				}
			}
			link_u.innerHTML = str;
			//获取总页数
			 pageTotle = Math.ceil(arr.length/pageNum);
			console.log(pageTotle);
			var str = "";
			for( var j = 1 ; j <= pageTotle ; j++){
				str += `<li>${j}</li>`
			}
			u.innerHTML = str;
		})
	    	
	}
	//利用事件委托    点击每一个li-委托  获取当前页码的数据
	u.onclick = function(e){
		var e = e || event;
		var target = e.target || e.srcElement;
		if( target.tagName = "LI" ){
			index = target.innerHTML;
			showData();
		}
	}
	//下一页
	$id("right").onclick = function(){
		if( index == pageTotle ){
			index = pageTotle;
			alert("已经是最后一页了")
		}else{
			index++;
		}
		showData();
	}
	$id("left").onclick = function(){
		if( index == 1 ){
			index = 1;
			alert("已经是第一页了")
		}else{
			index--;
		}
		showData();
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


