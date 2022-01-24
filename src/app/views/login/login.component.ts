import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public error = null;
  public loading: boolean = false;
  public hide = true;
  public loginForm!: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      reminder: new FormControl(false)
    })
  }

  validEmail(): Boolean {
    return (this.submitted && this.loginForm.controls['email'].invalid) && (this.loginForm.controls['email'].invalid);
  }
  validPass(): Boolean {
    return this.submitted && this.loginForm.controls['password'].invalid;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.valid) {
      this.loading = true;
      this.router.navigate(['insideapp'], { replaceUrl: true })
      let email = this.loginForm.get('email')?.value;
      let password = this.loginForm.get('password')?.value;
      let reminder = this.loginForm.get('reminder')?.value;
      console.log("OK", email, password, reminder);
    }
  }
}

