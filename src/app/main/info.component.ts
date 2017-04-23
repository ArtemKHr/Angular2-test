import { Component, Input } from '@angular/core';

@Component({
    selector: 'info-comp',
    templateUrl: './info.component.html',
    styleUrls: ['./../app.component.scss'],
})
export class InfoComponent{
    @Input() name: string;
    @Input() age: number;
    @Input() job: string;
}