const chai = require('chai');
const expect = chai.expect;

const dividirNumero = (a,b) =>{
    if(typeof a === "number" && typeof b === "number") return a / b;
     else return undefined;

    }

describe('Dividir', () => {
    it('Dividir dois numeros - 4 e 2 ', (done) =>{
        const resultado = dividirNumero(4,2);
            expect(resultado).be.equal(2);
            done();
    
    })
    it('Dividir dois numeros - 4 e 3 ', (done) =>{
        const resultado = dividirNumero(6,3);
            expect(resultado).be.equal(2);
            done();
    4
    })
    it('Dividir dois numeros - "teste" e 3 ', (done) =>{
        const resultado = dividirNumero("teste",3);
            expect(resultado).be.equal(undefined);
            done();
    
    })
    it('Dividir dois numeros - "null" e 3 ', (done) =>{
        const resultado = dividirNumero("null",3);
            expect(resultado).be.equal(undefined);
            done();
    })

    it('Dividir dois numeros  4 e 4 ', (done) =>{
        const resultado = dividirNumero(4,4);
            expect(resultado).be.equal(1);
            done();
    
    })

    it('Dividir dois numeros  10 e 2.2 ', (done) =>{
        const resultado = dividirNumero(10,2.2);
            expect(resultado).be.equal(4.545454545454545);
            done();
    
    })
    });