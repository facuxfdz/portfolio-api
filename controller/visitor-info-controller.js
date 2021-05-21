const nodemailer = require('nodemailer');

exports.sendEmailTo = async (req,res) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: 'ignatius.lesch@ethereal.email',
                pass: 'R8X6vP5FcZ8ZGTmC2Q',
            }
        });

        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <fdzfacundoagustin@gmail.com>',
            to: "facuassain@gmail.com",
            subject: "Someone is looking for you!",
            text: `${req.name} is watching your portfolio!`,
            html: `<b>${req.name} is watching your portfolio!</b>`
        });

        console.log('\x1b[32m',`Message sent: ${info.messageId}`);
        console.log('\x1b[32m', `Preview URL: ${nodemailer.getTestMessageUrl(info)}`)
        return res.status(200).json({msg: "Mail sent!"});
    } catch(error) {
        console.log('\x1b[31m', `Error: ${error}`);
        return res.status(500).json({error: error.message});
    }
}