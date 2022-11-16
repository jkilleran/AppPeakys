import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then( m => m.CharactersPageModule)
  },
  {
    path: 'tommymore',
    loadChildren: () => import('./tommymore/tommymore.module').then( m => m.TommymorePageModule)
  },
  {
    path: 'arthurmore',
    loadChildren: () => import('./arthurmore/arthurmore.module').then( m => m.ArthurmorePageModule)
  },
  {
    path: 'johnmore',
    loadChildren: () => import('./johnmore/johnmore.module').then( m => m.JohnmorePageModule)
  },
  {
    path: 'polymore',
    loadChildren: () => import('./polymore/polymore.module').then( m => m.PolymorePageModule)
  },
  {
    path: 'favoritemoments',
    loadChildren: () => import('./favoritemoments/favoritemoments.module').then( m => m.FavoritemomentsPageModule)
  },
  {
    path: 'moment1',
    loadChildren: () => import('./moment1/moment1.module').then( m => m.Moment1PageModule)
  },
  {
    path: 'moment2',
    loadChildren: () => import('./moment2/moment2.module').then( m => m.Moment2PageModule)
  },
  {
    path: 'moment3',
    loadChildren: () => import('./moment3/moment3.module').then( m => m.Moment3PageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'inmylive',
    loadChildren: () => import('./inmylive/inmylive.module').then( m => m.InmylivePageModule)
  },
  {
    path: 'hireme',
    loadChildren: () => import('./hireme/hireme.module').then( m => m.HiremePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
