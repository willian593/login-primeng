import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimengModule } from '../modulos/primeng.module';

const pagesModules = [CommonModule, PrimengModule];

@NgModule({
  declarations: [DashboardComponent],
  imports: [pagesModules],
  exports: [pagesModules],
})
export class PagesModule {}
