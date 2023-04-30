import User from "../models/user.model.js";

export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id)
    
    if(req.userId !== user._id.toString()) {
    return next(craeteError(403,"You can only delete your own account!"))
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send("Deleted Successfully!")
}