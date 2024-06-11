const searchInput = document.querySelector('.search');
const menuItems = document.querySelectorAll('.menu li');

// Hide menu items initially
menuItems.forEach(item => {
    item.style.display = 'none';
});

const filterMenuItems = () => {
    const filter = searchInput.value.toLowerCase();
    let hasVisibleItems = false;
    menuItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(filter)) {
            item.style.display = '';
            hasVisibleItems = true;
        }
         else {
            item.style.display = 'none';
        }
    });

    // If the input is empty, hide all items
    if (filter === '') {
        menuItems.forEach(item => {
            item.style.display = 'none';
        });
    }
};
searchInput.addEventListener('input', filterMenuItems);
