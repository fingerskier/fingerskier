Session.set("suss_quote", "switching elements, which are modeled by quantum mechanics described by differential equations whose behavior is captured by numerical approximations represented in computer programs executing on computers composed of ");
Session.set("mode", "home");

Meteor.setInterval(function() {
	the_quote = Session.get("suss_quote");
	
	the_quote = the_quote.slice(1) + the_quote[0];
	
	Session.set("suss_quote", the_quote);
}, 100);

Template.main.events({
	'click #home_tab': function () {
		Session.set("mode", "home");
	},
	'click #muse_tab': function () {
		Session.set("mode", "muse");
	},
	'click #code_tab': function () {
		Session.set("mode", "code");
	},
	'click #calc_tab': function () {
		Session.set("mode", "calc");
	},
	'click #CV_tab': function () {
		Session.set("mode", "CV");
	}
});

Template.main.home_active = function() {
	if (Session.get("mode") === "home") return "active"
	else return "";
}

Template.main.muse_active = function() {
	if (Session.get("mode") === "muse") return "active"
	else return "";
}

Template.main.code_active = function() {
	if (Session.get("mode") === "code") return "active"
	else return "";
}

Template.main.calc_active = function() {
	if (Session.get("mode") === "calc") return "active"
	else return "";
}

Template.main.CV_active = function() {
	if (Session.get("mode") === "CV") return "active"
	else return "";
}


Template.main.home_mode = function() {
	if (Session.get("mode") === "home") return true
	else return false;
}

Template.main.muse_mode = function() {
	if (Session.get("mode") === "muse") return true
	else return false;
}

Template.main.code_mode = function() {
	if (Session.get("mode") === "code") return true
	else return false;
}

Template.main.calc_mode = function() {
	if (Session.get("mode") === "calc") return true
	else return false;
}

Template.main.CV_mode = function() {
	if (Session.get("mode") === "CV") return true
	else return false;
}


Template.main.sussman = function() {
	return Session.get("suss_quote").slice(120);
}
