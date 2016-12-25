<!-- Add events on the pattern 'yyyy-mm-dd' -->
var events = {
	'2016-12-25' : "1. juledag!"
};

function withLeadingZero(s){
	if( s < 10){
		return "0" + s;
	} else {
		return s;
	}
};

function getTodaysEvent(d){
	var year = d.getFullYear();
	var month = withLeadingZero(d.getMonth() + 1);
	var day = withLeadingZero(d.getDate());

	var today = year + "-" + month + "-" + day;
	var event = events[today];
	if( event === undefined ){
		return "";
	} else {
		return event;
	}
};
