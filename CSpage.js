const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  // const header = accordion.querySelector('.accordion-header');
  const panel = accordion.querySelector('.panel');

  accordion.addEventListener('click', () => {
    const isOpen = accordion.classList.contains('active');

    if (isOpen) {
      // 닫기 애니메이션
      panel.style.maxHeight = panel.scrollHeight + 'px'; // 먼저 현재 높이로 설정
      requestAnimationFrame(() => {
        panel.style.maxHeight = '0px'; // 다음 프레임에서 0으로
      });
    } else {
      // 열기 애니메이션
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }

    accordion.classList.toggle('active');
  });

  // 초기 상태 설정
  panel.style.overflow = 'hidden';
  panel.style.transition = 'max-height 0.6s ease';
  panel.style.maxHeight = '0px';
});