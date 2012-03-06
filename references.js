/**
 * references.js
 *
 * references.js is a small JavaScript library that lets you define your sources
 * in a scientific paper like style.
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
      reference_map = {},
      reference_tag;

  reference_list.forEach(function ( el, idx ) {
    if ( el.dataset.name ) {
      reference_map[el.dataset.name] = idx + 1;

      reference_tag = document.createElement("span");
      reference_tag.setAttribute("class", "reference-count-source");
      reference_tag.innerHTML = "[" + reference_map[el.dataset.name] + "]";
      insertBefore(reference_tag, el);
    };
  });

  references_list.forEach(function ( el, idx ) {
    if ( el.dataset.name ) {
      reference_tag = document.createElement("span");
      reference_tag.setAttribute("class", "reference-count");
      reference_tag.innerHTML = "[" + reference_map[el.dataset.name] + "]";
      insertAfter(el, reference_tag);
    };
  });

})(document, window);
