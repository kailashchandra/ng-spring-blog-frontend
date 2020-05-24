import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PostPayload } from './add-post/post-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  //url:string = 'http://localhost:8080/api/posts/';
  url:string = 'https://kdcoder-spring-blog.herokuapp.com/api/posts/';
  constructor(private httpClient: HttpClient) { }

  addPost(postPayload: PostPayload) {
    return this.httpClient.post(this.url, postPayload);
  }

  getAllPost(): Observable<Array<PostPayload>> {
    return this.httpClient.get<Array<PostPayload>>(this.url+'all');
  }

  getPost(paramLink: Number): Observable<PostPayload> {
    return this.httpClient.get<PostPayload>(this.url+'get/'+paramLink);
  }
}
