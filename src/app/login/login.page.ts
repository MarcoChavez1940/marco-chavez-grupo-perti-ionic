import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../../models';
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;

  constructor(public fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      'username': new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required)
    })
  }

  ngOnInit() { }

  checkLogin(): void {
    const users: User[] = JSON.parse(localStorage.getItem('Users')!);

    const findUser = users.find(user => user.username === this.loginForm.controls['username'].value && user.password === this.loginForm.controls['password'].value)

    if (findUser) {
      localStorage.setItem('User', JSON.stringify({ username: this.loginForm.controls['username'].value, token: "dummyToken12390" }));
      this.router.navigate(['/home'], { replaceUrl: true });
      this.pushNotification("Aviso", "Login Exitoso", "Disfrute de la app", "Saludos :)")
    } else {
      this.pushNotification("Aviso", "No se logro hacer login", "Es posible que no exista el usuario o la contraseña y/o usuario sean incorrectos", "Intente de nuevo.")
    }
  }

  returnInitialPage():void {
    this.router.navigate(['/initial-page'], { replaceUrl: true });
  }

  async pushNotification(message: string, body: string, largeBody: string, summaryText: string){
    let options: ScheduleOptions = {
      notifications: [
        {
          id: 1,
          title: message,
          body: body,
          largeBody: largeBody,
          summaryText: summaryText
        }
      ]
    }

    try {
      await LocalNotifications.schedule(options);
    } catch (ex) {
      console.log(JSON.stringify(ex));
      
    }
  }

}
