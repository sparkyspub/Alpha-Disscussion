var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  name :String,
  created_at :{ type: Date, default: Date.now },
  topics :[{ type: mongoose.Schema.Types.Mixed, ref: "Topics" }],
  posts :[{ type: mongoose.Schema.Types.Mixed, ref: "Posts" }],
  comments :[{ type: mongoose.Schema.Types.Mixed, ref: "Comments"}]
})

var topicSchema = mongoose.Schema({
  name :String,
  user_id :{ type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  category :String,
  title :String,
  description :String,
  created_at :{ type: Date, default: Date.now },
  posts :Number
})
var postsSchema = mongoose.Schema({
  name :String,
  user_id :{ type: mongoose.Schema.Types.ObjectId, ref: "Users"},
  topic_id :{ type: mongoose.Schema.Types.ObjectId, ref: "Topics" },
  comments :[{ type: mongoose.Schema.Types.Mixed, ref: "Comments" }],
  post :String,
  like :Number,
  dislike :Number,
  created_at :{ type: Date, default: Date.now}
})
var commentsSchema = mongoose.Schema({
  name :String,
  user_id :{ type: mongoose.Schema.Types.ObjectId, ref: "Users"},
  topic_id :{ type: mongoose.Schema.Types.ObjectId, ref: "Topics"},
  post_id :{ type: mongoose.Schema.Types.ObjectId, ref: "Posts"},
  comment :String,
  created_at :{ type: Date, default: Date.now}
})
mongoose.model("Users", userSchema);
mongoose.model("Topics", topicSchema);
mongoose.model("Posts", postsSchema);
mongoose.model("Comments", commentsSchema);
