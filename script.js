// Inicializar ScrollMagic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: "#videoPin",
  triggerHook: 0.5,       // activa cuando el video cruza 60% del viewport
  duration: "40%"        // mantiene el pin durante este scroll
})
.setPin("#videoPin")
.addTo(controller);
