function gtmDispatcher (dataLayer){

    'use strict';

    dataLayer = dataLayer || window.dataLayer;

    /***************** Attributes ****************\
    | HTML Attribute   | Tag Property |  Optional |
    |---------------------------------------------|
    | data-gd          |      --      |    no     |
    | data-gd-target   |      --      |    yes    |
    | data-gd-id       | Id           |    yes    |
    | data-gd-type     | Type         |    no     |
    | data-gd-category | Category     |    no     |
    | data-gd-action   | Action       |    yes    |
    | data-gd-label    | Label        |    no     |
    | data-gd-value    | Value        |    yes    |
    | data-gd-anything | Custom Value |    yes    |
    \*********************************************/

    /* Sample:
        
        <button
            data-gd 
            data-gd-target=""
            data-gd-type="click" or data-gd-type="click, mouseleave, mouseover"
            data-gd-category="HomeButtons"
            data-gd-label="Friendly Name">Click me</button>

    */

    var elms = document.body.getElementsByTagName('*');

    for (var i = 0, lgt = elms.length, elm = elms[i]; i < lgt; i++, elm = elms[i]) {
        if(!elm.attributes['data-gd']) continue;
        var events = elm.getAttribute('data-gd-type').replace(' ', '').split(',');
        for (var j = 0, elgt = events.length; j < elgt; j++){
            elm.addEventListener(events[j], runEvent);
        }
    }

    function runEvent(){
        var attrs   = this.attributes
        ,   evtData = {}

        for(key in attrs){
            if(typeof attrs[key] != 'object') break;
            var attr = attrs[key];
            if(!attr.name.match('data-gd-')) continue;
            evtData[attr.name.replace('data-gd-', '')] = attr.value;
        }
        console.info('Google Tag Manager push =>', evtData);
        dataLayer.push(evtData);
    }
}

if(this.module && this.module.exports){
    module.exports = gtmDispatcher();
}