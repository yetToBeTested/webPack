var sum = require('./sum')
import "./component/cpns"
const message = 'hello webpack'
console.log(sum(23, message.length))

console.log(message);

const bar =() => {
    console.log('aaa');
}

bar()
bar()