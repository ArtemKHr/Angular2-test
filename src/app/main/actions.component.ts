import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'actions-comp',
    templateUrl: './actions.component.html',
    styleUrls: ['./../app.component.scss']
})
export class ActionsComponent{
    @Output() onChanged = new EventEmitter<boolean>();
    change(bool) {
        this.onChanged.emit(bool);
    }
}