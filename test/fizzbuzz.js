//https://github.com/pedrovgs/FizzBuzz-Kata
import {  expect } from 'chai';

import {    fizzbuzz } from '../src/js/';


describe('Kata FIZZ BUZZ', function () {

    it('should return a given number as string', () => {
        
        expect(fizzbuzz(1)).to.eql('1');
    });

    it('should return FIZZ if number is divisible by 3', () => {
        expect(fizzbuzz(6)).to.eql('FIZZ');
        expect(fizzbuzz(9)).to.eql('FIZZ');
        expect(fizzbuzz(12)).to.eql('FIZZ');
    });

    it('should return BUZZ if number is divisible by 5', () => {
        expect(fizzbuzz(5)).to.eql('BUZZ');
        expect(fizzbuzz(10)).to.eql('BUZZ');
    });
    
    it('should retun FIZZBUZZ if number is divisble by 3 and 5',  ()=> {
        expect(fizzbuzz(15)).to.eql('FIZZBUZZ');
        expect(fizzbuzz(30)).to.eql('FIZZBUZZ');
        expect(fizzbuzz(45)).to.eql('FIZZBUZZ');
    });
    
});