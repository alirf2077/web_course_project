// Dark Mode Toggle Script
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('darkModeToggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.sidebar').classList.toggle('dark-mode');
        document.querySelectorAll('.dashboard-section').forEach(section => {
          section.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.btn-dashboard').forEach(button => {
          button.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.sidebar a').forEach(link => {
          link.classList.toggle('dark-mode');
        });
      });
    }
  });
  