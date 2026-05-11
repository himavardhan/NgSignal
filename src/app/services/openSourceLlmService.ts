import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class OpenSourceLlmService {
    private apiUrl = 'http://127.0.0.1:3032/api/v1/chat?message='; // Update with your backend API URL
    private http = inject(HttpClient);

    sendMessage(message: string,llm:string) {
        try {
        return this.http.get<{response: string}>(this.apiUrl + encodeURIComponent(message)+`&model=${encodeURIComponent(llm)}`);

        }catch(err){
            console.error("Error sending message to OpenAI:", err);
            throw err; // Rethrow the error to be handled by the caller
        }
    }

    sendMessageStream(message: string,
        onData: (chunk: string) => void, onclose: () => void) {
    const source = new EventSource(
      `http://127.0.0.1:3032/api/v1/chat-stream?message=${encodeURIComponent(message)}`
    );

    source.onmessage = (event) => onData(event.data);

    source.onerror = () => source.close();

    return () => {source.close(); onclose()}; // cleanup
  }


    // sendMessageStream(message: string,) {
    //    let aiMessage = '';
    //     try {
    //     const source = new EventSource('http://127.0.0.1:3032/api/v1/chat-stream?message=' + encodeURIComponent(message));
    //     source.onmessage = (event) => {
    //     aiMessage += event.data;
    //     console.log("Received chunk from OpenAI:", aiMessage);
    //     };
    //     source.addEventListener('end', () => {
    //     source.close();
    //     });
    //     source.onerror = () => {
    //     source.close();
    //     };
    //     return aiMessage;
    //     } catch (err) {
    //         console.error("Error sending message to OpenAI:", err);
    //         throw err; // Rethrow the error to be handled by the caller
    //     }
    }
