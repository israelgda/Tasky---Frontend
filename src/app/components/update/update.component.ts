import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tasks } from 'src/app/models/tasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  task: Tasks = {
    titulo: '',
    descricao: '',
    dataFinal: new Date(),
    finalizado: false
  }

  constructor(private router: Router, private service: TasksService, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.task.id = this.rout.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.task.id).subscribe((resposta) => {
      this.task = resposta;
    })
  }
  //Rotas
  salvar(): void{
    this.service.updateTask(this.task).subscribe((resposta) =>{
      this.service.message('Task atualizada com sucesso!');
      this.router.navigate(['']);
    }, err =>{
      this.service.message('Falha ao atualizar a task!');
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
