import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsDetailsPage } from '../news-details/news-details.page';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: NewsDetailsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule{}
