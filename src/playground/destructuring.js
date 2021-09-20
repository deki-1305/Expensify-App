//const book = {
//    title: 'Ego is the Enemy',
//    author: 'Ryan Holiday',
//    publisher: {
//        name: 'Penguin'
//    }
//}
//
//const {name: publisherName = "Self-Published"} = book.publisher;
//
//if (publisherName) {console.log(`The name of the publisher is: ${publisherName}`)};

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [title, small, medium, large] = item;

console.log(`A medium ${title} costs ${medium}`);