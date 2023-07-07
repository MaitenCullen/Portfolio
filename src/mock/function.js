export let supportsHover = matchMedia('(hover: hover)').matches;
export let intervalId = {};

export function toggleContent(card, contentElements, iconElement) {
  card.classList.toggle('show-content');

  if (card.classList.contains('show-content')) {
    contentElements.forEach(function(element) {
      element.style.opacity = '1';
      element.style.maxHeight = '40px';
    });
    iconElement.style.backgroundPosition = '-120px';
  } else {
    contentElements.forEach(function(element) {
      element.style.opacity = '0';
      element.style.maxHeight = '0';
    });
    iconElement.style.backgroundPosition = '0';
  }
}
