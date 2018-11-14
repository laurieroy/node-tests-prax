const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  })


  it('should asyc square a number', (done) => {
    utils.asyncSquare(2, (product) => {
      expect(product).toBe(4).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(2);
    expect(res).toBe(4).toBeA('number');
  });
});



// it('should expect some values', () => {
  // expect(12).toNotBe(11);
  // expect({name: 'Laurie'}).toEqual({name: 'Laurie'});
  // expect([2,3,4]).toExclude(2);
//   expect({
//     name:'Laurie',
//     age: '44',
//     location: 'Portland'
//   }).toInclude({
//     age: 44
//   })
// });
//should verify first and last name are Set(
// set age, location
// pass into user
// pass string first name space last names
// get assert back, make assertion
it('should set firstName and lastName', () => {
  let user = {location: 'Portland', age: 99};
  let res = utils.setName(user, 'Laurette Roy');
  expect(user).toEqual(res);
});
//
// it('should include user\'s first name, last name, age and location', () => {
//   expect(user).toBeA('object');
//   expect(user[0].toBeA('string').toExclude(' '));
//   expect(user[1].toBeA('string').toExclude(' '));
//   expect(user[2].toBeA('number').tobeGreaterThan(0));
//   expect(user[3].toBeA('string'));
// });
