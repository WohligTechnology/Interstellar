/**
 * ContactusController
 *
 * @description :: Server-side logic for managing Contactuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Contactus.save(req.body, print);
    },
    find: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Contactus.find(req.body, print);
    },
    findlimited: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Contactus.findlimited(req.body, print);
    },
    findone: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Contactus.findone(req.body, print);
    },
    delete: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Contactus.delete(req.body, print);
    },
    countcontactus: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Contactus.countcontactus(req.body, print);
    }
};

