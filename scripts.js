window.onload = () => {
    var message = document.getElementsByClassName("message")[0];
    var input = document.getElementsByTagName("input")[0];
    var submitBtn = document.getElementsByTagName("button")[0];

    submitBtn.setAttribute("type","button");
    submitBtn.addEventListener("click", () => {
        if (input.value.length == 0) {
            message.innerHTML = "Please enter a valid email address";
        }
        else {
            message.innerHTML = `Thank you! Your email address ${input.value} has been added to our mailing list!`;
        } 
})
    
}





    


        