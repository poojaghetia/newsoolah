import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl
} from "@angular/forms";
import { ValidatorsService } from 'src/app/shared/validators.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
 showloader: boolean
  btndisable: boolean
  forgotpass: boolean = true;
  borderline: boolean = false;
  sActivationToken:any;


  public form: FormGroup
  constructor(private fb: FormBuilder, private validatorsservice: ValidatorsService,
  private ToastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router) {

  this.sActivationToken = this.route.snapshot.params['token'];
  }

  ngOnInit() {
    this.form = this.fb.group({
      sNewPassword: [null, Validators.compose([Validators.required, Validators.pattern(this.validatorsservice.passwordRegx)])],
      sNewRetypedPassword: [null, Validators.compose([Validators.required])]
    }, { validator: this.matchPassword });


  }

  matchPassword(control: FormControl): { matchPass: boolean } {
    if (control.root.value['sNewRetypedPassword'] != control.root.value['sNewPassword']) {
      return { matchPass: true }
    }
  }

submit(){
  this.showloader = true
  this.btndisable = true
  console.log(this.form.value);
  
  // this.SuperAdminAuthService
  //   .resetpassword(value.sNewPassword, value.sNewRetypedPassword, this.sActivationToken)
  //   .subscribe(res => {
  //     this.showloader = false
  //     this.btndisable = false
  //     this.router.navigate(["/admin"]);
  //     this.ToastrService.success(res.message, null, {
  //       enableHtml: true,
  //       timeOut: 2000,
  //       tapToDismiss: true,
  //       messageClass: "success",
  //       toastClass: "alert alert-success border-success",
  //       positionClass: 'toast-top-right',
  //     });
  //   }, err => {
  //     this.showloader = false
  //     this.btndisable = false
  //     console.log(err);
  //   })
}

}
