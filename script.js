document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', function() {
        searchInput.classList.toggle('active');
        searchIcon.classList.toggle('active');
        
        if (searchInput.classList.contains('active')) {
            searchInput.focus(); // 聚焦输入框
        } else {
            searchInput.blur(); // 失去焦点
        }
    });

    // 点击输入框以外的区域时，关闭输入框
    document.addEventListener('click', function(event) {
        if (!searchContainer.contains(event.target)) {
            searchInput.classList.remove('active');
            searchIcon.classList.remove('active');
        }
    });
});
