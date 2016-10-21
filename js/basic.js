$(function(){
	function resize(){
		var windowWidth=$(window).width();
		var isSmallScreen=windowWidth<768;
		$('#main_ad > .carousel-inner > .item').each(function(i,item){
			var $item=$(item);
			//var imgSrc= isSmallScreen?$item.data('image-xs'):$item.data('image-lg')
			var imgSrc=$item.data(isSmallScreen?'image-xs' : 'image-lg');
			$item.css('backgroundImage','url("'+imgSrc+'")');
			if(isSmallScreen){
				$item.html('<img src="'+imgSrc+'"/>');
			}else{
				$item.empty();
			}
		});
		
		//控制标签页的标签容器宽度
		var $ulContainer = $('.nav-tabs');
		var width = 30; 
		$ulContainer.children().each(function(index, element) {
		    // console.log(element.clientWidth);
		    // console.log($(element).width());
		    width += element.clientWidth;
		});
		$ulContainer.css('width', width);
		/*if (width > $(window).width()) {
			
		}*/
		
	}
	$(window).on('resize', resize).trigger('resize');
	
	// 初始化tooltips插件
 	$('[data-toggle="tooltip"]').tooltip();
	
	//新闻点击事件
	var title=$(".news-title");
	$('#news .nav-pills a').on('click',function(){
		$this=$(this);
		title.text($this.data('title'));
	});
	
	
	
})
