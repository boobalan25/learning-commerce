import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { HomepageData } from "../modals/homepage-data";
import { Observable, catchError, throwError } from "rxjs";

const HOME_PAGE_API = environment.commonHost + '/homepage';

@Injectable({
    providedIn: 'root'
})
export class HomepageService {
    constructor(private httpClient: HttpClient) {

    }

    getHomepageProducts(): Observable<HomepageData> {
        return this.httpClient.get<HomepageData>(HOME_PAGE_API).pipe(
            map((response: HomepageData) => {
                return response as HomepageData;
            }),
            catchError((error: HttpErrorResponse) => {
                return this.handleError(error);
            })
        );
    }

    handleError(error: HttpErrorResponse) {
        return throwError(() => {
            return error.status || error;
        })
    }
}