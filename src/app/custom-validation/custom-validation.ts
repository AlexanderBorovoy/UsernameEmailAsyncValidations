import { Component } from '@angular/core';
import {FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { usernameTaken, HttpService } from './git-user.service';

@Component({
    selector: 'custom-validated-form',
    templateUrl: './custom-validation.html',
    providers: [FormBuilder, HttpService]
})
export class CustomValidatedFormComponent {
    form: FormGroup;
    name: string;
    constructor(private fb: FormBuilder, private httpService: HttpService){
        this.name = 'Angular2',
        this.form = this.fb.group({
            username: ['', Validators.required, usernameTaken(this.httpService)]
        });
    }
}