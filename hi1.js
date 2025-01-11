const menuOpenButton= document.querySelector("#menu-open-button");
const menuCloseButton= document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click",()=> {
    //Toggle
    document.body.classList.toggle("show-mobile-menu");
});

//Close
menuCloseButton.addEventListener("click",() => menuOpenButton.click
());
//Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView:1
      },
      768:{
        slidesPerView:2
      },
      1024: {
        slidesPerView:3
      }

    }
    
  });

//trailer//
const container = document.querySelector(".video-preview"),
      video = container.querySelector("video"),
      background = container.querySelector("img"),
      modal = document.querySelector(".video-modal"),
      closeBtn =modal.querySelector(".close-btn");

container.onmouseover =() => {
  video.classList.add("is-animated");
  video.play();
  setTimeout(() => {
    background.classList.remove("is-animated");
  }, 500)
}

container.onmouseout =() => {
  background.classList.add("is-animated");
  setTimeout(() => {
    video.classList.remove("is-animated");
    video.pause();
  }, 500)
};

let iframeCreated = false;
let videoIframe;
container.onclick =() =>{
  modal.classList.replace('none', 'show');

  setTimeout(() => {
    const youtubeContainer =modal.querySelector(".video");
    modal.classList.replace("inactive", "active");

    if(!iframeCreated){
      videoIframe =document.createElement("iframe");
      videoIframe.src ='video1.mp4'
      videoIframe.title ='YouTube video player';
      videoIframe.allow ='accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      videoIframe.allowFullscreen = true;
      videoIframe.frameBorder = '0';
      youtubeContainer.appendChild(videoIframe);


      iframeCreated =true;
    }

    else {
      videoIframe.src ='video1.mp4'

    }
  },100)
}

closeBtn.onclick =() => {
  modal.classList.replace('active', 'inactive');

  if(videoIframe) {
    videoIframe.src =''
  }

  setTimeout(() => {
    modal.classList.replace('show', 'none');
  },500)
}


