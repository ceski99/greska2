let cars = [
    {
        model: "Volkswagen",
        make: "Golf",
        year: 2021,
        color: "black",
    },
    {
        model: "Mustang",
        make: "Ford",
        year: 1946,
        color: "White"
    },
    {
        model: "GTR",
        make: "Nissan",
        year: "2001",
        color: "Blue"
    }
];
for (let car of cars) {
        if (car.color !== "black" ) {
           continue;
    }
    if (car.year >= 2020) {
        console.log("we could get this one", car);
    }
    
}
let i = 1;
while (i < 50) {
    if ((i-1) % 2 === 0) {
        continue;
    }
    console.log(i-1);
}

let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
];
for (let i = 0; i < groups.length; i++) {
    let matches = 0

    for (let j = 0; j < groups[i].length; j++) {
        if (groups[i][j].startsWith("M")) {
            matches++;
        } else {
            continue;
        }
        if (matches === 2) {
            console.log("Found a group with 2 names starting with an M:");
            console.log(groups[i]);
            break;
        }
    }
}