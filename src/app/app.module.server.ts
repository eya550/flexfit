// Import necessary modules
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import your routing module

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    AppRoutingModule, // Include your AppRoutingModule here
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
