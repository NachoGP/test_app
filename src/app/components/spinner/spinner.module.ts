//Components
import { SpinnerComponent } from './spinner.component';
//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class SpinnerModule { }
