import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    // { path: '', redirectTo: 'main', pathMatch: 'full' },
    // { path: 'main', loadChildren: './main/main.module#MainPageModule' },
    // { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
    // { path: 'options', loadChildren: './options/options.module#OptionsPageModule' },
    {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  {path: 'options', loadChildren: './options/options.module#OptionsPageModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
