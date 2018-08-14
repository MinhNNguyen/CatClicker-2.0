var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/golden.jpg');
	this.imgAttribution = ko.observable('https://www.google.com/');
	this.nicknames = ko.observableArray([
		{nickname: "Teddy Bear"},
		{nickname: "Meo khong phai cho"},
		{nickname: "Only know eating"}])

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

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

ko.applyBindings( new ViewModel() );