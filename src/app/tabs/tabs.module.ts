import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'main',
                children: [
                    {
                        path: '',
                        loadChildren: '../main/main.module#MainPageModule'
                    },
                    {
                        path: 'add',
                        loadChildren:  '../add/add.module#AddPageModule'
                    },
                ]
            },
            {path: 'calendar', loadChildren: '../calendar/calendar.module#CalendarPageModule'},
            {path: 'options', loadChildren: '../options/options.module#OptionsPageModule'},
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/main',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
