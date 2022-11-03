window.addEventListener("load", function (e) {
    // header navbar menu toggle
    $("header .activeBars").click(function () {
      $("header .activeMenuBars").slideToggle(1000);
    });
    $(".what .owl-carousel").owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        nav: true,
      });
    //   fects
      let time = 3600;
      const countDownEl = document.getElementById
        ("countdown");
      const countEl = document.getElementById  
      ("count")
      const lilEl = this.document.getElementById
      ("lil")
    
      setInterval(updatecountdown, 1000);
    
      function updatecountdown() {
        const minutes = Math.floor(time / 60)
        let seconds = time % 60;
        seconds = seconds < 10 ? "0" + seconds :
          seconds;
        countDownEl.innerHTML = `${minutes} :
           ${seconds}`;
        time--; 
  
        const sec = Math.floor(time / 80)
        let conds = time % 60;
        conds = conds < 10 ? "0" + conds:
        conds;
         countEl.innerHTML = `${sec} : ${conds}`
         time--;
  
         const ces = Math.floor(time / 100)
         let nec = time % 60;
         nec = nec < 10 ? "0" + nec:
         nec;
         lilEl.innerHTML = `${ces} : ${nec}`
         time--;
        }
})