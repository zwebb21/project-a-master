document.querySelectorAll('.project-desc').forEach((desc, index) => {
    const fullText = desc.innerHTML;
    const words = fullText.split(' ');
  
    if (words.length > 30) {
      const shortText = words.slice(0, 30).join(' ') + '...';
      desc.innerHTML = shortText;
  
      const btn = document.querySelectorAll('.see-more-btn')[index];
  
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
      // Hide button if text is short
      document.querySelectorAll('.see-more-btn')[index].style.display = 'none';
    }
  });
  