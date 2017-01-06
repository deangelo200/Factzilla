/// future add spot 

function onLoad() 
{
    document.addEventListener('deviceready', initApp, false); 
    
    function initApp(){
      
       var ad_units = 
        {
            
            android : "d8120da6a248471aac7c46408bca3e9a"
        };

    var publisherId = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
        
    if(MoPub) MoPub.createBanner( {
    adId: adid.banner, 
    position:MoPub.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );
        
   

    }
}
		