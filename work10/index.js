function monkey(){
    let total =document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if(isNaN(total)||isNaN(kick)){
        alert('请输入数字')
         return
    }
    let monkey=[]
    for (let i=1;i<=total;i++){
        monkey.push(i)
    }
    let i =0
    while (monkey.length>1){
        i++;
        head=monkey.shift()
        if(i%kick!=0){
            monkey.push(head);
        }
    }
    document.getElementById('monkeyking').innerText=monkey[0]
}
function stat(){
    let str = document.getElementById("str").value
    let obj = str.split("").sort()
    let num = obj.reduce(function (allstring,obj){
        if(obj in allstring){
            allstring[obj]++;
        }
        else{
            allstring[obj]=1;
        }
        return allstring;
    },{});

    document.getElementById('result').innerText = JSON.stringify(num)
}