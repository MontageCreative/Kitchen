import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// third party imports
import './plugins/slide-toggle.js';

// if (environment.production) {
//   enableProdMode();
// }

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
