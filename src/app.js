function domainGenerator() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let pro of pronoun) {
    for (let ad of adj) {
      for (let no of noun) {
        console.log(`${pro}${ad}${no}.com`);
      }
    }
  }
}

domainGenerator();
