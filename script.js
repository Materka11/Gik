const array = [{
        name: "John",
        age: 10,
        isAdult: false
    },
    {
        name: "John",
        age: 10,
        isAdult: false
    },
    {
        name: "John",
        age: 10,
        isAdult: false
    }
]

document.getElementById("button").addEventListener("click", () => {
    array.map(props => {
        for (const property in props) {
            console.log(`${property}: ${props[property]}`);
        }
    })
})