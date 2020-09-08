let array = [89, 46, 0, 35];

const sortArray = (array) => {
for (var i = 1; i < array.length; i++)
    for (var j = 0; j < i; j++)
        if (array[i] < array[j]) {
          var x = array[i];
          array[i] = array[j];
          array[j] = x;
        }
        return array;
    }

console.log(sortArray(array));
