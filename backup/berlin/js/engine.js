$(document).ready(function(){
	var owl = $("#intellect");
	owl.owlCarousel({
		items : 1,
		autoPlay : 60000,
		singleItem:true
	});

	// modal window
	var myClose = function(hash) {
		hash.w.fadeOut('100', function() {
			$("body").removeClass("hidden");
			hash.o.remove();
		});
	},	
	myShow = function(hash) {
		if(hash.c.overlay > 0) hash.o.prependTo('body');			
		$("body").addClass("hidden");
		hash.w.show();
	}	

	$("#reg").jqm({
		trigger: '.signin',
		onHide: myClose,
		onShow: myShow
	});


	// validate
	var errorTxt = 'Ошибка отправки';
	$("#reg form").validate({
		submitHandler: function(form){
			strSubmit=$(form).serialize();
			$.ajax({type: "POST",url: $("#reg form").attr('action'),data: strSubmit});
			$.ajax({type: "POST",url: "/feedback.ajax.php",data: strSubmit,
				success: function(){
					sendSuccess('#reg');				
				}
			}).fail(function(error){alert(errorTxt)});
		}
	});


	// =заглушка для IE
	var browser = navigator.userAgent.indexOf("MSIE");
	var version = parseInt(navigator.userAgent.substr(browser + 5, 2));
	if (version !== -1) var IE = true;
	if (IE && version < 9) {
		var IEhelp = document.createElement("div");
		IEhelp.style.width = "98.8%";
		IEhelp.style.padding = "11px";
		IEhelp.style.backgroundColor = "#CC3333";
		IEhelp.style.color = "#FFFFFF";
		IEhelp.style.textAlign = "center";
		IEhelp.style.font = "normal 14px/1.2 Helvetica Neue, Tahoma, Verdana, Arial, sans-serif";
		IEhelp.innerHTML = 'Внимание! Вы используете устаревший браузер. <a href="/ie6/ie6.html" target="_blank" style="color: #FFFFFF; text-decoration: underline;">Подробнее &#187;</a>';
		if (document.body.firstChild) {
			document.body.insertBefore(IEhelp, document.body.firstChild);
		}
		else {
			document.body.appendChild(IEhelp);
		}
	}
	// =/заглушка для IE		
})

var thank = '<div class="thank text-center"><p>Вы успешно прошли регистрацию на «Мозгву», </br>а это уже серьезный шаг к победе! <br/>Скоро вы получите SMS с подтверждением. <p>По волнующим вас вопросам пишите сюда: berlin@mozgva.ru</p> <img src="https://www.google-analytics.com/collect?v=1&tid=UA-66660086-1&cid=CLIENT_ID_NUMBER&t=event&ec=berlin&ea=form&el=send"><!-- Мы позвоним тебе, дружочек, за час до <br> начала бар-олимпиады и убедимся, что <br>ты идешь. Лады? Ну вот и славно :)</p><p>Если что, звони +7 (987) 654-32-10 --></p></div>';
function sendSuccess(callback){
	$(callback).find("fieldset").html(thank);
}