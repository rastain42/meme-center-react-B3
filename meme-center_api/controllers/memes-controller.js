var imgSchema = require('../models/image');
var fs = require('fs');
var path = require('path');

var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

const memesController = {

    getAll(res) {
        imgSchema.find({})
            .then((data, err) => {
                if (err) {
                    console.log(err);
                }
                res.render('imagepage', { items: data })
            })
            .catch(err => res.json(err));
    },

    upload(req, res) {
        var obj = {
            name: req.body.name,
            desc: req.body.desc,
            img: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        }
        imgSchema.find({})
        imgSchema.create(obj)
            .then((err, item) => {
                if (err) {
                    console.log(err);
                }
                else {
                    // item.save();
                    res.redirect('/');
                }
            });
    },
};

module.exports = memesController; 