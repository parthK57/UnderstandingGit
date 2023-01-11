console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const getTicketFromWife = new Promise((resolve, reject) => {
    resolve("ticket");
  });
  const getPopcorn = new Promise((resolve, reject) => {
    resolve("popcorn");
  });
  const getButter = new Promise((resolve, reject) => {
    resolve("butter");
  });
  const getColdDrink = new Promise((resolve, reject) => {
    resolve("coke");
  });

  let ticket = await getTicketFromWife;
  console.log(`wife: here is the ${ticket}`);
  console.log("wife: i am hungry");

  let popcorn = await getPopcorn;
  console.log(`husband: here i bought some ${popcorn}`);
  console.log("wife: i want some butter too");

  let butter = await getButter;
  console.log(`husband: here is your ${butter}`);
  console.log("wife: let me bring some coldrinks!");

  let coldDrink = await getColdDrink;
  console.log(`wife: i bought ${coldDrink}, lets go!`);
};

preMovie();

console.log("person4: shows ticket");
console.log("person5: shows ticket");
