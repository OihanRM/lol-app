import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'team-details',
    loadChildren: () => import('./team-details/team-details.module').then( m => m.TeamDetailsPageModule)
  },
  {
    path: 'player-details',
    loadChildren: () => import('./player-details/player-details.module').then( m => m.PlayerDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
