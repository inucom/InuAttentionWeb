const express = require("express");
const router = express.Router();
const {Style} = require("../Model/Style");
const {Tts} = require("../Model/Tts");
const axios = require("axios");


// router.post("/submit", async (req, res) => {
//     try {
//         let temp = {
//             text: req.body.text,
//             styleId:req.body.styleId,
//         }
//         const NewTts = new Tts(temp);
//         const style = await Style.findOneAndUpdate(
//             { _id: req.body.styleId },
//             { $inc: { ttsNum: 1 } }
//         ).exec();
//         NewTts.ttsNum = style.ttsNum;
//         await NewTts.save();
//         return res.status(200).json({ success: true });
//     } catch (err) {
//         console.error(err);
//         return res.status(400).json({ success: false });
//     }
// });

router.post("/submit", async (req, res) => {
    try {
        let temp = {
            text: req.body.text,
            styleId:req.body.styleId,
        }
        const NewTts = new Tts(temp);
        const style = await Style.findOneAndUpdate(
            { _id: req.body.styleId },
            { $inc: { ttsNum: 1 } }
        ).exec();
        NewTts.ttsNum = style.ttsNum;
        const data = {
            text : req.body.text,
            voiceVector : style.voiceVector,
            statusCode : 2
        }
        await axios.post('http://127.0.0.1:5000/', data).then(res =>{
            console.log(res.data);
            NewTts.voiceData = res.data;
        })
        await NewTts.save();
        return res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ success: false });
    }
});
router.post("/getTts", (req,res)=>{
    Tts.find({styleId: req.body.styleId})
        .exec()
        .then((ttsInfo)=>{
            return res.status(200).json({
                success:true,
                ttsList:ttsInfo,
            })
        }).catch((err)=>{
        return res.status(400).json({
            success:false,
        })
    })
})

router.post("/edit", (req,res)=>{
    let temp = {
        text:req.body.text,
        styleId: req.body.styleId,
    }
    Tts.findOneAndUpdate({_id:req.body.ttsId}, {$set: temp}).exec()
        .then((doc)=>{
            return res.status(200).json({
                success: true,
            })
        }).catch((err)=>{
            return res.status(400).json({
                success: false,
            })
    })
})

router.post("/delete", (req,res)=>{
    let temp = {
        text:req.body.text,
        styleId: req.body.styleId,
    }
    Tts.deleteOne({_id:req.body.ttsId}).exec()
        .then(()=>{
                return res.status(200).json({
                    success: true,
                })
            }).catch(()=>{
        return res.status(400).json({
            success: false,
        })
    })
})

module.exports = router;