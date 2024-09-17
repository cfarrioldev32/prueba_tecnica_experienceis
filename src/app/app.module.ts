import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component';
import { UsersModule } from '../app/modules/users/users.module';
import { USER_REPOSITORY } from './modules/users/users.tokens';
import { UserService } from './infrastructure/services/user.service';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    UsersModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: USER_REPOSITORY, useClass: UserService }
  ]
})
export class AppModule {}
