/**
 * references.js
 *
 * impress.js is a ...
 *
 * MIT Licensed.
 *
 * Copyright 2012 Philipp Tessenow (http://tessenow.org)
 */

(function ( document, window ) {
  'use strict';

  var insertAfter = function ( el, insert ) {
    if (el.nextSibling) {
      el.parentNode.insertBefore(insert, el.nextSibling);
    } else {
      el.parentNode.appendChild(insert);
    }
  };

  // DOM ELEMENTS

  var reference_list = [].slice.call(  document.querySelectorAll(".reference")  ),
      references_list = [].slice.call( document.querySelectorAll(".references") ),
      reference_map = {};

  reference_list.forEach(function ( el, idx ) {
    if ( el.dataset.name ) {
      reference_map[el.dataset.name] = el.dataset.name;
    };
  });

  references_list.forEach(function ( el, idx ) {
    if ( el.dataset.name ) {
      var ref = document.createElement("span");
      ref.setAttribute("class", "reference-count");
      ref.innerHTML = "[" + reference_map[el.dataset.name] + "]";
      insertAfter(el, ref);
    };
  });

})(document, window);
