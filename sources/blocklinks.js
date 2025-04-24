function coverLinks() {
    // 🔄 Remove old bars before adding new ones
    document.querySelectorAll('.link-cover').forEach(el => el.remove());

    for (const link of document.links) {
      const rect = link.getBoundingClientRect();

      const cover = document.createElement('div');
      cover.className = 'link-cover';
      cover.style.top = `${rect.top + window.scrollY}px`;
      cover.style.left = `${rect.left + window.scrollX}px`;
      cover.style.width = `${rect.width}px`;
      cover.style.height = `${rect.height}px`;

      document.body.appendChild(cover);
    }
    if (localStorage.getItem("swipesremaining") == 0) {
        setInterval(coverLinks, 0);
    }
  }

  // 🔁 Keep updating every second
window.addEventListener('DOMContentLoaded', () => {
    let swipes = localStorage.getItem("swipesremaining");
    if (swipes == null) {localStorage.setItem("swipesremaining",3)}
    localStorage.setItem("swipesremaining",localStorage.getItem("swipesremaining")-1)
    if (swipes == 0) 
    if (localStorage.getItem("swipesremaining") == 0) {
        coverLinks();
        setInterval(() => {
            
        }, 100);
    }
    });

    