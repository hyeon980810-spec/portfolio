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
