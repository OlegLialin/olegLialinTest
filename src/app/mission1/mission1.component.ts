import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-mission1',
    templateUrl: './mission1.component.html',
    styleUrls: ['./mission1.component.scss']
})
export class Mission1Component implements OnInit {
    // Define the toogle property
    isActve: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    // Define your method
    toggleClass() {
        this.isActve = !this.isActve;
    }

}
