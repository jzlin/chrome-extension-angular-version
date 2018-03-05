import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupComponent } from './popup/popup.component';
import { OptionsComponent } from './options/options.component';
import { BackgroundComponent } from './background/background.component';

const routes: Routes = [
  { path: '', redirectTo: 'popup', pathMatch: 'full' },
  { path: 'popup', component: PopupComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'background', component: BackgroundComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
