// Rahul, a software engineer from Pune, enjoys playing chess and gardening when he's not busy coding.
//  He owns a golden retriever named Max, who is 4 years old, fully vaccinated, and loves playing fetch in the park.
//  Rahul is currently employed and has a car that he uses for weekend trips.

//  Meanwhile, Ananya, who recently turned 30 and lives in Bangalore,
//  is passionate about cooking and often experiments with Italian recipes.
//  She has a parrot named Kiwi, who knows over 20 phrases, mimics her voice, 
// and is also vaccinated. Unlike Rahul, Ananya doesn’t own a car but prefers using public transport. 

// Both Rahul and Ananya studied computer science in college, 
// though Ananya also has a minor in graphic design. 

//  Ramesh, a 45-year-old business owner from Jaipur, has little in common with them, 
// except for his love of gardening. He spends his weekends tending to his rose garden and reading historical fiction.
//  Ramesh has two Persian cats, Bella and Leo, who are 3 years old, fully vaccinated, and love lounging in the sun.

// Unlike Ramesh, Kavya, who’s 28 and a professional dancer from Chennai,
//  prefers modern fantasy novels and binge-watching sci-fi shows in her downtime. 
// Kavya has a rescue rabbit named Snowy, who is 2 years old, vaccinated, 
// and enjoys hopping around her backyard and nibbling on carrots. Kavya, however, is currently unemployed and does not own a vehicle.

const people = [
  {
    name: "Rahul",
    age: 35,
    profession: "Software Engineer",
    qualification: "Computer Science",
    skills: [],
    nativePlace: "Pune",
    isEmployed: true,
    modeOfTransport: "car",
    hobbies: [
      {
        title: "playing",
        description: "playing chess"
      },
      {
        title: "gardening",
        description: "not available particular"
      }
    ],
    vehicles: ["car"],
    pets: [
      {
        type: "Dog",
        name: "Max",
        age: 4,
        isVaccinated: true,
        likes: ["Loves to play fetch in the park"],
        skills: "not available"
      },
    ],
  },
  {
    name: "Ananya",
    age: 30,
    profession: "Software Engineer",
    qualification: "Computer Science",
    skills: ["Graphic Design"],
    nativePlace: "Bangalore",
    isEmployed: true,
    modeOfTransport: "Public transport",
    hobbies: [
      {
        title: "cooking",
        description: "Often experiments with Italian recipes"
      }
    ],
    vehicles: [],
    pets: [
      {
        type: "Parrot",
        name: "Kiwi",
        age: 2,
        isVaccinated: true,
        likes: ["Mimics her voice"],
        skills: "Knows over 20 phrases"
      }
    ],
  },
  {
    name: "Ramesh",
    age: 45,
    profession: "Business",
    qualification: "MBA",
    skills: [],
    nativePlace: "Jaipur",
    isEmployed: true,
    hobbies: [
      {
        title: "Reading books",
        description: "Reading fictional books related to  history "
      },
      {
        title: "gardening",
        description: "Tending to his rose garden"
      }
    ],
    vehicles: [],
    pets: [
      {
        type: "Cat",
        name: "Bella",
        age: 3,
        isVaccinated: true,
        likes: ["Love lounging in the sun"],
        skills: "not available"
      },
      {
        type: "Cat",
        name: "Leo",
        age: 3,
        isVaccinated: true,
        likes: ["Love lounging in the sun"],
        skills: "not available"
      }
    ],
  },
  {
    name: "Kavya",
    age: 28,
    profession: "Professional dancer",
    qualification: "B Tech",
    skills: [],
    nativePlace: "Chennai",
    isEmployed: false,
    modeOfTransport: "not available",
    hobbies: [
      {
        title: "Reading books",
        description: "reading novels mostly on fantacies",
      },
      {
        title: "binge-watching",
        description: "watching scientific fictions shows or movies"
      }
    ],
    vehicles: [],
    pets: [
      {
        type: "Rabbit",
        name: "Snowy",
        age: 2,
        isVaccinated: true,
        likes: ["Enjoys hopping around her backyard", " nibbling on carrots"],
        skills: "not available"
      }
    ],
  }
];


