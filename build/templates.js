this["JST"] = this["JST"] || {};

this["JST"]["app/base/header/tpl-breadcrumb.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<ul class="nav navbar-nav" id="#arial">\n\t<li class="dropdown">\n\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true"><span class="caret"></span></a>\n\n\n\t<ul class="dropdown-menu" role="menu">\n\t\t<li>\n\t\t\t<a href="#importFile">\n\t\t\t\t<i class=" reneco reneco-import"></i>\n\t\t\t\t&nbsp;&nbsp;<span data-i18n="tiles.manual-import">Manual import</span>\n\t\t\t</a>\n\t\t</li>\n\t\t\n\t\t<li>\n\t\t\t<a href="#stations/new">\n\t\t\t\t<i class=" reneco reneco-entrykey "></i>\n\t\t\t\t&nbsp;&nbsp;<span data-i18n="tiles.new-station">New station</span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class="release">\n\t\t\t<a href="#release">\n\t\t\t\t<i class=" reneco reneco-to_release"></i>\n\t\t\t\t&nbsp;&nbsp;<span data-i18n="tiles.release">Release</span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a href="#validate">\n\t\t\t\t<i class=" reneco reneco-validate"></i>\n\t\t\t\t&nbsp;&nbsp;<span data-i18n="tiles.validation">Validate</span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class="divider"></li>\n\n\t\t<li>\n\t\t\t<a href="#stations">\n\t\t\t\t<i class=" reneco reneco-stations"></i>\n\t\t\t\t&nbsp;&nbsp;Stations\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a href="#individuals">\n\t\t\t\t<i class=" reneco reneco-individuals"></i>\n\t\t\t\t&nbsp;&nbsp;<span data-i18n="tiles.individuals">Individuals</span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a href="#sensors">\n\t\t\t\t<i class=" reneco reneco-sensors"></i>\n\t\t\t\t&nbsp;&nbsp;<span data-i18n="tiles.sensors">Sensors</span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class="monitoredSites">\n\t\t\t<a href="#monitoredSites">\n\t\t\t\t<i class=" reneco reneco-sensors"></i>\n\t\t\t\t&nbsp;&nbsp;<span data-i18n="tiles.sites">Monitored sites</span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class="divider"></li>\n\n\t\t<li>\n\t\t\t<a href="#export">\n\t\t\t\t<i class=" reneco reneco-export"></i>\n\t\t\t\t&nbsp;&nbsp;Export\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n\t</li>\n\n\t<li id="arial"></li>\n\t<li id="arialSub"></li>\n</ul>\n';

}
return __p
};

this["JST"]["app/base/header/tpl-header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar">\n\t<div class="navbar-header">\n\t\t<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n\t    <span class="sr-only">Toggle navigation</span>\n\t    <span class="icon-bar"></span>\n\t    <span class="icon-bar"></span>\n\t    <span class="icon-bar"></span>\n\t  </button>\n\t\t<a class="navbar-brand after" href="#">\n\t\t\t<span class="reneco reneco-ecorelevesmall"></span >\n\t\t\t&nbsp;\n\t\t\tecoReleve\n\t\t</a>\n\t</div>\n\n\t<div id="navbar" class="navbar-collapse collapse">\n\t\t<ul class="nav navbar-nav" id="breadcrumb">\n\t\t</ul>\n\t\n\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t<li id="header-loader" class="hidden">\n\t\t\t\t<a>\n\t\t\t\t\t<svg width="50" height="10">\n\t\t\t\t\t\t<rect x="0" y="0" rx="3" ry="3" width="10" height="10">\n\t\t\t\t\t\t\t<animate attributeName="width" values="0;10;10;10;0" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t\t<animate attributeName="height" values="0;10;10;10;0" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t\t<animate attributeName="x" values="5;0;0;0;5" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t\t<animate attributeName="y" values="5;0;0;0;5" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t</rect>\n\t\t\t\t\t\t<rect x="15" y="0" rx="3" ry="3" width="10" height="10">\n\t\t\t\t\t\t\t<animate attributeName="width" values="0;10;10;10;0" begin="200ms" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t\t<animate attributeName="height" values="0;10;10;10;0" begin="200ms" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t\t<animate attributeName="x" values="20;15;15;15;20" begin="200ms" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t\t<animate attributeName="y" values="5;0;0;0;5" begin="200ms" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t</rect>\n\t\t\t\t\t\t<rect x="30.6084" y="0.608427" rx="3" ry="3" width="8.78315" height="8.78315">\n\t\t\t\t\t\t<animate attributeName="width" values="0;10;10;10;0" begin="400ms" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t<animate attributeName="height" values="0;10;10;10;0" begin="400ms" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t<animate attributeName="x" values="35;30;30;30;35" begin="400ms" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t<animate attributeName="y" values="5;0;0;0;5" begin="400ms" dur="1000ms" repeatCount="indefinite"></animate>\n\t\t\t\t\t\t</rect>\n\t\t\t\t\t</svg>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class="pipefy-support hidden">\n\t\t\t\t<a id="pipefy"><span class="reneco reneco-support"></span></a>\n\t\t\t</li>\n\t\t\t<li class="hidden-xs">\n\t\t\t\t<a href="#">\n\t\t\t\t\t<i class="reneco reneco-user"></i>&nbsp;\n\t\t\t\t\t<sapn id="userName"></sapn>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a id="logout"> \n\t\t\t\t\t<span data-i18n="button.logout">logout</span>&nbsp;\n\t\t\t\t\t<i class="glyphicon glyphicon-log-out"></i>\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\n\t</div>\n</nav>\n';

}
return __p
};

