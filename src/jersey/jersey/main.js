console.group('jersey');
console.log('fragmentElement', fragmentElement);
console.log('configuration', configuration);

function convertRGB(rgb) {
    if(rgb === undefined || rgb == "") {
        rgb = "rgb(255, 255, 255)";
    }    
    var comp = rgb.split("(", 2)[1].split(")", 1)[0].split(",");
    var hex = "#" + dec2hex(comp[0]) + dec2hex(comp[1]) + dec2hex(comp[2]);
    console.log("Convert " + rgb + " to " + hex);
    return hex;
}

function dec2hex(i) {
    var hex = parseInt(i).toString(16);
    if(hex.length == 1) {
        return "0" + hex;
    }
    return hex;
}

function loadJersey() {

    var shirtText = configuration.shirtText;
    var shirtColor = convertRGB(configuration.shirtColor.rgbValue);
    var sleeveColor = convertRGB(configuration.sleeveColor.rgbValue);
    var shirtStyle = configuration.shirtStyle;
    var shirtStyleColor = convertRGB(configuration.shirtStyleColor.rgbValue);
    var shirtStyleDirection = configuration.shirtStyleDirection;
    var textColor = convertRGB(configuration.textColor.rgbValue);

    var imgNodeElt = fragmentElement.querySelector('.jerseyImg'); 

    var jerseyImgSrc =  SoccerJersey.draw({  
        "shirtText": shirtText,
        "shirtColor": shirtColor,
        "sleeveColor": sleeveColor,
        "shirtStyle": shirtStyle,
        "shirtStyleColor": shirtStyleColor,
        "shirtStyleDirection": shirtStyleDirection,
        "textColor": textColor
      });

/*
    var jerseyImgSrc = SoccerJersey.draw({
        "shirtText":"Rakuten",
        "shirtColor":"#081868",
        "sleeveColor":"#081868",
        "shirtStyle":"striped-thick",
        "shirtStyleColor":"#84112b",
        "textColor":"#fff"
    })
*/
    imgNodeElt.setAttribute('src', jerseyImgSrc);

}

var scriptId = 'soccer-jersey';
var scriptSrc = 'https://cdn.jsdelivr.net/npm/soccer-jersey/dist/soccer-jersey.min.js';
loadScript(scriptSrc, scriptId);

action(loadJersey, scriptId);

console.groupEnd();
