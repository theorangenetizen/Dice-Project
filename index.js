function rollDice() {
  //this sets the classes as variables
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  //stores images and values in an array
  const values = [];
  const images = [];
  //if an option with no value is not selected an alert will appear telling the user to choose a dice
  if (selVal === "") {
    const selVal = document.getElementById("diceType").value;

    if (selVal === "") {
      alert("Please select a dice.");
      return false;
    }
    //if a dice type is chosen, then the image folder and math gets assigned to gets used
    if (selVal === "d4") {
      for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 4) + 1;
        values.push(value);
        images.push(`<img src="Images/D4/${value}.png" alt="Dice ${value}">`);
      }
    }
    if (selVal === "d6") {
      for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Images/D6/${value}.png" alt="Dice ${value}">`);
      }
    }
    if (selVal === "d8") {
      for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 8) + 1;
        values.push(value);
        images.push(`<img src="Images/D8/${value}.png" alt="Dice ${value}">`);
      }
    }
    if (selVal === "d10") {
      for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 10) + 1;
        values.push(value);
        images.push(`<img src="Images/D10/${value}.png" alt="Dice ${value}">`);
      }
    }

    if (selVal === "d12") {
      for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 12) + 1;
        values.push(value);
        images.push(`<img src="Images/D12/${value}.png" alt="Dice ${value}">`);
      }
    }

    if (selVal === "d20") {
      for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 20) + 1;
        values.push(value);
        images.push(`<img src="Images/D20/${value}.png" alt="Dice ${value}">`);
      }
    }

    //shows the dice value and picture
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
  }
}
