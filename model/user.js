const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },

		firstname: { type: String, required: true },
			lastname: { type: String, required: true },
			mobileno: { type: Number, required: true },
			address: { type: String, required: true }
	},
	{ collection: 'users' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model
