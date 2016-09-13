window.onload = function(){
	var arr = [
	['专题',['星动力','领土主权','邻邦纪实'],['img/1.jpg','img/2.jpg','img/3.jpg']],
	['实事',['国家大事','流行资讯','战地纪实'],['img/4.jpg','img/5.jpg','img/6.jpg']],
	['资讯',['科技前沿','人工智能','心跳瞬间','赞美时刻'],['img/5.jpg','img/2.jpg','img/8.jpg','img/7.jpg']]
	];
	var oBox = document.getElementById('box');
	var tTab = oBox.getElementsByTagName('p')[0].getElementsByTagName('span');
	var aPic = oBox.getElementsByTagName('div');
	var num = 0;
	var num2 = 0;
	time = null;
	//初始化显示
	tTab[0].className = 'active';
	aPic[0].className = 'pshow';
	//给数组添加循环函数传参
	for(var i = 0; i < arr.length; i++){
		fn(i);
	}
//	封装函数
	function fn(n){
		var oImg = aPic[n].getElementsByTagName('img')[0];
		var aLi = aPic[n].getElementsByTagName('li');
		//初始化小选项卡
		aLi[0].className = 'active';
		//给大选项卡添加鼠标移入事件
		tTab[n].onmouseover = function(){
			//清空全部
			for(var i = 0; i < tTab.length; i++){
				tTab[i].className = '';
				aPic[i].className = 'hide';
			}
			for(var i = 0;i < aLi.length; i++){
				aLi[i].className = '';
			}
			//改变当前移入的颜色并且对应pic显示
			aLi[0].className = 'active';
			oImg.src = arr[n][2][0];
			this.className = 'active';
			aPic[n].className = 'pshow';
			num = n;
			num2 = 0;
		}
//		鼠标移入小选项卡切换
		for(var i = 0; i < aLi.length; i++){
			aLi[i].index = i;
			aLi[i].onmouseover = function(){
				for(var i = 0; i < aLi.length; i++){
					aLi[i].className = '';
				}
				this.className = 'active';
				oImg.src = arr[n][2][this.index];
				num2 = this.index;
				num = n;
			}
		}
	}
	//设定定时器自动轮播，num2++控制li，完成后再走num++控制上边tab切换
	time = setInterval(auto,1000);
	//封装自动轮播的函数
	function auto(){
		//循环num
		if(num == tTab.length){
			num = 0;
		}
		for(var i = 0; i < tTab.length; i++){
			tTab[i].className = '';
			aPic[i].className = 'hide';
		}
		tTab[num].className = 'active';
		aPic[num].className = 'pshow';
		var oImg = aPic[num].getElementsByTagName('img')[0];
		var aLi = aPic[num].getElementsByTagName('li');
		for(var i = 0; i < aLi.length; i++){
			aLi[i].className = '';
		}
		aLi[num2].className = 'active';
		oImg.src = arr[num][2][num2];
		num2++;
		if(num2 == aLi.length){
			num2 = 0;
			num++;
		}
	}
	//鼠标移入关闭定时器
	oBox.onmouseover = function(){
		clearInterval(time);
	}
	//鼠标移出开启定时器
	oBox.onmouseout = function(){
		time = setInterval(auto,1000);
	}
}
