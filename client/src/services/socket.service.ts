import { Injectable } from "@angular/core";
import * as io from "socket.io-client";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  static readonly url = "http://42ca1c959eb9.ngrok.io";
  socket;
  constructor() {}
  setupSocketConnection() {
    this.socket = io(SocketService.url, {
      withCredentials: true,
    });
  }
}
