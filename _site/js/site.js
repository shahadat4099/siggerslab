(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });
  }

  document.querySelectorAll('.publications-source > p').forEach(function (item) {
    var text = item.textContent.trim();
    if (/^(20|19)\d{2}$/.test(text) || text === 'Current BioRxiv/MedRxiv') {
      item.classList.add('publication-year');
    } else if (text && item.querySelector('br')) {
      item.classList.add('publication-entry');
    }
  });
})();
