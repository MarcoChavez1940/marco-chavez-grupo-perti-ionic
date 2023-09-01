import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from 'src/models';
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegisterPage implements OnInit {

  public registerForm: FormGroup;
  private registerDate: Date = new Date();

  constructor(public fb: FormBuilder, public router: Router) {
    this.registerForm = this.fb.group({
      'fullname': new FormControl("", Validators.required),
      'username': new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
    if(localStorage.getItem('User')){
      this.router.navigate(['/home'], { replaceUrl: true });
    }
  }

  registerNewUser(): void {
    const users: User[] = JSON.parse(localStorage.getItem('Users')!);

    localStorage.setItem('Users', JSON.stringify(
      [...users, ...[
        {
          fullname: this.registerForm.controls['fullname'].value,
          username: this.registerForm.controls['username'].value,
          password: this.registerForm.controls['password'].value,
          registerDate: this.registerDate
        }
      ]]
    ));

    this.router.navigate(['/initial-page'], { replaceUrl: true });
    this.pushNotification("Aviso", "Registro exitoso", "Disfrute de la app", "Saludos :)")
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
