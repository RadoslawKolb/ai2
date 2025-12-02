import {Component, Input} from '@angular/core';
import {RandomService} from './random.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-random',
  imports: [
    NgIf
  ],
  templateUrl: './random.html',
  styleUrl: './random.css',
})

export class Random {
  myNumber: number = 0;
  @Input() max: number = 10;

  constructor(private randomService: RandomService) {}

  btnClick(): void {
    this.myNumber = this.randomService.randomNumber(this.max);
  }

  isSmallerThanHalf(): boolean {
    return this.myNumber <= this.max / 2;
  }
}
