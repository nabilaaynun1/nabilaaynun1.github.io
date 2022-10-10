$(document).ready(function() {
  var currentSection = 0;
  $('#area').hide();
  $('#fitur li a').click(function() {       
      
      $('#fitur li a').removeClass('active');
      $(this).addClass('active');
      
      var href = $(this).attr('href');
      $('#producttype>div').hide();
      
      $(href).show();
            
      if(currentSection == 0){
          $('#area').slideToggle(200);
          currentSection = href;
      }else if(currentSection == href){
           $('#area').slideToggle(200);
           currentSection = 0;    
      }else{
          currentSection = href;
      }
      return false;
  });
});