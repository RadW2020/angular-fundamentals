import { Injectable, Inject } from '@angular/core';
import { GitSearch } from './git-search';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GitSearchService {
  cachedValues: Array<{
    [query: string]: GitSearch
  }> = [];
  constructor(private http: HttpClient) {
  }

  gitSearch = (query: string, page: number): Promise<GitSearch> => {
    const promise = new Promise<GitSearch>((resolve, reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query]);
        } else {
          this.http.get('https://api.github.com/search/repositories?q=' + query + '&page=' + page + '&per_page=4')
            .toPromise()
            .then( (response) => {
                resolve(response as GitSearch);
            }, (error) => {
                reject(error);
            });
        }
    });
    return promise;
  }
}
