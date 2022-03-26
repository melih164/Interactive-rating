

document.querySelector(".submit").addEventListener("click", function (){

    var  checked = $("input:checked").attr("value");

    console.log(checked);
   
   document.querySelector("p").innerHTML = "You selected "+checked+" out of 5";

   $("p").after("<h2 class='thank'>Thank you!</h2>")
   $("p").before("<div class='img1'><img alt='thank you' src='images/illustration-thank-you.svg'/></div>")
   $("h3, .buttons, .submit, .star").remove();
   $("h2").after("<p class='secpara'>We appreciate you taking the time to give a rating. If you ever need more support,don’t hesitate to get in touch!</p>")
   
   $("p").addClass("secpara");
   
});