//https://github.com/pedrovgs/FizzBuzz-Kata
import { expect } from 'chai';
import {fizzbuzz} from '../src/js/';


describe('Kata FIZZ BUZZ', function () {
    
    it('should return a given number as string', () => {
        expect(fizzbuzz(1)).to.eql('1');
    });
    
});
