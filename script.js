function openModal(modalId) {
  document.getElementById(modalId).classList.add("active");
  document.getElementById("sidebarClose").classList.add("active");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
  document.getElementById("sidebarClose").classList.remove("active");
}

function closeAllModals() {
  document
    .querySelectorAll(".modal")
    .forEach((modal) => modal.classList.remove("active"));
  document.getElementById("sidebarClose").classList.remove("active");
}

function handleForm(modalId) {
  alert("თქვენ წარმატებით გაიარეთ რეგისტრაცია❤️✅");
  closeModal(modalId);
  return false;
}

document.addEventListener("DOMContentLoaded", () => {
  const imageElement = document.getElementById("ITImgHover");


  const hoverEffects = [
      {
          id: "BestQuality",
          imageSrc: "./images/quality.png",
      },
      {
          id: "AffordablePrices",
          imageSrc: "./images/ptice.jpg",
      },
      {
          id: "CustemerServices",
          imageSrc: "./images/services.jpg",
      },
  ];


  hoverEffects.forEach(({ id, imageSrc }) => {
      const element = document.getElementById(id);
      if (element) {
          element.addEventListener("mouseenter", () => {
              imageElement.src = imageSrc;
          });

          element.addEventListener("mouseleave", () => {
              imageElement.src = "./images/js_pictur1.jpg";
          });
      }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const showVideoButton = document.querySelector(".show-video");
  const videoContainer = document.querySelector(".video-container");
  const closeVideoButton = document.querySelector(".close-video");
  const video = document.querySelector("video");

  showVideoButton.addEventListener("click", () => {
    videoContainer.classList.add("visible");
    video.play();
  });

  closeVideoButton.addEventListener("click", () => {
    videoContainer.classList.remove("visible");
    video.pause();
    video.currentTime = 0;
  });
});
