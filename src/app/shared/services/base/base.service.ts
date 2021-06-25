import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from "@angular/core";
import { BASE_URL } from "@shared/tokens/tokens";
import { IBaseApiResponse, IBaseService, IGetAllResponse } from '@shared/models/base';
@Injectable({
    providedIn: 'root'
})
export abstract class BaseService<T> implements IBaseService<T> {
    protected key: string = '';
    constructor(
        protected httpClient: HttpClient,
        @Inject(BASE_URL) protected baseUrl: string
    ) { }

    getAll(): Observable<IBaseApiResponse<IGetAllResponse<T>>> {
        return this.httpClient.get<IBaseApiResponse<IGetAllResponse<T>>>(`${this.baseUrl}/${this.key}`)
    }

    getDetailById(id: number): Observable<IBaseApiResponse<T>> {
        return this.httpClient.get<IBaseApiResponse<T>>(`${this.baseUrl}/${this.key}/` + id);
    }

    create(body: T): Observable<IBaseApiResponse<T>> {
        return this.httpClient.post<IBaseApiResponse<T>>(`${this.baseUrl}/${this.key}`, body);
    }

    update(id: number, body: T): Observable<IBaseApiResponse<T>> {
        return this.httpClient.put<IBaseApiResponse<T>>(`${this.baseUrl}/${this.key}/` + id, body);
    }

    delete(id: number): Observable<IBaseApiResponse<T>> {
        return this.httpClient.delete<IBaseApiResponse<T>>(`${this.baseUrl}/${this.key}/` + id);
    }
}