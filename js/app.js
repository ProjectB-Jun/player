(function () {
  const data = window.ZodiacData;
  const display = document.querySelector('[data-role="display"]');
  const button = document.querySelector('[data-role="touch-button"]');
  const progress = document.querySelector('[data-role="progress"]');

  if (!data || !display || !button || !progress) {
    return;
  }

  const total = data.zodiacAnimals.length;
  let currentIndex = -1;

  function renderAnimal() {
    currentIndex = data.getNextAnimalIndex(currentIndex);
    const animal = data.zodiacAnimals[currentIndex];

    display.innerHTML = `
      <span class="animal-emoji" role="img" aria-label="${animal.name}">${animal.emoji}</span>
      <p class="animal-name">${currentIndex + 1}. ${animal.name}</p>
      <p class="animal-message">${animal.message}</p>
    `;

    const counterText = `${currentIndex + 1} / ${total}`;
    progress.textContent = counterText;
  }

  function handlePress(event) {
    event.preventDefault();
    renderAnimal();
  }

  button.addEventListener('click', handlePress);
  button.addEventListener(
    'touchstart',
    function (event) {
      handlePress(event);
    },
    { passive: false }
  );
})();
