const select = document.getElementById('customSelect');
const dropdown = document.getElementById('dropdown');
const selectedText = document.getElementById('selectedText');
const chevron = document.getElementById('chevron');

select.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
  chevron.classList.toggle('rotate-180');
});

document.querySelectorAll('#dropdown > div > div').forEach(option => {
  option.addEventListener('click', (e) => {
    selectedText.textContent = e.target.dataset.value;
    dropdown.classList.add('hidden');
    chevron.classList.remove('rotate-180');
  });
});

document.addEventListener('click', (e) => {
  if (!select.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add('hidden');
    chevron.classList.remove('rotate-180');
  }
});

// theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
});

// button press effect
document.querySelectorAll('.pressable').forEach(button => {
  button.addEventListener('mousedown', function () {
    this.classList.add('pressed');
  });

  button.addEventListener('mouseup', function () {
    this.classList.remove('pressed');
  });

  button.addEventListener('mouseleave', function () {
    this.classList.remove('pressed');
  });
});
