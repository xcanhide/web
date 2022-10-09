const toggleSwitch = document.getElementById("night");
const currentTheme = localStorage.getItem('colortheme');

if (currentTheme) {
  document.documentElement.setAttribute('theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('theme', 'dark');
    localStorage.setItem('colortheme', 'dark');
  } else {
    document.documentElement.setAttribute('theme', 'light');
    localStorage.setItem('colortheme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
