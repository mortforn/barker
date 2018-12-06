import React from 'react';
import { Link } from 'react-router-dom';
import DogListItem from './DogListItem'

//MortForn APIKEY = f5fcb86ef14100e76fe6fd4849928f17
//MortForn SECRET = 0414151e03e5a6b5e9ed9934a4ef4390

/*this will be a stateless component that receives the likedDogs array
as props from the App component*/
const DogList = () => {

  const dogs = [
    {
      age: "Young",
      size: "M",
      image: "http://photos.petfinder.com/photos/pets/42811819/1/?bust=1537533771&width=500&-x.jpg",
      id: "42811819",
      breeds: "Australian Shepherd",
      name: "Dog 1",
      sex: "F",
      description: `You MUST fill out an application to be considered for adoption. Due to a large volume of calls and emails, we can only ensure responses to those who fill out an application.Â  http://carolinaheartsrescue.org/adoption-information/ AVAILABLE: Gila We are thrilled to formally announce that Gila ("hee-la" like the lizard!) is available for adoption! Gila â Gila Monster to her friends â is a 9 month old German Shepherd/Australian Shepherd mix. A well-meaning young family purchased her as a puppy, but they just couldn't keep up with her energy level, and so she came to live with us. She weighs about 50 pounds, with room to grow. Gila is, quite possibly, the silliest girl in the world. She immediately goes belly-up for rubs and cuddles and loves almost every human she meets (we say "almost" because she can be a little shy with brand new people, but she gets over it within minutes). While boarded for vacation, the kennel staff fell in love with Gila and reported that she was "the sweetest." Gila LOVES to run and play, and has boundless energy. Her best friends are a young Aussie male and a young Aussie/BC female, and she gets along with both of them swimmingly. She can be a bit of a pest with older, more reserved dogs, and must be watched closely so that she doesn't get herself into trouble. Gila's breed mixture makes her a unique but very capable dog. She moves like a GSD, but has the spring and bounce of an Aussie. She has a more compact frame with long GSD legs, which make her both fast and clumsy simultaneously. We're sure she will mature into herself, but right now she's a bit of a cannonball. Add in the ever-lolling tongue and the wild glint of mischief in her eyes, and you've got yourself a Shadow Monster. Gila's blend of GSD and Aussie also contributes to her personality â she is a Velcro dog in every way, and wants to be with her people as much as possible. She can be a tad anxious when separated, but she does well in her crate and is not destructive. Lastly, while Gila gets along well with other dogs, she has displayed some mild resource guarding during group play and will avoid sharing her toys with dogs she's not close with. Gila is also not cat friendly, nor is she small dog friendly (she's just too big and too rough and doesn't respect their warnings). Gila is house trained and crate trained, and walks well on a leash after she's settled into it. She knows basic commands and loves toys and food alike. She rides well in the car, however she still gets a little carsick on long rides. This has been getting better with exposure and practice, but she's not quite 100% yet. Gila is very loving with children, but due to her size and energy, she will only be placed with older children or children in VERY dog savvy homes (it will be up to her foster mom to decide if children are okay, on a case-by-case basis). Gila MUST have a fenced in yard, and will not be happy living in an apartment. She would do well as both an only dog and with canine siblings, but she would do best with a friendly, playful male dog companion of a similar size. Preference will be given to applicants with dog sports in mind, however that is not a requirement. Gila will not be a good, laid back couch potato dog and will require a great deal of daily exercise and training. We will require her adopter to enroll in an obedience class of some sort immediately after adoption. Gila is spayed, microchipped, and up to date on vaccinations. She is fostered in Durham, NC, and her adoption fee is $325. Interested parties should apply through CHAR for approval. Application, vet check, personal references, and home visit all required. http://carolinaheartsrescue.org/adoption-information/`,
      animal: "Dog"
    },
    {
      age: "Young",
      size: "S",
      image: "http://photos.petfinder.com/photos/pets/42811819/1/?bust=1537533771&width=500&-x.jpg",
      id: "42811819",
      breeds: "Australian Shepherd",
      name: "Dog 2",
      sex: "F",
      description: `You MUST fill out an application to be considered for adoption. Due to a large volume of calls and emails, we can only ensure responses to those who fill out an application.Â  http://carolinaheartsrescue.org/adoption-information/ AVAILABLE: Gila We are thrilled to formally announce that Gila ("hee-la" like the lizard!) is available for adoption! Gila â Gila Monster to her friends â is a 9 month old German Shepherd/Australian Shepherd mix. A well-meaning young family purchased her as a puppy, but they just couldn't keep up with her energy level, and so she came to live with us. She weighs about 50 pounds, with room to grow. Gila is, quite possibly, the silliest girl in the world. She immediately goes belly-up for rubs and cuddles and loves almost every human she meets (we say "almost" because she can be a little shy with brand new people, but she gets over it within minutes). While boarded for vacation, the kennel staff fell in love with Gila and reported that she was "the sweetest." Gila LOVES to run and play, and has boundless energy. Her best friends are a young Aussie male and a young Aussie/BC female, and she gets along with both of them swimmingly. She can be a bit of a pest with older, more reserved dogs, and must be watched closely so that she doesn't get herself into trouble. Gila's breed mixture makes her a unique but very capable dog. She moves like a GSD, but has the spring and bounce of an Aussie. She has a more compact frame with long GSD legs, which make her both fast and clumsy simultaneously. We're sure she will mature into herself, but right now she's a bit of a cannonball. Add in the ever-lolling tongue and the wild glint of mischief in her eyes, and you've got yourself a Shadow Monster. Gila's blend of GSD and Aussie also contributes to her personality â she is a Velcro dog in every way, and wants to be with her people as much as possible. She can be a tad anxious when separated, but she does well in her crate and is not destructive. Lastly, while Gila gets along well with other dogs, she has displayed some mild resource guarding during group play and will avoid sharing her toys with dogs she's not close with. Gila is also not cat friendly, nor is she small dog friendly (she's just too big and too rough and doesn't respect their warnings). Gila is house trained and crate trained, and walks well on a leash after she's settled into it. She knows basic commands and loves toys and food alike. She rides well in the car, however she still gets a little carsick on long rides. This has been getting better with exposure and practice, but she's not quite 100% yet. Gila is very loving with children, but due to her size and energy, she will only be placed with older children or children in VERY dog savvy homes (it will be up to her foster mom to decide if children are okay, on a case-by-case basis). Gila MUST have a fenced in yard, and will not be happy living in an apartment. She would do well as both an only dog and with canine siblings, but she would do best with a friendly, playful male dog companion of a similar size. Preference will be given to applicants with dog sports in mind, however that is not a requirement. Gila will not be a good, laid back couch potato dog and will require a great deal of daily exercise and training. We will require her adopter to enroll in an obedience class of some sort immediately after adoption. Gila is spayed, microchipped, and up to date on vaccinations. She is fostered in Durham, NC, and her adoption fee is $325. Interested parties should apply through CHAR for approval. Application, vet check, personal references, and home visit all required. http://carolinaheartsrescue.org/adoption-information/`,
      animal: "Dog"
    },
    {
      age: "Young",
      size: "M",
      image: "http://photos.petfinder.com/photos/pets/42811819/1/?bust=1537533771&width=500&-x.jpg",
      id: "42811819",
      breeds: "Australian Shepherd",
      name: "Dog 3",
      sex: "F",
      description: `You MUST fill out an application to be considered for adoption. Due to a large volume of calls and emails, we can only ensure responses to those who fill out an application.Â  http://carolinaheartsrescue.org/adoption-information/ AVAILABLE: Gila We are thrilled to formally announce that Gila ("hee-la" like the lizard!) is available for adoption! Gila â Gila Monster to her friends â is a 9 month old German Shepherd/Australian Shepherd mix. A well-meaning young family purchased her as a puppy, but they just couldn't keep up with her energy level, and so she came to live with us. She weighs about 50 pounds, with room to grow. Gila is, quite possibly, the silliest girl in the world. She immediately goes belly-up for rubs and cuddles and loves almost every human she meets (we say "almost" because she can be a little shy with brand new people, but she gets over it within minutes). While boarded for vacation, the kennel staff fell in love with Gila and reported that she was "the sweetest." Gila LOVES to run and play, and has boundless energy. Her best friends are a young Aussie male and a young Aussie/BC female, and she gets along with both of them swimmingly. She can be a bit of a pest with older, more reserved dogs, and must be watched closely so that she doesn't get herself into trouble. Gila's breed mixture makes her a unique but very capable dog. She moves like a GSD, but has the spring and bounce of an Aussie. She has a more compact frame with long GSD legs, which make her both fast and clumsy simultaneously. We're sure she will mature into herself, but right now she's a bit of a cannonball. Add in the ever-lolling tongue and the wild glint of mischief in her eyes, and you've got yourself a Shadow Monster. Gila's blend of GSD and Aussie also contributes to her personality â she is a Velcro dog in every way, and wants to be with her people as much as possible. She can be a tad anxious when separated, but she does well in her crate and is not destructive. Lastly, while Gila gets along well with other dogs, she has displayed some mild resource guarding during group play and will avoid sharing her toys with dogs she's not close with. Gila is also not cat friendly, nor is she small dog friendly (she's just too big and too rough and doesn't respect their warnings). Gila is house trained and crate trained, and walks well on a leash after she's settled into it. She knows basic commands and loves toys and food alike. She rides well in the car, however she still gets a little carsick on long rides. This has been getting better with exposure and practice, but she's not quite 100% yet. Gila is very loving with children, but due to her size and energy, she will only be placed with older children or children in VERY dog savvy homes (it will be up to her foster mom to decide if children are okay, on a case-by-case basis). Gila MUST have a fenced in yard, and will not be happy living in an apartment. She would do well as both an only dog and with canine siblings, but she would do best with a friendly, playful male dog companion of a similar size. Preference will be given to applicants with dog sports in mind, however that is not a requirement. Gila will not be a good, laid back couch potato dog and will require a great deal of daily exercise and training. We will require her adopter to enroll in an obedience class of some sort immediately after adoption. Gila is spayed, microchipped, and up to date on vaccinations. She is fostered in Durham, NC, and her adoption fee is $325. Interested parties should apply through CHAR for approval. Application, vet check, personal references, and home visit all required. http://carolinaheartsrescue.org/adoption-information/`,
      animal: "Dog"
    },
    {
      age: "Young",
      size: "S",
      image: "http://photos.petfinder.com/photos/pets/42811819/1/?bust=1537533771&width=500&-x.jpg",
      id: "42811819",
      breeds: "Australian Shepherd",
      name: "Dog 4",
      sex: "F",
      description: `You MUST fill out an application to be considered for adoption. Due to a large volume of calls and emails, we can only ensure responses to those who fill out an application.Â  http://carolinaheartsrescue.org/adoption-information/ AVAILABLE: Gila We are thrilled to formally announce that Gila ("hee-la" like the lizard!) is available for adoption! Gila â Gila Monster to her friends â is a 9 month old German Shepherd/Australian Shepherd mix. A well-meaning young family purchased her as a puppy, but they just couldn't keep up with her energy level, and so she came to live with us. She weighs about 50 pounds, with room to grow. Gila is, quite possibly, the silliest girl in the world. She immediately goes belly-up for rubs and cuddles and loves almost every human she meets (we say "almost" because she can be a little shy with brand new people, but she gets over it within minutes). While boarded for vacation, the kennel staff fell in love with Gila and reported that she was "the sweetest." Gila LOVES to run and play, and has boundless energy. Her best friends are a young Aussie male and a young Aussie/BC female, and she gets along with both of them swimmingly. She can be a bit of a pest with older, more reserved dogs, and must be watched closely so that she doesn't get herself into trouble. Gila's breed mixture makes her a unique but very capable dog. She moves like a GSD, but has the spring and bounce of an Aussie. She has a more compact frame with long GSD legs, which make her both fast and clumsy simultaneously. We're sure she will mature into herself, but right now she's a bit of a cannonball. Add in the ever-lolling tongue and the wild glint of mischief in her eyes, and you've got yourself a Shadow Monster. Gila's blend of GSD and Aussie also contributes to her personality â she is a Velcro dog in every way, and wants to be with her people as much as possible. She can be a tad anxious when separated, but she does well in her crate and is not destructive. Lastly, while Gila gets along well with other dogs, she has displayed some mild resource guarding during group play and will avoid sharing her toys with dogs she's not close with. Gila is also not cat friendly, nor is she small dog friendly (she's just too big and too rough and doesn't respect their warnings). Gila is house trained and crate trained, and walks well on a leash after she's settled into it. She knows basic commands and loves toys and food alike. She rides well in the car, however she still gets a little carsick on long rides. This has been getting better with exposure and practice, but she's not quite 100% yet. Gila is very loving with children, but due to her size and energy, she will only be placed with older children or children in VERY dog savvy homes (it will be up to her foster mom to decide if children are okay, on a case-by-case basis). Gila MUST have a fenced in yard, and will not be happy living in an apartment. She would do well as both an only dog and with canine siblings, but she would do best with a friendly, playful male dog companion of a similar size. Preference will be given to applicants with dog sports in mind, however that is not a requirement. Gila will not be a good, laid back couch potato dog and will require a great deal of daily exercise and training. We will require her adopter to enroll in an obedience class of some sort immediately after adoption. Gila is spayed, microchipped, and up to date on vaccinations. She is fostered in Durham, NC, and her adoption fee is $325. Interested parties should apply through CHAR for approval. Application, vet check, personal references, and home visit all required. http://carolinaheartsrescue.org/adoption-information/`,
      animal: "Dog"
    },
    {
      age: "Young",
      size: "S",
      image: "http://photos.petfinder.com/photos/pets/42811819/1/?bust=1537533771&width=500&-x.jpg",
      id: "42811819",
      breeds: "Australian Shepherd",
      name: "Dog 5",
      sex: "F",
      description: `You MUST fill out an application to be considered for adoption. Due to a large volume of calls and emails, we can only ensure responses to those who fill out an application.Â  http://carolinaheartsrescue.org/adoption-information/ AVAILABLE: Gila We are thrilled to formally announce that Gila ("hee-la" like the lizard!) is available for adoption! Gila â Gila Monster to her friends â is a 9 month old German Shepherd/Australian Shepherd mix. A well-meaning young family purchased her as a puppy, but they just couldn't keep up with her energy level, and so she came to live with us. She weighs about 50 pounds, with room to grow. Gila is, quite possibly, the silliest girl in the world. She immediately goes belly-up for rubs and cuddles and loves almost every human she meets (we say "almost" because she can be a little shy with brand new people, but she gets over it within minutes). While boarded for vacation, the kennel staff fell in love with Gila and reported that she was "the sweetest." Gila LOVES to run and play, and has boundless energy. Her best friends are a young Aussie male and a young Aussie/BC female, and she gets along with both of them swimmingly. She can be a bit of a pest with older, more reserved dogs, and must be watched closely so that she doesn't get herself into trouble. Gila's breed mixture makes her a unique but very capable dog. She moves like a GSD, but has the spring and bounce of an Aussie. She has a more compact frame with long GSD legs, which make her both fast and clumsy simultaneously. We're sure she will mature into herself, but right now she's a bit of a cannonball. Add in the ever-lolling tongue and the wild glint of mischief in her eyes, and you've got yourself a Shadow Monster. Gila's blend of GSD and Aussie also contributes to her personality â she is a Velcro dog in every way, and wants to be with her people as much as possible. She can be a tad anxious when separated, but she does well in her crate and is not destructive. Lastly, while Gila gets along well with other dogs, she has displayed some mild resource guarding during group play and will avoid sharing her toys with dogs she's not close with. Gila is also not cat friendly, nor is she small dog friendly (she's just too big and too rough and doesn't respect their warnings). Gila is house trained and crate trained, and walks well on a leash after she's settled into it. She knows basic commands and loves toys and food alike. She rides well in the car, however she still gets a little carsick on long rides. This has been getting better with exposure and practice, but she's not quite 100% yet. Gila is very loving with children, but due to her size and energy, she will only be placed with older children or children in VERY dog savvy homes (it will be up to her foster mom to decide if children are okay, on a case-by-case basis). Gila MUST have a fenced in yard, and will not be happy living in an apartment. She would do well as both an only dog and with canine siblings, but she would do best with a friendly, playful male dog companion of a similar size. Preference will be given to applicants with dog sports in mind, however that is not a requirement. Gila will not be a good, laid back couch potato dog and will require a great deal of daily exercise and training. We will require her adopter to enroll in an obedience class of some sort immediately after adoption. Gila is spayed, microchipped, and up to date on vaccinations. She is fostered in Durham, NC, and her adoption fee is $325. Interested parties should apply through CHAR for approval. Application, vet check, personal references, and home visit all required. http://carolinaheartsrescue.org/adoption-information/`,
      animal: "Dog"
    }
  ];
  //we will need functions to determine the most frequent properties found in the LikedDogs array
  //for now, size, gender & breed will display
  const mostFrequentSize = (dogList) => {
    let counts = {};
    let compare = 0;
    let mostFrequent = '';
    dogList.forEach(dog => {
      let size = dog.size;
      if (counts[size] === undefined) {
        counts[size] = 1;
      } else {
        counts[size] = counts[size] + 1;
      }
      if (counts[size] > compare) {
        compare = counts[size];
        mostFrequent = dog.size;
      }
    });
    if (mostFrequent === 'M') {
        return 'Medium';
    } else if (mostFrequent === 'S') {
        return 'Small';
    } else if (mostFrequent === "L")
        return 'Large';
  }
  const mostFrequentGender = (dogList) => {
    let counts = {};
    let compare = 0;
    let mostFrequent;
    dogList.forEach(dog => {
      let gender = dog.sex;
      if (counts[gender] === undefined) {
        counts[gender] = 1;
      } else {
        counts[gender] = counts[gender] + 1;
      }
      if (counts[gender] > compare) {
        compare = counts[gender];
        mostFrequent = dog.sex;
      }
    });
    if (mostFrequent === 'M') {
      return 'Male';
    } else if (mostFrequent === 'F')
      return 'Female';
    }
  const mostFrequentBreed = (dogList) => {
    let counts = {};
    let compare = 0;
    let mostFrequent;
    dogList.forEach(dog => {
      let breed = dog.breeds;
      if (counts[breed] === undefined) {
        counts[breed] = 1;
      } else {
        counts[breed] = counts[breed] + 1;
      }
      if (counts[breed] > compare) {
        compare = counts[breed];
        mostFrequent = dog.breeds;
      }
    });
    return mostFrequent;
  }

  const Preferences = `${mostFrequentSize(dogs)} ${mostFrequentGender(dogs)} ${mostFrequentBreed(dogs)}s.`
  //organizational function to affect how dogs are displayed

  //the below function maps through each of the indexes of likedDogs
  //and sends this information to the dogListItem component in order
  //get each individual liked dog's image to display

 const Dawgz = dogs.map((dog) => {
    return (
      <DogListItem key={dog.id} dog={dog}/>
    )
  })
  
  if (dogs.length === 0) {
    alert('Go like some dogs you loser');
    //redirect

  } else {

    return (
    <div>
    <div className="container container-fluid" id="matches-header">
      <h1 className="display-1">Your Barks!</h1>
      <h3 id="results-lead-up">Based on your results, it looks like your favorite dogs are:</h3>
      <h4 id='preferences'>{ Preferences }</h4>
      {/* {mostFrequentSize} {mostFrequentGender} {mostFrequentBreed} */}
      <Link to='/match'><button className='btn btn-primary'>Back</button></Link>
      </div>
      <div className="row" id="list-of-matches">
        { Dawgz }
        {/*This will be the card display for each of the matches*/}
      </div>
    </div>
    );
  }
}

export default DogList;
