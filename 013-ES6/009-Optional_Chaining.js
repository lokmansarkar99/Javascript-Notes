// Optional Chaining (?.)

const user = { profile: { name: "John" } };
console.log(user.profile?.name); // John
console.log(user.address?.city); // undefined (instead of error)
