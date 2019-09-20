import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  kanbanData() {
    return   [
      { id: 1, name: 'Login page design and development' },
      { id: 2, name: 'Register page design development with Validation'},
      { id: 3, name: 'Home page design'},

    ]
  }
  constructor() { }
}
