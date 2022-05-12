// SELECTED ELEMENTS
let elReadyList = selectorElem(".js-heros-list");
let elReadyBtn = selectorElem(".js-btn");

// ACTIVE BUTTON THAT SHOWS LIST 
elReadyBtn.addEventListener("click", function(evt) {
    evt.preventDefault();

    // let elHeading = createElem("h2", "Pokemon's Heroes", "site-heading");
    // document.body.append(elHeading);    
    for (let i = 0; i < pokemons.length; i++) {
        let elReadyItems = createElem("li", "", "ready-items mt-3");
        let elHeroName = createElem("p", `${pokemons[i].name}`, "hero-name fw-bold m-0 all-textcontents");
        let elHeroImg = createElem("img", "", "heros-img", "", `${pokemons[i].img}` );
        let elHeightHero = createElem("p", `Height: ${pokemons[i].height}`, "hero-height m-0 all-textcontents");
        let elWeightHero = createElem("p", `Weight: ${pokemons[i].weight}`, "hero-weight m-0 all-textcontents");

        
        elReadyItems.append(elHeroImg, elHeroName,elHeightHero, elWeightHero);
        elReadyList.append(elReadyItems);
    }
    elReadyBtn.className = "magic-btn d-none";
});