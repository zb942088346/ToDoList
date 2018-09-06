
let arr1=localStorage.arr1 ? localStorage.arr1.split(","):[];
let arr2=localStorage.arr2 ? localStorage.arr2.split(","):[];

let conduct=document.querySelector(".conduct");
let complete=document.querySelector(".complete");
let top1=document.querySelectorAll(".top");
let num1=top1[0].querySelector("div");
let num2=top1[1].querySelector("div");
console.log(top1);

function Update() {

    conduct.innerHTML="";
    complete.innerHTML="";
    localStorage.arr1=arr1.join(",");
    localStorage.arr2=arr2.join(",");
    arr1.forEach((item,index)=>{
        let div=document.createElement("div");
        div.className="box";
        let input=document.createElement("input");
        input.setAttribute("type","checkbox");
        input.onclick=function(){
            arr1.splice(index,1);
            arr2.unshift(item);
            Update();
        }
        let p=document.createElement("p");
        p.innerText=item;
        p.ondblclick=function(){
            let input=document.createElement("input");
            input.style=`width:500px;`
            input.value=p.innerText;
            p.innerText="";
            p.appendChild(input);
            input.focus();
            input.onblur=function(){
                arr1.splice(index,1,input.value)
                Update();
            }
        }
        let div1=document.createElement("div");
        div1.className="del";
        div1.onclick=function(){
            arr1.splice(index,1);
            Update();
        }
        div.appendChild(input);
        div.appendChild(p);
        div.appendChild(div1);
        conduct.appendChild(div);


    })
    arr2.forEach((v,i)=>{
        let div=document.createElement("div");
        div.className="box";
        let input2=document.createElement("input");
        input2.setAttribute("type","checkbox");
        input2.setAttribute("checked","checked");
        input2.onclick=function(){
            arr2.splice(i,1);
            arr1.unshift(v);
            Update();
        }
        let p2=document.createElement("p");
        p2.innerText=v;
        p2.ondblclick=function(){
            let input=document.createElement("input");
            input.style=`width:500px;`
            input.value=p2.innerText;
            p2.innerText="";
            p2.appendChild(input);
            input.focus();
            input.onblur=function(){
                arr2.splice(index,1,input.value)
                Update();
            }
        }
        let div2=document.createElement("div");
        div2.className="del";
        div2.onclick=function(){
            arr2.splice(i,1);
            Update();
        }
        div.appendChild(input2);
        div.appendChild(p2);
        div.appendChild(div2);
        complete.appendChild(div);
    })
    num1.innerHTML=arr1.length;
    num2.innerHTML=arr2.length;

}

Update();

let input1=document.querySelector("header input");
input1.onkeydown=function(e){
    if(e.keyCode==13&&this.value!=""){
        arr1.unshift(this.value);
        this.value="";
        Update();
    }
}

