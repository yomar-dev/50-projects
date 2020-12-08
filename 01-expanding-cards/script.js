const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active')
  })
})

function removeActiveClasses(params) {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}