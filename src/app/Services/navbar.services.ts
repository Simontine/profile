import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'


@Injectable({
    providedIn: 'root'
})

export class NavbarService {

    constructor(private http: HttpClient)
    {
        
    }
    private navbar ="http://localhost:4200/app.component";

    
}