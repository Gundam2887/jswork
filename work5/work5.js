str1 ='<table border="1">'
for(let i=9;i>0;--i){
    str1 +='<tr>'
    for(var j=9 ;j>0;--j){
        //;拼接单元格
        str1 += '<td>&nbsp;</td>'
    }
    str1 +='</tr>'
}
str1 +='</table>'
//设置div的html文档内容
document.getElementById('table1').innerHTML=str1

str2 ='<table border="1">'
for(let i=9;i>0;--i){
    str2 +='<tr>'
    for(var j=i ;j>0;--j){
        //;拼接单元格
        str2 += '<td>&nbsp;</td>'
    }
    str2 +='</tr>'
}
str2 +='</table>'
//设置div的html文档内容
document.getElementById('table2').innerHTML=str2
 
str3 ='<table border="1">'
for(let i=9;i>0;--i){
    str3 +='<tr>'
    for(var j=i ;j>0;--j){
        //;拼接单元格
        str3 += '<td>'+ j + '*' + i + '=' + ( j * i )+'</td>'
    }
    str3 +='</tr>'
}
str3 +='</table>'
//设置div的html文档内容
document.getElementById('table3').innerHTML=str3
 