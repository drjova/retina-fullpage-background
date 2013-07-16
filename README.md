A jQuery Plugin for having different versions of background images

## Usage


Quick Usage

**1st step**

Download [jquery-backstretch](https://github.com/srobbin/jquery-backstretch)

**2nd step**
```html
  <script type="text/javascript" src="src/jquery.min.js"></script>
  <script type="text/javascript" src="PATH_TO jquery.backstretch.min.js"></script>
  <script type="text/javascript" src="src/jquery.rfb.min.js"></script>
```


**3rd step**
 ```javascript
    $.RetinaFullBackground('ELEMENT TO SHOW',{filename:'DEFAULT_IMAGE',path:'PATH_TO_IMAGES'});
 ```
**PATH_TO_IMAGES** ex. 'assets/images'

**DEFAULT_IMAGE** ex. 'default.png'

*Images on PATH_TO_IMAGES must have the above stracture*

* for iphone5 : default-1136.png
* for iphone4 : default-960.png
* for iphone  : default-480.png


## Options

```javascript
'iphone5' : '1136',
'iphone4' : '960',
'iphone'  : '480',
'fallback': '',
'filename': 'DEFAULT_IMAGE',
'path'    : 'PATH_TO_IMAGES'
```





##Special Thanx

A huge thank you to [srobbin](https://github.com/srobbin) with the amazing [jquery-backstretch](https://github.com/srobbin/jquery-backstretch) plugin

cheers :)

