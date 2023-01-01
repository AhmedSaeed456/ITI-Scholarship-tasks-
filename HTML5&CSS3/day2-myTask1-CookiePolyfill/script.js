conditionizr.add('isCookie',function(){
    return !!window.cookie;
});
conditionizr.polyfill("CookiePoly.js",['isCookie']);