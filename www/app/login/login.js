import {Page, NavController} from 'ionic/ionic';
import {SigninPage} from '../signin/signin';
import {SignupPage} from '../signup/signup';


@Page({
  templateUrl: 'app/login/login.html',
})
export class Login {
  constructor(nav: NavController) {
    this.nav = nav;

    //This will hold data from our form
        this.data = null;
  }

  signUp(){
      this.nav.push(SignupPage);
  }

  signIn(){
      this.nav.push(SigninPage);
  }
}
