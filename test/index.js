const chai = require('chai')
const expect = chai.expect

const calcularAtraso = (pParcela, pDias) => {
    if(pDias <= 30) {
        return pParcela + pParcela * (5/100);
    }
    if(pDias >= 31 && pDias <= 60) {
        return pParcela + pParcela * (10/100);
    }
    if(pDias > 60) {
        return pParcela + pParcela * (15/100);
    }
    
}

describe('Calculo', () => {
    it('Calcule o valor de uma parcela com 5% e até 30 dias de atraso ', (done) => { 
        const resultado = calcularAtraso(100,30);
        expect(resultado).be.equals(105)
        done();
    }) 
    it('Calcule o valor de uma parcela com 10% entre 30 a 60 dias dias de atraso ', (done) => {
        const resultado = calcularAtraso(100,50);
        expect(resultado).be.equals(110)
        done();
    }) 
    it('Calcule o valor de uma parcela com 15% maior que 60 dias de atraso ', (done) => {
        const resultado = calcularAtraso(100,70);
        expect(resultado).be.equals(115)
        done();
    })
})