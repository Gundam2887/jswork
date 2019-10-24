function goldbach(a){
    let num =parseInt(document.getElementById('num').value)
    var sum=0;
    for(var i=1;i<=a;i++){
        if(a%i ==0){
            sum++
        }
    }
    if(sum==2){
        return true;
    }else{
        alert('请输入除二以外的偶数')
    }
}
function isTrue(a){
    for(var i = 2;i<a;i++){
        var j =a-i;
        if(goldbach(i)&&goldbach(j)){
            document.write("可以拆分为两个质数"+ i+"与"+j+"的和")
        }

    }
}
      /*该程序参考自：https://blog.csdn.net/weixin_30700099/article/details/94867568*/