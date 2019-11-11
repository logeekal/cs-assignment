import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChartComponent } from "./chart/chart.component";

import { DataProviderService } from "./services/data-provider.service";
import { ThemeService } from './services/theme/theme.service';



import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';



import { MainScreenComponent } from "./main-screen/main-screen.component";
import { ChartHandlerComponent } from "./chart-handler/chart-handler.component";
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SelectComponent } from './select/select.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 


import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PageStatsComponent } from './page-stats/page-stats.component';
import { SocialTrafficComponent } from './social-traffic/social-traffic.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    MainScreenComponent,
    ChartHandlerComponent,
    MenuComponent,
    MenuItemComponent,
    AvatarComponent,
    SelectComponent,
    PageStatsComponent,
    SocialTrafficComponent,
    ThemeToggleComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatTableModule,
    MatProgressBarModule,
    MatSlideToggleModule
    
  ],
  providers: [DataProviderService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
