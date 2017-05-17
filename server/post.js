var mongoose = require('mongoose');
var Post = mongoose.model('Posts');

module.exports = (function() {
	return {
		create: function(req, res) {
			var newPost = new Post(req.body);
			newPost.save(function(err, data) {
				if(err)
					console.log("post 10", err)
				else
					res.json(data)
			})
		},

		read: function(req, res) {
			Post.find({topic_id: req.params.id}, function(err, data) {
				if(err)
					console.log("post 19", err)
				else
					res.json(data)
			})
		},

		update: function(req, res) {
			Post.findByIdAndUpdate(
				req.params.id,
				{$set: {comments: req.body.comments}},
				{new : true},
				function(err, data){
					if(err)
						console.log("post 32", err)
					else
						Post.find({topic_id: data.topic_id }, function(err, data) {
							if(err)
								console.log("post 36", err)
							else
								res.json(data);
						})
				}
			)
		}
	}
})();
