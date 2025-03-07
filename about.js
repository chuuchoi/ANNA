window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  let startY = 250;
  if(this.window.visualViewport.width<=768) startY = 50;
  if (window.scrollY > startY) {
    header.style.backgroundColor = "#0f0f0f";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
//스크롤 복원 안함, 항상 0,0 위치에서 시작
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
window.addEventListener("load", ()=>{
  // const vctElement = document.querySelector(".vct")
  // setTimeout(() => { 
  //   if(vctElement) vctElement.style.height = '700px'
  // }, 400);
  if(window.getComputedStyle(document.documentElement).overflow == 'hidden'){
    setTimeout(() => {
      document.documentElement.style.overflow='auto'
      AOS.init()
    }, 1700);
  }
})