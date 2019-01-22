var myObj =
    [{ 'name': 'Saurabh', 'age': 30, 'occupation': "Team Leader" },
    { 'name': 'Anupriya', 'age': 32, 'occupation': "Team Leader" },
    { 'name': 'Kalyani', 'age': 25, 'occupation': "Programmer" },
    { 'name': 'Damodaran', 'age': 27, 'occupation': "Programmer" },
    { 'name': 'Krishnakath', 'age': 22, 'occupation': "Programmer" },
    { 'name': 'Venketraman', 'age': 28, 'occupation': "Programmer" }];
// pass a function to map
const res = [];
const res2 = [];
const map1 = myObj.map(x => (x.occupation === "Programmer") ?
    res.push(`name: ${x.name},age : ${x.age}`) : null);
const map2 = myObj.map(x => (x.occupation === "Team Leader") ?
    res2.push(`name: ${x.name},age: ${x.age}`) : null);
console.log("Programmer:", res);
console.log("Team Leader;", res2)