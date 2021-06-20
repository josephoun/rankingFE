/**
 * Modules
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

/**
 * Components
 */
import {AppComponent} from './app.component';
import {LoaderComponent} from './components/loader/loader.component';
import {FormInputComponent} from './components/form-input/form-input.component';
import {RankingListComponent} from './components/ranking-list/ranking-list.component';

/**
 * NGRX State Management
 */
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './store/reducers';
import {EffectsModule} from "@ngrx/effects";
import {RankingEffects} from "./store/effects/ranking.effects";
import { StarsComponent } from './components/stars/stars.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    FormInputComponent,
    RankingListComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([RankingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