this["JST"]["app/base/home/tpl/test-viw-tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="testID" style="height: 500px"> </div>\r\n';

}
return __p
};

this["JST"]["app/base/home/tpl/tpl-LandviewerView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="testMapLV" style="height: 450px; width: 700px"> </div>\r\n';

}
return __p
};

this["JST"]["app/base/home/tpl/tpl-dounutGraph.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-6" style = "text-align:center;">\n\t<h4>Pending locations</h4>\n\t<canvas id="validate" height="150" width="150" class=\'hidden-xs\'></canvas>\n</div>\n\n';

}
return __p
};

this["JST"]["app/base/home/tpl/tpl-dounutGraph2.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-6" style = "text-align:center;">\n\t<h4>Validated locations</h4>\n\t<canvas id="locations" height="150" width="150" class=\'hidden-xs\'></canvas>\n</div>';

}
return __p
};

this["JST"]["app/base/home/tpl/tpl-dounutGraph3.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-3" style = "text-align:center;">\n\t<h4>Monitored Status</h4>\n\t<canvas id="monitored" height="150" width="150" class=\'hidden-xs\'></canvas>\n</div>\n';

}
return __p
};

this["JST"]["app/base/home/tpl/tpl-graph.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n    <h3 data-i18n="home.graph-label">Number of new stations</h3>\n    <canvas id="canvasGraph" height="250" width="500" class=\'center-block hidden-xs\'></canvas>\n';

}
return __p
};

this["JST"]["app/base/home/tpl/tpl-home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\t<div class="full-height clearfix">\n\t\t<!-- <div id="testCarte" align="center" ></div> -->\n\t\t<div id="testSearch" align="center"> </div>\n\n\t</div>\n\n<!-- <br>\n<div class="col-lg-6 ns-no-padding tiles-left">\n<div class="wrapper clearfix">\n<a href="#importFile" id="importTile" class="tile small_tile tile-pomegranate">\n<p>\n<i class="reneco reneco-import"></i>\n<span data-i18n="tiles.manual-import">Manual import</span>\n</p>\n</a>\n\n<a href="#stations/new" class="tile small_tile last tile-pumpkin">\n<p>\n<i class="reneco reneco-entrykey "></i>\n<span data-i18n="tiles.new-station">New station</span>\n</p>\n</a>\n\n<a href="#release" class="js-admin tile small_tile tile-pumpkin release">\n<p>\n<i class="reneco reneco-to_release"></i>\n<span data-i18n="tiles.release">Release</span>\n</p>\n</a>\n\n\n<a href="#" class="tile small_tile tile-alizarin autoImport tile-locked">\n<p>\n<i class="reneco reneco-sensorimport"></i>\n<span data-i18n="tiles.auto-import">Automatic import</span>\n</p>\n</a>\n\n<a href="#validate" class="tile big_tile last tile-carrot">\n\n<p>\n<i class="reneco reneco-validate"></i>\n<span data-i18n="tiles.validation">Validate</span>\n</p>\n</a>\n\n<!-- <a href="#" class="tile small_tile tile-pumpkin">\n<p>\n<i class="reneco reneco-"></i>\n<span data-i18n=""></span>\n</p>\n</a> -->\n\n<!--</div>\n</div>\n\n<div class="col-lg-6 ns-no-padding tiles-right">\n<div class="wrapper">\n<a href="#stations" class="tile small_tile first tile-green">\n<p>\n<i class="reneco reneco-stations"></i>\n<span>Stations</span>\n</p>\n</a>\n\n<a href="#individuals" class="tile small_tile tile-green">\n\n<p>\n<i class="reneco reneco-individuals"></i>\n<span data-i18n="tiles.individuals">Individuals</span>\n</p>\n</a>\n\n<a href="#" class="tile small_tile last tile-teal myData tile-locked">\n<p>\n<i class="reneco reneco-mydata"></i>\n<span data-i18n="tiles.data">My data</span>\n</p>\n</a>\n\n<a href="#sensors" class="tile small_tile first tile-green">\n<p>\n<i class="reneco reneco-sensors"></i>\n<span data-i18n="tiles.sensors">Sensors</span>\n</p>\n</a>\n\n<a href="#monitoredSites" class="tile small_tile tile-green monitoredSites">\n<p>\n<i class="reneco reneco-sensors"></i>\n<span data-i18n="tiles.sites">Monitored sites</span>\n</p>\n</a>\n\n<a href="#export" class="tile small_tile last tile-pomegranate">\n<p>\n<i class="reneco reneco-export"></i>\n<span data-i18n="tiles.export">Export</span>\n</p>\n</a>\n</div>\n</div> -->\n<!-- </div>\n</div> -->\n';

}
return __p
};

