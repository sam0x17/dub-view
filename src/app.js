await Promise.allSettled([
  customElements.whenDefined('sl-button'),
  customElements.whenDefined('sl-card'),
  customElements.whenDefined('sl-rating')
]);

// Button, card, and rating are registered now! Add
// the `ready` class so the UI fades in.
document.body.classList.add('ready');


const drawer = document.querySelector('.drawer-placement-start');
const openButton = document.querySelector('#drawer-toggle')
const closeButton = drawer.querySelector('sl-button[variant="primary"]');

openButton.addEventListener('click', () => {
  openButton.blur();
  drawer.show()
});
closeButton.addEventListener('click', () => drawer.hide());
