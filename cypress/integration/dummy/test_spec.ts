describe('LifePage', () => {
    it('lives loads success', () => {
        cy.visit('/life');
        cy.get('main.ant-table').contains('table');
    });
});
