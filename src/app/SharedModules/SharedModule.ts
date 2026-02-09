import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';




const allModule = [FloatLabelModule, ButtonModule, 
    InputTextModule, 
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    CommonModule,
    SkeletonModule,
    TableModule
];
@NgModule({
  imports: allModule,
  exports: allModule,
})
export class SharedModule {}
