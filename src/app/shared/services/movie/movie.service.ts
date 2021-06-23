import { IBaseApiResponse, IGetAllResponse } from '@shared/models/base';
import { BASE_URL } from './../../tokens/tokens';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { Movie } from '@shared/models/movie';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends BaseService<Movie> {
  constructor(
    protected httpClient: HttpClient,
    @Inject(BASE_URL) protected baseUrl: string,
  ) {
    super(httpClient, baseUrl);
    this.key = 'movies';
  }

  getAllMovies(): Observable<Movie[]> {
    return this.getAll().pipe(map((res: IBaseApiResponse<IGetAllResponse<Movie>>) => res.result.data));
  }
}
