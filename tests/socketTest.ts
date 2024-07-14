import { Socket } from "socket.io-client";
import io from "socket.io-client";

const SERVER_URL = "https://678a-2806-2f0-81a0-27eb-169e-1c9-20f6-d1fb.ngrok-free.app";

const socket: Socket = io(SERVER_URL);

socket.on("connect", () => {
  console.log("Conectado al servidor WebSocket");
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