this["JST"]["app/base/home/tpl/tpl-info.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<h1 class="big">' +
((__t = ( nbIndiv )) == null ? '' : __t) +
' <span data-i18n="shared.individuals">individuals</span></h1>\n\n<p class="medium fnt-normal" id="siteName">' +
((__t = ( siteName )) == null ? '' : __t) +
'</p>\n<p class="medium fnt-normal" id="date">' +
((__t = ( date )) == null ? '' : __t) +
'</p>\n\n';

}
return __p
};

this["JST"]["app/base/home/tpl/tpl-newView.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- template associé à la newView, on définit ici les conditions d\'affichage -->\r\n<li id="newID" > ' +
((__t = ( test )) == null ? '' : __t) +
' ' +
((__t = ( autre )) == null ? '' : __t) +
'</li>\r\n\r\n<!-- on va ensuite voir le script général, ici lyt-home\r\n';

}
return __p
};

this["JST"]["app/base/home/tpl/tpl-searchNDVI.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="testCarte" align="center" ></div>\r\n<div id="searchNDVI" >\r\n\r\n<b> Critères de recherche : <b>\r\n  <form action="/getData" method="get" role="form">\r\n    <br> Ville : <br>\r\n    <input type="text" name="city" id="city" >\r\n\r\n    <br> <br> <button  value="get_started" id="mySubmit">Lancer le programme !</button>\r\n  </form>\r\n</div>\r\n';

}
return __p
};

this["JST"]["app/base/home/tpl/tpl-testMap.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="testMap" style="height: 500px; width: 1000px"> </div>\r\n';

}
return __p
};

this["JST"]["app/base/rootview/tpl-rootview.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header class="clearfix">\n</header>\n<main role="main" id="main" class="clearfix">\n</main>\n<footer>\n</footer>\n<div id="modal" class="full-height"></div>\n';

}
return __p
};

