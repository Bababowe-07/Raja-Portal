var navlinks = document.getElementById("navLinks");

function showMenu() {
    navlinks.style.right = "0";
}

function hideMenu() {
    navlinks.style.right = "-200px";
}

document.addEventListener('DOMContentLoaded', function() {
    const clubItem = document.querySelector('.popupContainer');
    const popupContainer = document.getElementById('popupContainer');

    clubItem.addEventListener('click', function() {
        popupContainer.style.display = 'block';
    });

    document.addEventListener('click', function(event) {
        if (!popupContainer.contains(event.target) && event.target !== clubItem) {
            popupContainer.style.display = 'none';
        }
    });
});