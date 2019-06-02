import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchContainerComponent } from './search/container/search-container.component';
import { ReposComponent } from './repos/container/repos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: SearchContainerComponent },
  { path: ':user/repos', component: ReposComponent },
  {path: '404', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