this["JST"]["app/modules/objects/detail.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="infos"  class="col-xs-12 col-md-5 full-height no-padding">\n  <div class="toolbar top">\n    <div class="pull-left">    \n      <a class="btn" href="#' +
((__t = ( type )) == null ? '' : __t) +
'">\n          <span class="reneco reneco-back"></span>\n          &nbsp;\n          <span data-i18n="button.back">Back</span>\n      </a>\n    </div>\n    <div class="js-rg-navbar pull-left"></div>\n    <div class="js-form-btns pull-right"></div>\n  </div>\n\n  <div class="crop1 no-padding">\n    \n    <div id="formTab" class="half-height">\n        <div class="js-form"></div>\n        <!--<div class="toolbar bottom">\n          <div class="js-form-btns"></div>\n        </div>-->\n    </div>\n\n    <div class="half-height">\n      <ul class="nav nav-tabs toolbar bottom">\n      ';
 _.each(uiGridConfs, function(uiGridConf, index){ ;
__p += '\n          <li class="tab-ele ' +
((__t = ( (index == 0)? 'active' : '' )) == null ? '' : __t) +
'">\n            <a href="#' +
((__t = ( uiGridConf.name )) == null ? '' : __t) +
'Tab" class="tab-link">' +
((__t = ( uiGridConf.label )) == null ? '' : __t) +
'</a>\n          </li>\n      ';
 }); ;
__p += '\n      \n      </ul>\n      <div class="tab-content crop1 no-padding">\n      ';
 _.each(uiGridConfs, function(uiGridConf, index){ ;
__p += '\n        <div id="' +
((__t = ( uiGridConf.name )) == null ? '' : __t) +
'Tab" class="tab-pane full-height fade ' +
((__t = ( (index == 0)? 'in active' : '' )) == null ? '' : __t) +
'">\n        ';
 if(uiGridConf.name !== "locations") { ;
__p += '\n          <div class="js-rg-' +
((__t = ( uiGridConf.name )) == null ? '' : __t) +
'-grid full-height"></div>\n        ';
 } else { ;
__p += '\n          <div class="js-rg-' +
((__t = ( uiGridConf.name )) == null ? '' : __t) +
'-grid crop1 no-padding"></div>\n          <div class="toolbar bottom">\n            <button class="js-btn-delete-locations btn btn-danger pull-right">\n              <i class="reneco reneco-trash"></i> &nbsp;\n              Delete selected locations\n            </button>\n          </div>\n        ';
 } ;
__p += '\n        </div>\n      ';
 }); ;
__p += '\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=" no-padding col-xs-12 col-md-7 ns-full-height">\n    <div id="map">\n      <div id="showDetails" class="masqued">\n        <span class="glyphicon glyphicon-chevron-right big"/>\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["app/modules/objects/manager.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\t<div class="col-xs-12 col-md-4 full-height no-padding">\n\t\t<div class="toolbar top">\n\t\t\t<a class="js-link-back btn pull-left" href="#">\n\t      <span class="reneco reneco-back"></span>\n\t      &nbsp;\n\t      <span data-i18n="button.back">Back</span>\n  \t\t</a>\n\n  \t\t';
 if (typeof(uiTabs) !== 'undefined') { ;
__p += '\n\t  \t\t<ul class="js-nav-tabs nav nav-tabs pull-right modal-visible">\n\t  \t\t\t';
 _.each(uiTabs, function(uiTab, index){ ;
__p += '\n\t  \t\t\t    <li id="' +
((__t = ( uiTab.name )) == null ? '' : __t) +
'" class="tab-ele ' +
((__t = ( (index == 0)? 'active' : '' )) == null ? '' : __t) +
'">\n\t  \t\t\t      <a class="tab-link">' +
((__t = ( uiTab.label )) == null ? '' : __t) +
'</a>\n\t  \t\t\t    </li>\n\t  \t\t\t';
 }); ;
__p += '\n\t  \t\t</ul>\n  \t\t';
 } ;
__p += '\n\t\t</div>\n\n\t\t<div class="crop2 clearfix flex-column no-padding">\n\t\t\t';
  if (label === 'individuals') { ;
__p += '\n\t\t\t\t<div class="height-padding col">\n\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t<label>From date (history): </label>\n\t\t\t\t\t\t\t<div class="js-datetimepicker-history input-group date">\n\t\t\t\t\t\t\t\t\t<span class="input-group-addon">\n\t\t\t\t\t\t\t\t\t\t\t<span class="reneco-calendar reneco" ></span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<input class="js-date-history form-control" type="text" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t\t<label>All (history): </label>\n\t\t\t\t\t\t\t\t<input class="js-checkbox-history form-control" type="checkbox" />\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t';
 } ;
__p += '\n\n\t\t\t<div class="js-filters clearfix full-height flex1 overflow-auto height-padding full-width bottom-padding"></div>\n\t\t</div>\n\n\t\t<div class="toolbar bottom">\n\t\t\t<button class="js-btn-clear btn pull-left">Clear</button>\n\t\t\t<button class="js-btn-filter btn btn-success pull-right">\n\t\t\t\t<span class="reneco reneco-search"></span>\n\t\t\t\t&nbsp;Search\n\t\t\t</button>\n\t\t</div>\n\t</div>\n\n\t<div class="col-xs-12 col-md-8 full-height dark no-padding">\n\t\t<div class="toolbar top">\n\t\t\t<legend class="pull-left text-right">Total ' +
((__t = ( label )) == null ? '' : __t) +
' : <span class="js-total-records"></span></legend>\n\t\t\t<div class="clearfix pull-right">\n\t\t\t\t<select class="js-page-size form-control">\n\t\t\t\t\t<option value="" disabled selected>rows per page</option>\n\t\t\t\t\t<option value="20">20</option>\n\t\t\t\t\t<option value="50">50</option>\n\t\t\t\t\t<option value="200">200</option>\n\t\t\t\t\t<option value="500">500</option>\n\t\t\t\t\t<option value="1000">1000</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\n\t\t\t';
  if (typeof(displayMap) !== 'undefined') { ;
__p += '\n\t\t\t<div class="pull-right">\n\t\t\t\t<button class="js-btn-panel btn btn-success active ">\n\t\t\t\t\t<span class="reneco reneco-sites"></span>\n\t\t\t\t\t&nbsp;Grid\n\t\t\t\t</button>\n\t\t\t\t<button class="js-btn-panel btn btn-success">\n\t\t\t\t\t<span class="reneco reneco-map"></span>\n\t\t\t\t\t&nbsp;Map\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t';
 } ;
__p += '\n\t\t</div>\n\n\n\t\t<div class="crop2 oh no-padding">\n\t\t\t<div class="js-rg-grid col-xs-12 no-padding dyn-panel full-height active"></div>\n\t\t\t<div id="map" class="js-map-pannel col-xs-12 no-padding dyn-panel"></div>\n\t\t</div>\n\n\t\t<div class="toolbar bottom">\n\t\t\t<button class="js-btn-export btn btn-success pull-left">\n\t\t\t\t<span class="reneco reneco-export"></span>\n\t\t\t\t&nbsp;Export data\n\t\t\t</button>\n\n\n\t\t\t';
 if (typeof(availableOptions) === 'undefined') { ;
__p += '\n\t\t\t\t\t<a href="#' +
((__t = ( type )) == null ? '' : __t) +
'/new" class="js-admin js-link-new btn btn-success pull-right">\n\t\t\t\t\t<span class="reneco reneco-entrykey"></span>\n\t\t\t\t\t&nbsp;\n\t\t\t\t\tNew ' +
((__t = ( single )) == null ? '' : __t) +
'\n\t\t\t\t\t</a>\n\t\t\t';
 } else { ;
__p += '\n\t\t\t\t\t<button class="js-admin js-btn-new btn btn-success pull-right">\n\t\t\t\t\t<span class="reneco reneco-entrykey"></span>\n\t\t\t\t\t&nbsp;\n\t\t\t\t\tNew ' +
((__t = ( single )) == null ? '' : __t) +
'\n\t\t\t\t\t</button>\n\t\t\t';
 } ;
__p += '\n\n\t\t</div>\n\t</div>\n';

}
return __p
};

