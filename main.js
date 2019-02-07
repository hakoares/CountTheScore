$(function(){
    var lag1 = 0;
    var lag2 = 0;
    var isFullscreen = false;
    var isHelp = false;
    var themeDefault = true;


    $(document).keypress(function(e) {
        // Increace score team 1
        if(e.which == 119 || e.which == 87) {
          lag1 = lag1 + 1;
        } 

        // Decrease score team 1
        if(e.which == 83 || e.which == 115) {
            lag1 = lag1 - 1;

        }
        // Increace score team 1
        if(e.which == 112 || e.which == 80) {
            lag2 = lag2 + 1;

          } 
          // Decrease score team 1
          if(e.which == 108 || e.which == 76) {
              lag2 = lag2 - 1;

          }
          // Reset points
          if(e.which == 110 || e.which == 78) {
            lag1 = 0;
            lag2 = 0;

        }

         // show help: H
         if(e.which == 104 || e.which == 72) {
          if(isHelp == true) {
            document.getElementById('help-alert').style.display = "none";
            isHelp = false;
          } else if(isHelp == false) {
            showHelp();
            isHelp = true;
          }
      }

      // Change theme: T
      if(e.which == 84 || e.which == 116) {
        if(themeDefault == true) {
          goDark();
          themeDefault = false;

        } else if(themeDefault == false) {
            goLight();
            themeDefault = true;
          }
        }
    
        // Change theme: 1
      if(e.which == 49) {
        document.getElementById('team1').innerHTML = "HOME";        
        document.getElementById('team2').innerHTML = "AWAY";        
        document.getElementById('background-img').style.backgroundImage = "url(img/foot.jpg)";
        }

         // Change theme: 2
      if(e.which == 50) {
        document.getElementById('background-img').style.backgroundImage = "url(img/gtm.jpg)";
        document.getElementById('team1').innerHTML = "TEAM 1";        
        document.getElementById('team2').innerHTML = "TEAM 2";  
        }
    
        // Go fullscreen
        if(e.which == 102 || e.which == 70) {
          if(isFullscreen == false) {
            go_full_screen();
            isFullscreen = true;
          } else if(isFullscreen == true) {
            exitPromise = document.exitFullscreen();
            isFullscreen = false;
          }

        }

          // Update score after key input
          $(".lag1").html(lag1);
          $(".lag2").html(lag2);


      });


      function goDark() {
        var x = document.getElementsByClassName("theme");
        var i;
          for (i = 0; i < x.length; i++) {
            x[i].style.color = "#151515";
          }
      }
      function goLight() {
        var x = document.getElementsByClassName("theme");
        var i;
          for (i = 0; i < x.length; i++) {
            x[i].style.color = "#fff";
          }
      }
      
      function showHelp() {
        document.getElementById('help-alert').style.display = "block";
          
      }

      // Show/hide the mouse
      $(document).mousemove(function(){
        $('html').css({cursor: 'auto'});
        
        // Hide mouse
        setTimeout(function() {
            $('html').css({cursor: 'none'});    
        }, 5000);
      });
    
      // go fullscreen
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
       var file = document.getElementById('getval').files[0];
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