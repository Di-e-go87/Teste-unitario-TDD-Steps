const chai = require('chai');
const expect = chai.expect;

const somarNumero = (a,b) =>{
    if(typeof a === "number" && typeof b === "number") return a + b;
     else return undefined;
}

describe('Soma', () => {
    it('Soma de dois numeros -2 e 3 ', (done) =>{
        const resultado = somarNumero(2,3);
            expect(resultado).be.equal(5);
            done();
    })

    it('Soma de dois numeros - -2 e 3 ', (done) =>{
        const resultado = somarNumero(-2,3);
            expect(resultado).be.equal(1);
            done();
    })
    it('Soma de dois numeros - "teste" e 3 ', (done) =>{
        const resultado = somarNumero("teste",3);
            expect(resultado).be.equal(undefined);
            done();
    })
    it('Soma de dois numeros - null e 3 ', (done) =>{
        const resultado = somarNumero(null,3);
            expect(resultado).be.equal(undefined);
            done();
    })

});

    
    
    



