import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {InfoComponent} from './info.component'
import {ActionsComponent} from './actions.component'

@NgModule({
    declarations: [
        InfoComponent,
        ActionsComponent
    ],
    imports: [
        FormsModule,
        HttpModule
    ],
    exports: [
        InfoComponent,
        ActionsComponent
    ],
    providers: [],

})
export class MainModule { }
