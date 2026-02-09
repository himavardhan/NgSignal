import { finalize } from 'rxjs/operators';
import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../SharedModules/SharedModule';
import { OpenSourceLlmService } from '../../../services/openSourceLlmService';

@Component({
  selector: 'app-gpt4-min',
  imports: [SharedModule],
  templateUrl: './gpt4-min.html',
  styleUrl: './gpt4-min.scss',
  standalone: true,
})
export class GPT4Min {
  userMesaage = signal('');
  aiResponse = signal('');
  isLoading = signal(false);
  messages :{ text: string, sender: 'user' | 'OpenAIbot' }[] = [];

constructor(private openSourceLlmService: OpenSourceLlmService) {}

async sendMessage(userInput: string) {
  if (!userInput.trim()) return; // Ignore empty messages

  // Add user message to the chat
  this.messages.push({ text: userInput, sender: 'user' });
  console.log("User input:", userInput);
  this.isLoading.set(true);
  try {
    // Send the message to the OpenAI service and await the response
    const response = await this.openSourceLlmService.sendMessage(userInput).subscribe({
      next: (res) => {
        console.log("Received response from OpenAI:", res);
        // Add OpenAI's response to the chat
        this.messages.push({ text: res.response, sender: 'OpenAIbot' });
        this.userMesaage.set(''); // Clear the input field after sending
      },
      error: (err) => {
        console.error("Error sending message to OpenAI:", err);
        // Optionally, you can add an error message to the chat
        this.messages.push({ text: "Sorry, there was an error processing your request.", sender: 'OpenAIbot' });
      },
      complete: () => {
        this.isLoading.set(false);
        console.log("Message processing completed.");
      }
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    // Optionally, you can add an error message to the chat
    this.messages.push({ text: "Sorry, there was an unexpected error.", sender: 'OpenAIbot' });
  }   
}

async sendStreamMessage(userInput: string) {
  if (!userInput.trim()) return; // Ignore empty messages

  // Add user message to the chat
  this.messages.push({ text: userInput, sender: 'user' });  
  this.aiResponse.set('');

  try {
    await this.openSourceLlmService.sendMessageStream(userInput,
      (chunk) =>{ console.log("Received chunk:", chunk); this.aiResponse.update(v => v + chunk);console.log("Updated AI response:", this.aiResponse());}
      ,() =>{ console.log("Stream closed.")
        console.log("Final AI response:", this.aiResponse());
        this.messages.push({ text: this.aiResponse(), sender: 'OpenAIbot' });
      }
    );
    console.log("Received streaming response from OpenAI:", this.aiResponse());
    // Add OpenAI's response to the chat
    
    this.userMesaage.set(''); // Clear the input field after sending
  } catch (err) {
    console.error("Error sending message to OpenAI:", err);
    // Optionally, you can add an error message to the chat
    this.messages.push({ text: "Sorry, there was an error processing your request.", sender: 'OpenAIbot' });
  }
}

}
