import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class TabsService {
    sub;

    constructor() {
        this.sub = new Subject();
    }
    toDo(state):Observable<any> {
        return this.sub.next(state)
    }
}