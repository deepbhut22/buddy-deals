import userRequest from "../model/userRequest.Model.js";

const addNewRequest = async (data) => {
    try {
        const newRequest = await userRequest.create(data);
        return newRequest;
    } catch (error) {
        throw error;
    }
}

const removeFromRequest = async (data) => {
    try {
        const request = await userRequest.findOneAndDelete({ email: data.email });
        return request;
    } catch (error) {
        throw error;
    }
}
