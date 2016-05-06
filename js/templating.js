 $(document).ready(function(){

   var data = { projects: [
     {
       title : "Webpaint",
       tagline : "responsive single page portfolio",
       previewImg : "img/portfolio/webpaint_screen.jpg",
       description: "Webpaint is a flat and modern starting template that can be used to created an appealing portfolio for designers and developers alike",
       features: [
         "Fully responsive",
         "Gulpfile for running essential build tasks",
         "Written in SASS using the <a href='http://bourbon.io/'>burbon</a> mixin library aswell as its sub libraries <a href='http://neat.bourbon.io/'>neat</a> and <a href='http://bitters.bourbon.io/'>bitters</a>",
         "Semantic layout using <a href=''>bourbon neat</a>",
         "Abilty to easily add useful UI components using bourbon's <a href=''>refills</a> library",
         "Filterable portfolio section using the <a href='https://mixitup.kunkalabs.com/'>MixItUp</a> jquery plugin"
       ],
       license: "MIT",
       licenseURL: "https://opensource.org/licenses/MIT",
       psdLinkName: "elemisfreebies.com",
       psdLinkURL: "http://elemisfreebies.com/04/08/webpaint-free-homepage-psd/",
       livePreviewLink: "http://mgellis91.github.io/psd2html_webpaint/",
       githubLink: "https://github.com/mgellis91/psd2html_webpaint"
     },
     {
       title : "Minimo",
       tagline : "responsive minimal blog template",
       previewImg : "img/portfolio/minimo_full_screen.jpg",
       description: "Minimo is a fully responsive minimal blog site template perfect for anyone looking a modern and simple looking design that allows for easy customisation and extension",
       features: [
         "Fully responsive",
         "Gulpfile for running essential build tasks",
         "Written in SASS using the <a href='http://bourbon.io/'>burbon</a> mixin library aswell as its sub libraries <a href='http://neat.bourbon.io/'>neat</a> and <a href='http://bitters.bourbon.io/'>bitters</a>",
         "Semantic layout using <a href='http://neat.bourbon.io/'>bourbon neat</a>",
         "Abilty to easily add useful UI components using bourbon's <a href='http://refills.bourbon.io/'>refills</a> library"
       ],
       license: "MIT",
       licenseURL: "https://opensource.org/licenses/MIT",
       psdLinkName: "freebusiebug.com",
       psdLinkURL: "http://freebiesbug.com/psd-freebies/minimo-minimal-blog-template/",
       livePreviewLink: "http://mgellis91.github.io/psd2html_minimo/",
       githubLink: "https://github.com/mgellis91/psd2html_minimo"
     },
   ]};

   //check if on index page
  if($(".projects").length){
    var src = $("#portfolio-template").html();
    var temp = Handlebars.compile(src);
    $(".portfolio-items").html(temp(data));
  }

  //check if on single project page
  else if($(".single-item").length){
    var singleProject = getSingleProject();
    var src = $("#single-project-template").html();
    var temp = Handlebars.compile(src);
    $(".single-item").html(temp(singleProject));
  }

  function getSingleProject(){
    var val = getParameterByName("project");
    for(var i = 0; i < data.projects.length; i++){
      if(val === data.projects[i].title){
        return data.projects[i];
      }
    }
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }


});
