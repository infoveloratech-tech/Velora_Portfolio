import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import '@google/model-viewer';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
