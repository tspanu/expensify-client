const person = {
    name: 'Travis',
    age: 27,
    location: {
        city: 'Austin',
        temp: 67
    }
}

const { name: firstName = 'Anon', age } = person
//console.log(`${firstName} is ${age}`)

//const { city, temp: temperature } = person.location

//console.log(`It's ${temperature} in ${city}`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = 'Self Published'} = book.publisher

//console.log(publisherName)

const address = ['1299 S Juniper Street', 'Philadephia', 'Pennsylvania', '19147']

const [, city, state = 'New York'] = address

console.log(`You are in ${city}, ${state}`)

const item = ['Coffee', '$2.00', '$2.50', '$2.75']
const [itemName, smallPrice, mediumPrice, largePrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice} `)