import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '../../../node_modules/@angular/forms';
import { DisplayPage } from '../display/display';

@Component({
  selector: 'page-sing-in',
  templateUrl: 'sing-in.html',
})
export class SingInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }

  onSignin(form: NgForm) {
    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        console.log(data)
        this.navCtrl.push(DisplayPage)
      })
      .catch(error => console.log(error))
  }

}