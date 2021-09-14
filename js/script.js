
// 서브 페이지 접속 후 이미지만 둥둥 떠다니고, 팝업창은 가려진 상태 (클릭해야 팝업창 오픈)

$(document).ready(function() {
    $('.items #i1 #i2').show(); 
    $('.popup').hide();

    $('#i1').click(function(){
    $ ('#i1').hide();
    $ ('#popup1').show();
    });

    $('#i2').click(function(){
      $ ('#i2').hide(); 
      $ ('#popup2').show(); 
    return false;
    });
})


// 팝업창 내부 a링크 클릭시 연관된 새로운 팝업 뜨게 하기 

$(function(){ 
  $('#popup1 .popup_text a').click(function(){
    $ ('#i2').hide(); 
    $ ('#popup2').show(); 
  });

  $('#popup2 .popup_text a').click(function(){
    $ ('#i1').hide(); 
    $ ('#popup1').show(); 
  return false;
  });
});


// 이미지 클릭하면 팝업창 띄워지는 위치 설정하는 스크립트

$('#i1').unbind('click').bind('click',function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top - 25;
	var divLeft = p.left;

	$('#popup1').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});

$('#i2').unbind('click').bind('click',function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top - 25;
	var divLeft = p.left;

	$('#popup2').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});

$('#popup1 .popup_text a').unbind('click').bind('click',function(e){
	target = $(e.target);
	var p = $(target).offset();

	var divTop 	= p.top;
	var divLeft = p.left;

	$('#popup2').css({ "z-index":'10000',"top": divTop ,"left": divLeft , "position": "absolute" }).show();
});



// bubble sound effect

$(function() {
var $items = $('.items');
  $items.on('click touchend', function() {
    var sound = new Howl({
      src: ['sounds/' + [Math.floor(Math.random() * 6)] + '.mp3'],
      volume: 10
    });
    sound.play();
  }); 
})



// main page bgm

var track = document.getElementById('sound');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        controlBtn.className = "pause";
    } else { 
        track.pause();
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});


