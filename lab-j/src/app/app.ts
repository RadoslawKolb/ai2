import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Random} from './random/random';
import { ListComponent } from './list/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Random, ListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('LAB J Radosław Kolb');
}
