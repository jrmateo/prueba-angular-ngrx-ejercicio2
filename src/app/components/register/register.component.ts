import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  disabled: boolean = true;

  value1: string = "";

  value2: string = "";

  value3: string = "";

  value4: string = "";

  value5: string = 'Disabled';

  constructor() { }

  ngOnInit(): void {
  }

}
