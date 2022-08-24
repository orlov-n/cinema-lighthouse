describe('Visit info page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/694919')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      fixture: 'movie.json',
      statusCode: 200
    })
  });

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true);
  });

  it('Should display a header of Cinema Lighthouse', ()=> {
      cy.get('.text-container').contains('Cinema Lighthouse');
  });

  it('Should display the poster image of the movie', () => {
    cy.get('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg");
  });

  it('Should display the title, genre, release date, rating, runtime, synopsis of the movie on hover', () => {
    cy.get('.movie-info-container').within(() => {
      cy.get('.rotating-box').realHover().within(() => {
        cy.get('.title').contains('Money Plane')
        cy.get('.information').contains('RELEASE DATE: 2020-09-29')
        cy.get('.information').contains('Action')
        cy.get('.information').contains('6.9/10 ⭐️')
        cy.get('.information').contains('RUNTIME: 82 MINUTES')
        cy.get('.overview')
      });
    });
  });

});  
