// function showContent(section) {
//     // Ẩn tất cả các phần nội dung
//     const sections = document.querySelectorAll('.content-section');
//     sections.forEach(sec => sec.style.display = 'none');

//     // Hiện phần nội dung tương ứng
//     document.getElementById(section).style.display = 'block';

//     // Cập nhật trạng thái active cho tab
//     const navLinks = document.querySelectorAll('.nav-link');
//     navLinks.forEach(link => link.classList.remove('active'));
    
//     // Cập nhật lớp active cho tab tương ứng
//     const activeLink = Array.from(navLinks).find(link => link.getAttribute('onclick').includes(section));
//     if (activeLink) {
//         activeLink.classList.add('active');
//     }
// }
function showContent(section) {
    // Ẩn tất cả các phần nội dung
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.style.display = 'none');

    // Hiện phần nội dung tương ứng
    document.getElementById(section).style.display = 'block';

    // Cập nhật trạng thái active cho tab
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Cập nhật lớp active cho tab tương ứng
    const activeLink = Array.from(navLinks).find(link => link.getAttribute('onclick').includes(section));
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function toggleContent(contentId, iconId) {
    const content = document.getElementById(contentId);
    const icon = document.getElementById(iconId);

    if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        content.style.display = 'none';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
}


