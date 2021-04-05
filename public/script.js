window.addEventListener('load', () => {
  // initialize the slider
  const imageElm = document.querySelector('section#top > .right .image');
  const sliderElm = document.querySelector('section#top > .right .image .slider');
  let dragging = false;
  const drag = (e) => {
    if (dragging) {
      const rect = imageElm.getBoundingClientRect();
      const width = rect.right - rect.left;
      let perc = ((e.clientX - rect.left) / width) * 100;
      perc = Math.max(10, perc);
      perc = Math.min(90, perc);
      imageElm.setAttribute('style', `--left-offset: ${perc}%`);
    }
  };
  sliderElm.addEventListener('mousedown', () => {
    dragging = true;
  });
  document.addEventListener('mousemove', (e) => {
    drag(e);
  });
  document.addEventListener('mouseup', () => {
    dragging = false;
  });

  document.addEventListener('touchend', () => {
    dragging = false;
  });
  document.addEventListener(
    'touchmove',
    (e) => {
      if (dragging) {
        e.preventDefault();
      }
      drag(e.changedTouches[0]);
    },
    { passive: false }
  );
  sliderElm.addEventListener('touchstart', () => {
    dragging = true;
  });
});
