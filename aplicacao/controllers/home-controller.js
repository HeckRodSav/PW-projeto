"use strict";


exports.homePage = (req, res) => {
    console.log("home-controller:\\home");
    res.render('./layouts/default', { page: 'home', modal: 'home_modal' });
};

exports.meaningPage = (req, res) => {
    console.log("home-controller:\\meaning");
    res.render('./layouts/default', { page: 'layouts/entitled', title: 'O que significam estes resultados', content: 'meaning', modal: '' });
};

exports.aboutPage = (req, res) => {
    console.log("home-controller:\\about");
    res.render('./layouts/default', { page: 'layouts/entitled', title: 'Sobre', content: 'about', modal: '' });
};

exports.termsPage = (req, res) => {
    console.log("home-controller:\\terms");
    res.render('./layouts/default', { page: 'layouts/entitled', title: 'O que significam estes resultados', content: 'terms', modal: '' });
};

