import {App, Platform} from 'ionic/ionic';
import {Login} from './login/login';
import './app.scss';


@App({
  templateUrl: 'app/app.html'
})

export class MyApp {
  constructor(platform: Platform) {
     this.platform = platform;
     this.initializeApp();
      this.root = Login;
  }

  initializeApp() {
      this.platform.ready().then(() => {
        console.log('Platform ready');

        Parse.initialize("Dbifem11JPi1NQ91zZr3dan8zRQEoepS5NHTra8S", "9SoBXtlq5zNU2VDQo2G7MPffdRWQHjOucUu4jGwS");
        if (typeof StatusBar !== 'undefined') {
           StatusBar.styleDefault();
       }
      });

}
