"use strict";


exports.home = (req, res) => {
    res.render('./layouts/default', { page: 'home', modal: 'home_modal' });
};

