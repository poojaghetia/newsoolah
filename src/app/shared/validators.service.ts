// Package Import 
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';



@Injectable()
export class ValidatorsService {
    emailRegx = "[a-z0-9._%+-]+@[a-z0-9-]+[.]+[a-z]{2,5}$";
    phoneRegx = '^[0-9]{6,15}$';
    passwordRegx = '.{8,}';
    zipcodeRegx = '^.{1,10}$';
    taxIdRegx = '[a-zA-Z0-9]{1,40}';
    IBANnumberRegx = '[A-Z0-9]{15,35}';
    banknumberRegx = '^(?=(?:.{8}|.{11})$)[0-9A-Z]*$'

    constructor() {
    }


    matchPassword(control: FormControl): { matchPass: boolean } {
        if (control.root.value['sConfirmpassword'] != control.root.value['sPassword']) {
            return { matchPass: true }
        }
    }

    public noWhitespaceValidator(control: FormControl) {

        const isWhitespace = (control.value || '').trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    }

}