function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const controls = document.querySelector('#controls');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createButton.addEventListener('click', () => createBoxes(Number(input.value)));
  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    if (amount < 1 || amount > 100) {
      return;
    }

    destroyBoxes(); // Clear existing boxes

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      boxesContainer.appendChild(box);
      size += 10;
    }

    input.value = ''; // Clear input value
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = ''; // Remove all child elements
  }