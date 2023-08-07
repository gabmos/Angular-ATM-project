/*
  ## AppComponent

  The `AppComponent` is the root component of the Angular application.
  It serves as the entry point for the application and is responsible for displaying the main template and styles.

  ### Selector
  - `app-root`: The selector used to identify this component in the HTML template.

  ### Template URL
  - `./app.component.html`: The path to the template file that defines the structure of this component's view.

  ### Style URLs
  - `./app.component.css`: The path to the CSS file that provides styling for this component's view.

  ### Properties
  - `title`: A property used to store the title of the application (set to 'atm-machine-project' in this case).

*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atm-machine-project';
}
