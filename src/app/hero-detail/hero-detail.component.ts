import {Component, Input, OnInit} from '@angular/core';
import {selector} from 'rxjs/operator/publish';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
// 부모에서 넘겨준것을 받음
  @Input()
  hero:Hero;
  constructor() { }

  ngOnInit() {
  }

}
