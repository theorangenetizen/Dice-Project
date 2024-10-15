function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];
  const selVal = document.getElementById("diceType").value;

  if (selVal === "") {
    alert("Please select a dice.");
    return false;
  }
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
  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
