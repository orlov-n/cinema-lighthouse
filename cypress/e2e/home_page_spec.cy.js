describe('visit home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      fixture: "movies.json",
      statusCode: 200
    })
    cy.visit("http://localhost:3000/")
  })

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should display a header of RANCID TOMATILLOS', ()=> {
      cy.get('.text-container').contains('rancid tomatillos')
  })

  it('Should display all movie cards', ()=> {
    cy.get('.movies-container').within(()=> {
      cy.get('.card-container').should('have.length', 39)
    })
  })

  it('Should display movie cards with image and titles', ()=> {
    cy.get('.card-container').eq(0).within(()=> {
      cy.get('.card').within(()=> {
        cy.get('.face').within(()=> {
          cy.get('.content')
          // .trigger('mouseover')
          .within(()=> {
            cy.get('p').contains('Money Plane (2020)')
            cy.get('img').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")
            // cy.get('iframe').should('have.attr', 'src', 'https://youtu.be/aETz_dRDEys')
          })
        })
      })
    })
  })

  it.skip('Should display youtube trailer on hover', ()=> {
    cy.get('.card-container').eq(0).within(()=> {
      cy.get('.card').within(()=> {
        cy.get('.face2').within(()=> {
          cy.get('.content')
          .realHover()
          // cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
          //   fixture: "trailer.json",
          //   statusCode: 200
          // })
          .within(()=> {
            cy.get('iframe')
          })
        })
      })
    })
  })

  it('Should be able to click on a movie card and be redirected to the movie info page', (() => {
    cy.get('.card-container').eq(0).click()
    cy.url().should('eq', 'http://localhost:3000/694919')
  }))

  it.only('Should show an error message if the server is down', (() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
    .get('h2').contains('Something went wrong, please try again!')
  }))

})