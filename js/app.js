document.addEventListener('DOMContentLoaded', () => {
    // Example of adding an event listener to the add-to-cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            alert(`Product ${productId} added to cart!`);
        });
    });

    // Toggle dropdown menu on small screens
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const dropdownContent = dropdown.querySelector('.dropdown-content');
            dropdownContent.classList.toggle('show');
        });
    });
});
