import React from 'react';



export const Typer = (props) => {
    const dataProp = props.data;
    const defaultText = JSON.parse(props.data);

    const TxtRotate = function(element, data) {
        this.data = data;
        this.element = element;
        this.loopNum = 0;
        this.period = 2000;
        this.txt = '';
        this.tick();
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.data.length;
        var fullTxt = this.data[i];

        this.txt = fullTxt.substring(0, this.txt.length + 1);

        this.element.innerHTML = '<span>'+this.txt+'</span>';

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
        var element = document.getElementsByClassName('txt-rotate')[0];
            var data = dataProp;
            new TxtRotate(element, JSON.parse(data));
    };

    return(
        <span class="txt-rotate">{defaultText}</span>
    );
};

export default Typer;