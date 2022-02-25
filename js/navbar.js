// Insert navbar to header tags
$(document).ready(function () {
    $('header').load('/res/header.html');
    $('footer').load('/res/footer.html');
});

// Add and remove responsive class from navbar
// Used whenever opening or closing mobile navbar view
function swapTopbarType() {
    var x = document.getElementById('header');
    if (x.classList.contains('topnav-content') && !x.classList.contains('responsive')) {
        x.classList.add('responsive');
    } else {
        x.classList.remove('responsive');
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if ($(e.target).hasClass('dd-active')) return;

    $('.show').map(function () {
        this.classList.remove('show');
    });

    $('.dd-active').map(function () {
        this.classList.remove('dd-active');
    });

    var popupChild = $('.popup-text', $(e.target));
    if ($(e.target).hasClass('popup') && !popupChild.hasClass('popup-visible')) {
        popupChild.addClass('popup-visible');
    } else {
        popupChild.removeClass('popup-visible');
    }
};

// Toggle selected dropdown
function toggleDropdown(element, button) {
    setTimeout(function () {
        var dropdown = document.getElementById(element);
        var buttonObject = document.getElementById(button);
        dropdown.classList.toggle('show');
        buttonObject.classList.toggle('dd-active');
    }, 0.01);
}
