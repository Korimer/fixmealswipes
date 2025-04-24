function coverLinks() {
    // 🔄 Remove old bars before adding new ones
    document.querySelectorAll('.link-cover').forEach(el => el.remove());

    for (const link of document.links) {
      const rect = link.getBoundingClientRect();

      const cover = document.createElement('div');
      covertemplate(cover,rect);

      cover.addEventListener('mouseover', () => {console.log("hi!")});
      
      document.body.appendChild(cover);
      cover.appendChild(document.createElement('div'));
    }
    if (parseInt(localStorage.getItem("swipesremaining")) <= 0) {
        setTimeout(coverLinks, 1);
    }
    else {
      document.querySelectorAll('.link-cover').forEach(el => el.remove());
      document.querySelectorAll("popup").forEach(el => el.remove());
    }
  }
function updateCovers(covers) {
  for (let i=0; i<covers.length; i++) {
    const rect = document.links.item(i).getBoundingClientRect();
    const cover = covers.item(i);
    covertemplate(cover,rect);
  } 
}

function covertemplate(cover,rect) {
  cover.className = 'link-cover';
  cover.style.top = `${rect.top + window.scrollY}px`;
  cover.style.left = `${rect.left + window.scrollX}px`;
  cover.style.width = `${rect.width}px`;
  cover.style.height = `${rect.height}px`;
}

window.addEventListener('DOMContentLoaded', () => {
  let swipes = localStorage.getItem("swipesremaining");
  if (swipes == null || swipes == NaN || swipes == "NaN") {localStorage.setItem("swipesremaining",3)}
  localStorage.setItem("swipesremaining",localStorage.getItem("swipesremaining")-1)
  if (parseInt(localStorage.getItem("swipesremaining")) <= 0) {
      coverLinks();
      setTimeout(() => {
        localStorage.setItem("swipesremaining",2);
      }, 10000);
  }
});

    