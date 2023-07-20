import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Mensaje {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() mensaje?: Mensaje;
  @Output() clickPost: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.clickPost.emit(this.mensaje?.id);
  }
}
