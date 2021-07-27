import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/models/tasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  /*Variáveis*/
  closedTasks = 0;
  listAllOpen: Tasks[] = [];
  listClosed: Tasks[] = [];


  constructor(private service: TasksService, private router: Router) { }

  ngOnInit(): void{
    this.findAllOpen();
    this.findAllClosed();
  }
  /*
  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(Tasks =>{
        if(Tasks.finalizado){
          this.listFinished.push(Tasks);
        }else{
          this.listAll.push(Tasks);
        }
      })
      this.closedTasks = this.listFinished.length;
    })
  }*/

  delete(id: any):void{
    this.service.deleteTask(id).subscribe((resposta) =>{
      if(resposta == null){
        this.service.message('Task apagada com sucesso!');
        this.listAllOpen = this.listAllOpen.filter(Tasks => Tasks.id !== id);
      }
    })
  }
  
  findAllOpen(): void{
    this.service.findOpen().subscribe((resposta) => {
      this.listAllOpen = resposta;
    })
  }

  findAllClosed(): void{
    this.service.findClosed().subscribe((resposta) => {
      this.listClosed = resposta;
      this.closedTasks = this.listClosed.length;
    })
  }

  finalizados(): void{
    this.router.navigate(['finalizados'])
  }
}
