/*{{{*/
var MAWidth = 240;
var MAHeight = 70;
var MABorder = 0;
var MABorderColor = '';
var MABackColor = '';
var MATimeOut;
var MALayer = true;
function show_magic_alert(strMsg, show_time)/*{{{*/
{
	if(!show_time){
		show_time = 700;
	}
	//use where layer cannot be used(toolbar etc)
	if(!MALayer)
	{
		alert(strMsg);
		return;
	}
	var oDiv = document.getElementById('magicAlert');
	if(oDiv)
	{
		document.body.removeChild(oDiv);
		clearTimeout(MATimeOut);
	}
	{
		oDiv = document.createElement('DIV');
		oDiv.setAttribute('id', 'magicAlert');
		oDiv.style.position = 'absolute';
		oDiv.style.zIndex = 100;
		oDiv.style.overflow = 'hidden';
		oDiv.style.width = MAWidth+'px';
		//oDiv.style.height = MAHeight+'px';
		oDiv.style.borderWidth = MABorder+'px';
		oDiv.style.borderStyle = 'solid';
		oDiv.style.borderColor = MABorderColor;
		oDiv.style.backgroundColor = MABackColor;

		var oBodySize = wbs_get_body_inner_size();
		var oBodyScroll = wbs_get_body_scroll();
		oDiv.style.top = (oBodyScroll.top + oBodySize.height/2 -MAHeight/2)+'px';
	//	if(oBodySize.width>900) oBodySize.width = 900;
		oDiv.style.left = ((oBodySize.width/2)-MAWidth/2)+'px';

		oDiv.innerHTML = '<table border=0 width=100% height=100%><tr><td align=center id="magicMsg" style="font-size:12px; background-color:#000; filter: Alpha(Opacity=70);"><table border=0 width="220" height="100%"><tr><td style="line-height:5px">&nbsp;</td></tr><tr><td valign="middle"  height="100%" style="color:#fff;font:bold 12px ±¼¸²;line-height:20px;">'+strMsg+'</td></tr><tr><td style="line-height:5px">&nbsp;</td></tr></table></td></tr></table>';
		document.body.appendChild(oDiv);

		MATimeOut = setTimeout(hide_magic_alert, show_time);
	}
}/*}}}*/
function hide_magic_alert()/*{{{*/
{
	var oDiv = document.getElementById('magicAlert');
    oDiv.style.display="none";
	/*if(!oDiv)
		return;

	if(parseInt(oDiv.style.height)<2)
	{
		document.body.removeChild(oDiv);
		return;
	}
	var curHeight = parseInt(oDiv.style.height);
	var curWidth= parseInt(oDiv.style.width);
	var xramount = Math.ceil(curHeight/2);
	var yramount = Math.ceil(curWidth/2);
	var oTd = document.getElementById('magicMsg');
	oDiv.style.height = (curHeight - xramount)+'px';
	oDiv.style.width= (curWidth - yramount)+'px';
	oDiv.style.top = (parseInt(oDiv.style.top) + xramount/2)+'px';
	oDiv.style.left = (parseInt(oDiv.style.left) + yramount/2)+'px';
	var fontsize =  parseInt(oTd.style.fontSize)-1;
	if(fontsize<0) fontsize = 0;
	oTd.style.fontSize = fontsize+'px';
	MATimeOut = setTimeout(hide_magic_alert, 100);*/
}/*}}}*/
function wbs_get_body_inner_size()/*{{{*/
{
	var result = new Object;
	if(self.innerWidth)
	{
		result.width = self.innerWidth;
		result.height = self.innerHeight;
		return result;
	}
	else if (document.documentElement && document.documentElement.clientHeight) // Explorer 6 Strict ëª¨ë“œ
	{
		result.width = document.documentElement.clientWidth;
		result.height = document.documentElement.clientHeight;
		return result;
	}
	else if (document.body) { // ?¤ë¥¸ IE ë¸Œë¼?°ì ?
		result.width = document.body.clientWidth;
		result.height = document.body.clientHeight;
		return result;
	}
}/*}}}*/
function wbs_get_body_scroll()/*{{{*/
{
	var x,y;
	if (self.pageYOffset) // IE ?? ëª¨ë“  ë¸Œë¼?°ì ?
	{
		x = self.pageXOffset;
		y = self.pageYOffset;
	}
	else if (document.documentElement && document.documentElement.scrollTop)// Explorer 6 Strict
	{
		x = document.documentElement.scrollLeft;
		y = document.documentElement.scrollTop;
	}
	else if (document.body)  // IE ë¸Œë¼?°ì ?
	{
		x = document.body.scrollLeft;
		y = document.body.scrollTop;
	}
	var result = new Object;
	result.left = x;
	result.top = y;
	return result;
}/*}}}*/
/*}}}*/
