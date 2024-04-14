import { Socket } from "socket.io-client";
import io from "socket.io-client";

const SERVER_URL = "http://localhost:5000";

const socket: Socket = io(SERVER_URL);

socket.on("connect", () => {
  console.log("Conectado al servidor WebSocket");
  socket.emit("apiEvent", { message: "Hola desde el cliente" });
});

socket.on("websocketEvent", (data: any) => {
  console.log("Evento recibido desde el servidor:", data);
});

socket.on("disconnect", () => {
  console.log("Desconectado del servidor WebSocket");
});

socket.on("error", (error: Error) => {
  console.error("Error en la conexión WebSocket:", error.message);
});
