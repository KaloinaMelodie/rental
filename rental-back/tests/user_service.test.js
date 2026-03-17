const userService = require('../services/user.service');
const ValidationError = require('../exceptions/validation-error');

describe('User Service - createUser', () => {

  test('should create a valid user', () => {
    const input = {
      name: 'John',
      email: 'john@example.com'
    };

    const result = userService.createUser(input);

    expect(result).toHaveProperty('id');
    expect(result.name).toBe('John');
    expect(result.email).toBe('john@example.com');
  });

  test('should throw error if email is invalid', () => {
    const input = {
      name: 'John',
      email: 'bad-email'
    };

    expect(() => {
      userService.createUser(input);
    }).toThrow(ValidationError);
  });

  test('should throw error if name is too short', () => {
    const input = {
      name: 'A',
      email: 'john@example.com'
    };

    expect(() => {
      userService.createUser(input);
    }).toThrow('Payload validation failed');
  });

});