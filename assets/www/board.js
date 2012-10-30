var messages = [
	{ "text": "HIGHWAY\nSTRIPING\nAHEAD" },
	{ "text": "SLOW\nMOVING\nTRAFFIC" },
	{ "text": "  NEW\n  LANE\nPATTERN" },
	{ "text": "NIGHTLY\nLANE\nCLOSURES" },
	{ "text": "CAUTION!\nZOMBIES!\nAHEAD!!!" },
	{ "text": "ZOMBIES\nIN AREA!\n  RUN" },
	{ "text": "ZOMBIE\nATTACK!!\nEVACUATE" },
	{ "text": "THE END\nIS NEAR!\n!!!!!!!!" },
	{ "text": "TRAPPED\nIN SIGN\nFACTORY" },
	{ "text": "ALL YOUR\nSIGN ARE\n=> TO US" },
	{ "text": "\n PWNED\n" }
];

var displayMessage = function(message)
{
	var letters;
	var line;
	var listItems;
	// message = message.replace(/\x20/g, '&nbsp;');
	parts = message.split("\n");

	if(parts.length != 3)
	{
		return;
	}

	for(line in parts)
	{
		listItems = document.querySelectorAll('#row-' + (parseInt(line, 10) + 1) +  ' li');

		letters = strpad(parts[line], 8);

		for(var i = 0; i < letters.length; i++)
		{
			var c = letters.charAt(i);

			if(c == ' ')
			{
				c = '&nbsp;';
			}

			listItems[i].innerHTML = c;
		}
	}
};

var STR_PAD_LEFT = 1;
var STR_PAD_RIGHT = 2;
var STR_PAD_BOTH = 3;
 
function strpad(str, len, pad, dir) {
 
	if (typeof(len) == "undefined") { len = 0; }
	if (typeof(pad) == "undefined") { pad = ' '; }
	if (typeof(dir) == "undefined") { dir = STR_PAD_RIGHT; }
 
	if (len + 1 >= str.length) {
 
		switch (dir){
 
			case STR_PAD_LEFT:
				str = Array(len + 1 - str.length).join(pad) + str;
			break;
 
			case STR_PAD_BOTH:
				var right = Math.ceil((padlen = len - str.length) / 2);
				var left = padlen - right;
				str = Array(left+1).join(pad) + str + Array(right+1).join(pad);
			break;
 
			default:
				str = str + Array(len + 1 - str.length).join(pad);
			break;
 
		} // switch
 
	}
 
	return str;
 
}


displayMessage(messages[Math.floor(Math.random() * ((messages.length - 1) - 0 + 1)) + 0].text);
setInterval(function(){
	var random = Math.floor(Math.random() * ((messages.length - 1) - 0 + 1)) + 0;
	displayMessage(messages[random].text);
}, 4500);