import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-hero';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[] // 배열 타입
  selectedHero : Hero;

  // 2.서비스를 생성자로 주입받는다.
  constructor(private heroService:HeroService) { }  /*private 하면 인스턴스변수됨
*/
  ngOnInit() {
    this.heroService.getHeroes() /*확장성과 유지보수성 높이기 위해서 DI 사용*/
      .subscribe(data => this.heroes = data); // 데이터가 언제 들어올지 지켜 보고 있는다 subscribe
  }

}
