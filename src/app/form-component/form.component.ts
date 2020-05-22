import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'app-form-component',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    public formFields: any = [];

    constructor(public dataService: DataService) {

    }
    ngOnInit() {
        this.dataService.getFormSettings().subscribe((data) => {
            this.formFields = data;
        })
    }
}
