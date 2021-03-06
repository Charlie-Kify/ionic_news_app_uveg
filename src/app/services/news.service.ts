import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


const API_URL = environment.newsApiConfig.apiURL;
const API_KEY = environment.newsApiConfig.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;
  constructor(
    private http: HttpClient,
  ) { }

  // eslint-disable-next-line @typescript-eslint/no-shadow
  getData(url){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
