import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { label } from '@primeuix/themes/aura/metergroup';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-booking-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.scss',
  standalone: true,
})
export class BookingForm {
  departure: string = '';
  Arrival: string = '';
  fb = inject(FormBuilder);
  bookingForm = this.fb.group({
    depart: ['', [Validators.required, Validators.minLength(4)]],
    arrival: [null, Validators.required],
    tripType: ['Two Way', Validators.required],
    departDate: [null, Validators.required],
    returnDate: [null, [Validators.required]],
    passengerCount: [null, [Validators.required, Validators.min(1)]],
    passengerInfo: this.fb.array([]),
  });

  // Reactive form Validation.
  // this.departInfo.dirty;
  // this.departInfo.pristine;
  // this.departInfo.valid;
  // this.departInfo.touched && this.departInfo.dirty
  // this.departInfo.invalid;
  // this.departInfo.hasError('required')

  constructor() {
    this.bookingForm
      .get('passengerCount')
      ?.valueChanges.pipe(
        debounceTime(400), // 1. Wait 400ms after last keystroke
        distinctUntilChanged(),
        takeUntilDestroyed(),
      )
      .subscribe((item) => {
        this.passengerInfo.clear();
        if (item && item > 0) {
          console.log(item);
          for (let index = 0; index < item; index++) {
            this.addPassenger();
          }
        }
      });

    this.bookingForm
      .get('tripType')
      ?.valueChanges.pipe(distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((data) => {
        if (data == 'One Way') {
          this.bookingForm.get('returnDate')?.setValue(null);
          this.bookingForm.get('returnDate')?.disable();
        } else {
          this.bookingForm.get('returnDate')?.enable();
        }
      });

    this.bookingForm
      .get('depart')
      ?.valueChanges.pipe(distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((data) => {
        if (data && data?.length >= 3) {
          this.bookingForm.controls.depart.setValue(data.toUpperCase());
          console.log('depart =', data);
        }
      });
  }

  get passengerInfo() {
    return this.bookingForm.get('passengerInfo') as FormArray;
  }

  get departInfo() {
    return this.bookingForm.get('depart') as FormControl;
  }

  private addNewPassenger() {
    return this.fb.group({
      name: [null, Validators.required],
      age: [null, [Validators.required, Validators.max(100)]],
    });
  }

  public addPassenger() {
    this.passengerInfo.push(this.addNewPassenger());
  }

  public submitForm() {
    console.log(this.departure);
  }

  public onSubmit() {
    const data = this.bookingForm.value;
    console.log(data);
  }
}
