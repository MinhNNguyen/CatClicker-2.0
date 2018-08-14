// List of avaialbe cats to be selected
var initialCats = [
	{
		clickCount: 0,
		name: 'Golden',
		imgSrc: 'img/golden.jpg',
		imgAttribution: 'https://www.google.com/',
		nicknames: ["Teddy Bear", 
					"Meo khong phai cho", 
					"Only know eating"]
	},
	{
		clickCount: 0,
		name: 'Samoyed',
		imgSrc: 'img/Samoyed.jpg',
		imgAttribution: 'https://www.google.com/',
		nicknames: ["White bear",
					"Happy face", 
					"I gotta catch you all"]
	},
	{
		clickCount: 0,
		name: 'Shiba',
		imgSrc: 'img/shiba.jpg',
		imgAttribution: 'https://www.google.com/',
		nicknames: ["Stupid face", "Cute character", "So cute"]
	}];

// Cat Model to store the data of the cat
var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observableArray(data.nicknames)

	// Computed function to show different level of the cat
	// depends on the number of clicks
	this.level = ko.computed(function() {
		var clicks = this.clickCount();
		if ( clicks <= 4) {
			return "Infant";
		} else if ( clicks <= 10) {
			return "Teenager";
		} else {
			return "Monster";
		}
	}, this);
}

// View Model to process the interaction between view and model
var ViewModel = function() {
	// Using the extra pointer self to make sure it is always
	// referred to the current viewModel
	var self = this;
	this.catList = ko.observableArray([]);

	initialCats.forEach(function (catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount()
		 + 1);
	};

	this.switchCat = function() {
		self.currentCat(this);
	}
}

ko.applyBindings( new ViewModel() );