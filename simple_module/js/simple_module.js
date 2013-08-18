(function($) {
    $(document).ready(function() {
      $('#page-title').click(function(){
        console.log('hello');
        $('#page-title').css('color', 'blue');
      });
    });
}(jQuery));