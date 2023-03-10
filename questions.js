let movies = [
  {
    name: "Hocus Pocus",
    description:
      "A teenage boy named Max and his little sister move to Salem, where he struggles to fit in before awakening a trio of diabolical witches that were executed in the 17th century",
    dateReleased: 1993,
    genre: ["comedy", "family", "fantasy"],
    ageRating: "PG",

  },
  {
    name: "Independence Day",
    description:
      "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
    dateReleased: 1996,
    genre: ["action", "adventure", "sci-fi"],
    ageRating: "PG-13",

  },
  {
    name: "E.T. the Extra-Terrestrial",
    description:
      "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.",
    dateReleased: 1982,
    genre: ["adventure", "family", "sci-fi"],
    ageRating: "PG",
  },
  {
    name: "The Goonies",
    description:
      "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
    dateReleased: 1985,
    genre: ["adventure", "comedy", "family"],
    ageRating: "PG",
  },
  {
    name: "Back to the Future",
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    dateReleased: 1985,
    genre: ["adventure", "comedy", "sci-fi"],
    ageRating: "PG",
  },
  {
    name: "Jurassic Park",
    description:
      "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    dateReleased: 1993,
    genre: ["action", "adventure", "sci-fi"],
    ageRating: "PG-13",
  },
  {
    name: "Toy Story",
    description:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boys bedroom.",
    dateReleased: 1995,
    genre: ["animation", "adventure", "comedy"],
    ageRating: "G",
  },
  {
    name: "The Land Before Time",
    description:
      "An orphaned brontosaurus teams up with other young dinosaurs in order to reunite with their families in a valley.",
    dateReleased: 1988,
    genre: ["animation", "adventure", "drama"],
    ageRating: "G",
  },
  {
    name: "Labyrinth",
    description:
      "Sixteen-year-old Sarah is given thirteen hours to solve a labyrinth and rescue her baby brother Toby when her wish for him to be taken away is granted by the Goblin King Jareth.",
    dateReleased: 1986,
    genre: ["adventure", "family", "family"],
    ageRating: "PG",
  },
  {
    name: "Cool Runnings",
    description:
      "When a Jamaican sprinter is disqualified from the Olympic Games, he enlists the help of a dishonored coach to start the first Jamaican Bobsled Team.",
    dateReleased: 1993,
    genre: ["adventure", "comedy", "family"],
    ageRating: "PG",

  },
];

// With array of objects above, create a series of functions that will allow you to do the following questions below:
// hint: we can access the properties of an object using dot notation or bracket notation
// console.log(movies[0].name);
// if using a for loop, you can use the index to access each object in the array

// example loop to iterate through an array of objects
exampleArray = [{firstName: 'Kristina', lastName: 'Macias'}, {firstName: 'Victoria', lastName: 'Ditmer'}];

for(let i = 0; i < exampleArray.length; i++) {
  console.log(exampleArray[i]); // could we use dot notation to access properties of the object?
}


// Create a function that uses a for loop to iterate through the array of movies and console.log each movie's name.
// See . notation and [] notation for accessing object properties.

// Create a function that uses a for loop to iterate through the array of movies and console.log each movie's description.
// See . notation and [] notation for accessing object properties.

// Create a function that uses a for loop to iterate through the array of movies and console.log the genre of each movie.
// See . notation and [] notation for accessing object properties.

// Create a function that uses a for loop to iterate through the array of movies. If the movie includes the genre "adventure", console.log the movie's name.
// See . notation and [] notation for accessing object properties.
// hint: what method can we use to check if an array includes a value?

// Create a function that uses a for loop to iterate through the array of movies. If the movie includes the genre "comedy" and the age rating is "PG", console.log the movie's name.
// See . notation and [] notation for accessing object properties.
// hint: what method can we use to check if an array includes a value?

// Create a function that finds the movie with the longest description. Console.log the movie's name and description
// hint: what property can we use to check the length of a string?