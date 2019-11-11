import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {MainPage} from './main.page';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';

const routes: Routes = [
    {
        path: '',
        component: MainPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        LocalNotifications,
    ],
    declarations: [MainPage]
})
export class MainPageModule {
}
