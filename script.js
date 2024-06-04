function sendMessage() {
    var input = document.getElementById("chat-input");
    var message = input.value;
    if (message.trim() !== "") {
        var messagesDiv = document.getElementById("chat-messages");
        var messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        messagesDiv.appendChild(messageDiv);
        input.value = "";
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}

document.getElementById("chat-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
