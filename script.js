const users = [
    { name: "Alice", eyeColor: "blue", gender: "female", isActive: false, email: "alice@example.com", age: 25 },
    { name: "Bob", eyeColor: "green", gender: "male", isActive: true, email: "bob@example.com", age: 30 },
  ];
  
  const names = users.map((user) => user.name);
  
  const usersByEyeColor = users.filter((user) => user.eyeColor === "blue");
  
  const namesByGender = users.filter((user) => user.gender === "female").map(user => user.name);
  
  const inactiveUsers = users.filter((user) => !user.isActive);
  
  const userByEmail = users.find((user) => user.email === "alice@example.com");
  
  const minAge = 20;
  const maxAge = 30;
  const usersInAgeRange = users.filter((user) => user.age >= minAge && user.age <= maxAge);
  