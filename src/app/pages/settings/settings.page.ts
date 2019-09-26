import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  constructor(private authService: AuthService, public alertController: AlertController) { }

  ngOnInit() { }

  logoutAction() {
    this.authService.logout();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to <strong>Logout</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.logoutAction();
          }
        }
      ]
    });

    await alert.present();
  }
}
