import { NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { CommonsModule } from '../commons/commons.module';
import { APP_CONFIG } from '../commons/providers/config';

import { MyApp } from './app.component';
import { default as MY_CONFIG } from './config';

import { Home } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    Home,
  ],
  imports: [
    CommonsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'it-IT' },
    { provide: APP_CONFIG, useValue: MY_CONFIG }
  ]
})
export class AppModule {}
