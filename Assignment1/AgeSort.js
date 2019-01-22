 var myObj =
    [{ 'name': 'Saurabh', 'age': 30, 'occupation': "Team Leader" },
    { 'name': 'Anupriya', 'age': 32, 'occupation': "Team Leader" },
    { 'name': 'Kalyani', 'age': 25, 'occupation': "Programmer" },
    { 'name': 'Damodaran', 'age': 27, 'occupation': "Programmer" },
    { 'name': 'Krishnakath', 'age': 22, 'occupation': "Programmer" },
    { 'name': 'Venketraman', 'age': 28, 'occupation': "Programmer" }];
// pass a function to map
myObj.sort((a, b) => Number(b.age) - Number(a.age));
console.log("descending", myObj);