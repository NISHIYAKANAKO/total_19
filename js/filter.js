$(function(){
	$("button").click(function(){
		var target=$(this).attr("value");
		$("#list li").each(function(){
			$(this).animate({"opacity":0},300,function(){
			$(this).hide();
			if($(this).hasClass(target)||target=="all"){
				$(this).show();
				$(this).animate({"opacity":1},300);
			}
			});
		});
	});
})

$(function () {
	// タイトルをクリックすると
	$(".js-accordion-title").on("click", function () {
	  // クリックしたタイトル以外のopenクラスを外す(－から＋にする)
	  $(".js-accordion-title").not(this).removeClass("open");
	  // クリックしたタイトル以外のコンテンツを閉じる
	  $(".js-accordion-title").not(this).next().slideUp(300);
	  // クリックしたタイトルにopenクラスを付け外しして＋と－を切り替える
	  $(this).toggleClass("open");
	  // クリックしたタイトルの次の要素(コンテンツ)を開閉
	  $(this).next().slideToggle(300);
	});
  });

  
$(function(){
	$("button").click(function(){
		var target=$(this).attr("value");
		$("#list li").each(function(){
			$(this).animate({"opacity":0},300,function(){
			$(this).hide();

			if($(this).hasClass(target)||target=="all"){
				$(this).show();
				$(this).animate({"opacity":1},300);
			}
			});
		});
	});
})

const visits = parseInt(localStorage.getItem("visits")) || 0;
localStorage.setItem("visits", visits + 1);

// 訪問回数を表示する
document.getElementById("visits").innerText = `訪問回数: ${visits + 1}`;