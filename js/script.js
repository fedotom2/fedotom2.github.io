;(function() {

    'use strict';

    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    var OPoint = (function () {
        function OPoint() {
            this.x = 500;
            this.y = 500;
            this.speed = 10;

            this.isLeft = false;
            this.isRight = false;
            this.isUp = false;
            this.isDown = false;

            this.obj = document.getElementById('opoint');
            this.obj.style.left = this.x + 'px';
            this.obj.style.top = this.y + 'px';
        }

        OPoint.prototype.changeCords = function () {
            if (this.isLeft)
                this.x -= this.speed;
            if (this.isRight)
                this.x += this.speed;
            if (this.isUp)
                this.y -= this.speed;
            if (this.isDown)
                this.y += this.speed;

            this.obj.style.left = this.x + 'px';
            this.obj.style.top = this.y + 'px';
        };

        OPoint.prototype.checkKeyDown = function (e) {
            console.log(e);
        };

        return new OPoint;
    })();

    var Body = (function () {
        function Body() {
            this.radius = 100;
            this.alpha = 90;
            this.speed = 5;

            this.x = this.radius * Math.sin(this.alpha * Math.PI / 180) + OPoint.x;
            this.y = this.radius * Math.cos(this.alpha * Math.PI / 180) + OPoint.y;

            this.obj = document.getElementById('body');
            this.obj.style.left = this.x + 'px';
            this.obj.style.top = this.y + 'px';
        }

        Body.prototype.changeAlpha = function () {
            this.alpha += this.speed;
            this.x = this.radius * Math.sin(this.alpha * Math.PI / 180) + OPoint.x;
            this.y = this.radius * Math.cos(this.alpha * Math.PI / 180) + OPoint.y;

            this.obj.style.left = this.x + 'px';
            this.obj.style.top = this.y + 'px';
        };

        return new Body();
    })();

    var checkKeyDown = function (e) {
        var keyCode = e.keyCode || e.which;

        /*
            * 37 - left button
            * 38 - up button
            * 39 - right button
            * 40 - down button
        */
        switch (keyCode) {
            case 37:
                OPoint.isLeft = true;
                e.preventDefault();
                break;
            case 38:
                OPoint.isUp = true;
                e.preventDefault();
                break;
            case 39:
                OPoint.isRight = true;
                e.preventDefault();
                break;
            case 40:
                OPoint.isDown = true;
                e.preventDefault();
                break;
            default:
                // TODO
                break;
        }

    };

    var checkKeyUp = function (e) {
        var keyCode = e.keyCode || e.which;

        /*
            * 37 - left button
            * 38 - up button
            * 39 - right button
            * 40 - down button
        */
        switch (keyCode) {
            case 37:
                OPoint.isLeft = false;
                e.preventDefault();
                break;
            case 38:
                OPoint.isUp = false;
                e.preventDefault();
                break;
            case 39:
                OPoint.isRight = false;
                e.preventDefault();
                break;
            case 40:
                OPoint.isDown = false;
                e.preventDefault();
                break;
            default:
                // TODO
                break;
        }
    };

    document.addEventListener('keydown', checkKeyDown, false);
    document.addEventListener('keyup', checkKeyUp, false);

    var loop = function () {
        OPoint.changeCords();
        Body.changeAlpha();
        requestAnimationFrame(loop);
    };

    loop();

})();
