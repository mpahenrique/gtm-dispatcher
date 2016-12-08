# Google Tag Manager Dispatcher

##### This library works with dispatching of GTM events based on HTML tag attributes.

| HTML Attribute | Tag Property | Optional |
| ------------------ | --------------- | ----------|
|   data-gd          |      none       |    no     |
|   data-gd-target   |      relative   |    yes    |
|   data-gd-id       |      Id         |    yes    |
|   data-gd-type     |      Type       |    no     |
|   data-gd-category |      Category   |    no     |
|   data-gd-action   |      Action     |    yes    |
|   data-gd-label    |      Label      |    no     |
|   data-gd-value    |      Value      |    yes    |

## Samples:

### HTML: 

```
<button data-gd 
        data-gd-type="click" 
        data-gd-category="HomeButtons" 
        data-gd-label="Friendly Name">Click me</button>
```

* data-gd attribute activates the JavaScript listeners to your element, when the event (data-gt-type) happens, the GTM event will be fired

### JavaScript:

#### Getting/Loading gtm-dispatcher script:
##### Using like a node_module [server-side building (Browserify, etc)]
###### IN NODE_MODULES ROOT FOLDER:
```
$ npm install http://git.agenciaclick.com.br/interno/gtm-dispatcher --save
```

##### Using like a library
###### IN YOUR HTML:
```
<script src="download/gtm/dispatcher/here.js"></script>
``` 
<br>
#### Running gtm-dispatcher script:
##### Using like a node_module [server-side building (Browserify, etc)]
###### IN YOUR JAVASCRIPT:
```
require('gtm-dispatcher');
```

##### Using like a library
###### IN YOUR JAVASCRIPT:
```
window.onload = () => { gtmDispatcher(); }
```
