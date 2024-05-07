console.log('pagination running...');
window.onload = function () {
  let contentDiv = document.querySelector('.post-content');
  if (!contentDiv) return;

  let contentHtml = contentDiv.innerHTML;
  let pages = contentHtml.split('<!-- pagebreak -->');

  if (pages.length <= 1) {
    contentDiv.style.visibility = 'visible';
    contentDiv.style.opacity = 1;
    return;
  }

  let currentPage = 0;

  function showPage(pageNumber) {
    contentDiv.style.opacity = 0; // Start transition out
    setTimeout(() => {
      contentDiv.innerHTML = pages[pageNumber];
      contentDiv.style.visibility = 'visible';
      contentDiv.style.opacity = 1; // Fade in new content
      currentPage = pageNumber;
      updateNavigation();
      updatePageCounter();
    }, 400);
  }

  function updateNavigation() {
    prevButton.style.opacity = currentPage === 0 ? '0.5' : '1';
    prevButton.disabled = currentPage === 0;

    nextButton.style.opacity = currentPage === pages.length - 1 ? '0.5' : '1';
    nextButton.disabled = currentPage === pages.length - 1;
  }

  function updatePageCounter() {
    pageCounter.textContent = `${currentPage + 1} / ${pages.length}`;
  }

  let nextButton = document.createElement('button');
  nextButton.textContent = '→';
  nextButton.className = 'pagination-button';
  nextButton.onclick = function () {
    if (currentPage < pages.length - 1) {
      showPage(currentPage + 1);
    }
  };

  let prevButton = document.createElement('button');
  prevButton.textContent = '←';
  prevButton.className = 'pagination-button';
  prevButton.onclick = function () {
    if (currentPage > 0) {
      showPage(currentPage - 1);
    }
  };

  let pageCounter = document.createElement('div');
  pageCounter.className = 'page-counter';
  pageCounter.textContent = `${currentPage + 1} / ${pages.length}`;

  let paginationContainer = document.createElement('div');
  paginationContainer.className = 'pagination-container';
  paginationContainer.append(prevButton, pageCounter, nextButton);

  contentDiv.after(paginationContainer);

  showPage(0);
};
