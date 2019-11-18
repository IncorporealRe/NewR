import {Component, OnInit} from '@angular/core';
import {AlertController, Platform} from '@ionic/angular';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';

@Component({
    selector: 'app-main',
    templateUrl: './main.page.html',
    styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

    constructor(private plt: Platform, private localNotifcations: LocalNotifications,
                private alertCtrl: AlertController) {
        this.plt.ready().then(() => {
            this.localNotifcations.on('click').subscribe(res => {
                const msg = res.data ? res.data.mydata : '';
                this.showAlert(res.title, res.text, msg);
            });

            this.localNotifcations.on('trigger').subscribe(res => {

            });
        });
    }

    ngOnInit() {
    }

    schedule() {
        this.localNotifcations.schedule({
            id: 1,
            title: 'Test123',
            text: 'Работай!!!!!',
            foreground: true,
            launch: true,
            trigger: {after: new Date(2019, 11, 18, 19, 57)}
        });
    }

    showAlert(header, sub, msg) {
        this.alertCtrl.create({
            header,
            subHeader: sub,
            message: msg,
            buttons: ['OK']
        }).then(alert => alert.present());
    }
}
