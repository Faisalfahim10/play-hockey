const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');

menuButton.addEventListener('click', () => {
  // Toggle the dropdown visibility
  dropdownMenu.classList.toggle('hidden');
});

// Close the dropdown if clicking outside of it
document.addEventListener('click', (event) => {
  if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});