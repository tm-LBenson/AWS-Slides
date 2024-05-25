document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.topic-checkbox');

  checkboxes.forEach((checkbox) => {
    const id = checkbox.dataset.id;
    const storedState = localStorage.getItem(id);
    if (storedState === 'true') {
      checkbox.checked = true;
    }

    checkbox.addEventListener('change', function () {
      localStorage.setItem(id, checkbox.checked);
    });
  });
});
