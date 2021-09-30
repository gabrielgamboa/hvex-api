const { isValidObjectId } = require("mongoose");


module.exports = async (request, response, next) => {
    const { id } = request.params;
    
    if (isValidObjectId(id)) {
        return next();
    }

    return response.status(400).json({error: "Id is not valid."});
}