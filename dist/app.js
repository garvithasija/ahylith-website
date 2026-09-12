const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });

const FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSdRWTwFGCAbg_1ZP5uD4po6Vl0k3vI4Hr8dcsV1jqiNgl26Rg/formResponse';
const FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSdRWTwFGCAbg_1ZP5uD4po6Vl0k3vI4Hr8dcsV1jqiNgl26Rg/viewform';
const dialog = document.querySelector('#pilot-dialog');
const inquiry = document.querySelector('#pilot-inquiry');
const formView = dialog.querySelector('.dialog-form');
const successView = dialog.querySelector('.dialog-success');
const formError = inquiry.querySelector('.form-error');
const submitButton = inquiry.querySelector('button[type="submit"]');
const supportsDialog = typeof dialog.showModal === 'function';
function openDialog() { formView.hidden = false; successView.hidden = true; formError.hidden = true; dialog.showModal(); inquiry.querySelector('input').focus(); }
document.querySelectorAll('[data-open-pilot]').forEach(el => el.addEventListener('click', event => {
  if (!supportsDialog) { if (el.tagName === 'BUTTON') window.open(FORM_LINK, '_blank', 'noopener'); return; }
  event.preventDefault(); closeMenu(); openDialog();
}));
dialog.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
inquiry.querySelectorAll('input, textarea').forEach(el => el.addEventListener('input', () => el.closest('.field').classList.remove('invalid')));
inquiry.addEventListener('submit', async event => {
  event.preventDefault();
  let valid = true;
  inquiry.querySelectorAll('[required]').forEach(el => { const ok = el.checkValidity(); el.closest('.field').classList.toggle('invalid', !ok); el.setAttribute('aria-invalid', String(!ok)); if (!ok) valid = false; });
  if (!valid) { inquiry.querySelector('.field.invalid input, .field.invalid textarea').focus(); return; }
  if (inquiry.website.value) { formView.hidden = true; successView.hidden = false; return; }
  const data = new URLSearchParams(new FormData(inquiry));
  data.delete('website'); data.append('fvv', '1'); data.append('pageHistory', '0');
  submitButton.disabled = true; submitButton.textContent = 'Sending…'; formError.hidden = true;
  try {
    await fetch(FORM_ACTION, { method: 'POST', mode: 'no-cors', body: data });
    inquiry.reset(); formView.hidden = true; successView.hidden = false; successView.querySelector('.button').focus();
  } catch (error) {
    formError.textContent = 'We couldn’t send that. Please try again, open the form in a new tab, or email ahylith@gmail.com.'; formError.hidden = false;
  } finally { submitButton.disabled = false; submitButton.innerHTML = 'Send inquiry <span>↗</span>'; }
});
