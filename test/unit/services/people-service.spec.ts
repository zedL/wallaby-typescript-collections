import { PeopleService, Person } from '../../../src/resources/services/people-service';

describe('runtime context', () => {
  let sut: PeopleService = new PeopleService();

  beforeEach(() => {

  });


  describe('constructor', () => {

    it('should set properties right', () => {
      expect((<any>sut).people).not.toBeNull();
    });

  });

  describe('call add', () => {

    it('should ', () => {
      sut.addPerson(new Person('john', 34));
      sut.addPerson(new Person('nina', 27));
      expect((<any>sut).people.length).toBe(2);
    });
  })

});
