/// future add spot 

function onLoad() 
{
    document.addEventListener('deviceready', initApp, false); 
    
    function initApp(){
      
       var ad_units = 
        {
            
            android : "Q9DP2SNRKCQCHT5PWT4T"
        };

    var publisherId = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;
        
    if(FlurryAds) FlurryAds.createBanner( {
    adId: adid.banner, 
    position:FlurryAds.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );
        
   if(FlurryAds){alert('working flurry')}

    }
}
		