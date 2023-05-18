

// Connect to WebSocket server
const socket = new WebSocket("ws:localhost:8080");

const editor = document.getElementById("editor");

// Send updates to the server
editor.addEventListener("input", () => {
  const content = editor.innerHTML;
  socket.send(JSON.stringify({ type: "update", content }));
});

// Receive updates from the server
socket.addEventListener("message", (message) => {
  console.log(message);
  const { type, content } = JSON.parse(message.data);
  if (type === "update") {
    editor.innerHTML = content;
  }
});

/*
// ------------------------------------------------------





// Connect to WebSocket server
const socket = new WebSocket("ws://localhost:8080");

const editor = document.getElementById("editor");

// Send updates to the server
editor.addEventListener("input", () => {
  const content = editor.innerHTML;
  const boldWords = getBoldWords(content);
  socket.send(JSON.stringify({ type: "update", boldWords, content }));
});

// Receive updates from the server
socket.addEventListener("message", (event) => {
  const { type, boldWords, content } = JSON.parse(event.data);
  if (type === "update") {
    editor.innerHTML = content;
    setBoldWords(editor, boldWords);
  }
});

// Function to extract bold words from content
function getBoldWords(content) {
  const regex = /<b>(.*?)<\/b>/g;
  const matches = content.match(regex);
  if (matches) {
    return matches.map((match) => match.replace(/<\/?b>/g, ""));
  }
  return [];
}

// Function to set bold words in content
function setBoldWords(editor, boldWords) {
  const regex = /<b>(.*?)<\/b>/g;
  editor.innerHTML = editor.innerHTML.replace(regex, "");
  boldWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, "g");
    editor.innerHTML = editor.innerHTML.replace(
      regex,
      `<b>${word}</b>`
    );
  });
}
*/
/*

// Connect to WebSocket server
const socket = new WebSocket("ws://localhost:8080");

const editor = document.getElementById("editor");

// Send updates to the server
editor.addEventListener("input", () => {
  const content = editor.innerHTML;
  const boldWords = getBoldWords();
  socket.send(JSON.stringify({ type: "update", content, boldWords }));
});

// Receive updates from the server
socket.addEventListener("message", (event) => {
  const { type, content, boldWords } = JSON.parse(event.data);
  if (type === "update") {
    editor.innerHTML = content;
    applyBoldWords(boldWords);
  }
});

// Function to extract bold words from the editor content
function getBoldWords() {
  const boldElements = editor.getElementsByTagName("b");
  const boldWords = Array.from(boldElements).map((element) => element.innerText);
  return boldWords;
}

// Function to apply bold words to the editor content
function applyBoldWords(boldWords) {
  const regex = /\b(?!<b>)(${boldWords.join("|")})\b(?!<\/b>)/g;
  editor.innerHTML = editor.innerHTML.replace(regex, "<b>$&</b>");
}
*/