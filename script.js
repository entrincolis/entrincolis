// Inicializar ScrollMagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: "#videoPin",
  triggerHook: 0.5,       // activa cuando el video cruza 60% del viewport
  duration: "40%"        // mantiene el pin durante este scroll
})
.setPin("#videoPin")
.addTo(controller);

if (window.innerWidth <= 480) {
  const videoPin = document.getElementById("videoPin");
  videoPin.style.left = "50%";
  videoPin.style.transform = "translateX(10%) translateY(-50%) rotate(-5deg)";
} 
