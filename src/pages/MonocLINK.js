import React from 'react';
import {Header} from  '../components/Styles/StyledMonocLINK'

const MonocLINK = () => {

    // TODO:
    // I WANT TO TURN THIS INTO A COMPONENT
    // NEXT COMMIT WILL BE THIS
    // source: https://speckyboy.com/css-javascript-text-animation-snippets/
    // number 5
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        this.txt = fullTxt.substring(0, this.txt.length + 1);

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;


        if (this.txt === fullTxt) {
            delta = this.period;
        } else if (this.txt === '') {
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
    };
    return (
        <div>
            <Header><span class="txt-rotate" data-period="1000" data='[ "monoc.link;" ]' ></span></Header>
        </div>
    );
};

export default MonocLINK;