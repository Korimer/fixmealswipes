function coverLinks() {
    // 🔄 Remove old bars before adding new ones

    for (const link of document.links) {
      const rect = link.getBoundingClientRect();

      const cover = document.createElement('div');
      covertemplate(cover,rect);

      const popbase = document.createElement('div');
      popbase.classList.add("popup");
      const popup = document.createElement('span');
      popup.classList.add('popuptext');
      popup.innerHTML = "Think this sucks? "

      popbase.appendChild(popup)

      popbase.addEventListener("mouseenter", function() {
        popbase.classList.add("show");  // Show the popup when entering the container
      });

      cover.addEventListener('mouseover', () => {
        popup.classList.toggle("show",true);
        console.log("hover detected");
      });
      
      document.body.appendChild(cover);
      cover.appendChild(document.createElement('div'));
    }
    scheduleBehavior();
  }

function scheduleBehavior() {
  if (parseInt(localStorage.getItem("swipesremaining")) <= 0) {
    setTimeout(() => {
      updatepositions(document.querySelectorAll('.link-cover'),document.querySelectorAll('.popup'));
    }, 1);
}
else {
  document.querySelectorAll('.link-cover').forEach(el => el.remove());
  document.querySelectorAll(".popup").forEach(el => el.remove());
}
}

function updatepositions(covers,popups) {
  for (let i=0; i<covers.length; i++) {
    const rect = document.links.item(i).getBoundingClientRect();
    const cover = covers.item(i);
    const popup = popups.item(i);
    covertemplate(cover,rect);

  }
  scheduleBehavior();
}
function popuptemplate(popup,rect) {

}
function updatePopups(popups) {
  for (let i=0; i<popups.length;i++) {
    const targetRect = scaleto; // Get target element's dimensions
  }

  // Set the popup size to match the target element's width and height
  popupText.style.width = targetRect.width + 'px';
  popupText.style.height = targetRect.height + 'px';

  // Position the popup relative to the target element (optional)
  popupContainer.style.position = "absolute";
  popupContainer.style.left = targetRect.left + "px";
  popupContainer.style.top = targetRect.top + "px";
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

    