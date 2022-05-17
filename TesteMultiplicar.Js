const chai = require('chai');
const expect = chai.expect;

const multiplicarNumero = (a,b) =>{(a,b) => a * b;
} 

describe('Multiplicar', () => {
    it('Multiplicar dois numeros - 3 e 2 ', (done) =>{
        const resultado = multiplicarNumero(3,2);
            expect(resultado).be.equal(6);
            done();
    })
    it('Multiplicar dois numeros - 4 e 3 ', (done) =>{
        const resultado = multiplicarNumero(4,3);
            expect(resultado).be.equal(12);
            done();
    
})
    it('Multiplicar dois numeros - "teste" e 3 ', (done) =>{
        const resultado = multiplicarNumero("teste",3);
            expect(resultado).be.equal(undefined);
            done();
    
})
    it('Multiplicar dois numeros - "null" e 3 ', (done) =>{
        const resultado = multiplicarNumero("null",3);
            expect(resultado).be.equal(undefined);
            done();
    })
    it('Multiplicar dois numeros - -5 e 3 ', (done) =>{
        const resultado = multiplicarNumero( -5,3);
            expect(resultado).be.equal(-15);
            done();
    
})
});