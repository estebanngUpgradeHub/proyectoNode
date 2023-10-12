const User = require("../models/user.model");
const { validateEmailDB, validatePassword } = require("../../utils/validator");
const bycrypt = require("bcrypt");
const { generateToken } = require("../../utils/jwt");
