export class PeopleService{
  private people: Array<Person>;

  constructor() {
    this.people = new Array<Person>();
  }


  addPerson(person: Person) {
    this.people.push(person);
  }

}

export class Person{
  constructor(public name: string, public age: number) {

  }
}
