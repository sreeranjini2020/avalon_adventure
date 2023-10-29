document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("message-form");
    const sendButton = document.getElementById("send-button");
    const confirmation = document.getElementById("confirmation");

    sendButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        //validate content before sending
        if(!validateEmail(email)){
            window.alert("Invalid email");
        }else{
            //send message 
            
            //popup
            window.alert("Message sent");
        }


        setTimeout(function () {
            confirmation.classList.remove("hidden");
        }, 1000);

    });
});

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };