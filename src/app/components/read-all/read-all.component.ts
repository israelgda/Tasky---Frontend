import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/tasks';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: Tasks[] = [];

  constructor(private service: TasksService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
    })
  }
}
