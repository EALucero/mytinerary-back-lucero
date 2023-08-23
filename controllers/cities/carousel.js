import City from "../../models/City.js";

export default async (req, res, next) => {
    try {
        let all = await City.find({}, 'city photo').sort({ fundation: -1 }).limit(16)
        //let all = await City.find({}, 'photo city').sort({ fundation: 'desc' })
        let count = await City.countDocuments()  //if (count / 4 % 3) {}
        return res.status(200).json({
            success: true,
            message: 'cities shown carousel',
            data_carousel: all,
            count
        });
    } catch (error) {
        next(error)
    }
}