/*console.log('Hello, node');

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//Global object

//setTimeout(() => {
 //   console.log('Stop interval');
   // clearInterval(interval);

//}, 5000);
//console.log('Im out of sync');

//const interval = setInterval(() => {
//    console.log('in the interval');
//}, 1000);

console.log(__dirname);
console.log(__filename);
console.log(__dirname, __filename);


const { people, ages } = require('./people');

console.log(ages, people);

console.log(ages.length, people.length);

const os = require('os');
console.log(os);


const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }

});
console.log('last line');

//writing files
fs.writeFile('./docs/blog1.txt', 'hello world', () => {
    console.log('File written');
});

fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
    console.log('File written');
});

//directories
if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (error) => {
    if (error) {
        console.log(error);

    } else {
        console.log('folder created');
    }
})
} else {
    fs.rmdir('./assets', (error) => {
    if (error) {
    console.log(error);

} else {
    console.log('folder removed');
}
})
};


//delete files
if (fs.existsSync('./docs/deteleme.txt')) {
    fs.unlink('./docs/deteleme.txt', (error) => {
        if (error) {
            console.log(error);
    
        } else {
            console.log('file deleted');
        }

    })
};



const fs = require('fs');
if (!fs.existsSync('./docs/tmpPassword.txt')) {
fs.writeFile ('./docs/tmpPassword.txt', 'password', (error) => {
    if (error) {
        console.log(error);

    } else {
        console.log('file created');
    }

});
} else {
    fs.unlink('./docs/tmpPassword.txt', (error) => {
    if (error) {
    console.log(error);

    } else {
    console.log('file removed');
    }
})
};
*/


//streams and buffers
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (buffer) => {
    // console.log('------- NEW CHUNK -------');
    //console.log(buffer);
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(buffer);
})





