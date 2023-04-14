Cypress.Commands.add('writeFiction', (title, author, genre) => {
  cy.log(`Title: ${title}`)
  cy.log(`Author: ${author}`)
  cy.log(`Genre: ${genre}`)
  cy.log('Once upon a time, in a faraway kingdom, there was a wise king named Arthur. He ruled the land with fairness and justice, and his people loved him dearly. One day, a mysterious traveler arrived at the king\'s castle, carrying a precious gift - a magical lamp that granted wishes to whoever possessed it. The king was amazed by the lamp, and asked the traveler where he had found it. The traveler told him a story of a powerful genie who lived in a cave deep in the desert, and how he had tricked the genie into granting him the lamp. The king was intrigued, and decided to embark on a journey to find the genie and claim the lamp for himself...')
})
