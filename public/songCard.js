(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['songCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"song\">\r\n    <div class=\"song-buttons\">\r\n        <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"preview_url") || (depth0 != null ? lookupProperty(depth0,"preview_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preview_url","hash":{},"data":data,"loc":{"start":{"line":3,"column":17},"end":{"line":3,"column":32}}}) : helper)))
    + "\"> <button type=\"button\" id=\"song-button\"> <span class=\"material-icons\"> play_circle_outline </span> </button> </a>\r\n        <button type=\"button\" id=\"song-button\" class=\"save-button\"> <span class=\"material-icons\"> done </span></button>\r\n    </div>\r\n    <div class=\"song-analytics\">\r\n        <p class=\"song-image\">\r\n           <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"preview_pic") || (depth0 != null ? lookupProperty(depth0,"preview_pic") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preview_pic","hash":{},"data":data,"loc":{"start":{"line":8,"column":21},"end":{"line":8,"column":36}}}) : helper)))
    + "\">\r\n        </p>\r\n        <p class=\"song-title\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":20}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"song-artist\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"artist_name") || (depth0 != null ? lookupProperty(depth0,"artist_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist_name","hash":{},"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":14,"column":27}}}) : helper)))
    + "\r\n        </p>\r\n        <p> Popularity: "
    + alias4(((helper = (helper = lookupProperty(helpers,"popularity") || (depth0 != null ? lookupProperty(depth0,"popularity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"popularity","hash":{},"data":data,"loc":{"start":{"line":16,"column":24},"end":{"line":16,"column":38}}}) : helper)))
    + " </p>\r\n        <p> ID: "
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":17,"column":22}}}) : helper)))
    + " </p>\r\n    </div>\r\n</article>";
},"useData":true});
})();