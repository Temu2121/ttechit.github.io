function myFunction() 
{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function openNav() {
  document.getElementById("sidebar").style.width = "350px";
  document.getElementById("mainside").style.marginLeft="350px";
  document.getElementById("sidebar").style.display="content"
  document.getElementById("sidebar").style.trabsition="hidden"
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("mainside").style.marginLeft="0px";
  
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

let submit=document.getElementById("submitbtn");
//register.addEventListener("submit",(e)=>{e.preventDefault();});
submit.addEventListener('click', function(event){
  event.preventDefault()
  let uname = document.getElementsById("name").value;
  let location = document.getElementById("email").value;
  let course = document.getElementById("email").value;
  let phone1 = document.getElementById("email").value;
  let phone2 = document.getElementById("email").value;
  emailjs.send("gmail", "temu1537", {
    "from_name": uname,
    "from_email": email,
})
    .then(
        function (response) {
            console.log("SUCCESS", response);
            
        },
        function (error) {
            console.log("FAILED", error);
            
        }
    );
})



  if (uname.value == "" || email.value == ""||location.value==""||course.value==""||phone1.value==""||phone2.value=="") {
    alert("Ensure you input a value in the fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
  
    username.value = "";
    password.value = "";
  };