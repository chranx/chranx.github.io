$(document).on("ready", function(){
    $("body").append("<div id='menu-overlay'></div>");

    // 비주얼 영역 높이값 설정
	var hei = $(window).innerHeight();
	$(".visual-section.h-100").css("height", hei);

	// dim click
    $("#menu-overlay").click(function(){
        if($(this).hasClass("pop-on")){
            var id = $(this).data("pop-id");
            $(this).removeClass("pop-on").removeAttr("data-pop-id").removeData().fadeOut(100);
            $("#"+id+"").removeClass("pop-on").fadeOut(100);
        }
	});

	$(document).bind("contextmenu", function(e) {
		return false;
    });
});

$(window).on('load', function(){
	// 비주얼 영역 높이값 설정
	var w = $(window).innerWidth(),
		h = $(window).innerHeight();
	$(".visual-section.h-100").css("height", h);
});

function scrollFixed() { // 스크롤 Fixed
	var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);
	var ovY;
	!isTablet === true ? (ovY = "scroll") : (ovY = "hidden");

	$("html").css({
		overflow : "hidden",
		"overflow-y" : ovY,
		position : "fixed",
		width : "100%",
		top : -$(window).scrollTop()
	});
}

function scrollAuto() {  // 스크롤 Auto
	var hTop = $("html").css("top");
	var hTop_2 = hTop.split("px");
	var winTop = Math.abs(hTop_2[0]);

	$("html").removeAttr("style");
	window.scrollTo(0, winTop);
}

function popOpen(padding, id) { // 팝업 열기 onclick
	// scrollFixed();
	// dim
	$("#menu-overlay")
	.addClass("pop-on")
	.attr("data-pop-id", id)
	.fadeIn(300);

	$("#"+id+"")
	.css({"padding": ""+padding+"", "margin-top": -$("#"+id+"")
	.outerHeight()/2})
	.addClass("pop-on")
	.fadeIn(300);
}

function popClose(id) { // 팝업 닫기 onclick
	// scrollAuto();
	// dim click
	$("#menu-overlay[data-pop-id="+id+"]")
	.removeClass("pop-on")
	.removeAttr("data-pop-id")
	.removeData()
	.fadeOut(100);

	$("#"+id+"")
	.removeClass("pop-on")
	.fadeOut(100);
}

function dataPicker(data) { // 달력 출력
	var el = $("#calendar");
	var date = new Date(data);

	el.datepicker({
		dateFormat: 'yyyy-mm-dd' //Input Display Format 변경
		,defaultDate: date // 기본 날짜 설정
		,showOtherMonths: false //빈 공간에 현재월의 앞뒤월의 날짜를 표시
		,showMonthAfterYear: false //년도 먼저 나오고, 뒤에 월 표시
		,changeYear: false //콤보박스에서 년 선택 가능
		,changeMonth: false //콤보박스에서 월 선택 가능      
		,constrainInput: false //형식외 텍스트 입력제한. 디폴트 true
		//,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
		//,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
		//,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
		//,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
		//,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
		,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
		,monthNames: ['<strong>1</strong> January','<strong>2</strong> February','<strong>3</strong> March','<strong>4</strong> April','<strong>5</strong> May','<strong>6</strong> June','<strong>7</strong> July','<strong>8</strong> August','<strong>9</strong> September','<strong>10</strong> October','<strong>11</strong> November','<strong>12</strong> December'] //달력의 월 부분 Tooltip 텍스트
		,dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'Sa']
		,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
		//,minDate: "-1M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
		//,maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
		,onSelect: function(date){
			
		}
	});
}

function dataPicker2(y,m,d) { // 달력 출력
	var el = $("#calendar");
	var date = new Date(y,m,d,'00','00');	

	el.datepicker({
		dateFormat: 'yyyy-mm-dd' //Input Display Format 변경
		,defaultDate: date // 기본 날짜 설정
		,showOtherMonths: false //빈 공간에 현재월의 앞뒤월의 날짜를 표시
		,showMonthAfterYear: false //년도 먼저 나오고, 뒤에 월 표시
		,changeYear: false //콤보박스에서 년 선택 가능
		,changeMonth: false //콤보박스에서 월 선택 가능      
		,constrainInput: false //형식외 텍스트 입력제한. 디폴트 true
		//,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
		//,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
		//,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
		//,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
		//,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
		,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
		,monthNames: ['<strong>1</strong> January','<strong>2</strong> February','<strong>3</strong> March','<strong>4</strong> April','<strong>5</strong> May','<strong>6</strong> June','<strong>7</strong> July','<strong>8</strong> August','<strong>9</strong> September','<strong>10</strong> October','<strong>11</strong> November','<strong>12</strong> December'] //달력의 월 부분 Tooltip 텍스트
		,dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'Sa']
		,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
		//,minDate: "-1M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
		//,maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
		,onSelect: function(date){
			
		}
	});
}

