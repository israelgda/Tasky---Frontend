import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tasks } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.baseUrl);
  }
}
