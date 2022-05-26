(function(window, undefined) {
  var dictionary = {
    "d7930ee1-d87b-4b37-81ef-07476bfb38d7": "Reports",
    "79c60242-6bcc-42bb-8e2e-da5b157a1ec8": "Projects",
    "ecd5f453-a5c1-4cdf-b0b4-fbdd4ce9e1e6": "Home Dashboard",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Task management dashboard",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);