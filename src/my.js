export function animate(){
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.myhidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= -200) {
        elems[i].className = elems[i].className.replace(
          'myhidden',
          'animate'
        );
      }
    }
  }
  return {
    init: init
  };
};
