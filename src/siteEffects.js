// Faithful port of the static site's js/main.js behaviors.
//
// The converted page markup carries data-fn / data-arg attributes (from the
// original inline onclick handlers); one delegated listener dispatches them.
// Everything else from main.js runs in runPageEffects() after each route
// renders: home gallery shuffle, showcase carousel setup, the contact form
// handler, and the Elfsight loader for the reviews widgets.

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleGallery(slideId) {
  const slide = document.getElementById(slideId);
  if (!slide) return;
  const images = Array.from(slide.getElementsByTagName('img'));
  const shuffledImages = shuffleArray(images);
  slide.innerHTML = '';
  shuffledImages.forEach((img) => slide.appendChild(img));
}

// Showcase Carousel
export function showImage(carouselId, index) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  const images = carousel.querySelectorAll('.carousel-image');

  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
  carousel.setAttribute('data-current-index', index);
}

function nextImage(carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  const currentIndex = parseInt(carousel.getAttribute('data-current-index'), 10) || 0;
  showImage(carouselId, currentIndex + 1);
}

function prevImage(carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  const currentIndex = parseInt(carousel.getAttribute('data-current-index'), 10) || 0;
  showImage(carouselId, currentIndex - 1);
}

// About / showcase expand buttons
const originalParents = new Map();

export function toggleExpand(sectionId, button) {
  const content = document.getElementById(sectionId + '-content');
  const section = document.getElementById(sectionId);
  if (!content || !section || !button) return;

  let buttonId = button.getAttribute('id') || button.dataset.originalId;
  if (!buttonId) {
    buttonId = 'button-' + Math.random().toString(36).substr(2, 9);
    button.dataset.originalId = buttonId;
  }

  if (!originalParents.has(buttonId)) {
    originalParents.set(buttonId, button.parentNode);
  }
  const originalParent = originalParents.get(buttonId);

  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    button.innerText = 'Click to Retract';
    button.classList.add('button-retract');
    content.appendChild(button);
  } else {
    content.style.display = 'none';
    button.innerText = 'Click to Expand';
    button.classList.remove('button-retract');
    originalParent.appendChild(button);
  }
}

let delegationBound = false;

function bindDelegation() {
  if (delegationBound) return;
  delegationBound = true;

  document.addEventListener('click', (e) => {
    const fnEl = e.target.closest ? e.target.closest('[data-fn]') : null;
    if (fnEl) {
      const fn = fnEl.getAttribute('data-fn');
      const arg = fnEl.getAttribute('data-arg');
      if (fn === 'nextImage') nextImage(arg);
      else if (fn === 'prevImage') prevImage(arg);
      else if (fn === 'toggleExpand') toggleExpand(arg, fnEl);
    }
    const anchor = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (anchor) {
      const href = anchor.getAttribute('href');
      if (href && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  });

  // Header transparency becomes opaque when scrolled down
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    const scrollPosition = window.scrollY;
    if (scrollPosition < 120) {
      header.style.backgroundColor =
        'rgba(160, 0, 255,' + (0.4 + scrollPosition / 200) + ')';
    } else {
      header.style.backgroundColor = 'rgba(160, 0, 255, 1)';
    }
  });
}

function initCarousels() {
  document.querySelectorAll('.showcase-carousel').forEach((carousel) => {
    carousel.setAttribute('data-current-index', 0);
    showImage(carousel.getAttribute('id'), 0);
  });
}

// Contact form: same validation, spinner, and fetch flow as main.js.
function attachContactForm() {
  const form = document.getElementById('contact-form');
  if (!form || form.dataset.bound) return;
  form.dataset.bound = '1';

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const reasonEl = document.getElementById('contact-reason');
    const statusMessage = document.getElementById('status-message');
    const spinner = document.getElementById('loading-spinner');
    if (!reasonEl || !statusMessage || !spinner) return;

    const reason = reasonEl.value;

    statusMessage.textContent = '';
    statusMessage.style.color = '';

    if (!reason) {
      statusMessage.textContent = 'Please select a reason for contact';
      statusMessage.style.color = 'red';
      return;
    }

    spinner.style.display = 'block';

    const formData = new FormData(this);

    fetch('contact-form-handler.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then(() => {
        spinner.style.display = 'none';
        statusMessage.textContent = 'Message sent successfully!';
        statusMessage.style.color = '#00FFCC';
        statusMessage.style.textShadow = '0 0 10px blue';
      })
      .catch((error) => {
        console.error('Error:', error);
        spinner.style.display = 'none';
        statusMessage.textContent = 'An error occurred while sending the message.';
        statusMessage.style.color = 'red';
      });
  });
}

// Reviews page widgets (the original loads Elfsight's platform.js inline).
function loadElfsight() {
  if (!document.querySelector('[class*="elfsight-app-"]')) return;
  if (
    document.querySelector(
      'script[src="https://static.elfsight.com/platform/platform.js"]'
    )
  ) {
    return;
  }
  const s = document.createElement('script');
  s.src = 'https://static.elfsight.com/platform/platform.js';
  s.defer = true;
  document.body.appendChild(s);
}

export function runPageEffects() {
  bindDelegation();
  shuffleGallery('slide1');
  shuffleGallery('slide2');
  initCarousels();
  attachContactForm();
  loadElfsight();
}
