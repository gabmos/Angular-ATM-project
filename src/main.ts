/*
  ## Angular Bootstrap

  This is the bootstrap file of an Angular application.
  It uses `platformBrowserDynamic()` from '@angular/platform-browser-dynamic' to dynamically bootstrap the application module.

  ### Steps
  1. Import the required `platformBrowserDynamic` function from '@angular/platform-browser-dynamic'.
  2. Import the root module of the application, `AppModule`, from './app/app.module'.
  3. Call `platformBrowserDynamic().bootstrapModule(AppModule)` to bootstrap the application.
  4. If an error occurs during the bootstrap process, it is caught and logged to the console using `catch()`.

  ### Usage
  - This file should be the main entry point of the Angular application, referenced in the index.html file.
  - It is responsible for starting the Angular application by bootstrapping the root module (AppModule) dynamically.
  - It ensures that the application starts, and if any error occurs during the bootstrap process, it will be logged to the console for debugging purposes.
*/


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
