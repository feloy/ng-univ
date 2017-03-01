import './polyfills.ts';

import { platformBrowser } from '@angular/platform-browser'
import { AppModule } from './app/app.module'
import { AppModuleNgFactory } from './ngfactory/src/app/app.module.ngfactory'

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory);
