function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: 500,
        triggerElement:'.container-stella'
    })
    .setPin('#column2')
    .addIndicators()
    .addTo(controller);

    
}
splitScroll();