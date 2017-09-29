import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private dontShowWelcomeScreen = 'FALSE';

  constructor(private cookieService: CookieService ) {

  }

  ngOnInit() {
    this.dontShowWelcomeScreen = this.cookieService.get('DontShowWelcomeScreen');

    if (this.dontShowWelcomeScreen.toUpperCase() === 'TRUE') {
      console.log('DontShowWelcomeScreen equals true redirect to inner page');
    }
  }

  onDontShowWelcomeScreen() {
    console.log('Toggling (dontShowWelcomeScreen) from ' + this.dontShowWelcomeScreen);
    if (this.dontShowWelcomeScreen.toUpperCase() === 'TRUE') {
        this.dontShowWelcomeScreen = 'FALSE';
    } else {
        this.dontShowWelcomeScreen = 'TRUE';
    }

    console.log('Saving (DontShowWelcomeScreen)');
    this.cookieService.set('DontShowWelcomeScreen', this.dontShowWelcomeScreen);
  }

}
