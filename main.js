let a=prompt("vvedite chislo")
let nashe=document.querySelector('.one')
let kvad=document.querySelector('.dva')
let minus=document.querySelector('.tri')
let okryg=document.querySelector('.chetire')
let ostat=document.querySelector('.five')
nashe.value=a
    kvad.addEventListener("click",function(){
        kvad.value=a**2
    })
    minus.addEventListener("click",function(){
        minus.value=a*-1
    })
    okryg.addEventListener("click",function(){
        okryg.value=Math.round(a/3)
    })
    ostat.addEventListener("click",function(){
        ostat.value=a%10
    })
