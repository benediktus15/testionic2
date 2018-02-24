import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { SavePage } from '../pages/save/save';
import { EmployeePage } from '../pages/employee/employee';
import { ProfilePage } from '../pages/profile/profile';
import { AddEmployeePage } from '../pages/add-employee/add-employee';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BeritaProvider } from '../providers/berita/berita';
import { EmployeeProvider } from '../providers/employee/employee';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage, 
    ListPage,
    DetailPage,
    SavePage,
    EmployeePage,
    ProfilePage,
    AddEmployeePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    ListPage,
    DetailPage,
    SavePage,
    EmployeePage,
    ProfilePage,
    AddEmployeePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BeritaProvider,
    EmployeeProvider
  ]
})
export class AppModule {}
