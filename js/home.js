// Fixed search/menu capsule: toggle the nav menu panel, close on outside click
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mmMenuToggle');
  const menuPanel = document.getElementById('mmMenuPanel');
  if (!menuToggle || !menuPanel) return;

  const closeMenu = () => {
    menuPanel.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = menuPanel.hidden;
    menuPanel.hidden = !isHidden;
    menuToggle.setAttribute('aria-expanded', String(isHidden));
  });

  document.addEventListener('click', (e) => {
    if (!menuPanel.hidden && !menuPanel.contains(e.target) && e.target !== menuToggle) {
      closeMenu();
    }
  });
});

// Visual slider: mouse-drag to scroll (touch/trackpad already scroll natively)
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('mmVisualTrack');
  if (!track) return;

  let isDown = false;
  let startX = 0;
  let startScrollLeft = 0;

  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    isDown = true;
    startX = e.clientX;
    startScrollLeft = track.scrollLeft;
    track.classList.add('is-dragging');
    track.setPointerCapture(e.pointerId);
  });

  track.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    track.scrollLeft = startScrollLeft - (e.clientX - startX);
  });

  const endDrag = () => {
    isDown = false;
    track.classList.remove('is-dragging');
  };

  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);
  track.addEventListener('pointerleave', endDrag);
});
