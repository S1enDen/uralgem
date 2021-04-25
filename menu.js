window.onload = function() 
{
    append_JS_CSS();
    MakeNavbar() 
}

function append_JS_CSS()
{

    
    let script = document.createElement('script');
    script.setAttribute('src', 'bootstrap.bundle.min.js');    
    document.body.append(script);    

    //append CSS
    let bootstrapCSS = document.createElement('link');
    bootstrapCSS.setAttribute('rel', 'canonical');
    bootstrapCSS.setAttribute('href', 'https://getbootstrap.com/docs/5.0/examples/headers/');
    
    let bootstrapminCSS = document.createElement('link');
    bootstrapminCSS.setAttribute('rel', 'stylesheet');
    bootstrapminCSS.setAttribute('href', 'bootstrap.min.css');
    
    let siteCSS = document.createElement('link');
    siteCSS.setAttribute('rel', 'stylesheet');
    siteCSS.setAttribute('href', 'site.css');
    
    document.head.append(bootstrapCSS);
    document.head.append(bootstrapminCSS);
    document.head.append(siteCSS);
}

function MakeNavbar()
{
    let div = document.createElement('div');
    div.setAttribute('id', 'navBox');
    document.body.prepend(div);
    //$('#navBox').load('navbar.html');
    //document.getElementById("navBox").innerHTML='<object type="text/html" data="navbar.html" ></object>';
}