this["JST"]["app/modules/objects/object.new.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="toolbar top">\n\t<a class="js-link-back btn pull-left" href="#' +
((__t = ( type )) == null ? '' : __t) +
'">\n    <span class="reneco reneco-back"></span>\n    &nbsp;\n    <span data-i18n="button.back">Back</span>\n\t</a>\n  <legend>\n  \tCreation of a new ' +
((__t = ( single )) == null ? '' : __t) +
'\n  </legend>\n</div>\n\n<div class="crop2">\n\t<br>\n  <div class="js-form"></div>\n  <br>\n</div>\n\n<div class="toolbar bottom">\n  <button type="button" class="js-btn-save btn btn-success pull-right">\n    <span class="reneco reneco-write"></span>&nbsp;\n  \tCreate\n  </button>\n</div>\n';

}
return __p
};

this["JST"]["app/modules/stations/protocols/observation.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="js-obs-form crop1"></div>\n<div class="js-form-btns toolbar bottom"></div>';

}
return __p
};

this["JST"]["app/modules/stations/protocols/protocol.grid.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="toolbar top">\n  <legend class="pull-left" >' +
((__t = ( Name )) == null ? '' : __t) +
'</legend>\n  <button class="js-btn-form btn btn-success hide pull-right" role="add">\n    <span class="reneco reneco-add"></span>\n  </button>\n</div>\n\n<div class="js-rg-grid crop2 no-padding"></div>\n\n<div class="toolbar bottom">\n  <button class="js-btn-form btn btn-success hide" role="add">\n    <span class="reneco reneco-add"></span>\n  </button>\n  <button class="js-admin js-btn-form btn btn-danger hide btn-sm" role="delete">\n  \t<span class="reneco reneco-trash"></span>\n  \t&nbsp;Delete selected observations\n  </button>\n\n  <div class="pull-right">\n  \t<button class="js-btn-form btn btn-success" role="edit">\n  \t\t<span class="reneco reneco-edit"></span>\n  \t\t&nbsp;\n  \t\t<span data-i18n="button.edit">Edit</span>\n  \t</button>\n  \t<button class="js-btn-form btn btn-default hide" role="cancel">\n  \t\t<span data-i18n="button.cancel">Cancel</span>\n  \t</button>\n  \t<button class="js-btn-form btn btn-success hide" role="save">\n  \t\t<span class="reneco reneco-write"></span>\n  \t\t&nbsp;\n  \t\t<span data-i18n="button.save">Save</span>\n  \t</button>\n  </div>\n\n</div>\n';

}
return __p
};

