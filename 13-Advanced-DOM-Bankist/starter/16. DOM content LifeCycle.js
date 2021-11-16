// TODO LifeCycle of DOM Events
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page loaded!', e);
});

/* window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      console.log(e);
      e.returnValue = '';
    });
     */
