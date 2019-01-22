var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];
// var arr= [];
var res = library.sort(function (a, b) {
    return a.title > b.title;
});

res = JSON.stringify(res);
console.log(res);