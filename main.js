$(function(){
    var lag1 = 0;
    var lag2 = 0;

    $(document).keypress(function(e) {
        
        if(e.which == 119 || e.which == 87) {
          lag1 = lag1 + 1;
        } 
        
        if(e.which == 83 || e.which == 115) {
            lag1 = lag1 - 1;

        }

        if(e.which == 112 || e.which == 80) {
            lag2 = lag2 + 1;

          } 
          
          if(e.which == 108 || e.which == 76) {
              lag2 = lag2 - 1;

          }
          // nullstiller
          if(e.which == 110 || e.which == 78) {
            lag1 = 0;
            lag2 = 0;
        }
    
        // Fullskjerm
        if(e.which == 102 || e.which == 70) {
          if(isFullscreen == false) {
            go_full_screen();
            isFullscreen = true;
          } else if(isFullscreen == true) {
            exitPromise = document.exitFullscreen();
            isFullscreen = false;
          }
          
        }

          // Oppdaterer score
          $(".lag1").html(lag1);
          $(".lag2").html(lag2);


      });

      // Show/hide the mouse
      $(document).mousemove(function(){
        $('html').css({cursor: 'auto'});
        
        // Hide mouse
        setTimeout(function() {
            $('html').css({cursor: 'none'});    
        }, 5000);
      });
    
      var isFullscreen = false;
      
      function go_full_screen(){
        var elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }
    }
      
    
    document.getElementById('getval').addEventListener('change', readURL, true);
    function readURL(){
       var file = document.getElementById("getval").files[0];
       var reader = new FileReader();
       reader.onloadend = function(){
          document.getElementById('background-img').style.backgroundImage = "url(" + reader.result + ")";        
       }
       if(file){
          reader.readAsDataURL(file);
        }else{
        }
    }
    

    
      
      

      
        
    
});