import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing-module';
import { UserDetailComponent } from './employees/user.component';
import { CardModule, GridModule } from '@coreui/angular';
import { FormModule } from '@coreui/angular';
import { FormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { ButtonModule } from '@coreui/angular';
@NgModule({
  imports: [
    UsersRoutingModule,
    CommonModule,
    GridModule,
    CardModule,
    FormModule,
    FormsModule,
    IconModule,
    ButtonModule
  ],
  declarations: [
    UserDetailComponent
  ]
})
export class UsersModule {
}
