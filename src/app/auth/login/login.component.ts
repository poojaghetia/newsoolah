import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { ValidatorsService } from 'src/app/shared/validators.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public form: FormGroup;
  sessionData: any = {};
showloader: boolean
btndisable: boolean



  // validation pattern

  constructor(
    private fb: FormBuilder,
    public validatrservice: ValidatorsService, private router: Router, private sharedservice:SharedService) { }

  ngOnInit() {
  
      this.form = this.fb.group({
        sEmail: [null, Validators.compose([Validators.required, Validators.pattern(this.validatrservice.emailRegx)])],
        sPassword: [null, Validators.compose([Validators.required])],
        // bRememberMe: [false],
      });
  
  }

  submit(){
    this.showloader = true;
    this.btndisable = true;
    // this.SuperAdminAuthService
    //   .login(this.form.value)
    //   .subscribe(
    //     user => {
    //       console.log(user);

    //       this.showloader = false;
    //       this.btndisable = false;
    //       this.sessionData = {
    //         Authorization: user.Authorization,

    //       };
        


    //       let usertype = btoa("superadmin")
    //       localStorage.setItem("adminuser", JSON.stringify(this.sessionData));
    //       localStorage.setItem("user Type", usertype);
    //       localStorage.setItem("displayName", user.data.sFirstName + " " + user.data.sLastName);
    //       localStorage.setItem("ProfilePicture", user.data.sProfilePicture);
    //       console.log("success");
    //       this.router.navigate(['admin/admin-dashboard'])
    //       /* store in cookie */
    //       // if (value.bRememberMe == true) {
    //       //   this.cookieService.set('sEmail', value.sEmail, 365);
    //       //   this.cookieService.set('sPassword', value.sPassword, 365);
    //       // } else {
    //       //   this.cookieService.deleteAll();
    //       // }
    //       // this.router.navigate(["/admin/admin-dashboard"]);
    //     },
    //     err => {
    //       this.showloader = false;
    //       this.btndisable = false;
    //       console.log(err);

    //     }
    //   );


    var data = {
      "grantType": 1,
      "username": this.form.value.sEmail,
      "password": this.form.value.sPassword
    }

    this.showloader = true;
    this.btndisable = true;
    this.sharedservice.signin(data).subscribe(data => {
      this.sessionData = {
        Authorization: data['access_token'],
      };
      this.showloader = true;
      this.btndisable = true;
      localStorage.setItem("access_token", JSON.stringify(this.sessionData));
      this.router.navigate(["/admin/dashboard"]);
      console.log(data)
    }, err => {
      this.showloader = false
      this.btndisable = false
      console.log(err);
    })
  }

}
