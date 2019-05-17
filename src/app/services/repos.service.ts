import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GithubReposService {
  private API_PATH = 'https://api.github.com/users';

  constructor(private http: Http) {}

  searchRepos(queryTitle: string): Observable<any> {
    return this.http.get(`${this.API_PATH}/${queryTitle}/repos`)
      .map((res) => {
        return res.json() || []
      });
  }
}