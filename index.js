// Code your solution here
function findMatching(drivers, name) {
    
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, text) {
    return drivers.filter(driver => {
        return (driver.toLowerCase().slice(0, text.length) === text.toLowerCase());
    })
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}


