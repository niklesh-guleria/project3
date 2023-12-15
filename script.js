function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var line = document.querySelector('.line');

    if (sidebar.style.right === '0px') {
        sidebar.style.right = '-250px';
        line.classList.remove('sidebar-open');
    } else {
        sidebar.style.right = '0px';
        line.classList.add('sidebar-open');
    }
}

function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    var line = document.querySelector('.line');

    sidebar.style.right = '-250px';
    line.classList.remove('sidebar-open');
}
