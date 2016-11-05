import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from './app.module.ngfactory';

enableProdMode();
document.addEventListener('deviceready', function() {
  platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
});
