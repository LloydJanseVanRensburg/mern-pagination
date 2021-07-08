const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  author: {
    type: String,
    required: [true, "Please provide an author"],
  },
  body: {
    type: String,
    required: [true, "Please provide a body"],
  },
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
    minlength: 8,
    select: false,
  },
  userType: { 
    type: String, 
    enum : ['USER','ADMIN', 'LEAGUE_ADMIN'], 
    default: 'user' 
  },
  userStatus: { 
    type: String, 
    enum : ['CREATED','VERIFIED', 'IN_REVIEW', 'REMOVED'], 
    default: 'CREATED' 
  }, 
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  created: {type: Date, default: Date.now},
  updated: {type: Date, required: false, default: Date.now},

});

const leagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please league name"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User Id is mandatory"],
  },
  description: {
    type: String,
  },
  leagueStatus: { 
    type: String, 
    enum : ['CREATED','IN_PROGRESS', 'EXPIRED'], 
    default: 'CREATED' 
  },
  leagueCategory: { 
    type: String, 
    enum : ['CRICKET','FOOT_BALL', 'BASKET_BALL'], 
    default: 'CREATED' 
  }, 
  created: {type: Date},
  expiryDate: {type: Date},
  updated: {type: Date, required: false, default: Date.now},
});

const optionSchema = new mongoose.Schema(
  {
    name: {type: String, unique: true, required: true},
  },
);


const questionSchema = new mongoose.Schema({
  name: {type: String, unique: true, required: true},
  leagueId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "League Id is mandatory"],
  },
  questionType: { 
    type: String, 
    enum : ['TEXT','SELECT', 'RADIO_BUTTON', 'MULTI_SELECT'], 
    default: 'CREATED' 
  },
  options: [optionSchema],
  correctAnswerValue: {type: Number, required: true},
  wrongAnswerValue: {type: Number, required: true, default: 0}, 
  correctAnswer: {type: String, unique: true, required: true},
  isAnswerUpdated: {type: Boolean, default: false},
  isDeleted: {type: Boolean, default: false},
  created: {type: Date},
  updated: {type: Date, required: false, default: Date.now},
});

const selectedAnswers = new mongoose.Schema(
  {
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "question Id is mandatory"],
    },
    option: {
      type: String,
      required: [true, "Option is mandatory"]
    }
  },
);
const userLeagueParticipation =new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "User Id is mandatory"],
  },
  leagueId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "League Id is mandatory"],
  },
  questionsAnswered: [selectedAnswers],
  created: {type: Date},
  updated: {type: Date, required: false, default: Date.now},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
