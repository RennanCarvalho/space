import { Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './page/home/home.component';
import { GameComponent } from './page/game/game.component';
import { ContactComponent } from './page/contact/contact.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'game', component: GameComponent },
            { path: 'contact', component: ContactComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
