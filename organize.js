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
        description: "playing chess",
      },
      {
        title: "gardening",
        description: "not available particular",
      },
    ],
    vehicles: ["car"],
    pets: [
      {
        type: "Dog",
        name: "Max",
        age: 4,
        isVaccinated: true,
        likes: ["Loves to play fetch in the park"],
        skills: "not available",
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
        description: "Often experiments with Italian recipes",
      },
    ],
    vehicles: [],
    pets: [
      {
        type: "Parrot",
        name: "Kiwi",
        age: 1,
        isVaccinated: true,
        likes: ["Mimics her voice"],
        skills: "Knows over 20 phrases",
      },
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
        description: "Reading fictional books related to  history ",
      },
      {
        title: "gardening",
        description: "Tending to his rose garden",
      },
    ],
    vehicles: [],
    pets: [
      {
        type: "Cat",
        name: "Bella",
        age: 3,
        isVaccinated: true,
        likes: ["Love lounging in the sun"],
        skills: "not available",
      },
      {
        type: "Cat",
        name: "Leo",
        age: 3,
        isVaccinated: true,
        likes: ["Love lounging in the sun"],
        skills: "not available",
      },
    ],
  },
  {
    name: "Kavya",
    age: 28,
    profession: "Professional dancer",
    qualification: "B Tech",
    skills: [], // null
    nativePlace: "Chennai",
    isEmployed: false,
    modeOfTransport: "not available", // null
    hobbies: [
      {
        title: "Reading books",
        description: "reading novels mostly on fantacies",
      },
      {
        title: "binge-watching",
        description: "watching scientific fictions shows or movies",
      },
    ],
    vehicles: [], // null
    pets: [
      {
        type: "Rabbit",
        name: "Snowy",
        age: 2,
        isVaccinated: true,
        likes: ["Enjoys hopping around her backyard", "nibbling on carrots"],
        skills: "not available",
      },
    ],
  },
];

// **Hypothetical Questions:**

// -------------------------- 1 question ------------------------------

// 1. How many individuals are currently employed?  ----> 3 persons

const numberOfPersonsEmployed = (persons) =>
  persons.filter((person) => person.isEmployed).length;

// console.log(numberOfPersonsEmployed(people), "Q1");
// -------------------------- 2 question ------------------------------

// 2. How many people own a car?    ----> 1 person

const numberOfPeopleOwnVehicle = (persons, vehicle) =>
  persons.filter(({ vehicles }) => vehicles.includes(vehicle)).length;

// console.log(numberOfPeopleOwnVehicle(people, "car"), "Q2");
// -------------------------- 3 question ------------------------------

// 3. How many pets are fully vaccinated?    ----> 5 pets

const numberOfPetsFullyVaccinated = (persons) => {
  const petsDetails = persons.flatMap(({ pets }) => pets);

  return petsDetails.filter(({ isVaccinated }) => isVaccinated).length;
};
// console.log(numberOfPetsFullyVaccinated(people), "Q3");

// ------------------------- 4 question ------------------------------------

// 4. What are the names of all the pets, and what type of animal is each?  ----> Max is a dog, Kiwi is a parrot , Bella And Leo are Cats, Snowy is a Rabbit

const petsAndTypes = (persons) => {
  const petsDetails = persons.flatMap(({ pets }) => pets);

  return petsDetails.map(({ name, type }) => name + " is " + type);
};

// console.log(petsAndTypes(people), "Q4");

// ------------------------- 5 question ----------------------------------

// 5. Which cities do the individuals live in?   ---->

const citiesOf = (persons) => persons.map(({ nativePlace }) => nativePlace);

// console.log(citiesOf(people), "Q5");

// ------------------------- 6 question --------------------------------

// 6. How many hobbies are shared across the group? What are they?
// ---->

const numberOfHobbies = (persons) =>
  persons.flatMap(({ hobbies }) => hobbies).length;

// console.log(numberOfHobbies(people), "Q6");

// ------------------------- 7 question -----------------------------------

// 7. How many pets belong to people who are currently unemployed?
// ----> only one pet

const countPetsOfUnemployed = (pesrons) =>
  pesrons.filter(({ isEmployed }) => !isEmployed).flatMap(({ pets }) => pets)
    .length;

// console.log(countPetsOfUnemployed(people), "Q7");

// ------------------------- 8 question -------------------------------

// 8. What is the average age of the individuals mentioned in the passage?
// ----> 35

const averageAgeOf = (persons) =>
  persons.reduce((sum, { age }) => age + sum, 0) / persons.length;

// console.log(averageAgeOf(people), "Q8");

// ------------------------- 9 question ---------------------------------

// 9. How many individuals have studied computer science, and how many of them
// have pets?

const peopleWithSpecificQualification = (persons, requiredQualification) => {
  return persons.filter(
    ({ qualification }) => qualification === requiredQualification
  );
};

const peopleWithSpecificQualficationAndHavingPets = (
  persons,
  requiredQualification
) => {
  const peopleStudiedCS = peopleWithSpecificQualification(
    persons,
    requiredQualification
  );

  const peopleStudiedCSAndHavingPets = peopleStudiedCS.filter(
    ({ pets }) => pets.length !== 0
  );

  return [
    "people studied CS ",
    peopleStudiedCS.length,
    "people Studied CS and having Pets",
    peopleStudiedCSAndHavingPets.length,
  ];
};

