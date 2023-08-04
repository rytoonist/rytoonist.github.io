/* rytoonist.com                      *
 * JavaScript written by Ryan Boylett */
(function(){
  document.addEventListener('touchstart', function() {}, true);
  
  document.querySelectorAll('[name="mn_pg"]').forEach(function(element) {
    element.addEventListener('change', function() {
      if (this.checked) {
        window.history.replaceState({ page: this.value }, null, window.location.href.split('#')[0] + '#!/' + this.value);
      }
    });
  });
  
  if (hash = window.location.hash.match(/^\#\!\/(.*)$/i)) {
    document.querySelector('[name="mn_pg"][value="' + hash[1] + '"]').click();
  }
})();