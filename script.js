function cycleText() {
  const texts = [
    "Web Developer (WordPress)",
    "Graphic Designer",
    "Photoshop Editor",
    "Video Editor",
  ];
  let index = 0;
  let currentText = texts[index];
  let element = document.querySelector(".changing-text");

  function removeText() {
    let text = element.textContent;
    if (text.length > 0) {
      element.textContent = text.slice(0, -1);
      setTimeout(removeText, 50); // Adjust the delay (in milliseconds) for faster or slower text removal
    } else {
      index = (index + 1) % texts.length;
      currentText = texts[index];
      addText();
    }
  }

  function addText() {
    let text = currentText;
    if (element.textContent !== text) {
      element.textContent += text.charAt(element.textContent.length);
      setTimeout(addText, 50); // Adjust the delay (in milliseconds) for faster or slower text appearance
    } else {
      setTimeout(removeText, 800); // Adjust the delay (in milliseconds) for the duration of the displayed text
    }
  }

  removeText();
}

cycleText();
// cicel of my all ulala exprience end
