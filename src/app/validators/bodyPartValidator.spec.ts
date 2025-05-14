import {isValidBodyPart} from "./bodyPartValidator";
import {bodyPartValidator} from "./bodyPartValidator";
describe('isValidBodyPart', () => {

  it('valid BodyPart', () => {
    let bodyPart = isValidBodyPart('head');
    expect(bodyPart).toBe(true);
  });
  it('valid BodyPart', () => {
    let bodyPart = isValidBodyPart('leg');
    expect(bodyPart).toBe(true);
  });
  it('valid BodyPart', () => {
    let bodyPart = isValidBodyPart('hand');
    expect(bodyPart).toBe(true);
  });
  it('valid BodyPart', () => {
    let bodyPart = isValidBodyPart('chest');
    expect(bodyPart).toBe(true);
  });

  it('invalid BodyPart', () => {
    let bodyPart = isValidBodyPart('asdasd');
    expect(bodyPart).toBe(false);
  });
});