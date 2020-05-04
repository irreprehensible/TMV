import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('isLiked') isLiked:boolean;
  @Input('likeCount') likeCount:number;
  @Output('changed') clicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isLiked = !this.isLiked;
    this.clicked.emit(this.isLiked);
  }

}
