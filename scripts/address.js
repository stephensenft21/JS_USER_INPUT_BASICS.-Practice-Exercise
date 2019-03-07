// let addressBook = [
//     {
//         name: "Jisie",
//         address: "5918 Brook Bend Dr"
//     },
//     {
//         name: "Kristen",
//         address: "452 Moss Trail"
//     },
//     {
//         name: "Steve",
//         address: "500 Interstate Blvd S"
//     }
// ]


// fetch("localhost:8088/addresses")
// .then(response => response.json())
// .then(addresses => console.log(addresses))
// const container = document.querySelector("#addressList")

// const listAddressOnDom = () => {
//     container.innerHTML = ""
//     debugger
//     addressBook.forEach(element => {
//     container.innerHTML += `
//         <section>
//             <h1>${element.name}</h1>
//             <div>${element.address}</div>
//         </section>
//     `
//     });
// }

// listAddressOnDom()

// document.querySelector("#saveEntry").addEventListener("click", event => {
//     /*
//         Collect the user put by selecting the input fields, one
//         at a time, and accessing the `value` property
//     */
//     const personName = document.querySelector("#fullName").value
//     const personAddress = document.querySelector("#address").value

//     let newAddressBookEntry = {
//         name: personName,
//         address: personAddress
//     }
//     // debugger
//     addressBook.push(newAddressBookEntry)
//     listAddressOnDom()

// })



const container = document.querySelector("#addressList");

const listAddressOnDom = addressArray => {
    container.innerHTML = "";
    // debugger
    addressArray.forEach(element => {
        container.innerHTML += `
        <section>
            <h1>${element.name}</h1>
            <div>${element.address}</div>
        </section>
    `;
    });
};

fetch("http://localhost:8088/addresses")
    .then(function (response) {
        return response.json();
    })
    .then(function (parsedResponse) {
        return listAddressOnDom(parsedResponse);
    });

fetch("http://localhost:8088/addresses")
    .then(response => response.json())
    .then(parsedResponse => listAddressOnDom(parsedResponse));

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
          Collect the user put by selecting the input fields, one
          at a time, and accessing the `value` property
      */
    const personName = document.querySelector("#fullName").value;
    const personAddress = document.querySelector("#address").value;

    let newAddressBookEntry = {
        name: personName,
        address: personAddress
    };
    // debugger
    fetch("http://localhost:8088/addresses", {
        method: "POST",
        body: JSON.stringify(newAddressBookEntry),
        headers: {
            "Content-Type": "application/json"
        }
    });
    // listAddressOnDom()
});