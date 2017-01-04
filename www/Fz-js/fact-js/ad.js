/// future add spot 

function onLoad() 
{
    document.addEventListener('deviceready', initApp, false); 
    
    function initApp(){
      
       var ad_units = 
        {
            ios : "publisher_id_for_ios_xxx",
            android : "d8120da6a248471aac7c46408bca3e9a"
        };

    var publisherId = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
        
    if(MoPub) MoPub.createBanner( publisherId );

    }
}
		