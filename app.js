// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/omega3db');


var applicantSchema = mongoose.Schema({
name       : {type : String, required : true},
bio        : {type : String, required : true},
skills     : {type : String, required : true},
yearsXp    : {type : Number, required : true},
workHereWhy: {type : String, required : true},

});

var applicantInfo = mongoose.model('appInfo', applicantSchema);



// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});


app.get('/success', function(req, res){
	res.sendFile('html/success.html', {root: './public'});

});


// displays a list of applicants
app.get('/applicants', function(req, res){

	// applicantInfo.find({}, function(error, data){
	// 	if (error) {console.log(error) }
	// 		else{ res.send(data)}
	// })
	res.sendFile('html/applicants.html', {root : './public'});
});

app.get('/getapplicants', function(req,res){

	applicantInfo.find({}, function(error, data){
		if (error) {console.log(error) }
			else{ res.send(data)}
	})

});



// creates an applicant
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	console.log(req.body);

	var applicant = new applicantInfo({

		name: req.body.name,
		bio: req.body.bio,
		skills: req.body.skills,
		yearsXp: req.body.years,
		workHereWhy: req.body.why,
})

	applicant.save(function(err, data){

		// res.send(data)
		console.log(data)
	});

	res.redirect('/applicants');
});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})