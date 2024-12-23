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


const personsDetails = {
  rahul: {
    personalDetails: {
      fullName: "Rahul",
      age: 35,
      study: "Computer Science",
      nativePlace: "Pune",
      passsin: "Nothing",
      hobbies: "Playing Chess and Gardening",
      othertalents: "Nothing"
    },
    professionalDetails: {
      profession: "Software Engineer",
      employmentStatus: "Employed"
    },
    transportDetails: {
      hasAOwnVechile: "Yes",
      modeOfCommutation: "Car"
    },
    petDetails: {
      pet1: {
        typeOfPet: "Dog",
        petName: "Max",
        petAge: 4,
        petVaccinationStatus: "Fully vaccinated",
        petHobbies: "Loves to play frtch in the park",
        petTelents: "Nothing"
      }
    }
  },

  ananya: {
    personalDetails: {
      fullName: "Ananya",
      age: 30,
      study: "Computer Science",
      nativePlace: "Bangalore",
      hobbies: "cooking",
      passion: "About cooking and often experiments with Italian recipes.",
      othertalents: "Interest inlearning graphic designing"
    },
    petDetails: {
      pet1: {
        typeOfPet: "Parrot",
        petName: "Kiwi",
        petAge: 2,
        petVaccinationStatus: "Fully vaccinated",
        petHobbies: "Mimics her voice",
        petTelents: "Knows over 20 phrases"
      }
    },
    professionalDetails: {
      profession: "Software Engineer",
      employmentStatus: "Employed"
    },
    transportDetails: {
      hasAOwnVechile: "No",
      modeOfCommutation: "Public transport"
    }
  },

  ramesh: {
    personalDetails: {
      fullName: "Ramesh",
      age: 45,
      study: "Dont know",
      nativePlace: "Jaipur",
      hobbies: "Reading historical fiction and gardening",
      passion: "About cooking and often experiments with Italian recipes.",
      othertalents: "Nothing"
    },
    petDetails: {
      pet1: {
        typeOfPet: "Cat",
        petName: "Bella",
        petAge: 3,
        petVaccinationStatus: "Fully vaccinated",
        petHobbies: "Love lounging in the sun",
        petTelents: "Nothing"
      },
      pet2: {
        typeOfPet: "Cat",
        petName: "Leo",
        petAge: 3,
        petVaccinationStatus: "Fully vaccinated",
        petHobbies: "Love lounging in the sun",
        petTelents: "Nothing"
      }
    },
    professionalDetails: {
      profession: "Business",
      employmentStatus: "employed"
    },
    transportDetails: {
      hasAOwnVechile: "Dont know",
      modeOfCommutation: "Dont know"
    }
  },

  kavya: {
    personalDetails: {
      fullName: "Kavvya",
      age: 28,
      study: "Dont know",
      nativePlace: "Chennai",
      hobbies: "Modern fantasy novels and binge-watching sci-fi shows",
      passion: "Dance",
      othertalents: "Nothing"
    },
    petDetails: {
      pet1: {
        typeOfPet: "Rabbit",
        petName: "Snowy",
        petAge: 2,
        petVaccinationStatus: "Fully vaccinated",
        petHobbies: "Enjoys hopping around her backyard and nibbling on carrots",
        petTelents: "Nothing"
      }
    },
    professionalDetails: {
      profession: "Professional dancer",
      employmentStatus: "Unemployed"
    },
    transportDetails: {
      hasAOwnVechile: "No",
      modeOfCommutation: "Dont know"
    }
  }
};

/*

**Hypothetical Questions:**

1. How many individuals are currently employed?  ----> 3 persons



2. How many people own a car?    ----> 1 person

3. How many pets are fully vaccinated?    ----> 5 pets

4. What are the names of all the pets, and what type of animal is each?  ----> Max is a dog, Kiwi is a parrot , Bella And Leo are Persian Cats, Snowy is a Rescue Rabbit

5. Which cities do the individuals live in?   ---->  Bangalore

6. How many hobbies are shared across the group? What are they?   
----> Gardening ,Cooking, Playing

7. How many pets belong to people who are currently unemployed?  
----> only one pet

8. What is the average age of the individuals mentioned in the passage?
----> 35 

9. How many individuals have studied computer science, and how many of them have pets?
----> 

10. How many individuals own more than one pet?
11. Which pets are associated with specific favorite activities?
12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
13. How many vaccinated pets belong to people who do not own a car?
14. What is the most common type of pet among the group?
15. How many individuals have more than two hobbies?
16. How many individuals share at least one hobby with Ramesh?
17. Which pet is the youngest, and what is its name?
18. What types of books are mentioned as interests, and who reads them?
19. How many individuals live in cities starting with the letter "B"?
20. Which individuals do not own any pets?

*/