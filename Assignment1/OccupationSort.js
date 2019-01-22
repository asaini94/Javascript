var array1 = [1, 4, 9, 16];
var myObj =
    [{ 'name': 'Saurabh', 'age': 30, 'occupation': "Team Leader" },
    { 'name': 'Anupriya', 'age': 32, 'occupation': "Team Leader" },
    { 'name': 'Kalyani', 'age': 25, 'occupation': "Programmer" },
    { 'name': 'Damodaran', 'age': 27, 'occupation': "Programmer" },
    { 'name': 'Krishnakath', 'age': 22, 'occupation': "Programmer" },
    { 'name': 'Venketraman', 'age': 28, 'occupation': "Programmer" }];
// pass a function to map
const res = [];
const map1 = myObj.map(x => (x.occupation === "Programmer") ?
    res.push(x) : null);


console.log(res);
