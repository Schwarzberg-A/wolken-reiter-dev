import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/services/auth.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [AuthService]
})
export class LoginModule { }
