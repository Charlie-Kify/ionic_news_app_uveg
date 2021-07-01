import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPage } from '../news/news.page';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: NewsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