this["JST"]["app/modules/stations/protocols/protocol.item.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '    <span class="reneco reneco-sheet2"></span> \n    <span class="name" value="' +
((__t = ( ID )) == null ? '' : __t) +
'"> &nbsp; ' +
((__t = ( Name )) == null ? '' : __t) +
'</span>\n\n    <span class="js-total-records badge flex-pull-right">' +
((__t = ( obs.length )) == null ? '' : __t) +
'</span>\n\t\t&nbsp;\n\n\t\t';
 if (!grid) { ;
__p += '\n    <button class="js-btn-add-obs btn btn-xs btn-prevent-collapse btn-success" value="">\n    \t<span class="reneco reneco-add"></span>\n    </button>\n  \t\t\n\t\t';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["app/modules/stations/protocols/protocol.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="toolbar top">\n\t<legend class="pull-left">' +
((__t = ( Name )) == null ? '' : __t) +
'</legend>\n\t<div class="pull-right">\n\t\t';
 if (obs.length > 1) { ;
__p += '\n\t\t<span class="btn text-center switcher pull-left">\n\t\t\t\t<span class="js-record-index">' +
((__t = ( index )) == null ? '' : __t) +
'</span>/<span class="js-total-records">' +
((__t = ( obs.length )) == null ? '' : __t) +
'</span>\n\t\t</span>\n\t\t<button class="js-prev btn pull-left">\n\t\t\t\t<span class="reneco reneco-leftarrow"></span>\n\t\t</button>\n\n\t\t<button class="js-next btn pull-left">\n\t\t\t\t<span class="reneco reneco-rightarrow"></span>\n\t\t</button>\n\t\t';
 } ;
__p += '\n\t</div>\n</div>\n\n<div class="js-rg-observation crop1 osbservations-container"></div>\n';

}
return __p
};

this["JST"]["app/modules/stations/protocols/protocols.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="js-protocols-menu crop1 no-padding"></div>\n<div class="toolbar bottom">\n\t<select name="" id="" class="js-proto-picker form-control flex2">\n\t\t<option value="" disabled selected>Add a protocol</option>\n\t</select>\n</div>';

}
return __p
};

this["JST"]["app/modules/stations/station.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="white scroll-auto col-xs-12 col-md-4 no-padding full-height">\n\n  <div class="js-rg-station half-height">\n    <div class="toolbar top">\n      <a class="btn pull-left" href="#' +
((__t = ( type )) == null ? '' : __t) +
'">\n          <span class="reneco reneco-back"></span>\n          &nbsp;\n          <span data-i18n="button.back">Back</span>\n      </a>\n      <div class="js-navbar pull-left"></div>\n      <div class="js-from-btns pull-right"></div>\n    </div>\n    <div class="crop2">\n      <div class="js-from-station"></div>\n    </div>\n    <div class="">\n      <ul class="nav nav-tabs toolbar bottom">\n      ';
 _.each(uiGridConfs, function(uiGridConf, index){ ;
__p += '\n          <li class="tab-ele ' +
((__t = ( (index == 0)? 'active' : '' )) == null ? '' : __t) +
'">\n            <a href="#' +
((__t = ( uiGridConf.name )) == null ? '' : __t) +
'Tab" class="tab-link">' +
((__t = ( uiGridConf.label )) == null ? '' : __t) +
'</a>\n          </li>\n      ';
 }); ;
__p += '\n      <li class="tab-ele ">\n        <a href="#mapTab" class="tab-link">Map</a>\n      </li>\n      \n      </ul>\n      <!--<div class="js-from-btns"></div>-->\n    </div>\n  </div>\n  \n  <!--<div class="js-rg-protocols half-height">-->\n  <!--</div>-->\n    <div class="tab-content half-height no-padding station-protocols-panel">\n      ';
 _.each(uiGridConfs, function(uiGridConf, index){ ;
__p += '\n        <div id="' +
((__t = ( uiGridConf.name )) == null ? '' : __t) +
'Tab" class="tab-pane full-height fade ' +
((__t = ( (index == 0)? 'in active' : '' )) == null ? '' : __t) +
'">\n\n          <div class="js-rg-' +
((__t = ( uiGridConf.name )) == null ? '' : __t) +
' full-height no-padding"></div>\n        </div>\n      ';
 }); ;
__p += '\n      <div id="mapTab" class="tab-pane full-height no-padding">\n        <div id="map" class="js-map full-height no-padding"></div>\n      </div>\n    </div>\n\n</div>\n\n<div class="js-rg-protocol col-xs-12 col-md-8 no-padding full-height dark">\n  <div class="toolbar top"></div>\n  <div class="crop2 strong-dark"></div>\n  <div class="toolbar bottom"></div>\n</div>\n';

}
return __p
};

