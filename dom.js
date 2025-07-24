console.log("bye")
document.body.childNodes[3].innerText="hello friend"
let header=document.getElementById("name")
console.dir(header);
let a=document.getElementsByClassName("heder2")
console.dir(a)
let b=document.getElementsByTagName("p")
console.dir(b)
let c=document.querySelector("#name")
console.dir(c)
// let d=document.querySelectorAll(".heder2")
// console.dir(d)
let div=document.querySelector("div")
console.dir(div)
let head=document.querySelector("#college")
console.dir(head)
college.innerText=college.innerText+"from there"
let fruit=document.querySelector(".box")
console.dir(fruit)
let divs=document.querySelectorAll(".box")
console.dir(divs[2])
let e=document.querySelector("#divo")
console.dir(e)
let btns=document.querySelectorAll("button")
console.dir("button")
btn.onclick=function(){
    console.log("button was click")
}

for(btn of btns){
    btn.onclick=hello
    btn.onmouseenter=function(){
        console.log("touch on button")
    }
    btn.addEventListener("click",touch)
    btn.addEventListener("click",hello)
    btn.addEventListener("dblclick",function(){
        console.log("u double click")
    })
}

function touch(){
    alert("touch on button")
}
function hello(){
    alert("hello js")
}
let btn=document.querySelector("button")
btn.addEventListener("click",function(){
    let h3=document.querySelector("h3")
    let randomcolor=getcolor()
    h3.innerText=randomcolor

    let div=document.querySelector("div")
    div.style.backgroundColor=randomcolor
    console.log("color updated")
 

});
function getcolor(){
    let red= Math.floor(Math.random()*255)
    let green=Math.floor(Math.random()*255)
    let blue=Math.floor(Math.random()*255)

let color=`(${red},${green},${blue})`
return color
}
let inp=document.querySelector("input")

inp.addEventListener("keydown",function(event){
    console.log("key was pressed")
    console.log(event)
})
inp.addEventListener("keyup",function(){
    console.log("key was release")
})
    
function color(){
    console.dir(this.innerText)
    this.style.backgroundColor="blue"

}
let h1=document.querySelector("h1")
h1.addEventListener("click",color)


let p=document.querySelector("p")

p.addEventListener("click",color)
let div=document.querySelector("div")
let ul=document.querySelector("ul")
let lis=document.querySelectorAll("li")

div.addEventListener("click",function(){
    console.log("div was clicked")

});
ul.addEventListener("click",function(event){
    event.stopPropagation()
    console.log("ul was clicked")
});
for(lit of lis){
    lit.addEventListener("click",function(event){
        event.stopPropagation()
        console.log("list was clicked")
    })

}
let btn=document.querySelector("button")
let inp=document.querySelector("input")
let ul=document.querySelector("ul")

btn.addEventListener("click",function(){
    let item=document.createElement("li")
    item.innerText=inp.value
    ul.appendChild(item)
    inp.value=""
})



SIMON GAME

let gamesequence=[]
let usersequence=[]

let started=false
let level=0
let h2=document.querySelector("h2")
let btns=["red","purple","yellow","blue"]

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started=true

        levelup()
    }
})

function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },300)
}

function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },300)
}
function levelup(){
    usersequence=[]
    level++;
    h2.innerText=`Level ${level}`
    let randidx=Math.floor(Math.random()*4)
    let randcolor=btns[randidx]
    let randbtn=document.querySelector(`.${randcolor}`)
    // console.log(randidx)
    // console.log(randcolor)
    // console.log(randbtn)
    gamesequence.push(randcolor)
    console.log(gamesequence)
    btnflash(randbtn);
}
function checkans(idx){
    if(usersequence[idx]===gamesequence[idx]){
        if(usersequence.length==gamesequence.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        h2.innerText=`game over! press any key to start`
    }
}

function btnpress(){
    console.log(this)
    let btn=this
    userflash(btn)

    usercolor=btn.getAttribute("id")
    usersequence.push(usercolor)

    checkans(usersequence.length-1)
}
let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function one{
    console.log("one")
}

function one(){
    return 1
}
function two(){
    return one()+one()
}
function three(){
    return two()+one()
}
console.log(three())


let btn=document.querySelector("button")
function randomcolor(){
    let red=(Math.floor(Math.random()*255))
    let green=(Math.floor(Math.random()*255))
    let blue=(Math.floor(Math.random()*255))

    let color=`RGB(${red},${green},${blue})`
    return color

}
btn.addEventListener("click",function(){
    let h=document.querySelector("h1")
    let randcolor=randomcolor()
    h.innerText=randcolor
   
    let d=document.querySelector("div")
    d.style.backgroundColor=randcolor
})

let btn=document.querySelector("button")
btn.addEventListener("click",function(){
   
    console.log("clicked")
})
let inp=document.querySelector("input")
inp.addEventListener("keydown",function(event){
    console.log(event.code)
    console.log(event.key)
    console.log("key press")
})
let inp=document.querySelector("input")
inp.addEventListener("keyup",function(){
    console.log("key press")
})
let btn=document.querySelector("button")
btn.addEventListener("click",function(){
    btn.style.backgroundColor="green"
    console.log("button clicked and color to green")
})