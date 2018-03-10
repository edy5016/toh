import { Injectable } from '@angular/core';
import {HEROES} from './mock-hero';
import {Hero} from './hero';

@Injectable()
export class HeroService {

  constructor() { }

  // 전체에다 다쓰이면 모듈에다가 의존성등록함
  getHeroes():Hero[] {
    return HEROES;
  }
}
