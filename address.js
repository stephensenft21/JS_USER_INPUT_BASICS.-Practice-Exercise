// Some starter code
const container = document.querySelector("#thingLocation")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const thing = document.querySelector("#thing").value
    const location = document.querySelector("#location").value

// console.log("thing",thing.value)
// console.log("location",location.value)
    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>I can purchase ${thing} at ${location}.</h1>
     
        </section>
    `

})