this["JST"]["app/modules/stations/stations.new.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="no-padding col-xs-12 col-md-7 ns-full-height">\n\t<div class="toolbar top">\n\t<ul class="nav nav-tabs">\n\t\t <li class="active tab-ele"><a href="#stWithCoords" class="tab-link" data-i18n="stations.coords-tab">With coordinates</a></li>\n\t\t <li class="tab-ele"><a href="#stWithoutCoords" class="tab-link" data-i18n="stations.no-coords-tab">Without coordinates</a></li>\n\t</ul>\n\t</div>\n\t<div class="crop2">\n\t\t<div class="tab-content">\n\t\t\t<br>\n\n\t\t\t<br>\n\t\t\t<div class="js-form clearfix"></div>\n\t\t\t<br>\n\t\t</div>\n\t</div>\n\t<div class="toolbar bottom">\n\t\t\t<!--<button class="js-btn-current-position btn btn-success pull-left">\n\t\t\t\tGet location&nbsp;\n\n\t\t\t<button id="getCurrentPosition" class="btn btn-success pull-left">\n\t\t\t\t<span data-i18n="button.geolocation">Get location</span>&nbsp;\n\n\t\t\t\t<span class="reneco reneco-pin"></span>\n\t\t\t</button>-->\n\t\t\t<button class="js-btn-save btn btn-success pull-right">\n\t\t\t\tSave&nbsp;\n\t\t\t\t<span class="reneco reneco-write"></span>\n\t\t\t</button>\n\t</div>\n</div>\n\n<div class="no-padding col-xs-12 col-md-5 ns-full-height">\n\t<div id="map"></div>\n</div>\n';

}
return __p
};

this["JST"]["app/ns_modules/ns_bbfe/bbfe-listOfNestedModel/tpl-bbfe-listOfNestedModel.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row clearfix nested-model">\n\t<div class="col-xs-12">\n\t\t<label class="col-xs-12" for="">' +
((__t = ( label )) == null ? '' : __t) +
'\n\t\t<button type="button" class="btn btn-sm btn-success pull-right" data-action="add"><span class="reneco reneco-add"></span></button></label>\n\t</div>\n  \n\t<ul class="unstyled clearfix" data-items></ul>\n</div>\n';

}
return __p
};

this["JST"]["app/ns_modules/ns_bbfe/bbfe-objectPicker/tpl-bbfe-objectPicker.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="input-group picker">\n  <span class="input-group-btn input-group-btn-icon picker-icon">\n    <button type="button" id="detailsShow" class="btn ' +
((__t = ( icon )) == null ? '' : __t) +
'"  title="See detail">\n    </button>\n  </span>\n  <input ' +
((__t = ( disabled )) == null ? '' : __t) +
' class="form-control ' +
((__t = ( required )) == null ? '' : __t) +
'" name="' +
((__t = ( key )) == null ? '' : __t) +
'" type="' +
((__t = (type)) == null ? '' : __t) +
'" value="' +
((__t = ( value )) == null ? '' : __t) +
'" data_value="' +
((__t = ( data_value )) == null ? '' : __t) +
'" min="0">\n  <span class="input-group-btn picker">\n    <button type="button" class="btn ' +
((__t = ( visu )) == null ? '' : __t) +
' glyphicon-plus">\n    </button>\n  </span> \n</div>\n';

}
return __p
};

this["JST"]["app/ns_modules/ns_form/NsFormsModule.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<script type="text/template" id="test">\n\t<div id="NsFormButton">\n\t\n\n\t\t<button class="js-admin NsFormModuleDelete btn btn-danger">\n\t\t\t<span class="reneco reneco-trash"></span>\n\t\t</button>\n\t\t\n\t\t\n\t\t\n\t\t<button class="NsFormModuleClear btn btn-default" >\n\t\t\t<span data-i18n="button.clear">Clear</span>\n\t\t</button>\n\t\t\n\n\t\t<div class="pull-right">\n\t\t\t<button class="NsFormModuleEdit btn btn-success" >\n\t\t\t\t<span class="reneco reneco-edit"></span>\n\t\t\t\t&nbsp;\n\t\t\t\t<span data-i18n="button.edit">Edit</span>\n\t\t\t</button>\n\t\t\t<button class="NsFormModuleCancel btn btn-default">\n\t\t\t\t<span data-i18n="button.cancel">Cancel</span>\n\t\t\t</button>\n\t\t\t<button class="NsFormModuleSave btn btn-success" >\n\t\t\t\t<span class="reneco reneco-write"></span>\n\t\t\t\t&nbsp;\n\t\t\t\t<span data-i18n="button.save">Save</span>\n\t\t\t</button>\n\t\t</div>\n\n\t</div>\n</script>\n';

}
return __p
};

