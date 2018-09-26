function getGuildMemberInfo(members) {
  // your code here
  if (members.length == 0) {
    return 'invalid data';
  }

  var average = 0;
  var totalMember = 0;
  var guild = {};
  for (let i=0; i<members.length; i++) {
    average += members[i].level;
    totalMember++;
  }
  average = Math.floor(average / totalMember);
  guild.totalMember = totalMember;
  guild.averageLevel = average;
  for (let i=0; i<members.length; i++) {
    if (members[i].level >= average) {
      if (guild[members[i].class] == undefined) {
        guild[members[i].class] = [];
        guild[members[i].class].push({name: members[i].name, level: members[i].level});
      } else {
        guild[members[i].class].push({name: members[i].name, level: members[i].level});
      }
    }
  }
  return guild;
}

console.log(getGuildMemberInfo([
  {
    name: 'antonio',
    level: 90,
    class: 'Knight'
  },
  {
    name: 'banderaz',
    level: 90,
    class: 'Priest'
  },
  {
    name: 'cecile',
    level: 99,
    class: 'Knight'
  },
  {
    name: 'dominique',
    level: 92,
    class: 'Hunter'
  },
  {
    name: 'ernest',
    level: 92,
    class: 'Priest'
  },
  {
    name: 'fernandez',
    level: 91,
    class: 'Knight'
  },
  {
    name: 'goblin',
    level: 95,
    class: 'Knight'
  },
  {
    name: 'hemogoblin',
    level: 93,
    class: 'Hunter'
  }
]));
/**
output
{
  totalMember: 8,​​​​​
​​​​​  averageLevel: 92,​​​​​
​​​​​  Knight: [ { name: 'cecile', level: 99 }, { name: 'goblin', level: 95 } ],​​​​​
​​​​​  Priest: [ { name: 'ernest', level: 92 } ],​​​​​
​​​​​  Hunter: [ { name: 'dominique', level: 92 },​​​​​ { name: 'hemogoblin', level: 93 } ]
}​​​​​
 */
console.log(getGuildMemberInfo([
  { name: 'indah', level: 85, class: 'Assasint' },
  { name: 'juminten', level: 92, class: 'Blacksmith' },
  { name: 'kumar', level: 95, class: 'Wizard' },
  { name: 'lili', class: 'Priest', level: 99 },
  { name: 'munaroh', class: 'Blacksmith', level: 95 }
]));
/**
 output:
​​​​​{
  totalMember: 5,​​​​​
​​​​​  averageLevel: 93,​​​​​
​​​​​  Blacksmith: [ { name: 'munaroh', level: 95 } ],​​​​​
​​​​​  Wizard: [ { name: 'kumar', level: 95 } ],​​​​​
​​​​​  Priest: [ { name: 'lili', level: 99 } ]
}​​​​​
 */
console.log(getGuildMemberInfo([])); // invalid data
