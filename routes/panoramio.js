var pan = require('http://www.panoramio.com/map/get_panoramas.php?set=public&from=0&to=20&minx=-180&miny=-90&maxx=180&maxy=90&size=medium&mapfilter=true');
//var palettes = require('../palettes.json');
exports.Panoramio = function(req, res) {
	//res.send('Your random palette is called: ' + randomPalette['title']);
	
	//var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	res.json(pan);
}