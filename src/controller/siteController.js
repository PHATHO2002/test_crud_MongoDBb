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
                return res.status(400).json({ error: 'thieu id' });
            }
            const user = await userModel.findById(id);

            if (user) {
                return res.status(200).json({ mess: 'tim user thanh cong', user: user });
            }

            return res.status(400).json({ message: 'Không tìm thấy user' });

        } catch (error) {
            res.status(500).json({ error: `${error}` });
        }
    }
    //post
    async createUser(req, res) {
        try {
            const { age, name, job } = req.body;

            if (!age || !name || !job) {
                return res.status(400).json({ error: 'thieu Name hoac age hoac job ' });
            }

            if (typeof age !== 'number' || age <= 0) {
                return res.status(400).json({ error: 'age la mot so phai lon hon  0' });
            }

            if (typeof name !== 'string' || name.trim().length === 0) {
                return res.status(400).json({ error: 'name phai la mot chuoi khong duoc de trong' });
            }

            if (typeof job !== 'string' || job.trim().length === 0) {
                return res.status(400).json({ error: 'job phai la mot chuoi khong duoc de trong' });
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
                return res.status(400).json({ error: 'thieu id' });
            }
            const user = await userModel.findById(data.id);
            if (user) {

                // giu lai thong tin cu neu ko co thong ti moi
                const updatedUserData = {
                    name: data.name ? data.name : user.name,
                    age: data.age ? data.age : user.age,
                    job: data.job ? data.job : user.job,
                };


                if (data.age && (typeof data.age !== 'number' || data.age <= 0)) {
                    return res.status(400).json({ error: 'age la mot so phai lon hon  0' });
                }

                if (data.name && (typeof data.name !== 'string' || data.name.trim().length === 0)) {
                    return res.status(400).json({ error: 'name phai la mot chuoi khong duoc de trong' });
                }

                if (data.job && (typeof data.job !== 'string' || data.job.trim().length === 0)) {
                    return res.status(400).json({ error: 'job phai la mot chuoi khong duoc de trong' });
                }


                const newUser = await userModel.findByIdAndUpdate(data.id, updatedUserData, { new: true, runValidators: true });
                return res.status(201).json({ mess: 'Update user thanh cong', newUser });
            }
            return res.status(400).json({ error: 'ko tim thay user' });


        } catch (error) {
            res.status(500).json({ error: `${error}` });
        }
    }
    //delete
    async deleteUser(req, res) {
        try {

            const id = req.body.id;
            if (!id) {
                return res.status(400).json({ error: 'thieu id' });
            }
            const user = await userModel.findByIdAndDelete(id);
            if (user) {

                return res.status(200).json({ mess: 'delete thanh cong', user: user });
            }
            return res.status(400).json({ mess: 'ko tim user', user: user });

        } catch (error) {
            res.status(500).json({ error: `${error}` });
        }
    }
}
module.exports = new SiteController();