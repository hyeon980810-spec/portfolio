// Cover panel: click to expand/collapse, click outside to collapse
document.addEventListener('DOMContentLoaded', () => {
  const cover = document.getElementById('cover');
  if (cover) {
    cover.addEventListener('click', () => {
      cover.classList.toggle('expanded');
    });
    document.addEventListener('click', (e) => {
      if (cover.classList.contains('expanded') && !cover.contains(e.target)) {
        cover.classList.remove('expanded');
      }
    });
  }

  // Numbered accordion list (project list on the home page)
  const hero = document.getElementById('hero');
  const projectsCategory = document.getElementById('projects');

  document.querySelectorAll('.numbered-list > li > header').forEach((header) => {
    header.addEventListener('click', () => {
      const li = header.parentElement;
      const wasActive = li.classList.contains('active');
      li.parentElement.querySelectorAll('li.active').forEach((el) => el.classList.remove('active'));
      if (!wasActive) li.classList.add('active');

      if (hero && projectsCategory) {
        hero.classList.toggle('projects-open', projectsCategory.classList.contains('active'));
      }
    });
  });
});
