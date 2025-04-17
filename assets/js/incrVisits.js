document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("Swipes") == null) {
        localStorage.setItem("Swipes",2);
    }
    else {
        localStorage.setItem("Swipes", localStorage.getItem("Swipes") - 1);
    }
    if (localStorage.getItem("UsingSwipes") == null) {
        localStorage.setItem("UsingSwipes",true);
    }
});