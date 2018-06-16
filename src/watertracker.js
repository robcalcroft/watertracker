(function() {
  var CURRENT_GLASSES = 'wtCurrentGlasses';
  var LAST_GLASS_DATE = 'wtLastGlassDate';

  function renderGlasses() {
    document.getElementById('currentGlasses').innerText = localStorage.getItem(CURRENT_GLASSES) || 0;
  }

  function renderLastUpdate() {
    var lastGlassDate = localStorage.getItem(LAST_GLASS_DATE);
    document.getElementById('lastGlass').innerText =
      (lastGlassDate ? 'Your last glass of water was ' + dateFns.distanceInWordsToNow(new Date(Number(lastGlassDate))) + ' ago' : false) ||
      'No previous glasses';
  }

  document.getElementById('addGlass').addEventListener('click', function() {
    var currentGlasses = Number(localStorage.getItem(CURRENT_GLASSES));
    var lastGlassDate = localStorage.getItem(LAST_GLASS_DATE);
    if (lastGlassDate === null || dateFns.isBefore(Number(lastGlassDate), new Date().setHours(0, 0, 0))) {
      currentGlasses = 0;
    }
    localStorage.setItem(CURRENT_GLASSES, Number.isNaN(currentGlasses) ? 0 : currentGlasses + 1);
    localStorage.setItem(LAST_GLASS_DATE, new Date().getTime());
    renderGlasses();
    renderLastUpdate();
  });

  renderGlasses();
  renderLastUpdate();
})();
