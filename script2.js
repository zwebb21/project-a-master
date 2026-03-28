document.querySelectorAll('.card').forEach(card => {
  const desc = card.querySelector('.project-desc');
  const btn = card.querySelector('.see-more-btn');

  if (!desc || !btn) return; // skip if either is missing

  const fullText = desc.innerHTML;
  const words = fullText.split(' ');

  if (words.length > 30) {
    const shortText = words.slice(0, 30).join(' ') + '...';
    desc.innerHTML = shortText;

    btn.addEventListener('click', () => {
      if (btn.innerText === 'See more') {
        desc.innerHTML = fullText;
        btn.innerText = 'See less';
      } else {
        desc.innerHTML = shortText;
        btn.innerText = 'See more';
      }
    });
  } else {
    btn.style.display = 'none';
  }
});
