import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    // { path: '', redirectTo: 'main', pathMatch: 'full' },
    // { path: 'main', loadChildren: './main/main.module#MainPageModule' },
    // { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
    // { path: 'options', loadChildren: './options/options.module#OptionsPageModule' },
  {path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule'},
  {path: '', loadChildren: './swiper/swiper.module#SwiperPageModule'},
  { path: 'food', loadChildren: './food/food.module#FoodPageModule' },
  { path: 'care', loadChildren: './care/care.module#CarePageModule' },
  { path: 'medicine', loadChildren: './medicine/medicine.module#MedicinePageModule' },
  { path: 'hygiene', loadChildren: './hygiene/hygiene.module#HygienePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
