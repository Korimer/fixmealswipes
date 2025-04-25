function coverLinks() {
    // 🔄 Remove old bars before adding new ones
    for (const link of document.links) {
      const rect = link.getBoundingClientRect();

      const cover = document.createElement('div');
      covertemplate(cover,rect);
      
      document.body.appendChild(cover);
      cover.appendChild(document.createElement('div'));
    }
    scheduleBehavior();
  }

function scheduleBehavior() {
  if (parseInt(localStorage.getItem("swipesremaining")) <= 0) {
    setTimeout(() => {
      updatepositions(document.querySelectorAll('.link-cover'));
    }, 1);
  }
  else {
    document.querySelectorAll('.link-cover').forEach(el => el.remove());
  }
}

function updatepositions(covers) {
  for (let i=0; i<covers.length; i++) {
    const rect = document.links.item(i).getBoundingClientRect();
    const cover = covers.item(i);
    covertemplate(cover,rect);
  }
  scheduleBehavior();
}

function covertemplate(cover,rect) {
  cover.className = 'link-cover';
  cover.style.top = `${rect.top + window.scrollY}px`;
  cover.style.left = `${rect.left + window.scrollX}px`;
  cover.style.width = `${rect.width}px`;
  cover.style.height = `${rect.height}px`;
}

let topbar = document.createElement("div");
topbar.innerHTML = " \
<a href='/subpages/unblocklinks.html'>\
          <div id='notification-bar' style='display:show; width:100%; height:40px; background-color:#F4E0E1; position:fixed; z-index:9999; color:#A42732;border-bottom:1px solid #A42732;'>\
            <div class='notification-message' style='text-align:center; line-height:40px;'>\
              Blocked links? Inaccessible site? Sounds like you used up your two allotted <em>Site Swipes</em>!\
              Click here for more info.\
            </div>\
          </div>\
        </a>\
";

window.addEventListener('DOMContentLoaded', () => {
  let swipes = localStorage.getItem("swipesremaining");
  if (swipes == null || swipes == NaN || swipes == "NaN") {localStorage.setItem("swipesremaining",3)}
  localStorage.setItem("swipesremaining",localStorage.getItem("swipesremaining")-1)
  if (parseInt(localStorage.getItem("swipesremaining")) <= 0) {
      coverLinks();
      document.getElementById('wrapper').prepend(topbar)
      setTimeout(() => {
        document.getElementById('notification-bar').style.display = 'none';
        localStorage.setItem("swipesremaining",2);
      }, 10000);
  }
});