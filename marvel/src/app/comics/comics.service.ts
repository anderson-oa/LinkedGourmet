import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComicsModel } from './comics.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ComicsService {

    API = "comics"

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Array<ComicsModel>> {
        return this.http.get<Array<any>>(`${this.API}?limit=30&title=Avengers`).pipe(
            map(obj => {
                return obj["data"].results.map(result => {
                    var image = `${result.thumbnail.path}.${result.thumbnail.extension}`;
                    return new ComicsModel(result.id, result.title, image);
                });
            })
        );
    }

    getById(id: string): Observable<ComicsModel> {
        return this.http.get<ComicsModel>(`${this.API}/${id}?`).pipe(
            map(obj => obj["data"].results[0])
        );
    }
}