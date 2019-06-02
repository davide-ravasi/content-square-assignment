import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class GithubReposService {
  private API_PATH = 'https://api.github.com/users';

  constructor(private http: Http) {}

  searchRepos(queryTitle: string) {
    return this.http.get(`${this.API_PATH}/${queryTitle}/repos`)
      .map((response: Response) => {
        return response.json() || []
      });
  }
  getUsersPhoto(queryName: string) {
    return this.http.get(`${this.API_PATH}/${queryName}`)
      .map((res) => {
        return res.json();
      });
  }
}