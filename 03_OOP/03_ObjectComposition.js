//* Object Composition

// instead of inheritance, you can use object composition to add functionality to an object

class Developer {
    constructor(name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} is committing changes...`);
    }
}

// function to add function to a Developer object
function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying app...`);
        }
    }
}

// create a new object by combining the developer object with the functionality of the other objects
// use Object.assign() to combine the objects
function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

const frontEndDeveloper = createFrontEndDeveloper('Fulan');
frontEndDeveloper.commitChanges(); // Fulan is committing changes...
frontEndDeveloper.buildUI(); // Fulan is building UI...
console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer); // is Fulan developer?  true

const backEndDeveloper = createBackEndDeveloper('Fulana');
backEndDeveloper.commitChanges(); // Fulana is committing changes...
backEndDeveloper.buildAPI(); // Fulana is building API...
console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer); // is Fulana developer?  true

const devOpsDeveloper = createDevOps('Fulani');
devOpsDeveloper.commitChanges(); // Fulani is committing changes...
devOpsDeveloper.deployApp(); // Fulani is deploying app...
console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer); // is Fulani developer?  true

const fullStackDeveloper = createFullStackDeveloper('Fulanah');
fullStackDeveloper.buildUI(); // Fulanah is building UI...
fullStackDeveloper.buildAPI(); // Fulanah is building API...
fullStackDeveloper.deployApp(); // Fulanah is deploying app...
console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer); // is Fulanah developer?  true
