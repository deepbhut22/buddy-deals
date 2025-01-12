import User from "../model/user.Model.js";

const saveUser = async (data) => {        
    try {
        const newUser = await User.create(data);
        return newUser;
    } catch (error) {
        throw error;
    }
}