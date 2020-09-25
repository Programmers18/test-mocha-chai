
describe.only('Hooks', () => {
    before(() => console.log('before ALL - Se ejecuta al inicio una vez!!!'));
    after(() => console.log('after ALL - Se ejecuta al final de todas las pruebas'));
    beforeEach(() => console.log('before Each ejecuntandose antes de todos los IT'));
    afterEach(() => console.log('after Each ejecuntandose despues de todos los IT'));
    it('Prueba 1', () => console.log('TEST 1'));
    it('Prueba 2', () => console.log('TEST 2'));
});