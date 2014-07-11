$(function () {

	// 页面效果
	experience();  //首页个人经历时间轴

	// 基础功能
	anchorSlide();  //锚链接平滑移动
	picCenter();  //居中截取图片

	// 插件效果
	fancybox();  //fancybox弹窗相册

})





//*********************************************************************//
//                              页面效果                               //
//*********************************************************************//


// 首页个人经历时间轴
function experience () {
	if ($(".index .experience").length > 0) {
		$(".index .experience .item:even").addClass("even");
		$(".index .experience .item:odd").addClass("odd");
	};
}





//*********************************************************************//
//                              基础功能                               //
//*********************************************************************//


// 锚链接平滑移动
function anchorSlide () {
	$("a[href*='#']").click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $("[name=" + this.hash.slice(1) + "]");
			if (this.hash.slice(1)){
				if($target.length){
					var targetOffset = $target.offset().top;
					$("html,body").animate({
						scrollTop: targetOffset
					},
					300);
				}
			}
			else{
				$("html,body").animate({
					scrollTop: 0
				},
				300);
			}
			return false;  //防止页面跳动
		}
	});	
}

// 居中截取图片
function picCenter () {
	if($(".pic_center").length > 0)
	{
		setAllCenter();
	}
	function setImg(thisEle){
		var wrapWidth = $(thisEle).width();
		var wrapHeight = $(thisEle).height();
		var picWidth = $(thisEle).find("img").width();
		var picHeight = $(thisEle).find("img").height();
		var wrapShape = wrapWidth / wrapHeight;
		var picShape = picWidth / picHeight;
		var picWidthS = picWidth/picHeight*wrapHeight;
		var picHeightS = picHeight/picWidth*wrapWidth;
		if(wrapShape > picShape)
		{
			$(thisEle).find("img").css({"width":"100%","height":"auto","top":(wrapHeight-picHeightS)/2,"left":"0"});
		}
		else
		{
			$(thisEle).find("img").css({"width":"auto","height":"100%","left":(wrapWidth-picWidthS)/2,"top":"0"});
		}
	}
	function setAllCenter(){
		$(".pic_center").each(function(){
			var self = this;
			var pic = $(self).find("img");
			var src = $(this).attr("src");
			$(pic).hide();
			var imgW,imgH;
			var img = new Image();
			$(img).bind("load", function() {
				imgW = pic.width();
				imgH = pic.height();
				setImg(self);
			}).attr("src", pic.attr("src"));
			pic.show()
		});
	}
}






//*********************************************************************//
//                              插件效果                               //
//*********************************************************************//


// fancybox弹窗相册
function fancybox () {
	if ($(".fancybox").length > 0) {
		$('.fancybox').fancybox({
			prevEffect : 'none',
			nextEffect : 'none',
			closeBtn  : false,
			arrows    : true,
			nextClick : true
		});
	};
}