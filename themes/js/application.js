	var	panel = "<div data-role='panel' id='defaultPanel' data-display='overlay' class='myPanel'>" +
			"<ul id='accordion' class='accordion'>" +
			  "<li><a href='index.html' class='link'>Dashboard</a></li>" +
			  "<li>" +
			    "<div class='link ui-btn-icon-right ui-icon-carat-d'>Energy Use</div>" +
			    "<ul class='submenu'>" +
			      "<li><a href='energy_use_now.html'>Energy Use Now</a></li>" +
			      "<li><a href='home_report.html'>Home Report</a></li>" +
			      "<li><a href='history.html'>History</a></li>" +
			    "</ul>" +
			  "</li>" +
			  "<li>" +
			    "<div class='link ui-btn-icon-right ui-icon-carat-d'>Devices</div>" +
			    "<ul class='submenu'>" +
			      "<li><a href='smart_plugs.html'>Smart Plugs</a></li>" +
			      "<li><a href='add_devices.html'>Add Devices</a></li>" +
			    "</ul>" +
			  "</li>" +
			    "<li><a href='profile.html' class='link'>Profile</a></li>" +
			    "<li><a href='log_out.html' class='link'>Log Out</a></li>" +
			"</ul>" +
		"</div>";
		
$(document).one("pagebeforecreate", function(){
	$.mobile.pageContainer.prepend(panel);
	$("#defaultPanel").panel();
});

	
$(document).on('swiperight', function(event, ui){
	$('#defaultPanel').panel('open');
});


$(function() {

	$.backstretch("themes/images/bg2.png");

	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

