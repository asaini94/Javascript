let array_with_duplicates = ['DELHI', 'NEWYORK', 'DELHI', 'GOA', 'MUMBAI', 'CALIFORNIA', 'GOA']

function removeDuplicateUsingFilter(arr) {
    let unique_array = arr.filter(function (elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique_array
}

console.log(removeDuplicateUsingFilter(array_with_duplicates));