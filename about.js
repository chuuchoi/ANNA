window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 250) {
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
  const vctElement = document.querySelector(".vct")
  // if(vctElement){
  //   vctElement.style.height = '100vh'
  //   vctElement.style.transition = ''
  // }
  setTimeout(() => { 
    if(vctElement){
      vctElement.style.height = '700px'
      // vctElement.style.transition = 'height 0.5s ease-in-out'
    }
  }, 400);
  if(window.getComputedStyle(document.documentElement).overflow == 'hidden'){
    setTimeout(() => {
      document.documentElement.style.overflow='auto'
      AOS.init()
    }, 1700);
  }
})