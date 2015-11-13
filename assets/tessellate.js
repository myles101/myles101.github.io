window.addEventListener('load', function () {
	var src = document.getElementById("images").getElementsByTagName("img"), //ref all img within initial images frame
	img = function img (el,x,y) {

		//creates new 4x4 grid within initial frame
		var d = document.createElement("div");
		d.className     = "frame";
		d.style.left    = 50 * x + "%";
		d.style.top     = 50 * y + "%";
		var img         = document.createElement("img");
		img.className   = "img";
		img.src         = src[Math.floor(Math.random()*src.length)].src;

		//on click
		img.onmousedown = function () {
			div(this.parentNode);
			this.parentNode.removeChild(this);
		}
		d.appendChild(img);
		el.appendChild(d);
	},

	div = function div (el) {
		img(el,0,0);
		img(el,1,0);
		img(el,0,1);
		img(el,1,1);
	};
	div(document.getElementById("screen"));
	window.ondragstart = function() { return false; }
}, false);
