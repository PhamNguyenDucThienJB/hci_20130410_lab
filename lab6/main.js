function showDetails() {
    const details = document.getElementById('course-details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}



// Cource 

 // Lấy tất cả các .course-container
 const courseContainers = document.querySelectorAll('.course-container');

 courseContainers.forEach(container => {
   const courseCard = container.querySelector('.course-card');
   const courseInfo = container.querySelector('.course-info');
 
   // Hiển thị .course-info khi hover vào .course-card
   courseCard.addEventListener('mouseenter', () => {
     courseInfo.style.opacity = '1';
     courseInfo.style.pointerEvents = 'auto';  // Cho phép tương tác với .course-info khi hiển thị
   });
 
   // Ẩn .course-info khi rời khỏi .course-container
   container.addEventListener('mouseleave', () => {
     courseInfo.style.opacity = '0';
     courseInfo.style.pointerEvents = 'none';  // Ngăn chặn tương tác khi ẩn
   });
 });



 document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.category-button');

  categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Xóa lớp active khỏi tất cả các nút
          categoryButtons.forEach(btn => btn.classList.remove('active'));
          
          // Thêm lớp active cho nút được nhấp
          button.classList.add('active');
      });
  });
});


  