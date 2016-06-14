window.onload = function(){
		var randArray = [];
		var MaxNum = document.getElementById('MaxNum');
		var maxnum = MaxNum.value;
		// 生成数组
		function initrand(n){
			var arr = [];
			if (n=='' || n<0) {
				alert("请输入正确的顺序数");
				return false;
			};
			for (var i=1;i<=n;i++) {
				arr.push(i);
			};
			return arr;
		}
		function initArr() {
			if (MaxNum.addEventListener) {
    			MaxNum.addEventListener("change",changeGet);
			} else if (MaxNum.attachEvent) {
    			MaxNum.attachEvent("onchange",changeGet);
			}
		}

		function changeGet() {
			randArray = initrand(MaxNum.value);
		}
		// 点击事件
		function startrand(){
			var Draw = document.getElementById('Draw');
			if (Draw.addEventListener) {
    			Draw.addEventListener("click",preg);
			} else if (Draw.attachEvent) {
    			Draw.attachEvent("onclick",preg);
			}
		}
		function preg(){
			var arg2 = randArray.length - 1;
			if ( arg2 < 0 ) {
				alert("抽签结束");
				return; 
			};
			var getii = Math.floor(Math.random()*arg2);//rand(MAX);
			var maxnum = parseInt(MaxNum.value);
			console.log(maxnum);
			switch (randArray[getii]) {
   				case 1:
      				 alert("送你一朵fa,恭喜你哟！第一个展示");
       			 	break;
    			case 2:
      				 alert("你抽到的序号是："+randArray[getii]+"  快准备准备！马上到你了");
       			 	break;
       			case maxnum:
      				alert("你抽到的序号是："+randArray[getii]+" 爽呀,最后一个");
       			 	break;
    			default:
        			alert("你抽到的序号是："+randArray[getii]+" 不前不后,足矣！");
        			break;
        	}
			randArray.splice(getii,1);
		}
		initArr();
		startrand();
	}