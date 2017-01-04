cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-tts.tts",
        "file": "plugins/cordova-plugin-tts/www/tts.js",
        "pluginId": "cordova-plugin-tts",
        "clobbers": [
            "TTS"
        ]
    },
    {
        "id": "com.darktalker.cordova.screenshot.screenshot",
        "file": "plugins/com.darktalker.cordova.screenshot/www/Screenshot.js",
        "pluginId": "com.darktalker.cordova.screenshot",
        "merges": [
            "navigator.screenshot"
        ]
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "cordova-plugin-mopub.MoPub",
        "file": "plugins/cordova-plugin-mopub/www/MoPub.js",
        "pluginId": "cordova-plugin-mopub",
        "clobbers": [
            "window.MoPub"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-tts": "0.2.3",
    "com.darktalker.cordova.screenshot": "0.1.5",
    "cordova-plugin-x-socialsharing": "5.1.3",
    "cordova-plugin-extension": "1.5.1",
    "cordova-plugin-cocoapod-support": "1.2.10",
    "cordova-plugin-mopub": "2.3.0"
};
// BOTTOM OF METADATA
});