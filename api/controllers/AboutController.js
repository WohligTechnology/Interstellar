/**
 * AboutController
 *
 * @description :: Server-side logic for managing Abouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        About.save(req.body, print);
    },
    find: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        About.find(req.body, print);
    },
    findlimited: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        About.findlimited(req.body, print);
    },
    findone: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        About.findone(req.body, print);
    },
    delete: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        About.delete(req.body, print);
    },
    countabout: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        About.countabout(req.body, print);
    }
};

