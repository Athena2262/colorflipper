function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeColor() {
    const colorDisplay = document.getElementById("color-display");
    const newColor = getRandomHexColor();
    colorDisplay.innerText = newColor;
    colorDisplay.style.backgroundColor = newColor;
  }
  
  // Optional: Change color when the page loads
  changeColor();
  
