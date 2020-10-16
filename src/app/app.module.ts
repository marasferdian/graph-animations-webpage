import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatButtonToggleModule, MatButtonModule, MatGridListModule, MatCardModule, MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SharedService} from './shared/shared.service';
import { AlgorithmGifComponent } from './algorithm-gif/algorithm-gif.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'algorithm-animation', component: AlgorithmGifComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AlgorithmGifComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
