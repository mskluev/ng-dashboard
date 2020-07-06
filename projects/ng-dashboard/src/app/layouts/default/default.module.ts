import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DefaultComponent],
})
export class DefaultModule { }
