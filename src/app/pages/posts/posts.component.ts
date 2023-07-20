import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  mensajes: any = []
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.mensajes = this.dataService.getPosts()
    // .subscribe(data => {
    //   this.mensajes = data
    // })
  }

  escuchaClick(id: number): void {
    console.log('Click en: ', id)
  }
}
