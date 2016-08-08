var $ = function(i) {return document.getElementById(i)}, userAgent = navigator.userAgent || navigator.vendor || window.opera;


function endFrame() {
	
}

function typeIt( id, w, t ) {
	var toW = w;
	var w = 15;
	var inc = 10;
	var del = 0;
	
	TweenLite.to( $('cursor'), 0, {opacity:1, top:t+'px', delay:0});
	
	for(var i = w; i <= toW; i+=inc) {
		TweenLite.to( $(id), 0, {width:w+'px', delay:del});
		TweenLite.to( $('cursor'), 0, {left:w+'px', delay:del});
		del+=0.04;
		w+=inc;			
	}
	
}
	
function init() {
	
	//FRAME	1
	TweenLite.to( $('bkg'), 1, {opacity:1, y:'0px', ease:Power3.easeOut, delay:0.2});
	TweenLite.to( $('office365'), 1, {opacity:1, y:'35px', ease:Power3.easeOut, delay: 0.4});
	TweenLite.to( $('logo'), 1, {opacity:1, delay:1});
	
	//FRAME 2
	TweenLite.to( $('office365'), 0.6, {opacity:1, css:{transform:'scale(0.72,0.72) translate(130px, 10px)'}, ease:Power3.easeOut , delay:1.5});
	TweenLite.to( $('bkg'), 0.6, {css:{transform:'translate(120px, 0px)'}, ease:Power3.easeOut, delay:1.5});
	
	//FRAME 3
	TweenLite.to( $('cursor'), 0.4, {top:'40px', opacity:1, delay:2.4});
	setTimeout(function(){ typeIt('t1-1', 415, 40)}, 4000);
	
	//FRAME 4
	TweenLite.to( $('cursor'), 0.2, {top:'40px', left:'10px', ease:Power0.easeNone, delay:8.4});
	TweenLite.to( $('t1-1h-img'), 0.2, {opacity:1, delay: 8.5});
	
	//FRAME 5
	TweenLite.to( $('t1-1'), 0, {opacity:0, delay:9.4});
	TweenLite.to( $('t1-1h'), 0, {opacity:0, delay:9.4});
	
	//FRAME 6
	setTimeout(function(){ typeIt('t2-1', 395, 40)}, 9800);
	TweenLite.to( $('cursor'), 0.4, {opacity:0, delay:13});
		
	//ENDFRAME
	TweenLite.to( $('bkg'), 1, {opacity:0, ease:Power3.easeOut, delay:13.6});
	TweenLite.to( $('cta'), 0.4, {left:'580px', delay:14});
	TweenLite.to( $('cta'), 0.2, {scale:1.05, delay:14.4});
	TweenLite.to( $('cta'), 0.1, {scale:1, delay:14.6});
	
	TweenLite.to( $('cta'), 0.2, {scale:1.05, delay:15.4});
	TweenLite.to( $('cta'), 0.1, {scale:1, delay:15.6});
}
init();