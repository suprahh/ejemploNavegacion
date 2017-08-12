import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { Ajustes2Page,
        ModalPage,
        AjustesPage,
        Pagina2Page,
        Pagina3Page,
        PrincipalPage,
        TabsPage } from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    Ajustes2Page,
    ModalPage,
    AjustesPage,
    Pagina2Page,
    Pagina3Page,
    PrincipalPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
          backButtonText: 'Atras',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Ajustes2Page,
    ModalPage,
    AjustesPage,
    Pagina2Page,
    Pagina3Page,
    PrincipalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
