// import Questions from "../models/questionSchema.js";
import Register from "../models/registerSchema.js";
import Post from "../models/postsSchema.js";

/** get all result */
export async function getDetails(req, res) {
    try {
        const result = await Register.find();
        res.json(result)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
export async function storeDetails(req, res) {
    try {
        const { dp, fname, lname, mnum, email, password, cpassword, gender } = req.body;
        if (!email && !password && !cpassword && fname) throw new Error('Data Not Provided...!');
        const user = await Register.findOne({ email });

        if (!user) {
            await Register.create({ fname, lname, mnum, email, password, cpassword, dp, gender })
            res.json("saved")
        }
        else {
            res.json(email)
        }
    } catch (error) {
        res.json({ error })
    }
}

/** delete all result */
export async function dropDetails(req, res) {
    try {
        await Register.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" })
    } catch (error) {
        res.json({ error })
    }
}

export async function inputDetails(req, res) {
    try {
        const { email, password } = req.body
        const user = await Register.findOne({ email: email })
        if (user) {
            if (password === user.password) (
                res.json({ msg: 'logging' })
            )
            else {
                res.send({ msg: "incorrect" });
            }
        } else {
            res.send({ msg: "invalid" });
        }
    } catch (error) {
        res.json({ error })
    }
}

export async function addPost(req, res) {
    try {
        const { username, topic, title, description, image, createdat } = req.body;
        // if (!email && !password && !cpassword && fname) throw new Error('Data Not Provided...!');

        await Post.create({ username, topic, title, description, image })
        res.json({ msg: "post added" })
    } catch (error) {
        res.json({ error })
    }
}
