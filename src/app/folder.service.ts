import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FolderService {

    constructor (
        private http: Http
    ) {}

    getFolder(folder: string) {
        return this.http.get('/api/folder/' + folder)
        .map((res:Response) => res.json());
    }

}
