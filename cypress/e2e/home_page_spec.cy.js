describe('Visit home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      fixture: "movies.json",
      statusCode: 200
    })
    cy.visit("http://localhost:3000/")
  });

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true);
  });

  it('Should display a header of RANCID TOMATILLOS', () => {
      cy.get('.text-container').contains('rancid tomatillos');
  });

  it('Should display all movie cards', () => {
    cy.get('.movies-container').within(() => {
      cy.get('.card-container').should('have.length', 39)
    });
  });

  it('Should display movie card with image and title', () => {
    cy.get('.card-container').eq(0).within(() => {
      cy.get('p').contains('Money Plane (2020)')
      cy.get('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")
    });
  });

  it('Should display Youtube trailer on hover over a specific movie', ()=> {
    cy.get('.card-container').eq(0).realHover().within(() => {
      cy.get('iframe')
    });
  });

  it('Should be able to click on a movie card and be redirected to the movie info page', (() => {
    cy.get('.card-container').eq(0).click();
    cy.url().should('eq', 'http://localhost:3000/694919');
  }));

  it('Should show an error message if the server is down', (() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
    .get('h2').contains('Something went wrong, please try again!')
  }));

  it('Should show an error message if the page is not found', (() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404
    })
    .get('h2').contains('Something went wrong, please try again!')
  }));

});