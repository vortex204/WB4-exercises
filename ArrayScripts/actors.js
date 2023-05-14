let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];
function findById(id) {
  for (let i = 0; i < academyMembers.length; i++) {
    let member = academyMembers[i];
    if (member.memID == id) {
      console.log(member.name);
    }
  }
}
function findByCount(minimum) {
  for (let i = 0; i < academyMembers.length; i++) {
    let member = academyMembers[i];
    if (member.films.length >= minimum) {
      console.log(member.name);
    }
  }
}
function startsWith(partialName) {
  for (let i = 0; i < academyMembers.length; i++) {
    let member = academyMembers[i];
    if (member.name.indexOf(partialName) == 0) {
      console.log(member.name);
    }
  }
}
function filmStartsWith(partialName) {
  for (let i = 0; i < academyMembers.length; i++) {
    let member = academyMembers[i];
    let count = 0;
    for (let f = 0; f < member.films.length; f++) {
      let film = member.films[f];
      if (film.indexOf(partialName) == 0) {
        count++;
      }
    }
    if (count > 0) {
      console.log(member.name);
    }
  }
}

console.log(`Who is the Academy Member whose ID is 187?`);
findById(187);

console.log(`Who has have been in at least 3 films?`);
findByCount(3);

console.log(`Who has a name that starts with "Bob"?`);
startsWith("Bob");

console.log(
  `HARDER: Which Academy Members have been in a film that starts with "A"`
);
filmStartsWith("A");
