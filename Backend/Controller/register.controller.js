import registerUser from "../model/register.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await registerUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ Message: "User already exist" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createUser = new registerUser({
      name: name,
      email: email,
      password: hashPassword,
    });

    await createUser.save();
    res.status(201).json({ Message: "User created Successfully!", createUser:{
      _id: createUser._id,
      name: createUser.name,
      email: createUser.email,
    }});
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal Server Error :(" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await registerUser.findOne({ email });

    if (!user) {
      return res.status(400).json({ Message: "Invalid Email.." });
    }

    const isMatched = await bcryptjs.compare(password, user.password);

    if (!isMatched) {
      return res.status(400).json({ Message: "Invalid password" });
    }

    return res.status(200).json({
      Message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("error", error.message);
    return res.status(400).json({ Message: "Internal Server Error" });
  }
};
