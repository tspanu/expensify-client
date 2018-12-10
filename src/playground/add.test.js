const add = (a, b) => a + b
const generateGreeting = (name = 'Anon') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3, 4)

    expect(result).toBe(7)
})

test('Should greet with name', () => {
    const result = generateGreeting('Travis')

    expect(result).toBe('Hello Travis!')
})

test('Should greet with no name', () => {
    const result = generateGreeting()

    expect(result).toBe('Hello Anon!')
})