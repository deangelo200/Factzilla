/// Shared menu bar code
var menuBar =             
                        '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/favorite.png">'+
                           '<a href="favorite.html" class="external">Favorite</a>'+
                        '</li>'+
                        '<li class="side-menu-item">'+
                            '<img class="menu-icon" src="Fz-imgs/menu-img/africa.png">'+
                           '<a href="africa.html" class="external">Africa</a>'+
                        '</li>'+
                        '<li class="side-menu-item">'+
                            '<img class="menu-icon" src="Fz-imgs/menu-img/america.png">'+
                           '<a href="america.html" class="external">U.S.A</a>'+
                        '</li>'+ 
                        '<li class="side-menu-item">'+
                            '<img class="menu-icon" src="Fz-imgs/menu-img/penguin.png">'+
                           '<a href="antarctica.html" class="external">Antarcita</a>'+
                        '</li>'+
                           '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/asia.png">'+
                           '<a href="asia.html" class="external">Asia</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/animal.png">'+
                           '<a href="animal.html" class="external">Animal</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/heart.png">'+
                           '<a href="body.html" class="external">Body</a>'+
                        '</li>'+
                        '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/celebrities.png">'+
                           '<a href="celebrities.html" class="external">Celebrity</a>'+
                        '</li>'+ 
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/company.png">'+
                           '<a href="companies.html" class="external">Companies</a>'+
                        '</li>'+
                        '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/weed.png">'+
                           '<a href="drug.html" class="external">Drug</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/fries.png">'+
                           '<a href="food.html" class="external">Food</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/carriage.png">'+
                           '<a href="history.html" class="external">History</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/dice.png">'+
                           '<a href="random.html" class="external">Random</a>'+
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/devices.png">'+
                           '<a href="technology.html" class="external">Technology</a>'+
                        '</li>'+
                        '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/flask.png">'+
                           '<a href="science.html" class="external">Science</a>'+
                        '</li>'+
                        
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="Fz-imgs/menu-img/setting.png">'+
                           '<a href="setting.html" class="external">Settings</a>'
                        /*
                        '</li>'+
                         '<li class="side-menu-item">'+
                          '<img class="menu-icon" src="img/menu/rocket.png">'+
                           '<a href="favorite.html" class="external">Univers</a>'+
                        '</li>' */

$(".side-menu").append(menuBar);



// Initialize your app
var myApp = new Framework7();


// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Code use to control properties of the slides \\
var mySwiper = myApp.swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  paginationHide: false,
  paginationClickable: true,
  nextButton: '.fa-forward',
});    

function localFact(animal_fact_)
{
    for(var i = 0; i<=200; i++)
    {
     
        if(localStorage.getItem(`${animal_fact_+i}`)!=undefined)
        {
        var example = 
                    "<div class='swiper-slide'>" +
                    "<span>"+localStorage.getItem(`${animal_fact_+i}`)+"</span>"+
                    "</div>";    
            $(".swiper-wrapper").prepend(example);
        }
    }
   
    mySwiper.updateContainerSize() 
    mySwiper.updateSlidesSize()
}


$(document).ready(function()
{
  
    localFact("animal_fact_");
    localFact("africa_fact_");
    localFact("america_fact_");
     localFact("antarctica_fact_");
    localFact("asia_fact_");
     localFact("body_fact_");
    localFact("celebrities_fact_");
     localFact("company_fact_");
    localFact("drug_fact_");
     localFact("food_fact_");
    localFact("history_fact_");
     localFact("random_fact_");
    localFact("science_fact_");
     localFact("technology_fact_");
     
   
   
     
})

    




   
//// Scared functionality code 

/// Scared functionality for the side menu bar 

//opening the panels
 $$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
        mySwiper.lockSwipes();
    });

// closing the panels
  $$('.panel-close').on('click', function (e) {
    myApp.closePanel();
    mySwiper.unlockSwipes();
    });

    
///  Share fact to social media   
function shareFact(){
    var imageLink;
        console.log("Calling from CapturePhoto");
        navigator.screenshot.save(function(error, res){
            if(error){
                console.log(error);
            }else{
                $(".sharing").fadeIn(500).fadeOut(3000);
                console.log('ok',res.filePath);
                imageLink = res.filePath;
                window.plugins.socialsharing.share(null,null, 'file://'+imageLink, null);
                
                
            }
        }, 'jpg',100,'myScreenShot');
    }

   
    

// Function that allow you to copy the text    
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(".fa-files-o").click(function(){
    copyToClipboard(".swiper-slide-active");
    $(".text-copied").fadeIn(500).fadeOut(3000);
    
});




var temp = true;
mySwiper.on('slideChangeEnd',function(){
    
    $("#bottom-btn-copy-hidden").fadeIn(100);
    $("#bottom-btn-forward-hidden").fadeIn(100);
    $("#bottom-btn-share-hidden").fadeIn(100);
    $(".fa-microphone").css("opacity","1");
    
    if(localStorage.getItem("checkBoxValue")=="true"){
        text_to_speak();
    }
   
    
})

// Handle Cordova Device Ready Event

  $("#bottom-btn-forward-hidden").click(function(){
      mySwiper.slideNext();
  });

 function text_to_speak(){
         mySwiper.lockSwipes();
        var speak = $(".swiper-slide-active").text();
          TTS
            .speak(speak, function () {
             mySwiper.unlockSwipes();
        }, function (reason) {
            
        });
             
     
 }






   
    




