// describe(`addingNumbers's spec`, () => {

//   it(`should load app`, () => {
//     cy.visit("http://127.0.0.1:5173")
//   })

//   it(`should add numbers`, () => {
//     cy.visit("http://127.0.0.1:5173")
//     cy.get("#firstNumber").type(5);
//     cy.get("#secondNumber").type(5);
//     cy.get("#calculBtn").click()
//     cy.get("#result").contains("10");
//   })

//   it(`should add negative numbers`, () => {
//     cy.visit("http://127.0.0.1:5173")
//     cy.get("#firstNumber").type(-8);
//     cy.get("#secondNumber").type(-3);
//     cy.get("#calculBtn").click()
//     cy.get("#result").contains("-11");
//   })

//   it(`should works with decimals`, () => {
//     cy.visit("http://127.0.0.1:5173")
//     cy.get("#firstNumber").type(1.1);
//     cy.get("#secondNumber").type(2.2);
//     cy.get("#calculBtn").click()
//     cy.get("#result").contains("3.3");
//   })

//   it(`should works while adding 0s`, () => {
//     cy.visit("http://127.0.0.1:5173")
//     cy.get("#firstNumber").type(0);
//     cy.get("#secondNumber").type(0);
//     cy.get("#calculBtn").click()
//     cy.get("#result").contains("0");
//   })

//   it(`should not accept typing char`, () => {
//     cy.visit("http://127.0.0.1:5173")
//     cy.get("#firstNumber").type("a");
//     cy.get("#firstNumber").type(1);
//     cy.get("#secondNumber").type(1);
//     cy.get("#calculBtn").click()
//     cy.get("#result").contains("2");
//   })

  
//   it(`should works living one input empty`, () => {
//     cy.visit("http://127.0.0.1:5173")
//     cy.get("#secondNumber").type(1);
//     cy.get("#calculBtn").click()
//     cy.get("#result").contains("1");
//   })

  
//   it(`result should be NaN if one input empty`, () => {
//     cy.visit("http://127.0.0.1:5173")
//     cy.get("#secondNumber").type(1);
//     cy.get("#calculBtn").click()
//     cy.get("#result").contains("NaN");
//   })

// })








describe(`PokemonApi's spec`, () => {

  beforeEach(() =>{cy.visit("http://127.0.0.1:5173")})

  it(`should load app`, () => {
  });

  it(`should get 200 from API`, () => {
    cy.request('https://pokeapi.co/api/v2/pokemon').should((response) => {
      expect(response.status).to.eq(200);
    });

  });

  it(`body from API`, () => {
    cy.request('https://pokeapi.co/api/v2/pokemon').should((response) => {
      expect(response.body.results.length).to.be.greaterThan(1);
    });
  });

  it(`duration shoulbe be <2000 from API`, () => {
    cy.request('https://pokeapi.co/api/v2/pokemon').should((response) => {
      expect(response.duration).to.be.lessThan(2000);
    });
  });

})