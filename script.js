function sendMessage() {

    let input = document.getElementById("user-input");

    let msg = input.value.trim();

    if(msg === "") return;

    let chatBox = document.getElementById("chat-box");

    // User Message

    let userDiv = document.createElement("div");

    userDiv.className = "user-message";

    userDiv.innerText = msg;

    chatBox.appendChild(userDiv);

    // Bot Reply

    let reply = "Sorry, I don't understand.";

    if(msg.toLowerCase().includes("hello") ||
       msg.toLowerCase().includes("hi"))
    {
        reply = "Hello 👋";
    }

    else if(msg.toLowerCase().includes("how are you"))
    {
        reply = "I am fine 😊";
    }

    else if(msg.toLowerCase().includes("your name"))
    {
        reply = "My name is Prasad Bot 🤖";
    }

    else if(msg.toLowerCase().includes("bye"))
    {
        reply = "Goodbye 👋";
    }
    else if(msg.toLowerCase().includes("python"))
    {
    reply = "Python is a popular programming language.";
    }
    else if(msg.toLowerCase().includes("about you"))
    {
    reply = "My name is Cintu boat, and I was created by Prasad Sir; he is a very good person..";
    }
    else if(msg.toLowerCase().includes("prasad"))
    {
    reply = "Prasad Sir is a 22-year-old engineering student specializing in AI & DS. He is currently studying at Babasaheb Naik College of Engineering in Pusad and hails from Deoli Taluka in Wardha district.";
    }
     else if(msg.toLowerCase().includes("java"))
    {
    reply = "java is a popular programming language.";
    }

    let botDiv = document.createElement("div");

    botDiv.className = "bot-message";

    botDiv.innerText = reply;

    chatBox.appendChild(botDiv);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}

// ENTER KEY SUPPORT

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("user-input")
    .addEventListener("keydown", function(event){

        if(event.key === "Enter"){
            sendMessage();
        }

    });

});