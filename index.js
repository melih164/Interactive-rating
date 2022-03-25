
 
for (let i= 0; i < 5; i++) {

    document.querySelectorAll(".buttons2")[i].addEventListener("click", function(){

        this.classList.add("samsak");  })
       
}

 



document.querySelector(".submit").addEventListener("click", function (){

   var ratingNum = document.querySelector(".samsak").innerHTML  
   
   document.querySelector("p").innerHTML = "You selected "+ratingNum+" out of 5";

   $("p").after("<h2 class='thank'>Thank you!</h2>")
   $("p").before("<div class='img1'><img  src='images/illustration-thank-you.svg'/></div>")
   $("h3, .buttons, .submit, .star").remove();
   $("h2").after("<p class='thank'>We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!</p>")
   
   $("p").addClass("thank");
   
});