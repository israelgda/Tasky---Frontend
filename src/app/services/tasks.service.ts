import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tasks } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseUrl = environment.baseUrl;
  closedUrl = environment.closedUrl;
  openUrl = environment.openUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  /*Métodos de finByid das Tasks*/
  findById(id: any): Observable<Tasks>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Tasks>(url);
  }
  /*Método para retornar todas as Tasks*/ 
  findAll(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.baseUrl);
  }

  /*Método para retornar todas as fechadas*/ 
  findClosed(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.closedUrl);
  }

  /*Método para retornar todas as abertas*/ 
  findOpen(): Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.openUrl);
  }

  /*Métodos CRUD*/
  create(task: Tasks): Observable<Tasks>{
    return this.http.post<Tasks>(this.baseUrl, task);
  }
  updateTask(task: Tasks): Observable<Tasks>{
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put<Tasks>(url, task);
  }
  deleteTask(id: any): Observable<void>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  /*Métodos de mensagens de alerta*/
  message(msg: String): void{
    this.snack.open(`${msg}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    });
  }
}
