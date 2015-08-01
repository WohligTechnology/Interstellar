/**
 * TestimonialController
 *
 * @description :: Server-side logic for managing Testimonials
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Testimonial.save(req.body, print);
    },
    find: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Testimonial.find(req.body, print);
    },
    findlimited: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Testimonial.findlimited(req.body, print);
    },
    findone: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Testimonial.findone(req.body, print);
    },
    delete: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Testimonial.delete(req.body, print);
    },
    counttestimonial: function (req, res) {
        var print = function (data) {
            res.json(data);
        }
        Testimonial.counttestimonial(req.body, print);
    }
};

