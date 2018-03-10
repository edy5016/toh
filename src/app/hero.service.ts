import { Injectable } from '@angular/core';
import {HEROES} from './mock-hero';
import {Hero} from './hero';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeroService {

  constructor() { }

  // 전체에다 다쓰이면 모듈에다가 의존성등록함
  getHeroes():Observable<Herp[]>{ /*시간이 지나면 얼마만큼들어올지몰를떄 Observable 사용*/
    return of(HEROES);
  }
}
