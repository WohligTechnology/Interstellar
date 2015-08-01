/**
 * PortfolioController
 *
 * @description :: Server-side logic for managing Portfolios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Portfolio.save(req.body, print);
    },
    find: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Portfolio.find(req.body, print);
    },
    findlimited: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Portfolio.findlimited(req.body, print);
    },
    findone: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Portfolio.findone(req.body, print);
    },
    delete: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Portfolio.delete(req.body, print);
    },
    countportfolio: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Portfolio.countportfolio(req.body, print);
    }
};

