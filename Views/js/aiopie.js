// JavaScript Document

let head = document.getElementsByTagName('HEAD')[0];
let link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/aiopie.css';

let react = document.createElement('react');

react.rel = 'javascript';
react.type = 'text/js';
react.href = 'js/aiopie.js';

head.appendChild(link);
head.appendChild(react);


this.aiopie
{
	this.width = window.innerWidth;
	this.height = window.innerHeight;
	document.getElementById("width") === "Screen Width: " + this.width;
	document.getElementById("height") === "Height: " + this.height;
}