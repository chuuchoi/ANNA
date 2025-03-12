let isOpen = false;
function toggleHM(){
  const drawerEl = document.querySelector(".header-drawer")
  const divs = Array.from(drawerEl.children)
  if(!isOpen){
    divs.forEach((element, idx) => {
      switch (idx) {
        case 0:
          element.style.transition = "all 0.4s ease-in-out"
          element.style.rotate = "45deg"
          break;
          case 1:
          element.style.transition = "all 0.4s ease-in-out"
          element.style.position = "absolute"
          element.style.rotate = "-45deg"
          break;
        case 2:
          element.style.display = "none"
          break;
        default:
          break;
      }
    });
    document.querySelector(".header-modal").style.display="block"
  }else{
    divs.forEach((element, idx) => {
      switch (idx) {
        case 0:
          element.style.transition = "null"
          element.style.rotate = "0deg"
          break;
        case 1:
          element.style.transition = "null"
          element.style.position = "static"
          element.style.rotate = "0deg"
          break;
        case 2:
          element.style.display = "block"
          break;
        default:
          break;
      }
    });
    document.querySelector(".header-modal").style.display="none"
  }
  isOpen = !isOpen
}
// window.onload = ()=>{
//   document.querySelector(".header-modal").addEventListener("click",()=>{toggleHM()})
//   document.querySelector(".header-drawer").addEventListener("click",()=>{toggleHM()})
// }