import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
    Breed = ['Test', 'test2', 'Test3'];
    constructor() {
    }

    ngOnInit() {
    }

}
