import { Component, OnInit } from '@angular/core';

import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
  personList: string[];

  // adding private in the constructor variable makes
  // an attribute for the class and injects the service
  // in the variable
  // private personsService: PersonsService;

  constructor(private personsService: PersonsService) {
    // Not recomended way
    // this.personList = personsService.persons;
    // this.personsService = personsService;
  }

  // Is recomended to initialize things in ngOnInit method
  // and not in the constructor
  ngOnInit() {
    this.personList = this.personsService.persons;
  }
}
