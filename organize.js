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


const rahul = {
  personal: {
    fullName: "Rahul",
    age: 35,
    study: "Computer Science",
    nativePlace: "Pune",
    passsion: "Nothing",
    hobbies: ["Playing Chess ", " Gardening"],
    othertalents: "Nothing"
  },
  professional: {
    profession: "Software Engineer",
    employmentStatus: "Employed"
  },
  transport: {
    hasAOwnVechile: "Yes",
    hasAcar: "Yes",
    modeOfCommutation: "Car"
  },
  pets: [
    {
      typeOfPet: "Dog",
      petName: "Max",
      petAge: 4,
      petVaccinationStatus: "Fully vaccinated",
      petLikes: ["Loves to play fetch in the park"],
      petTalents: "Nothing"
    },
  ],
};

const ananya = {
  personal: {
    fullName: "Ananya",
    age: 30,
    study: "Computer Science",
    nativePlace: "Bangalore",
    hobbies: ["cooking"],
    passion: "About cooking and often experiments with Italian recipes.",
    othertalents: "Interest inlearning graphic designing"
  },
  pets: [
    {
      typeOfPet: "Parrot",
      petName: "Kiwi",
      petAge: 2,
      petVaccinationStatus: "Fully vaccinated",
      petLikes: ["Mimics her voice"],
      petTelents: "Knows over 20 phrases"
    }
  ],
  professional: {
    profession: "Software Engineer",
    employmentStatus: "Employed"
  },
  transport: {
    hasAOwnVechile: "No",
    hasAcar: "No",
    modeOfCommutation: "Public transport"
  }

};

const ramesh = {
  personal: {
    fullName: "Ramesh",
    age: 45,
    study: "Dont know",
    nativePlace: "Jaipur",
    hobbies: ["Reading historical fiction", "gardening"],
    passion: "About cooking and often experiments with Italian recipes.",
    othertalents: "Nothing"
  },
  pets: [
    {
      typeOfPet: "Cat",
      petName: "Bella",
      petAge: 3,
      petVaccinationStatus: "Fully vaccinated",
      petLikes: ["Love lounging in the sun"],
      petTalents: "Nothing"
    },
    {
      typeOfPet: "Cat",
      petName: "Leo",
      petAge: 3,
      petVaccinationStatus: "Fully vaccinated",
      petLikes: ["Love lounging in the sun"],
      petTalents: "Nothing"
    }
  ],
  professional: {
    profession: "Business",
    employmentStatus: "Employed"
  },
  transport: {
    hasAOwnVechile: "Dont know",
    hasAcar: "No",
    modeOfCommutation: "Dont know"
  }
};

const kavya = {
  personal: {
    fullName: "Kavvya",
    age: 28,
    study: "Dont know",
    nativePlace: "Chennai",
    hobbies: ["Modern fantasy novels", "binge-watching sci-fi shows"],
    passion: "Dance",
    othertalents: "Nothing"
  },
  pets: [
    {
      typeOfPet: "Rabbit",
      petName: "Snowy",
      petAge: 2,
      petVaccinationStatus: "Fully vaccinated",
      petLikes: ["Enjoys hopping around her backyard", " nibbling on carrots"],
      petTalents: "Nothing"
    }
  ],
  professional: {
    profession: "Professional dancer",
    employmentStatus: "Unemployed"
  },
  transport: {
    hasAOwnVechile: "No",
    hasAcar: "No",
    modeOfCommutation: "Dont know"
  }
};

const personsDetails = [rahul, ananya, ramesh, kavya];

// **Hypothetical Questions:**

// -------------------------- 1 ------------------------------

// 1. How many individuals are currently employed?  ----> 3 persons

// console.log(personsDetails.filter((record) => record.professional.employmentStatus === "Employed").length);

// -------------------------- 2 ------------------------------

// 2. How many people own a car?    ----> 1 person

// console.log(personsDetails.filter((record) => record.transport.hasAcar === "Yes").length);

// -------------------------- 3 ------------------------------

// 3. How many pets are fully vaccinated?    ----> 5 pets
// const petsDetails = personsDetails.flatMap((record) => record.pets);
// console.log(petsDetails.filter((record) => record.petVaccinationStatus === "Fully vaccinated").length);

// ------------------------- 4 ------------------------------------------

// 4. What are the names of all the pets, and what type of animal is each?  ----> Max is a dog, Kiwi is a parrot , Bella And Leo are Cats, Snowy is a Rabbit

// const petsDetails = personsDetails.flatMap((record) => record.pets);
// console.log(petsDetails.map((record) => record.petName + " is " +
//   record.typeOfPet));

// ------------------------- 5 ------------------------------------------

// 5. Which cities do the individuals live in?   ---->  Bangalore

// console.log(personsDetails.map((record) => record.personal.nativePlace));

// ------------------------- 6 ------------------------------------------

// 6. How many hobbies are shared across the group? What are they?   
// ---->

// console.log(personsDetails.flatMap((record) => record.personal.hobbies));

// ------------------------- 7 ------------------------------------------

// 7. How many pets belong to people who are currently unemployed?  
// ----> only one pet

// const unemPloyedPeople = personsDetails.filter((record) => record.professional.employmentStatus === "Unemployed");
// console.log(unemPloyedPeople.flatMap((record) => record.pets).length);

// ------------------------- 8 ------------------------------------------

// 8. What is the average age of the individuals mentioned in the passage?
// ----> 35 

// console.log(personsDetails.reduce((sum, record) => (record.personal.age + sum), 0) / personsDetails.length)

// ------------------------- 9 ------------------------------------------

// 9. How many individuals have studied computer science, and how many of them have pets?

// const personsStudiedCS = personsDetails.filter((record) =>
//   record.personal.study === "Computer Science");

// console.log(personsStudiedCS.filter((record) => record.pets.length !== 0).length);

// ------------------------- 10 ------------------------------------------

// 10. How many individuals own more than one pet?

// console.log(personsDetails.filter((record) => record.pets.length > 1).length);

// ------------------------- 11 ------------------------------------------

// 11. Which pets are associated with specific favorite activities?

// const petsDetails = personsDetails.flatMap((record) => record.pets);

// const petsHavingSpecificActivities = petsDetails.filter((record) => record.petLikes.some((like => like === "Loves to play fetch in the park")));

// console.log(petsHavingSpecificActivities.map((record) => record.petName).join(""));

// ------------------------- 12 ------------------------------------------

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

// console.log(personsDetails.filter((record) => record.personal.nativePlace === "Chennai" || record.personal.nativePlace === "Bangalore").flatMap((record) => record.pets).map((record) => record.petName));

// ------------------------- 13 ------------------------------------------

// 13. How many vaccinated pets belong to people who do not own a car?

// console.log(personsDetails.filter((record) => record.transport.hasAcar === "No").flatMap((record) => record.pets).map((record) => record.petName).length)

// ------------------------- 14 ------------------------------------------

// const findCommonElement = function (array) {
//   const copyArray = Array.from(array).sort;
//   let commonElement = "";

//   copyArray.reduce;

// };

// // 14. What is the most common type of pet among the group?

// const typesOfpets = personsDetails.flatMap((record) => record.pets).map((record) => record.typeOfPet)



/* 
15. How many individuals have more than two hobbies?
16. How many individuals share at least one hobby with Ramesh?
17. Which pet is the youngest, and what is its name?
18. What types of books are mentioned as interests, and who reads them?
19. How many individuals live in cities starting with the letter "B"?
20. Which individuals do not own any pets?
*/