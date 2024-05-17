document.addEventListener('DOMContentLoaded', function() {
  const fields = document.querySelectorAll('.clickable-field');

  fields.forEach(field => {
      field.addEventListener('click', function() {
          field.classList.toggle('clicked');
      });
  });
});