function dataPickerKor(y,m,d) { // 달력 출력
	var el = $("#calendar");
	var date = new Date(y,m,d,'00','00');	

	el.datepicker({
		dateFormat: 'yyyy-mm-dd' //Input Display Format 변경
		,defaultDate: date // 기본 날짜 설정
		,showOtherMonths: false //빈 공간에 현재월의 앞뒤월의 날짜를 표시
		,showMonthAfterYear: false //년도 먼저 나오고, 뒤에 월 표시
		,changeYear: false //콤보박스에서 년 선택 가능
		,changeMonth: false //콤보박스에서 월 선택 가능      
		,constrainInput: false //형식외 텍스트 입력제한. 디폴트 true
		//,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
		//,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
		//,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
		//,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
		//,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
		,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //월/달력의 월 부분 텍스트
		,monthNames: ['<strong>1</strong> 월','<strong>2</strong> 월','<strong>3</strong> 월','<strong>4</strong> 월','<strong>5</strong> 월','<strong>6</strong> 월','<strong>7</strong> 월','<strong>8</strong> 월','<strong>9</strong> 월','<strong>10</strong> 월','<strong>11</strong> 월','<strong>12</strong> 월'] //달력의 월 부분 Tooltip 텍스트
		,dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'Sa']
		,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
		//,minDate: "-1M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
		//,maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
		,onSelect: function(date){
			
		}
	});
}

var imgGallerySlider;
var popGallerySlider;

function imageGallery() { // 포토갤러리
	imgGallerySlider = $('#image-gallery').lightSlider({
		gallery:true,
		item:1,
		thumbItem:5,
		slideMargin: 0,
		speed:500,
		auto:false,
		loop:true,
		//adaptiveHeight:true,
		onSliderLoad: function() {
			$('#image-gallery').removeClass('cS-hidden');
		},
		onAfterSlide: function(el, index) {
			popGallerySlider.goToSlide(index);
		}
	});
}

function popGallery() { // 팝업갤러리
	popGallerySlider = $('#pop-gallery').lightSlider({
		gallery:true,
		item:1,
		thumbItem:5,
		slideMargin: 0,
		speed:500,
		auto:false,
		loop:true,
		adaptiveHeight:true,
		onSliderLoad: function(el, index) {
			$('#pop-gallery').removeClass('cS-hidden');
			el.find("li:not(.clone)").eq(0).addClass("pg_idx");
		},
		onAfterSlide: function(el, index){

		}
	});
}

function galleryPOP(toggle, type, index) { // 갤러리팝업 열고,닫기
	if(type === "type1") return galleryType1(toggle);
	if(type === "type2") return galleryType2(toggle, index);
	if(type === "type3") return galleryType3(toggle, index);
	$(document).bind("contextmenu", function (e) {
		return false;
	});
}

function galleryType1(toggle){ // 슬라이드형 갤러리
	var el = $(".gallery-pop-wrap"),
		sw = $(".lSSlideWrapper");

	if(sw.hasClass('moveOn')) return this;
	
	if(toggle === "open"){
		el.css({
			"opacity": 1,
			"transform": "translate3d(0,0,0)"
		});
		el.find(".pop-body").css({
			"visibility": "visible"
		}).delay(500).animate({
			"opacity" : 1
		}, 300);
		scrollFixed();
	} else if(toggle === "close"){
		var index = $('#pop-gallery li.active').index();
		imgGallerySlider.goToSlide(index);
		el.removeAttr("style");
		el.find(".pop-body").removeAttr("style");
		scrollAuto();
	}
}

function galleryType2(toggle, index){ // 사각형 갤러리
	var el = $(".gallery-pop-wrap");

	if(toggle === "open"){
		popGallerySlider.goToSlide(index);
		el.css({
			"opacity": 1,
			"transform": "translate3d(0,0,0)"
		});
		el.find(".pop-body").css({
			"visibility": "visible"
		}).delay(400).animate({
			"opacity" : 1
		}, 300);
		scrollFixed();
	} else if(toggle === "close"){
		el.removeAttr("style");
		el.find(".pop-body").removeAttr("style");
		scrollAuto();
	}
}

function galleryType3(toggle, index){ // 원형 갤러리
	var el = $(".gallery-pop-wrap");

	if(toggle === "open"){
		popGallerySlider.goToSlide(index);
		el.css({
			"opacity": 1,
			"transform": "translate3d(0,0,0)"
		});
		el.find(".pop-body").css({
			"visibility": "visible"
		}).delay(400).animate({
			"opacity" : 1
		}, 300);
		scrollFixed();
	} else if(toggle === "close"){
		el.removeAttr("style");
		el.find(".pop-body").removeAttr("style");
		scrollAuto();
	}
}

