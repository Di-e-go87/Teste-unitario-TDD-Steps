const chai = require('chai');
const expect = chai.expect;

const multiplicarNumero = (a,b) =>{
    if(typeof a === "number" && typeof b === "number") return a * b;
     else return undefined;
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
    it('Multiplicar dois numeros - -5 e -3 ', (done) =>{
    const resultado = multiplicarNumero( -5,-3);
        expect(resultado).be.equal(15);
        done();

    })
    it('Multiplicar dois numeros - 5 e 0 ', (done) =>{
    const resultado = multiplicarNumero( 5,0);
        expect(resultado).be.equal(0);
        done();

    })
    });