import * as Collections from 'typescript-collections';
// import Collections = require('typescript-collections');

export class PeopleService{
  private people: Collections.Dictionary<string, Person>;

  constructor() {
    this.people = new Collections.Dictionary<string, Person>();
  }


  addPerson(person: Person) {
    this.people.setValue(person.id, person);
  }

}

export class Person{
  constructor(public id: string,  public name: string, public age: number) {

  }
}
