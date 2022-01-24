import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsideComponent } from './inside.component';
import { MyMaterialModule } from 'src/app/material.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    InsideComponent
  ],
  imports: [
    CommonModule,
    MyMaterialModule,
  ]
})
export class InsideModule { }
