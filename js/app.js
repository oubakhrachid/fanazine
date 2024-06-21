document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function(dropdownToggle) {
        dropdownToggle.addEventListener('click', function() {
            var dropdownMenu = this.nextElementSibling;
            if (window.innerWidth <= 991.98) {
                dropdownMenu.style.left = '50%';
                dropdownMenu.style.transform = 'translateX(-50%)';
            } else {
                dropdownMenu.style.left = '';
                dropdownMenu.style.transform = '';
            }
        });
    });
});
