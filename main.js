window.onload = () => {
  console.log("onload window");
  const swiper = new Swiper ('.swiper-container',{
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const searchButton = document.querySelector(".btn-search");
  console.dir(searchButton);

  searchButton.onclick = () => {
    console.log("clicked!");

    searchButton.classList.toggle('btn-search-clicked');

    // const active = document.getElementById("btn-search-active");
    
    // if(active.style.display === 'none') {
    //   active.style.display = 'block';
    //   return;
    // }
    
    // active.style.display = 'none';
  }
}

