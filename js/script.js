
var container=document.querySelector(".container");

// img-yaratmaq ve elave etmek
imgArr=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg"];

for(i=0;i<imgArr.length;i++){
	var containerImg = document.createElement("img");
	containerImg.src= imgArr[i];
  	containerImg.className="photo";
	container.appendChild(containerImg);
}

var photo=document.querySelectorAll(".photo");
var modal=document.createElement("div");

var img=document.createElement("img");
var overlay=document.querySelector(".overlay")
container.appendChild(img);
modal.className="modal";
overlay.appendChild(modal);

var close=document.createElement("div");
close.innerHTML="x";
modal.appendChild(close);
close.className="close";

var next=document.createElement("div");
modal.appendChild(next);
next.className="next";


var pre=document.createElement("div");
modal.appendChild(pre);
pre.className="pre";
// pre.style.top=modal.clientWidth/2 + "px";
// modali_bagla
overlay.addEventListener("click",function(param){
	if(param.target.className==="overlay"){
	overlay.style.display="none";}
})

close.onclick=function(){
	overlay.style.display="none";
}
// modali_bagla




j=1

next.addEventListener("click",function(){

if(j==imgArr.length){j=0}
img.src=imgArr[j];
j++;
})


pre.addEventListener("click",function(){
	if(j==0){j=imgArr.length};
		j--;
		img.src=imgArr[j];

})





for (var i = 0; i < photo.length; i++) {
	photo[i].onclick = function () {
	overlay.style.display="block";
    img.setAttribute("src",this.getAttribute("src"))
    modal.appendChild(img);
    img.style.width=window.innerWidth/2 + "px";
    modal.style.width=window.innerWidth/2 + "px";
    modal.appendChild(next);
    modal.appendChild(pre);

    pre.style.top=img.clientHeight/2 + "px";
    pre.style.bottom=img.clientHeight/2 + "px";
    pre.className="pre";
    pre.style.backgroundColor="orange";
    pre.style.position="absolute";
    pre.style.width=20 +"px";
    pre.style.height=20 +"px";
     pre.innerHTML="<";
     pre.style.cursor="pointer";


    next.style.top=img.clientHeight/2 + "px";
    next.style.bottom=img.clientHeight/2 + "px";
    next.className="next";
    next.style.backgroundColor="orange";
    next.style.position="absolute";
    next.style.width=20 +"px";
    next.style.height=20 +"px";
    next.style.right=0 +"px";
    next.innerHTML=">";
    next.style.cursor="pointer";

	};
}


