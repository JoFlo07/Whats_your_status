import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { TimestampPipe } from '../pipes/timestamp.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, UserCardComponent, TimestampPipe],
})
export class HomePageModule {}
