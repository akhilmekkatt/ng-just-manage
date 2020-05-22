import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(private http: HttpClient) {

    }

    getFormSettings() {
        let endpoint = "../../assets/dynamic_form.json";
        return this.http.get(endpoint);
    }
}
