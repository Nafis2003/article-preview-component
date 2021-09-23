var shareBtn=document.querySelectorAll(".btn");
var share=document.querySelector("#share");
shareBtn.forEach((btn)=>{
const show=()=>{
shareBtn[0].classList.toggle("active");
	if (window.getComputedStyle(share,null). display==="none"|| share.style.display === "none") {
    share.style.display = "inline-flex";
  } else {
    share.style.display = "none";
  }
}
				btn.addEventListener("click", show);
				 
}
				
);
