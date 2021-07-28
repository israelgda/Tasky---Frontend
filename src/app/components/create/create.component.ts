import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tasks } from 'src/app/models/tasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  task: Tasks = {
    titulo: '',
    descricao: '',
    dataFinal: new Date(),
    finalizado: false
  }

  constructor(private router: Router, private service: TasksService) { }

  ngOnInit(): void {
  }

  //Rotas
  create(){
    this.formataData();
    this.service.create(this.task).subscribe((resposta) =>{
      this.service.message('Task criada com sucesso!');
      this.router.navigate(['']);
    }, err => {
      this.service.message('Falha ao criar task!');
      this.router.navigate(['']);
    })
  }
  cancelar(): void{
    this.router.navigate(['']);
  }

  formataData(): void{
    let data = new Date(this.task.dataFinal)
    this.task.dataFinal = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }
}
