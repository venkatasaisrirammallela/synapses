var content = document.getElementById("content");
var chat_button = document.getElementById("chat-button");
var close_button = document.getElementById("close-button");

// the chat button
chat_button.addEventListener("click", function () {
  if (window.getComputedStyle(chat_button).visibility === "visible") {
    content.style.zIndex = "1";
    content.style.maxWidth = "1000px";
  }
});

// the close button
close_button.addEventListener("click", function () {
  content.style.zIndex = "-1";
  content.style.maxWidth = 0;
});

// Gets the first message
function firstBotMessage() {
  let firstMessage = "Hello, I am your Virtual Assistant. How can I help you?";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
  //   let botResponse = getBotResponse(userText);
  //   const body = {
  //     userId: 1,
  //     title: "message",
  //      body: userText
  //   };
  // console.log(userText);
  setTimeout(()=>{
    fetch("http://127.0.0.1:5000/reciver", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        data: userText,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
  },1000);
 

  setTimeout(() => {
    const response = fetch("http://127.0.0.1:5000/answer")
      .then((response) => response.json())
      .then((json) => {
        data = JSON.parse(json["Response"]);
        text= data.data;
        const lines = text.split('\n');
        para = document.createElement('p');
        lines.forEach(line => {
         const span = document.createElement('span');
         span.innerHTML = line + '<br>';
         para.appendChild(span);
        });
        let botHtml = '<div class="botText"> <p>' + para.innerHTML + '</p> </div>';
        $("#chatbox").append(botHtml);
        $('#buttonicon').removeClass('fa fa-spinner fa-spin');
        $('#buttonicon').addClass('fa-regular fa-solid fa-paper-plane');
        document.getElementById("chatbox").scrollIntoView(false);
      });
  }, 1000);
}
//Gets the text from the input box and processes it
function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "hello how is your day?";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  $('#buttonicon').removeClass('fa-regular fa-solid fa-paper-plane');
  $('#buttonicon').addClass('fa fa-spinner fa-spin');
  document.getElementById("chatbox").scrollIntoView(false);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document
    .getElementById("chatbox")
    .messagesEnd.scrollIntoView(false, { behavior: "smooth" });

  //Uncomment this if you want the bot to respond to this buttonSendText event
  // setTimeout(() => {
  //     getHardResponse(sampleText);
  // }, 1000)
}

function sendButton() {
  getResponse();
}

// Press enter to send a message

document
  .getElementById("textInput")
  .addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
      console.log("enter key");
      getResponse();
    }
  });