this["JST"]["app/ns_modules/ns_grid/grid.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="js-ag-grid ag-grid-container flex1 selectableTextInGrid">\n</div>\n\n';
 if(legend){ ;
__p += '\n<div class="js-grid-legend grid-legend flex-row">\n\t<span>\n\t\t<span class="js-total-selected">0</span>\n\t\t\tselected elements on\n\t\t<span class="js-filtered hidden">\n\t\t\t<span class="js-filtered-content">0</span>\n\t\t \t\tfiltered elements displayed on\n\t\t</span>\n\t\t<span class="js-total-records ">_</span>\n\t\t\ttotal elements\n\t</span>\n</div>\n';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["app/ns_modules/ns_grid/pagination.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="ag-paging-panel ag-font-style flex flex-row">\n  <span id="pageRowSummaryPanel" class="ag-paging-row-summary-panel flex1 text-left"> \n    <span id="firstRowOnPage"></span> \n    [TO]  \n    <span id="lastRowOnPage"></span> \n    [OF]  \n    <span id="recordCount"></span> \n  </span> \n  <span class="ag-paging-page-summary-panel flex2">\n    <button type="button" class="ag-paging-button btn btn-default" id="btFirst">[FIRST]</button> \n    <button type="button" class="ag-paging-button btn btn-default" id="btPrevious">[PREVIOUS]</button> \n    <button type="button" class="ag-paging-button btn btn-default" id="btNext">[NEXT]</button> \n    <button type="button" class="ag-paging-button btn btn-default" id="btLast">[LAST]</button> \n  </span> \n  <span class="flex1 text-right"> \n    <span id="current"></span> / <span id="total"></span> \n  </span> \n</div>';

}
return __p
};

this["JST"]["app/ns_modules/ns_map/tpl-legend.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="legend-ctrl">\n\t<i class="reneco reneco-info icon small"></i>\n\t<div class="legend-info">\n\t\t<span class="custom-marker pull-left"></span> &nbsp; <span class="caption"> Unselected</span>\n\t\t<br>\n\t\t<div class="clear"></div>\n\t\t<div class="custom-marker selected pull-left"></div> &nbsp;\n\t\t<span class="caption"> Selected</span>\n\t\t<div class="clear"></div>\n\t\t<br>\n\t\t<div class="marker-cluster marker-cluster-small pull-left"><span>0/6</span></div>&nbsp;<span class="caption"> Selected / Total</span> \n\t\t<div class="clear"></div>\n\t</div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/ns_modules/ns_map/tpl-ns-map.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div id="map"></div>\n';

}
return __p
};

this["JST"]["app/ns_modules/ns_navbar/navbar.tpl.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (display) { ;
__p += '\n<span class="btn text-center switcher pull-left">\n\t\t<span class="js-record-index">' +
((__t = ( index + status.offset + 1 )) == null ? '' : __t) +
'</span>/<span class="js-total-records">' +
((__t = ( totalRecords )) == null ? '' : __t) +
'</span>\n</span>\n<button class="js-prev btn pull-left">\n\t\t<span class="reneco reneco-leftarrow"></span>\n</button>\n\n<button class="js-next btn pull-left">\n\t\t<span class="reneco reneco-rightarrow"></span>\n</button>\n';
 } ;


}
return __p
};

this["JST"]["app/ns_modules/ns_stepper/tpl-newStepper.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div id="stepper" class="stepper ns-full-height">\n\n\t<div id="wizard" class="wizard animated">\n\t\t<div class="clearfix stepper-header">\n\t\t\t<ul id="stepNav" class="step-nav clearfix pull-left"></ul>\n\t\t</div>\n\t\t<div class="step-content" id="step-content"></div>\n\t</div>\n\n\t<div class="actions" id="actions">\n\t\t<button class="btn btn-lg btn-prev btn-custom " id="btnPrev">\n\t\t<i class="icon small reneco reneco-leftarrow white action-picto"></i>\n\t\t<span class="ctrl" data-i18n="stepper.btnPrev">Prev</span>\n\t\t</button>\n\t\t<button class=" pull-right btn btn-lg btn-next btn-custom " id="btnNext" disabled="disabled">\n\t\t<span class="ctrl" data-i18n="stepper.btnNext">Next</span>\n\t\t<i class="icon small reneco reneco-rightarrow white action-picto"></i>\n\t\t</button>\n\t</div>\n</div>\n';

}
return __p
};