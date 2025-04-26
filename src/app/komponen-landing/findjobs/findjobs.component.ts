import { Component } from '@angular/core';
import { findjob } from './data';

@Component({
  selector: 'app-findjobs',
  templateUrl: './findjobs.component.html',
  styleUrls: ['./findjobs.component.scss']
})
export class FindjobsComponent {
  findjobs: any;

  constructor() { }

  ngOnInit(): void {
    // Fetch Data
    this.findjobs = findjob
  }
}
