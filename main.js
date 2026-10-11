// Accessible mobile navigation; all links remain available without JavaScript.
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (!toggle || !nav) return;
  toggle.closest('.site-head').classList.add('nav-ready');

  function setOpen(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  window.matchMedia('(max-width: 860px)').addEventListener('change', function () {
    setOpen(false);
  });
})();

// GitHub Pages cannot use the source site's origin-restricted contact service.
// Prepare a draft locally; the visitor reviews and sends it in their email app.
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;
  var note = document.getElementById('formNote');
  var draft = document.getElementById('emailDraft');
  var nameField = document.getElementById('name');
  var emailField = document.getElementById('email');

  form.addEventListener('input', function () {
    nameField.setCustomValidity('');
    emailField.setCustomValidity('');
    draft.hidden = true;
    draft.removeAttribute('href');
    note.textContent = '';
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    nameField.value = nameField.value.trim();
    emailField.value = emailField.value.trim();
    if (!form.reportValidity()) return;

    var subject = document.getElementById('subject').value.trim() || 'Project enquiry — Satsang Technology';
    var message = document.getElementById('message').value.trim();
    var body = 'Name: ' + nameField.value + '\r\nEmail: ' + emailField.value + '\r\n\r\n' + message;
    draft.href = 'mailto:hello@satsangtechnology.in?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    draft.hidden = false;
    note.textContent = 'Your draft is ready. Open it in your email app, review it, and send it there. No message has been sent yet.';
  });
  form.hidden = false;
})();
