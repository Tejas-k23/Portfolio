console.log("hii");
let a=document.querySelector("#about");
let b=document.querySelector("#home");
let c=document.querySelector("#resume");
let d=document.querySelector("#portfolio");

let about = document.querySelector(".about");      // <div class="about">
let about1 = document.querySelector(".main");
let about2 = document.querySelector(".resume");
let about3 = document.querySelector(".portfolio");
let about4=document.querySelector("#contact");
about4.onclick = function () {
window.location.href = "https://mail.google.com/mail/?view=cm&to=tejaskumbharkar6398@gmail.com";

  console.log("happy")
};
a.onclick = function () {
  about.scrollIntoView({ behavior: "smooth" });
};
b.onclick = function () {
  about1.scrollIntoView({ behavior: "smooth" });
};
c.onclick = function () {
  about2.scrollIntoView({ behavior: "smooth" });
};
d.onclick = function () {
  about3.scrollIntoView({ behavior: "smooth" });
};
let dark= document.querySelector("#dark");
let sidebar=document.querySelector(".sidebar");
let isdark=true;
let social = document.querySelectorAll(".social-icons i");



dark.onclick = function(){
    if(!isdark){
              social.forEach((icon) => {
      icon.style.color = "white";
    });
         sidebar.style.background = "black";
    sidebar.style.color = "white";
    dark.innerText = "Light Mode"; 
    
    }else{
          social.forEach((icon) => {
      icon.style.color = "black";
      
    });

        sidebar.style.background = "white";
    sidebar.style.color = "black";
    dark.innerText = "Dark Mode"; 
    }
    isdark=!isdark
}
let sup=document.querySelector(".sidebar sup");
let NAME=document.querySelector(".sidebar h2");
 console.log(NAME.innerText);
let pagename = document.querySelector(".main h1");
console.log(pagename.innerText);
sup.onclick=function(){
  let k=  prompt("ENTER A NEW NAME");
NAME.innerText=k;
pagename.innerText=k;
}
 const slider = document.querySelector('.slider');
  let scrollAmount = 0;

  function slideNext() {
    scrollAmount += 320;
    if (scrollAmount > slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  function slidePrev() {
    scrollAmount -= 320;
    if (scrollAmount < 0) {
      scrollAmount = slider.scrollWidth - slider.clientWidth;
    }
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
  let profileImage = document.getElementById("profileImage");
let editIcon = document.getElementById("editImg");
let imgInput = document.getElementById("imgInput");

editIcon.onclick = function () {
  imgInput.click(); // open file dialog
};

imgInput.onchange = function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
