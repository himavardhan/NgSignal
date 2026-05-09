import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
selector: 'app-booking-template-form',
  imports: [FormsModule],
  templateUrl: './booking-template-form.html',
  styleUrl: './booking-template-form.scss',
  standalone:true
})
export class BookingTemplateForm {

 departure:string = '';

 public handleSubmit(){
  // Handle Submit 
  console.log(this.departure);
 }


}
