"use strict";


exports.homePage = (req, res) => {
    console.log("home-controller:\\home");
    res.render('./layouts/default', { page: 'home', modal: 'home_modal', raw: '', symptomId: '' });
};

exports.meaningPage = (req, res) => {
    console.log("home-controller:\\meaning");
    res.render('./layouts/default', { page: 'layouts/entitled', title: 'O que significam estes resultados', content: 'meaning', modal: '', raw: '', symptomId: '' });
};

exports.aboutPage = (req, res) => {
    console.log("home-controller:\\about");
    res.render('./layouts/default', { page: 'layouts/entitled', title: 'Sobre', content: 'about', modal: '', raw: '', symptomId: '' });
};

exports.termsPage = (req, res) => {
    console.log("home-controller:\\terms");
    res.render('./layouts/default', { page: 'layouts/entitled', title: 'O que significam estes resultados', content: 'terms', modal: '', raw: '', symptomId: '' });
};

