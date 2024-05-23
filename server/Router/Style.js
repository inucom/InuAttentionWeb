const express = require("express");
const {Counter} = require("../Model/Counter");
const {Style} = require("../Model/Style");
const {User} = require("../Model/User");
const {Tts} = require("../Model/Tts");
const {Manage} = require("../Model/Manage");
const axios = require("axios");

const router = express.Router();
const setUpload = require("../Util/upload");
router.post("/submit", async (req, res) => {
    let temp = {
        title: req.body.title,
        image: req.body.image,
    };
    const data = {
        data:  [{
            images: req.body.image,
            statusCode: 0}]
    }
    try {
        const manage = await Manage.findOne({ identifier: 1 }).exec();

        // console.log(manage);

        const response = await axios.post(manage.URL, data);

        const counter = await Counter.findOne({ name: "counter" }).exec();
        temp.styleNum = counter.styleNum;
        const userInfo = await User.findOne({ uid: req.body.uid }).exec();
        temp.author = userInfo._id;
        //console.log(response.data.data[0].auto);
        temp.auto = response.data.data[0].auto   ;
        temp.diffusion = response.data.data[0].diffusion;
        const VoiceStyle = new Style(temp);
        await VoiceStyle.save();

        await Counter.updateOne({ name: "counter" }, { $inc: { styleNum: 1 } });

        // console.log(VoiceStyle);

        res.status(200).json({ success: true, styleNum:counter.styleNum });
    } catch (err) {
        console.error(err);
        res.status(400).json({ success: false });
    }
});

// router.post("/submit", (req, res) => {
//     let temp = {
//         title:req.body.title,
//         image : req.body.image,
//     };
//     Counter.findOne({name: "counter"})
//         .exec()
//         .then((counter) => {
//             temp.styleNum = counter.styleNum;
//             User.findOne({uid:req.body.uid}).exec().then((userInfo)=>{
//                 temp.author = userInfo._id;
//                 const VoiceStyle = new Style(temp);
//                 VoiceStyle.save().then(() => {
//                     Counter.updateOne(
//                         {name: "counter"},
//                         {$inc: {styleNum: 1}})
//                         .then(() => {
//                                 res.status(200).json({success: true});
//                             }
//                         );
//                 });
//             })
//         })
//         .catch((err) => {
//             res.status(400).json({success: false});
//         });
// });

router.post("/list", async (req, res) => {
    try {
        const user = await User.findOne({uid:req.body.uid});
        const styles = await Style.find({ "author": user._id }).exec();
        res.status(200).json({ success: true, styleList: styles });
    } catch (err) {
        console.error(err);
        res.status(400).json({ success: false });
    }
});

router.post("/detail", (req, res) => {
    Style.findOne({styleNum: Number(req.body.styleNum)})
        .populate("author")
        .exec()
        .then((doc) => {
            res.status(200).json({success: true, style: doc});
        }).catch((err) => {
        res.status(400).json({success: false});
    });
});

router.post("/edit", (req, res) => {
    let temp = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
    };
    Style.updateOne({styleNum: Number(req.body.styleNum)}, {$set: temp})
        .exec()
        .then(() => {
            res.status(200).json({success: true});
        }).catch((err) => {
        res.status(400).json({success: false});
    });
});

router.post("/delete", async (req, res) => {
    const styleNum = Number(req.body.styleNum);
    try {
        const style = await Style.findOne({ styleNum: styleNum }).exec();

        if (!style) {
            return res.status(400).json({ success: false});
        }
        await Tts.deleteMany({ styleId: style._id }).exec();
        await style.deleteOne();

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(400).json({ success: false });
    }
});
router.post("/image/upload", setUpload("inu-attention/style"), (req, res) => {
    const filePaths = req.files.map(file => file.location);
    res.status(200).json({success: true, filePaths});
});

module.exports = router;