/* Creating a javascript module for finding the mass, force
and acceleration */
/* Given that f = ma */
function force(mass, acc)
{
    // CODE
    let force = mass * acc;

    // Returning the answer
    return force;
}

// Creating a function for calculating the mass
function mass(force, acc)
{
    // CODE
    let mass = force / acc;

    // Returning the answer
    return mass;
}

// Creating a function for calculating the acceleration
function acceleration(mass, force)
{
    // CODE
    let acceleration = force / mass;

    // Returning the answer
    return acceleration;
}

// Exporting this function
module.exports = {
    force : force, mass : mass,
    acceleration : acceleration
};
