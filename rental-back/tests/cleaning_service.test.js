const Cleaning = require('../src/services/cleaning_service');
const {BadRequestError, ValidationError} = require('../src/exceptions/error');

describe('Cleaning service', () => {

  test('should throw error if date is invalid', async () => {
    const input = 'invalid';

    await expect(Cleaning.getListCleaning(input)).rejects.toThrow(BadRequestError);
  });
 

});