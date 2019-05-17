import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GithubUsersService {
  private API_PATH = 'https://api.github.com/search/users';

  constructor(private http: Http) {}

  searchUsers(queryTitle: string): Observable<any> {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
      .map((res) => {
        return res.json();
      });
  }
}