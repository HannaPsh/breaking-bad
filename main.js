let randomQuoteBtn = document.getElementById("randomQuoteBtn");
let characterInput = document.getElementById("characterInput");
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let characters = document.getElementById("characters");
let selectName = document.getElementById("selectName");

/*                            #################### Pictures  ####################                     */

async function fetchData(data) {
  try {
    let response = await fetch(
      "https://www.breakingbadapi.com/api/characters"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let dataCharacters = await response.json();
    console.log(dataCharacters);

    for (element of dataCharacters) {
      if (element.name == data[0].author) {
        characters.innerHTML = `<img src ="${this.element.img}">`;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

/* #######################################    Random Quote BTN ######################################################### */

randomQuoteBtn.addEventListener("click", async function() {
  try {
    let response = await fetch(
      "https://www.breakingbadapi.com/api/quote/random"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);
    for (data[0] of data) {
      quote.innerHTML = `${data[0].quote}`;
      author.innerHTML = `${data[0].author}`;

      /* ############## exceptions ##############*/

      if (data[0].author == "Chuck McGill") {
        data[0].author = "Charles McGill";
      } else if (data[0].author == "Hank Schrader") {
        data[0].author = "Henry Schrader";
      } else if (data[0].author == "Jimmy McGill") {
        data[0].author = "Saul Goodman"; /* same character! */
      } else if (data[0].author == "Gus Fring") {
        data[0].author = "Gustavo Fring";
      } else if (data[0].author == "Kim Wexler") {
        data[0].author = "Kimberly Wexler";
      }
    }
    fetchData(data);
  } catch (error) {
    console.log("error");
  }
});
/* ################################################## api list of Characters (for selector options) ############################################# */

async function fetchSelector() {
  try {
    let response = await fetch("https://breakingbadapi.com/api/quotes");
    if (!response.ok) {
      
      throw new Error(`HTTP error! status: ${response.status}`); 
    }
    let data = await response.json();
    console.log(data);
    let arrayOfCharacters = [];
    let options = "";
    for (element of data) {
      console.log(element);
      arrayOfCharacters.push(`${element.author}`);
    }
    console.log(arrayOfCharacters);
    let uniqueChars = arrayOfCharacters.filter((c, index) => {
      /* takes away tge repeating names of characters */
      return arrayOfCharacters.indexOf(c) === index;
    });
    console.log(uniqueChars);
    for (elementOfArray of uniqueChars) {
      options += `<option value="${elementOfArray}">${elementOfArray}</option>`;
    }
    selectName.innerHTML += options; /* send the names into selector list*/

  } catch (error) {
    console.log("error");
  }
}
fetchSelector();
    /* ############################################## Select #################################################### */

async function myFunction(event) {
    try {
      if (!event.target.value==""){ /* DON'T do this it for SELECTED <option>Choose character</option> */
      let response = await fetch("https://breakingbadapi.com/api/quote/random?author=" + event.target.value);
      let data = await response.json();
      console.log(data);
      for (data[0] of data) {
        quote.innerHTML = `${data[0].quote}`;
        author.innerHTML = `${data[0].author}`;
        
         /* ############## exceptions ##############*/

      if (data[0].author == "Chuck McGill") {
        data[0].author = "Charles McGill";
      } else if (data[0].author == "Hank Schrader") {
        data[0].author = "Henry Schrader";
      } else if (data[0].author == "Jimmy McGill") {
        data[0].author = "Saul Goodman"; /* same character! */
      } else if (data[0].author == "Gus Fring") {
        data[0].author = "Gustavo Fring";
      } else if (data[0].author == "Kim Wexler") {
        data[0].author = "Kimberly Wexler";
      }
      }
      fetchData(data);
}
    } catch (error) {
      console.log(error);
    }
  }
