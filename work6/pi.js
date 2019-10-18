//公式：派/2=n！/（2n+1）！！
function calculate(){
    let num = document.getElementById('num').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        document.getElementById('pi').value = pi(num)
    }
}

//分子
function factorial(n){
    let sum = 1
    for(let i=1;i<=n;++i){
      sum *=i
    }
    return sum
}

//分母
function oddFactorial(n){
    let sum = 1
    for(let i=1;i<=n;++i){
      sum *=(2*i+1)
    }
    return sum
}

function pi(num){
    let sum = 0
    for(let i=0;i<=num;++i){
      let dividend = factorial(i)
      let divisor = oddFactorial(i)
      sum +=(dividend/divisor)
    }
    return sum * 2
}
calculate()