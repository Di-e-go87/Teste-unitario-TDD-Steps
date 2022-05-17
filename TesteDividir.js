const chai = require('chai');
const expect = chai.expect;

const dividirNumero = (a,b) =>{(a,b) => a / b;

}
describe('Dividir', () => {
    it('Dividir dois numeros - 4 e 2 ', (done) =>{
        const resultado = dividirNumero(4,2);
            expect(resultado).be.equal(2);
            done();
    
})
    it('Dividir dois numeros - 4 e 3 ', (done) =>{
        const resultado = dividirNumero(4,3);
            expect(resultado).be.equal(1,3333);
            done();
    
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
});