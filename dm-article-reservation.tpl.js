angular.module('templates-main', ['../dm-article-reservation.html']);

angular.module("../dm-article-reservation.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../dm-article-reservation.html",
    "<div ng-show=\"showme\" class=\"md-whiteframe-z2\" layout-padding>\n" +
    "	<h4>{{article.nomArt}}</h4>\n" +
    "	\n" +
    "	<form ng-submit=\"updateReservation()\">\n" +
    "		<div flex layout=\"row\">\n" +
    "			<md-input-container flex class=\"md-block\">\n" +
    "				<input type=\"number\" placeholder=\"Total\" min=\"0\" max=\"{{article.qteCmd-article.qteRes}}\" readonly ng-model=\"totalReservation\"/>\n" +
    "			</md-input-container>\n" +
    "			\n" +
    "			<span flex></span>\n" +
    "			\n" +
    "			<md-button type=\"submit\" aria-label=\"Enregistrer\" class=\"md-fab md-raised md-mini\" permission only=\"['GCOM_COORDINATION', 'GCOM_ADMIN']\">\n" +
    "				<md-tooltip md-direction=\"top\" md-visible=\"tooltipVisible\" md-autohide=\"true\">\n" +
    "					Enregistrer\n" +
    "				</md-tooltip>\n" +
    "				<md-icon md-svg-src=\"content:save\" aria-label=\"Enregistrer\"></md-icon>\n" +
    "			</md-button>\n" +
    "			\n" +
    "			<md-button aria-label=\"Enregistrer\" class=\"md-fab md-raised md-mini\" ng-click=\"showme=false\">\n" +
    "				<md-tooltip md-direction=\"top\" md-visible=\"tooltipVisible\" md-autohide=\"true\">\n" +
    "					Fermer\n" +
    "				</md-tooltip>\n" +
    "				<md-icon md-svg-src=\"navigation:close\" aria-label=\"Fermer\"></md-icon>\n" +
    "			</md-button>\n" +
    "			\n" +
    "			\n" +
    "			\n" +
    "			\n" +
    "		</div>\n" +
    "		\n" +
    "		<div flex layout=\"row\" ng-repeat=\"res in reservation\">\n" +
    "			<md-input-container flex class=\"md-block\">\n" +
    "				<label>Dépot</label>\n" +
    "				<input type=\"text\" disabled ng-model=\"res.depot\"/>\n" +
    "			</md-input-container>\n" +
    "			\n" +
    "			<md-input-container flex class=\"md-block\">\n" +
    "				<label>Disponible</label>\n" +
    "				<input type=\"number\" disabled ng-model=\"res.disponible\"/>\n" +
    "			</md-input-container>\n" +
    "			\n" +
    "			<md-input-container flex class=\"md-block\">\n" +
    "				<label>Reservé</label>\n" +
    "				<input type=\"number\" disabled ng-model=\"res.qteRes\"/>\n" +
    "			</md-input-container>\n" +
    "			\n" +
    "			<md-input-container flex class=\"md-block\">\n" +
    "				<label>Reservation</label>\n" +
    "				<input type=\"number\" min=\"0\" max=\"{{article.qteCmd - article.qteRes}}\" ng-model=\"res.qteARes\" ng-change=\"getTotal()\"/>\n" +
    "			</md-input-container>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);
