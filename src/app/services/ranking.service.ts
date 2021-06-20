import {Injectable,EventEmitter} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  public rootURL: string;
  public result: Array<string> = [];

  constructor(private http: HttpClient) {
    this.rootURL = '/api';
  }

  rankWikiTopic(query: string) {
    let params = new HttpParams();
    params = params.append('query', query);
    return this.http.get(this.rootURL + '/rankWikiTopic', {params: params});
  }


}
