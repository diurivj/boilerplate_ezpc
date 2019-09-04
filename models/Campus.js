const mongoose = require('mongoose');

const campusSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    teachers: {
      type: [String],
      require: true
    },
    course: {
      type: String,
      enum: ['web', 'ux', 'data']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Campus', campusSchema);