// **Hypothetical Questions:**

// -------------------------- 1 question ------------------------------

// 1. How many individuals are currently employed?  ----> 3 persons

console.log(people.filter((person) => person.isEmployed).length, "Q1");

// -------------------------- 2 question ------------------------------

// 2. How many people own a car?    ----> 1 person

console.log(people.flatMap((person) => person.vehicles).filter((record) => record.type === "car").length, "Q2");

// -------------------------- 3 question ------------------------------

// 3. How many pets are fully vaccinated?    ----> 5 pets
const petsDetails = people.flatMap((record) => record.pets);
console.log(petsDetails.filter((record) => record.isVaccinated === true).length, "Q3");

// ------------------------- 4 question ------------------------------------

// 4. What are the names of all the pets, and what type of animal is each?  ----> Max is a dog, Kiwi is a parrot , Bella And Leo are Cats, Snowy is a Rabbit

console.log(petsDetails.map((record) => record.name + " is " +
  record.type), "Q4");

// ------------------------- 5 question ----------------------------------

// 5. Which cities do the individuals live in?   ---->

console.log(people.map((record) => record.nativePlace), "Q5");

// ------------------------- 6 question --------------------------------

// 6. How many hobbies are shared across the group? What are they?   
// ---->   

console.log(people.flatMap((record) => record.hobbies).length, "Q6");

// ------------------------- 7 question -----------------------------------

// 7. How many pets belong to people who are currently unemployed?  
// ----> only one pet
console.log(people.filter((record) => !record.isEmployed).flatMap((record) => record.pets).length, "Q7");

// ------------------------- 8 question -------------------------------

// 8. What is the average age of the individuals mentioned in the passage?
// ----> 35 

console.log(people.reduce((sum, record) => (record.age + sum), 0) / people.length, "Q8");

// ------------------------- 9 question ---------------------------------

// 9. How many individuals have studied computer science, and how many of them have pets?

console.log(people.filter((record) => record.qualification === "Computer Science").filter((record) => record.pets.length !== 0).length, "Q9");

// ------------------------- 10 question --------------------------------

// 10. How many individuals own more than one pet?

console.log(people.filter((record) => record.pets.length > 1).length, "Q10");

// ------------------------- 11 question -------------------------------

// 11. Which pets are associated with specific favorite activities?

console.log((petsDetails).filter((record) => record.likes.includes("Love lounging in the sun")).map((record) => record.name), "Q11");

// ------------------------- 12 question ---------------------------------

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

console.log(people.filter((record) => ["Bangalore", "Chennai"].includes(record.nativePlace)).flatMap((record) => record.pets).map((record) => record.name), "Q12");

// ------------------------- 13 question ---------------------------------

// 13. How many vaccinated pets belong to people who do not own a car?

console.log(people.filter((record) => !record.vehicles.includes("car")).
  flatMap((record) => record.pets).length, "Q13");

// ------------------------- 14 question ---------------------------------
const makeGroups = function (pairs, element) {
  if (pairs.at(-1).some((type) => type !== element)) {
    pairs.push([]);
  }

  pairs[pairs.length - 1].push(element);
  return pairs;
};

// 14. What is the most common type of pet among the group?

const groupedPets = people.flatMap((record) => record.pets).map((record) => record.type).sort().reduce(makeGroups, [[]]);

console.log(groupedPets.reduce((group1, group2) => group1.length > group2.length ? group1 : group2, [])[0], "Q14");

// ------------------------- 15 question ---------------------------------

// 15. How many individuals have more than two hobbies?

console.log(people.filter((record) => record.hobbies.length > 2).length, "Q15");

// ------------------------- 16 question ---------------------------------

// 16. How many individuals share at least one hobby with Ramesh

const rameshHobbies = people.filter((record) => record.name === "Ramesh").flatMap((record) => record.hobbies).flatMap((record) => record.title);


/* 
17. Which pet is the youngest, and what is its name?
18. What types of books are mentioned as interests, and who reads them?
19. How many individuals live in cities starting with the letter "B"?
20. Which individuals do not own any pets?
*/