references.js
==============

It's a small JavaScript library that lets you reference your sources in a
scientific paper like style.

Usage
------

Add references.js at the end of your page:

```
<script src="references.js" type="text/javascript"></script>
```

Mark your references/sources within a DOM element, that has the 'reference' class assigned:

```
<span class="reference" data-name="tessenow2012"><a href="https://github.com/tessi/references.js">references.js</a></span>
```

Now you can add references to the reference wherever you wish.
To reference your source in the HTML document wrap your text within a DOM element, that has the 'references' class assigned:

```
<span class="references" data-name="tessenow2012">This text references <em>references.js</em></span>
```

The data-name attribute links your reference and source.
The result should be something like:

```
Some Text in your HTML page:
This text references references.js [1]

Sources:
[1] references.js
```

The numbers are generated in the order the references are listed. So it is no longer a problem to resort your references. Yay!

LICENSE
---------

Copyright 2012 Philipp Tessenow. Released under MIT License.

