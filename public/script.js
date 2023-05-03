const form = document.getElementById('link-form');
const input = document.getElementById('link-input');
const err = document.getElementById('link-error');

const menuBtn = document.getElementById('menu-btn');
const menuEl = document.getElementById('menu');

// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}
const formSubmit = (e) => {
  e.preventDefault();
  if (input.value === '' || !validURL(input.value)) {
    err.innerHTML = 'Please enter a valid URL';
    input.classList.add('error-border');
  } else {
    err.innerHTML = ''
    input.classList.remove('error-border')
    alert('Success')
  }
}
form.addEventListener('submit', formSubmit);


// Toggle Mobile Menu
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuEl.classList.toggle('flex');
  menuEl.classList.toggle('hidden');
})

// copyright
const now = new Date();
let year = now.getFullYear();
document.getElementById('year').innerText = year;