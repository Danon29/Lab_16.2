import { Component } from '@angular/core';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
})
export class LabComponent {
  condition: boolean = true;
  toggle()
  {
    this.condition = !this.condition;
  }
}

