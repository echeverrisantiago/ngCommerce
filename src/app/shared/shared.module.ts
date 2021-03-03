import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [HeaderComponent,FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialModule,
    RouterModule,
    ConfirmationPopoverModule
  ]
})
export class SharedModule { }
