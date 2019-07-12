import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  kanbanData() {
    return   [
      { id: 1, name: 'Task1' },
      { id: 2, name: 'Task2'},
      { id: 3, name: 'Task3'},

    ]
  }
  constructor() { }
}
