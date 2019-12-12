function $(id){
    return document.getElementById(id);
}
$('smallBox').onmouseover = function (){
    $('mask').style.display= 'block';
    $('bigBox').style.display = 'block';
};
$('smallBox').onmouseout = function(){
    $('masl').style.display = 'none';
    $('bigBox').style.display='none';
};
$('smallBox').onmouseover = function(event){
    var event = event || window.event;
    var pageX = enent.pageX || enent.clientX + document.documentElement.scrollLeft;
    var pageY = enent.pageY || enent.clientY + document.documentElement.scrollTop;
    var boxX= pageX - $('box').offsetLeft;
    var boxY = pageY - $('box').offsetTop;
    var maskX = boxX - $('mask').offsetWidth/2;
    var maskY = boxY - $('mask').offsetHeight/2;
    if(maskX<0){
        maskX=0;
    }
    if(maskX>$('smallBox').offsetWidth -$('mask').offsetWidth){
        maskX=$('smallBox').offsetWidth - $('mask').offsetWidth;
    }
    if (maskY < 0){
        maskY = 0;
    }
    if (maskY > $('smallBox').offsetHeight - $('mask').offsetHeight){
        maskY > $('smallBox').offsetHeight - $('mask').offsetHeight
    }
    $('mask').style.left = maskX +'px';
    $('mask').style.top = maskY + 'px';
    var bigImgToMove = $('bigImg').offsetWidth- $('bifBox').offsetWidth;
    var maskToMove = $('bigImg').offsetWidth- $('bifBox').offsetWidth;
    var rate = bigImgToMove / maskToMove;
    $('bigImg').style.left = -rate*maskX+'px';
    $('bifImg').style.top = -rate*maskY + 'px';
};