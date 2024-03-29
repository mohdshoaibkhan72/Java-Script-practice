const user1 = {
  name: "jon",
  age: 23,
  adddres: {
    city: "mumbai",
    state: "mahastra",
  },
};
const user2 = user1;

user2.name = "ramesh";
user2.adddres.city = "pune";

console.log(user1);
console.log(user2);

//output  when we change in one it change the other automatic  , because both user1 and user2 share the same address object.
// {
//     name: 'ramesh',
//     age: 23,
//     adddres: { city: 'pune', state: 'mahastra' }
//   }
//   {
//     name: 'ramesh',
//     age: 23,
//     adddres: { city: 'pune', state: 'mahastra' }
//   }
