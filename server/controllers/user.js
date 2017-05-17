var mongoose = require('mongoose');
var User = mongoose.model('Users');

module.exports = (function() {
	return {
		create: function(req, res) {
			var newUser = new User(req.body);
			newUser.save(function(err, data) {
				if(err)
					console.log("user 10", err)
				else
					res.json(data)
			})
		},

		read: function(req, res) {
			User.find({}, function(err, data) {
				if(err)
					console.log("user 19", err)
				else
					res.json(data)
			})
		},

		readOne: function(req, res) {
			User.find({ _id: req.params.id }, function(err, data) {
				if(err)
					console.log("user 28", err);
				else
					res.json(data);
			})
		},

		updateTopics: function(req, res) {
			console.log(req.body.topic);
			User.findByIdAndUpdate(
				req.params.id,
				{$set: {topics: req.body.topics}},
				{new : true},
				function(err, data){
					if(err)
						console.log("user 42", err)
					else
						res.json(data);
				}
			)
		},

		updatePosts: function(req, res) {
			User.findByIdAndUpdate(
				req.params.id,
				{$set: {posts: req.body.posts}},
				{new : true},
				function(err, data) {
					if(err)
						console.log("user 56", err);
					else
						res.json(data);
				})
		},

		updateComments: function(req, res) {
			User.findByIdAndUpdate(
				req.params.id,
				{$set: {comments: req.body.comments}},
				{new : true},
				function(err, data) {
					if(err)
						console.log("user 69", err);
					else
						res.json(data);
				})
		}
	}
})();