// console.log(
//   peopleWithSpecificQualficationAndHavingPets(people, "Computer Science"),
//   "Q9"
// );

// ------------------------- 10 question --------------------------------

// 10. How many individuals own more than one pet?
const peopleHavingMoreThan1Pet = (persons) =>
  persons.filter(({ pets }) => pets.length > 1).length;

// console.log(peopleHavingMoreThan1Pet(people), "Q10");

// ------------------------- 11 question -------------------------------

// 11. Which pets are associated with specific favorite activities?

const petsAssociatedWithSpecificActivities = (persons, activity) => {
  const petsDetails = persons.flatMap(({ pets }) => pets);

  return petsDetails.filter(({ likes }) => likes.includes(activity)).length;
};

// console.log(
//   petsAssociatedWithSpecificActivities(people, "nibbling on carrots"),
//   "Q11"
// );

// ------------------------- 12 question ---------------------------------

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

const petsLivingInChennaiOrBengalore = (persons) => {
  persons
    .filter(({ nativePlace }) => ["Bangalore", "Chennai"].includes(nativePlace))
    .flatMap(({ pets }) => pets)
    .map(({ name }) => name);
};

// console.log(petsLivingInChennaiOrBengalore(people), "Q12");

// ------------------------- 13 question ---------------------------------

// 13. How many vaccinated pets belong to people who do not own a car?

const petsOfPeopleNotHavingCar = (persons) =>
  persons
    .filter(({ vehicles }) => !vehicles.includes("car"))
    .flatMap(({ pets }) => pets).length;

// console.log(petsOfPeopleNotHavingCar(people), "Q13");

// ------------------------- 14 question ---------------------------------

const makeGroups = function (pairs, element) {
  if (pairs.at(-1).some((type) => type !== element)) {
    pairs.push([]);
  }

  pairs[pairs.length - 1].push(element);
  return pairs;
};

// 14. What is the most common type of pet among the group?

const groupedPets = people
  .flatMap((record) => record.pets)
  .map((record) => record.type)
  .sort()
  .reduce(makeGroups, [[]]);

// console.log(
//   groupedPets.reduce(
//     (group1, group2) => (group1.length > group2.length ? group1 : group2),
//     []
//   )[0],
//   "Q14"
// );

// ------------------------- 15 question ---------------------------------

// 15. How many individuals have more than two hobbies?

// console.log(people.filter((record) => record.hobbies.length > 2).length, "Q15");

// ------------------------- 16 question ---------------------------------

// 16. How many individuals share at least one hobby with Ramesh
const numberOfIndividualsShareAtLeastOneWithAPerson = (
  persons,
  targetPerson
) => {
  const rameshHobbies = people
    .filter(({ name }) => name === "Ramesh")
    .flatMap(({ hobbies }) => hobbies)
    .flatMap(({ title }) => title);

  console.log(rameshHobbies);

  return rameshHobbies.filter({});
};

// ------------------------- 17 question ---------------------------------

// 17. Which pet is the youngest, and what is its name?

const youngestPetOf = (persons) => {
  const petsDetails = persons.flatMap(({ pets }) => pets);

  const youngPet = petsDetails.reduce((initial, record) =>
    record.age > initial.age ? initial : record
  );

  return "name:" + youngPet.name + "    " + "type:" + youngPet.type;
};

// console.log(youngestPetOf(people), "Q17");

// ------------------------- 18 question ---------------------------------

// 18. What types of books are mentioned as interests, and who reads them?

// ------------------------- 19 question ---------------------------------

// 19. How many individuals live in cities starting with the letter "B"?

const citiesStartWithB = (people) =>
  people.filter((record) => record.nativePlace[0] === "B").length;

// console.log(citiesStartWithB(people), "Q19");

// ------------------------- 20 question ---------------------------------

// 20. Which individuals do not own any pets?

const peopleHavingNoPets = (persons) =>
  persons.filter((record) => record.pets.length === 0);

// console.log(peopleHavingNoPets(people), "Q20");

//----------------------------------------------------------------------

const testCases = () => {
  const Q1 = numberOfPersonsEmployed(people);
  const Q2 = numberOfPeopleOwnVehicle(people, "car");
  const Q3 = numberOfPetsFullyVaccinated(people);
  const Q4 = petsAndTypes(people);
  const Q5 = citiesOf(people);
  const Q6 = numberOfHobbies(people);
  const Q7 = countPetsOfUnemployed(people);
  const Q8 = averageAgeOf(people);
  const Q9 = peopleWithSpecificQualficationAndHavingPets(
    people,
    "Computer Science"
  );
  const Q10 = peopleHavingMoreThan1Pet(people);
  const Q11 = petsAssociatedWithSpecificActivities(
    people,
    "Loves to play fetch in the park"
  );
  const Q12 = petsLivingInChennaiOrBengalore(people);

  console.log(
    Q1,
    "\n",
    Q2,
    "\n",
    Q3,
    "\n",
    Q4,
    "\n",
    Q5,
    "\n",
    Q6,
    "\n",
    Q7,
    "\n",
    Q8,
    "\n",
    Q9,
    "\n",
    Q10,
    "\n",
    Q11,
    "\n",
    Q12
  );
};

// testCases();
