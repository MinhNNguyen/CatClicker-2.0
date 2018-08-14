var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/golden.jpg');
	this.imgAttribution = ko.observable('https://www.google.com/');
	this.nicknames = ko.observableArray([ "Teddy Bear", "Meo khong phai cho", "Only know eating" ])
	this.level = ko.computed(function() {
		var clicks = this.clickCount();
		if ( clicks <= 4) {
			return "Infant";
		} else if ( clicks <= 10) {
			return "Teenager";
		} else {
			return "Senior";
		}
	}, this);
}

var ViewModel = function() {

	this.currentCat = ko.observable(new Cat() );

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};

}

ko.applyBindings( new ViewModel() );