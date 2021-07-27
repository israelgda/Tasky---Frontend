import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/models/tasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

  closedTasks = 0;
  listClosed: Tasks[] = [];
  
  constructor(private service: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.findAllClosed();
  }

  findAllClosed(): void{
    this.service.findClosed().subscribe((resposta) => {
      this.listClosed = resposta;
      this.closedTasks = this.listClosed.length;
    })
  }

  voltar(): void{
    this.router.navigate([''])
  }

}
