import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ValidatorsService } from 'src/app/shared/validators.service';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fotgot-password',
  templateUrl: './fotgot-password.component.html',
  styleUrls: ['./fotgot-password.component.scss']
})
export class FotgotPasswordComponent implements OnInit {

  public form: FormGroup;
  
 showloader: boolean
 btndisable: boolean
  constructor(private fb: FormBuilder, private validatorsservice: ValidatorsService,
    private sharedservice: SharedService, private router: Router, private ToastrService:ToastrService) { }

  ngOnInit() {
    this.form = this.fb.group({
      sEmail: [null, Validators.compose([Validators.required, Validators.pattern(this.validatorsservice.emailRegx)])]
    });

  }

  submit(){
    this.showloader = true
    this.btndisable = true
    console.log(this.form.value);
 
    var data = {
      "email": this.form.value.sEmail
    }
    this.sharedservice.forgotPassword(data).subscribe(data => {
      console.log(data)
      this.showloader = true;
      this.btndisable = true;
      this.ToastrService.success("Please check your mail to reset your password", null, {
        enableHtml: true,
        timeOut: 3000,
        tapToDismiss: true,
        messageClass: "success",
        // toastClass: "alert alert-success border-success",
        positionClass: 'toast-top-right',
      });
      this.router.navigate(["/login"]);
    }, err => {
      this.showloader = false
      this.btndisable = false
      console.log(err);
    })
  }

}