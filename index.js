const _ = require("lodash");

const members = [
  { name: "Rakesh Gupta", age: 20 },
  { name: "Yash Jangid", age: 40 },
  { name: "Firoz Khan", age: 41 },
  { name: "Amrit Srivastava", age: 17 },
  { name: "Chandraprakash Sharma" },
  { name: "Swpril Ahuja", age: 45 },
  { name: "Yogesh Khatri", age: 51 },
];

// 1. Get array of first names of everyone
const firstNames = _.map(members, (m) => _.split(m.name, " ")[0]);
console.log("First Names:", firstNames);

//2. Make everyone's last names in uppercase in given array of objects
const upperLastNames = _.map(members, (m) => {
  const parts = _.split(m.name, " ");
  //    console.log(parts);
  return {
    ...m,
    name: `${parts[0]} ${parts[1] ? _.toUpper(parts[1]) : ""}`,
  };
});
console.log("Uppercase Last Names:", upperLastNames);

// 3. Get entries where age is between 41-60
const ageBetween41And60 = _.filter(members, (m) => m.age >= 41 && m.age <= 60);
console.log("Members with Age Between 41 and 60:", ageBetween41And60);

//4. Get average age
const validAges = _.filter(members, (m) => _.has(m, "age"));
const averageAge = _.meanBy(validAges, "age");
console.log("Average Age:", averageAge);

//5.Get Person with maximum age
const maxAgePerson = _.maxBy(validAges, "age");
console.log("Person with Maximum Age:", maxAgePerson);

//6. Divide persons in three groups
const groups = {
  young: _.filter(members, (m) => m.age < 35),
  old: _.filter(members, (m) => m.age >= 35),
  noage: _.filter(members, (m) => !m.age),
};
console.log("Groups:", groups);

//7. add a new member to same members array instance at index 2
members.splice(2, 0, { name: "Shruti", age: 21 });
console.log("Updated Members:", members);

//8. extract first and second element using destructing
const [firstMember, secondMember] = members;
console.log("First Member: ", firstMember);
console.log("Second Member:", secondMember);

//9. Create a new array instance adding a new member at index 0,and keeping existing afterwards
const newMembers = [{ name: "Wisflux", age: 30 }, ...members];
console.log("New members array:", newMembers);

//10. Extract properties of object using destructuring
const { name: firstMemberName, age: firstMemberAge } = members[0];
console.log("First Member Name:", firstMemberName);
console.log("First Member Age:", firstMemberAge);

//11. Rename extracted property of object while destructing
const { name: renameName, age: renameAge } = members[2];
// renameName = "Shruti Goyal"
console.log("Renamed Member Name:", renameName);
console.log("Renamed Member Age:", renameAge);

//12. Destructure any property of an object and use spread operator to get remaining properties in an object
const { name: memberName, ...rest } = members[3];
console.log("Member Name: ", memberName);
console.log("Remaining Properties:", rest);

// 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const updatedName = { ...members[5], name: "Elon Musk" };
console.log("Updated Member Object:", updatedName);

//14. Use reduce function on array
const sumOfAges = _.reduce(validAges, (sum, m) => sum + m.age, 0);
console.log("Sum of ages:", sumOfAges);

///reduce function on object
const question = { a: 1, b: 2, c: 33 }
const final = _.reduce(
  question,
  (red, value, key) => {
    return (red = red + value);
  },
  0
);

console.warn(final);
