// function numberOf55s(numbers) {
//   var count = 0;
//   numbers.forEach(function(number) {
//     if (number === 55) {
//       count += 1;
//     }
//   });
//   return count;
// }

// console.log(numberOf55s([4, 1, 44, 55, 2, 1, 55, 33]));

// function factorial(number) {
//   var product = 1;
//   while (number > 0) {
//     product = product * number;
//     number -= 1;
//   }
//   return product;
// }

// console.log(factorial(5));

function printSums(numbers1, numbers2) {
  var result = [];
  numbers1.forEach(function(number1) {
    numbers2.forEach(function(number2) {
      result.push(number1 + number2);
    });
  });
  return result;
}

console.log(printSums([1, 5, 10], [100, 500, 1000]));

// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].
//
// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])
