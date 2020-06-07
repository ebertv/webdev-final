(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['songCard'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"song\">\r\n    <div class=\"song-buttons\">\r\n        <button type=\"button\" id=\"song-button\"> <span class=\"material-icons\"> play_circle_outline </span> </button>\r\n        <button type=\"button\" id=\"song-button\" class=\"save-button\"> <span class=\"material-icons\"> done </span></button>\r\n    </div>\r\n    <div class=\"song-analytics\">\r\n        Popularity: "
    + alias4(((helper = (helper = lookupProperty(helpers,"popularity") || (depth0 != null ? lookupProperty(depth0,"popularity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"popularity","hash":{},"data":data,"loc":{"start":{"line":7,"column":20},"end":{"line":7,"column":34}}}) : helper)))
    + "\r\n        URL: "
    + alias4(((helper = (helper = lookupProperty(helpers,"preview_url") || (depth0 != null ? lookupProperty(depth0,"preview_url") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"preview_url","hash":{},"data":data,"loc":{"start":{"line":8,"column":13},"end":{"line":8,"column":28}}}) : helper)))
    + "\r\n        ID: "
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":18}}}) : helper)))
    + "\r\n    </div>\r\n    <div class=\"song-info\">\r\n        <p class=\"song-title\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":20}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"song-artist\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"artist_name") || (depth0 != null ? lookupProperty(depth0,"artist_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist_name","hash":{},"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":27}}}) : helper)))
    + "\r\n        </p>\r\n    </div>\r\n</article>";
},"useData":true});
})();