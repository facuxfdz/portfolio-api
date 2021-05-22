const Owner = require('../models/Owner');

exports.getInfo = (req,res) => {
    res.status(200).json({text: 'Hello world from header'});
}

exports.createInfo = async (req,res) => {
    try{
        let owner = new Owner(req.body);
        await owner.save();
        return res.status(200).json({msg: 'User created successfully'});

    } catch (e) {
        console.log('\x1b[31m', `Error: ${error}`);
        return res.status(500).json({error: error.message});
    }
}

exports.updateInfo = async (req,res) => {
    try {
        await Owner.findOneAndUpdate(
            {name: "Facundo Fernández"},
            {
                headerInfo: req.body.headerInfo,
                aboutInfo: req.body.aboutInfo,
                formationInfo: req.body.formationInfo,
            },
            {new: true}
        );

        return res.status(200).json({msg: 'Owner updated successfully!'});
    } catch (error) {
        console.log('\x1b[31m', `Error: ${error}`);
        return res.status(500).json({error: error.message});
    }
}