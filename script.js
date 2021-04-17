function onClickInput(){
    let element = document.getElementById("search_bar");
  element.classList.add("active");
}

function blurEvent(){
    let element = document.getElementById("search_bar");
  element.classList.remove("active");
}