!(function () {
	var e = (window.rudderanalytics = window.rudderanalytics || []);
	(e.methods = [
	  "load",
	  "page",
	  "track",
	  "identify",
	  "alias",
	  "group",
	  "ready",
	  "reset",
	  "getAnonymousId",
	  "setAnonymousId",
	]),
	  (e.factory = function (t) {
		return function () {
		  var r = Array.prototype.slice.call(arguments);
		  return r.unshift(t), e.push(r), e;
		};
	  });
	for (var t = 0; t < e.methods.length; t++) {
	  var r = e.methods[t];
	  e[r] = e.factory(r);
	}
	(e.loadJS = function (e, t) {
	  var r = document.createElement("script");
	  (r.type = "text/javascript"),
		(r.async = !0),
		(r.src = "../js/rudder-analytics.min.js");
	  var a = document.getElementsByTagName("script")[0];
	  a.parentNode.insertBefore(r, a);
	}),
	  e.loadJS(),
	  e.load(
		"26VNiqp34uLIFUzWxq1aHCMOlAr",
		"../../external.html?link=https://devfoliouaji.dataplane.rudderstack.com/"
	  ),
	  e.page();
  })();