import {Component, OnInit} from '@angular/core';
import {AlertController, Platform} from '@ionic/angular';
import {ELocalNotificationTriggerUnit, LocalNotifications} from '@ionic-native/local-notifications/ngx';

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
                let msg = res.data ? res.data.mydata : '';
                this.showAlert(res.title, res.text, msg);
            });

            this.localNotifcations.on('trigger').subscribe(res => {

            });
        });
    }

    ngOnInit() {
    }
    Test() {
this.localNotifcations.schedule({
    id: 22,
    title: 'Test',
    text: 'Testing',
    trigger: {every: ELocalNotificationTriggerUnit.MINUTE}
});
    }
    showAlert(header, sub, msg) {
        this.alertCtrl.create({
            header: header,
            subHeader: sub,
            message: msg,
            buttons: ['OK']
        }).then(alert => alert.present);

    }

}
