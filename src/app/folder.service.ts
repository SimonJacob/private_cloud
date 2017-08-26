import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FolderService {

    constructor (
        private http: Http
    ) {}

    getFolder(path: Array<string>) {
        var stringPath = "";
        for (let folder of path) {
            stringPath += folder + "/";
        }
        return this.http.get('/api/folder/' + stringPath)
        .map((res:Response) => res.json());
    }

}
