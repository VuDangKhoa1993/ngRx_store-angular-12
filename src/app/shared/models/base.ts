import { Observable } from 'rxjs';
export interface IBaseService<T> {
    getAll() : Observable<IBaseApiResponse<IGetAllResponse<T>>>;
    getDetailById(id: number | string): Observable<IBaseApiResponse<T>>;
    create(body: T): Observable<IBaseApiResponse<T>>;
    update(id: number | string, body: T): Observable<IBaseApiResponse<T>>;
    delete(id: number | string): Observable<IBaseApiResponse<T>>;
}

export interface IGetAllResponse<T> {
    total: number;
    result: boolean,
    data: T[]
}

export interface IBaseApiResponse<T> {
    result: T,
    errors: IBaseErrorResponse
}

export interface IBaseErrorResponse {
    code: number;
    message: string;
}