function daumMap(x, y) { // 다음 지도	
	var mapContainer = document.getElementById('map_canvas'), // 지도를 표시할 div 
		mapOption = {
			center: new daum.maps.LatLng(x, y), // 지도의 중심좌표
			level: 3 // 지도의 확대 레벨
		};  

	// 지도를 생성합니다    
	var map = new daum.maps.Map(mapContainer, mapOption); 

	// 마커가 표시될 위치입니다 
	var markerPosition  = new daum.maps.LatLng(x, y); 

	var daum_marker = new daum.maps.Marker({ 
		// 지도 중심좌표에 마커를 생성합니다 
		map: map,
		position: markerPosition
	}); 
}

function daumMapLowLevel(x, y) { // 다음 지도
	var mapContainer = document.getElementById('map_canvas'), // 지도를 표시할 div 
		mapOption = {
			center: new daum.maps.LatLng(x, y), // 지도의 중심좌표
			level: 4 // 지도의 확대 레벨
		};  

	// 지도를 생성합니다    
	var map = new daum.maps.Map(mapContainer, mapOption); 

	// 마커가 표시될 위치입니다 
	var markerPosition  = new daum.maps.LatLng(x, y); 

	var daum_marker = new daum.maps.Marker({ 
		// 지도 중심좌표에 마커를 생성합니다 
		map: map,
		position: markerPosition
	}); 
}

function daumMapLevel(x, y, lvl) { // 다음 지도
	if (lvl == "" ){
		lvl = 3;
	}
	var mapContainer = document.getElementById('map_canvas'), // 지도를 표시할 div 
		mapOption = {
			center: new daum.maps.LatLng(x, y), // 지도의 중심좌표
			level: lvl // 지도의 확대 레벨
		};  

	// 지도를 생성합니다    
	var map = new daum.maps.Map(mapContainer, mapOption); 

	// 마커가 표시될 위치입니다 
	var markerPosition  = new daum.maps.LatLng(x, y); 

	var daum_marker = new daum.maps.Marker({ 
		// 지도 중심좌표에 마커를 생성합니다 
		map: map,
		position: markerPosition
	}); 
}

function daumMapLevelDrag(x, y, lvl, draggable) { // 다음 지도
	if (lvl == "" ){
		lvl = 3;
	}
	var mapContainer = document.getElementById('map_canvas'), // 지도를 표시할 div 
		mapOption = {
			center: new daum.maps.LatLng(x, y), // 지도의 중심좌표
			level: lvl // 지도의 확대 레벨
		};  

	// 지도를 생성합니다    
	var map = new daum.maps.Map(mapContainer, mapOption); 

	// 마커가 표시될 위치입니다 
	var markerPosition  = new daum.maps.LatLng(x, y); 

	var daum_marker = new daum.maps.Marker({ 
		// 지도 중심좌표에 마커를 생성합니다 
		map: map,
		position: markerPosition
	});
		
	map.setDraggable(draggable);    
}

function daumMapInfo(x, y, lvl, infoText){
	if (lvl == "" ){
		lvl = 3;
	}

	var mapContainer = document.getElementById('map_canvas'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(x, y), // 지도의 중심좌표
        level: lvl // 지도의 확대 레벨
    };

	var map = new kakao.maps.Map(mapContainer, mapOption);

	// 마커가 표시될 위치입니다 
	var markerPosition  = new kakao.maps.LatLng(x, y); 

	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
		position: markerPosition
	});

	// 마커가 지도 위에 표시되도록 설정합니다
	marker.setMap(map);

	var iwContent = '<div style="padding:0.3125rem 1.25rem;font-size:0.625rem;font-family:Nanum Gothic;">'+infoText+'</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
		iwPosition = new kakao.maps.LatLng(x, y); //인포윈도우 표시 위치입니다

	// 인포윈도우를 생성합니다
	var infowindow = new kakao.maps.InfoWindow({
		position : iwPosition, 
		content : iwContent 
	});
	  
	// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
	infowindow.open(map, marker); 
}

function daumMapStatic(x, y, lvl, infoText){
	if (lvl == "" ){
		lvl = 3;
	}

	var markers = [
		{
			position: new kakao.maps.LatLng(x, y)
		},
		{
			position: new kakao.maps.LatLng(x, y), 
			text: infoText // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다     
		}
	];

	var staticMapContainer  = document.getElementById('map_canvas'), // 이미지 지도를 표시할 div  
		staticMapOption = { 
			center: new kakao.maps.LatLng(x,y), // 이미지 지도의 중심좌표
			level: lvl, // 이미지 지도의 확대 레벨
			marker: markers // 이미지 지도에 표시할 마커 
		};    

	// 이미지 지도를 생성합니다
	var staticMap = new kakao.maps.StaticMap(staticMapContainer, staticMapOption);	
}

function pcAlert() { // PC환경에서 접속시 alert
	alert('미리보기 페이지에서는 기능이 제한됩니다.');
}