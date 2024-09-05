const userModel = require('../model/User')
class SiteController {
    //get
    getHome(req, res) {
        return res.status(200).json('this is home page');

    }
    async getAllData(req, res) {
        try {

            const users = await userModel.find();
            res.status(200).json({ mess: 'tim users thanh cong', users: users });

        } catch (error) {
            res.status(500).json({ error: `${error}` });
        }
    }
    async getDataById(req, res) {
        try {
            const id = req.query.id;
            if (!id) {
                return res.status(404).json({ error: 'thieu id' });
            }
            const user = await userModel.findById(id);

            if (user) {
                return res.status(200).json({ mess: 'tim user thanh cong', user: user });
            }

            return res.status(404).json({ message: 'Không tìm thấy user' });

        } catch (error) {
            res.status(500).json({ error: `${error}` });
        }
    }
    //post
    async createUser(req, res) {
        try {
            const { name, age, job } = req.body;

            if (!name || !age || !job) {
                return res.status(404).json({ error: 'thieu Name hoac age hoac job ' });
            }
            const user = await userModel.create({ name, age, job });

            return res.status(201).json({ mess: `tạo user thành công`, user: user });

        } catch (error) {
            res.status(500).json({ error: `${error}` });
        }
    }
    //put
    async updateUser(req, res) {
        try {

            const data = req.body;
            if (!data.id) {
                return res.status(404).json({ error: 'thieu id' });
            }
            const user = await userModel.findById(data.id);
            if (user) {
                const oldUser = user;
                const newUser = await userModel.findByIdAndUpdate(data.id, { name: data.name ? data.name : oldUser.name, age: data.age ? data.age : oldUser.age, job: data.job ? data.job : oldUser.job }, { new: true, runValidators: true })
                return res.status(201).json({ mess: 'update thanh cong', newUser: newUser });
            }
            return res.status(404).json({ error: 'ko tim thay user' });


        } catch (error) {
            res.status(500).json({ error: `${error}` });
        }
    }
    //delete
    async deleteUser(req, res) {
        try {

            const id = req.body.id;
            if (!id) {
                return res.status(404).json({ error: 'thieu id' });
            }
            const user = await userModel.findByIdAndDelete(id);
            if (user) {

                return res.status(200).json({ mess: 'delete thanh cong', user: user });
            }
            return res.status(404).json({ mess: 'ko tim user', user: user });

        } catch (error) {
            res.status(500).json({ error: `${error}` });
        }
    }
}
module.exports = new SiteController();