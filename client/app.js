const tableBody = document.getElementById("table-body")

const getFlight = () => {
    fetch("http://localhost:8000/flights")
        .then(response => response.json())
        .then(flights => {
            populateTable (flights)
        })
        .catch(err => console.log(err))
}

getFlight()

const populateTable = (flights) => {
    
    for (const flight of flights) {
    // for each object in the array basically ^
    const tableRow = document.createElement("tr")
    const tableIcon = document.createElement("td")
    tableIcon.textContent = "✈"
    tableRow.append(tableIcon)

    const flightDetails = {
        time: flight.programedHour.slice(0,5),
        destination: flight.destiny.toUpperCase(),
        flight: flight.flightNumber,
        gate: flight.firstDoor,
        status: flight.state.toUpperCase()
    }

    

    for (const flightDetail in flightDetails) {
        const tableCell = document.createElement("td")
        const word = Array.from(flightDetails[flightDetail])

        for (const [index, letter] of word.entries()) {
            const letterElement = document.createElement("div")

            setTimeout(() => {
                letterElement.classList.add("flip")
                letterElement.textContent = letter
                tableCell.append(letterElement)
            }, 100 * index)  
        }
        tableRow.append(tableCell)
    } 

    tableBody.append(tableRow)
    
    }
}