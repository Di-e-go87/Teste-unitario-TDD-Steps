const chai = require('chai');
const expect = chai.expect;

const subtrairNumero = (a,b) =>{
    if(typeof a === "number" && typeof b === "number") return a - b;
     else return undefined;

}
describe('Subtrair', () => {
    it('Subtrair dois numeros - 3 e 2 ', (done) =>{
        const resultado = subtrairNumero(3,2);
            expect(resultado).be.equal(1);
            done();
})
    
it('Subtrair dois numeros - 4 e 3 ', (done) =>{
    const resultado = subtrairNumero(4,3);
        expect(resultado).be.equal(1);
        done();

})
it('Subtrair dois numeros - "teste" e 3 ', (done) =>{
    const resultado = subtrairNumero("teste",3);
        expect(resultado).be.equal(undefined);
        done();

})
it('Subtrair dois numeros - "null" e 3 ', (done) =>{
    const resultado = subtrairNumero("null",3);
        expect(resultado).be.equal(undefined);
        done();
})

    
it('Subtrair dois numeros - 10 e 2.2 ', (done) =>{
    const resultado = subtrairNumero(10,2.2);
        expect(resultado).be.equal(7.8);
        done();
})
});

    



