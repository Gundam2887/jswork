var r = prompt('输入圆的半径')
r=parseFloat(r)&&Number(r)
if(!isNaN(r)){
    var c=2*Math.PI * r
    var s=Math.PI*r*r
    document.getElementById('r').value=r
    document.getElementById('c').value=c.toFixed(2)
    document.getElementById('s').value=s.toFixed(2)
}else{
    alert('输入正确的数字')
}