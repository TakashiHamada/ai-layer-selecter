(function(){
    
    // "let" will be error in ai2023
    var TARGET_IDX = 6;
    //                0      1      2        3      4     5     6     7
    var languages = ["ja", "en", "zh-tw", "zh-cn", "ko", "es", "fr", "de"]; 
    
    var textLayer = getLayer("texts");
    var baseLayer = getLayer("bases");
    
    if (textLayer === null || baseLayer === null)
        return;
    
    for (var idx = 0; idx < languages.length; idx++) {
        textLayer.layers.getByName(languages[idx]).visible = idx === TARGET_IDX;
        baseLayer.layers.getByName(languages[idx]).visible = idx === TARGET_IDX;
    }
    
    // --
    function getLayer(name) {
        try{
            return  app.activeDocument.layers.getByName(name);
        }catch(error){
            return null;
        }
    }
})()