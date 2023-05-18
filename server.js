const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

const connections = new Set();

let documentContent = '';

server.on("connection", (socket) => {
  connections.add(socket);

  socket.send(JSON.stringify({ type:"update", content : documentContent}));

  socket.on("message", (message) => {
    const { type, content } = JSON.parse(message);
    if (type === "update") {

      documentContent = content;

      for (const otherSocket of connections) {
        if (otherSocket !== socket) {
          otherSocket.send(JSON.stringify({ type, content }));
        }
      }
      

    }
  });

  socket.on("close", () => {
    connections.delete(socket);
  });
});



/* updated
const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

const connections = new Set();
let documentContent = '';
let boldWords = [];

server.on("connection", (socket) => {
  connections.add(socket);

  socket.send(JSON.stringify({ type: "update", content: documentContent, boldWords }));

  socket.on("message", (message) => {
    const { type, content } = JSON.parse(message);
    if (type === "update") {
      documentContent = content;
      boldWords = getBoldWords(content);

      for (const otherSocket of connections) {
        if (otherSocket !== socket) {
          otherSocket.send(JSON.stringify({ type, content, boldWords }));
        }
      }
    }
  });

  socket.on("close", () => {
    connections.delete(socket);
  });
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


*/
/*

const WebSocket = require("ws");
const os = require("os");

const server = new WebSocket.Server({ port: 8080, host: "0.0.0.0" });

const connections = new Set();
let documentContent = "";
let boldWords = [];

server.on("connection", (socket) => {
  connections.add(socket);

  socket.send(JSON.stringify({ type: "update", content: documentContent, boldWords }));

  socket.on("message", (message) => {
    const { type, content } = JSON.parse(message);
    if (type === "update") {
      documentContent = content;
      boldWords = getBoldWords(content);

      for (const otherSocket of connections) {
        if (otherSocket !== socket) {
          otherSocket.send(JSON.stringify({ type, content, boldWords }));
        }
      }
    }
  });

  socket.on("close", () => {
    connections.delete(socket);
  });
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

const networkInterfaces = os.networkInterfaces();
for (const interfaceName in networkInterfaces) {
  const addresses = networkInterfaces[interfaceName];
  for (const address of addresses) {
    if (address.family === "IPv4" && !address.internal) {
      console.log(`WebSocket server running at ws://${address.address}:8080`);
    }
  }
}
*/