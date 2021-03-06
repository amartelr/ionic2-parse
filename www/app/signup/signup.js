import {Page} from 'ionic/ionic';

@Page({
    templateUrl: 'app/signup/signup.html'
})
export class SignupPage {

    constructor(){

        //This will hold data from our form
        this.username = null;
        this.password = null;
        this.email = null;

    }

    signupEmail(){

        //Create a new user on Parse
        var user = new Parse.User();
        user.set("username", this.username);
        user.set("password", this.password);
        user.set("email", this.email);

        // other fields can be set just like with Parse.Object
        user.set("somethingelse", "like this!");

        user.signUp(null, {
            success: function(user) {
              // Hooray! Let them use the app now.
              alert("success!");
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              alert("Error: " + error.code + " " + error.message);
            }
        });

    }

}
