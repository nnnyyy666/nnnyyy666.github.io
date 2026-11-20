// Импортируем jQuery
/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

// Импортируем Popper
// //= ../../../node_modules/popper.js/dist/umd/popper.js

// Импортируем необходимые js-файлы Bootstrap 4
/*!
  * Bootstrap util.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Util = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.3): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($__default['default'](event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $__default['default'](this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (_) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $__default['default'](element).css('transition-duration');
      var transitionDelay = $__default['default'](element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $__default['default'](element).trigger(TRANSITION_END);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $__default['default'] === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();

  return Util;

})));
//# sourceMappingURL=util.js.map
//  //= ../../../node_modules/bootstrap/js/dist/alert.js
/*!
  * Bootstrap button.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Button = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'button';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY + DATA_API_KEY;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
      this.shouldAvoidTriggerChange = false;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            if (!this.shouldAvoidTriggerChange) {
              $__default['default'](input).trigger('change');
            }
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          $element.data(DATA_KEY, data);
        }

        data.shouldAvoidTriggerChange = avoidTriggerChange;

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
      button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
        Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
      }
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
    $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Button._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Button;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;

})));
//# sourceMappingURL=button.js.map
/*!
  * Bootstrap carousel.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Carousel = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'carousel';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY;
  var EVENT_SLID = "slid" + EVENT_KEY;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY + DATA_API_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible

      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util__default['default'].triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $__default['default'](this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $__default['default'](this._element).off(EVENT_KEY);
      $__default['default'].removeData(this._element, DATA_KEY);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util__default['default'].typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $__default['default'](this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE));
        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $__default['default'].Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
        $__default['default'](nextElement).addClass(orderClassName);
        Util__default['default'].reflow(nextElement);
        $__default['default'](activeElement).addClass(directionalClassName);
        $__default['default'](nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util__default['default'].getTransitionDurationFromElement(activeElement);
        $__default['default'](activeElement).one(Util__default['default'].TRANSITION_END, function () {
          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE);
          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $__default['default'](_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE);
        this._isSliding = false;
        $__default['default'](this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY);

        var _config = _extends({}, Default, $__default['default'](this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $__default['default'](this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util__default['default'].getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $__default['default'](selector)[0];

      if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($__default['default'](target), config);

      if (slideIndex) {
        $__default['default'](target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $__default['default'](carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Carousel._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Carousel;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;

})));
//# sourceMappingURL=carousel.js.map
/*!
  * Bootstrap collapse.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Collapse = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var Default = {
    toggle: true,
    parent: ''
  };
  var DefaultType = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY;
  var EVENT_SHOWN = "shown" + EVENT_KEY;
  var EVENT_HIDE = "hide" + EVENT_KEY;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util__default['default'].getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default['default'].Event(EVENT_SHOW);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default['default'](actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default['default'](_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util__default['default'].getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util__default['default'].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW)) {
        return;
      }

      var startEvent = $__default['default'].Event(EVENT_HIDE);
      $__default['default'](this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util__default['default'].reflow(this._element);
      $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util__default['default'].getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW)) {
              $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util__default['default'].getTransitionDurationFromElement(this._element);
      $__default['default'](this._element).one(Util__default['default'].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util__default['default'].typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util__default['default'].isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default['default'](children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW);

      if (triggerArray.length) {
        $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util__default['default'].getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default['default'](this);
        var data = $element.data(DATA_KEY);

        var _config = _extends({}, Default, $element.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $element.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default['default'](this);
    var selector = Util__default['default'].getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default['default'](selectors).each(function () {
      var $target = $__default['default'](this);
      var data = $target.data(DATA_KEY);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Collapse._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Collapse;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;

})));
//# sourceMappingURL=collapse.js.map
/*!
  * Bootstrap dropdown.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('popper.js'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', 'popper.js', './util.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Dropdown = factory(global.jQuery, global.Popper, global.Util));
}(this, (function ($, Popper, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'dropdown';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE = "hide" + EVENT_KEY;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY;
  var EVENT_SHOW = "show" + EVENT_KEY;
  var EVENT_SHOWN = "shown" + EVENT_KEY;
  var EVENT_CLICK = "click" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY + DATA_API_KEY;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default['default'].Event(EVENT_SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper__default['default'] === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util__default['default'].isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW).trigger($__default['default'].Event(EVENT_SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default['default'].Event(EVENT_HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default['default'](parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW);
      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW).trigger($__default['default'].Event(EVENT_HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      $__default['default'](this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default['default'](this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
      Util__default['default'].typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default['default'](this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default['default'](this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _extends({}, popperConfig, this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default['default'](this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default['default'](toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default['default'].Event(EVENT_HIDE, relatedTarget);
        $__default['default'](parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW);
        $__default['default'](parent).removeClass(CLASS_NAME_SHOW).trigger($__default['default'].Event(EVENT_HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util__default['default'].getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
        if (event.which === ESCAPE_KEYCODE) {
          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE)).trigger('focus');
        }

        $__default['default'](this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $__default['default'](item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
  }).on(EVENT_CLICK_DATA_API, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Dropdown._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Dropdown;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;

})));
//# sourceMappingURL=dropdown.js.map

/*!
  * Bootstrap modal.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Modal = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'modal';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE = "hide" + EVENT_KEY;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY;
  var EVENT_SHOW = "show" + EVENT_KEY;
  var EVENT_SHOWN = "shown" + EVENT_KEY;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY;
  var EVENT_RESIZE = "resize" + EVENT_KEY;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $__default['default'].Event(EVENT_SHOW, {
        relatedTarget: relatedTarget
      });
      $__default['default'](this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($__default['default'](event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default['default'].Event(EVENT_HIDE);
      $__default['default'](this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'](this._element).removeClass(CLASS_NAME_SHOW);
      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
      $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util__default['default'].getTransitionDurationFromElement(this._element);
        $__default['default'](this._element).one(Util__default['default'].TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default['default'](htmlElement).off(EVENT_KEY);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $__default['default'](document).off(EVENT_FOCUSIN);
      $__default['default'].removeData(this._element, DATA_KEY);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util__default['default'].typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
        $__default['default'](this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.isDefaultPrevented()) {
          return;
        }

        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

        if (!isModalOverflowing) {
          this._element.style.overflowY = 'hidden';
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util__default['default'].getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._element).off(Util__default['default'].TRANSITION_END);
        $__default['default'](this._element).one(Util__default['default'].TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);

          if (!isModalOverflowing) {
            $__default['default'](_this3._element).one(Util__default['default'].TRANSITION_END, function () {
              _this3._element.style.overflowY = '';
            }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
          }
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      this._element.setAttribute('role', 'dialog');

      if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util__default['default'].reflow(this._element);
      }

      $__default['default'](this._element).addClass(CLASS_NAME_SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default['default'].Event(EVENT_SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $__default['default'](_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util__default['default'].getTransitionDurationFromElement(this._dialog);
        $__default['default'](this._dialog).one(Util__default['default'].TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $__default['default'](window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $__default['default'](window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $__default['default'](_this8._element).trigger(EVENT_HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default['default'](this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE) ? CLASS_NAME_FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default['default'](this._backdrop).appendTo(document.body);
        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util__default['default'].reflow(this._backdrop);
        }

        $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util__default['default'].getTransitionDurationFromElement(this._backdrop);
        $__default['default'](this._backdrop).one(Util__default['default'].TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE)) {
          var _backdropTransitionDuration = Util__default['default'].getTransitionDurationFromElement(this._backdrop);

          $__default['default'](this._backdrop).one(Util__default['default'].TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $__default['default'](fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default['default'](element).css('padding-right');
          $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default['default'](stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default['default'](element).css('margin-right');
          $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default['default'](document.body).css('padding-right');
        $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $__default['default'](fixedContent).each(function (index, element) {
        var padding = $__default['default'](element).data('padding-right');
        $__default['default'](element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $__default['default'](elements).each(function (index, element) {
        var margin = $__default['default'](element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default['default'](element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default['default'](document.body).data('padding-right');
      $__default['default'](document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY);

        var _config = _extends({}, Default, $__default['default'](this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default['default'](this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    var _this11 = this;

    var target;
    var selector = Util__default['default'].getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default['default'](target).data(DATA_KEY) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default['default'](target).one(EVENT_SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN, function () {
        if ($__default['default'](_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default['default'](target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Modal._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Modal;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;

})));
//# sourceMappingURL=modal.js.map

/*!
  * Bootstrap scrollspy.js v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ScrollSpy = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollspy';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY;
  var EVENT_SCROLL = "scroll" + EVENT_KEY;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util__default['default'].getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      $__default['default'](this._scrollElement).off(EVENT_KEY);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util__default['default'].isElement(config.target)) {
        var id = $__default['default'](config.target).attr('id');

        if (!id) {
          id = Util__default['default'].getUID(NAME);
          $__default['default'](config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util__default['default'].typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE);
        $link.addClass(CLASS_NAME_ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE);
      }

      $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default['default'](this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default['default'](scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = ScrollSpy._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = ScrollSpy;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;

})));
//# sourceMappingURL=scrollspy.js.map

// // //= ../../../node_modules/bootstrap/js/dist/toast.js

// Импортируем другие js-файлы

// //= ie.js

/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
/*!
 * VERSION: 1.20.3
 * DATE: 2017-10-02
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.20.3",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,i,j,k,l,m,n,o,p=this._dirty?this.totalDuration():this._totalDuration,q=this._time,r=this._totalTime,s=this._cycle,t=this._duration,u=this._rawPrevTime;if(a>=p-1e-7&&a>=0?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=t,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(e=!0,f="onComplete",d=d||this._timeline.autoRemoveChildren),0===t&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(a=0),(0>u||0>=a&&a>=-1e-7||u===g&&"isPause"!==this.data)&&u!==a&&(d=!0,u>g&&(f="onReverseComplete")),this._rawPrevTime=n=!b||a||u===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==r||0===t&&u>0)&&(f="onReverseComplete",e=this._reversed),0>a&&(this._active=!1,0===t&&(this._initted||!this.vars.lazy||d)&&(u>=0&&(d=!0),this._rawPrevTime=n=!b||a||u===a?a:g)),this._initted||(d=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(j=t+this._repeatDelay,this._cycle=this._totalTime/j>>0,0!==this._cycle&&this._cycle===this._totalTime/j&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*j,this._yoyo&&0!==(1&this._cycle)&&(this._time=t-this._time,o=this._yoyoEase||this.vars.yoyoEase,o&&(this._yoyoEase||(o!==!0||this._initted?this._yoyoEase=o=o===!0?this._ease:o instanceof Ease?o:Ease.map[o]:(o=this.vars.ease,this._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,this.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),this.ratio=o?1-o.getRatio((t-this._time)/t):0)),this._time>t?this._time=t:this._time<0&&(this._time=0)),this._easeType&&!o?(k=this._time/t,l=this._easeType,m=this._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:this._time/t<.5?this.ratio=k/2:this.ratio=1-k/2):o||(this.ratio=this._ease.getRatio(this._time/t))),q===this._time&&!d&&s===this._cycle)return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=q,this._totalTime=r,this._rawPrevTime=u,this._cycle=s,h.lazyTweens.push(this),void(this._lazy=[a,b]);!this._time||e||o?e&&this._ease._calcEnd&&!o&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/t)}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==q&&a>=0&&(this._active=!0),0===r&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,!0,d):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===t)&&(b||this._callback("onStart"))),i=this._firstPT;i;)i.f?i.t[i.p](i.c*this.ratio+i.s):i.t[i.p]=i.c*this.ratio+i.s,i=i._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,!0,d),b||(this._totalTime!==r||f)&&this._callback("onUpdate")),this._cycle!==s&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),f&&(!this._gc||d)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,!0,d),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this._callback(f),0===t&&this._rawPrevTime===g&&n!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.20.3",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&e.render((this.rawTime()-e._startTime)*e._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._time,o=this._dirty?this.totalDuration():this._totalDuration,p=this._startTime,q=this._timeScale,r=this._paused;if(n!==this._time&&(a+=this._time-n),a>=o-1e-7&&a>=0)this._totalTime=this._time=o,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=o+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=n)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==n&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==n&&a>0&&(this._active=!0),0===n&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=n)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=n&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.20.3",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,
d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.20.3",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!Ha||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Na(a))},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h=!$(a)||"none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{
parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},q.config=b.config=function(a,c){return new b(a,c)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p=f.length,s=p;--p>-1;)(l=q[f[p]]||new r(f[p],[])).gsClass?(i[p]=l.gsClass,s--):j&&l.sc.push(this);if(0===s&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){return arguments.length?(p=a||1/m,void(q=Math.min(b,p,0))):1/m>p},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,X){j||i.wake();var c=this.vars.useFrames?W:X;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&("hidden"!==d.visibilityState||!i.lagSmoothing())&&i.wake();var a=setTimeout(E,2e3);a.unref&&a.unref()};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Z(),this.render(a,b,!1),J.length&&Z())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||m,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,
this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?V[G.defaultOverwrite]:"number"==typeof i?i>>0:V[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=$(f,this,!1),1===i&&this._siblings[e].length>1&&aa(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=$(b,this,!1),1===i&&this._siblings.length>1&&aa(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)U[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!R[c]||R[c]&&R[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.20.3",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=/[\+-]=-?[\.\d]/,N=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},O=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=N,M.test(b)&&(l.end=null),l},P=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=O(m,n?parseFloat(o.s)+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},Q=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:O},R=G._plugins={},S=Q.tweenLookup={},T=0,U=Q.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},W=D._rootFramesTimeline=new F,X=D._rootTimeline=new F,Y=30,Z=Q.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};X._startTime=i.time,W._startTime=i.frame,X._active=W._active=!0,setTimeout(Z,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Z(),X.render((i.time-X._startTime)*X._timeScale,!1,!1),W.render((i.frame-W._startTime)*W._timeScale,!1,!1),J.length&&Z(),i.frame>=Y){Y=i.frame+(parseInt(G.autoSleep,10)||120);for(c in S){for(b=S[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete S[c]}if(c=X._first,(!c||c._paused)&&G.autoSleep&&!W._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var $=function(a,b,c){var d,e,f=a._gsTweenID;if(S[f||(a._gsTweenID=f="t"+T++)]||(S[f]={target:a,tweens:[]}),b&&(d=S[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return S[f].tweens},_=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},aa=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ba(b,0,o),0===ba(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!_(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ba=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)U[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Z(),this.vars.css||b.style&&b!==a&&b.nodeType&&R.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],U[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(R[g]&&(j=new R[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=P.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&aa(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,!0,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,!0,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,!0,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!_(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=$(d[c],this,!0);else this._siblings=$(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=$(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ca=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ca.prototype},!0);if(h=ca.prototype,ca.version="1.19.0",ca.API=2,h._firstPT=null,h._addTween=P,h.setRatio=N,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ca.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ca.API&&(R[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ca.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ca(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ca.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
(typeof navigator !== "undefined") && (function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(function() {
            return factory(root);
        });
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(root);
    } else {
        root.lottie = factory(root);
        root.bodymovin = root.lottie;
    }
}((window || {}), function(window) {
	"use strict";var svgNS="http://www.w3.org/2000/svg",locationHref="",initialDefaultFrame=-999999,subframeEnabled=!0,expressionsPlugin,isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),cachedColors={},bm_rounder=Math.round,bm_rnd,bm_pow=Math.pow,bm_sqrt=Math.sqrt,bm_abs=Math.abs,bm_floor=Math.floor,bm_max=Math.max,bm_min=Math.min,blitter=10,BMMath={};function ProjectInterface(){return{}}!function(){var t,e=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],r=e.length;for(t=0;t<r;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){if("object"===typeof t&&t.length){var e,r=createSizedArray(t.length),i=t.length;for(e=0;e<i;e+=1)r[e]=Math.abs(t[e]);return r}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function roundValues(t){bm_rnd=t?Math.round:function(t){return t}}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin=t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility=t.style.webkitBackfaceVisibility="visible",t.style.transformStyle=t.style.webkitTransformStyle=t.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(t,e,r,i){this.type=t,this.currentTime=e,this.totalTime=r,this.direction=i<0?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}function BMCompleteLoopEvent(t,e,r,i){this.type=t,this.currentLoop=r,this.totalLoops=e,this.direction=i<0?-1:1}function BMSegmentStartEvent(t,e,r){this.type=t,this.firstFrame=e,this.totalFrames=r}function BMDestroyEvent(t,e){this.type=t,this.target=e}function BMRenderFrameErrorEvent(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}function BMConfigErrorEvent(t){this.type="configError",this.nativeError=t}function BMAnimationConfigErrorEvent(t,e){this.type=t,this.nativeError=e,this.currentTime=currentTime}roundValues(!1);var createElementID=(G=0,function(){return"__lottie_element_"+ ++G}),G;function HSVtoRGB(t,e,r){var i,s,a,n,o,h,p,l;switch(h=r*(1-e),p=r*(1-(o=6*t-(n=Math.floor(6*t)))*e),l=r*(1-(1-o)*e),n%6){case 0:i=r,s=l,a=h;break;case 1:i=p,s=r,a=h;break;case 2:i=h,s=r,a=l;break;case 3:i=h,s=p,a=r;break;case 4:i=l,s=h,a=r;break;case 5:i=r,s=h,a=p}return[i,s,a]}function RGBtoHSV(t,e,r){var i,s=Math.max(t,e,r),a=Math.min(t,e,r),n=s-a,o=0===s?0:n/s,h=s/255;switch(s){case a:i=0;break;case t:i=e-r+n*(e<r?6:0),i/=6*n;break;case e:i=r-t+2*n,i/=6*n;break;case r:i=t-e+4*n,i/=6*n}return[i,o,h]}function addSaturationToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[1]+=e,1<r[1]?r[1]=1:r[1]<=0&&(r[1]=0),HSVtoRGB(r[0],r[1],r[2])}function addBrightnessToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[2]+=e,1<r[2]?r[2]=1:r[2]<0&&(r[2]=0),HSVtoRGB(r[0],r[1],r[2])}function addHueToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[0]+=e/360,1<r[0]?r[0]-=1:r[0]<0&&(r[0]+=1),HSVtoRGB(r[0],r[1],r[2])}var rgbToHex=function(){var t,e,i=[];for(t=0;t<256;t+=1)e=t.toString(16),i[t]=1==e.length?"0"+e:e;return function(t,e,r){return t<0&&(t=0),e<0&&(e=0),r<0&&(r=0),"#"+i[t]+i[e]+i[r]}}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function(t,e){if(this._cbs[t])for(var r=this._cbs[t].length,i=0;i<r;i++)this._cbs[t][i](e)},addEventListener:function(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)},removeEventListener:function(t,e){if(e){if(this._cbs[t]){for(var r=0,i=this._cbs[t].length;r<i;)this._cbs[t][r]===e&&(this._cbs[t].splice(r,1),r-=1,i-=1),r+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}};var createTypedArray="function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?function(t,e){return"float32"===t?new Float32Array(e):"int16"===t?new Int16Array(e):"uint8c"===t?new Uint8ClampedArray(e):void 0}:function(t,e){var r,i=0,s=[];switch(t){case"int16":case"uint8c":r=1;break;default:r=1.1}for(i=0;i<e;i+=1)s.push(r);return s};function createSizedArray(t){return Array.apply(null,{length:t})}function createNS(t){return document.createElementNS(svgNS,t)}function createTag(t){return document.createElement(t)}function DynamicPropertyContainer(){}DynamicPropertyContainer.prototype={addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&(this.dynamicProperties.push(t),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){this._mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(t){this.container=t,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var getBlendMode=(Pa={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"},function(t){return Pa[t]||""}),Pa,Matrix=function(){var s=Math.cos,a=Math.sin,n=Math.tan,i=Math.round;function t(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function e(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1)}function r(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1)}function o(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1)}function h(t){if(0===t)return this;var e=s(t),r=a(t);return this._t(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1)}function p(t,e){return this._t(1,e,t,1,0,0)}function l(t,e){return this.shear(n(t),n(e))}function f(t,e){var r=s(e),i=a(e);return this._t(r,i,0,0,-i,r,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,n(t),1,0,0,0,0,1,0,0,0,0,1)._t(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1)}function m(t,e,r){return r||0===r||(r=1),1===t&&1===e&&1===r?this:this._t(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1)}function c(t,e,r,i,s,a,n,o,h,p,l,f,m,c,d,u){return this.props[0]=t,this.props[1]=e,this.props[2]=r,this.props[3]=i,this.props[4]=s,this.props[5]=a,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=p,this.props[10]=l,this.props[11]=f,this.props[12]=m,this.props[13]=c,this.props[14]=d,this.props[15]=u,this}function d(t,e,r){return r=r||0,0!==t||0!==e||0!==r?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1):this}function u(t,e,r,i,s,a,n,o,h,p,l,f,m,c,d,u){var y=this.props;if(1===t&&0===e&&0===r&&0===i&&0===s&&1===a&&0===n&&0===o&&0===h&&0===p&&1===l&&0===f)return y[12]=y[12]*t+y[15]*m,y[13]=y[13]*a+y[15]*c,y[14]=y[14]*l+y[15]*d,y[15]=y[15]*u,this._identityCalculated=!1,this;var g=y[0],v=y[1],b=y[2],P=y[3],_=y[4],A=y[5],S=y[6],x=y[7],E=y[8],k=y[9],T=y[10],M=y[11],D=y[12],F=y[13],I=y[14],C=y[15];return y[0]=g*t+v*s+b*h+P*m,y[1]=g*e+v*a+b*p+P*c,y[2]=g*r+v*n+b*l+P*d,y[3]=g*i+v*o+b*f+P*u,y[4]=_*t+A*s+S*h+x*m,y[5]=_*e+A*a+S*p+x*c,y[6]=_*r+A*n+S*l+x*d,y[7]=_*i+A*o+S*f+x*u,y[8]=E*t+k*s+T*h+M*m,y[9]=E*e+k*a+T*p+M*c,y[10]=E*r+k*n+T*l+M*d,y[11]=E*i+k*o+T*f+M*u,y[12]=D*t+F*s+I*h+C*m,y[13]=D*e+F*a+I*p+C*c,y[14]=D*r+F*n+I*l+C*d,y[15]=D*i+F*o+I*f+C*u,this._identityCalculated=!1,this}function y(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function g(t){for(var e=0;e<16;){if(t.props[e]!==this.props[e])return!1;e+=1}return!0}function v(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e]}function b(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}function P(t,e,r){return{x:t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}}function _(t,e,r){return t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12]}function A(t,e,r){return t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13]}function S(t,e,r){return t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}function x(){var t=this.props[0]*this.props[5]-this.props[1]*this.props[4],e=this.props[5]/t,r=-this.props[1]/t,i=-this.props[4]/t,s=this.props[0]/t,a=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/t,n=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/t,o=new Matrix;return o.props[0]=e,o.props[1]=r,o.props[4]=i,o.props[5]=s,o.props[12]=a,o.props[13]=n,o}function E(t){return this.getInverseMatrix().applyToPointArray(t[0],t[1],t[2]||0)}function k(t){var e,r=t.length,i=[];for(e=0;e<r;e+=1)i[e]=E(t[e]);return i}function T(t,e,r){var i=createTypedArray("float32",6);if(this.isIdentity())i[0]=t[0],i[1]=t[1],i[2]=e[0],i[3]=e[1],i[4]=r[0],i[5]=r[1];else{var s=this.props[0],a=this.props[1],n=this.props[4],o=this.props[5],h=this.props[12],p=this.props[13];i[0]=t[0]*s+t[1]*n+h,i[1]=t[0]*a+t[1]*o+p,i[2]=e[0]*s+e[1]*n+h,i[3]=e[0]*a+e[1]*o+p,i[4]=r[0]*s+r[1]*n+h,i[5]=r[0]*a+r[1]*o+p}return i}function M(t,e,r){return this.isIdentity()?[t,e,r]:[t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]]}function D(t,e){if(this.isIdentity())return t+","+e;var r=this.props;return Math.round(100*(t*r[0]+e*r[4]+r[12]))/100+","+Math.round(100*(t*r[1]+e*r[5]+r[13]))/100}function F(){for(var t=0,e=this.props,r="matrix3d(";t<16;)r+=i(1e4*e[t])/1e4,r+=15===t?")":",",t+=1;return r}function I(t){return t<1e-6&&0<t||-1e-6<t&&t<0?i(1e4*t)/1e4:t}function C(){var t=this.props;return"matrix("+I(t[0])+","+I(t[1])+","+I(t[4])+","+I(t[5])+","+I(t[12])+","+I(t[13])+")"}return function(){this.reset=t,this.rotate=e,this.rotateX=r,this.rotateY=o,this.rotateZ=h,this.skew=l,this.skewFromAxis=f,this.shear=p,this.scale=m,this.setTransform=c,this.translate=d,this.transform=u,this.applyToPoint=P,this.applyToX=_,this.applyToY=A,this.applyToZ=S,this.applyToPointArray=M,this.applyToTriplePoints=T,this.applyToPointStringified=D,this.toCSS=F,this.to2dCSS=C,this.clone=v,this.cloneFromProps=b,this.equals=g,this.inversePoints=k,this.inversePoint=E,this.getInverseMatrix=x,this._t=this.transform,this.isIdentity=y,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();!function(o,h){var p,l=this,f=256,m=6,c="random",d=h.pow(f,m),u=h.pow(2,52),y=2*u,g=f-1;function v(t){var e,r=t.length,n=this,i=0,s=n.i=n.j=0,a=n.S=[];for(r||(t=[r++]);i<f;)a[i]=i++;for(i=0;i<f;i++)a[i]=a[s=g&s+t[i%r]+(e=a[i])],a[s]=e;n.g=function(t){for(var e,r=0,i=n.i,s=n.j,a=n.S;t--;)e=a[i=g&i+1],r=r*f+a[g&(a[i]=a[s=g&s+e])+(a[s]=e)];return n.i=i,n.j=s,r}}function b(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function P(t,e){for(var r,i=t+"",s=0;s<i.length;)e[g&s]=g&(r^=19*e[g&s])+i.charCodeAt(s++);return _(e)}function _(t){return String.fromCharCode.apply(0,t)}h["seed"+c]=function(t,e,r){var i=[],s=P(function t(e,r){var i,s=[],a=typeof e;if(r&&"object"==a)for(i in e)try{s.push(t(e[i],r-1))}catch(t){}return s.length?s:"string"==a?e:e+"\0"}((e=!0===e?{entropy:!0}:e||{}).entropy?[t,_(o)]:null===t?function(){try{if(p)return _(p.randomBytes(f));var t=new Uint8Array(f);return(l.crypto||l.msCrypto).getRandomValues(t),_(t)}catch(t){var e=l.navigator,r=e&&e.plugins;return[+new Date,l,r,l.screen,_(o)]}}():t,3),i),a=new v(i),n=function(){for(var t=a.g(m),e=d,r=0;t<u;)t=(t+r)*f,e*=f,r=a.g(1);for(;y<=t;)t/=2,e/=2,r>>>=1;return(t+r)/e};return n.int32=function(){return 0|a.g(4)},n.quick=function(){return a.g(4)/4294967296},n.double=n,P(_(a.S),o),(e.pass||r||function(t,e,r,i){return i&&(i.S&&b(i,a),t.state=function(){return b(a,{})}),r?(h[c]=t,e):t})(n,s,"global"in e?e.global:this==h,e.state)},P(h.random(),o)}([],BMMath);var BezierFactory=function(){var t={getBezierEasing:function(t,e,r,i,s){var a=s||("bez_"+t+"_"+e+"_"+r+"_"+i).replace(/\./g,"p");if(o[a])return o[a];var n=new h([t,e,r,i]);return o[a]=n}},o={};var p=11,l=1/(p-1),e="function"==typeof Float32Array;function i(t,e){return 1-3*e+3*t}function s(t,e){return 3*e-6*t}function a(t){return 3*t}function f(t,e,r){return((i(e,r)*t+s(e,r))*t+a(e))*t}function m(t,e,r){return 3*i(e,r)*t*t+2*s(e,r)*t+a(e)}function h(t){this._p=t,this._mSampleValues=e?new Float32Array(p):new Array(p),this._precomputed=!1,this.get=this.get.bind(this)}return h.prototype={get:function(t){var e=this._p[0],r=this._p[1],i=this._p[2],s=this._p[3];return this._precomputed||this._precompute(),e===r&&i===s?t:0===t?0:1===t?1:f(this._getTForX(t),r,s)},_precompute:function(){var t=this._p[0],e=this._p[1],r=this._p[2],i=this._p[3];this._precomputed=!0,t===e&&r===i||this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],r=0;r<p;++r)this._mSampleValues[r]=f(r*l,t,e)},_getTForX:function(t){for(var e=this._p[0],r=this._p[2],i=this._mSampleValues,s=0,a=1,n=p-1;a!==n&&i[a]<=t;++a)s+=l;var o=s+(t-i[--a])/(i[a+1]-i[a])*l,h=m(o,e,r);return.001<=h?function(t,e,r,i){for(var s=0;s<4;++s){var a=m(e,r,i);if(0===a)return e;e-=(f(e,r,i)-t)/a}return e}(t,o,e,r):0===h?o:function(t,e,r,i,s){for(var a,n,o=0;0<(a=f(n=e+(r-e)/2,i,s)-t)?r=n:e=n,1e-7<Math.abs(a)&&++o<10;);return n}(t,s,s+l,e,r)}},t}();function extendPrototype(t,e){var r,i,s=t.length;for(r=0;r<s;r+=1)for(var a in i=t[r].prototype)i.hasOwnProperty(a)&&(e.prototype[a]=i[a])}function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}function createProxyFunction(t){function e(){}return e.prototype=t,e}function bezFunction(){Math;function y(t,e,r,i,s,a){var n=t*i+e*s+r*a-s*i-a*t-r*e;return-.001<n&&n<.001}var l=function(t,e,r,i){var s,a,n,o,h,p,l=defaultCurveSegments,f=0,m=[],c=[],d=bezier_length_pool.newElement();for(n=r.length,s=0;s<l;s+=1){for(h=s/(l-1),a=p=0;a<n;a+=1)o=bm_pow(1-h,3)*t[a]+3*bm_pow(1-h,2)*h*r[a]+3*(1-h)*bm_pow(h,2)*i[a]+bm_pow(h,3)*e[a],m[a]=o,null!==c[a]&&(p+=bm_pow(m[a]-c[a],2)),c[a]=m[a];p&&(f+=p=bm_sqrt(p)),d.percents[s]=h,d.lengths[s]=f}return d.addedLength=f,d};function g(t){this.segmentLength=0,this.points=new Array(t)}function v(t,e){this.partialLength=t,this.point=e}var b,t=(b={},function(t,e,r,i){var s=(t[0]+"_"+t[1]+"_"+e[0]+"_"+e[1]+"_"+r[0]+"_"+r[1]+"_"+i[0]+"_"+i[1]).replace(/\./g,"p");if(!b[s]){var a,n,o,h,p,l,f,m=defaultCurveSegments,c=0,d=null;2===t.length&&(t[0]!=e[0]||t[1]!=e[1])&&y(t[0],t[1],e[0],e[1],t[0]+r[0],t[1]+r[1])&&y(t[0],t[1],e[0],e[1],e[0]+i[0],e[1]+i[1])&&(m=2);var u=new g(m);for(o=r.length,a=0;a<m;a+=1){for(f=createSizedArray(o),p=a/(m-1),n=l=0;n<o;n+=1)h=bm_pow(1-p,3)*t[n]+3*bm_pow(1-p,2)*p*(t[n]+r[n])+3*(1-p)*bm_pow(p,2)*(e[n]+i[n])+bm_pow(p,3)*e[n],f[n]=h,null!==d&&(l+=bm_pow(f[n]-d[n],2));c+=l=bm_sqrt(l),u.points[a]=new v(l,f),d=f}u.segmentLength=c,b[s]=u}return b[s]});function D(t,e){var r=e.percents,i=e.lengths,s=r.length,a=bm_floor((s-1)*t),n=t*e.addedLength,o=0;if(a===s-1||0===a||n===i[a])return r[a];for(var h=i[a]>n?-1:1,p=!0;p;)if(i[a]<=n&&i[a+1]>n?(o=(n-i[a])/(i[a+1]-i[a]),p=!1):a+=h,a<0||s-1<=a){if(a===s-1)return r[a];p=!1}return r[a]+(r[a+1]-r[a])*o}var F=createTypedArray("float32",8);return{getSegmentsLength:function(t){var e,r=segments_length_pool.newElement(),i=t.c,s=t.v,a=t.o,n=t.i,o=t._length,h=r.lengths,p=0;for(e=0;e<o-1;e+=1)h[e]=l(s[e],s[e+1],a[e],n[e+1]),p+=h[e].addedLength;return i&&o&&(h[e]=l(s[e],s[0],a[e],n[0]),p+=h[e].addedLength),r.totalLength=p,r},getNewSegment:function(t,e,r,i,s,a,n){var o,h=D(s=s<0?0:1<s?1:s,n),p=D(a=1<a?1:a,n),l=t.length,f=1-h,m=1-p,c=f*f*f,d=h*f*f*3,u=h*h*f*3,y=h*h*h,g=f*f*m,v=h*f*m+f*h*m+f*f*p,b=h*h*m+f*h*p+h*f*p,P=h*h*p,_=f*m*m,A=h*m*m+f*p*m+f*m*p,S=h*p*m+f*p*p+h*m*p,x=h*p*p,E=m*m*m,k=p*m*m+m*p*m+m*m*p,T=p*p*m+m*p*p+p*m*p,M=p*p*p;for(o=0;o<l;o+=1)F[4*o]=Math.round(1e3*(c*t[o]+d*r[o]+u*i[o]+y*e[o]))/1e3,F[4*o+1]=Math.round(1e3*(g*t[o]+v*r[o]+b*i[o]+P*e[o]))/1e3,F[4*o+2]=Math.round(1e3*(_*t[o]+A*r[o]+S*i[o]+x*e[o]))/1e3,F[4*o+3]=Math.round(1e3*(E*t[o]+k*r[o]+T*i[o]+M*e[o]))/1e3;return F},getPointInSegment:function(t,e,r,i,s,a){var n=D(s,a),o=1-n;return[Math.round(1e3*(o*o*o*t[0]+(n*o*o+o*n*o+o*o*n)*r[0]+(n*n*o+o*n*n+n*o*n)*i[0]+n*n*n*e[0]))/1e3,Math.round(1e3*(o*o*o*t[1]+(n*o*o+o*n*o+o*o*n)*r[1]+(n*n*o+o*n*n+n*o*n)*i[1]+n*n*n*e[1]))/1e3]},buildBezierData:t,pointOnLine2D:y,pointOnLine3D:function(t,e,r,i,s,a,n,o,h){if(0===r&&0===a&&0===h)return y(t,e,i,s,n,o);var p,l=Math.sqrt(Math.pow(i-t,2)+Math.pow(s-e,2)+Math.pow(a-r,2)),f=Math.sqrt(Math.pow(n-t,2)+Math.pow(o-e,2)+Math.pow(h-r,2)),m=Math.sqrt(Math.pow(n-i,2)+Math.pow(o-s,2)+Math.pow(h-a,2));return-1e-4<(p=f<l?m<l?l-f-m:m-f-l:f<m?m-f-l:f-l-m)&&p<1e-4}}}!function(){for(var a=0,t=["ms","moz","webkit","o"],e=0;e<t.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[t[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[e]+"CancelAnimationFrame"]||window[t[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var r=(new Date).getTime(),i=Math.max(0,16-(r-a)),s=setTimeout(function(){t(r+i)},i);return a=r+i,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var bez=bezFunction();function dataFunctionManager(){function f(t,e,r){var i,s,a,n,o,h,p=t.length;for(s=0;s<p;s+=1)if("ks"in(i=t[s])&&!i.completed){if(i.completed=!0,i.tt&&(t[s-1].td=i.tt),[],-1,i.hasMask){var l=i.masksProperties;for(n=l.length,a=0;a<n;a+=1)if(l[a].pt.k.i)d(l[a].pt.k);else for(h=l[a].pt.k.length,o=0;o<h;o+=1)l[a].pt.k[o].s&&d(l[a].pt.k[o].s[0]),l[a].pt.k[o].e&&d(l[a].pt.k[o].e[0])}0===i.ty?(i.layers=m(i.refId,e),f(i.layers,e,r)):4===i.ty?c(i.shapes):5==i.ty&&u(i,r)}}function m(t,e){for(var r=0,i=e.length;r<i;){if(e[r].id===t)return e[r].layers.__used?JSON.parse(JSON.stringify(e[r].layers)):(e[r].layers.__used=!0,e[r].layers);r+=1}}function c(t){var e,r,i;for(e=t.length-1;0<=e;e-=1)if("sh"==t[e].ty){if(t[e].ks.k.i)d(t[e].ks.k);else for(i=t[e].ks.k.length,r=0;r<i;r+=1)t[e].ks.k[r].s&&d(t[e].ks.k[r].s[0]),t[e].ks.k[r].e&&d(t[e].ks.k[r].e[0]);!0}else"gr"==t[e].ty&&c(t[e].it)}function d(t){var e,r=t.i.length;for(e=0;e<r;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function o(t,e){var r=e?e.split("."):[100,100,100];return t[0]>r[0]||!(r[0]>t[0])&&(t[1]>r[1]||!(r[1]>t[1])&&(t[2]>r[2]||!(r[2]>t[2])&&void 0))}var h,r=function(){var i=[4,4,14];function s(t){var e,r,i,s=t.length;for(e=0;e<s;e+=1)5===t[e].ty&&(r=t[e],void 0,i=r.t.d,r.t.d={k:[{s:i,t:0}]})}return function(t){if(o(i,t.v)&&(s(t.layers),t.assets)){var e,r=t.assets.length;for(e=0;e<r;e+=1)t.assets[e].layers&&s(t.assets[e].layers)}}}(),i=(h=[4,7,99],function(t){if(t.chars&&!o(h,t.v)){var e,r,i,s,a,n=t.chars.length;for(e=0;e<n;e+=1)if(t.chars[e].data&&t.chars[e].data.shapes)for(i=(a=t.chars[e].data.shapes[0].it).length,r=0;r<i;r+=1)(s=a[r].ks.k).__converted||(d(a[r].ks.k),s.__converted=!0)}}),s=function(){var i=[4,1,9];function a(t){var e,r,i,s=t.length;for(e=0;e<s;e+=1)if("gr"===t[e].ty)a(t[e].it);else if("fl"===t[e].ty||"st"===t[e].ty)if(t[e].c.k&&t[e].c.k[0].i)for(i=t[e].c.k.length,r=0;r<i;r+=1)t[e].c.k[r].s&&(t[e].c.k[r].s[0]/=255,t[e].c.k[r].s[1]/=255,t[e].c.k[r].s[2]/=255,t[e].c.k[r].s[3]/=255),t[e].c.k[r].e&&(t[e].c.k[r].e[0]/=255,t[e].c.k[r].e[1]/=255,t[e].c.k[r].e[2]/=255,t[e].c.k[r].e[3]/=255);else t[e].c.k[0]/=255,t[e].c.k[1]/=255,t[e].c.k[2]/=255,t[e].c.k[3]/=255}function s(t){var e,r=t.length;for(e=0;e<r;e+=1)4===t[e].ty&&a(t[e].shapes)}return function(t){if(o(i,t.v)&&(s(t.layers),t.assets)){var e,r=t.assets.length;for(e=0;e<r;e+=1)t.assets[e].layers&&s(t.assets[e].layers)}}}(),a=function(){var i=[4,4,18];function p(t){var e,r,i;for(e=t.length-1;0<=e;e-=1)if("sh"==t[e].ty){if(t[e].ks.k.i)t[e].ks.k.c=t[e].closed;else for(i=t[e].ks.k.length,r=0;r<i;r+=1)t[e].ks.k[r].s&&(t[e].ks.k[r].s[0].c=t[e].closed),t[e].ks.k[r].e&&(t[e].ks.k[r].e[0].c=t[e].closed);!0}else"gr"==t[e].ty&&p(t[e].it)}function s(t){var e,r,i,s,a,n,o=t.length;for(r=0;r<o;r+=1){if((e=t[r]).hasMask){var h=e.masksProperties;for(s=h.length,i=0;i<s;i+=1)if(h[i].pt.k.i)h[i].pt.k.c=h[i].cl;else for(n=h[i].pt.k.length,a=0;a<n;a+=1)h[i].pt.k[a].s&&(h[i].pt.k[a].s[0].c=h[i].cl),h[i].pt.k[a].e&&(h[i].pt.k[a].e[0].c=h[i].cl)}4===e.ty&&p(e.shapes)}}return function(t){if(o(i,t.v)&&(s(t.layers),t.assets)){var e,r=t.assets.length;for(e=0;e<r;e+=1)t.assets[e].layers&&s(t.assets[e].layers)}}}();function u(t,e){0!==t.t.a.length||"m"in t.t.p||(t.singleShape=!0)}var t={completeData:function(t,e){t.__complete||(s(t),r(t),i(t),a(t),f(t.layers,t.assets,e),t.__complete=!0)}};return t.checkColors=s,t.checkChars=i,t.checkShapes=a,t.completeLayers=f,t}var dataManager=dataFunctionManager(),FontManager=function(){var a={w:0,size:0,shapes:[]},t=[];function u(t,e){var r=createTag("span");r.style.fontFamily=e;var i=createTag("span");i.innerHTML="giItT1WQy@!-/#",r.style.position="absolute",r.style.left="-10000px",r.style.top="-10000px",r.style.fontSize="300px",r.style.fontVariant="normal",r.style.fontStyle="normal",r.style.fontWeight="normal",r.style.letterSpacing="0",r.appendChild(i),document.body.appendChild(r);var s=i.offsetWidth;return i.style.fontFamily=t+", "+e,{node:i,w:s,parent:r}}t=t.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var e=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this.initTime=Date.now()};return e.getCombinedCharacterCodes=function(){return t},e.prototype.addChars=function(t){if(t){this.chars||(this.chars=[]);var e,r,i,s=t.length,a=this.chars.length;for(e=0;e<s;e+=1){for(r=0,i=!1;r<a;)this.chars[r].style===t[e].style&&this.chars[r].fFamily===t[e].fFamily&&this.chars[r].ch===t[e].ch&&(i=!0),r+=1;i||(this.chars.push(t[e]),a+=1)}}},e.prototype.addFonts=function(t,e){if(t){if(this.chars)return this.isLoaded=!0,void(this.fonts=t.list);var r,i,s,a,n=t.list,o=n.length,h=o;for(r=0;r<o;r+=1){var p,l,f=!0;if(n[r].loaded=!1,n[r].monoCase=u(n[r].fFamily,"monospace"),n[r].sansCase=u(n[r].fFamily,"sans-serif"),n[r].fPath){if("p"===n[r].fOrigin||3===n[r].origin){if(0<(p=document.querySelectorAll('style[f-forigin="p"][f-family="'+n[r].fFamily+'"], style[f-origin="3"][f-family="'+n[r].fFamily+'"]')).length&&(f=!1),f){var m=createTag("style");m.setAttribute("f-forigin",n[r].fOrigin),m.setAttribute("f-origin",n[r].origin),m.setAttribute("f-family",n[r].fFamily),m.type="text/css",m.innerHTML="@font-face {font-family: "+n[r].fFamily+"; font-style: normal; src: url('"+n[r].fPath+"');}",e.appendChild(m)}}else if("g"===n[r].fOrigin||1===n[r].origin){for(p=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),l=0;l<p.length;l++)-1!==p[l].href.indexOf(n[r].fPath)&&(f=!1);if(f){var c=createTag("link");c.setAttribute("f-forigin",n[r].fOrigin),c.setAttribute("f-origin",n[r].origin),c.type="text/css",c.rel="stylesheet",c.href=n[r].fPath,document.body.appendChild(c)}}else if("t"===n[r].fOrigin||2===n[r].origin){for(p=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),l=0;l<p.length;l++)n[r].fPath===p[l].src&&(f=!1);if(f){var d=createTag("link");d.setAttribute("f-forigin",n[r].fOrigin),d.setAttribute("f-origin",n[r].origin),d.setAttribute("rel","stylesheet"),d.setAttribute("href",n[r].fPath),e.appendChild(d)}}}else n[r].loaded=!0,h-=1;n[r].helper=(i=e,s=n[r],a=void 0,(a=createNS("text")).style.fontSize="100px",a.setAttribute("font-family",s.fFamily),a.setAttribute("font-style",s.fStyle),a.setAttribute("font-weight",s.fWeight),a.textContent="1",s.fClass?(a.style.fontFamily="inherit",a.setAttribute("class",s.fClass)):a.style.fontFamily=s.fFamily,i.appendChild(a),createTag("canvas").getContext("2d").font=s.fWeight+" "+s.fStyle+" 100px "+s.fFamily,a),n[r].cache={},this.fonts.push(n[r])}0===h?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}else this.isLoaded=!0},e.prototype.getCharData=function(t,e,r){for(var i=0,s=this.chars.length;i<s;){if(this.chars[i].ch===t&&this.chars[i].style===e&&this.chars[i].fFamily===r)return this.chars[i];i+=1}return("string"==typeof t&&13!==t.charCodeAt(0)||!t)&&console&&console.warn&&console.warn("Missing character from exported characters list: ",t,e,r),a},e.prototype.getFontByName=function(t){for(var e=0,r=this.fonts.length;e<r;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return this.fonts[0]},e.prototype.measureText=function(t,e,r){var i=this.getFontByName(e),s=t.charCodeAt(0);if(!i.cache[s+1]){var a=i.helper;if(" "===t){a.textContent="|"+t+"|";var n=a.getComputedTextLength();a.textContent="||";var o=a.getComputedTextLength();i.cache[s+1]=(n-o)/100}else a.textContent=t,i.cache[s+1]=a.getComputedTextLength()/100}return i.cache[s+1]*r},e.prototype.checkLoadedFonts=function(){var t,e,r,i=this.fonts.length,s=i;for(t=0;t<i;t+=1)this.fonts[t].loaded?s-=1:"n"===this.fonts[t].fOrigin||0===this.fonts[t].origin?this.fonts[t].loaded=!0:(e=this.fonts[t].monoCase.node,r=this.fonts[t].monoCase.w,e.offsetWidth!==r?(s-=1,this.fonts[t].loaded=!0):(e=this.fonts[t].sansCase.node,r=this.fonts[t].sansCase.w,e.offsetWidth!==r&&(s-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==s&&Date.now()-this.initTime<5e3?setTimeout(this.checkLoadedFonts.bind(this),20):setTimeout(function(){this.isLoaded=!0}.bind(this),0)},e.prototype.loaded=function(){return this.isLoaded},e}(),PropertyFactory=function(){var f=initialDefaultFrame,s=Math.abs;function m(t,e){var r,i=this.offsetTime;"multidimensional"===this.propType&&(r=createTypedArray("float32",this.pv.length));for(var s,a,n,o,h,p,l,f,m=e.lastIndex,c=m,d=this.keyframes.length-1,u=!0;u;){if(s=this.keyframes[c],a=this.keyframes[c+1],c===d-1&&t>=a.t-i){s.h&&(s=a),m=0;break}if(a.t-i>t){m=c;break}c<d-1?c+=1:(m=0,u=!1)}var y,g,v,b,P,_,A,S,x,E,k=a.t-i,T=s.t-i;if(s.to){s.bezierData||(s.bezierData=bez.buildBezierData(s.s,a.s||s.e,s.to,s.ti));var M=s.bezierData;if(k<=t||t<T){var D=k<=t?M.points.length-1:0;for(o=M.points[D].point.length,n=0;n<o;n+=1)r[n]=M.points[D].point[n]}else{s.__fnct?f=s.__fnct:(f=BezierFactory.getBezierEasing(s.o.x,s.o.y,s.i.x,s.i.y,s.n).get,s.__fnct=f),h=f((t-T)/(k-T));var F,I=M.segmentLength*h,C=e.lastFrame<t&&e._lastKeyframeIndex===c?e._lastAddedLength:0;for(l=e.lastFrame<t&&e._lastKeyframeIndex===c?e._lastPoint:0,u=!0,p=M.points.length;u;){if(C+=M.points[l].partialLength,0===I||0===h||l===M.points.length-1){for(o=M.points[l].point.length,n=0;n<o;n+=1)r[n]=M.points[l].point[n];break}if(C<=I&&I<C+M.points[l+1].partialLength){for(F=(I-C)/M.points[l+1].partialLength,o=M.points[l].point.length,n=0;n<o;n+=1)r[n]=M.points[l].point[n]+(M.points[l+1].point[n]-M.points[l].point[n])*F;break}l<p-1?l+=1:u=!1}e._lastPoint=l,e._lastAddedLength=C-M.points[l].partialLength,e._lastKeyframeIndex=c}}else{var w,V,R,L,G;if(d=s.s.length,y=a.s||s.e,this.sh&&1!==s.h)if(k<=t)r[0]=y[0],r[1]=y[1],r[2]=y[2];else if(t<=T)r[0]=s.s[0],r[1]=s.s[1],r[2]=s.s[2];else{var N=z(s.s),B=z(y);g=r,v=function(t,e,r){var i,s,a,n,o,h=[],p=t[0],l=t[1],f=t[2],m=t[3],c=e[0],d=e[1],u=e[2],y=e[3];(s=p*c+l*d+f*u+m*y)<0&&(s=-s,c=-c,d=-d,u=-u,y=-y);o=1e-6<1-s?(i=Math.acos(s),a=Math.sin(i),n=Math.sin((1-r)*i)/a,Math.sin(r*i)/a):(n=1-r,r);return h[0]=n*p+o*c,h[1]=n*l+o*d,h[2]=n*f+o*u,h[3]=n*m+o*y,h}(N,B,(t-T)/(k-T)),b=v[0],P=v[1],_=v[2],A=v[3],S=Math.atan2(2*P*A-2*b*_,1-2*P*P-2*_*_),x=Math.asin(2*b*P+2*_*A),E=Math.atan2(2*b*A-2*P*_,1-2*b*b-2*_*_),g[0]=S/degToRads,g[1]=x/degToRads,g[2]=E/degToRads}else for(c=0;c<d;c+=1)1!==s.h&&(h=k<=t?1:t<T?0:(s.o.x.constructor===Array?(s.__fnct||(s.__fnct=[]),s.__fnct[c]?f=s.__fnct[c]:(w=void 0===s.o.x[c]?s.o.x[0]:s.o.x[c],V=void 0===s.o.y[c]?s.o.y[0]:s.o.y[c],R=void 0===s.i.x[c]?s.i.x[0]:s.i.x[c],L=void 0===s.i.y[c]?s.i.y[0]:s.i.y[c],f=BezierFactory.getBezierEasing(w,V,R,L).get,s.__fnct[c]=f)):s.__fnct?f=s.__fnct:(w=s.o.x,V=s.o.y,R=s.i.x,L=s.i.y,f=BezierFactory.getBezierEasing(w,V,R,L).get,s.__fnct=f),f((t-T)/(k-T)))),y=a.s||s.e,G=1===s.h?s.s[c]:s.s[c]+(y[c]-s.s[c])*h,"multidimensional"===this.propType?r[c]=G:r=G}return e.lastIndex=m,r}function z(t){var e=t[0]*degToRads,r=t[1]*degToRads,i=t[2]*degToRads,s=Math.cos(e/2),a=Math.cos(r/2),n=Math.cos(i/2),o=Math.sin(e/2),h=Math.sin(r/2),p=Math.sin(i/2);return[o*h*n+s*a*p,o*a*n+s*h*p,s*h*n-o*a*p,s*a*n-o*h*p]}function c(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==f&&(this._caching.lastFrame>=r&&r<=t||this._caching.lastFrame<e&&t<e))){this._caching.lastFrame>=t&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var i=this.interpolateValue(t,this._caching);this.pv=i}return this._caching.lastFrame=t,this.pv}function d(t){var e;if("unidimensional"===this.propType)e=t*this.mult,1e-5<s(this.v-e)&&(this.v=e,this._mdf=!0);else for(var r=0,i=this.v.length;r<i;)e=t[r]*this.mult,1e-5<s(this.v[r]-e)&&(this.v[r]=e,this._mdf=!0),r+=1}function u(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,r=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)r=this.effectsSequence[t](r);this.setVValue(r),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function y(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function n(t,e,r,i){this.propType="unidimensional",this.mult=r||1,this.data=e,this.v=r?e.k*r:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=u,this.setVValue=d,this.addEffect=y}function o(t,e,r,i){this.propType="multidimensional",this.mult=r||1,this.data=e,this._mdf=!1,this.elem=t,this.container=i,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var s,a=e.k.length;this.v=createTypedArray("float32",a),this.pv=createTypedArray("float32",a);createTypedArray("float32",a);for(this.vel=createTypedArray("float32",a),s=0;s<a;s+=1)this.v[s]=e.k[s]*this.mult,this.pv[s]=e.k[s];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=u,this.setVValue=d,this.addEffect=y}function h(t,e,r,i){this.propType="unidimensional",this.keyframes=e.k,this.offsetTime=t.data.st,this.frameId=-1,this._caching={lastFrame:f,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=e,this.mult=r||1,this.elem=t,this.container=i,this.comp=t.comp,this.v=f,this.pv=f,this._isFirstFrame=!0,this.getValue=u,this.setVValue=d,this.interpolateValue=m,this.effectsSequence=[c.bind(this)],this.addEffect=y}function p(t,e,r,i){this.propType="multidimensional";var s,a,n,o,h,p=e.k.length;for(s=0;s<p-1;s+=1)e.k[s].to&&e.k[s].s&&e.k[s+1]&&e.k[s+1].s&&(a=e.k[s].s,n=e.k[s+1].s,o=e.k[s].to,h=e.k[s].ti,(2===a.length&&(a[0]!==n[0]||a[1]!==n[1])&&bez.pointOnLine2D(a[0],a[1],n[0],n[1],a[0]+o[0],a[1]+o[1])&&bez.pointOnLine2D(a[0],a[1],n[0],n[1],n[0]+h[0],n[1]+h[1])||3===a.length&&(a[0]!==n[0]||a[1]!==n[1]||a[2]!==n[2])&&bez.pointOnLine3D(a[0],a[1],a[2],n[0],n[1],n[2],a[0]+o[0],a[1]+o[1],a[2]+o[2])&&bez.pointOnLine3D(a[0],a[1],a[2],n[0],n[1],n[2],n[0]+h[0],n[1]+h[1],n[2]+h[2]))&&(e.k[s].to=null,e.k[s].ti=null),a[0]===n[0]&&a[1]===n[1]&&0===o[0]&&0===o[1]&&0===h[0]&&0===h[1]&&(2===a.length||a[2]===n[2]&&0===o[2]&&0===h[2])&&(e.k[s].to=null,e.k[s].ti=null));this.effectsSequence=[c.bind(this)],this.keyframes=e.k,this.offsetTime=t.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=r||1,this.elem=t,this.container=i,this.comp=t.comp,this.getValue=u,this.setVValue=d,this.interpolateValue=m,this.frameId=-1;var l=e.k[0].s.length;for(this.v=createTypedArray("float32",l),this.pv=createTypedArray("float32",l),s=0;s<l;s+=1)this.v[s]=f,this.pv[s]=f;this._caching={lastFrame:f,lastIndex:0,value:createTypedArray("float32",l)},this.addEffect=y}return{getProp:function(t,e,r,i,s){var a;if(e.k.length)if("number"==typeof e.k[0])a=new o(t,e,i,s);else switch(r){case 0:a=new h(t,e,i,s);break;case 1:a=new p(t,e,i,s)}else a=new n(t,e,i,s);return a.effectsSequence.length&&s.addDynamicProperty(a),a}}}(),TransformPropertyFactory=function(){var n=[0,0];function i(t,e,r){if(this.elem=t,this.frameId=-1,this.propType="transform",this.data=e,this.v=new Matrix,this.pre=new Matrix,this.appliedTransformations=0,this.initDynamicPropertyContainer(r||t),e.p&&e.p.s?(this.px=PropertyFactory.getProp(t,e.p.x,0,0,this),this.py=PropertyFactory.getProp(t,e.p.y,0,0,this),e.p.z&&(this.pz=PropertyFactory.getProp(t,e.p.z,0,0,this))):this.p=PropertyFactory.getProp(t,e.p||{k:[0,0,0]},1,0,this),e.rx){if(this.rx=PropertyFactory.getProp(t,e.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(t,e.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(t,e.rz,0,degToRads,this),e.or.k[0].ti){var i,s=e.or.k.length;for(i=0;i<s;i+=1)e.or.k[i].to=e.or.k[i].ti=null}this.or=PropertyFactory.getProp(t,e.or,1,degToRads,this),this.or.sh=!0}else this.r=PropertyFactory.getProp(t,e.r||{k:0},0,degToRads,this);e.sk&&(this.sk=PropertyFactory.getProp(t,e.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(t,e.sa,0,degToRads,this)),this.a=PropertyFactory.getProp(t,e.a||{k:[0,0,0]},1,0,this),this.s=PropertyFactory.getProp(t,e.s||{k:[100,100,100]},1,.01,this),e.o?this.o=PropertyFactory.getProp(t,e.o,0,.01,t):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}return i.prototype={applyToMatrix:function(t){var e=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||e,this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&t.skewFromAxis(-this.sk.v,this.sa.v),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])},getValue:function(t){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||t){if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var e,r,i=this.elem.globalData.frameRate;if(this.p&&this.p.keyframes&&this.p.getValueAtTime)r=this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(e=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/i,0),this.p.getValueAtTime(this.p.keyframes[0].t/i,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(e=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/i,0),this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/i,0)):(e=this.p.pv,this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/i,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){e=[],r=[];var s=this.px,a=this.py;s._caching.lastFrame+s.offsetTime<=s.keyframes[0].t?(e[0]=s.getValueAtTime((s.keyframes[0].t+.01)/i,0),e[1]=a.getValueAtTime((a.keyframes[0].t+.01)/i,0),r[0]=s.getValueAtTime(s.keyframes[0].t/i,0),r[1]=a.getValueAtTime(a.keyframes[0].t/i,0)):s._caching.lastFrame+s.offsetTime>=s.keyframes[s.keyframes.length-1].t?(e[0]=s.getValueAtTime(s.keyframes[s.keyframes.length-1].t/i,0),e[1]=a.getValueAtTime(a.keyframes[a.keyframes.length-1].t/i,0),r[0]=s.getValueAtTime((s.keyframes[s.keyframes.length-1].t-.01)/i,0),r[1]=a.getValueAtTime((a.keyframes[a.keyframes.length-1].t-.01)/i,0)):(e=[s.pv,a.pv],r[0]=s.getValueAtTime((s._caching.lastFrame+s.offsetTime-.01)/i,s.offsetTime),r[1]=a.getValueAtTime((a._caching.lastFrame+a.offsetTime-.01)/i,a.offsetTime))}else e=r=n;this.v.rotate(-Math.atan2(e[1]-r[1],e[0]-r[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}},precalculateMatrix:function(){if(!this.a.k&&(this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1,!this.s.effectsSequence.length)){if(this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2,this.sk){if(this.sk.effectsSequence.length||this.sa.effectsSequence.length)return;this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3}if(this.r){if(this.r.effectsSequence.length)return;this.pre.rotate(-this.r.v),this.appliedTransformations=4}else this.rz.effectsSequence.length||this.ry.effectsSequence.length||this.rx.effectsSequence.length||this.or.effectsSequence.length||(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}},autoOrient:function(){}},extendPrototype([DynamicPropertyContainer],i),i.prototype.addDynamicProperty=function(t){this._addDynamicProperty(t),this.elem.addDynamicProperty(t),this._isDirty=!0},i.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty,{getTransformProperty:function(t,e,r){return new i(t,e,r)}}}();function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var r=0;r<e;)this.v[r]=point_pool.newElement(),this.o[r]=point_pool.newElement(),this.i[r]=point_pool.newElement(),r+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,r,i,s){var a;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),r){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o}(!a[i]||a[i]&&!s)&&(a[i]=point_pool.newElement()),a[i][0]=t,a[i][1]=e},ShapePath.prototype.setTripleAt=function(t,e,r,i,s,a,n,o){this.setXYAt(t,e,"v",n,o),this.setXYAt(r,i,"o",n,o),this.setXYAt(s,a,"i",n,o)},ShapePath.prototype.reverse=function(){var t=new ShapePath;t.setPathData(this.c,this._length);var e=this.v,r=this.o,i=this.i,s=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],i[0][0],i[0][1],r[0][0],r[0][1],0,!1),s=1);var a,n=this._length-1,o=this._length;for(a=s;a<o;a+=1)t.setTripleAt(e[n][0],e[n][1],i[n][0],i[n][1],r[n][0],r[n][1],a,!1),n-=1;return t};var ShapePropertyFactory=function(){var s=-999999;function t(t,e,r){var i,s,a,n,o,h,p,l,f,m=r.lastIndex,c=this.keyframes;if(t<c[0].t-this.offsetTime)i=c[0].s[0],a=!0,m=0;else if(t>=c[c.length-1].t-this.offsetTime)i=c[c.length-1].s?c[c.length-1].s[0]:c[c.length-2].e[0],a=!0;else{for(var d,u,y=m,g=c.length-1,v=!0;v&&(d=c[y],!((u=c[y+1]).t-this.offsetTime>t));)y<g-1?y+=1:v=!1;if(m=y,!(a=1===d.h)){if(t>=u.t-this.offsetTime)l=1;else if(t<d.t-this.offsetTime)l=0;else{var b;d.__fnct?b=d.__fnct:(b=BezierFactory.getBezierEasing(d.o.x,d.o.y,d.i.x,d.i.y).get,d.__fnct=b),l=b((t-(d.t-this.offsetTime))/(u.t-this.offsetTime-(d.t-this.offsetTime)))}s=u.s?u.s[0]:d.e[0]}i=d.s[0]}for(h=e._length,p=i.i[0].length,r.lastIndex=m,n=0;n<h;n+=1)for(o=0;o<p;o+=1)f=a?i.i[n][o]:i.i[n][o]+(s.i[n][o]-i.i[n][o])*l,e.i[n][o]=f,f=a?i.o[n][o]:i.o[n][o]+(s.o[n][o]-i.o[n][o])*l,e.o[n][o]=f,f=a?i.v[n][o]:i.v[n][o]+(s.v[n][o]-i.v[n][o])*l,e.v[n][o]=f}function a(){this.paths=this.localShapeCollection}function e(t){(function(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var r,i=t._length;for(r=0;r<i;r+=1)if(t.v[r][0]!==e.v[r][0]||t.v[r][1]!==e.v[r][1]||t.o[r][0]!==e.o[r][0]||t.o[r][1]!==e.o[r][1]||t.i[r][0]!==e.i[r][0]||t.i[r][1]!==e.i[r][1])return!1;return!0})(this.v,t)||(this.v=shape_pool.clone(t),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function r(){if(this.elem.globalData.frameId!==this.frameId)if(this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{this.lock=!0,this._mdf=!1;var t,e=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k,r=this.effectsSequence.length;for(t=0;t<r;t+=1)e=this.effectsSequence[t](e);this.setVValue(e),this.lock=!1,this.frameId=this.elem.globalData.frameId}else this._mdf=!1}function n(t,e,r){this.propType="shape",this.comp=t.comp,this.container=t,this.elem=t,this.data=e,this.k=!1,this.kf=!1,this._mdf=!1;var i=3===r?e.pt.k:e.ks.k;this.v=shape_pool.clone(i),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=a,this.effectsSequence=[]}function i(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}function o(t,e,r){this.propType="shape",this.comp=t.comp,this.elem=t,this.container=t,this.offsetTime=t.data.st,this.keyframes=3===r?e.pt.k:e.ks.k,this.k=!0,this.kf=!0;var i=this.keyframes[0].s[0].i.length;this.keyframes[0].s[0].i[0].length;this.v=shape_pool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,i),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=s,this.reset=a,this._caching={lastFrame:s,lastIndex:0},this.effectsSequence=[function(){var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime,i=this._caching.lastFrame;return i!==s&&(i<e&&t<e||r<i&&r<t)||(this._caching.lastIndex=i<t?this._caching.lastIndex:0,this.interpolateShape(t,this.pv,this._caching)),this._caching.lastFrame=t,this.pv}.bind(this)]}n.prototype.interpolateShape=t,n.prototype.getValue=r,n.prototype.setVValue=e,n.prototype.addEffect=i,o.prototype.getValue=r,o.prototype.interpolateShape=t,o.prototype.setVValue=e,o.prototype.addEffect=i;var h=function(){var n=roundCorner;function t(t,e){this.v=shape_pool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=e.d,this.elem=t,this.comp=t.comp,this.frameId=-1,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return t.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,s=3!==this.d,a=this.v;a.v[0][0]=t,a.v[0][1]=e-i,a.v[1][0]=s?t+r:t-r,a.v[1][1]=e,a.v[2][0]=t,a.v[2][1]=e+i,a.v[3][0]=s?t-r:t+r,a.v[3][1]=e,a.i[0][0]=s?t-r*n:t+r*n,a.i[0][1]=e-i,a.i[1][0]=s?t+r:t-r,a.i[1][1]=e-i*n,a.i[2][0]=s?t+r*n:t-r*n,a.i[2][1]=e+i,a.i[3][0]=s?t-r:t+r,a.i[3][1]=e+i*n,a.o[0][0]=s?t+r*n:t-r*n,a.o[0][1]=e-i,a.o[1][0]=s?t+r:t-r,a.o[1][1]=e+i*n,a.o[2][0]=s?t-r*n:t+r*n,a.o[2][1]=e+i,a.o[3][0]=s?t-r:t+r,a.o[3][1]=e-i*n}},extendPrototype([DynamicPropertyContainer],t),t}(),p=function(){function t(t,e){this.v=shape_pool.newElement(),this.v.setPathData(!0,0),this.elem=t,this.comp=t.comp,this.data=e,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),1===e.sy?(this.ir=PropertyFactory.getProp(t,e.ir,0,0,this),this.is=PropertyFactory.getProp(t,e.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(t,e.pt,0,0,this),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this),this.or=PropertyFactory.getProp(t,e.or,0,0,this),this.os=PropertyFactory.getProp(t,e.os,0,.01,this),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return t.prototype={reset:a,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var t,e,r,i,s=2*Math.floor(this.pt.v),a=2*Math.PI/s,n=!0,o=this.or.v,h=this.ir.v,p=this.os.v,l=this.is.v,f=2*Math.PI*o/(2*s),m=2*Math.PI*h/(2*s),c=-Math.PI/2;c+=this.r.v;var d=3===this.data.d?-1:1;for(t=this.v._length=0;t<s;t+=1){r=n?p:l,i=n?f:m;var u=(e=n?o:h)*Math.cos(c),y=e*Math.sin(c),g=0===u&&0===y?0:y/Math.sqrt(u*u+y*y),v=0===u&&0===y?0:-u/Math.sqrt(u*u+y*y);u+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(u,y,u-g*i*r*d,y-v*i*r*d,u+g*i*r*d,y+v*i*r*d,t,!0),n=!n,c+=a*d}},convertPolygonToPath:function(){var t,e=Math.floor(this.pt.v),r=2*Math.PI/e,i=this.or.v,s=this.os.v,a=2*Math.PI*i/(4*e),n=-Math.PI/2,o=3===this.data.d?-1:1;for(n+=this.r.v,t=this.v._length=0;t<e;t+=1){var h=i*Math.cos(n),p=i*Math.sin(n),l=0===h&&0===p?0:p/Math.sqrt(h*h+p*p),f=0===h&&0===p?0:-h/Math.sqrt(h*h+p*p);h+=+this.p.v[0],p+=+this.p.v[1],this.v.setTripleAt(h,p,h-l*a*s*o,p-f*a*s*o,h+l*a*s*o,p+f*a*s*o,t,!0),n+=r*o}this.paths.length=0,this.paths[0]=this.v}},extendPrototype([DynamicPropertyContainer],t),t}(),l=function(){function t(t,e){this.v=shape_pool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=t,this.comp=t.comp,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return t.prototype={convertRectToPath:function(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,s=bm_min(r,i,this.r.v),a=s*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+s,t+r,e-i+a,0,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-a,t+r,e+i-s,1,!0),0!==s?(this.v.setTripleAt(t+r-s,e+i,t+r-s,e+i,t+r-a,e+i,2,!0),this.v.setTripleAt(t-r+s,e+i,t-r+a,e+i,t-r+s,e+i,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-s,t-r,e+i-a,4,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+a,t-r,e-i+s,5,!0),this.v.setTripleAt(t-r+s,e-i,t-r+s,e-i,t-r+a,e-i,6,!0),this.v.setTripleAt(t+r-s,e-i,t+r-a,e-i,t+r-s,e-i,7,!0)):(this.v.setTripleAt(t-r,e+i,t-r+a,e+i,t-r,e+i,2),this.v.setTripleAt(t-r,e-i,t-r,e-i+a,t-r,e-i,3))):(this.v.setTripleAt(t+r,e-i+s,t+r,e-i+a,t+r,e-i+s,0,!0),0!==s?(this.v.setTripleAt(t+r-s,e-i,t+r-s,e-i,t+r-a,e-i,1,!0),this.v.setTripleAt(t-r+s,e-i,t-r+a,e-i,t-r+s,e-i,2,!0),this.v.setTripleAt(t-r,e-i+s,t-r,e-i+s,t-r,e-i+a,3,!0),this.v.setTripleAt(t-r,e+i-s,t-r,e+i-a,t-r,e+i-s,4,!0),this.v.setTripleAt(t-r+s,e+i,t-r+s,e+i,t-r+a,e+i,5,!0),this.v.setTripleAt(t+r-s,e+i,t+r-a,e+i,t+r-s,e+i,6,!0),this.v.setTripleAt(t+r,e+i-s,t+r,e+i-s,t+r,e+i-a,7,!0)):(this.v.setTripleAt(t-r,e-i,t-r+a,e-i,t-r,e-i,1,!0),this.v.setTripleAt(t-r,e+i,t-r,e+i-a,t-r,e+i,2,!0),this.v.setTripleAt(t+r,e+i,t+r-a,e+i,t+r,e+i,3,!0)))},getValue:function(t){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:a},extendPrototype([DynamicPropertyContainer],t),t}();var f={getShapeProp:function(t,e,r){var i;return 3===r||4===r?i=(3===r?e.pt:e.ks).k.length?new o(t,e,r):new n(t,e,r):5===r?i=new l(t,e):6===r?i=new h(t,e):7===r&&(i=new p(t,e)),i.k&&t.addDynamicProperty(i),i},getConstructorFunction:function(){return n},getKeyframedConstructorFunction:function(){return o}};return f}(),ShapeModifiers=($r={},_r={},$r.registerModifier=function(t,e){_r[t]||(_r[t]=e)},$r.getModifier=function(t,e,r){return new _r[t](e,r)},$r),$r,_r;function ShapeModifier(){}function TrimModifier(){}function RoundCornersModifier(){}function RepeaterModifier(){}function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}function DashProperty(t,e,r,i){this.elem=t,this.frameId=-1,this.dataProps=createSizedArray(e.length),this.renderer=r,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",e.length?e.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(i);var s,a,n=e.length||0;for(s=0;s<n;s+=1)a=PropertyFactory.getProp(t,e[s].v,0,0,this),this.k=a.k||this.k,this.dataProps[s]={n:e[s].n,p:a};this.k||this.getValue(!0),this._isAnimated=this.k}function GradientProperty(t,e,r){this.data=e,this.c=createTypedArray("uint8c",4*e.p);var i=e.k.k[0].s?e.k.k[0].s.length-4*e.p:e.k.k.length-4*e.p;this.o=createTypedArray("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(r),this.prop=PropertyFactory.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){if(!this.closed){t.sh.container.addDynamicProperty(t.sh);var e={shape:t.sh,data:t,localShapeCollection:shapeCollection_pool.newShapeCollection()};this.shapes.push(e),this.addShapeToModifier(e),this._isAnimated&&t.setAsAnimated()}},ShapeModifier.prototype.init=function(t,e){this.shapes=[],this.elem=t,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e),this.frameId=initialDefaultFrame,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier),extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(t,e){this.s=PropertyFactory.getProp(t,e.s,0,.01,this),this.e=PropertyFactory.getProp(t,e.e,0,.01,this),this.o=PropertyFactory.getProp(t,e.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=e.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},TrimModifier.prototype.addShapeToModifier=function(t){t.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(t,e,r,i,s){var a=[];e<=1?a.push({s:t,e:e}):1<=t?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var n,o,h=[],p=a.length;for(n=0;n<p;n+=1){var l,f;if((o=a[n]).e*s<i||o.s*s>i+r);else l=o.s*s<=i?0:(o.s*s-i)/r,f=o.e*s>=i+r?1:(o.e*s-i)/r,h.push([l,f])}return h.length||h.push([0,0]),h},TrimModifier.prototype.releasePathsData=function(t){var e,r=t.length;for(e=0;e<r;e+=1)segments_length_pool.release(t[e]);return t.length=0,t},TrimModifier.prototype.processShapes=function(t){var e,r,i;if(this._mdf||t){var s=this.o.v%360/360;if(s<0&&(s+=1),e=(1<this.s.v?1:this.s.v<0?0:this.s.v)+s,(r=(1<this.e.v?1:this.e.v<0?0:this.e.v)+s)<e){var a=e;e=r,r=a}e=1e-4*Math.round(1e4*e),r=1e-4*Math.round(1e4*r),this.sValue=e,this.eValue=r}else e=this.sValue,r=this.eValue;var n,o,h,p,l,f,m=this.shapes.length,c=0;if(r===e)for(n=0;n<m;n+=1)this.shapes[n].localShapeCollection.releaseShapes(),this.shapes[n].shape._mdf=!0,this.shapes[n].shape.paths=this.shapes[n].localShapeCollection;else if(1===r&&0===e||0===r&&1===e){if(this._mdf)for(n=0;n<m;n+=1)this.shapes[n].pathsData.length=0,this.shapes[n].shape._mdf=!0}else{var d,u,y=[];for(n=0;n<m;n+=1)if((d=this.shapes[n]).shape._mdf||this._mdf||t||2===this.m){if(h=(i=d.shape.paths)._length,f=0,!d.shape._mdf&&d.pathsData.length)f=d.totalShapeLength;else{for(p=this.releasePathsData(d.pathsData),o=0;o<h;o+=1)l=bez.getSegmentsLength(i.shapes[o]),p.push(l),f+=l.totalLength;d.totalShapeLength=f,d.pathsData=p}c+=f,d.shape._mdf=!0}else d.shape.paths=d.localShapeCollection;var g,v=e,b=r,P=0;for(n=m-1;0<=n;n-=1)if((d=this.shapes[n]).shape._mdf){for((u=d.localShapeCollection).releaseShapes(),2===this.m&&1<m?(g=this.calculateShapeEdges(e,r,d.totalShapeLength,P,c),P+=d.totalShapeLength):g=[[v,b]],h=g.length,o=0;o<h;o+=1){v=g[o][0],b=g[o][1],y.length=0,b<=1?y.push({s:d.totalShapeLength*v,e:d.totalShapeLength*b}):1<=v?y.push({s:d.totalShapeLength*(v-1),e:d.totalShapeLength*(b-1)}):(y.push({s:d.totalShapeLength*v,e:d.totalShapeLength}),y.push({s:0,e:d.totalShapeLength*(b-1)}));var _=this.addShapes(d,y[0]);if(y[0].s!==y[0].e){if(1<y.length)if(d.shape.paths.shapes[d.shape.paths._length-1].c){var A=_.pop();this.addPaths(_,u),_=this.addShapes(d,y[1],A)}else this.addPaths(_,u),_=this.addShapes(d,y[1]);this.addPaths(_,u)}}d.shape.paths=u}}},TrimModifier.prototype.addPaths=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)e.addShape(t[r])},TrimModifier.prototype.addSegment=function(t,e,r,i,s,a,n){s.setXYAt(e[0],e[1],"o",a),s.setXYAt(r[0],r[1],"i",a+1),n&&s.setXYAt(t[0],t[1],"v",a),s.setXYAt(i[0],i[1],"v",a+1)},TrimModifier.prototype.addSegmentFromArray=function(t,e,r,i){e.setXYAt(t[1],t[5],"o",r),e.setXYAt(t[2],t[6],"i",r+1),i&&e.setXYAt(t[0],t[4],"v",r),e.setXYAt(t[3],t[7],"v",r+1)},TrimModifier.prototype.addShapes=function(t,e,r){var i,s,a,n,o,h,p,l,f=t.pathsData,m=t.shape.paths.shapes,c=t.shape.paths._length,d=0,u=[],y=!0;for(l=r?(o=r._length,r._length):(r=shape_pool.newElement(),o=0),u.push(r),i=0;i<c;i+=1){for(h=f[i].lengths,r.c=m[i].c,a=m[i].c?h.length:h.length+1,s=1;s<a;s+=1)if(d+(n=h[s-1]).addedLength<e.s)d+=n.addedLength,r.c=!1;else{if(d>e.e){r.c=!1;break}e.s<=d&&e.e>=d+n.addedLength?(this.addSegment(m[i].v[s-1],m[i].o[s-1],m[i].i[s],m[i].v[s],r,o,y),y=!1):(p=bez.getNewSegment(m[i].v[s-1],m[i].v[s],m[i].o[s-1],m[i].i[s],(e.s-d)/n.addedLength,(e.e-d)/n.addedLength,h[s-1]),this.addSegmentFromArray(p,r,o,y),y=!1,r.c=!1),d+=n.addedLength,o+=1}if(m[i].c&&h.length){if(n=h[s-1],d<=e.e){var g=h[s-1].addedLength;e.s<=d&&e.e>=d+g?(this.addSegment(m[i].v[s-1],m[i].o[s-1],m[i].i[0],m[i].v[0],r,o,y),y=!1):(p=bez.getNewSegment(m[i].v[s-1],m[i].v[0],m[i].o[s-1],m[i].i[0],(e.s-d)/g,(e.e-d)/g,h[s-1]),this.addSegmentFromArray(p,r,o,y),y=!1,r.c=!1)}else r.c=!1;d+=n.addedLength,o+=1}if(r._length&&(r.setXYAt(r.v[l][0],r.v[l][1],"i",l),r.setXYAt(r.v[r._length-1][0],r.v[r._length-1][1],"o",r._length-1)),d>e.e)break;i<c-1&&(r=shape_pool.newElement(),y=!0,u.push(r),o=0)}return u},ShapeModifiers.registerModifier("tm",TrimModifier),extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},RoundCornersModifier.prototype.processPath=function(t,e){var r=shape_pool.newElement();r.c=t.c;var i,s,a,n,o,h,p,l,f,m,c,d,u,y=t._length,g=0;for(i=0;i<y;i+=1)s=t.v[i],n=t.o[i],a=t.i[i],s[0]===n[0]&&s[1]===n[1]&&s[0]===a[0]&&s[1]===a[1]?0!==i&&i!==y-1||t.c?(o=0===i?t.v[y-1]:t.v[i-1],p=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,l=d=s[0]+(o[0]-s[0])*p,f=u=s[1]-(s[1]-o[1])*p,m=l-(l-s[0])*roundCorner,c=f-(f-s[1])*roundCorner,r.setTripleAt(l,f,m,c,d,u,g),g+=1,o=i===y-1?t.v[0]:t.v[i+1],p=(h=Math.sqrt(Math.pow(s[0]-o[0],2)+Math.pow(s[1]-o[1],2)))?Math.min(h/2,e)/h:0,l=m=s[0]+(o[0]-s[0])*p,f=c=s[1]+(o[1]-s[1])*p,d=l-(l-s[0])*roundCorner,u=f-(f-s[1])*roundCorner,r.setTripleAt(l,f,m,c,d,u,g)):r.setTripleAt(s[0],s[1],n[0],n[1],a[0],a[1],g):r.setTripleAt(t.v[i][0],t.v[i][1],t.o[i][0],t.o[i][1],t.i[i][0],t.i[i][1],g),g+=1;return r},RoundCornersModifier.prototype.processShapes=function(t){var e,r,i,s,a,n,o=this.shapes.length,h=this.rd.v;if(0!==h)for(r=0;r<o;r+=1){if((a=this.shapes[r]).shape.paths,n=a.localShapeCollection,a.shape._mdf||this._mdf||t)for(n.releaseShapes(),a.shape._mdf=!0,e=a.shape.paths.shapes,s=a.shape.paths._length,i=0;i<s;i+=1)n.addShape(this.processPath(e[i],h));a.shape.paths=a.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},ShapeModifiers.registerModifier("rd",RoundCornersModifier),extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this),this.o=PropertyFactory.getProp(t,e.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(t,e.tr,this),this.so=PropertyFactory.getProp(t,e.tr.so,0,.01,this),this.eo=PropertyFactory.getProp(t,e.tr.eo,0,.01,this),this.data=e,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,r,i,s,a){var n=a?-1:1,o=i.s.v[0]+(1-i.s.v[0])*(1-s),h=i.s.v[1]+(1-i.s.v[1])*(1-s);t.translate(i.p.v[0]*n*s,i.p.v[1]*n*s,i.p.v[2]),e.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),e.rotate(-i.r.v*n*s),e.translate(i.a.v[0],i.a.v[1],i.a.v[2]),r.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),r.scale(a?1/o:o,a?1/h:h),r.translate(i.a.v[0],i.a.v[1],i.a.v[2])},RepeaterModifier.prototype.init=function(t,e,r,i){this.elem=t,this.arr=e,this.pos=r,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(t),this.initModifierProperties(t,e[r]);for(;0<r;)r-=1,this._elements.unshift(e[r]),1;this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){t.length;var e=JSON.parse(JSON.stringify(t));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var r,i=t.length;for(r=0;r<i;r+=1)t[r]._render=e,"gr"===t[r].ty&&this.changeGroupRender(t[r].it,e)},RepeaterModifier.prototype.processShapes=function(t){var e,r,i,s,a;if(this._mdf||t){var n,o=Math.ceil(this.c.v);if(this._groups.length<o){for(;this._groups.length<o;){var h={it:this.cloneElements(this._elements),ty:"gr"};h.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,h),this._groups.splice(0,0,h),this._currentCopies+=1}this.elem.reloadShapes()}for(i=a=0;i<=this._groups.length-1;i+=1)n=a<o,this._groups[i]._render=n,this.changeGroupRender(this._groups[i].it,n),a+=1;this._currentCopies=o;var p=this.o.v,l=p%1,f=0<p?Math.floor(p):Math.ceil(p),m=(this.tr.v.props,this.pMatrix.props),c=this.rMatrix.props,d=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var u,y,g=0;if(0<p){for(;g<f;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),g+=1;l&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,l,!1),g+=l)}else if(p<0){for(;f<g;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),g-=1;l&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-l,!0),g-=l)}for(i=1===this.data.m?0:this._currentCopies-1,s=1===this.data.m?1:-1,a=this._currentCopies;a;){if(y=(r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props).length,e[e.length-1].transform.mProps._mdf=!0,e[e.length-1].transform.op._mdf=!0,e[e.length-1].transform.op.v=this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),0!==g){for((0!==i&&1===s||i!==this._currentCopies-1&&-1===s)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15]),this.matrix.transform(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8],d[9],d[10],d[11],d[12],d[13],d[14],d[15]),this.matrix.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]),u=0;u<y;u+=1)r[u]=this.matrix.props[u];this.matrix.reset()}else for(this.matrix.reset(),u=0;u<y;u+=1)r[u]=this.matrix.props[u];g+=1,a-=1,i+=s}}else for(a=this._currentCopies,i=0,s=1;a;)r=(e=this.elemsData[i].it)[e.length-1].transform.mProps.v.props,e[e.length-1].transform.mProps._mdf=!1,e[e.length-1].transform.op._mdf=!1,a-=1,i+=s},RepeaterModifier.prototype.addShape=function(){},ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shape_pool.release(this.shapes[t]);this._length=0},DashProperty.prototype.getValue=function(t){if((this.elem.globalData.frameId!==this.frameId||t)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||t,this._mdf)){var e=0,r=this.dataProps.length;for("svg"===this.renderer&&(this.dashStr=""),e=0;e<r;e+=1)"o"!=this.dataProps[e].n?"svg"===this.renderer?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},extendPrototype([DynamicPropertyContainer],DashProperty),GradientProperty.prototype.comparePoints=function(t,e){for(var r=0,i=this.o.length/2;r<i;){if(.01<Math.abs(t[4*r]-t[4*e+2*r]))return!1;r+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!=this.c.length/4)return!1;if(this.data.k.k[0].s)for(var t=0,e=this.data.k.k.length;t<e;){if(!this.comparePoints(this.data.k.k[t].s,this.data.p))return!1;t+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(t){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||t){var e,r,i,s=4*this.data.p;for(e=0;e<s;e+=1)r=e%4==0?100:255,i=Math.round(this.prop.v[e]*r),this.c[e]!==i&&(this.c[e]=i,this._cmdf=!t);if(this.o.length)for(s=this.prop.v.length,e=4*this.data.p;e<s;e+=1)r=e%2==0?100:1,i=e%2==0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==i&&(this.o[e-4*this.data.p]=i,this._omdf=!t);this._mdf=!t}},extendPrototype([DynamicPropertyContainer],GradientProperty);var buildShapeString=function(t,e,r,i){if(0===e)return"";var s,a=t.o,n=t.i,o=t.v,h=" M"+i.applyToPointStringified(o[0][0],o[0][1]);for(s=1;s<e;s+=1)h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[s][0],n[s][1])+" "+i.applyToPointStringified(o[s][0],o[s][1]);return r&&e&&(h+=" C"+i.applyToPointStringified(a[s-1][0],a[s-1][1])+" "+i.applyToPointStringified(n[0][0],n[0][1])+" "+i.applyToPointStringified(o[0][0],o[0][1]),h+="z"),h},ImagePreloader=function(){var s=function(){var t=createTag("canvas");t.width=1,t.height=1;var e=t.getContext("2d");return e.fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,1,1),t}();function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function e(t){var e=function(t,e,r){var i="";if(t.e)i=t.p;else if(e){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),i=e+s}else i=r,i+=t.u?t.u:"",i+=t.p;return i}(t,this.assetsPath,this.path),r=createTag("img");r.crossOrigin="anonymous",r.addEventListener("load",this._imageLoaded.bind(this),!1),r.addEventListener("error",function(){i.img=s,this._imageLoaded()}.bind(this),!1),r.src=e;var i={img:r,assetData:t};return i}function r(t,e){this.imagesLoadedCb=e;var r,i=t.length;for(r=0;r<i;r+=1)t[r].layers||(this.totalImages+=1,this.images.push(this._createImageData(t[r])))}function i(t){this.path=t||""}function a(t){this.assetsPath=t||""}function n(t){for(var e=0,r=this.images.length;e<r;){if(this.images[e].assetData===t)return this.images[e].img;e+=1}}function o(){this.imagesLoadedCb=null,this.images.length=0}function h(){return this.totalImages===this.loadedAssets}return function(){this.loadAssets=r,this.setAssetsPath=a,this.setPath=i,this.loaded=h,this.destroy=o,this.getImage=n,this._createImageData=e,this._imageLoaded=t,this.assetsPath="",this.path="",this.totalImages=0,this.loadedAssets=0,this.imagesLoadedCb=null,this.images=[]}}(),featureSupport=(sw={maskType:!0},(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(sw.maskType=!1),sw),sw,filtersFactory=(tw={},tw.createFilter=function(t){var e=createNS("filter");return e.setAttribute("id",t),e.setAttribute("filterUnits","objectBoundingBox"),e.setAttribute("x","0%"),e.setAttribute("y","0%"),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e},tw.createAlphaToLuminanceFilter=function(){var t=createNS("feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t},tw),tw,assetLoader=function(){function a(t){return t.response&&"object"==typeof t.response?t.response:t.response&&"string"==typeof t.response?JSON.parse(t.response):t.responseText?JSON.parse(t.responseText):void 0}return{load:function(t,e,r){var i,s=new XMLHttpRequest;s.open("GET",t,!0);try{s.responseType="json"}catch(t){}s.send(),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status)i=a(s),e(i);else try{i=a(s),e(i)}catch(t){r&&r(t)}}}}}();function TextAnimatorProperty(t,e,r){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=t,this._renderType=e,this._elem=r,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(r)}function TextAnimatorDataProperty(t,e,r){var i={propType:!1},s=PropertyFactory.getProp,a=e.a;this.a={r:a.r?s(t,a.r,0,degToRads,r):i,rx:a.rx?s(t,a.rx,0,degToRads,r):i,ry:a.ry?s(t,a.ry,0,degToRads,r):i,sk:a.sk?s(t,a.sk,0,degToRads,r):i,sa:a.sa?s(t,a.sa,0,degToRads,r):i,s:a.s?s(t,a.s,1,.01,r):i,a:a.a?s(t,a.a,1,0,r):i,o:a.o?s(t,a.o,0,.01,r):i,p:a.p?s(t,a.p,1,0,r):i,sw:a.sw?s(t,a.sw,0,0,r):i,sc:a.sc?s(t,a.sc,1,0,r):i,fc:a.fc?s(t,a.fc,1,0,r):i,fh:a.fh?s(t,a.fh,0,0,r):i,fs:a.fs?s(t,a.fs,0,.01,r):i,fb:a.fb?s(t,a.fb,0,.01,r):i,t:a.t?s(t,a.t,0,0,r):i},this.s=TextSelectorProp.getTextSelectorProp(t,e.s,r),this.s.t=e.s.t}function LetterProps(t,e,r,i,s,a){this.o=t,this.sw=e,this.sc=r,this.fc=i,this.m=s,this.p=a,this._mdf={o:!0,sw:!!e,sc:!!r,fc:!!i,m:!0,p:!0}}function TextProperty(t,e){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}TextAnimatorProperty.prototype.searchProperties=function(){var t,e,r=this._textData.a.length,i=PropertyFactory.getProp;for(t=0;t<r;t+=1)e=this._textData.a[t],this._animatorsData[t]=new TextAnimatorDataProperty(this._elem,e,this);this._textData.p&&"m"in this._textData.p?(this._pathData={f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:this._textData.p.r,m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this._mdf||this._isFirstFrame||e||this._hasMaskedPath&&this._pathData.m._mdf){this._isFirstFrame=!1;var r,i,s,a,n,o,h,p,l,f,m,c,d,u,y,g,v,b,P,_=this._moreOptions.alignment.v,A=this._animatorsData,S=this._textData,x=this.mHelper,E=this._renderType,k=this.renderedLetters.length,T=(this.data,t.l);if(this._hasMaskedPath){if(P=this._pathData.m,!this._pathData.n||this._pathData._mdf){var M,D=P.v;for(this._pathData.r&&(D=D.reverse()),n={tLength:0,segments:[]},a=D._length-1,s=g=0;s<a;s+=1)M=bez.buildBezierData(D.v[s],D.v[s+1],[D.o[s][0]-D.v[s][0],D.o[s][1]-D.v[s][1]],[D.i[s+1][0]-D.v[s+1][0],D.i[s+1][1]-D.v[s+1][1]]),n.tLength+=M.segmentLength,n.segments.push(M),g+=M.segmentLength;s=a,P.v.c&&(M=bez.buildBezierData(D.v[s],D.v[0],[D.o[s][0]-D.v[s][0],D.o[s][1]-D.v[s][1]],[D.i[0][0]-D.v[0][0],D.i[0][1]-D.v[0][1]]),n.tLength+=M.segmentLength,n.segments.push(M),g+=M.segmentLength),this._pathData.pi=n}if(n=this._pathData.pi,o=this._pathData.f.v,f=1,l=!(p=m=0),u=n.segments,o<0&&P.v.c)for(n.tLength<Math.abs(o)&&(o=-Math.abs(o)%n.tLength),f=(d=u[m=u.length-1].points).length-1;o<0;)o+=d[f].partialLength,(f-=1)<0&&(f=(d=u[m-=1].points).length-1);c=(d=u[m].points)[f-1],y=(h=d[f]).partialLength}a=T.length,i=r=0;var F,I,C,w,V=1.2*t.finalSize*.714,R=!0;C=A.length;var L,G,N,B,z,O,j,q,H,W,K,X,$,Y=-1,U=o,Z=m,J=f,Q=-1,tt="",et=this.defaultPropsArray;if(2===t.j||1===t.j){var rt=0,it=0,st=2===t.j?-.5:-1,at=0,nt=!0;for(s=0;s<a;s+=1)if(T[s].n){for(rt&&(rt+=it);at<s;)T[at].animatorJustifyOffset=rt,at+=1;nt=!(rt=0)}else{for(I=0;I<C;I+=1)(F=A[I].a).t.propType&&(nt&&2===t.j&&(it+=F.t.v*st),(L=A[I].s.getMult(T[s].anIndexes[I],S.a[I].s.totalChars)).length?rt+=F.t.v*L[0]*st:rt+=F.t.v*L*st);nt=!1}for(rt&&(rt+=it);at<s;)T[at].animatorJustifyOffset=rt,at+=1}for(s=0;s<a;s+=1){if(x.reset(),z=1,T[s].n)r=0,i+=t.yOffset,i+=R?1:0,o=U,R=!1,0,this._hasMaskedPath&&(f=J,c=(d=u[m=Z].points)[f-1],y=(h=d[f]).partialLength,p=0),$=W=X=tt="",et=this.defaultPropsArray;else{if(this._hasMaskedPath){if(Q!==T[s].line){switch(t.j){case 1:o+=g-t.lineWidths[T[s].line];break;case 2:o+=(g-t.lineWidths[T[s].line])/2}Q=T[s].line}Y!==T[s].ind&&(T[Y]&&(o+=T[Y].extra),o+=T[s].an/2,Y=T[s].ind),o+=_[0]*T[s].an/200;var ot=0;for(I=0;I<C;I+=1)(F=A[I].a).p.propType&&((L=A[I].s.getMult(T[s].anIndexes[I],S.a[I].s.totalChars)).length?ot+=F.p.v[0]*L[0]:ot+=F.p.v[0]*L),F.a.propType&&((L=A[I].s.getMult(T[s].anIndexes[I],S.a[I].s.totalChars)).length?ot+=F.a.v[0]*L[0]:ot+=F.a.v[0]*L);for(l=!0;l;)o+ot<=p+y||!d?(v=(o+ot-p)/h.partialLength,N=c.point[0]+(h.point[0]-c.point[0])*v,B=c.point[1]+(h.point[1]-c.point[1])*v,x.translate(-_[0]*T[s].an/200,-_[1]*V/100),l=!1):d&&(p+=h.partialLength,(f+=1)>=d.length&&(f=0,d=u[m+=1]?u[m].points:P.v.c?u[m=f=0].points:(p-=h.partialLength,null)),d&&(c=h,y=(h=d[f]).partialLength));G=T[s].an/2-T[s].add,x.translate(-G,0,0)}else G=T[s].an/2-T[s].add,x.translate(-G,0,0),x.translate(-_[0]*T[s].an/200,-_[1]*V/100,0);for(T[s].l/2,I=0;I<C;I+=1)(F=A[I].a).t.propType&&(L=A[I].s.getMult(T[s].anIndexes[I],S.a[I].s.totalChars),0===r&&0===t.j||(this._hasMaskedPath?L.length?o+=F.t.v*L[0]:o+=F.t.v*L:L.length?r+=F.t.v*L[0]:r+=F.t.v*L));for(T[s].l/2,t.strokeWidthAnim&&(j=t.sw||0),t.strokeColorAnim&&(O=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(q=[t.fc[0],t.fc[1],t.fc[2]]),I=0;I<C;I+=1)(F=A[I].a).a.propType&&((L=A[I].s.getMult(T[s].anIndexes[I],S.a[I].s.totalChars)).length?x.translate(-F.a.v[0]*L[0],-F.a.v[1]*L[1],F.a.v[2]*L[2]):x.translate(-F.a.v[0]*L,-F.a.v[1]*L,F.a.v[2]*L));for(I=0;I<C;I+=1)(F=A[I].a).s.propType&&((L=A[I].s.getMult(T[s].anIndexes[I],S.a[I].s.totalChars)).length?x.scale(1+(F.s.v[0]-1)*L[0],1+(F.s.v[1]-1)*L[1],1):x.scale(1+(F.s.v[0]-1)*L,1+(F.s.v[1]-1)*L,1));for(I=0;I<C;I+=1){if(F=A[I].a,L=A[I].s.getMult(T[s].anIndexes[I],S.a[I].s.totalChars),F.sk.propType&&(L.length?x.skewFromAxis(-F.sk.v*L[0],F.sa.v*L[1]):x.skewFromAxis(-F.sk.v*L,F.sa.v*L)),F.r.propType&&(L.length?x.rotateZ(-F.r.v*L[2]):x.rotateZ(-F.r.v*L)),F.ry.propType&&(L.length?x.rotateY(F.ry.v*L[1]):x.rotateY(F.ry.v*L)),F.rx.propType&&(L.length?x.rotateX(F.rx.v*L[0]):x.rotateX(F.rx.v*L)),F.o.propType&&(L.length?z+=(F.o.v*L[0]-z)*L[0]:z+=(F.o.v*L-z)*L),t.strokeWidthAnim&&F.sw.propType&&(L.length?j+=F.sw.v*L[0]:j+=F.sw.v*L),t.strokeColorAnim&&F.sc.propType)for(H=0;H<3;H+=1)L.length?O[H]=O[H]+(F.sc.v[H]-O[H])*L[0]:O[H]=O[H]+(F.sc.v[H]-O[H])*L;if(t.fillColorAnim&&t.fc){if(F.fc.propType)for(H=0;H<3;H+=1)L.length?q[H]=q[H]+(F.fc.v[H]-q[H])*L[0]:q[H]=q[H]+(F.fc.v[H]-q[H])*L;F.fh.propType&&(q=L.length?addHueToRGB(q,F.fh.v*L[0]):addHueToRGB(q,F.fh.v*L)),F.fs.propType&&(q=L.length?addSaturationToRGB(q,F.fs.v*L[0]):addSaturationToRGB(q,F.fs.v*L)),F.fb.propType&&(q=L.length?addBrightnessToRGB(q,F.fb.v*L[0]):addBrightnessToRGB(q,F.fb.v*L))}}for(I=0;I<C;I+=1)(F=A[I].a).p.propType&&(L=A[I].s.getMult(T[s].anIndexes[I],S.a[I].s.totalChars),this._hasMaskedPath?L.length?x.translate(0,F.p.v[1]*L[0],-F.p.v[2]*L[1]):x.translate(0,F.p.v[1]*L,-F.p.v[2]*L):L.length?x.translate(F.p.v[0]*L[0],F.p.v[1]*L[1],-F.p.v[2]*L[2]):x.translate(F.p.v[0]*L,F.p.v[1]*L,-F.p.v[2]*L));if(t.strokeWidthAnim&&(W=j<0?0:j),t.strokeColorAnim&&(K="rgb("+Math.round(255*O[0])+","+Math.round(255*O[1])+","+Math.round(255*O[2])+")"),t.fillColorAnim&&t.fc&&(X="rgb("+Math.round(255*q[0])+","+Math.round(255*q[1])+","+Math.round(255*q[2])+")"),this._hasMaskedPath){if(x.translate(0,-t.ls),x.translate(0,_[1]*V/100+i,0),S.p.p){b=(h.point[1]-c.point[1])/(h.point[0]-c.point[0]);var ht=180*Math.atan(b)/Math.PI;h.point[0]<c.point[0]&&(ht+=180),x.rotate(-ht*Math.PI/180)}x.translate(N,B,0),o-=_[0]*T[s].an/200,T[s+1]&&Y!==T[s+1].ind&&(o+=T[s].an/2,o+=t.tr/1e3*t.finalSize)}else{switch(x.translate(r,i,0),t.ps&&x.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:x.translate(T[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[T[s].line]),0,0);break;case 2:x.translate(T[s].animatorJustifyOffset+t.justifyOffset+(t.boxWidth-t.lineWidths[T[s].line])/2,0,0)}x.translate(0,-t.ls),x.translate(G,0,0),x.translate(_[0]*T[s].an/200,_[1]*V/100,0),r+=T[s].l+t.tr/1e3*t.finalSize}"html"===E?tt=x.toCSS():"svg"===E?tt=x.to2dCSS():et=[x.props[0],x.props[1],x.props[2],x.props[3],x.props[4],x.props[5],x.props[6],x.props[7],x.props[8],x.props[9],x.props[10],x.props[11],x.props[12],x.props[13],x.props[14],x.props[15]],$=z}this.lettersChangedFlag=k<=s?(w=new LetterProps($,W,K,X,tt,et),this.renderedLetters.push(w),k+=1,!0):(w=this.renderedLetters[s]).update($,W,K,X,tt,et)||this.lettersChangedFlag}}},TextAnimatorProperty.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([DynamicPropertyContainer],TextAnimatorProperty),LetterProps.prototype.update=function(t,e,r,i,s,a){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1;var n=this._mdf.p=!1;return this.o!==t&&(this.o=t,n=this._mdf.o=!0),this.sw!==e&&(this.sw=e,n=this._mdf.sw=!0),this.sc!==r&&(this.sc=r,n=this._mdf.sc=!0),this.fc!==i&&(this.fc=i,n=this._mdf.fc=!0),this.m!==s&&(this.m=s,n=this._mdf.m=!0),!a.length||this.p[0]===a[0]&&this.p[1]===a[1]&&this.p[4]===a[4]&&this.p[5]===a[5]&&this.p[12]===a[12]&&this.p[13]===a[13]||(this.p=a,n=this._mdf.p=!0),n},TextProperty.prototype.defaultBoxWidth=[0,0],TextProperty.prototype.copyData=function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},TextProperty.prototype.setCurrentData=function(t){t.__complete||this.completeTextData(t),this.currentData=t,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},TextProperty.prototype.searchProperty=function(){return this.searchKeyframes()},TextProperty.prototype.searchKeyframes=function(){return this.kf=1<this.data.d.k.length,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},TextProperty.prototype.addEffect=function(t){this.effectsSequence.push(t),this.elem.addDynamicProperty(this)},TextProperty.prototype.getValue=function(t){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length||t){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var e=this.currentData,r=this.keysIndex;if(this.lock)this.setCurrentData(this.currentData);else{this.lock=!0,this._mdf=!1;var i,s=this.effectsSequence.length,a=t||this.data.d.k[this.keysIndex].s;for(i=0;i<s;i+=1)a=r!==this.keysIndex?this.effectsSequence[i](a,a.t):this.effectsSequence[i](this.currentData,a.t);e!==a&&this.setCurrentData(a),this.pv=this.v=this.currentData,this.lock=!1,this.frameId=this.elem.globalData.frameId}}},TextProperty.prototype.getKeyframeValue=function(){for(var t=this.data.d.k,e=this.elem.comp.renderedFrame,r=0,i=t.length;r<=i-1&&(t[r].s,!(r===i-1||t[r+1].t>e));)r+=1;return this.keysIndex!==r&&(this.keysIndex=r),this.data.d.k[this.keysIndex].s},TextProperty.prototype.buildFinalText=function(t){for(var e,r=FontManager.getCombinedCharacterCodes(),i=[],s=0,a=t.length;s<a;)e=t.charCodeAt(s),-1!==r.indexOf(e)?i[i.length-1]+=t.charAt(s):55296<=e&&e<=56319&&56320<=(e=t.charCodeAt(s+1))&&e<=57343?(i.push(t.substr(s,2)),++s):i.push(t.charAt(s)),s+=1;return i},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e,r,i,s,a,n,o,h=this.elem.globalData.fontManager,p=this.data,l=[],f=0,m=p.m.g,c=0,d=0,u=0,y=[],g=0,v=0,b=h.getFontByName(t.f),P=0,_=b.fStyle?b.fStyle.split(" "):[],A="normal",S="normal";for(r=_.length,e=0;e<r;e+=1)switch(_[e].toLowerCase()){case"italic":S="italic";break;case"bold":A="700";break;case"black":A="900";break;case"medium":A="500";break;case"regular":case"normal":A="400";break;case"light":case"thin":A="200"}t.fWeight=b.fWeight||A,t.fStyle=S,t.finalSize=t.s,t.finalText=this.buildFinalText(t.t),r=t.finalText.length,t.finalLineHeight=t.lh;var x,E=t.tr/1e3*t.finalSize;if(t.sz)for(var k,T,M=!0,D=t.sz[0],F=t.sz[1];M;){g=k=0,r=(T=this.buildFinalText(t.t)).length,E=t.tr/1e3*t.finalSize;var I=-1;for(e=0;e<r;e+=1)x=T[e].charCodeAt(0),i=!1," "===T[e]?I=e:13!==x&&3!==x||(i=!(g=0),k+=t.finalLineHeight||1.2*t.finalSize),D<g+(P=h.chars?(o=h.getCharData(T[e],b.fStyle,b.fFamily),i?0:o.w*t.finalSize/100):h.measureText(T[e],t.f,t.finalSize))&&" "!==T[e]?(-1===I?r+=1:e=I,k+=t.finalLineHeight||1.2*t.finalSize,T.splice(e,I===e?1:0,"\r"),I=-1,g=0):(g+=P,g+=E);k+=b.ascent*t.finalSize/100,this.canResize&&t.finalSize>this.minimumFontSize&&F<k?(t.finalSize-=1,t.finalLineHeight=t.finalSize*t.lh/t.s):(t.finalText=T,r=t.finalText.length,M=!1)}g=-E;var C,w=P=0;for(e=0;e<r;e+=1)if(i=!1,x=(C=t.finalText[e]).charCodeAt(0)," "===C?s="\xa0":13===x||3===x?(w=0,y.push(g),v=v<g?g:v,g=-2*E,i=!(s=""),u+=1):s=t.finalText[e],P=h.chars?(o=h.getCharData(C,b.fStyle,h.getFontByName(t.f).fFamily),i?0:o.w*t.finalSize/100):h.measureText(s,t.f,t.finalSize)," "===C?w+=P+E:(g+=P+E+w,w=0),l.push({l:P,an:P,add:c,n:i,anIndexes:[],val:s,line:u,animatorJustifyOffset:0}),2==m){if(c+=P,""===s||"\xa0"===s||e===r-1){for(""!==s&&"\xa0"!==s||(c-=P);d<=e;)l[d].an=c,l[d].ind=f,l[d].extra=P,d+=1;f+=1,c=0}}else if(3==m){if(c+=P,""===s||e===r-1){for(""===s&&(c-=P);d<=e;)l[d].an=c,l[d].ind=f,l[d].extra=P,d+=1;c=0,f+=1}}else l[f].ind=f,l[f].extra=0,f+=1;if(t.l=l,v=v<g?g:v,y.push(g),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=y;var V,R,L=p.a;n=L.length;var G,N,B=[];for(a=0;a<n;a+=1){for((V=L[a]).a.sc&&(t.strokeColorAnim=!0),V.a.sw&&(t.strokeWidthAnim=!0),(V.a.fc||V.a.fh||V.a.fs||V.a.fb)&&(t.fillColorAnim=!0),N=0,G=V.s.b,e=0;e<r;e+=1)(R=l[e]).anIndexes[a]=N,(1==G&&""!==R.val||2==G&&""!==R.val&&"\xa0"!==R.val||3==G&&(R.n||"\xa0"==R.val||e==r-1)||4==G&&(R.n||e==r-1))&&(1===V.s.rn&&B.push(N),N+=1);p.a[a].s.totalChars=N;var z,O=-1;if(1===V.s.rn)for(e=0;e<r;e+=1)O!=(R=l[e]).anIndexes[a]&&(O=R.anIndexes[a],z=B.splice(Math.floor(Math.random()*B.length),1)[0]),R.anIndexes[a]=z}t.yOffset=t.finalLineHeight||1.2*t.finalSize,t.ls=t.ls||0,t.ascent=b.ascent*t.finalSize/100},TextProperty.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var r=this.copyData({},this.data.d.k[e].s);r=this.copyData(r,t),this.data.d.k[e].s=r,this.recalculate(e),this.elem.addDynamicProperty(this)},TextProperty.prototype.recalculate=function(t){var e=this.data.d.k[t].s;e.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(e)},TextProperty.prototype.canResizeFont=function(t){this.canResize=t,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},TextProperty.prototype.setMinimumFontSize=function(t){this.minimumFontSize=Math.floor(t)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var TextSelectorProp=function(){var c=Math.max,d=Math.min,u=Math.floor;function i(t,e){this._currentTextLength=-1,this.k=!1,this.data=e,this.elem=t,this.comp=t.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(t),this.s=PropertyFactory.getProp(t,e.s||{k:0},0,0,this),this.e="e"in e?PropertyFactory.getProp(t,e.e,0,0,this):{v:100},this.o=PropertyFactory.getProp(t,e.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(t,e.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(t,e.ne||{k:0},0,0,this),this.a=PropertyFactory.getProp(t,e.a,0,.01,this),this.dynamicProperties.length||this.getValue()}return i.prototype={getMult:function(t){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var e=0,r=0,i=1,s=1;0<this.ne.v?e=this.ne.v/100:r=-this.ne.v/100,0<this.xe.v?i=1-this.xe.v/100:s=1+this.xe.v/100;var a=BezierFactory.getBezierEasing(e,r,i,s).get,n=0,o=this.finalS,h=this.finalE,p=this.data.sh;if(2===p)n=a(n=h===o?h<=t?1:0:c(0,d(.5/(h-o)+(t-o)/(h-o),1)));else if(3===p)n=a(n=h===o?h<=t?0:1:1-c(0,d(.5/(h-o)+(t-o)/(h-o),1)));else if(4===p)h===o?n=0:(n=c(0,d(.5/(h-o)+(t-o)/(h-o),1)))<.5?n*=2:n=1-2*(n-.5),n=a(n);else if(5===p){if(h===o)n=0;else{var l=h-o,f=-l/2+(t=d(c(0,t+.5-o),h-o)),m=l/2;n=Math.sqrt(1-f*f/(m*m))}n=a(n)}else n=6===p?a(n=h===o?0:(t=d(c(0,t+.5-o),h-o),(1+Math.cos(Math.PI+2*Math.PI*t/(h-o)))/2)):(t>=u(o)&&(n=c(0,d(t-o<0?d(h,1)-(o-t):h-t,1))),a(n));return n*this.a.v},getValue:function(t){this.iterateDynamicProperties(),this._mdf=t||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,t&&2===this.data.r&&(this.e.v=this._currentTextLength);var e=2===this.data.r?1:100/this.data.totalChars,r=this.o.v/e,i=this.s.v/e+r,s=this.e.v/e+r;if(s<i){var a=i;i=s,s=a}this.finalS=i,this.finalE=s}},extendPrototype([DynamicPropertyContainer],i),{getTextSelectorProp:function(t,e,r){return new i(t,e,r)}}}(),pool_factory=function(t,e,r,i){var s=0,a=t,n=createSizedArray(a);function o(){return s?n[s-=1]:e()}return{newElement:o,release:function(t){s===a&&(n=pooling.double(n),a*=2),r&&r(t),n[s]=t,s+=1}}},pooling={double:function(t){return t.concat(createSizedArray(t.length))}},point_pool=pool_factory(8,function(){return createTypedArray("float32",2)}),shape_pool=(KA=pool_factory(4,function(){return new ShapePath},function(t){var e,r=t._length;for(e=0;e<r;e+=1)point_pool.release(t.v[e]),point_pool.release(t.i[e]),point_pool.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1}),KA.clone=function(t){var e,r=KA.newElement(),i=void 0===t._length?t.v.length:t._length;for(r.setLength(i),r.c=t.c,e=0;e<i;e+=1)r.setTripleAt(t.v[e][0],t.v[e][1],t.o[e][0],t.o[e][1],t.i[e][0],t.i[e][1],e);return r},KA),KA,shapeCollection_pool=(TA={newShapeCollection:function(){var t;t=UA?WA[UA-=1]:new ShapeCollection;return t},release:function(t){var e,r=t._length;for(e=0;e<r;e+=1)shape_pool.release(t.shapes[e]);t._length=0,UA===VA&&(WA=pooling.double(WA),VA*=2);WA[UA]=t,UA+=1}},UA=0,VA=4,WA=createSizedArray(VA),TA),TA,UA,VA,WA,segments_length_pool=pool_factory(8,function(){return{lengths:[],totalLength:0}},function(t){var e,r=t.lengths.length;for(e=0;e<r;e+=1)bezier_length_pool.release(t.lengths[e]);t.lengths.length=0}),bezier_length_pool=pool_factory(8,function(){return{addedLength:0,percents:createTypedArray("float32",defaultCurveSegments),lengths:createTypedArray("float32",defaultCurveSegments)}});function BaseRenderer(){}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var r="";if(e&&e.title){var i=createNS("title"),s=createElementID();i.setAttribute("id",s),i.textContent=e.title,this.svgElement.appendChild(i),r+=s}if(e&&e.description){var a=createNS("desc"),n=createElementID();a.setAttribute("id",n),a.textContent=e.description,this.svgElement.appendChild(a),r+=" "+n}r&&this.svgElement.setAttribute("aria-labelledby",r);var o=createNS("defs");this.svgElement.appendChild(o);var h=createNS("g");this.svgElement.appendChild(h),this.layerElement=h,this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:e&&e.imagePreserveAspectRatio||"xMidYMid slice",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!e||!1!==e.hideOnTransparent,viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||"",id:e&&e.id||"",focusable:e&&e.focusable},this.globalData={_mdf:!1,frameNum:-1,defs:o,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}function MaskElement(t,e,r){this.data=t,this.element=e,this.globalData=r,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i,s=this.globalData.defs,a=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(a),this.solidPath="";var n,o,h,p,l,f,m,c=this.masksProperties,d=0,u=[],y=createElementID(),g="clipPath",v="clip-path";for(i=0;i<a;i++)if(("a"!==c[i].mode&&"n"!==c[i].mode||c[i].inv||100!==c[i].o.k||c[i].o.x)&&(v=g="mask"),"s"!=c[i].mode&&"i"!=c[i].mode||0!==d?p=null:((p=createNS("rect")).setAttribute("fill","#ffffff"),p.setAttribute("width",this.element.comp.data.w||0),p.setAttribute("height",this.element.comp.data.h||0),u.push(p)),n=createNS("path"),"n"!=c[i].mode){var b;if(d+=1,n.setAttribute("fill","s"===c[i].mode?"#000000":"#ffffff"),n.setAttribute("clip-rule","nonzero"),0!==c[i].x.k?(v=g="mask",m=PropertyFactory.getProp(this.element,c[i].x,0,null,this.element),b=createElementID(),(l=createNS("filter")).setAttribute("id",b),(f=createNS("feMorphology")).setAttribute("operator","erode"),f.setAttribute("in","SourceGraphic"),f.setAttribute("radius","0"),l.appendChild(f),s.appendChild(l),n.setAttribute("stroke","s"===c[i].mode?"#000000":"#ffffff")):m=f=null,this.storedData[i]={elem:n,x:m,expan:f,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"==c[i].mode){h=u.length;var P=createNS("g");for(o=0;o<h;o+=1)P.appendChild(u[o]);var _=createNS("mask");_.setAttribute("mask-type","alpha"),_.setAttribute("id",y+"_"+d),_.appendChild(n),s.appendChild(_),P.setAttribute("mask","url("+locationHref+"#"+y+"_"+d+")"),u.length=0,u.push(P)}else u.push(n);c[i].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[i]={elem:n,lastPath:"",op:PropertyFactory.getProp(this.element,c[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,c[i],3),invRect:p},this.viewData[i].prop.k||this.drawPath(c[i],this.viewData[i].prop.v,this.viewData[i])}else this.viewData[i]={op:PropertyFactory.getProp(this.element,c[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,c[i],3),elem:n,lastPath:""},s.appendChild(n);for(this.maskElement=createNS(g),a=u.length,i=0;i<a;i+=1)this.maskElement.appendChild(u[i]);0<d&&(this.maskElement.setAttribute("id",y),this.element.maskedElement.setAttribute(v,"url("+locationHref+"#"+y+")"),s.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}function HierarchyElement(){}function FrameElement(){}function TransformElement(){}function RenderableElement(){}function RenderableDOMElement(){}function ProcessedElement(t,e){this.elem=t,this.pos=e}function SVGStyleData(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=!0===t.hd,this.pElem=createNS("path"),this.msElem=null}function SVGShapeData(t,e,r){this.caches=[],this.styles=[],this.transformers=t,this.lStr="",this.sh=r,this.lvl=e,this._isAnimated=!!r.k;for(var i=0,s=t.length;i<s;){if(t[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}function SVGTransformData(t,e,r){this.transform={mProps:t,op:e,container:r},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}function SVGStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r,this._isAnimated=!!this._isAnimated}function SVGFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=r}function SVGGradientFillStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,r)}function SVGGradientStrokeStyleData(t,e,r){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.initGradientData(t,e,r),this._isAnimated=!!this._isAnimated}function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}BaseRenderer.prototype.checkLayers=function(t){var e,r,i=this.layers.length;for(this.completeLayers=!0,e=i-1;0<=e;e--)this.elements[e]||(r=this.layers[e]).ip-r.st<=t-this.layers[e].st&&r.op-r.st>t-this.layers[e].st&&this.buildItem(e),this.completeLayers=!!this.elements[e]&&this.completeLayers;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 3:return this.createNull(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 13:return this.createCamera(t)}return this.createNull(t)},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){this.completeLayers=!1;var e,r,i=t.length,s=this.layers.length;for(e=0;e<i;e+=1)for(r=0;r<s;){if(this.layers[r].id==t[e].id){this.layers[r]=t[e];break}r+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,r){for(var i=this.elements,s=this.layers,a=0,n=s.length;a<n;)s[a].ind==e&&(i[a]&&!0!==i[a]?(r.push(i[a]),i[a].setAsParent(),void 0!==s[a].parent?this.buildElementParenting(t,s[a].parent,r):t.setHierarchy(r)):(this.buildItem(a),this.addPendingElement(t))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},BaseRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length;for(e=0;e<r;e+=1)if(t[e].xt){var i=this.createComp(t[e]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},BaseRenderer.prototype.setupGlobalData=function(t,e){this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.frameId=0,this.globalData.frameRate=t.fr,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h}},extendPrototype([BaseRenderer],SVGRenderer),SVGRenderer.prototype.createNull=function(t){return new NullElement(t,this.globalData,this)},SVGRenderer.prototype.createShape=function(t){return new SVGShapeElement(t,this.globalData,this)},SVGRenderer.prototype.createText=function(t){return new SVGTextElement(t,this.globalData,this)},SVGRenderer.prototype.createImage=function(t){return new IImageElement(t,this.globalData,this)},SVGRenderer.prototype.createComp=function(t){return new SVGCompElement(t,this.globalData,this)},SVGRenderer.prototype.createSolid=function(t){return new ISolidElement(t,this.globalData,this)},SVGRenderer.prototype.configAnimation=function(t){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",t.w),this.svgElement.setAttribute("height",t.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)"),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),void 0!==this.renderConfig.focusable&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var e=this.globalData.defs;this.setupGlobalData(t,e),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=t;var r=createNS("clipPath"),i=createNS("rect");i.setAttribute("width",t.w),i.setAttribute("height",t.h),i.setAttribute("x",0),i.setAttribute("y",0);var s=createElementID();r.setAttribute("id",s),r.appendChild(i),this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+s+")"),e.appendChild(r),this.layers=t.layers,this.elements=createSizedArray(t.layers.length)},SVGRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t++)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRenderer.prototype.updateContainerSize=function(){},SVGRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){e[t]=!0;var r=this.createItem(this.layers[t]);e[t]=r,expressionsPlugin&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(r),r.initExpressions()),this.appendElementInPos(r,t),this.layers[t].tt&&(this.elements[t-1]&&!0!==this.elements[t-1]?r.setMatte(e[t-1].layerId):(this.buildItem(t-1),this.addPendingElement(r)))}},SVGRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,r=this.elements.length;e<r;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},SVGRenderer.prototype.renderFrame=function(t){if(this.renderedFrame!==t&&!this.destroyed){null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.globalData._mdf=!1;var e,r=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=r-1;0<=e;e--)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);if(this.globalData._mdf)for(e=0;e<r;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRenderer.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){for(var i,s=0;s<e;)this.elements[s]&&!0!==this.elements[s]&&this.elements[s].getBaseElement()&&(i=this.elements[s].getBaseElement()),s+=1;i?this.layerElement.insertBefore(r,i):this.layerElement.appendChild(r)}},SVGRenderer.prototype.hide=function(){this.layerElement.style.display="none"},SVGRenderer.prototype.show=function(){this.layerElement.style.display="block"},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.renderFrame=function(t){var e,r=this.element.finalTransform.mat,i=this.masksProperties.length;for(e=0;e<i;e++)if((this.viewData[e].prop._mdf||t)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op._mdf||t)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp._mdf||t)&&this.viewData[e].invRect.setAttribute("transform",r.getInverseMatrix().to2dCSS()),this.storedData[e].x&&(this.storedData[e].x._mdf||t))){var s=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+locationHref+"#"+this.storedData[e].filterId+")")),s.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,r){var i,s,a=" M"+e.v[0][0]+","+e.v[0][1];for(s=e._length,i=1;i<s;i+=1)a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[i][0]+","+e.i[i][1]+" "+e.v[i][0]+","+e.v[i][1];if(e.c&&1<s&&(a+=" C"+e.o[i-1][0]+","+e.o[i-1][1]+" "+e.i[0][0]+","+e.i[0][1]+" "+e.v[0][0]+","+e.v[0][1]),r.lastPath!==a){var n="";r.elem&&(e.c&&(n=t.inv?this.solidPath+a:a),r.elem.setAttribute("d",n)),r.lastPath=a}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null},HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(t){this.hierarchy=t},setAsParent:function(){this._isParent=!0},checkParenting:function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent,[])}},FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(t,e){var r,i=this.dynamicProperties.length;for(r=0;r<i;r+=1)(e||this._isParent&&"transform"===this.dynamicProperties[r].propType)&&(this.dynamicProperties[r].getValue(),this.dynamicProperties[r]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(t){-1===this.dynamicProperties.indexOf(t)&&this.dynamicProperties.push(t)}},TransformElement.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new Matrix},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var t,e=this.finalTransform.mat,r=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;r<i;){if(this.hierarchy[r].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}r+=1}if(this.finalTransform._matMdf)for(t=this.finalTransform.mProp.v.props,e.cloneFromProps(t),r=0;r<i;r+=1)t=this.hierarchy[r].finalTransform.mProp.v.props,e.transform(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}},globalToLocal:function(t){var e=[];e.push(this.finalTransform);for(var r=!0,i=this.comp;r;)i.finalTransform?(i.data.hasMask&&e.splice(0,0,i.finalTransform),i=i.comp):r=!1;var s,a,n=e.length;for(s=0;s<n;s+=1)a=e[s].mat.applyToPointArray(0,0,0),t=[t[0]-a[0],t[1]-a[1],0];return t},mHelper:new Matrix},RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(t){-1===this.renderableComponents.indexOf(t)&&this.renderableComponents.push(t)},removeRenderableComponent:function(t){-1!==this.renderableComponents.indexOf(t)&&this.renderableComponents.splice(this.renderableComponents.indexOf(t),1)},prepareRenderableFrame:function(t){this.checkLayerLimits(t)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?!0!==this.isInRange&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):!1!==this.isInRange&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var t,e=this.renderableComponents.length;for(t=0;t<e;t+=1)this.renderableComponents[t].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}},extendPrototype([RenderableElement,createProxyFunction({initElement:function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){this.hidden||this.isInRange&&!this.isTransparent||((this.baseElement||this.layerElement).style.display="none",this.hidden=!0)},show:function(){this.isInRange&&!this.isTransparent&&(this.data.hd||((this.baseElement||this.layerElement).style.display="block"),this.hidden=!1,this._isFirstFrame=!0)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}})],RenderableDOMElement),SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1},SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0},extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData),extendPrototype([DynamicPropertyContainer],SVGFillStyleData),SVGGradientFillStyleData.prototype.initGradientData=function(t,e,r){this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.s=PropertyFactory.getProp(t,e.s,1,null,this),this.e=PropertyFactory.getProp(t,e.e,1,null,this),this.h=PropertyFactory.getProp(t,e.h||{k:0},0,.01,this),this.a=PropertyFactory.getProp(t,e.a||{k:0},0,degToRads,this),this.g=new GradientProperty(t,e.g,this),this.style=r,this.stops=[],this.setGradientData(r.pElem,e),this.setGradientOpacity(e,r),this._isAnimated=!!this._isAnimated},SVGGradientFillStyleData.prototype.setGradientData=function(t,e){var r=createElementID(),i=createNS(1===e.t?"linearGradient":"radialGradient");i.setAttribute("id",r),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var s,a,n,o=[];for(n=4*e.g.p,a=0;a<n;a+=4)s=createNS("stop"),i.appendChild(s),o.push(s);t.setAttribute("gf"===e.ty?"fill":"stroke","url("+locationHref+"#"+r+")"),this.gf=i,this.cst=o},SVGGradientFillStyleData.prototype.setGradientOpacity=function(t,e){if(this.g._hasOpacity&&!this.g._collapsable){var r,i,s,a=createNS("mask"),n=createNS("path");a.appendChild(n);var o=createElementID(),h=createElementID();a.setAttribute("id",h);var p=createNS(1===t.t?"linearGradient":"radialGradient");p.setAttribute("id",o),p.setAttribute("spreadMethod","pad"),p.setAttribute("gradientUnits","userSpaceOnUse"),s=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var l=this.stops;for(i=4*t.g.p;i<s;i+=2)(r=createNS("stop")).setAttribute("stop-color","rgb(255,255,255)"),p.appendChild(r),l.push(r);n.setAttribute("gf"===t.ty?"fill":"stroke","url("+locationHref+"#"+o+")"),this.of=p,this.ms=a,this.ost=l,this.maskId=h,e.msElem=n}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData),extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);var SVGElementsRenderer=function(){var y=new Matrix,g=new Matrix;function e(t,e,r){(r||e.transform.op._mdf)&&e.transform.container.setAttribute("opacity",e.transform.op.v),(r||e.transform.mProps._mdf)&&e.transform.container.setAttribute("transform",e.transform.mProps.v.to2dCSS())}function r(t,e,r){var i,s,a,n,o,h,p,l,f,m,c,d=e.styles.length,u=e.lvl;for(h=0;h<d;h+=1){if(n=e.sh._mdf||r,e.styles[h].lvl<u){for(l=g.reset(),m=u-e.styles[h].lvl,c=e.transformers.length-1;!n&&0<m;)n=e.transformers[c].mProps._mdf||n,m--,c--;if(n)for(m=u-e.styles[h].lvl,c=e.transformers.length-1;0<m;)f=e.transformers[c].mProps.v.props,l.transform(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10],f[11],f[12],f[13],f[14],f[15]),m--,c--}else l=y;if(s=(p=e.sh.paths)._length,n){for(a="",i=0;i<s;i+=1)(o=p.shapes[i])&&o._length&&(a+=buildShapeString(o,o._length,o.c,l));e.caches[h]=a}else a=e.caches[h];e.styles[h].d+=!0===t.hd?"":a,e.styles[h]._mdf=n||e.styles[h]._mdf}}function i(t,e,r){var i=e.style;(e.c._mdf||r)&&i.pElem.setAttribute("fill","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("fill-opacity",e.o.v)}function s(t,e,r){a(t,e,r),n(t,e,r)}function a(t,e,r){var i,s,a,n,o,h=e.gf,p=e.g._hasOpacity,l=e.s.v,f=e.e.v;if(e.o._mdf||r){var m="gf"===t.ty?"fill-opacity":"stroke-opacity";e.style.pElem.setAttribute(m,e.o.v)}if(e.s._mdf||r){var c=1===t.t?"x1":"cx",d="x1"===c?"y1":"cy";h.setAttribute(c,l[0]),h.setAttribute(d,l[1]),p&&!e.g._collapsable&&(e.of.setAttribute(c,l[0]),e.of.setAttribute(d,l[1]))}if(e.g._cmdf||r){i=e.cst;var u=e.g.c;for(a=i.length,s=0;s<a;s+=1)(n=i[s]).setAttribute("offset",u[4*s]+"%"),n.setAttribute("stop-color","rgb("+u[4*s+1]+","+u[4*s+2]+","+u[4*s+3]+")")}if(p&&(e.g._omdf||r)){var y=e.g.o;for(a=(i=e.g._collapsable?e.cst:e.ost).length,s=0;s<a;s+=1)n=i[s],e.g._collapsable||n.setAttribute("offset",y[2*s]+"%"),n.setAttribute("stop-opacity",y[2*s+1])}if(1===t.t)(e.e._mdf||r)&&(h.setAttribute("x2",f[0]),h.setAttribute("y2",f[1]),p&&!e.g._collapsable&&(e.of.setAttribute("x2",f[0]),e.of.setAttribute("y2",f[1])));else if((e.s._mdf||e.e._mdf||r)&&(o=Math.sqrt(Math.pow(l[0]-f[0],2)+Math.pow(l[1]-f[1],2)),h.setAttribute("r",o),p&&!e.g._collapsable&&e.of.setAttribute("r",o)),e.e._mdf||e.h._mdf||e.a._mdf||r){o||(o=Math.sqrt(Math.pow(l[0]-f[0],2)+Math.pow(l[1]-f[1],2)));var g=Math.atan2(f[1]-l[1],f[0]-l[0]),v=o*(1<=e.h.v?.99:e.h.v<=-1?-.99:e.h.v),b=Math.cos(g+e.a.v)*v+l[0],P=Math.sin(g+e.a.v)*v+l[1];h.setAttribute("fx",b),h.setAttribute("fy",P),p&&!e.g._collapsable&&(e.of.setAttribute("fx",b),e.of.setAttribute("fy",P))}}function n(t,e,r){var i=e.style,s=e.d;s&&(s._mdf||r)&&s.dashStr&&(i.pElem.setAttribute("stroke-dasharray",s.dashStr),i.pElem.setAttribute("stroke-dashoffset",s.dashoffset[0])),e.c&&(e.c._mdf||r)&&i.pElem.setAttribute("stroke","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o._mdf||r)&&i.pElem.setAttribute("stroke-opacity",e.o.v),(e.w._mdf||r)&&(i.pElem.setAttribute("stroke-width",e.w.v),i.msElem&&i.msElem.setAttribute("stroke-width",e.w.v))}return{createRenderFunction:function(t){t.ty;switch(t.ty){case"fl":return i;case"gf":return a;case"gs":return s;case"st":return n;case"sh":case"el":case"rc":case"sr":return r;case"tr":return e}}}}();function ShapeTransformManager(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}function BaseElement(){}function NullElement(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initFrame(),this.initTransform(t,e,r),this.initHierarchy()}function SVGBaseElement(){}function IShapeElement(){}function ITextElement(){}function ICompElement(){}function IImageElement(t,e,r){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,r),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}function ISolidElement(t,e,r){this.initElement(t,e,r)}function SVGCompElement(t,e,r){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,r),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}function SVGTextElement(t,e,r){this.textSpans=[],this.renderType="svg",this.initElement(t,e,r)}function SVGShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(t,e,r),this.prevViewData=[]}function SVGTintFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");if(r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r),(r=createNS("feColorMatrix")).setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),r.setAttribute("result","f2"),t.appendChild(r),this.matrixFilter=r,100!==e.effectElements[2].p.v||e.effectElements[2].p.k){var i,s=createNS("feMerge");t.appendChild(s),(i=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),s.appendChild(i),(i=createNS("feMergeNode")).setAttribute("in","f2"),s.appendChild(i)}}function SVGFillFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(r),this.matrixFilter=r}function SVGGaussianBlurEffect(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","300%"),t.setAttribute("height","300%"),this.filterManager=e;var r=createNS("feGaussianBlur");t.appendChild(r),this.feGaussianBlur=r}function SVGStrokeEffect(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}function SVGTritoneFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r);var i=createNS("feComponentTransfer");i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.matrixFilter=i;var s=createNS("feFuncR");s.setAttribute("type","table"),i.appendChild(s),this.feFuncR=s;var a=createNS("feFuncG");a.setAttribute("type","table"),i.appendChild(a),this.feFuncG=a;var n=createNS("feFuncB");n.setAttribute("type","table"),i.appendChild(n),this.feFuncB=n}function SVGProLevelsFilter(t,e){this.filterManager=e;var r=this.filterManager.effectElements,i=createNS("feComponentTransfer");(r[10].p.k||0!==r[10].p.v||r[11].p.k||1!==r[11].p.v||r[12].p.k||1!==r[12].p.v||r[13].p.k||0!==r[13].p.v||r[14].p.k||1!==r[14].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",i)),(r[17].p.k||0!==r[17].p.v||r[18].p.k||1!==r[18].p.v||r[19].p.k||1!==r[19].p.v||r[20].p.k||0!==r[20].p.v||r[21].p.k||1!==r[21].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",i)),(r[24].p.k||0!==r[24].p.v||r[25].p.k||1!==r[25].p.v||r[26].p.k||1!==r[26].p.v||r[27].p.k||0!==r[27].p.v||r[28].p.k||1!==r[28].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",i)),(r[31].p.k||0!==r[31].p.v||r[32].p.k||1!==r[32].p.v||r[33].p.k||1!==r[33].p.v||r[34].p.k||0!==r[34].p.v||r[35].p.k||1!==r[35].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",i)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),i=createNS("feComponentTransfer")),(r[3].p.k||0!==r[3].p.v||r[4].p.k||1!==r[4].p.v||r[5].p.k||1!==r[5].p.v||r[6].p.k||0!==r[6].p.v||r[7].p.k||1!==r[7].p.v)&&(i.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(i),this.feFuncRComposed=this.createFeFunc("feFuncR",i),this.feFuncGComposed=this.createFeFunc("feFuncG",i),this.feFuncBComposed=this.createFeFunc("feFuncB",i))}function SVGDropShadowEffect(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","400%"),t.setAttribute("height","400%"),this.filterManager=e;var r=createNS("feGaussianBlur");r.setAttribute("in","SourceAlpha"),r.setAttribute("result","drop_shadow_1"),r.setAttribute("stdDeviation","0"),this.feGaussianBlur=r,t.appendChild(r);var i=createNS("feOffset");i.setAttribute("dx","25"),i.setAttribute("dy","0"),i.setAttribute("in","drop_shadow_1"),i.setAttribute("result","drop_shadow_2"),this.feOffset=i,t.appendChild(i);var s=createNS("feFlood");s.setAttribute("flood-color","#00ff00"),s.setAttribute("flood-opacity","1"),s.setAttribute("result","drop_shadow_3"),this.feFlood=s,t.appendChild(s);var a=createNS("feComposite");a.setAttribute("in","drop_shadow_3"),a.setAttribute("in2","drop_shadow_2"),a.setAttribute("operator","in"),a.setAttribute("result","drop_shadow_4"),t.appendChild(a);var n,o=createNS("feMerge");t.appendChild(o),n=createNS("feMergeNode"),o.appendChild(n),(n=createNS("feMergeNode")).setAttribute("in","SourceGraphic"),this.feMergeNode=n,this.feMerge=o,this.originalNodeAdded=!1,o.appendChild(n)}ShapeTransformManager.prototype={addTransformSequence:function(t){var e,r=t.length,i="_";for(e=0;e<r;e+=1)i+=t[e].transform.key+"_";var s=this.sequences[i];return s||(s={transforms:[].concat(t),finalTransform:new Matrix,_mdf:!1},this.sequences[i]=s,this.sequenceList.push(s)),s},processSequence:function(t,e){for(var r,i=0,s=t.transforms.length,a=e;i<s&&!e;){if(t.transforms[i].transform.mProps._mdf){a=!0;break}i+=1}if(a)for(t.finalTransform.reset(),i=s-1;0<=i;i-=1)r=t.transforms[i].transform.mProps.v.props,t.finalTransform.transform(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15]);t._mdf=a},processSequences:function(t){var e,r=this.sequenceList.length;for(e=0;e<r;e+=1)this.processSequence(this.sequenceList[e],t)},getNewKey:function(){return"_"+this.transform_key_count++}},BaseElement.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if("n"!==this.data.masksProperties[t].mode&&!1!==this.data.masksProperties[t].cl)return!0;t+=1}return!1},initExpressions:function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),0===this.data.ty||this.data.xt?this.compInterface=CompExpressionInterface(this):4===this.data.ty?(this.layerInterface.shapeInterface=ShapeExpressionInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):5===this.data.ty&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},setBlendMode:function(){var t=getBlendMode(this.data.bm);(this.baseElement||this.layerElement).style["mix-blend-mode"]=t},initBaseData:function(t,e,r){this.globalData=e,this.comp=r,this.data=t,this.layerId=createElementID(),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}},NullElement.prototype.prepareFrame=function(t){this.prepareProperties(t,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement),SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var t,e,r,i=null;if(this.data.td){if(3==this.data.td||1==this.data.td){var s=createNS("mask");s.setAttribute("id",this.layerId),s.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),s.appendChild(this.layerElement),i=s,this.globalData.defs.appendChild(s),featureSupport.maskType||1!=this.data.td||(s.setAttribute("mask-type","luminance"),t=createElementID(),e=filtersFactory.createFilter(t),this.globalData.defs.appendChild(e),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),(r=createNS("g")).appendChild(this.layerElement),i=r,s.appendChild(r),r.setAttribute("filter","url("+locationHref+"#"+t+")"))}else if(2==this.data.td){var a=createNS("mask");a.setAttribute("id",this.layerId),a.setAttribute("mask-type","alpha");var n=createNS("g");a.appendChild(n),t=createElementID(),e=filtersFactory.createFilter(t);var o=createNS("feComponentTransfer");o.setAttribute("in","SourceGraphic"),e.appendChild(o);var h=createNS("feFuncA");h.setAttribute("type","table"),h.setAttribute("tableValues","1.0 0.0"),o.appendChild(h),this.globalData.defs.appendChild(e);var p=createNS("rect");p.setAttribute("width",this.comp.data.w),p.setAttribute("height",this.comp.data.h),p.setAttribute("x","0"),p.setAttribute("y","0"),p.setAttribute("fill","#ffffff"),p.setAttribute("opacity","0"),n.setAttribute("filter","url("+locationHref+"#"+t+")"),n.appendChild(p),n.appendChild(this.layerElement),i=n,featureSupport.maskType||(a.setAttribute("mask-type","luminance"),e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),r=createNS("g"),n.appendChild(p),r.appendChild(this.layerElement),i=r,n.appendChild(r)),this.globalData.defs.appendChild(a)}}else this.data.tt?(this.matteElement.appendChild(this.layerElement),i=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0===this.data.ty&&!this.data.hd){var l=createNS("clipPath"),f=createNS("path");f.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var m=createElementID();if(l.setAttribute("id",m),l.appendChild(f),this.globalData.defs.appendChild(l),this.checkMasks()){var c=createNS("g");c.setAttribute("clip-path","url("+locationHref+"#"+m+")"),c.appendChild(this.layerElement),this.transformedElement=c,i?i.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+m+")")}0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData),this.renderableEffectsManager=new SVGEffects(this)},setMatte:function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+locationHref+"#"+t+")")}},IShapeElement.prototype={addShapeToModifiers:function(t){var e,r=this.shapeModifiers.length;for(e=0;e<r;e+=1)this.shapeModifiers[e].addShape(t)},isShapeInAnimatedModifiers:function(t){for(var e=this.shapeModifiers.length;0<e;)if(this.shapeModifiers[0].isAnimatedWithShape(t))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].sh.reset();for(t=(e=this.shapeModifiers.length)-1;0<=t;t-=1)this.shapeModifiers[t].processShapes(this._isFirstFrame)}},lcEnum:{1:"butt",2:"round",3:"square"},ljEnum:{1:"miter",2:"round",3:"bevel"},searchProcessedElement:function(t){for(var e=this.processedElements,r=0,i=e.length;r<i;){if(e[r].elem===t)return e[r].pos;r+=1}return 0},addProcessedElement:function(t,e){for(var r=this.processedElements,i=r.length;i;)if(r[i-=1].elem===t)return void(r[i].pos=e);r.push(new ProcessedElement(t,e))},prepareFrame:function(t){this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange)}},ITextElement.prototype.initElement=function(t,e,r){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(t,e,r),this.textProperty=new TextProperty(this,t.t,this.dynamicProperties),this.textAnimator=new TextAnimatorProperty(t.t,this.renderType,this),this.initTransform(t,e,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},ITextElement.prototype.createPathShape=function(t,e){var r,i,s=e.length,a="";for(r=0;r<s;r+=1)i=e[r].ks.k,a+=buildShapeString(i,i.i.length,!0,t);return a},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.canResizeFont=function(t){this.textProperty.canResizeFont(t)},ITextElement.prototype.setMinimumFontSize=function(t){this.textProperty.setMinimumFontSize(t)},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,r,i,s){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r])/2,0,0)}e.translate(i,s,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(t,e,r){this.initFrame(),this.initBaseData(t,e,r),this.initTransform(t,e,r),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),!this.data.xt&&e.progressiveLoad||this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(t){if(this._mdf=!1,this.prepareRenderableFrame(t),this.prepareProperties(t,this.isInRange),this.isInRange||this.data.xt){if(this.tm._placeholder)this.renderedFrame=t/this.data.sr;else{var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}var r,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),r=i-1;0<=r;r-=1)(this.completeLayers||this.elements[r])&&(this.elements[r].prepareFrame(this.renderedFrame-this.layers[r].st),this.elements[r]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()},extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var t=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect},extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var t=createNS("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t)},extendPrototype([SVGRenderer,ICompElement,SVGBaseElement],SVGCompElement),extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextElement),SVGTextElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextElement.prototype.buildTextContents=function(t){for(var e=0,r=t.length,i=[],s="";e<r;)t[e]===String.fromCharCode(13)||t[e]===String.fromCharCode(3)?(i.push(s),s=""):s+=t[e],e+=1;return i.push(s),i},SVGTextElement.prototype.buildNewText=function(){var t,e,r=this.textProperty.currentData;this.renderedLetters=createSizedArray(r?r.l.length:0),r.fc?this.layerElement.setAttribute("fill",this.buildColor(r.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),r.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(r.sc)),this.layerElement.setAttribute("stroke-width",r.sw)),this.layerElement.setAttribute("font-size",r.finalSize);var i=this.globalData.fontManager.getFontByName(r.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var s=r.fWeight,a=r.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",s)}this.layerElement.setAttribute("aria-label",r.t);var n,o=r.l||[],h=!!this.globalData.fontManager.chars;e=o.length;var p,l=this.mHelper,f="",m=this.data.singleShape,c=0,d=0,u=!0,y=r.tr/1e3*r.finalSize;if(!m||h||r.sz){var g,v,b=this.textSpans.length;for(t=0;t<e;t+=1)h&&m&&0!==t||(n=t<b?this.textSpans[t]:createNS(h?"path":"text"),b<=t&&(n.setAttribute("stroke-linecap","butt"),n.setAttribute("stroke-linejoin","round"),n.setAttribute("stroke-miterlimit","4"),this.textSpans[t]=n,this.layerElement.appendChild(n)),n.style.display="inherit"),l.reset(),l.scale(r.finalSize/100,r.finalSize/100),m&&(o[t].n&&(c=-y,d+=r.yOffset,d+=u?1:0,u=!1),this.applyTextPropertiesToMatrix(r,l,o[t].line,c,d),c+=o[t].l||0,c+=y),h?(p=(g=(v=this.globalData.fontManager.getCharData(r.finalText[t],i.fStyle,this.globalData.fontManager.getFontByName(r.f).fFamily))&&v.data||{}).shapes?g.shapes[0].it:[],m?f+=this.createPathShape(l,p):n.setAttribute("d",this.createPathShape(l,p))):(m&&n.setAttribute("transform","translate("+l.props[12]+","+l.props[13]+")"),n.textContent=o[t].val,n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));m&&n&&n.setAttribute("d",f)}else{var P=this.textContainer,_="start";switch(r.j){case 1:_="end";break;case 2:_="middle"}P.setAttribute("text-anchor",_),P.setAttribute("letter-spacing",y);var A=this.buildTextContents(r.finalText);for(e=A.length,d=r.ps?r.ps[1]+r.ascent:0,t=0;t<e;t+=1)(n=this.textSpans[t]||createNS("tspan")).textContent=A[t],n.setAttribute("x",0),n.setAttribute("y",d),n.style.display="inherit",P.appendChild(n),this.textSpans[t]=n,d+=r.finalLineHeight;this.layerElement.appendChild(P)}for(;t<this.textSpans.length;)this.textSpans[t].style.display="none",t+=1;this._sizeChanged=!0},SVGTextElement.prototype.sourceRectAtTime=function(t){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},SVGTextElement.prototype.renderInnerContent=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){var t,e;this._sizeChanged=!0;var r,i,s=this.textAnimator.renderedLetters,a=this.textProperty.currentData.l;for(e=a.length,t=0;t<e;t+=1)a[t].n||(r=s[t],i=this.textSpans[t],r._mdf.m&&i.setAttribute("transform",r.m),r._mdf.o&&i.setAttribute("opacity",r.o),r._mdf.sw&&i.setAttribute("stroke-width",r.sw),r._mdf.sc&&i.setAttribute("stroke",r.sc),r._mdf.fc&&i.setAttribute("fill",r.fc))}},extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},SVGShapeElement.prototype.filterUniqueShapes=function(){var t,e,r,i,s=this.shapes.length,a=this.stylesList.length,n=[],o=!1;for(r=0;r<a;r+=1){for(i=this.stylesList[r],o=!1,t=n.length=0;t<s;t+=1)-1!==(e=this.shapes[t]).styles.indexOf(i)&&(n.push(e),o=e._isAnimated||o);1<n.length&&o&&this.setShapesAsAnimated(n)}},SVGShapeElement.prototype.setShapesAsAnimated=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e].setAsAnimated()},SVGShapeElement.prototype.createStyleElement=function(t,e){var r,i=new SVGStyleData(t,e),s=i.pElem;if("st"===t.ty)r=new SVGStrokeStyleData(this,t,i);else if("fl"===t.ty)r=new SVGFillStyleData(this,t,i);else if("gf"===t.ty||"gs"===t.ty){r=new("gf"===t.ty?SVGGradientFillStyleData:SVGGradientStrokeStyleData)(this,t,i),this.globalData.defs.appendChild(r.gf),r.maskId&&(this.globalData.defs.appendChild(r.ms),this.globalData.defs.appendChild(r.of),s.setAttribute("mask","url("+locationHref+"#"+r.maskId+")"))}return"st"!==t.ty&&"gs"!==t.ty||(s.setAttribute("stroke-linecap",this.lcEnum[t.lc]||"round"),s.setAttribute("stroke-linejoin",this.ljEnum[t.lj]||"round"),s.setAttribute("fill-opacity","0"),1===t.lj&&s.setAttribute("stroke-miterlimit",t.ml)),2===t.r&&s.setAttribute("fill-rule","evenodd"),t.ln&&s.setAttribute("id",t.ln),t.cl&&s.setAttribute("class",t.cl),t.bm&&(s.style["mix-blend-mode"]=getBlendMode(t.bm)),this.stylesList.push(i),this.addToAnimatedContents(t,r),r},SVGShapeElement.prototype.createGroupElement=function(t){var e=new ShapeGroupData;return t.ln&&e.gr.setAttribute("id",t.ln),t.cl&&e.gr.setAttribute("class",t.cl),t.bm&&(e.gr.style["mix-blend-mode"]=getBlendMode(t.bm)),e},SVGShapeElement.prototype.createTransformElement=function(t,e){var r=TransformPropertyFactory.getTransformProperty(this,t,this),i=new SVGTransformData(r,r.o,e);return this.addToAnimatedContents(t,i),i},SVGShapeElement.prototype.createShapeElement=function(t,e,r){var i=4;"rc"===t.ty?i=5:"el"===t.ty?i=6:"sr"===t.ty&&(i=7);var s=new SVGShapeData(e,r,ShapePropertyFactory.getShapeProp(this,t,i,this));return this.shapes.push(s),this.addShapeToModifiers(s),this.addToAnimatedContents(t,s),s},SVGShapeElement.prototype.addToAnimatedContents=function(t,e){for(var r=0,i=this.animatedContents.length;r<i;){if(this.animatedContents[r].element===e)return;r+=1}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(t),element:e,data:t})},SVGShapeElement.prototype.setElementStyles=function(t){var e,r=t.styles,i=this.stylesList.length;for(e=0;e<i;e+=1)this.stylesList[e].closed||r.push(this.stylesList[e])},SVGShapeElement.prototype.reloadShapes=function(){this._isFirstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),e=this.dynamicProperties.length,t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(t,e,r,i,s,a,n){var o,h,p,l,f,m,c=[].concat(a),d=t.length-1,u=[],y=[];for(o=d;0<=o;o-=1){if((m=this.searchProcessedElement(t[o]))?e[o]=r[m-1]:t[o]._render=n,"fl"==t[o].ty||"st"==t[o].ty||"gf"==t[o].ty||"gs"==t[o].ty)m?e[o].style.closed=!1:e[o]=this.createStyleElement(t[o],s),t[o]._render&&i.appendChild(e[o].style.pElem),u.push(e[o].style);else if("gr"==t[o].ty){if(m)for(p=e[o].it.length,h=0;h<p;h+=1)e[o].prevViewData[h]=e[o].it[h];else e[o]=this.createGroupElement(t[o]);this.searchShapes(t[o].it,e[o].it,e[o].prevViewData,e[o].gr,s+1,c,n),t[o]._render&&i.appendChild(e[o].gr)}else"tr"==t[o].ty?(m||(e[o]=this.createTransformElement(t[o],i)),l=e[o].transform,c.push(l)):"sh"==t[o].ty||"rc"==t[o].ty||"el"==t[o].ty||"sr"==t[o].ty?(m||(e[o]=this.createShapeElement(t[o],c,s)),this.setElementStyles(e[o])):"tm"==t[o].ty||"rd"==t[o].ty||"ms"==t[o].ty?(m?(f=e[o]).closed=!1:((f=ShapeModifiers.getModifier(t[o].ty)).init(this,t[o]),e[o]=f,this.shapeModifiers.push(f)),y.push(f)):"rp"==t[o].ty&&(m?(f=e[o]).closed=!0:(f=ShapeModifiers.getModifier(t[o].ty),(e[o]=f).init(this,t,o,e),this.shapeModifiers.push(f),n=!1),y.push(f));this.addProcessedElement(t[o],o+1)}for(d=u.length,o=0;o<d;o+=1)u[o].closed=!0;for(d=y.length,o=0;o<d;o+=1)y[o].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){this.renderModifiers();var t,e=this.stylesList.length;for(t=0;t<e;t+=1)this.stylesList[t].reset();for(this.renderShape(),t=0;t<e;t+=1)(this.stylesList[t]._mdf||this._isFirstFrame)&&(this.stylesList[t].msElem&&(this.stylesList[t].msElem.setAttribute("d",this.stylesList[t].d),this.stylesList[t].d="M0 0"+this.stylesList[t].d),this.stylesList[t].pElem.setAttribute("d",this.stylesList[t].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(){var t,e,r=this.animatedContents.length;for(t=0;t<r;t+=1)e=this.animatedContents[t],(this._isFirstFrame||e.element._isAnimated)&&!0!==e.data&&e.fn(e.data,e.element,this._isFirstFrame)},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null},SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",r[0]-e[0]+" 0 0 0 "+e[0]+" "+(r[1]-e[1])+" 0 0 0 "+e[1]+" "+(r[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+i+" 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[2].p.v,r=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGGaussianBlurEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=.3*this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=3==r?0:e,s=2==r?0:e;this.feGaussianBlur.setAttribute("stdDeviation",i+" "+s);var a=1==this.filterManager.effectElements[2].p.v?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",a)}},SVGStrokeEffect.prototype.initialize=function(){var t,e,r,i,s=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(i=this.elem.maskManager.masksProperties.length,r=0):i=(r=this.filterManager.effectElements[0].p.v-1)+1,(e=createNS("g")).setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1);r<i;r+=1)t=createNS("path"),e.appendChild(t),this.paths.push({p:t,m:r});if(3===this.filterManager.effectElements[10].p.v){var a=createNS("mask"),n=createElementID();a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(e),this.elem.globalData.defs.appendChild(a);var o=createNS("g");for(o.setAttribute("mask","url("+locationHref+"#"+n+")");s[0];)o.appendChild(s[0]);this.elem.layerElement.appendChild(o),this.masker=a,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(s=this.elem.layerElement.children||this.elem.layerElement.childNodes;s.length;)this.elem.layerElement.removeChild(s[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){this.initialized||this.initialize();var e,r,i,s=this.paths.length;for(e=0;e<s;e+=1)if(-1!==this.paths[e].m&&(r=this.elem.maskManager.viewData[this.paths[e].m],i=this.paths[e].p,(t||this.filterManager._mdf||r.prop._mdf)&&i.setAttribute("d",r.lastPath),t||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||r.prop._mdf)){var a;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,o=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,h=i.getTotalLength();a="0 0 0 "+h*n+" ";var p,l=h*(o-n),f=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100,m=Math.floor(l/f);for(p=0;p<m;p+=1)a+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100+" ";a+="0 "+10*h+" 0 0"}else a="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100;i.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p._mdf)){var c=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bm_floor(255*c[0])+","+bm_floor(255*c[1])+","+bm_floor(255*c[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v,s=i[0]+" "+r[0]+" "+e[0],a=i[1]+" "+r[1]+" "+e[1],n=i[2]+" "+r[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",s),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var r=createNS(t);return r.setAttribute("type","table"),e.appendChild(r),r},SVGProLevelsFilter.prototype.getTableValue=function(t,e,r,i,s){for(var a,n,o=0,h=Math.min(t,e),p=Math.max(t,e),l=Array.call(null,{length:256}),f=0,m=s-i,c=e-t;o<=256;)n=(a=o/256)<=h?c<0?s:i:p<=a?c<0?i:s:i+m*Math.pow((a-t)/c,1/r),l[f++]=n,o+=256/255;return l.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){var e,r=this.filterManager.effectElements;this.feFuncRComposed&&(t||r[3].p._mdf||r[4].p._mdf||r[5].p._mdf||r[6].p._mdf||r[7].p._mdf)&&(e=this.getTableValue(r[3].p.v,r[4].p.v,r[5].p.v,r[6].p.v,r[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||r[10].p._mdf||r[11].p._mdf||r[12].p._mdf||r[13].p._mdf||r[14].p._mdf)&&(e=this.getTableValue(r[10].p.v,r[11].p.v,r[12].p.v,r[13].p.v,r[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||r[17].p._mdf||r[18].p._mdf||r[19].p._mdf||r[20].p._mdf||r[21].p._mdf)&&(e=this.getTableValue(r[17].p.v,r[18].p.v,r[19].p.v,r[20].p.v,r[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||r[24].p._mdf||r[25].p._mdf||r[26].p._mdf||r[27].p._mdf||r[28].p._mdf)&&(e=this.getTableValue(r[24].p.v,r[25].p.v,r[26].p.v,r[27].p.v,r[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||r[31].p._mdf||r[32].p._mdf||r[33].p._mdf||r[34].p._mdf||r[35].p._mdf)&&(e=this.getTableValue(r[31].p.v,r[32].p.v,r[33].p.v,r[34].p.v,r[35].p.v),this.feFuncA.setAttribute("tableValues",e))}},SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager._mdf){if((t||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p._mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var r=this.filterManager.effectElements[3].p.v,i=(this.filterManager.effectElements[2].p.v-90)*degToRads,s=r*Math.cos(i),a=r*Math.sin(i);this.feOffset.setAttribute("dx",s),this.feOffset.setAttribute("dy",a)}}};var _svgMatteSymbols=[];function SVGMatte3Effect(t,e,r){this.initialized=!1,this.filterManager=e,this.filterElem=t,(this.elem=r).matteElement=createNS("g"),r.matteElement.appendChild(r.layerElement),r.matteElement.appendChild(r.transformedElement),r.baseElement=r.matteElement}function SVGEffects(t){var e,r,i=t.data.ef?t.data.ef.length:0,s=createElementID(),a=filtersFactory.createFilter(s),n=0;for(this.filters=[],e=0;e<i;e+=1)r=null,20===t.data.ef[e].ty?(n+=1,r=new SVGTintFilter(a,t.effectsManager.effectElements[e])):21===t.data.ef[e].ty?(n+=1,r=new SVGFillFilter(a,t.effectsManager.effectElements[e])):22===t.data.ef[e].ty?r=new SVGStrokeEffect(t,t.effectsManager.effectElements[e]):23===t.data.ef[e].ty?(n+=1,r=new SVGTritoneFilter(a,t.effectsManager.effectElements[e])):24===t.data.ef[e].ty?(n+=1,r=new SVGProLevelsFilter(a,t.effectsManager.effectElements[e])):25===t.data.ef[e].ty?(n+=1,r=new SVGDropShadowEffect(a,t.effectsManager.effectElements[e])):28===t.data.ef[e].ty?r=new SVGMatte3Effect(a,t.effectsManager.effectElements[e],t):29===t.data.ef[e].ty&&(n+=1,r=new SVGGaussianBlurEffect(a,t.effectsManager.effectElements[e])),r&&this.filters.push(r);n&&(t.globalData.defs.appendChild(a),t.layerElement.setAttribute("filter","url("+locationHref+"#"+s+")")),this.filters.length&&t.addRenderableComponent(this)}SVGMatte3Effect.prototype.findSymbol=function(t){for(var e=0,r=_svgMatteSymbols.length;e<r;){if(_svgMatteSymbols[e]===t)return _svgMatteSymbols[e];e+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(t,e){var r=t.layerElement.parentNode;if(r){for(var i,s=r.children,a=0,n=s.length;a<n&&s[a]!==t.layerElement;)a+=1;a<=n-2&&(i=s[a+1]);var o=createNS("use");o.setAttribute("href","#"+e),i?r.insertBefore(o,i):r.appendChild(o)}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){if(!this.findSymbol(e)){var r=createElementID(),i=createNS("mask");i.setAttribute("id",e.layerId),i.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(e);var s=t.globalData.defs;s.appendChild(i);var a=createNS("symbol");a.setAttribute("id",r),this.replaceInParent(e,r),a.appendChild(e.layerElement),s.appendChild(a);var n=createNS("use");n.setAttribute("href","#"+r),i.appendChild(n),e.data.hd=!1,e.show()}t.setMatte(e.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=this.elem.comp.elements,r=0,i=e.length;r<i;)e[r]&&e[r].data.ind===t&&this.setElementAsMask(this.elem,e[r]),r+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGEffects.prototype.renderFrame=function(t){var e,r=this.filters.length;for(e=0;e<r;e+=1)this.filters[e].renderFrame(t)};var animationManager=function(){var t={},s=[],i=0,a=0,n=0,o=!0,h=!1;function r(t){for(var e=0,r=t.target;e<a;)s[e].animation===r&&(s.splice(e,1),e-=1,a-=1,r.isPaused||f()),e+=1}function p(t,e){if(!t)return null;for(var r=0;r<a;){if(s[r].elem==t&&null!==s[r].elem)return s[r].animation;r+=1}var i=new AnimationItem;return m(i,t),i.setData(t,e),i}function l(){n+=1,d()}function f(){n-=1}function m(t,e){t.addEventListener("destroy",r),t.addEventListener("_active",l),t.addEventListener("_idle",f),s.push({elem:e,animation:t}),a+=1}function c(t){var e,r=t-i;for(e=0;e<a;e+=1)s[e].animation.advanceTime(r);i=t,n&&!h?window.requestAnimationFrame(c):o=!0}function e(t){i=t,window.requestAnimationFrame(c)}function d(){!h&&n&&o&&(window.requestAnimationFrame(e),o=!1)}return t.registerAnimation=p,t.loadAnimation=function(t){var e=new AnimationItem;return m(e,null),e.setParams(t),e},t.setSpeed=function(t,e){var r;for(r=0;r<a;r+=1)s[r].animation.setSpeed(t,e)},t.setDirection=function(t,e){var r;for(r=0;r<a;r+=1)s[r].animation.setDirection(t,e)},t.play=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.play(t)},t.pause=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.pause(t)},t.stop=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.stop(t)},t.togglePause=function(t){var e;for(e=0;e<a;e+=1)s[e].animation.togglePause(t)},t.searchAnimations=function(t,e,r){var i,s=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),a=s.length;for(i=0;i<a;i+=1)r&&s[i].setAttribute("data-bm-type",r),p(s[i],t);if(e&&0===a){r||(r="svg");var n=document.getElementsByTagName("body")[0];n.innerHTML="";var o=createTag("div");o.style.width="100%",o.style.height="100%",o.setAttribute("data-bm-type",r),n.appendChild(o),p(o,t)}},t.resize=function(){var t;for(t=0;t<a;t+=1)s[t].animation.resize()},t.goToAndStop=function(t,e,r){var i;for(i=0;i<a;i+=1)s[i].animation.goToAndStop(t,e,r)},t.destroy=function(t){var e;for(e=a-1;0<=e;e-=1)s[e].animation.destroy(t)},t.freeze=function(){h=!0},t.unfreeze=function(){h=!1,d()},t.getRegisteredAnimations=function(){var t,e=s.length,r=[];for(t=0;t<e;t+=1)r.push(s[t].animation);return r},t}(),AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=createElementID(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.subframeEnabled=subframeEnabled,this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(t){t.context&&(this.context=t.context),(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var e=t.animType?t.animType:t.renderer?t.renderer:"svg";switch(e){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new SVGRenderer(this,t.rendererSettings);break;default:this.renderer=new HybridRenderer(this,t.rendererSettings)}this.renderer.setProjectInterface(this.projectInterface),this.animType=e,""===t.loop||null===t.loop||(!1===t.loop?this.loop=!1:!0===t.loop?this.loop=!0:this.loop=parseInt(t.loop)),this.autoplay=!("autoplay"in t)||t.autoplay,this.name=t.name?t.name:"",this.autoloadSegments=!t.hasOwnProperty("autoloadSegments")||t.autoloadSegments,this.assetsPath=t.assetsPath,t.animationData?this.configAnimation(t.animationData):t.path&&(-1!==t.path.lastIndexOf("\\")?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),assetLoader.load(t.path,this.configAnimation.bind(this),function(){this.trigger("data_failed")}.bind(this)))},AnimationItem.prototype.setData=function(t,e){var r={wrapper:t,animationData:e?"object"==typeof e?e:JSON.parse(e):null},i=t.attributes;r.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",r.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:"canvas";var s=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";""===s||(r.loop="false"!==s&&("true"===s||parseInt(s)));var a=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:!i.getNamedItem("bm-autoplay")||i.getNamedItem("bm-autoplay").value;r.autoplay="false"!==a,r.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"","false"===(i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"")&&(r.prerender=!1),this.setParams(r)},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip));var e,r,i=this.animationData.layers,s=i.length,a=t.layers,n=a.length;for(r=0;r<n;r+=1)for(e=0;e<s;){if(i[e].id==a[r].id){i[e]=a[r];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(s=t.assets.length,e=0;e<s;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.renderer.includeLayers(t.layers),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.totalFrames);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var r=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,assetLoader.load(r,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},AnimationItem.prototype.loadSegments=function(){this.animationData.segments||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},AnimationItem.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},AnimationItem.prototype.configAnimation=function(t){if(this.renderer)try{this.animationData=t,this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.renderer.configAnimation(t),t.assets||(t.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.firstFrame=Math.round(this.animationData.ip),this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(t.assets),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded()}catch(t){this.triggerConfigError(t)}},AnimationItem.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.loaded()?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},AnimationItem.prototype.checkLoaded=function(){this.isLoaded||!this.renderer.globalData.fontManager.loaded()||!this.imagePreloader.loaded()&&"canvas"===this.renderer.rendererType||(this.isLoaded=!0,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play())},AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize()},AnimationItem.prototype.setSubframe=function(t){this.subframeEnabled=!!t},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.subframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame()},AnimationItem.prototype.renderFrame=function(){if(!1!==this.isLoaded)try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(t){this.triggerRenderFrameError(t)}},AnimationItem.prototype.play=function(t){t&&this.name!=t||!0===this.isPaused&&(this.isPaused=!1,this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!=t||!1===this.isPaused&&(this.isPaused=!0,this._idle=!0,this.trigger("_idle"))},AnimationItem.prototype.togglePause=function(t){t&&this.name!=t||(!0===this.isPaused?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!=t||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.goToAndStop=function(t,e,r){r&&this.name!=r||(e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier),this.pause())},AnimationItem.prototype.goToAndPlay=function(t,e,r){this.goToAndStop(t,e,r),this.play()},AnimationItem.prototype.advanceTime=function(t){if(!0!==this.isPaused&&!1!==this.isLoaded){var e=this.currentRawFrame+t*this.frameModifier,r=!1;e>=this.totalFrames-1&&0<this.frameModifier?this.loop&&this.playCount!==this.loop?e>=this.totalFrames?(this.playCount+=1,this.checkSegments(e%this.totalFrames)||(this.setCurrentRawFrameValue(e%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(e):this.checkSegments(e>this.totalFrames?e%this.totalFrames:0)||(r=!0,e=this.totalFrames-1):e<0?this.checkSegments(e%this.totalFrames)||(!this.loop||this.playCount--<=0&&!0!==this.loop?(r=!0,e=0):(this.setCurrentRawFrameValue(this.totalFrames+e%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0)):this.setCurrentRawFrameValue(e),r&&(this.setCurrentRawFrameValue(e),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(t,e){this.playCount=0,t[1]<t[0]?(0<this.frameModifier&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.timeCompleted=this.totalFrames=t[0]-t[1],this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001-e)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.timeCompleted=this.totalFrames=t[1]-t[0],this.firstFrame=t[0],this.setCurrentRawFrameValue(.001+e)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var r=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?r=t:this.currentRawFrame+this.firstFrame>e&&(r=e-t)),this.firstFrame=t,this.timeCompleted=this.totalFrames=e-t,-1!==r&&this.goToAndStop(r,!0)},AnimationItem.prototype.playSegments=function(t,e){if(e&&(this.segments.length=0),"object"==typeof t[0]){var r,i=t.length;for(r=0;r<i;r+=1)this.segments.push(t[r])}else this.segments.push(t);this.segments.length&&e&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(t){return!!this.segments.length&&(this.adjustSegment(this.segments.shift(),t),!0)},AnimationItem.prototype.destroy=function(t){t&&this.name!=t||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=this.onLoopComplete=this.onComplete=this.onSegmentStart=this.onDestroy=null,this.renderer=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(t.e)e=t.p;else if(this.assetsPath){var r=t.p;-1!==r.indexOf("images/")&&(r=r.split("/")[1]),e=this.assetsPath+r}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,r=this.assets.length;e<r;){if(t==this.assets[e].id)return this.assets[e];e+=1}},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getDuration=function(t){return t?this.totalFrames:this.totalFrames/this.frameRate},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.triggerRenderFrameError=function(t){var e=new BMRenderFrameErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)},AnimationItem.prototype.triggerConfigError=function(t){var e=new BMConfigErrorEvent(t,this.currentFrame);this.triggerEvent("error",e),this.onError&&this.onError.call(this,e)};var Expressions=(KO={},KO.initExpressions=function(t){var e=0,r=[];function i(){var t,e=r.length;for(t=0;t<e;t+=1)r[t].release();r.length=0}t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer),t.renderer.globalData.pushExpression=function(){e+=1},t.renderer.globalData.popExpression=function(){0==(e-=1)&&i()},t.renderer.globalData.registerExpressionProperty=function(t){-1===r.indexOf(t)&&r.push(t)}},KO),KO;expressionsPlugin=Expressions;var ExpressionManager=function(){var ob={},Math=BMMath,window=null,document=null;function $bm_isInstanceOfArray(t){return t.constructor===Array||t.constructor===Float32Array}function isNumerable(t,e){return"number"===t||"boolean"===t||"string"===t||e instanceof Number}function $bm_neg(t){var e=typeof t;if("number"===e||"boolean"===e||t instanceof Number)return-t;if($bm_isInstanceOfArray(t)){var r,i=t.length,s=[];for(r=0;r<i;r+=1)s[r]=-t[r];return s}return t.propType?t.v:void 0}var easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function sum(t,e){var r=typeof t,i=typeof e;if("string"===r||"string"===i)return t+e;if(isNumerable(r,t)&&isNumerable(i,e))return t+e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]=t[0]+e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t+e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]+e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}var add=sum;function sub(t,e){var r=typeof t,i=typeof e;if(isNumerable(r,t)&&isNumerable(i,e))return"string"===r&&(t=parseInt(t)),"string"===i&&(e=parseInt(e)),t-e;if($bm_isInstanceOfArray(t)&&isNumerable(i,e))return(t=t.slice(0))[0]=t[0]-e,t;if(isNumerable(r,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t-e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var s=0,a=t.length,n=e.length,o=[];s<a||s<n;)("number"==typeof t[s]||t[s]instanceof Number)&&("number"==typeof e[s]||e[s]instanceof Number)?o[s]=t[s]-e[s]:o[s]=void 0===e[s]?t[s]:t[s]||e[s],s+=1;return o}return 0}function mul(t,e){var r,i,s,a=typeof t,n=typeof e;if(isNumerable(a,t)&&isNumerable(n,e))return t*e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]*e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t*e[i];return r}return 0}function div(t,e){var r,i,s,a=typeof t,n=typeof e;if(isNumerable(a,t)&&isNumerable(n,e))return t/e;if($bm_isInstanceOfArray(t)&&isNumerable(n,e)){for(s=t.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t[i]/e;return r}if(isNumerable(a,t)&&$bm_isInstanceOfArray(e)){for(s=e.length,r=createTypedArray("float32",s),i=0;i<s;i+=1)r[i]=t/e[i];return r}return 0}function mod(t,e){return"string"==typeof t&&(t=parseInt(t)),"string"==typeof e&&(e=parseInt(e)),t%e}var $bm_sum=sum,$bm_sub=sub,$bm_mul=mul,$bm_div=div,$bm_mod=mod;function clamp(t,e,r){if(r<e){var i=r;r=e,e=i}return Math.min(Math.max(t,e),r)}function radiansToDegrees(t){return t/degToRads}var radians_to_degrees=radiansToDegrees;function degreesToRadians(t){return t*degToRads}var degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);e||(e=helperLengthArray);var r,i=Math.min(t.length,e.length),s=0;for(r=0;r<i;r+=1)s+=Math.pow(e[r]-t[r],2);return Math.sqrt(s)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,r,i=t[0],s=t[1],a=t[2],n=Math.max(i,s,a),o=Math.min(i,s,a),h=(n+o)/2;if(n==o)e=r=0;else{var p=n-o;switch(r=.5<h?p/(2-n-o):p/(n+o),n){case i:e=(s-a)/p+(s<a?6:0);break;case s:e=(a-i)/p+2;break;case a:e=(i-s)/p+4}e/=6}return[e,r,h,t[3]]}function hue2rgb(t,e,r){return r<0&&(r+=1),1<r&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function hslToRgb(t){var e,r,i,s=t[0],a=t[1],n=t[2];if(0===a)e=r=i=n;else{var o=n<.5?n*(1+a):n+a-n*a,h=2*n-o;e=hue2rgb(h,o,s+1/3),r=hue2rgb(h,o,s),i=hue2rgb(h,o,s-1/3)}return[e,r,i,t[3]]}function linear(t,e,r,i,s){if(void 0!==i&&void 0!==s||(i=e,s=r,e=0,r=1),r<e){var a=r;r=e,e=a}if(t<=e)return i;if(r<=t)return s;var n=r===e?0:(t-e)/(r-e);if(!i.length)return i+(s-i)*n;var o,h=i.length,p=createTypedArray("float32",h);for(o=0;o<h;o+=1)p[o]=i[o]+(s[o]-i[o])*n;return p}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var r,i=e.length;t||(t=createTypedArray("float32",i));var s=createTypedArray("float32",i),a=BMMath.random();for(r=0;r<i;r+=1)s[r]=t[r]+a*(e[r]-t[r]);return s}return void 0===t&&(t=0),t+BMMath.random()*(e-t)}function createPath(t,e,r,i){var s,a=t.length,n=shape_pool.newElement();n.setPathData(!!i,a);var o,h,p=[0,0];for(s=0;s<a;s+=1)o=e&&e[s]?e[s]:p,h=r&&r[s]?r[s]:p,n.setTripleAt(t[s][0],t[s][1],h[0]+t[s][0],h[1]+t[s][1],o[0]+t[s][0],o[1]+t[s][1],s,!0);return n}function initiateExpression(elem,data,property){var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=-1!==val.indexOf("random"),elemType=elem.data.ty,transform,$bm_transform,content,effect,thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loop_in,loopOut,loop_out,smooth,toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,__expression_functions=[],scoped_bm_rt;if(data.xf){var i,len=data.xf.length;for(i=0;i<len;i+=1)__expression_functions[i]=eval("(function(){ return "+data.xf[i]+"}())")}var expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,active=!this.data||!0!==this.data.hd,wiggle=function(t,e){var r,i,s=this.pv.length?this.pv.length:1,a=createTypedArray("float32",s);var n=Math.floor(5*time);for(i=r=0;r<n;){for(i=0;i<s;i+=1)a[i]+=-e+2*e*BMMath.random();r+=1}var o=5*time,h=o-Math.floor(o),p=createTypedArray("float32",s);if(1<s){for(i=0;i<s;i+=1)p[i]=this.pv[i]+a[i]+(-e+2*e*BMMath.random())*h;return p}return this.pv+a[0]+(-e+2*e*BMMath.random())*h}.bind(this);function loopInDuration(t,e){return loopIn(t,e,!0)}function loopOutDuration(t,e){return loopOut(t,e,!0)}thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty)),this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,text,textIndex,textTotal,selectorValue;function lookAt(t,e){var r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],i=Math.atan2(r[0],Math.sqrt(r[1]*r[1]+r[2]*r[2]))/degToRads;return[-Math.atan2(r[1],r[2])/degToRads,i,0]}function easeOut(t,e,r,i,s){return applyEase(easeOutBez,t,e,r,i,s)}function easeIn(t,e,r,i,s){return applyEase(easeInBez,t,e,r,i,s)}function ease(t,e,r,i,s){return applyEase(easeInOutBez,t,e,r,i,s)}function applyEase(t,e,r,i,s,a){void 0===s?(s=r,a=i):e=(e-r)/(i-r);var n=t(e=1<e?1:e<0?0:e);if($bm_isInstanceOfArray(s)){var o,h=s.length,p=createTypedArray("float32",h);for(o=0;o<h;o+=1)p[o]=(a[o]-s[o])*n+s[o];return p}return(a-s)*n+s}function nearestKey(t){var e,r,i,s=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(r=-1,(t*=elem.comp.globalData.frameRate)<data.k[0].t)r=1,i=data.k[0].t;else{for(e=0;e<s-1;e+=1){if(t===data.k[e].t){r=e+1,i=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){i=t-data.k[e].t>data.k[e+1].t-t?(r=e+2,data.k[e+1].t):(r=e+1,data.k[e].t);break}}-1===r&&(r=e+1,i=data.k[e].t)}else i=r=0;var a={};return a.index=r,a.time=i/elem.comp.globalData.frameRate,a}function key(t){var e,r,i;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate,value:[]};var s=data.k[t].hasOwnProperty("s")?data.k[t].s:data.k[t-1].e;for(i=s.length,r=0;r<i;r+=1)e[r]=s[r],e.value[r]=s[r];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function substring(t,e){return"string"==typeof value?void 0===e?value.substring(t):value.substring(t,e):""}function substr(t,e){return"string"==typeof value?void 0===e?value.substr(t):value.substr(t,e):""}function posterizeTime(t){time=0===t?0:Math.floor(time*t)/t,value=valueAtTime(time)}var index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random()),globalData=elem.globalData;function executeExpression(t){return value=t,_needsRandom&&seedRandom(randSeed),this.frameExpressionId===elem.globalData.frameId&&"textSelector"!==this.propType?value:("textSelector"===this.propType&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),($bm_transform=transform)&&(anchorPoint=transform.anchorPoint)),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),(hasParent=!(!elem.hierarchy||!elem.hierarchy.length))&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,"shape"===scoped_bm_rt.propType&&(scoped_bm_rt=scoped_bm_rt.v),scoped_bm_rt)}return executeExpression}return ob.initiateExpression=initiateExpression,ob}(),expressionHelpers={searchExpressions:function(t,e,r){e.x&&(r.k=!0,r.x=!0,r.initiateExpression=ExpressionManager.initiateExpression,r.effectsSequence.push(r.initiateExpression(t,e,r).bind(r)))},getSpeedAtTime:function(t){var e=this.getValueAtTime(t),r=this.getValueAtTime(t+-.01),i=0;if(e.length){var s;for(s=0;s<e.length;s+=1)i+=Math.pow(r[s]-e[s],2);i=100*Math.sqrt(i)}else i=0;return i},getVelocityAtTime:function(t){if(void 0!==this.vel)return this.vel;var e,r,i=this.getValueAtTime(t),s=this.getValueAtTime(t+-.001);if(i.length)for(e=createTypedArray("float32",i.length),r=0;r<i.length;r+=1)e[r]=(s[r]-i[r])/-.001;else e=(s-i)/-.001;return e},getValueAtTime:function(t){return t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastFrame&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<t?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(t,this._cachingAtTime),this._cachingAtTime.lastFrame=t),this._cachingAtTime.value},getStaticValueAtTime:function(){return this.pv},setGroupProperty:function(t){this.propertyGroup=t}};!function(){function o(t,e,r){if(!this.k||!this.keyframes)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,p=this.keyframes,l=p[p.length-1].t;if(h<=l)return this.pv;if(r?s=l-(i=e?Math.abs(l-elem.comp.globalData.frameRate*e):Math.max(0,l-this.elem.data.ip)):((!e||e>p.length-1)&&(e=p.length-1),i=l-(s=p[p.length-1-e].t)),"pingpong"===t){if(Math.floor((h-s)/i)%2!=0)return this.getValueAtTime((i-(h-s)%i+s)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var f=this.getValueAtTime(s/this.comp.globalData.frameRate,0),m=this.getValueAtTime(l/this.comp.globalData.frameRate,0),c=this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0),d=Math.floor((h-s)/i);if(this.pv.length){for(n=(o=new Array(f.length)).length,a=0;a<n;a+=1)o[a]=(m[a]-f[a])*d+c[a];return o}return(m-f)*d+c}if("continue"===t){var u=this.getValueAtTime(l/this.comp.globalData.frameRate,0),y=this.getValueAtTime((l-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,a=0;a<n;a+=1)o[a]=u[a]+(u[a]-y[a])*((h-l)/this.comp.globalData.frameRate)/5e-4;return o}return u+(h-l)/.001*(u-y)}}return this.getValueAtTime(((h-s)%i+s)/this.comp.globalData.frameRate,0)}function h(t,e,r){if(!this.k)return this.pv;t=t?t.toLowerCase():"";var i,s,a,n,o,h=this.comp.renderedFrame,p=this.keyframes,l=p[0].t;if(l<=h)return this.pv;if(r?s=l+(i=e?Math.abs(elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-l)):((!e||e>p.length-1)&&(e=p.length-1),i=(s=p[e].t)-l),"pingpong"===t){if(Math.floor((l-h)/i)%2==0)return this.getValueAtTime(((l-h)%i+l)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var f=this.getValueAtTime(l/this.comp.globalData.frameRate,0),m=this.getValueAtTime(s/this.comp.globalData.frameRate,0),c=this.getValueAtTime((i-(l-h)%i+l)/this.comp.globalData.frameRate,0),d=Math.floor((l-h)/i)+1;if(this.pv.length){for(n=(o=new Array(f.length)).length,a=0;a<n;a+=1)o[a]=c[a]-(m[a]-f[a])*d;return o}return c-(m-f)*d}if("continue"===t){var u=this.getValueAtTime(l/this.comp.globalData.frameRate,0),y=this.getValueAtTime((l+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(n=(o=new Array(u.length)).length,a=0;a<n;a+=1)o[a]=u[a]+(u[a]-y[a])*(l-h)/.001;return o}return u+(u-y)*(l-h)/.001}}return this.getValueAtTime((i-(l-h)%i+l)/this.comp.globalData.frameRate,0)}function p(t,e){if(!this.k)return this.pv;if(t=.5*(t||.4),(e=Math.floor(e||5))<=1)return this.pv;var r,i,s=this.comp.renderedFrame/this.comp.globalData.frameRate,a=s-t,n=1<e?(s+t-a)/(e-1):1,o=0,h=0;for(r=this.pv.length?createTypedArray("float32",this.pv.length):0;o<e;){if(i=this.getValueAtTime(a+o*n),this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]+=i[h];else r+=i;o+=1}if(this.pv.length)for(h=0;h<this.pv.length;h+=1)r[h]/=e;else r/=e;return r}var s=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(t,e,r){var i=s(t,e,r);return i.dynamicProperties.length?i.getValueAtTime=function(t){console.warn("Transform at time not supported")}.bind(i):i.getValueAtTime=function(t){}.bind(i),i.setGroupProperty=expressionHelpers.setGroupProperty,i};var l=PropertyFactory.getProp;PropertyFactory.getProp=function(t,e,r,i,s){var a=l(t,e,r,i,s);a.kf?a.getValueAtTime=expressionHelpers.getValueAtTime.bind(a):a.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(a),a.setGroupProperty=expressionHelpers.setGroupProperty,a.loopOut=o,a.loopIn=h,a.smooth=p,a.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind(a),a.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind(a),a.numKeys=1===e.a?e.k.length:0,a.propertyIndex=e.ix;var n=0;return 0!==r&&(n=createTypedArray("float32",1===e.a?e.k[0].s.length:e.k.length)),a._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:n},expressionHelpers.searchExpressions(t,e,a),a.k&&s.addDynamicProperty(a),a};var t=ShapePropertyFactory.getConstructorFunction(),e=ShapePropertyFactory.getKeyframedConstructorFunction();function r(){}r.prototype={vertices:function(t,e){this.k&&this.getValue();var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0));var i,s=r._length,a=r[t],n=r.v,o=createSizedArray(s);for(i=0;i<s;i+=1)o[i]="i"===t||"o"===t?[a[i][0]-n[i][0],a[i][1]-n[i][1]]:[a[i][0],a[i][1]];return o},points:function(t){return this.vertices("v",t)},inTangents:function(t){return this.vertices("i",t)},outTangents:function(t){return this.vertices("o",t)},isClosed:function(){return this.v.c},pointOnPath:function(t,e){var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(r));for(var i,s=this._segmentsLength,a=s.lengths,n=s.totalLength*t,o=0,h=a.length,p=0;o<h;){if(p+a[o].addedLength>n){var l=o,f=r.c&&o===h-1?0:o+1,m=(n-p)/a[o].addedLength;i=bez.getPointInSegment(r.v[l],r.v[f],r.o[l],r.i[f],m,a[o]);break}p+=a[o].addedLength,o+=1}return i||(i=r.c?[r.v[0][0],r.v[0][1]]:[r.v[r._length-1][0],r.v[r._length-1][1]]),i},vectorOnPath:function(t,e,r){t=1==t?this.v.c?0:.999:t;var i=this.pointOnPath(t,e),s=this.pointOnPath(t+.001,e),a=s[0]-i[0],n=s[1]-i[1],o=Math.sqrt(Math.pow(a,2)+Math.pow(n,2));return 0===o?[0,0]:"tangent"===r?[a/o,n/o]:[-n/o,a/o]},tangentOnPath:function(t,e){return this.vectorOnPath(t,e,"tangent")},normalOnPath:function(t,e){return this.vectorOnPath(t,e,"normal")},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime},extendPrototype([r],t),extendPrototype([r],e),e.prototype.getValueAtTime=function(t){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shape_pool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),t*=this.elem.globalData.frameRate,(t-=this.offsetTime)!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<t?this._caching.lastIndex:0,this._cachingAtTime.lastTime=t,this.interpolateShape(t,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue},e.prototype.initiateExpression=ExpressionManager.initiateExpression;var n=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,r,i,s){var a=n(t,e,r,i,s);return a.propertyIndex=e.ix,a.lock=!1,3===r?expressionHelpers.searchExpressions(t,e.pt,a):4===r&&expressionHelpers.searchExpressions(t,e.ks,a),a.k&&t.addDynamicProperty(a),a}}(),TextProperty.prototype.getExpressionValue=function(t,e){var r=this.calculateExpression(e);if(t.t===r)return t;var i={};return this.copyData(i,t),i.t=r.toString(),i.__complete=!1,i},TextProperty.prototype.searchProperty=function(){var t=this.searchKeyframes(),e=this.searchExpressions();return this.kf=t||e,this.kf},TextProperty.prototype.searchExpressions=function(){if(this.data.d.x)return this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.addEffect(this.getExpressionValue.bind(this)),!0};var ShapeExpressionInterface=function(){function f(t,e,r){var i,s=[],a=t?t.length:0;for(i=0;i<a;i+=1)"gr"==t[i].ty?s.push(n(t[i],e[i],r)):"fl"==t[i].ty?s.push(o(t[i],e[i],r)):"st"==t[i].ty?s.push(h(t[i],e[i],r)):"tm"==t[i].ty?s.push(p(t[i],e[i],r)):"tr"==t[i].ty||("el"==t[i].ty?s.push(l(t[i],e[i],r)):"sr"==t[i].ty?s.push(m(t[i],e[i],r)):"sh"==t[i].ty?s.push(y(t[i],e[i],r)):"rc"==t[i].ty?s.push(c(t[i],e[i],r)):"rd"==t[i].ty?s.push(d(t[i],e[i],r)):"rp"==t[i].ty&&s.push(u(t[i],e[i],r)));return s}function n(t,e,r){var i=function(t){switch(t){case"ADBE Vectors Group":case"Contents":case 2:return i.content;default:return i.transform}};i.propertyGroup=function(t){return 1===t?i:r(t-1)};var s,a,n,o,h,p=(s=t,a=e,n=i.propertyGroup,(h=function(t){for(var e=0,r=o.length;e<r;){if(o[e]._name===t||o[e].mn===t||o[e].propertyIndex===t||o[e].ix===t||o[e].ind===t)return o[e];e+=1}if("number"==typeof t)return o[t-1]}).propertyGroup=function(t){return 1===t?h:n(t-1)},o=f(s.it,a.it,h.propertyGroup),h.numProperties=o.length,h.propertyIndex=s.cix,h._name=s.nm,h),l=function(e,t,r){function i(t){return 1==t?s:r(--t)}t.transform.mProps.o.setGroupProperty(i),t.transform.mProps.p.setGroupProperty(i),t.transform.mProps.a.setGroupProperty(i),t.transform.mProps.s.setGroupProperty(i),t.transform.mProps.r.setGroupProperty(i),t.transform.mProps.sk&&(t.transform.mProps.sk.setGroupProperty(i),t.transform.mProps.sa.setGroupProperty(i));function s(t){return e.a.ix===t||"Anchor Point"===t?s.anchorPoint:e.o.ix===t||"Opacity"===t?s.opacity:e.p.ix===t||"Position"===t?s.position:e.r.ix===t||"Rotation"===t||"ADBE Vector Rotation"===t?s.rotation:e.s.ix===t||"Scale"===t?s.scale:e.sk&&e.sk.ix===t||"Skew"===t?s.skew:e.sa&&e.sa.ix===t||"Skew Axis"===t?s.skewAxis:void 0}return t.transform.op.setGroupProperty(i),Object.defineProperties(s,{opacity:{get:ExpressionPropertyInterface(t.transform.mProps.o)},position:{get:ExpressionPropertyInterface(t.transform.mProps.p)},anchorPoint:{get:ExpressionPropertyInterface(t.transform.mProps.a)},scale:{get:ExpressionPropertyInterface(t.transform.mProps.s)},rotation:{get:ExpressionPropertyInterface(t.transform.mProps.r)},skew:{get:ExpressionPropertyInterface(t.transform.mProps.sk)},skewAxis:{get:ExpressionPropertyInterface(t.transform.mProps.sa)},_name:{value:e.nm}}),s.ty="tr",s.mn=e.mn,s.propertyGroup=r,s}(t.it[t.it.length-1],e.it[e.it.length-1],i.propertyGroup);return i.content=p,i.transform=l,Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.numProperties=t.np,i.propertyIndex=t.ix,i.nm=t.nm,i.mn=t.mn,i}function o(t,e,r){function i(t){return"Color"===t||"color"===t?i.color:"Opacity"===t||"opacity"===t?i.opacity:void 0}return Object.defineProperties(i,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(r),e.o.setGroupProperty(r),i}function h(t,e,r){function i(t){return 1===t?ob:r(t-1)}function s(t){return 1===t?h:i(t-1)}var a,n,o=t.d?t.d.length:0,h={};for(a=0;a<o;a+=1)n=a,Object.defineProperty(h,t.d[n].nm,{get:ExpressionPropertyInterface(e.d.dataProps[n].p)}),e.d.dataProps[a].p.setGroupProperty(s);function p(t){return"Color"===t||"color"===t?p.color:"Opacity"===t||"opacity"===t?p.opacity:"Stroke Width"===t||"stroke width"===t?p.strokeWidth:void 0}return Object.defineProperties(p,{color:{get:ExpressionPropertyInterface(e.c)},opacity:{get:ExpressionPropertyInterface(e.o)},strokeWidth:{get:ExpressionPropertyInterface(e.w)},dash:{get:function(){return h}},_name:{value:t.nm},mn:{value:t.mn}}),e.c.setGroupProperty(i),e.o.setGroupProperty(i),e.w.setGroupProperty(i),p}function p(e,t,r){function i(t){return 1==t?s:r(--t)}function s(t){return t===e.e.ix||"End"===t||"end"===t?s.end:t===e.s.ix?s.start:t===e.o.ix?s.offset:void 0}return s.propertyIndex=e.ix,t.s.setGroupProperty(i),t.e.setGroupProperty(i),t.o.setGroupProperty(i),s.propertyIndex=e.ix,s.propertyGroup=r,Object.defineProperties(s,{start:{get:ExpressionPropertyInterface(t.s)},end:{get:ExpressionPropertyInterface(t.e)},offset:{get:ExpressionPropertyInterface(t.o)},_name:{value:e.nm}}),s.mn=e.mn,s}function l(e,t,r){function i(t){return 1==t?a:r(--t)}a.propertyIndex=e.ix;var s="tm"===t.sh.ty?t.sh.prop:t.sh;function a(t){return e.p.ix===t?a.position:e.s.ix===t?a.size:void 0}return s.s.setGroupProperty(i),s.p.setGroupProperty(i),Object.defineProperties(a,{size:{get:ExpressionPropertyInterface(s.s)},position:{get:ExpressionPropertyInterface(s.p)},_name:{value:e.nm}}),a.mn=e.mn,a}function m(e,t,r){function i(t){return 1==t?a:r(--t)}var s="tm"===t.sh.ty?t.sh.prop:t.sh;function a(t){return e.p.ix===t?a.position:e.r.ix===t?a.rotation:e.pt.ix===t?a.points:e.or.ix===t||"ADBE Vector Star Outer Radius"===t?a.outerRadius:e.os.ix===t?a.outerRoundness:!e.ir||e.ir.ix!==t&&"ADBE Vector Star Inner Radius"!==t?e.is&&e.is.ix===t?a.innerRoundness:void 0:a.innerRadius}return a.propertyIndex=e.ix,s.or.setGroupProperty(i),s.os.setGroupProperty(i),s.pt.setGroupProperty(i),s.p.setGroupProperty(i),s.r.setGroupProperty(i),e.ir&&(s.ir.setGroupProperty(i),s.is.setGroupProperty(i)),Object.defineProperties(a,{position:{get:ExpressionPropertyInterface(s.p)},rotation:{get:ExpressionPropertyInterface(s.r)},points:{get:ExpressionPropertyInterface(s.pt)},outerRadius:{get:ExpressionPropertyInterface(s.or)},outerRoundness:{get:ExpressionPropertyInterface(s.os)},innerRadius:{get:ExpressionPropertyInterface(s.ir)},innerRoundness:{get:ExpressionPropertyInterface(s.is)},_name:{value:e.nm}}),a.mn=e.mn,a}function c(e,t,r){function i(t){return 1==t?a:r(--t)}var s="tm"===t.sh.ty?t.sh.prop:t.sh;function a(t){return e.p.ix===t?a.position:e.r.ix===t?a.roundness:e.s.ix===t||"Size"===t||"ADBE Vector Rect Size"===t?a.size:void 0}return a.propertyIndex=e.ix,s.p.setGroupProperty(i),s.s.setGroupProperty(i),s.r.setGroupProperty(i),Object.defineProperties(a,{position:{get:ExpressionPropertyInterface(s.p)},roundness:{get:ExpressionPropertyInterface(s.r)},size:{get:ExpressionPropertyInterface(s.s)},_name:{value:e.nm}}),a.mn=e.mn,a}function d(e,t,r){var i=t;function s(t){if(e.r.ix===t||"Round Corners 1"===t)return s.radius}return s.propertyIndex=e.ix,i.rd.setGroupProperty(function(t){return 1==t?s:r(--t)}),Object.defineProperties(s,{radius:{get:ExpressionPropertyInterface(i.rd)},_name:{value:e.nm}}),s.mn=e.mn,s}function u(e,t,r){function i(t){return 1==t?a:r(--t)}var s=t;function a(t){return e.c.ix===t||"Copies"===t?a.copies:e.o.ix===t||"Offset"===t?a.offset:void 0}return a.propertyIndex=e.ix,s.c.setGroupProperty(i),s.o.setGroupProperty(i),Object.defineProperties(a,{copies:{get:ExpressionPropertyInterface(s.c)},offset:{get:ExpressionPropertyInterface(s.o)},_name:{value:e.nm}}),a.mn=e.mn,a}function y(t,e,r){var i=e.sh;function s(t){if("Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t)return s.path}return i.setGroupProperty(function(t){return 1==t?s:r(--t)}),Object.defineProperties(s,{path:{get:function(){return i.k&&i.getValue(),i}},shape:{get:function(){return i.k&&i.getValue(),i}},_name:{value:t.nm},ix:{value:t.ix},propertyIndex:{value:t.ix},mn:{value:t.mn}}),s}return function(t,e,r){var i;function s(t){if("number"==typeof t)return i[t-1];for(var e=0,r=i.length;e<r;){if(i[e]._name===t)return i[e];e+=1}}return s.propertyGroup=r,i=f(t,e,s),s.numProperties=i.length,s}}(),TextExpressionInterface=function(e){var r;function t(){}return Object.defineProperty(t,"sourceText",{get:function(){e.textProperty.getValue();var t=e.textProperty.currentData.t;return void 0!==t&&(e.textProperty.currentData.t=void 0,(r=new String(t)).value=t||new String(t)),r}}),t},LayerExpressionInterface=function(){function s(t,e){var r=new Matrix;if(r.reset(),this._elem.finalTransform.mProp.applyToMatrix(r),this._elem.hierarchy&&this._elem.hierarchy.length){var i,s=this._elem.hierarchy.length;for(i=0;i<s;i+=1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);return r.applyToPointArray(t[0],t[1],t[2]||0)}return r.applyToPointArray(t[0],t[1],t[2]||0)}function a(t,e){var r=new Matrix;if(r.reset(),this._elem.finalTransform.mProp.applyToMatrix(r),this._elem.hierarchy&&this._elem.hierarchy.length){var i,s=this._elem.hierarchy.length;for(i=0;i<s;i+=1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);return r.inversePoint(t)}return r.inversePoint(t)}function n(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);return e.inversePoint(t)}return e.inversePoint(t)}function o(){return[1,1,1,1]}return function(e){var r;function i(t){switch(t){case"ADBE Root Vectors Group":case"Contents":case 2:return i.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return r;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return i.effect}}i.toWorld=s,i.fromWorld=a,i.toComp=s,i.fromComp=n,i.sampleImage=o,i.sourceRectAtTime=e.sourceRectAtTime.bind(e);var t=getDescriptor(r=TransformExpressionInterface((i._elem=e).finalTransform.mProp),"anchorPoint");return Object.defineProperties(i,{hasParent:{get:function(){return e.hierarchy.length}},parent:{get:function(){return e.hierarchy[0].layerInterface}},rotation:getDescriptor(r,"rotation"),scale:getDescriptor(r,"scale"),position:getDescriptor(r,"position"),opacity:getDescriptor(r,"opacity"),anchorPoint:t,anchor_point:t,transform:{get:function(){return r}},active:{get:function(){return e.isInRange}}}),i.startTime=e.data.st,i.index=e.data.ind,i.source=e.data.refId,i.height=0===e.data.ty?e.data.h:100,i.width=0===e.data.ty?e.data.w:100,i.inPoint=e.data.ip/e.comp.globalData.frameRate,i.outPoint=e.data.op/e.comp.globalData.frameRate,i._name=e.data.nm,i.registerMaskInterface=function(t){i.mask=new MaskManagerInterface(t,e)},i.registerEffectsInterface=function(t){i.effect=t},i}}(),CompExpressionInterface=function(i){function t(t){for(var e=0,r=i.layers.length;e<r;){if(i.layers[e].nm===t||i.layers[e].ind===t)return i.elements[e].layerInterface;e+=1}return null}return Object.defineProperty(t,"_name",{value:i.data.nm}),(t.layer=t).pixelAspect=1,t.height=i.data.h||i.globalData.compSize.h,t.width=i.data.w||i.globalData.compSize.w,t.pixelAspect=1,t.frameDuration=1/i.globalData.frameRate,t.displayStartTime=0,t.numLayers=i.layers.length,t},TransformExpressionInterface=function(t){function e(t){switch(t){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"ADBE Rotate X":return e.xRotation;case"ADBE Rotate Y":return e.yRotation;case"position":case"Position":case"ADBE Position":case 2:return e.position;case"ADBE Position_0":return e.xPosition;case"ADBE Position_1":return e.yPosition;case"ADBE Position_2":return e.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity}}if(Object.defineProperty(e,"rotation",{get:ExpressionPropertyInterface(t.r||t.rz)}),Object.defineProperty(e,"zRotation",{get:ExpressionPropertyInterface(t.rz||t.r)}),Object.defineProperty(e,"xRotation",{get:ExpressionPropertyInterface(t.rx)}),Object.defineProperty(e,"yRotation",{get:ExpressionPropertyInterface(t.ry)}),Object.defineProperty(e,"scale",{get:ExpressionPropertyInterface(t.s)}),t.p)var r=ExpressionPropertyInterface(t.p);return Object.defineProperty(e,"position",{get:function(){return t.p?r():[t.px.v,t.py.v,t.pz?t.pz.v:0]}}),Object.defineProperty(e,"xPosition",{get:ExpressionPropertyInterface(t.px)}),Object.defineProperty(e,"yPosition",{get:ExpressionPropertyInterface(t.py)}),Object.defineProperty(e,"zPosition",{get:ExpressionPropertyInterface(t.pz)}),Object.defineProperty(e,"anchorPoint",{get:ExpressionPropertyInterface(t.a)}),Object.defineProperty(e,"opacity",{get:ExpressionPropertyInterface(t.o)}),Object.defineProperty(e,"skew",{get:ExpressionPropertyInterface(t.sk)}),Object.defineProperty(e,"skewAxis",{get:ExpressionPropertyInterface(t.sa)}),Object.defineProperty(e,"orientation",{get:ExpressionPropertyInterface(t.or)}),e},ProjectInterface=function(){function e(t){this.compositions.push(t)}return function(){function t(t){for(var e=0,r=this.compositions.length;e<r;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].data.xt&&this.compositions[e].prepareFrame(this.currentFrame),this.compositions[e].compInterface;e+=1}}return t.compositions=[],t.currentFrame=0,t.registerComposition=e,t}}(),EffectsExpressionInterface=function(){function p(s,t,e,r){var i,a=[],n=s.ef.length;for(i=0;i<n;i+=1)5===s.ef[i].ty?a.push(p(s.ef[i],t.effectElements[i],t.effectElements[i].propertyGroup,r)):a.push(l(t.effectElements[i],s.ef[i].ty,r,o));function o(t){return 1===t?h:e(t-1)}var h=function(t){for(var e=s.ef,r=0,i=e.length;r<i;){if(t===e[r].nm||t===e[r].mn||t===e[r].ix)return 5===e[r].ty?a[r]:a[r]();r+=1}return a[0]()};return h.propertyGroup=o,"ADBE Color Control"===s.mn&&Object.defineProperty(h,"color",{get:function(){return a[0]()}}),Object.defineProperty(h,"numProperties",{get:function(){return s.np}}),h.active=h.enabled=0!==s.en,h}function l(t,e,r,i){var s=ExpressionPropertyInterface(t.p);return t.p.setGroupProperty&&t.p.setGroupProperty(i),function(){return 10===e?r.comp.compInterface(t.p.v):s()}}return{createEffectsInterface:function(s,t){if(s.effectsManager){var e,a=[],r=s.data.ef,i=s.effectsManager.effectElements.length;for(e=0;e<i;e+=1)a.push(p(r[e],s.effectsManager.effectElements[e],t,s));return function(t){for(var e=s.data.ef||[],r=0,i=e.length;r<i;){if(t===e[r].nm||t===e[r].mn||t===e[r].ix)return a[r];r+=1}}}}}}(),MaskManagerInterface=function(){function a(t,e){this._mask=t,this._data=e}Object.defineProperty(a.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}}),Object.defineProperty(a.prototype,"maskOpacity",{get:function(){return this._mask.op.k&&this._mask.op.getValue(),100*this._mask.op.v}});return function(e,t){var r,i=createSizedArray(e.viewData.length),s=e.viewData.length;for(r=0;r<s;r+=1)i[r]=new a(e.viewData[r],e.masksProperties[r]);return function(t){for(r=0;r<s;){if(e.masksProperties[r].nm===t)return i[r];r+=1}}}}(),ExpressionPropertyInterface=function(){var s={pv:0,v:0,mult:1},n={pv:[0,0,0],v:[0,0,0],mult:1};function o(i,s,a){Object.defineProperty(i,"velocity",{get:function(){return s.getVelocityAtTime(s.comp.currentFrame)}}),i.numKeys=s.keyframes?s.keyframes.length:0,i.key=function(t){if(i.numKeys){var e="";e="s"in s.keyframes[t-1]?s.keyframes[t-1].s:"e"in s.keyframes[t-2]?s.keyframes[t-2].e:s.keyframes[t-2].s;var r="unidimensional"===a?new Number(e):Object.assign({},e);return r.time=s.keyframes[t-1].t/s.elem.comp.globalData.frameRate,r}return 0},i.valueAtTime=s.getValueAtTime,i.speedAtTime=s.getSpeedAtTime,i.velocityAtTime=s.getVelocityAtTime,i.propertyGroup=s.propertyGroup}function e(){return s}return function(t){return t?"unidimensional"===t.propType?function(t){t&&"pv"in t||(t=s);var e=1/t.mult,r=t.pv*e,i=new Number(r);return i.value=r,o(i,t,"unidimensional"),function(){return t.k&&t.getValue(),r=t.v*e,i.value!==r&&((i=new Number(r)).value=r,o(i,t,"unidimensional")),i}}(t):function(e){e&&"pv"in e||(e=n);var r=1/e.mult,i=e.pv.length,s=createTypedArray("float32",i),a=createTypedArray("float32",i);return s.value=a,o(s,e,"multidimensional"),function(){e.k&&e.getValue();for(var t=0;t<i;t+=1)s[t]=a[t]=e.v[t]*r;return s}}(t):e}}(),tZ,uZ;function SliderEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function AngleEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function ColorEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function PointEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function LayerIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function MaskIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function CheckboxEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function NoValueEffect(){this.p={}}function EffectsManager(){}function EffectsManager(t,e){var r=t.ef||[];this.effectElements=[];var i,s,a=r.length;for(i=0;i<a;i++)s=new GroupEffect(r[i],e),this.effectElements.push(s)}function GroupEffect(t,e){this.init(t,e)}tZ=function(){function r(t,e){return this.textIndex=t+1,this.textTotal=e,this.v=this.getValue()*this.mult,this.v}return function(t,e){this.pv=1,this.comp=t.comp,this.elem=t,this.mult=.01,this.propType="textSelector",this.textTotal=e.totalChars,this.selectorValue=100,this.lastValue=[1,1,1],this.k=!0,this.x=!0,this.getValue=ExpressionManager.initiateExpression.bind(this)(t,e,this),this.getMult=r,this.getVelocityAtTime=expressionHelpers.getVelocityAtTime,this.kf?this.getValueAtTime=expressionHelpers.getValueAtTime.bind(this):this.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(this),this.setGroupProperty=expressionHelpers.setGroupProperty}}(),uZ=TextSelectorProp.getTextSelectorProp,TextSelectorProp.getTextSelectorProp=function(t,e,r){return 1===e.t?new tZ(t,e,r):uZ(t,e,r)},extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties,GroupEffect.prototype.init=function(t,e){this.data=t,this.effectElements=[],this.initDynamicPropertyContainer(e);var r,i,s=this.data.ef.length,a=this.data.ef;for(r=0;r<s;r+=1){switch(i=null,a[r].ty){case 0:i=new SliderEffect(a[r],e,this);break;case 1:i=new AngleEffect(a[r],e,this);break;case 2:i=new ColorEffect(a[r],e,this);break;case 3:i=new PointEffect(a[r],e,this);break;case 4:case 7:i=new CheckboxEffect(a[r],e,this);break;case 10:i=new LayerIndexEffect(a[r],e,this);break;case 11:i=new MaskIndexEffect(a[r],e,this);break;case 5:i=new EffectsManager(a[r],e,this);break;default:i=new NoValueEffect(a[r],e,this)}i&&this.effectElements.push(i)}};var lottie={},_isFrozen=!1;function setLocationHref(t){locationHref=t}function searchAnimations(){!0===standalone?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function setSubframeRendering(t){subframeEnabled=t}function loadAnimation(t){return!0===standalone&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":defaultCurveSegments=200;break;case"medium":defaultCurveSegments=50;break;case"low":defaultCurveSegments=10}else!isNaN(t)&&1<t&&(defaultCurveSegments=t);roundValues(!(50<=defaultCurveSegments))}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(t,e){"expressions"===t&&(expressionsPlugin=e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),r=0;r<e.length;r++){var i=e[r].split("=");if(decodeURIComponent(i[0])==t)return decodeURIComponent(i[1])}}lottie.play=animationManager.play,lottie.pause=animationManager.pause,lottie.setLocationHref=setLocationHref,lottie.togglePause=animationManager.togglePause,lottie.setSpeed=animationManager.setSpeed,lottie.setDirection=animationManager.setDirection,lottie.stop=animationManager.stop,lottie.searchAnimations=searchAnimations,lottie.registerAnimation=animationManager.registerAnimation,lottie.loadAnimation=loadAnimation,lottie.setSubframeRendering=setSubframeRendering,lottie.resize=animationManager.resize,lottie.goToAndStop=animationManager.goToAndStop,lottie.destroy=animationManager.destroy,lottie.setQuality=setQuality,lottie.inBrowser=inBrowser,lottie.installPlugin=installPlugin,lottie.freeze=animationManager.freeze,lottie.unfreeze=animationManager.unfreeze,lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottie.__getFactory=getFactory,lottie.version="5.6.4";var standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="";if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""},queryString=myScript.src.replace(/^[^\?]+\??/,"");renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);
return lottie;
}));

/**
 * Particleground
 *
 * @author Jonathan Nicol - @mrjnicol
 * @version 1.0.1
 * @description Creates a canvas based particle system background
 *
 * Inspired by:
 * http://requestlab.fr/
 * http://disruptivebydesign.com/
 * 
 * @license The MIT License (MIT)
 * 
 * Copyright (c) 2014 Jonathan Nicol - @mrjnicol
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
!function(a){function b(b,d){function e(){if(w){$canvas=a('<canvas class="pg-canvas"></canvas>'),v.prepend($canvas),p=$canvas[0],q=p.getContext("2d"),f();for(var b=Math.round(p.width*p.height/d.density),c=0;b>c;c++){var e=new l;e.setStackPos(c),x.push(e)}a(window).on("resize",function(){h()}),a(document).on("mousemove",function(a){y=a.pageX,z=a.pageY}),B&&!A&&window.addEventListener("deviceorientation",function(){D=Math.min(Math.max(-event.beta,-30),30),C=Math.min(Math.max(-event.gamma,-30),30)},!0),g(),o("onInit")}}function f(){p.width=v.width(),p.height=v.height(),q.fillStyle=d.dotColor,q.strokeStyle=d.lineColor,q.lineWidth=d.lineWidth}function g(){if(w){s=a(window).width(),t=a(window).height(),q.clearRect(0,0,p.width,p.height);for(var b=0;b<x.length;b++)x[b].updatePosition();for(var b=0;b<x.length;b++)x[b].draw();E||(r=requestAnimationFrame(g))}}function h(){for(f(),i=x.length-1;i>=0;i--)(x[i].position.x>v.width()||x[i].position.y>v.height())&&x.splice(i,1);var a=Math.round(p.width*p.height/d.density);if(a>x.length)for(;a>x.length;){var b=new l;x.push(b)}else a<x.length&&x.splice(a);for(i=x.length-1;i>=0;i--)x[i].setStackPos(i)}function j(){E=!0}function k(){E=!1,g()}function l(){switch(this.stackPos,this.active=!0,this.layer=Math.ceil(3*Math.random()),this.parallaxOffsetX=0,this.parallaxOffsetY=0,this.position={x:Math.ceil(Math.random()*p.width),y:Math.ceil(Math.random()*p.height)},this.speed={},d.directionX){case"left":this.speed.x=+(-d.maxSpeedX+Math.random()*d.maxSpeedX-d.minSpeedX).toFixed(2);break;case"right":this.speed.x=+(Math.random()*d.maxSpeedX+d.minSpeedX).toFixed(2);break;default:this.speed.x=+(-d.maxSpeedX/2+Math.random()*d.maxSpeedX).toFixed(2),this.speed.x+=this.speed.x>0?d.minSpeedX:-d.minSpeedX}switch(d.directionY){case"up":this.speed.y=+(-d.maxSpeedY+Math.random()*d.maxSpeedY-d.minSpeedY).toFixed(2);break;case"down":this.speed.y=+(Math.random()*d.maxSpeedY+d.minSpeedY).toFixed(2);break;default:this.speed.y=+(-d.maxSpeedY/2+Math.random()*d.maxSpeedY).toFixed(2),this.speed.x+=this.speed.y>0?d.minSpeedY:-d.minSpeedY}}function m(a,b){return b?void(d[a]=b):d[a]}function n(){v.find(".pg-canvas").remove(),o("onDestroy"),v.removeData("plugin_"+c)}function o(a){void 0!==d[a]&&d[a].call(u)}var p,q,r,s,t,u=b,v=a(b),w=!!document.createElement("canvas").getContext,x=[],y=0,z=0,A=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),B=!!window.DeviceOrientationEvent,C=0,D=0,E=!1;return d=a.extend({},a.fn[c].defaults,d),l.prototype.draw=function(){q.beginPath(),q.arc(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY,d.particleRadius/2,0,2*Math.PI,!0),q.closePath(),q.fill(),q.beginPath();for(var a=x.length-1;a>this.stackPos;a--){var b=x[a],c=this.position.x-b.position.x,e=this.position.y-b.position.y,f=Math.sqrt(c*c+e*e).toFixed(2);f<d.proximity&&(q.moveTo(this.position.x+this.parallaxOffsetX,this.position.y+this.parallaxOffsetY),d.curvedLines?q.quadraticCurveTo(Math.max(b.position.x,b.position.x),Math.min(b.position.y,b.position.y),b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY):q.lineTo(b.position.x+b.parallaxOffsetX,b.position.y+b.parallaxOffsetY))}q.stroke(),q.closePath()},l.prototype.updatePosition=function(){if(d.parallax){if(B&&!A){var a=(s-0)/60;pointerX=(C- -30)*a+0;var b=(t-0)/60;pointerY=(D- -30)*b+0}else pointerX=y,pointerY=z;this.parallaxTargX=(pointerX-s/2)/(d.parallaxMultiplier*this.layer),this.parallaxOffsetX+=(this.parallaxTargX-this.parallaxOffsetX)/10,this.parallaxTargY=(pointerY-t/2)/(d.parallaxMultiplier*this.layer),this.parallaxOffsetY+=(this.parallaxTargY-this.parallaxOffsetY)/10}switch(d.directionX){case"left":this.position.x+this.speed.x+this.parallaxOffsetX<0&&(this.position.x=v.width()-this.parallaxOffsetX);break;case"right":this.position.x+this.speed.x+this.parallaxOffsetX>v.width()&&(this.position.x=0-this.parallaxOffsetX);break;default:(this.position.x+this.speed.x+this.parallaxOffsetX>v.width()||this.position.x+this.speed.x+this.parallaxOffsetX<0)&&(this.speed.x=-this.speed.x)}switch(d.directionY){case"up":this.position.y+this.speed.y+this.parallaxOffsetY<0&&(this.position.y=v.height()-this.parallaxOffsetY);break;case"down":this.position.y+this.speed.y+this.parallaxOffsetY>v.height()&&(this.position.y=0-this.parallaxOffsetY);break;default:(this.position.y+this.speed.y+this.parallaxOffsetY>v.height()||this.position.y+this.speed.y+this.parallaxOffsetY<0)&&(this.speed.y=-this.speed.y)}this.position.x+=this.speed.x,this.position.y+=this.speed.y},l.prototype.setStackPos=function(a){this.stackPos=a},e(),{option:m,destroy:n,start:k,pause:j}}var c="particleground";a.fn[c]=function(d){if("string"==typeof arguments[0]){var e,f=arguments[0],g=Array.prototype.slice.call(arguments,1);return this.each(function(){a.data(this,"plugin_"+c)&&"function"==typeof a.data(this,"plugin_"+c)[f]&&(e=a.data(this,"plugin_"+c)[f].apply(this,g))}),void 0!==e?e:this}return"object"!=typeof d&&d?void 0:this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(this,d))})},a.fn[c].defaults={minSpeedX:.1,maxSpeedX:.7,minSpeedY:.1,maxSpeedY:.7,directionX:"center",directionY:"center",density:1e4,dotColor:"#666666",lineColor:"#666666",particleRadius:7,lineWidth:1,curvedLines:!1,proximity:100,parallax:!0,parallaxMultiplier:5,onInit:function(){},onDestroy:function(){}}}(jQuery),/**
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license: MIT license
 */
function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}();
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/*!
 * @license twgl.js 4.17.0 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/greggman/twgl.js for details
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.twgl=t():e.twgl=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){"use strict";t.__esModule=!0,t.copyExistingProperties=function(e,t){Object.keys(t).forEach((function(r){t.hasOwnProperty(r)&&e.hasOwnProperty(r)&&(t[r]=e[r])}))},t.copyNamedProperties=function(e,t,r){e.forEach((function(e){var n=t[e];void 0!==n&&(r[e]=n)}))},t.error=function(){var e;(e=console).error.apply(e,arguments)},t.warn=function(){var e;(e=console).warn.apply(e,arguments)},t.isBuffer=function(e,t){return"undefined"!=typeof WebGLBuffer&&t instanceof WebGLBuffer},t.isRenderbuffer=function(e,t){return"undefined"!=typeof WebGLRenderbuffer&&t instanceof WebGLRenderbuffer},t.isShader=function(e,t){return"undefined"!=typeof WebGLShader&&t instanceof WebGLShader},t.isTexture=function(e,t){return"undefined"!=typeof WebGLTexture&&t instanceof WebGLTexture},t.isSampler=function(e,t){return"undefined"!=typeof WebGLSampler&&t instanceof WebGLSampler}},function(e,t,r){"use strict";t.__esModule=!0,t.getGLTypeForTypedArray=function(e){if(e instanceof Int8Array)return n;if(e instanceof Uint8Array)return o;if(e instanceof Uint8ClampedArray)return o;if(e instanceof Int16Array)return u;if(e instanceof Uint16Array)return i;if(e instanceof Int32Array)return a;if(e instanceof Uint32Array)return f;if(e instanceof Float32Array)return c;throw new Error("unsupported typed array type")},t.getGLTypeForTypedArrayType=function(e){if(e===Int8Array)return n;if(e===Uint8Array)return o;if(e===Uint8ClampedArray)return o;if(e===Int16Array)return u;if(e===Uint16Array)return i;if(e===Int32Array)return a;if(e===Uint32Array)return f;if(e===Float32Array)return c;throw new Error("unsupported typed array type")},t.getTypedArrayTypeForGLType=function(e){var t=l[e];if(!t)throw new Error("unknown gl type");return t},t.isArrayBuffer=void 0;var n=5120,o=5121,u=5122,i=5123,a=5124,f=5125,c=5126,l={},s=l;s[n]=Int8Array,s[5121]=Uint8Array,s[5122]=Int16Array,s[5123]=Uint16Array,s[a]=Int32Array,s[5125]=Uint32Array,s[5126]=Float32Array,s[32819]=Uint16Array,s[32820]=Uint16Array,s[33635]=Uint16Array,s[5131]=Uint16Array,s[33640]=Uint32Array,s[35899]=Uint32Array,s[35902]=Uint32Array,s[36269]=Uint32Array,s[34042]=Uint32Array;var y="undefined"!=typeof SharedArrayBuffer?function(e){return e&&e.buffer&&(e.buffer instanceof ArrayBuffer||e.buffer instanceof SharedArrayBuffer)}:function(e){return e&&e.buffer&&e.buffer instanceof ArrayBuffer};t.isArrayBuffer=y},function(e,t,r){"use strict";t.__esModule=!0,t.add=function(e,t,r){return(r=r||new n(3))[0]=e[0]+t[0],r[1]=e[1]+t[1],r[2]=e[2]+t[2],r},t.copy=function(e,t){return(t=t||new n(3))[0]=e[0],t[1]=e[1],t[2]=e[2],t},t.create=function(e,t,r){var o=new n(3);e&&(o[0]=e);t&&(o[1]=t);r&&(o[2]=r);return o},t.cross=function(e,t,r){r=r||new n(3);var o=e[2]*t[0]-e[0]*t[2],u=e[0]*t[1]-e[1]*t[0];return r[0]=e[1]*t[2]-e[2]*t[1],r[1]=o,r[2]=u,r},t.distance=function(e,t){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return Math.sqrt(r*r+n*n+o*o)},t.distanceSq=function(e,t){var r=e[0]-t[0],n=e[1]-t[1],o=e[2]-t[2];return r*r+n*n+o*o},t.divide=function(e,t,r){return(r=r||new n(3))[0]=e[0]/t[0],r[1]=e[1]/t[1],r[2]=e[2]/t[2],r},t.divScalar=function(e,t,r){return(r=r||new n(3))[0]=e[0]/t,r[1]=e[1]/t,r[2]=e[2]/t,r},t.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]},t.lerp=function(e,t,r,o){return(o=o||new n(3))[0]=e[0]+r*(t[0]-e[0]),o[1]=e[1]+r*(t[1]-e[1]),o[2]=e[2]+r*(t[2]-e[2]),o},t.lerpV=function(e,t,r,o){return(o=o||new n(3))[0]=e[0]+r[0]*(t[0]-e[0]),o[1]=e[1]+r[1]*(t[1]-e[1]),o[2]=e[2]+r[2]*(t[2]-e[2]),o},t.length=function(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])},t.lengthSq=function(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]},t.max=function(e,t,r){return(r=r||new n(3))[0]=Math.max(e[0],t[0]),r[1]=Math.max(e[1],t[1]),r[2]=Math.max(e[2],t[2]),r},t.min=function(e,t,r){return(r=r||new n(3))[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.min(e[2],t[2]),r},t.mulScalar=function(e,t,r){return(r=r||new n(3))[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r},t.multiply=function(e,t,r){return(r=r||new n(3))[0]=e[0]*t[0],r[1]=e[1]*t[1],r[2]=e[2]*t[2],r},t.negate=function(e,t){return(t=t||new n(3))[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t},t.normalize=function(e,t){t=t||new n(3);var r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],o=Math.sqrt(r);o>1e-5?(t[0]=e[0]/o,t[1]=e[1]/o,t[2]=e[2]/o):(t[0]=0,t[1]=0,t[2]=0);return t},t.setDefaultType=function(e){var t=n;return n=e,t},t.subtract=function(e,t,r){return(r=r||new n(3))[0]=e[0]-t[0],r[1]=e[1]-t[1],r[2]=e[2]-t[2],r};var n=Float32Array},function(e,t,r){"use strict";t.__esModule=!0,t.isWebGL1=function(e){return!e.texStorage2D},t.isWebGL2=function(e){return!!e.texStorage2D},t.glEnumToString=void 0;var n,o,u=(n={},o={},function(e,t){return function(e){var t=e.constructor.name;if(!n[t]){for(var r in e)if("number"==typeof e[r]){var u=o[e[r]];o[e[r]]=u?"".concat(u," | ").concat(r):r}n[t]=!0}}(e),o[t]||"0x"+t.toString(16)});t.glEnumToString=u},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.__esModule=!0,t.createAttributeSetters=oe,t.createProgram=H,t.createProgramFromScripts=function(e,t,r,n,o){for(var u=G(r,n,o),i=[],a=0;a<t.length;++a){var f=q(e,t[a],e[X[a]],u.errorCallback);if(!f)return null;i.push(f)}return H(e,i,u)},t.createProgramFromSources=V,t.createProgramInfo=function(e,t,r,n,o){var u=G(r,n,o),i=!0;if(t=t.map((function(e){if(e.indexOf("\n")<0){var t=y(e);t?e=t.text:(u.errorCallback("no element with id: "+e),i=!1)}return e})),!i)return null;var a=V(e,t,u);if(!a)return null;return ie(e,a)},t.createProgramInfoFromProgram=ie,t.createUniformSetters=$,t.createUniformBlockSpecFromProgram=J,t.createUniformBlockInfoFromProgram=ee,t.createUniformBlockInfo=function(e,t,r){return ee(e,t.program,t.uniformBlockSpec,r)},t.createTransformFeedback=function(e,t,r){var n=e.createTransformFeedback();return e.bindTransformFeedback(36386,n),e.useProgram(t.program),Z(e,t,r),e.bindTransformFeedback(36386,null),n},t.createTransformFeedbackInfo=K,t.bindTransformFeedbackInfo=Z,t.setAttributes=ue,t.setBuffersAndAttributes=function(e,t,r){r.vertexArrayObject?e.bindVertexArray(r.vertexArrayObject):(ue(t.attribSetters||t,r.attribs),r.indices&&e.bindBuffer(34963,r.indices))},t.setUniforms=re,t.setUniformBlock=function(e,t,r){te(e,t,r)&&e.bufferData(m,r.array,35048)},t.setBlockUniforms=function(e,t){var r=e.uniforms;for(var n in t){var o=r[n];if(o){var u=t[n];u.length?o.set(u):o[0]=u}}},t.bindUniformBlock=te,t.setUniformsAndBindTextures=void 0;var o=a(r(3)),u=a(r(0));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function f(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=u.error,s=u.warn;function y(e){return"undefined"!=typeof document&&document.getElementById?document.getElementById(e):null}var v=33984,b=34962,m=35345,p=5126,d=5124,x=5125,w=3553,h=34067,F=32879,E=35866,A={};function j(e,t){return A[t].bindPoint}function O(e,t){return function(r){e.uniform1i(t,r)}}function _(e,t){return function(r){e.uniform1iv(t,r)}}function S(e,t){return function(r){e.uniform2iv(t,r)}}function M(e,t){return function(r){e.uniform3iv(t,r)}}function R(e,t){return function(r){e.uniform4iv(t,r)}}function P(e,t,r,n){var i=j(0,t);return o.isWebGL2(e)?function(t){var o,a;u.isTexture(e,t)?(o=t,a=null):(o=t.texture,a=t.sampler),e.uniform1i(n,r),e.activeTexture(v+r),e.bindTexture(i,o),e.bindSampler(r,a)}:function(t){e.uniform1i(n,r),e.activeTexture(v+r),e.bindTexture(i,t)}}function T(e,t,r,n,i){for(var a=j(0,t),f=new Int32Array(i),c=0;c<i;++c)f[c]=r+c;return o.isWebGL2(e)?function(t){e.uniform1iv(n,f),t.forEach((function(t,n){var o,i;e.activeTexture(v+f[n]),u.isTexture(e,t)?(o=t,i=null):(o=t.texture,i=t.sampler),e.bindSampler(r,i),e.bindTexture(a,o)}))}:function(t){e.uniform1iv(n,f),t.forEach((function(t,r){e.activeTexture(v+f[r]),e.bindTexture(a,t)}))}}function g(e,t){return function(r){if(r.value)switch(e.disableVertexAttribArray(t),r.value.length){case 4:e.vertexAttrib4fv(t,r.value);break;case 3:e.vertexAttrib3fv(t,r.value);break;case 2:e.vertexAttrib2fv(t,r.value);break;case 1:e.vertexAttrib1fv(t,r.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else e.bindBuffer(b,r.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,r.numComponents||r.size,r.type||p,r.normalize||!1,r.stride||0,r.offset||0),void 0!==r.divisor&&e.vertexAttribDivisor(t,r.divisor)}}function z(e,t){return function(r){if(r.value){if(e.disableVertexAttribArray(t),4!==r.value.length)throw new Error("The length of an integer constant value must be 4!");e.vertexAttrib4iv(t,r.value)}else e.bindBuffer(b,r.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,r.numComponents||r.size,r.type||d,r.stride||0,r.offset||0),void 0!==r.divisor&&e.vertexAttribDivisor(t,r.divisor)}}function U(e,t){return function(r){if(r.value){if(e.disableVertexAttribArray(t),4!==r.value.length)throw new Error("The length of an unsigned integer constant value must be 4!");e.vertexAttrib4uiv(t,r.value)}else e.bindBuffer(b,r.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,r.numComponents||r.size,r.type||x,r.stride||0,r.offset||0),void 0!==r.divisor&&e.vertexAttribDivisor(t,r.divisor)}}function C(e,t,r){var n=r.size,o=r.count;return function(r){e.bindBuffer(b,r.buffer);for(var u=r.size||r.numComponents||n,i=u/o,a=r.type||p,f=A[a].size*u,c=r.normalize||!1,l=r.offset||0,s=f/o,y=0;y<o;++y)e.enableVertexAttribArray(t+y),e.vertexAttribPointer(t+y,i,a,c,f,l+s*y),void 0!==r.divisor&&e.vertexAttribDivisor(t+y,r.divisor)}}A[5126]={Type:Float32Array,size:4,setter:function(e,t){return function(r){e.uniform1f(t,r)}},arraySetter:function(e,t){return function(r){e.uniform1fv(t,r)}}},A[35664]={Type:Float32Array,size:8,setter:function(e,t){return function(r){e.uniform2fv(t,r)}}},A[35665]={Type:Float32Array,size:12,setter:function(e,t){return function(r){e.uniform3fv(t,r)}}},A[35666]={Type:Float32Array,size:16,setter:function(e,t){return function(r){e.uniform4fv(t,r)}}},A[d]={Type:Int32Array,size:4,setter:O,arraySetter:_},A[35667]={Type:Int32Array,size:8,setter:S},A[35668]={Type:Int32Array,size:12,setter:M},A[35669]={Type:Int32Array,size:16,setter:R},A[5125]={Type:Uint32Array,size:4,setter:function(e,t){return function(r){e.uniform1ui(t,r)}},arraySetter:function(e,t){return function(r){e.uniform1uiv(t,r)}}},A[36294]={Type:Uint32Array,size:8,setter:function(e,t){return function(r){e.uniform2uiv(t,r)}}},A[36295]={Type:Uint32Array,size:12,setter:function(e,t){return function(r){e.uniform3uiv(t,r)}}},A[36296]={Type:Uint32Array,size:16,setter:function(e,t){return function(r){e.uniform4uiv(t,r)}}},A[35670]={Type:Uint32Array,size:4,setter:O,arraySetter:_},A[35671]={Type:Uint32Array,size:8,setter:S},A[35672]={Type:Uint32Array,size:12,setter:M},A[35673]={Type:Uint32Array,size:16,setter:R},A[35674]={Type:Float32Array,size:16,setter:function(e,t){return function(r){e.uniformMatrix2fv(t,!1,r)}}},A[35675]={Type:Float32Array,size:36,setter:function(e,t){return function(r){e.uniformMatrix3fv(t,!1,r)}}},A[35676]={Type:Float32Array,size:64,setter:function(e,t){return function(r){e.uniformMatrix4fv(t,!1,r)}}},A[35685]={Type:Float32Array,size:24,setter:function(e,t){return function(r){e.uniformMatrix2x3fv(t,!1,r)}}},A[35686]={Type:Float32Array,size:32,setter:function(e,t){return function(r){e.uniformMatrix2x4fv(t,!1,r)}}},A[35687]={Type:Float32Array,size:24,setter:function(e,t){return function(r){e.uniformMatrix3x2fv(t,!1,r)}}},A[35688]={Type:Float32Array,size:48,setter:function(e,t){return function(r){e.uniformMatrix3x4fv(t,!1,r)}}},A[35689]={Type:Float32Array,size:32,setter:function(e,t){return function(r){e.uniformMatrix4x2fv(t,!1,r)}}},A[35690]={Type:Float32Array,size:48,setter:function(e,t){return function(r){e.uniformMatrix4x3fv(t,!1,r)}}},A[35678]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:w},A[35680]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:h},A[35679]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:F},A[35682]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:w},A[36289]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:E},A[36292]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:E},A[36293]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:h},A[36298]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:w},A[36299]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:F},A[36300]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:h},A[36303]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:E},A[36306]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:w},A[36307]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:F},A[36308]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:h},A[36311]={Type:null,size:0,setter:P,arraySetter:T,bindPoint:E};var k={};k[5126]={size:4,setter:g},k[35664]={size:8,setter:g},k[35665]={size:12,setter:g},k[35666]={size:16,setter:g},k[d]={size:4,setter:z},k[35667]={size:8,setter:z},k[35668]={size:12,setter:z},k[35669]={size:16,setter:z},k[5125]={size:4,setter:U},k[36294]={size:8,setter:U},k[36295]={size:12,setter:U},k[36296]={size:16,setter:U},k[35670]={size:4,setter:z},k[35671]={size:8,setter:z},k[35672]={size:12,setter:z},k[35673]={size:16,setter:z},k[35674]={size:4,setter:C,count:2},k[35675]={size:9,setter:C,count:3},k[35676]={size:16,setter:C,count:4};var W=/ERROR:\s*\d+:(\d+)/gi;function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=f(t.matchAll(W)),o=new Map(n.map((function(e,r){var o=parseInt(e[1]),u=n[r+1],i=u?u.index:t.length;return[o-1,t.substring(e.index,i)]})));return e.split("\n").map((function(e,t){var n=o.get(t);return"".concat(t+1+r,": ").concat(e).concat(n?"\n\n^^^ ".concat(n):"")})).join("\n")}var B=/^[ \t]*\n/;function L(e,t,r,n){var u=n||l,i=e.createShader(r),a=0;if(B.test(t)&&(a=1,t=t.replace(B,"")),e.shaderSource(i,t),e.compileShader(i),!e.getShaderParameter(i,35713)){var f=e.getShaderInfoLog(i);return u("".concat(I(t,f,a),"\nError compiling ").concat(o.glEnumToString(e,r),": ").concat(f)),e.deleteShader(i),null}return i}function G(e,t,r){var n,o;if("function"==typeof t&&(r=t,t=void 0),"function"==typeof e)r=e,e=void 0;else if(e&&!Array.isArray(e)){if(e.errorCallback)return e;var u=e;r=u.errorCallback,e=u.attribLocations,n=u.transformFeedbackVaryings,o=u.transformFeedbackMode}var i={errorCallback:r||l,transformFeedbackVaryings:n,transformFeedbackMode:o};if(e){var a={};Array.isArray(e)?e.forEach((function(e,r){a[e]=t?t[r]:r})):a=e,i.attribLocations=a}return i}var X=["VERTEX_SHADER","FRAGMENT_SHADER"];function D(e,t){return t.indexOf("frag")>=0?35632:t.indexOf("vert")>=0?35633:void 0}function N(e,t){t.forEach((function(t){e.deleteShader(t)}))}function H(e,t,r,n,i){for(var a=G(r,n,i),f=[],c=[],l=0;l<t.length;++l){var s=t[l];if("string"==typeof s){var v=y(s),b=v?v.text:s,m=e[X[l]];v&&v.type&&(m=D(0,v.type)||m),s=L(e,b,m,a.errorCallback),c.push(s)}u.isShader(e,s)&&f.push(s)}if(f.length!==t.length)return a.errorCallback("not enough shaders for program"),N(e,c),null;var p=e.createProgram();f.forEach((function(t){e.attachShader(p,t)})),a.attribLocations&&Object.keys(a.attribLocations).forEach((function(t){e.bindAttribLocation(p,a.attribLocations[t],t)}));var d=a.transformFeedbackVaryings;if(d&&(d.attribs&&(d=d.attribs),Array.isArray(d)||(d=Object.keys(d)),e.transformFeedbackVaryings(p,d,a.transformFeedbackMode||35981)),e.linkProgram(p),!e.getProgramParameter(p,35714)){var x=e.getProgramInfoLog(p);return a.errorCallback("".concat(f.map((function(t){var r=I(e.getShaderSource(t),"",0),n=e.getShaderParameter(t,e.SHADER_TYPE);return"".concat(o.glEnumToString(e,n),"\n").concat(r,"}")})).join("\n"),"\nError in program linking: ").concat(x)),e.deleteProgram(p),N(e,c),null}return p}function q(e,t,r,n){var o,u=y(t);if(!u)throw new Error("unknown script element: ".concat(t));o=u.text;var i=r||D(0,u.type);if(!i)throw new Error("unknown shader type");return L(e,o,i,n)}function V(e,t,r,n,o){for(var u=G(r,n,o),i=[],a=0;a<t.length;++a){var f=L(e,t[a],e[X[a]],u.errorCallback);if(!f)return null;i.push(f)}return H(e,i,u)}function Y(e){var t=e.name;return t.startsWith("gl_")||t.startsWith("webgl_")}function $(e,t){var r=0;function n(t,n,o){var u,i=n.name.endsWith("[0]"),a=n.type,f=A[a];if(!f)throw new Error("unknown type: 0x".concat(a.toString(16)));if(f.bindPoint){var c=r;r+=n.size,u=i?f.arraySetter(e,a,c,o,n.size):f.setter(e,a,c,o,n.size)}else u=f.arraySetter&&i?f.arraySetter(e,o):f.setter(e,o);return u.location=o,u}for(var o={},u=e.getProgramParameter(t,35718),i=0;i<u;++i){var a=e.getActiveUniform(t,i);if(!Y(a)){var f=a.name;f.endsWith("[0]")&&(f=f.substr(0,f.length-3));var c=e.getUniformLocation(t,a.name);c&&(o[f]=n(0,a,c))}}return o}function K(e,t){for(var r={},n=e.getProgramParameter(t,35971),o=0;o<n;++o){var u=e.getTransformFeedbackVarying(t,o);r[u.name]={index:o,type:u.type,size:u.size}}return r}function Z(e,t,r){for(var n in t.transformFeedbackInfo&&(t=t.transformFeedbackInfo),r.attribs&&(r=r.attribs),r){var o=t[n];if(o){var u=r[n];u.offset?e.bindBufferRange(35982,o.index,u.buffer,u.offset,u.size):e.bindBufferBase(35982,o.index,u.buffer)}}}function J(e,t){for(var r=e.getProgramParameter(t,35718),n=[],o=[],u=0;u<r;++u){o.push(u),n.push({});var i=e.getActiveUniform(t,u);if(Y(i))break;n[u].name=i.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach((function(r){var u=r[0],i=r[1];e.getActiveUniforms(t,o,e[u]).forEach((function(e,t){n[t][i]=e}))}));for(var a={},f=e.getProgramParameter(t,35382),c=0;c<f;++c){var l=e.getActiveUniformBlockName(t,c),s={index:e.getUniformBlockIndex(t,l),usedByVertexShader:e.getActiveUniformBlockParameter(t,c,35396),usedByFragmentShader:e.getActiveUniformBlockParameter(t,c,35398),size:e.getActiveUniformBlockParameter(t,c,35392),uniformIndices:e.getActiveUniformBlockParameter(t,c,35395)};s.used=s.usedByVertexShader||s.usedByFragmentShader,a[l]=s}return{blockSpecs:a,uniformData:n}}var Q=/\[\d+\]\.$/;function ee(e,t,r,n){var o=r.blockSpecs,u=r.uniformData,i=o[n];if(!i)return s("no uniform block object named:",n),{name:n,uniforms:{}};var a=new ArrayBuffer(i.size),f=e.createBuffer(),c=i.index;e.bindBuffer(m,f),e.uniformBlockBinding(t,i.index,c);var l=n+".";Q.test(l)&&(l=l.replace(Q,"."));var y={};return i.uniformIndices.forEach((function(e){var t=u[e],r=A[t.type],n=r.Type,o=t.size*r.size,i=t.name;i.substr(0,l.length)===l&&(i=i.substr(l.length)),y[i]=new n(a,t.offset,o/n.BYTES_PER_ELEMENT)})),{name:n,array:a,asFloat:new Float32Array(a),buffer:f,uniforms:y}}function te(e,t,r){var n=(t.uniformBlockSpec||t).blockSpecs[r.name];if(n){var o=n.index;return e.bindBufferRange(m,o,r.buffer,r.offset||0,r.array.byteLength),!0}return!1}function re(e,t){for(var r=e.uniformSetters||e,n=arguments.length,o=1;o<n;++o){var u=arguments[o];if(Array.isArray(u))for(var i=u.length,a=0;a<i;++a)re(r,u[a]);else for(var f in u){var c=r[f];c&&c(u[f])}}}var ne=re;function oe(e,t){for(var r={},n=e.getProgramParameter(t,35721),o=0;o<n;++o){var u=e.getActiveAttrib(t,o);if(!Y(u)){var i=e.getAttribLocation(t,u.name),a=k[u.type],f=a.setter(e,i,a);f.location=i,r[u.name]=f}}return r}function ue(e,t){for(var r in t){var n=e[r];n&&n(t[r])}}function ie(e,t){var r={program:t,uniformSetters:$(e,t),attribSetters:oe(e,t)};return o.isWebGL2(e)&&(r.uniformBlockSpec=J(e,t),r.transformFeedbackInfo=K(e,t)),r}t.setUniformsAndBindTextures=ne},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.__esModule=!0,t.axisRotate=function(e,t,r,n){n=n||new c(16);var o=t[0],u=t[1],i=t[2],a=Math.sqrt(o*o+u*u+i*i),f=(o/=a)*o,l=(u/=a)*u,s=(i/=a)*i,y=Math.cos(r),v=Math.sin(r),b=1-y,m=f+(1-f)*y,p=o*u*b+i*v,d=o*i*b-u*v,x=o*u*b-i*v,w=l+(1-l)*y,h=u*i*b+o*v,F=o*i*b+u*v,E=u*i*b-o*v,A=s+(1-s)*y,j=e[0],O=e[1],_=e[2],S=e[3],M=e[4],R=e[5],P=e[6],T=e[7],g=e[8],z=e[9],U=e[10],C=e[11];n[0]=m*j+p*M+d*g,n[1]=m*O+p*R+d*z,n[2]=m*_+p*P+d*U,n[3]=m*S+p*T+d*C,n[4]=x*j+w*M+h*g,n[5]=x*O+w*R+h*z,n[6]=x*_+w*P+h*U,n[7]=x*S+w*T+h*C,n[8]=F*j+E*M+A*g,n[9]=F*O+E*R+A*z,n[10]=F*_+E*P+A*U,n[11]=F*S+E*T+A*C,e!==n&&(n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]);return n},t.axisRotation=function(e,t,r){r=r||new c(16);var n=e[0],o=e[1],u=e[2],i=Math.sqrt(n*n+o*o+u*u),a=(n/=i)*n,f=(o/=i)*o,l=(u/=i)*u,s=Math.cos(t),y=Math.sin(t),v=1-s;return r[0]=a+(1-a)*s,r[1]=n*o*v+u*y,r[2]=n*u*v-o*y,r[3]=0,r[4]=n*o*v-u*y,r[5]=f+(1-f)*s,r[6]=o*u*v+n*y,r[7]=0,r[8]=n*u*v+o*y,r[9]=o*u*v-n*y,r[10]=l+(1-l)*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},t.copy=l,t.frustum=function(e,t,r,n,o,u,i){i=i||new c(16);var a=t-e,f=n-r,l=o-u;return i[0]=2*o/a,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*o/f,i[6]=0,i[7]=0,i[8]=(e+t)/a,i[9]=(n+r)/f,i[10]=u/l,i[11]=-1,i[12]=0,i[13]=0,i[14]=o*u/l,i[15]=0,i},t.getAxis=function(e,t,r){r=r||o.create();var n=4*t;return r[0]=e[n+0],r[1]=e[n+1],r[2]=e[n+2],r},t.getTranslation=function(e,t){return(t=t||o.create())[0]=e[12],t[1]=e[13],t[2]=e[14],t},t.identity=s,t.inverse=y,t.lookAt=function(e,t,r,n){return n=n||new c(16),i=i||o.create(),a=a||o.create(),f=f||o.create(),o.normalize(o.subtract(e,t,f),f),o.normalize(o.cross(r,f,i),i),o.normalize(o.cross(f,i,a),a),n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=0,n[4]=a[0],n[5]=a[1],n[6]=a[2],n[7]=0,n[8]=f[0],n[9]=f[1],n[10]=f[2],n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n},t.multiply=function(e,t,r){r=r||new c(16);var n=e[0],o=e[1],u=e[2],i=e[3],a=e[4],f=e[5],l=e[6],s=e[7],y=e[8],v=e[9],b=e[10],m=e[11],p=e[12],d=e[13],x=e[14],w=e[15],h=t[0],F=t[1],E=t[2],A=t[3],j=t[4],O=t[5],_=t[6],S=t[7],M=t[8],R=t[9],P=t[10],T=t[11],g=t[12],z=t[13],U=t[14],C=t[15];return r[0]=n*h+a*F+y*E+p*A,r[1]=o*h+f*F+v*E+d*A,r[2]=u*h+l*F+b*E+x*A,r[3]=i*h+s*F+m*E+w*A,r[4]=n*j+a*O+y*_+p*S,r[5]=o*j+f*O+v*_+d*S,r[6]=u*j+l*O+b*_+x*S,r[7]=i*j+s*O+m*_+w*S,r[8]=n*M+a*R+y*P+p*T,r[9]=o*M+f*R+v*P+d*T,r[10]=u*M+l*R+b*P+x*T,r[11]=i*M+s*R+m*P+w*T,r[12]=n*g+a*z+y*U+p*C,r[13]=o*g+f*z+v*U+d*C,r[14]=u*g+l*z+b*U+x*C,r[15]=i*g+s*z+m*U+w*C,r},t.negate=function(e,t){return(t=t||new c(16))[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t[4]=-e[4],t[5]=-e[5],t[6]=-e[6],t[7]=-e[7],t[8]=-e[8],t[9]=-e[9],t[10]=-e[10],t[11]=-e[11],t[12]=-e[12],t[13]=-e[13],t[14]=-e[14],t[15]=-e[15],t},t.ortho=function(e,t,r,n,o,u,i){return(i=i||new c(16))[0]=2/(t-e),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(n-r),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2/(o-u),i[11]=0,i[12]=(t+e)/(e-t),i[13]=(n+r)/(r-n),i[14]=(u+o)/(o-u),i[15]=1,i},t.perspective=function(e,t,r,n,o){o=o||new c(16);var u=Math.tan(.5*Math.PI-.5*e),i=1/(r-n);return o[0]=u/t,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=u,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(r+n)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=r*n*i*2,o[15]=0,o},t.rotateX=function(e,t,r){r=r||new c(16);var n=e[4],o=e[5],u=e[6],i=e[7],a=e[8],f=e[9],l=e[10],s=e[11],y=Math.cos(t),v=Math.sin(t);r[4]=y*n+v*a,r[5]=y*o+v*f,r[6]=y*u+v*l,r[7]=y*i+v*s,r[8]=y*a-v*n,r[9]=y*f-v*o,r[10]=y*l-v*u,r[11]=y*s-v*i,e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]);return r},t.rotateY=function(e,t,r){r=r||new c(16);var n=e[0],o=e[1],u=e[2],i=e[3],a=e[8],f=e[9],l=e[10],s=e[11],y=Math.cos(t),v=Math.sin(t);r[0]=y*n-v*a,r[1]=y*o-v*f,r[2]=y*u-v*l,r[3]=y*i-v*s,r[8]=y*a+v*n,r[9]=y*f+v*o,r[10]=y*l+v*u,r[11]=y*s+v*i,e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]);return r},t.rotateZ=function(e,t,r){r=r||new c(16);var n=e[0],o=e[1],u=e[2],i=e[3],a=e[4],f=e[5],l=e[6],s=e[7],y=Math.cos(t),v=Math.sin(t);r[0]=y*n+v*a,r[1]=y*o+v*f,r[2]=y*u+v*l,r[3]=y*i+v*s,r[4]=y*a-v*n,r[5]=y*f-v*o,r[6]=y*l-v*u,r[7]=y*s-v*i,e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]);return r},t.rotationX=function(e,t){t=t||new c(16);var r=Math.cos(e),n=Math.sin(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.rotationY=function(e,t){t=t||new c(16);var r=Math.cos(e),n=Math.sin(e);return t[0]=r,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.rotationZ=function(e,t){t=t||new c(16);var r=Math.cos(e),n=Math.sin(e);return t[0]=r,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.scale=function(e,t,r){r=r||new c(16);var n=t[0],o=t[1],u=t[2];r[0]=n*e[0],r[1]=n*e[1],r[2]=n*e[2],r[3]=n*e[3],r[4]=o*e[4],r[5]=o*e[5],r[6]=o*e[6],r[7]=o*e[7],r[8]=u*e[8],r[9]=u*e[9],r[10]=u*e[10],r[11]=u*e[11],e!==r&&(r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]);return r},t.scaling=function(e,t){return(t=t||new c(16))[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},t.setAxis=function(e,t,r,n){n!==e&&(n=l(e,n));var o=4*r;return n[o+0]=t[0],n[o+1]=t[1],n[o+2]=t[2],n},t.setDefaultType=function(e){var t=c;return c=e,t},t.setTranslation=function(e,t,r){r=r||s(),e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11]);return r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r},t.transformDirection=function(e,t,r){r=r||o.create();var n=t[0],u=t[1],i=t[2];return r[0]=n*e[0]+u*e[4]+i*e[8],r[1]=n*e[1]+u*e[5]+i*e[9],r[2]=n*e[2]+u*e[6]+i*e[10],r},t.transformNormal=function(e,t,r){r=r||o.create();var n=y(e),u=t[0],i=t[1],a=t[2];return r[0]=u*n[0]+i*n[1]+a*n[2],r[1]=u*n[4]+i*n[5]+a*n[6],r[2]=u*n[8]+i*n[9]+a*n[10],r},t.transformPoint=function(e,t,r){r=r||o.create();var n=t[0],u=t[1],i=t[2],a=n*e[3]+u*e[7]+i*e[11]+e[15];return r[0]=(n*e[0]+u*e[4]+i*e[8]+e[12])/a,r[1]=(n*e[1]+u*e[5]+i*e[9]+e[13])/a,r[2]=(n*e[2]+u*e[6]+i*e[10]+e[14])/a,r},t.translate=function(e,t,r){r=r||new c(16);var n=t[0],o=t[1],u=t[2],i=e[0],a=e[1],f=e[2],l=e[3],s=e[4],y=e[5],v=e[6],b=e[7],m=e[8],p=e[9],d=e[10],x=e[11],w=e[12],h=e[13],F=e[14],E=e[15];e!==r&&(r[0]=i,r[1]=a,r[2]=f,r[3]=l,r[4]=s,r[5]=y,r[6]=v,r[7]=b,r[8]=m,r[9]=p,r[10]=d,r[11]=x);return r[12]=i*n+s*o+m*u+w,r[13]=a*n+y*o+p*u+h,r[14]=f*n+v*o+d*u+F,r[15]=l*n+b*o+x*u+E,r},t.translation=function(e,t){return(t=t||new c(16))[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t},t.transpose=function(e,t){if((t=t||new c(16))===e){var r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,t}var n=e[0],o=e[1],u=e[2],i=e[3],a=e[4],f=e[5],l=e[6],s=e[7],y=e[8],v=e[9],b=e[10],m=e[11],p=e[12],d=e[13],x=e[14],w=e[15];return t[0]=n,t[1]=a,t[2]=y,t[3]=p,t[4]=o,t[5]=f,t[6]=v,t[7]=d,t[8]=u,t[9]=l,t[10]=b,t[11]=x,t[12]=i,t[13]=s,t[14]=m,t[15]=w,t};var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(2));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var i,a,f,c=Float32Array;function l(e,t){return(t=t||new c(16))[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function s(e){return(e=e||new c(16))[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function y(e,t){t=t||new c(16);var r=e[0],n=e[1],o=e[2],u=e[3],i=e[4],a=e[5],f=e[6],l=e[7],s=e[8],y=e[9],v=e[10],b=e[11],m=e[12],p=e[13],d=e[14],x=e[15],w=v*x,h=d*b,F=f*x,E=d*l,A=f*b,j=v*l,O=o*x,_=d*u,S=o*b,M=v*u,R=o*l,P=f*u,T=s*p,g=m*y,z=i*p,U=m*a,C=i*y,k=s*a,W=r*p,I=m*n,B=r*y,L=s*n,G=r*a,X=i*n,D=w*a+E*y+A*p-(h*a+F*y+j*p),N=h*n+O*y+M*p-(w*n+_*y+S*p),H=F*n+_*a+R*p-(E*n+O*a+P*p),q=j*n+S*a+P*y-(A*n+M*a+R*y),V=1/(r*D+i*N+s*H+m*q);return t[0]=V*D,t[1]=V*N,t[2]=V*H,t[3]=V*q,t[4]=V*(h*i+F*s+j*m-(w*i+E*s+A*m)),t[5]=V*(w*r+_*s+S*m-(h*r+O*s+M*m)),t[6]=V*(E*r+O*i+P*m-(F*r+_*i+R*m)),t[7]=V*(A*r+M*i+R*s-(j*r+S*i+P*s)),t[8]=V*(T*l+U*b+C*x-(g*l+z*b+k*x)),t[9]=V*(g*u+W*b+L*x-(T*u+I*b+B*x)),t[10]=V*(z*u+I*l+G*x-(U*u+W*l+X*x)),t[11]=V*(k*u+B*l+X*b-(C*u+L*l+G*b)),t[12]=V*(z*v+k*d+g*f-(C*d+T*f+U*v)),t[13]=V*(B*d+T*o+I*v-(W*v+L*d+g*o)),t[14]=V*(W*f+X*d+U*o-(G*d+z*o+I*f)),t[15]=V*(G*v+C*o+L*f-(B*f+X*v+k*o)),t}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.__esModule=!0,t.createAttribsFromArrays=w,t.createBuffersFromArrays=function(e,t){var r={};Object.keys(t).forEach((function(n){r[n]=F(e,t[n],n)})),t.indices?(r.numElements=t.indices.length,r.elementType=o.getGLTypeForTypedArray(x(t.indices),"indices")):r.numElements=function(e){var t,r;for(r=0;r<h.length&&!((t=h[r])in e);++r);r===h.length&&(t=Object.keys(e)[0]);var n=e[t],o=v(n).length,u=d(n,t),i=o/u;if(o%u>0)throw new Error("numComponents ".concat(u," not correct for length ").concat(o));return i}(t);return r},t.createBufferFromArray=F,t.createBufferFromTypedArray=s,t.createBufferInfoFromArrays=function(e,t,r){var n=w(e,t),u=Object.assign({},r||{});u.attribs=Object.assign({},r?r.attribs:{},n);var i=t.indices;if(i){var a=x(i,"indices");u.indices=s(e,a,34963),u.numElements=a.length,u.elementType=o.getGLTypeForTypedArray(a)}else u.numElements||(u.numElements=function(e,t){var r,n;for(n=0;n<h.length&&!((r=h[n])in t)&&!((r=c.attribPrefix+r)in t);++n);n===h.length&&(r=Object.keys(t)[0]);var o=t[r];e.bindBuffer(f,o.buffer);var u=e.getBufferParameter(f,34660);e.bindBuffer(f,null);var i=(y=o.type,5120===y||5121===y?1:5122===y||5123===y?2:5124===y||5125===y||5126===y?4:0),a=u/i,l=o.numComponents||o.size,s=a/l;var y;if(s%1!=0)throw new Error("numComponents ".concat(l," not correct for length ").concat(length));return s}(e,u.attribs));return u},t.setAttribInfoBufferFromArray=function(e,t,r,n){r=x(r),void 0!==n?(e.bindBuffer(f,t.buffer),e.bufferSubData(f,n,r)):l(e,f,t.buffer,r,t.drawType)},t.setAttributePrefix=function(e){c.attribPrefix=e},t.setAttributeDefaults_=function(e){u.copyExistingProperties(e,c)},t.getNumComponents_=d,t.getArray_=v;var o=a(r(1)),u=a(r(0));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}var f=34962,c={attribPrefix:""};function l(e,t,r,n,o){e.bindBuffer(t,r),e.bufferData(t,n,o||35044)}function s(e,t,r,n){if(u.isBuffer(e,t))return t;r=r||f;var o=e.createBuffer();return l(e,r,o,t,n),o}function y(e){return"indices"===e}function v(e){return e.length?e:e.data}var b=/coord|texture/i,m=/color|colour/i;function p(e,t){var r;if(t%(r=b.test(e)?2:m.test(e)?4:3)>0)throw new Error("Can not guess numComponents for attribute '".concat(e,"'. Tried ").concat(r," but ").concat(t," values is not evenly divisible by ").concat(r,". You should specify it."));return r}function d(e,t){return e.numComponents||e.size||p(t,v(e).length)}function x(e,t){if(o.isArrayBuffer(e))return e;if(o.isArrayBuffer(e.data))return e.data;Array.isArray(e)&&(e={data:e});var r=e.type;return r||(r=y(t)?Uint16Array:Float32Array),new r(e.data)}function w(e,t){var r={};return Object.keys(t).forEach((function(n){if(!y(n)){var u=t[n],i=u.attrib||u.name||u.attribName||c.attribPrefix+n;if(u.value){if(!Array.isArray(u.value)&&!o.isArrayBuffer(u.value))throw new Error("array.value is not array or typedarray");r[i]={value:u.value}}else{var a,l,v,b;if(u.buffer&&u.buffer instanceof WebGLBuffer)a=u.buffer,b=u.numComponents||u.size,l=u.type,v=u.normalize;else if("number"==typeof u||"number"==typeof u.data){var m=u.data||u,w=u.type||Float32Array,h=m*w.BYTES_PER_ELEMENT;l=o.getGLTypeForTypedArrayType(w),v=void 0!==u.normalize?u.normalize:(E=w)===Int8Array||E===Uint8Array,b=u.numComponents||u.size||p(n,m),a=e.createBuffer(),e.bindBuffer(f,a),e.bufferData(f,h,u.drawType||35044)}else{var F=x(u,n);a=s(e,F,void 0,u.drawType),l=o.getGLTypeForTypedArray(F),v=void 0!==u.normalize?u.normalize:function(e){return e instanceof Int8Array||e instanceof Uint8Array}(F),b=d(u,n)}r[i]={buffer:a,numComponents:b,type:l,normalize:v,stride:u.stride||0,offset:u.offset||0,divisor:void 0===u.divisor?void 0:u.divisor,drawType:u.drawType}}}var E})),e.bindBuffer(f,null),r}var h=["position","positions","a_position"];function F(e,t,r){var n="indices"===r?34963:f;return s(e,x(t,r),n)}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.__esModule=!0,t.setTextureDefaults_=function(e){i.copyExistingProperties(e,s),e.textureColor&&ye(e.textureColor)},t.createSampler=Fe,t.createSamplers=function(e,t){var r={};return Object.keys(t).forEach((function(n){r[n]=Fe(e,t[n])})),r},t.setSamplerParameters=he,t.createTexture=We,t.setEmptyTexture=ke,t.setTextureFromArray=Ce,t.loadTextureFromUrl=ge,t.setTextureFromElement=_e,t.setTextureFilteringForSize=Ee,t.setTextureParameters=we,t.setDefaultTextureColor=ye,t.createTextures=function(e,t,r){r=r||Se;var n=0,o=[],u={},i={};function a(){0===n&&setTimeout((function(){r(o.length?o:void 0,u,i)}),0)}return Object.keys(t).forEach((function(r){var f,c,l=t[r];("string"==typeof(c=l.src)||Array.isArray(c)&&"string"==typeof c[0])&&(f=function(e,t,u){i[r]=u,--n,e&&o.push(e),a()},++n),u[r]=We(e,l,f)})),a(),u},t.resizeTexture=function(e,t,r,n,o,u){n=n||r.width,o=o||r.height,u=u||r.depth;var i=r.target||E;e.bindTexture(i,t);var a,f=r.level||0,c=r.internalFormat||r.format||p,l=ie(c),s=r.format||l.format,v=r.src;a=v&&(y(v)||Array.isArray(v)&&"number"==typeof v[0])?r.type||le(e,v,l.type):r.type||l.type;if(i===A)for(var b=0;b<6;++b)e.texImage2D(_+b,f,c,n,o,0,s,a,null);else i===j||i===O?e.texImage3D(i,f,c,n,o,u,0,s,a,null):e.texImage2D(i,f,c,n,o,0,s,a,null)},t.canGenerateMipmap=fe,t.canFilter=ce,t.getNumComponentsForFormat=function(e){var t=re[e];if(!t)throw"unknown format: "+e;return t.u},t.getBytesPerElementForInternalFormat=ue,t.getFormatAndTypeForInternalFormat=ie;var o=f(r(3)),u=f(r(1)),i=f(r(0));function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}var c,l,s={textureColor:new Uint8Array([128,192,255,255]),textureOptions:{},crossOrigin:void 0},y=u.isArrayBuffer,v=function(){return c=c||("undefined"!=typeof document&&document.createElement?document.createElement("canvas").getContext("2d"):null)},b=6406,m=6407,p=6408,d=6409,x=6410,w=6402,h=34041,F=33071,E=3553,A=34067,j=32879,O=35866,_=34069,S=10241,M=10240,R=10242,P=10243,T=3317,g=3314,z=32878,U=3316,C=3315,k=32877,W=37443,I=37441,B=37440,L=5120,G=5121,X=5122,D=5123,N=5124,H=5125,q=5126,V=5131,Y=36193,$=33640,K=33319,Z=33320,J=6403,Q=36244,ee=36248,te=36249,re={},ne=re;function oe(e){if(!l){var t={};t[6406]={v:b,h:!0,F:!0,A:[1,2,2,4],type:[G,V,Y,q]},t[6409]={v:d,h:!0,F:!0,A:[1,2,2,4],type:[G,V,Y,q]},t[6410]={v:x,h:!0,F:!0,A:[2,4,4,8],type:[G,V,Y,q]},t[m]={v:m,h:!0,F:!0,A:[3,6,6,12,2],type:[G,V,Y,q,33635]},t[p]={v:p,h:!0,F:!0,A:[4,8,8,16,2,2],type:[G,V,Y,q,32819,32820]},t[6402]={v:w,h:!0,F:!1,A:[2,4],type:[H,D]},t[33321]={v:J,h:!0,F:!0,A:[1],type:[G]},t[36756]={v:J,h:!1,F:!0,A:[1],type:[L]},t[33325]={v:J,h:!1,F:!0,A:[4,2],type:[q,V]},t[33326]={v:J,h:!1,F:!1,A:[4],type:[q]},t[33330]={v:Q,h:!0,F:!1,A:[1],type:[G]},t[33329]={v:Q,h:!0,F:!1,A:[1],type:[L]},t[33332]={v:Q,h:!0,F:!1,A:[2],type:[D]},t[33331]={v:Q,h:!0,F:!1,A:[2],type:[X]},t[33334]={v:Q,h:!0,F:!1,A:[4],type:[H]},t[33333]={v:Q,h:!0,F:!1,A:[4],type:[N]},t[33323]={v:K,h:!0,F:!0,A:[2],type:[G]},t[36757]={v:K,h:!1,F:!0,A:[2],type:[L]},t[33327]={v:K,h:!1,F:!0,A:[8,4],type:[q,V]},t[33328]={v:K,h:!1,F:!1,A:[8],type:[q]},t[33336]={v:Z,h:!0,F:!1,A:[2],type:[G]},t[33335]={v:Z,h:!0,F:!1,A:[2],type:[L]},t[33338]={v:Z,h:!0,F:!1,A:[4],type:[D]},t[33337]={v:Z,h:!0,F:!1,A:[4],type:[X]},t[33340]={v:Z,h:!0,F:!1,A:[8],type:[H]},t[33339]={v:Z,h:!0,F:!1,A:[8],type:[N]},t[32849]={v:m,h:!0,F:!0,A:[3],type:[G]},t[35905]={v:m,h:!1,F:!0,A:[3],type:[G]},t[36194]={v:m,h:!0,F:!0,A:[3,2],type:[G,33635]},t[36758]={v:m,h:!1,F:!0,A:[3],type:[L]},t[35898]={v:m,h:!1,F:!0,A:[12,6,4],type:[q,V,35899]},t[35901]={v:m,h:!1,F:!0,A:[12,6,4],type:[q,V,35902]},t[34843]={v:m,h:!1,F:!0,A:[12,6],type:[q,V]},t[34837]={v:m,h:!1,F:!1,A:[12],type:[q]},t[36221]={v:ee,h:!1,F:!1,A:[3],type:[G]},t[36239]={v:ee,h:!1,F:!1,A:[3],type:[L]},t[36215]={v:ee,h:!1,F:!1,A:[6],type:[D]},t[36233]={v:ee,h:!1,F:!1,A:[6],type:[X]},t[36209]={v:ee,h:!1,F:!1,A:[12],type:[H]},t[36227]={v:ee,h:!1,F:!1,A:[12],type:[N]},t[32856]={v:p,h:!0,F:!0,A:[4],type:[G]},t[35907]={v:p,h:!0,F:!0,A:[4],type:[G]},t[36759]={v:p,h:!1,F:!0,A:[4],type:[L]},t[32855]={v:p,h:!0,F:!0,A:[4,2,4],type:[G,32820,$]},t[32854]={v:p,h:!0,F:!0,A:[4,2],type:[G,32819]},t[32857]={v:p,h:!0,F:!0,A:[4],type:[$]},t[34842]={v:p,h:!1,F:!0,A:[16,8],type:[q,V]},t[34836]={v:p,h:!1,F:!1,A:[16],type:[q]},t[36220]={v:te,h:!0,F:!1,A:[4],type:[G]},t[36238]={v:te,h:!0,F:!1,A:[4],type:[L]},t[36975]={v:te,h:!0,F:!1,A:[4],type:[$]},t[36214]={v:te,h:!0,F:!1,A:[8],type:[D]},t[36232]={v:te,h:!0,F:!1,A:[8],type:[X]},t[36226]={v:te,h:!0,F:!1,A:[16],type:[N]},t[36208]={v:te,h:!0,F:!1,A:[16],type:[H]},t[33189]={v:w,h:!0,F:!1,A:[2,4],type:[D,H]},t[33190]={v:w,h:!0,F:!1,A:[4],type:[H]},t[36012]={v:w,h:!0,F:!1,A:[4],type:[q]},t[35056]={v:h,h:!0,F:!1,A:[4],type:[34042]},t[36013]={v:h,h:!0,F:!1,A:[4],type:[36269]},Object.keys(t).forEach((function(e){var r=t[e];r.bytesPerElementMap={},r.A.forEach((function(e,t){var n=r.type[t];r.bytesPerElementMap[n]=e}))})),l=t}return l[e]}function ue(e,t){var r=oe(e);if(!r)throw"unknown internal format";var n=r.bytesPerElementMap[t];if(void 0===n)throw"unknown internal format";return n}function ie(e){var t=oe(e);if(!t)throw"unknown internal format";return{format:t.v,type:t.type[0]}}function ae(e){return 0==(e&e-1)}function fe(e,t,r,n){if(!o.isWebGL2(e))return ae(t)&&ae(r);var u=oe(n);if(!u)throw"unknown internal format";return u.h&&u.F}function ce(e){var t=oe(e);if(!t)throw"unknown internal format";return t.F}function le(e,t,r){return y(t)?u.getGLTypeForTypedArray(t):r||G}function se(e,t,r,n,o){if(o%1!=0)throw"can't guess dimensions";if(r||n){if(n){if(!r&&(r=o/n)%1)throw"can't guess dimensions"}else if((n=o/r)%1)throw"can't guess dimensions"}else{var u=Math.sqrt(o/(t===A?6:1));u%1==0?(r=u,n=u):(r=o,n=1)}return{width:r,height:n}}function ye(e){s.textureColor=new Uint8Array([255*e[0],255*e[1],255*e[2],255*e[3]])}ne[6406]={u:1},ne[6409]={u:1},ne[6410]={u:2},ne[m]={u:3},ne[p]={u:4},ne[J]={u:1},ne[36244]={u:1},ne[K]={u:2},ne[33320]={u:2},ne[m]={u:3},ne[36248]={u:3},ne[p]={u:4},ne[36249]={u:4},ne[6402]={u:1},ne[34041]={u:2};var ve={};function be(e,t){void 0!==t.colorspaceConversion&&(ve.colorspaceConversion=e.getParameter(W),e.pixelStorei(W,t.colorspaceConversion)),void 0!==t.premultiplyAlpha&&(ve.premultiplyAlpha=e.getParameter(I),e.pixelStorei(I,t.premultiplyAlpha)),void 0!==t.flipY&&(ve.flipY=e.getParameter(B),e.pixelStorei(B,t.flipY))}function me(e,t){void 0!==t.colorspaceConversion&&e.pixelStorei(W,ve.colorspaceConversion),void 0!==t.premultiplyAlpha&&e.pixelStorei(I,ve.premultiplyAlpha),void 0!==t.flipY&&e.pixelStorei(B,ve.flipY)}function pe(e){ve.unpackAlignment=e.getParameter(T),o.isWebGL2(e)&&(ve.unpackRowLength=e.getParameter(g),ve.unpackImageHeight=e.getParameter(z),ve.unpackSkipPixels=e.getParameter(U),ve.unpackSkipRows=e.getParameter(C),ve.unpackSkipImages=e.getParameter(k))}function de(e){e.pixelStorei(T,ve.unpackAlignment),o.isWebGL2(e)&&(e.pixelStorei(g,ve.unpackRowLength),e.pixelStorei(z,ve.unpackImageHeight),e.pixelStorei(U,ve.unpackSkipPixels),e.pixelStorei(C,ve.unpackSkipRows),e.pixelStorei(k,ve.unpackSkipImages))}function xe(e,t,r,n){n.minMag&&(r.call(e,t,S,n.minMag),r.call(e,t,M,n.minMag)),n.min&&r.call(e,t,S,n.min),n.mag&&r.call(e,t,M,n.mag),n.wrap&&(r.call(e,t,R,n.wrap),r.call(e,t,P,n.wrap),(t===j||i.isSampler(e,t))&&r.call(e,t,32882,n.wrap)),n.wrapR&&r.call(e,t,32882,n.wrapR),n.wrapS&&r.call(e,t,R,n.wrapS),n.wrapT&&r.call(e,t,P,n.wrapT),n.minLod&&r.call(e,t,33082,n.minLod),n.maxLod&&r.call(e,t,33083,n.maxLod),n.baseLevel&&r.call(e,t,33084,n.baseLevel),n.maxLevel&&r.call(e,t,33085,n.maxLevel)}function we(e,t,r){var n=r.target||E;e.bindTexture(n,t),xe(e,n,e.texParameteri,r)}function he(e,t,r){xe(e,t,e.samplerParameteri,r)}function Fe(e,t){var r=e.createSampler();return he(e,r,t),r}function Ee(e,t,r,n,o,u){r=r||s.textureOptions,u=u||p;var i=r.target||E;if(n=n||r.width,o=o||r.height,e.bindTexture(i,t),fe(e,n,o,u))e.generateMipmap(i);else{var a=ce(u)?9729:9728;e.texParameteri(i,S,a),e.texParameteri(i,M,a),e.texParameteri(i,R,F),e.texParameteri(i,P,F)}}function Ae(e){return!0===e.auto||void 0===e.auto&&void 0===e.level}function je(e,t){return(t=t||{}).cubeFaceOrder||[_,34070,34071,34072,34073,34074]}function Oe(e,t){var r=je(0,t).map((function(e,t){return{face:e,ndx:t}}));return r.sort((function(e,t){return e.face-t.face})),r}function _e(e,t,r,n){var o=(n=n||s.textureOptions).target||E,u=n.level||0,i=r.width,a=r.height,f=n.internalFormat||n.format||p,c=ie(f),l=n.format||c.format,y=n.type||c.type;if(be(e,n),e.bindTexture(o,t),o===A){var b,m,d=r.width,x=r.height;if(d/6===x)b=x,m=[0,0,1,0,2,0,3,0,4,0,5,0];else if(x/6===d)b=d,m=[0,0,0,1,0,2,0,3,0,4,0,5];else if(d/3==x/2)b=d/3,m=[0,0,1,0,2,0,0,1,1,1,2,1];else{if(d/2!=x/3)throw"can't figure out cube map from element: "+(r.src?r.src:r.nodeName);b=d/2,m=[0,0,1,0,0,1,1,1,0,2,1,2]}var w=v();w?(w.canvas.width=b,w.canvas.height=b,i=b,a=b,Oe(0,n).forEach((function(t){var n=m[2*t.ndx+0]*b,o=m[2*t.ndx+1]*b;w.drawImage(r,n,o,b,b,0,0,b,b),e.texImage2D(t.face,u,f,l,y,w.canvas)})),w.canvas.width=1,w.canvas.height=1):"undefined"!=typeof createImageBitmap&&(i=b,a=b,Oe(0,n).forEach((function(c){var s=m[2*c.ndx+0]*b,v=m[2*c.ndx+1]*b;e.texImage2D(c.face,u,f,b,b,0,l,y,null),createImageBitmap(r,s,v,b,b,{premultiplyAlpha:"none",colorSpaceConversion:"none"}).then((function(r){be(e,n),e.bindTexture(o,t),e.texImage2D(c.face,u,f,l,y,r),me(e,n),Ae(n)&&Ee(e,t,n,i,a,f)}))})))}else if(o===j||o===O){var h=Math.min(r.width,r.height),F=Math.max(r.width,r.height),_=F/h;if(_%1!=0)throw"can not compute 3D dimensions of element";var S=r.width===F?1:0,M=r.height===F?1:0;pe(e),e.pixelStorei(T,1),e.pixelStorei(g,r.width),e.pixelStorei(z,0),e.pixelStorei(k,0),e.texImage3D(o,u,f,h,h,h,0,l,y,null);for(var R=0;R<_;++R){var P=R*h*S,W=R*h*M;e.pixelStorei(U,P),e.pixelStorei(C,W),e.texSubImage3D(o,u,0,0,R,h,h,1,l,y,r)}de(e)}else e.texImage2D(o,u,f,l,y,r);me(e,n),Ae(n)&&Ee(e,t,n,i,a,f),we(e,t,n)}function Se(){}function Me(e,t){return void 0!==t||function(e){if("undefined"!=typeof document){var t=document.createElement("a");return t.href=e,t.hostname===location.hostname&&t.port===location.port&&t.protocol===location.protocol}var r=new URL(location.href).origin;return new URL(e,location.href).origin===r}(e)?t:"anonymous"}function Re(e){return"undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap||"undefined"!=typeof ImageData&&e instanceof ImageData||"undefined"!=typeof HTMLElement&&e instanceof HTMLElement}function Pe(e,t,r){return Re(e)?(setTimeout((function(){r(null,e)})),e):function(e,t,r){var n;if(r=r||Se,t=void 0!==t?t:s.crossOrigin,t=Me(e,t),"undefined"!=typeof Image){n=new Image,void 0!==t&&(n.crossOrigin=t);var o=function(){n.removeEventListener("error",u),n.removeEventListener("load",a),n=null},u=function(){var t="couldn't load image: "+e;i.error(t),r(t,n),o()},a=function(){r(null,n),o()};return n.addEventListener("error",u),n.addEventListener("load",a),n.src=e,n}if("undefined"!=typeof ImageBitmap){var f,c,l=function(){r(f,c)},y={};t&&(y.mode="cors"),fetch(e,y).then((function(e){if(!e.ok)throw e;return e.blob()})).then((function(e){return createImageBitmap(e,{premultiplyAlpha:"none",colorSpaceConversion:"none"})})).then((function(e){c=e,setTimeout(l)})).catch((function(e){f=e,setTimeout(l)})),n=null}return n}(e,t,r)}function Te(e,t,r){var n=(r=r||s.textureOptions).target||E;if(e.bindTexture(n,t),!1!==r.color){var o=function(e){return e=e||s.textureColor,y(e)?e:new Uint8Array([255*e[0],255*e[1],255*e[2],255*e[3]])}(r.color);if(n===A)for(var u=0;u<6;++u)e.texImage2D(_+u,0,p,1,1,0,p,G,o);else n===j||n===O?e.texImage3D(n,0,p,1,1,1,0,p,G,o):e.texImage2D(n,0,p,1,1,0,p,G,o)}}function ge(e,t,r,n){return n=n||Se,r=r||s.textureOptions,Te(e,t,r),Pe((r=Object.assign({},r)).src,r.crossOrigin,(function(o,u){o?n(o,t,u):(_e(e,t,u,r),n(null,t,u))}))}function ze(e,t,r,n){n=n||Se;var o=r.src;if(6!==o.length)throw"there must be 6 urls for a cubemap";var u=r.level||0,i=r.internalFormat||r.format||p,a=ie(i),f=r.format||a.format,c=r.type||G,l=r.target||E;if(l!==A)throw"target must be TEXTURE_CUBE_MAP";Te(e,t,r),r=Object.assign({},r);var s,y=6,v=[],b=je(0,r);s=o.map((function(o,a){return Pe(o,r.crossOrigin,(m=b[a],function(o,a){--y,o?v.push(o):a.width!==a.height?v.push("cubemap face img is not a square: "+a.src):(be(e,r),e.bindTexture(l,t),5===y?je().forEach((function(t){e.texImage2D(t,u,i,f,c,a)})):e.texImage2D(m,u,i,f,c,a),me(e,r),Ae(r)&&e.generateMipmap(l)),0===y&&n(v.length?v:void 0,t,s)}));var m}))}function Ue(e,t,r,n){n=n||Se;var o=r.src,u=r.internalFormat||r.format||p,i=ie(u),a=r.format||i.format,f=r.type||G,c=r.target||O;if(c!==j&&c!==O)throw"target must be TEXTURE_3D or TEXTURE_2D_ARRAY";Te(e,t,r),r=Object.assign({},r);var l,s=o.length,y=[],b=r.level||0,m=r.width,d=r.height,x=o.length,w=!0;l=o.map((function(o,i){return Pe(o,r.crossOrigin,(p=i,function(o,i){if(--s,o)y.push(o);else{if(be(e,r),e.bindTexture(c,t),w){w=!1,m=r.width||i.width,d=r.height||i.height,e.texImage3D(c,b,u,m,d,x,0,a,f,null);for(var h=0;h<x;++h)e.texSubImage3D(c,b,0,0,h,m,d,1,a,f,i)}else{var F,E=i;i.width===m&&i.height===d||(E=(F=v()).canvas,F.canvas.width=m,F.canvas.height=d,F.drawImage(i,0,0,m,d)),e.texSubImage3D(c,b,0,0,p,m,d,1,a,f,E),F&&E===F.canvas&&(F.canvas.width=0,F.canvas.height=0)}me(e,r),Ae(r)&&e.generateMipmap(c)}0===s&&n(y.length?y:void 0,t,l)}));var p}))}function Ce(e,t,r,n){var i=(n=n||s.textureOptions).target||E;e.bindTexture(i,t);var a=n.width,f=n.height,c=n.depth,l=n.level||0,v=n.internalFormat||n.format||p,b=ie(v),m=n.format||b.format,d=n.type||le(0,r,b.type);if(y(r))r instanceof Uint8ClampedArray&&(r=new Uint8Array(r.buffer));else{var x=u.getTypedArrayTypeForGLType(d);r=new x(r)}var w,h=ue(v,d),F=r.byteLength/h;if(F%1)throw"length wrong size for format: "+o.glEnumToString(e,m);if(i===j||i===O)if(a||f||c)!a||f&&c?!f||a&&c?(w=se(0,i,a,f,F/c),a=w.width,f=w.height):(w=se(0,i,a,c,F/f),a=w.width,c=w.height):(w=se(0,i,f,c,F/a),f=w.width,c=w.height);else{var _=Math.cbrt(F);if(_%1!=0)throw"can't guess cube size of array of numElements: "+F;a=_,f=_,c=_}else w=se(0,i,a,f,F),a=w.width,f=w.height;if(pe(e),e.pixelStorei(T,n.unpackAlignment||1),be(e,n),i===A){var S=F/6*(h/r.BYTES_PER_ELEMENT);Oe(0,n).forEach((function(t){var n=S*t.ndx,o=r.subarray(n,n+S);e.texImage2D(t.face,l,v,a,f,0,m,d,o)}))}else i===j||i===O?e.texImage3D(i,l,v,a,f,c,0,m,d,r):e.texImage2D(i,l,v,a,f,0,m,d,r);return me(e,n),de(e),{width:a,height:f,depth:c,type:d}}function ke(e,t,r){var n=r.target||E;e.bindTexture(n,t);var o=r.level||0,u=r.internalFormat||r.format||p,i=ie(u),a=r.format||i.format,f=r.type||i.type;if(be(e,r),n===A)for(var c=0;c<6;++c)e.texImage2D(_+c,o,u,r.width,r.height,0,a,f,null);else n===j||n===O?e.texImage3D(n,o,u,r.width,r.height,r.depth,0,a,f,null):e.texImage2D(n,o,u,r.width,r.height,0,a,f,null);me(e,r)}function We(e,t,r){r=r||Se,t=t||s.textureOptions;var n=e.createTexture(),o=t.target||E,u=t.width||1,i=t.height||1,a=t.internalFormat||p;e.bindTexture(o,n),o===A&&(e.texParameteri(o,R,F),e.texParameteri(o,P,F));var f=t.src;if(f)if("function"==typeof f&&(f=f(e,t)),"string"==typeof f)ge(e,n,t,r);else if(y(f)||Array.isArray(f)&&("number"==typeof f[0]||Array.isArray(f[0])||y(f[0]))){var c=Ce(e,n,f,t);u=c.width,i=c.height}else Array.isArray(f)&&("string"==typeof f[0]||Re(f[0]))?o===A?ze(e,n,t,r):Ue(e,n,t,r):(_e(e,n,f,t),u=f.width,i=f.height);else ke(e,n,t);return Ae(t)&&Ee(e,n,t,u,i,a),we(e,n,t),n}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.__esModule=!0;var o={m4:!0,v3:!0,primitives:!0};t.primitives=t.v3=t.m4=void 0;var u=l(r(5));t.m4=u;var i=l(r(2));t.v3=i;var a=l(r(9));t.primitives=a;var f=r(10);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=f[e]))}))},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.__esModule=!0,t.create3DFVertices=R,t.createAugmentedTypedArray=b,t.createCubeVertices=_,t.createPlaneVertices=A,t.createSphereVertices=j,t.createTruncatedConeVertices=S,t.createXYQuadVertices=E,t.createCrescentVertices=P,t.createCylinderVertices=T,t.createTorusVertices=g,t.createDiscVertices=z,t.deindexVertices=function(e){var t=e.indices,r={},n=t.length;return Object.keys(e).filter(m).forEach((function(o){for(var u=e[o],i=u.numComponents,a=b(i,n,u.constructor),f=0;f<n;++f)for(var c=t[f]*i,l=0;l<i;++l)a.push(u[c+l]);r[o]=a})),r},t.flattenNormals=function(e){if(e.indices)throw new Error("can not flatten normals of indexed vertices. deindex them first");for(var t=e.normal,r=t.length,n=0;n<r;n+=9){var o=t[n+0],u=t[n+1],i=t[n+2],a=t[n+3],f=t[n+4],c=t[n+5],l=t[n+6],s=t[n+7],y=t[n+8],v=o+a+l,b=u+f+s,m=i+c+y,p=Math.sqrt(v*v+b*b+m*m);v/=p,b/=p,m/=p,t[n+0]=v,t[n+1]=b,t[n+2]=m,t[n+3]=v,t[n+4]=b,t[n+5]=m,t[n+6]=v,t[n+7]=b,t[n+8]=m}return e},t.makeRandomVertexColors=function(e,t){t=t||{};var r=e.position.numElements,n=b(4,r,Uint8Array),o=t.rand||function(e,t){return t<3?(r=256,Math.random()*r|0):255;var r};if(e.color=n,e.indices)for(var u=0;u<r;++u)n.push(o(u,0),o(u,1),o(u,2),o(u,3));else for(var i=t.vertsPerColor||3,a=r/i,f=0;f<a;++f)for(var c=[o(f,0),o(f,1),o(f,2),o(f,3)],l=0;l<i;++l)n.push(c);return e},t.reorientDirections=x,t.reorientNormals=w,t.reorientPositions=h,t.reorientVertices=F,t.concatVertices=function(e){for(var t,r={},n=function(n){var o=e[n];Object.keys(o).forEach((function(e){r[e]||(r[e]=[]),t||"indices"===e||(t=e);var n=o[e],u=y(n,e),i=s(n).length/u;r[e].push(i)}))},o=0;o<e.length;++o)n(o);var u=r[t],i={};return Object.keys(r).forEach((function(t){var r=function(t){for(var r,n=0,o=0;o<e.length;++o){var u=e[o][t];n+=s(u).length,r&&!u.data||(r=u)}return{length:n,spec:r}}(t),n=I(r.spec,r.length);!function(t,r,n){for(var o=0,u=0,i=0;i<e.length;++i){var a=e[i][t],f=s(a);"indices"===t?(W(f,n,u,o),o+=r[i]):W(f,n,u),u+=f.length}}(t,u,s(n)),i[t]=n})),i},t.duplicateVertices=function(e){var t={};return Object.keys(e).forEach((function(r){var n=e[r],o=s(n),u=I(n,o.length);W(o,s(u),0),t[r]=u})),t},t.createDiscBuffers=t.createDiscBufferInfo=t.createTorusBuffers=t.createTorusBufferInfo=t.createCylinderBuffers=t.createCylinderBufferInfo=t.createCrescentBuffers=t.createCrescentBufferInfo=t.createCresentVertices=t.createCresentBuffers=t.createCresentBufferInfo=t.createXYQuadBuffers=t.createXYQuadBufferInfo=t.createTruncatedConeBuffers=t.createTruncatedConeBufferInfo=t.createSphereBuffers=t.createSphereBufferInfo=t.createPlaneBuffers=t.createPlaneBufferInfo=t.createCubeBuffers=t.createCubeBufferInfo=t.create3DFBuffers=t.create3DFBufferInfo=void 0;var o=l(r(6)),u=l(r(0)),i=l(r(1)),a=l(r(5)),f=l(r(2));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}var s=o.getArray_,y=o.getNumComponents_;function v(e,t){var r=0;return e.push=function(){for(var t=0;t<arguments.length;++t){var n=arguments[t];if(n instanceof Array||i.isArrayBuffer(n))for(var o=0;o<n.length;++o)e[r++]=n[o];else e[r++]=n}},e.reset=function(e){r=e||0},e.numComponents=t,Object.defineProperty(e,"numElements",{get:function(){return this.length/this.numComponents|0}}),e}function b(e,t,r){return v(new(r||Float32Array)(e*t),e)}function m(e){return"indices"!==e}function p(e,t,r){for(var n=e.length,o=new Float32Array(3),u=0;u<n;u+=3)r(t,[e[u],e[u+1],e[u+2]],o),e[u]=o[0],e[u+1]=o[1],e[u+2]=o[2]}function d(e,t,r){r=r||f.create();var n=t[0],o=t[1],u=t[2];return r[0]=n*e[0]+o*e[1]+u*e[2],r[1]=n*e[4]+o*e[5]+u*e[6],r[2]=n*e[8]+o*e[9]+u*e[10],r}function x(e,t){return p(e,t,a.transformDirection),e}function w(e,t){return p(e,a.inverse(t),d),e}function h(e,t){return p(e,t,a.transformPoint),e}function F(e,t){return Object.keys(e).forEach((function(r){var n=e[r];r.indexOf("pos")>=0?h(n,t):r.indexOf("tan")>=0||r.indexOf("binorm")>=0?x(n,t):r.indexOf("norm")>=0&&w(n,t)})),e}function E(e,t,r){return e=e||2,{position:{numComponents:2,data:[(t=t||0)+-1*(e*=.5),(r=r||0)+-1*e,t+1*e,r+-1*e,t+-1*e,r+1*e,t+1*e,r+1*e]},normal:[0,0,1,0,0,1,0,0,1,0,0,1],texcoord:[0,0,1,0,0,1,1,1],indices:[0,1,2,2,1,3]}}function A(e,t,r,n,o){e=e||1,t=t||1,r=r||1,n=n||1,o=o||a.identity();for(var u=(r+1)*(n+1),i=b(3,u),f=b(3,u),c=b(2,u),l=0;l<=n;l++)for(var s=0;s<=r;s++){var y=s/r,v=l/n;i.push(e*y-.5*e,0,t*v-.5*t),f.push(0,1,0),c.push(y,v)}for(var m=r+1,p=b(3,r*n*2,Uint16Array),d=0;d<n;d++)for(var x=0;x<r;x++)p.push((d+0)*m+x,(d+1)*m+x,(d+0)*m+x+1),p.push((d+1)*m+x,(d+1)*m+x+1,(d+0)*m+x+1);return F({position:i,normal:f,texcoord:c,indices:p},o)}function j(e,t,r,n,o,u,i){if(t<=0||r<=0)throw new Error("subdivisionAxis and subdivisionHeight must be > 0");n=n||0,u=u||0;for(var a=(o=o||Math.PI)-n,f=(i=i||2*Math.PI)-u,c=(t+1)*(r+1),l=b(3,c),s=b(3,c),y=b(2,c),v=0;v<=r;v++)for(var m=0;m<=t;m++){var p=m/t,d=v/r,x=f*p+u,w=a*d+n,h=Math.sin(x),F=Math.cos(x),E=Math.sin(w),A=F*E,j=Math.cos(w),O=h*E;l.push(e*A,e*j,e*O),s.push(A,j,O),y.push(1-p,d)}for(var _=t+1,S=b(3,t*r*2,Uint16Array),M=0;M<t;M++)for(var R=0;R<r;R++)S.push((R+0)*_+M,(R+0)*_+M+1,(R+1)*_+M),S.push((R+1)*_+M,(R+0)*_+M+1,(R+1)*_+M+1);return{position:l,normal:s,texcoord:y,indices:S}}var O=[[3,7,5,1],[6,2,0,4],[6,7,3,2],[0,1,5,4],[7,6,4,5],[2,3,1,0]];function _(e){for(var t=(e=e||1)/2,r=[[-t,-t,-t],[+t,-t,-t],[-t,+t,-t],[+t,+t,-t],[-t,-t,+t],[+t,-t,+t],[-t,+t,+t],[+t,+t,+t]],n=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],o=[[1,0],[0,0],[0,1],[1,1]],u=b(3,24),i=b(3,24),a=b(2,24),f=b(3,12,Uint16Array),c=0;c<6;++c){for(var l=O[c],s=0;s<4;++s){var y=r[l[s]],v=n[c],m=o[s];u.push(y),i.push(v),a.push(m)}var p=4*c;f.push(p+0,p+1,p+2),f.push(p+0,p+2,p+3)}return{position:u,normal:i,texcoord:a,indices:f}}function S(e,t,r,n,o,u,i){if(n<3)throw new Error("radialSubdivisions must be 3 or greater");if(o<1)throw new Error("verticalSubdivisions must be 1 or greater");for(var a=void 0===u||u,f=void 0===i||i,c=(a?2:0)+(f?2:0),l=(n+1)*(o+1+c),s=b(3,l),y=b(3,l),v=b(2,l),m=b(3,n*(o+c/2)*2,Uint16Array),p=n+1,d=Math.atan2(e-t,r),x=Math.cos(d),w=Math.sin(d),h=o+(f?2:0),F=a?-2:0;F<=h;++F){var E=F/o,A=r*E,j=void 0;F<0?(A=0,E=1,j=e):F>o?(A=r,E=1,j=t):j=e+F/o*(t-e),-2!==F&&F!==o+2||(j=0,E=0),A-=r/2;for(var O=0;O<p;++O){var _=Math.sin(O*Math.PI*2/n),S=Math.cos(O*Math.PI*2/n);s.push(_*j,A,S*j),F<0?y.push(0,-1,0):F>o?y.push(0,1,0):0===j?y.push(0,0,0):y.push(_*x,w,S*x),v.push(O/n,1-E)}}for(var M=0;M<o+c;++M)if(!(1===M&&a||M===o+c-2&&f))for(var R=0;R<n;++R)m.push(p*(M+0)+0+R,p*(M+0)+1+R,p*(M+1)+1+R),m.push(p*(M+0)+0+R,p*(M+1)+1+R,p*(M+1)+0+R);return{position:s,normal:y,texcoord:v,indices:m}}function M(e,t){t=t||[];for(var r=[],n=0;n<e.length;n+=4){var o=e[n],u=e.slice(n+1,n+4);u.push.apply(u,t);for(var i=0;i<o;++i)r.push.apply(r,u)}return r}function R(){var e=[0,0,0,0,150,0,30,0,0,0,150,0,30,150,0,30,0,0,30,0,0,30,30,0,100,0,0,30,30,0,100,30,0,100,0,0,30,60,0,30,90,0,67,60,0,30,90,0,67,90,0,67,60,0,0,0,30,30,0,30,0,150,30,0,150,30,30,0,30,30,150,30,30,0,30,100,0,30,30,30,30,30,30,30,100,0,30,100,30,30,30,60,30,67,60,30,30,90,30,30,90,30,67,60,30,67,90,30,0,0,0,100,0,0,100,0,30,0,0,0,100,0,30,0,0,30,100,0,0,100,30,0,100,30,30,100,0,0,100,30,30,100,0,30,30,30,0,30,30,30,100,30,30,30,30,0,100,30,30,100,30,0,30,30,0,30,60,30,30,30,30,30,30,0,30,60,0,30,60,30,30,60,0,67,60,30,30,60,30,30,60,0,67,60,0,67,60,30,67,60,0,67,90,30,67,60,30,67,60,0,67,90,0,67,90,30,30,90,0,30,90,30,67,90,30,30,90,0,67,90,30,67,90,0,30,90,0,30,150,30,30,90,30,30,90,0,30,150,0,30,150,30,0,150,0,0,150,30,30,150,30,0,150,0,30,150,30,30,150,0,0,0,0,0,0,30,0,150,30,0,0,0,0,150,30,0,150,0],t=M([18,0,0,1,18,0,0,-1,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,1,0,6,1,0,0,6,0,-1,0,6,1,0,0,6,0,-1,0,6,-1,0,0]),r=M([18,200,70,120,18,80,70,200,6,70,200,210,6,200,200,70,6,210,100,70,6,210,160,70,6,70,180,210,6,100,70,210,6,76,210,100,6,140,210,80,6,90,130,110,6,160,160,220],[255]),n=e.length/3,o={position:b(3,n),texcoord:b(2,n),normal:b(3,n),color:b(4,n,Uint8Array),indices:b(3,n/3,Uint16Array)};o.position.push(e),o.texcoord.push([.22,.19,.22,.79,.34,.19,.22,.79,.34,.79,.34,.19,.34,.19,.34,.31,.62,.19,.34,.31,.62,.31,.62,.19,.34,.43,.34,.55,.49,.43,.34,.55,.49,.55,.49,.43,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0]),o.normal.push(t),o.color.push(r);for(var u=0;u<n;++u)o.indices.push(u);return o}function P(e,t,r,n,o,u,i){if(o<=0)throw new Error("subdivisionDown must be > 0");var a=(i=i||1)-(u=u||0),c=2*(o+1)*4,l=b(3,c),s=b(3,c),y=b(2,c);function v(e,t,r){return e+(t-e)*r}function m(t,r,i,c,b,m){for(var p=0;p<=o;p++){var d=r/1,x=p/o,w=2*(d-.5),h=(u+x*a)*Math.PI,F=Math.sin(h),E=Math.cos(h),A=v(e,t,F),j=w*n,O=E*e,_=F*A;l.push(j,O,_);var S=f.add(f.multiply([0,F,E],i),c);s.push(S),y.push(d*b+m,x)}}for(var p=0;p<2;p++){var d=2*(p/1-.5);m(t,p,[1,1,1],[0,0,0],1,0),m(t,p,[0,0,0],[d,0,0],0,0),m(r,p,[1,1,1],[0,0,0],1,0),m(r,p,[0,0,0],[d,0,0],0,1)}var x=b(3,2*o*4,Uint16Array);function w(e,t){for(var r=0;r<o;++r)x.push(e+r+0,e+r+1,t+r+0),x.push(e+r+1,t+r+1,t+r+0)}var h=o+1;return w(0*h,4*h),w(5*h,7*h),w(6*h,2*h),w(3*h,1*h),{position:l,normal:s,texcoord:y,indices:x}}function T(e,t,r,n,o,u){return S(e,e,t,r,n,o,u)}function g(e,t,r,n,o,u){if(r<3)throw new Error("radialSubdivisions must be 3 or greater");if(n<3)throw new Error("verticalSubdivisions must be 3 or greater");o=o||0;for(var i=(u=u||2*Math.PI)-o,a=r+1,f=n+1,c=a*f,l=b(3,c),s=b(3,c),y=b(2,c),v=b(3,r*n*2,Uint16Array),m=0;m<f;++m)for(var p=m/n,d=p*Math.PI*2,x=Math.sin(d),w=e+x*t,h=Math.cos(d),F=h*t,E=0;E<a;++E){var A=E/r,j=o+A*i,O=Math.sin(j),_=Math.cos(j),S=O*w,M=_*w,R=O*x,P=_*x;l.push(S,F,M),s.push(R,h,P),y.push(A,1-p)}for(var T=0;T<n;++T)for(var g=0;g<r;++g){var z=1+g,U=1+T;v.push(a*T+g,a*U+g,a*T+z),v.push(a*U+g,a*U+z,a*T+z)}return{position:l,normal:s,texcoord:y,indices:v}}function z(e,t,r,n,o){if(t<3)throw new Error("divisions must be at least 3");o=o||1,n=n||0;for(var u=(t+1)*((r=r||1)+1),i=b(3,u),a=b(3,u),f=b(2,u),c=b(3,r*t*2,Uint16Array),l=0,s=e-n,y=t+1,v=0;v<=r;++v){for(var m=n+s*Math.pow(v/r,o),p=0;p<=t;++p){var d=2*Math.PI*p/t,x=m*Math.cos(d),w=m*Math.sin(d);if(i.push(x,0,w),a.push(0,1,0),f.push(1-p/t,v/r),v>0&&p!==t){var h=l+(p+1),F=l+p,E=l+p-y,A=l+(p+1)-y;c.push(h,F,E),c.push(h,E,A)}}l+=t+1}return{position:i,normal:a,texcoord:f,indices:c}}function U(e){return function(t){var r=e.apply(this,Array.prototype.slice.call(arguments,1));return o.createBuffersFromArrays(t,r)}}function C(e){return function(t){var r=e.apply(null,Array.prototype.slice.call(arguments,1));return o.createBufferInfoFromArrays(t,r)}}var k=["numComponents","size","type","normalize","stride","offset","attrib","name","attribName"];function W(e,t,r,n){n=n||0;for(var o=e.length,u=0;u<o;++u)t[r+u]=e[u]+n}function I(e,t){var r=s(e),n=new r.constructor(t),o=n;return r.numComponents&&r.numElements&&v(n,r.numComponents),e.data&&(o={data:n},u.copyNamedProperties(k,e,o)),o}var B=C(R);t.create3DFBufferInfo=B;var L=U(R);t.create3DFBuffers=L;var G=C(_);t.createCubeBufferInfo=G;var X=U(_);t.createCubeBuffers=X;var D=C(A);t.createPlaneBufferInfo=D;var N=U(A);t.createPlaneBuffers=N;var H=C(j);t.createSphereBufferInfo=H;var q=U(j);t.createSphereBuffers=q;var V=C(S);t.createTruncatedConeBufferInfo=V;var Y=U(S);t.createTruncatedConeBuffers=Y;var $=C(E);t.createXYQuadBufferInfo=$;var K=U(E);t.createXYQuadBuffers=K;var Z=C(P);t.createCrescentBufferInfo=Z;var J=U(P);t.createCrescentBuffers=J;var Q=C(T);t.createCylinderBufferInfo=Q;var ee=U(T);t.createCylinderBuffers=ee;var te=C(g);t.createTorusBufferInfo=te;var re=U(g);t.createTorusBuffers=re;var ne=C(z);t.createDiscBufferInfo=ne;var oe=U(z);t.createDiscBuffers=oe;var ue=Z;t.createCresentBufferInfo=ue;var ie=J;t.createCresentBuffers=ie;var ae=P;t.createCresentVertices=ae},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.__esModule=!0;var o={addExtensionsToContext:!0,getContext:!0,getWebGLContext:!0,resizeCanvasToDisplaySize:!0,setDefaults:!0,attributes:!0,textures:!0,utils:!0,draw:!0,framebuffers:!0,programs:!0,typedarrays:!0,vertexArrays:!0};t.addExtensionsToContext=h,t.getContext=function(e,t){return function(e,t){for(var r=["webgl2","webgl","experimental-webgl"],n=null,o=0;o<r.length;++o)if(n=e.getContext(r[o],t)){p.addExtensionsToContext&&h(n);break}return n}(e,t)},t.getWebGLContext=function(e,t){return function(e,t){for(var r=["webgl","experimental-webgl"],n=null,o=0;o<r.length;++o)if(n=e.getContext(r[o],t)){p.addExtensionsToContext&&h(n);break}return n}(e,t)},t.resizeCanvasToDisplaySize=function(e,t){t=t||1,t=Math.max(0,t);var r=e.clientWidth*t|0,n=e.clientHeight*t|0;if(e.width!==r||e.height!==n)return e.width=r,e.height=n,!0;return!1},t.setDefaults=function(e){a.copyExistingProperties(e,p),u.setAttributeDefaults_(e),i.setTextureDefaults_(e)},t.vertexArrays=t.typedarrays=t.programs=t.framebuffers=t.draw=t.utils=t.textures=t.attributes=void 0;var u=m(r(6));t.attributes=u,Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=u[e]))}));var i=m(r(7));t.textures=i,Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=i[e]))}));var a=m(r(0)),f=m(r(3));t.utils=f,Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=f[e]))}));var c=m(r(11));t.draw=c,Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=c[e]))}));var l=m(r(12));t.framebuffers=l,Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=l[e]))}));var s=m(r(4));t.programs=s,Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=s[e]))}));var y=m(r(1));t.typedarrays=y,Object.keys(y).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=y[e]))}));var v=m(r(13));function b(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return b=function(){return e},e}function m(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=b();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}t.vertexArrays=v,Object.keys(v).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=v[e]))}));var p={addExtensionsToContext:!0};var d=/^(.*?)_/;function x(e,t){f.glEnumToString(e,0);var r=e.getExtension(t);if(r){var n={},o=d.exec(t)[1],u="_"+o;for(var i in r){var c=r[i],l="function"==typeof c,s=l?o:u,y=i;i.endsWith(s)&&(y=i.substring(0,i.length-s.length)),void 0!==e[y]?l||e[y]===c||a.warn(y,e[y],c,i):l?e[y]=function(e){return function(){return e.apply(r,arguments)}}(c):(e[y]=c,n[y]=c)}n.constructor={name:r.constructor.name},f.glEnumToString(n,0)}return r}var w=["ANGLE_instanced_arrays","EXT_blend_minmax","EXT_color_buffer_float","EXT_color_buffer_half_float","EXT_disjoint_timer_query","EXT_disjoint_timer_query_webgl2","EXT_frag_depth","EXT_sRGB","EXT_shader_texture_lod","EXT_texture_filter_anisotropic","OES_element_index_uint","OES_standard_derivatives","OES_texture_float","OES_texture_float_linear","OES_texture_half_float","OES_texture_half_float_linear","OES_vertex_array_object","WEBGL_color_buffer_float","WEBGL_compressed_texture_atc","WEBGL_compressed_texture_etc1","WEBGL_compressed_texture_pvrtc","WEBGL_compressed_texture_s3tc","WEBGL_compressed_texture_s3tc_srgb","WEBGL_depth_texture","WEBGL_draw_buffers"];function h(e){for(var t=0;t<w.length;++t)x(e,w[t])}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.__esModule=!0,t.drawBufferInfo=i,t.drawObjectList=function(e,t){var r=null,n=null;t.forEach((function(t){if(!1!==t.active){var u=t.programInfo,a=t.vertexArrayInfo||t.bufferInfo,f=!1,c=void 0===t.type?4:t.type;u!==r&&(r=u,e.useProgram(u.program),f=!0),(f||a!==n)&&(n&&n.vertexArrayObject&&!a.vertexArrayObject&&e.bindVertexArray(null),n=a,o.setBuffersAndAttributes(e,u,a)),o.setUniforms(u,t.uniforms),i(e,a,c,t.count,t.offset,t.instanceCount)}})),n&&n.vertexArrayObject&&e.bindVertexArray(null)};var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(4));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e,t,r,n,o,u){r=void 0===r?4:r;var i=t.indices,a=t.elementType,f=void 0===n?t.numElements:n;o=void 0===o?0:o,a||i?void 0!==u?e.drawElementsInstanced(r,f,void 0===a?5123:t.elementType,o,u):e.drawElements(r,f,void 0===a?5123:t.elementType,o):void 0!==u?e.drawArraysInstanced(r,o,f,u):e.drawArrays(r,o,f)}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.__esModule=!0,t.bindFramebufferInfo=function(e,t,r){r=r||36160,t?(e.bindFramebuffer(r,t.framebuffer),e.viewport(0,0,t.width,t.height)):(e.bindFramebuffer(r,null),e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight))},t.createFramebufferInfo=function(e,t,r,n){var i=36160,a=e.createFramebuffer();e.bindFramebuffer(i,a),r=r||e.drawingBufferWidth,n=n||e.drawingBufferHeight;var c=0,m={framebuffer:a,attachments:[],width:r,height:n};return(t=t||y).forEach((function(t){var a=t.attachment,y=t.format,p=function(e){return v[e]}(y);if(p||(p=36064+c++),!a)if(function(e){return b[e]}(y))a=e.createRenderbuffer(),e.bindRenderbuffer(f,a),e.renderbufferStorage(f,y,r,n);else{var d=Object.assign({},t);d.width=r,d.height=n,void 0===d.auto&&(d.auto=!1,d.min=d.min||d.minMag||s,d.mag=d.mag||d.minMag||s,d.wrapS=d.wrapS||d.wrap||l,d.wrapT=d.wrapT||d.wrap||l),a=o.createTexture(e,d)}if(u.isRenderbuffer(e,a))e.framebufferRenderbuffer(i,p,f,a);else{if(!u.isTexture(e,a))throw new Error("unknown attachment type");void 0!==t.layer?e.framebufferTextureLayer(i,p,a,t.level||0,t.layer):e.framebufferTexture2D(i,p,t.target||3553,a,t.level||0)}m.attachments.push(a)})),m},t.resizeFramebufferInfo=function(e,t,r,n,i){n=n||e.drawingBufferWidth,i=i||e.drawingBufferHeight,t.width=n,t.height=i,(r=r||y).forEach((function(r,a){var c=t.attachments[a],l=r.format;if(u.isRenderbuffer(e,c))e.bindRenderbuffer(f,c),e.renderbufferStorage(f,l,n,i);else{if(!u.isTexture(e,c))throw new Error("unknown attachment type");o.resizeTexture(e,c,r,n,i)}}))};var o=a(r(7)),u=a(r(0));function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(r,u,a):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}var f=36161,c=34041,l=33071,s=9729,y=[{format:6408,type:5121,min:s,wrap:l},{format:c}],v={};v[34041]=33306,v[6401]=36128,v[36168]=36128,v[6402]=36096,v[33189]=36096;var b={};b[32854]=!0,b[32855]=!0,b[36194]=!0,b[34041]=!0,b[33189]=!0,b[6401]=!0,b[36168]=!0},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.__esModule=!0,t.createVertexArrayInfo=function(e,t,r){var n=e.createVertexArray();e.bindVertexArray(n),t.length||(t=[t]);return t.forEach((function(t){o.setBuffersAndAttributes(e,t,r)})),e.bindVertexArray(null),{numElements:r.numElements,elementType:r.elementType,vertexArrayObject:n}},t.createVAOAndSetAttributes=i,t.createVAOFromBufferInfo=function(e,t,r){return i(e,t.attribSetters||t,r.attribs,r.indices)};var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(4));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e,t,r,n){var u=e.createVertexArray();return e.bindVertexArray(u),o.setAttributes(t,r),n&&e.bindBuffer(34963,n),e.bindVertexArray(null),u}}])}));
/*
 * Copyright 2012, Gregg Tavares.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Gregg Tavares. nor the names of his
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Various 2d math functions.
 *
 * @module webgl-2d-math
 */
(function(root, factory) {  // eslint-disable-line
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.m3 = factory();
  }
}(this, function() {
  "use strict";

  /**
   * An array or typed array with 9 values.
   * @typedef {number[]|TypedArray} Matrix3
   * @memberOf module:webgl-2d-math
   */

  /**
   * Takes two Matrix3s, a and b, and computes the product in the order
   * that pre-composes b with a.  In other words, the matrix returned will
   * @param {module:webgl-2d-math.Matrix3} a A matrix.
   * @param {module:webgl-2d-math.Matrix3} b A matrix.
   * @return {module:webgl-2d-math.Matrix3} the result.
   * @memberOf module:webgl-2d-math
   */
  function multiply(a, b) {
    var a00 = a[0 * 3 + 0];
    var a01 = a[0 * 3 + 1];
    var a02 = a[0 * 3 + 2];
    var a10 = a[1 * 3 + 0];
    var a11 = a[1 * 3 + 1];
    var a12 = a[1 * 3 + 2];
    var a20 = a[2 * 3 + 0];
    var a21 = a[2 * 3 + 1];
    var a22 = a[2 * 3 + 2];
    var b00 = b[0 * 3 + 0];
    var b01 = b[0 * 3 + 1];
    var b02 = b[0 * 3 + 2];
    var b10 = b[1 * 3 + 0];
    var b11 = b[1 * 3 + 1];
    var b12 = b[1 * 3 + 2];
    var b20 = b[2 * 3 + 0];
    var b21 = b[2 * 3 + 1];
    var b22 = b[2 * 3 + 2];

    return [
      b00 * a00 + b01 * a10 + b02 * a20,
      b00 * a01 + b01 * a11 + b02 * a21,
      b00 * a02 + b01 * a12 + b02 * a22,
      b10 * a00 + b11 * a10 + b12 * a20,
      b10 * a01 + b11 * a11 + b12 * a21,
      b10 * a02 + b11 * a12 + b12 * a22,
      b20 * a00 + b21 * a10 + b22 * a20,
      b20 * a01 + b21 * a11 + b22 * a21,
      b20 * a02 + b21 * a12 + b22 * a22,
    ];
  }


  /**
   * Creates a 3x3 identity matrix
   * @return {module:webgl2-2d-math.Matrix3} an identity matrix
   */
  function identity() {
    return [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ];
  }

  /**
   * Creates a 2D projection matrix
   * @param {number} width width in pixels
   * @param {number} height height in pixels
   * @return {module:webgl-2d-math.Matrix3} a projection matrix that converts from pixels to clipspace with Y = 0 at the top.
   * @memberOf module:webgl-2d-math
   */
  function projection(width, height) {
    // Note: This matrix flips the Y axis so 0 is at the top.
    return [
      2 / width, 0, 0,
      0, -2 / height, 0,
      -1, 1, 1,
    ];
  }

  /**
   * Multiplies by a 2D projection matrix
   * @param {module:webgl-2d-math.Matrix3} the matrix to be multiplied
   * @param {number} width width in pixels
   * @param {number} height height in pixels
   * @return {module:webgl-2d-math.Matrix3} the result
   * @memberOf module:webgl-2d-math
   */
  function project(m, width, height) {
    return multiply(m, projection(width, height));
  }

  /**
   * Creates a 2D translation matrix
   * @param {number} tx amount to translate in x
   * @param {number} ty amount to translate in y
   * @return {module:webgl-2d-math.Matrix3} a translation matrix that translates by tx and ty.
   * @memberOf module:webgl-2d-math
   */
  function translation(tx, ty) {
    return [
      1, 0, 0,
      0, 1, 0,
      tx, ty, 1,
    ];
  }

  /**
   * Multiplies by a 2D translation matrix
   * @param {module:webgl-2d-math.Matrix3} the matrix to be multiplied
   * @param {number} tx amount to translate in x
   * @param {number} ty amount to translate in y
   * @return {module:webgl-2d-math.Matrix3} the result
   * @memberOf module:webgl-2d-math
   */
  function translate(m, tx, ty) {
    return multiply(m, translation(tx, ty));
  }

  /**
   * Creates a 2D rotation matrix
   * @param {number} angleInRadians amount to rotate in radians
   * @return {module:webgl-2d-math.Matrix3} a rotation matrix that rotates by angleInRadians
   * @memberOf module:webgl-2d-math
   */
  function rotation(angleInRadians) {
    var c = Math.cos(angleInRadians);
    var s = Math.sin(angleInRadians);
    return [
      c, -s, 0,
      s, c, 0,
      0, 0, 1,
    ];
  }

  /**
   * Multiplies by a 2D rotation matrix
   * @param {module:webgl-2d-math.Matrix3} the matrix to be multiplied
   * @param {number} angleInRadians amount to rotate in radians
   * @return {module:webgl-2d-math.Matrix3} the result
   * @memberOf module:webgl-2d-math
   */
  function rotate(m, angleInRadians) {
    return multiply(m, rotation(angleInRadians));
  }

  /**
   * Creates a 2D scaling matrix
   * @param {number} sx amount to scale in x
   * @param {number} sy amount to scale in y
   * @return {module:webgl-2d-math.Matrix3} a scale matrix that scales by sx and sy.
   * @memberOf module:webgl-2d-math
   */
  function scaling(sx, sy) {
    return [
      sx, 0, 0,
      0, sy, 0,
      0, 0, 1,
    ];
  }

  /**
   * Multiplies by a 2D scaling matrix
   * @param {module:webgl-2d-math.Matrix3} the matrix to be multiplied
   * @param {number} sx amount to scale in x
   * @param {number} sy amount to scale in y
   * @return {module:webgl-2d-math.Matrix3} the result
   * @memberOf module:webgl-2d-math
   */
  function scale(m, sx, sy) {
    return multiply(m, scaling(sx, sy));
  }

  function dot(x1, y1, x2, y2) {
    return x1 * x2 + y1 * y2;
  }

  function distance(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function normalize(x, y) {
    var l = distance(0, 0, x, y);
    if (l > 0.00001) {
      return [x / l, y / l];
    } else {
      return [0, 0];
    }
  }

  // i = incident
  // n = normal
  function reflect(ix, iy, nx, ny) {
    // I - 2.0 * dot(N, I) * N.
    var d = dot(nx, ny, ix, iy);
    return [
      ix - 2 * d * nx,
      iy - 2 * d * ny,
    ];
  }

  function radToDeg(r) {
    return r * 180 / Math.PI;
  }

  function degToRad(d) {
    return d * Math.PI / 180;
  }

  function transformPoint(m, v) {
    var v0 = v[0];
    var v1 = v[1];
    var d = v0 * m[0 * 3 + 2] + v1 * m[1 * 3 + 2] + m[2 * 3 + 2];
    return [
      (v0 * m[0 * 3 + 0] + v1 * m[1 * 3 + 0] + m[2 * 3 + 0]) / d,
      (v0 * m[0 * 3 + 1] + v1 * m[1 * 3 + 1] + m[2 * 3 + 1]) / d,
    ];
  }

  function inverse(m) {
    var t00 = m[1 * 3 + 1] * m[2 * 3 + 2] - m[1 * 3 + 2] * m[2 * 3 + 1];
    var t10 = m[0 * 3 + 1] * m[2 * 3 + 2] - m[0 * 3 + 2] * m[2 * 3 + 1];
    var t20 = m[0 * 3 + 1] * m[1 * 3 + 2] - m[0 * 3 + 2] * m[1 * 3 + 1];
    var d = 1.0 / (m[0 * 3 + 0] * t00 - m[1 * 3 + 0] * t10 + m[2 * 3 + 0] * t20);
    return [
       d * t00, -d * t10, d * t20,
      -d * (m[1 * 3 + 0] * m[2 * 3 + 2] - m[1 * 3 + 2] * m[2 * 3 + 0]),
       d * (m[0 * 3 + 0] * m[2 * 3 + 2] - m[0 * 3 + 2] * m[2 * 3 + 0]),
      -d * (m[0 * 3 + 0] * m[1 * 3 + 2] - m[0 * 3 + 2] * m[1 * 3 + 0]),
       d * (m[1 * 3 + 0] * m[2 * 3 + 1] - m[1 * 3 + 1] * m[2 * 3 + 0]),
      -d * (m[0 * 3 + 0] * m[2 * 3 + 1] - m[0 * 3 + 1] * m[2 * 3 + 0]),
       d * (m[0 * 3 + 0] * m[1 * 3 + 1] - m[0 * 3 + 1] * m[1 * 3 + 0]),
    ];
  }

  return {
    degToRad: degToRad,
    distance: distance,
    dot: dot,
    identity: identity,
    inverse: inverse,
    multiply: multiply,
    normalize: normalize,
    projection: projection,
    radToDeg: radToDeg,
    reflect: reflect,
    rotation: rotation,
    rotate: rotate,
    scaling: scaling,
    scale: scale,
    transformPoint: transformPoint,
    translation: translation,
    translate: translate,
    project: project,
  };

}));



var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            this.versionSearchString = data[i].subString;

            if (dataString.indexOf(data[i].subString) !== -1) {
                return data[i].identity;
            }
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index === -1) {
            return;
        }

        var rv = dataString.indexOf("rv:");
        if (this.versionSearchString === "Trident" && rv !== -1) {
            return parseFloat(dataString.substring(rv + 3));
        } else {
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        }
    },

    dataBrowser: [
        {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
        {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
        {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
        {string: navigator.userAgent, subString: "Opera", identity: "Opera"},
        {string: navigator.userAgent, subString: "OPR", identity: "Opera"},

        {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
        {string: navigator.userAgent, subString: "Safari", identity: "Safari"}
    ]
};

BrowserDetect.init();
//document.write("You are using <b>" + BrowserDetect.browser + "</b> with version <b>" + BrowserDetect.version + "</b>");

if ( BrowserDetect.browser == "MS Edge" || BrowserDetect.browser == "Explorer" ) {


    $("body").removeClass("loading").addClass("ie");


    $(".soc-icons__link[href^='https://vk.com/ivakhnenko_design'] img").attr("src", "img/vk.svg" );
    $(".soc-icons__link[href^='https://www.instagram.com/ivakhnenko_art/'] img").attr("src", "img/instagram.svg" );
    $(".about__slogan img").attr("src", "img/slogan.svg" );


    $('body').append("<div id='myModalBox' class='modal fade'><div class='modal-dialog'> <div class='modal-content'>" +
        "<div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'></button></div>  " +
        "  <div class='modal-body'> <img src='' class='modal__pic'> </div><h2 class='content__item-title'></h2><div class='content__item-text'></div> "+
        " </div> </div> </div> ");


    function popUpForIe (elem) {

        var parent = $(".grid");
        var listItem = $('.grid__item');


        var activeIndex = $(".grid__item").index(elem);

        var activePic = $(".content").find(".content__item").eq(activeIndex).find("img").attr("src");
        var activeTitle = $(".content").find(".content__item").eq(activeIndex).find(".content__item-title").html();
        var activeText = $(".content").find(".content__item").eq(activeIndex).find(".content__item-text").html();


        $('.modal__pic').attr('src', activePic);
        $("#myModalBox .content__item-title").html(activeTitle);
        $("#myModalBox .content__item-text").html(activeText);

        $("#myModalBox").modal('show');
    }

    $(".grid__item").click(function() {


        popUpForIe(this);

    });




}


if (!( BrowserDetect.browser == "MS Edge" || BrowserDetect.browser == "Explorer" )) {



    var scripts = ["./js/script.js",  "./js/demo.js"];

    for (index = 0; index < scripts.length; ++index) {
        var script = document.createElement('script');
        script.src = scripts[index];
        script.type='text/javascript';
        var done = false;
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                //promptForUserEntries();
            }
        };

        var allScripts = document.getElementsByTagName("script");

        var lastScript = allScripts[allScripts.length-1];

        document.body.insertBefore(script, lastScript);
    }



  //  loadJS("script.js")


//   //= script.js

//  //= masonry.pkgd.min.js

// //= charming.min.js
//  //= demo.js
}






$(function() {

    $(".js_scroll-link").click(function () {
        $('html, body').animate({scrollTop: $('a[name="' + this.hash.slice(1) + '"]').offset().top-100}, 500);
        return false;
    });
});


$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};



if (document.body.classList.contains('index')) {


var request = null;
var mouse = { x: 0, y: 0 };
var cx = window.innerWidth / 2;
var cy = window.innerHeight / 2;

$('body').mousemove(function(event) {

    mouse.x = event.pageX;
    mouse.y = event.pageY;

    if ($(".intro").isInViewport()) {
        cancelAnimationFrame(request);
        request = requestAnimationFrame(update);
    }
});

function update() {

    dx = mouse.x - cx;
    dy = mouse.y - cy;

    tiltx = (dy / cy);
    tilty = - (dx / cx);
    radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
    degree = (radius * 15);
    TweenLite.to(".intro__h1", 1, {transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)', ease:Power2.easeOut});
    TweenLite.to(".intro__btn-wrap", 1, {transform:'rotate3d(' + tiltx*1.2 + ', ' + tilty + ', 0, ' + degree + 'deg)', ease:Power2.easeOut});



}

$(window).resize(function() {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
});


$('.advantages__item').each(function(){

    var self = $(this);

    var waypoint = new Waypoint({
        element: self,
        handler: function(direction) {
        }
    });

});




// function if visible


function scrolledText(el){

    var currPosition = $(el).position().left;


    $(window).scroll(function (event) {

        if ($(".slogan__line").isInViewport()) {

            var current = $(window).scrollTop();
            var speed = 0.5;


            $(el).css({left: currPosition - current * speed + 'px'});

        } else {
            currentPosition = 0;

        }

    });

}


    scrolledText(".train");


    var animations = ["love", "stable", "draw", "clients", "edu"];
    var i, len = animations.length;

    var anim = [];

    for (i = 0; i < len; i++) {

        var elem = document.getElementById(animations[i]);
        var animData = {
            container: elem,
            renderer: "svg",
            loop: false,
            autoplay: false,
            rendererSettings: {
                progressiveLoad: false
            },
            path: 'assets/templates/pf-new/json/icon' + i + '/' + animations[i] + '.json',
            assetsPath: 'assets/templates/pf-new/json/icon' + i + '/images/'

        };

        anim.push(bodymovin.loadAnimation(animData));


    }


    if (window.innerWidth > 767) {

        $('.advantages__item').each(function () {

            var number = $(this).index();

            var waypoint = new Waypoint({
                element: $(this),
                handler: function (direction) {

                    if (direction == "down") {
                        anim[number].play();

                    }

                },
                offset: '80%'
            });


            var waypointBack = new Waypoint({
                element: $(this),
                handler: function (direction) {

                    if (direction == "up") {
                        anim[number].goToAndStop(0);

                    }

                },
                offset: '100%'
            });


        });
    }


    if (window.innerWidth > 991) {

        var animationImgScale = new Waypoint({
            element: $(".img--animation-resize"),
            handler: function (direction) {

                if (direction == "down") {
                    $(this.element).addClass("active");
                }

            },
            offset: "70%"
        });


        var animationImgScaleReverse = new Waypoint({
            element: $(".img--animation-resize"),
            handler: function (direction) {

                if (direction == "up") {
                    $(this.element).removeClass("active");
                }

            },
            offset: "100%"
        });
    }
}
//waypoints for index


if (window.innerWidth > 991) {

    if (document.body.classList.contains('index')) {


        var aboutTextAppear = new Waypoint({
            element: $(".about__text"),
            handler: function (direction) {

                TweenMax.fromTo(".about__text", 1, {
                    x: "+100",
                    opacity: "0",
                    ease: Power2.easeInOut
                }, {

                    x: "0",
                    opacity: "1",
                    ease: Power2.easeInOut


                });


            },
            offset: "80%"
        });

        var worksBtnAppear = new Waypoint({
            element: $(".works__btn-wrap"),
            handler: function (direction) {

                TweenMax.fromTo(".works__btn-wrap", 1, {
                    x: "+100",
                    opacity: "0",
                    ease: Power2.easeInOut
                }, {

                    x: "0",
                    opacity: "1",
                    ease: Power2.easeInOut


                });

            },
            offset: "90%"
        });

        var reviewsAppear = new Waypoint({
            element: $(".reviews .cards"),
            handler: function (direction) {

                TweenMax.fromTo(".card:first-child", 1, {
                    x: "-100",
                    opacity: "0",
                    ease: Power2.easeInOut
                }, {

                    x: "0",
                    opacity: "1",
                    ease: Power2.easeInOut


                });


                TweenMax.fromTo(".card:nth-child(2)", 1, {
                    y: "100",
                    opacity: "0",
                    ease: Power2.easeInOut
                }, {

                    y: "0",
                    opacity: "1",
                    ease: Power2.easeInOut

                });


                TweenMax.fromTo(".card:nth-child(3)", 1, {
                    x: "100",
                    opacity: "0",
                    ease: Power2.easeInOut
                }, {

                    x: "0",
                    opacity: "1",
                    ease: Power2.easeInOut

                });

            },
            offset: "80%"
        });


    }
}

//
// SmoothScroll for websites v1.4.10 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any  
// extension for browsers or native application
// without getting a written permission first.
//

(function () {
  
// Scroll Variables (tweakable)
var defaultOptions = {

    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 400, // [ms]
    stepSize         : 100, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 50,  // 50
    accelerationMax   : 3,   // 3

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,    // [px]

    // Other
    fixedBackground   : true, 
    excluded          : ''    
};

var options = defaultOptions;


// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var refreshSize;
var deltaBuffer = [];
var deltaBufferTimer;
var isMac = /^Mac/.test(navigator.platform);

var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
            pageup: 33, pagedown: 34, end: 35, home: 36 };
var arrowKeys = { 37: 1, 38: 1, 39: 1, 40: 1 };

/***********************************************
 * INITIALIZE
 ***********************************************/

/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {
    if (options.keyboardSupport) {
        addEvent('keydown', keydown);
    }
}

/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {
  
    if (initDone || !document.body) return;

    initDone = true;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight; 
    var scrollHeight = body.scrollHeight;
    
    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;
    
    initTest();

    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }

    /**
     * Safari 10 fixed it, Chrome fixed it in v45:
     * This fixes a bug where the areas left and right to 
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (isOldSafari &&
             scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight || 
             html.offsetHeight <= windowHeight)) {

        var fullPageElem = document.createElement('div');
        fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
                                     'top:0; left:0; right:0; height:' + 
                                      root.scrollHeight + 'px';
        document.body.appendChild(fullPageElem);
        
        // DOM changed (throttled) to fix height
        var pendingRefresh;
        refreshSize = function () {
            if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
            pendingRefresh = setTimeout(function () {
                if (isExcluded) return; // could be running after cleanup
                fullPageElem.style.height = '0';
                fullPageElem.style.height = root.scrollHeight + 'px';
                pendingRefresh = null;
            }, 500); // act rarely to stay fast
        };
  
        setTimeout(refreshSize, 10);

        addEvent('resize', refreshSize);

        // TODO: attributeFilter?
        var config = {
            attributes: true, 
            childList: true, 
            characterData: false 
            // subtree: true
        };

        observer = new MutationObserver(refreshSize);
        observer.observe(body, config);

        if (root.offsetHeight <= windowHeight) {
            var clearfix = document.createElement('div');   
            clearfix.style.clear = 'both';
            body.appendChild(clearfix);
        }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = 'scroll';
        html.style.backgroundAttachment = 'scroll';
    }
}

/**
 * Removes event listeners and other traces left on the page.
 */
function cleanup() {
    observer && observer.disconnect();
    removeEvent(wheelEvent, wheel);
    removeEvent('mousedown', mousedown);
    removeEvent('keydown', keydown);
    removeEvent('resize', refreshSize);
    removeEvent('load', init);
}


/************************************************
 * SCROLLING 
 ************************************************/
 
var que = [];
var pending = false;
var lastScroll = Date.now();

/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top) {
    
    directionCheck(left, top);

    if (options.accelerationMax != 1) {
        var now = Date.now();
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (50 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = Date.now();
    }          
    
    // push a scroll command
    que.push({
        x: left, 
        y: top, 
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99, 
        start: Date.now()
    });
        
    // don't act if there's a pending queue
    if (pending) {
        return;
    }  

    var scrollRoot = getScrollRoot();
    var isWindowScroll = (elem === scrollRoot || elem === document.body);
    
    // if we haven't already fixed the behavior, 
    // and it needs fixing for this sesh
    if (elem.$scrollBehavior == null && isScrollBehaviorSmooth(elem)) {
        elem.$scrollBehavior = elem.style.scrollBehavior;
        elem.style.scrollBehavior = 'auto';
    }

    var step = function (time) {
        
        var now = Date.now();
        var scrollX = 0;
        var scrollY = 0; 
    
        for (var i = 0; i < que.length; i++) {
            
            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);
            
            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;
            
            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }
            
            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;
            
            // add this to the total scrolling
            scrollX += x;
            scrollY += y;            
            
            // update last values
            item.lastX += x;
            item.lastY += y;
        
            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }           
        }

        // scroll left and top
        if (isWindowScroll) {
            window.scrollBy(scrollX, scrollY);
        } 
        else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop  += scrollY;                    
        }
        
        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }
        
        if (que.length) { 
            requestFrame(step, elem, (1000 / options.frameRate + 1)); 
        } else { 
            pending = false;
            // restore default behavior at the end of scrolling sesh
            if (elem.$scrollBehavior != null) {
                elem.style.scrollBehavior = elem.$scrollBehavior;
                elem.$scrollBehavior = null;
            }
        }
    };
    
    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}


/***********************************************
 * EVENTS
 ***********************************************/

/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {

    if (!initDone) {
        init();
    }
    
    var target = event.target;

    // leave early if default action is prevented   
    // or it's a zooming event with CTRL 
    if (event.defaultPrevented || event.ctrlKey) {
        return true;
    }
    
    // leave embedded content alone (flash & pdf)
    if (isNodeName(activeElement, 'embed') || 
       (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
        isNodeName(activeElement, 'object') ||
        target.shadowRoot) {
        return true;
    }

    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;
    
    if (isMac) {
        if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
            deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
        }
        if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
            deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
        }
    }
    
    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = -event.wheelDelta || 0;
    }

    // line based scrolling (Firefox mostly)
    if (event.deltaMode === 1) {
        deltaX *= 40;
        deltaY *= 40;
    }

    var overflowing = overflowingAncestor(target);

    // nothing to do if there's no element that's scrollable
    if (!overflowing) {
        // except Chrome iframes seem to eat wheel events, which we need to 
        // propagate up, if the iframe has nothing overflowing to scroll
        if (isFrame && isChrome)  {
            // change target to iframe element itself for the parent frame
            Object.defineProperty(event, "target", {value: window.frameElement});
            return parent.wheel(event);
        }
        return true;
    }
    
    // check if it's a touchpad scroll that should be ignored
    if (isTouchpad(deltaY)) {
        return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }
    
    scrollArray(overflowing, deltaX, deltaY);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {

    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                  (event.shiftKey && event.keyCode !== key.spacebar);
    
    // our own tracked active element could've been removed from the DOM
    if (!document.body.contains(activeElement)) {
        activeElement = document.activeElement;
    }

    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    // or inside interactive elements
    var inputNodeNames = /^(textarea|select|embed|object)$/i;
    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if ( event.defaultPrevented ||
         inputNodeNames.test(target.nodeName) ||
         isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
         isNodeName(activeElement, 'video') ||
         isInsideYoutubeVideo(event) ||
         target.isContentEditable || 
         modifier ) {
      return true;
    }

    // [spacebar] should trigger button press, leave it alone
    if ((isNodeName(target, 'button') ||
         isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
        event.keyCode === key.spacebar) {
      return true;
    }

    // [arrwow keys] on radio buttons should be left alone
    if (isNodeName(target, 'input') && target.type == 'radio' &&
        arrowKeys[event.keyCode])  {
      return true;
    }
    
    var shift, x = 0, y = 0;
    var overflowing = overflowingAncestor(activeElement);

    if (!overflowing) {
        // Chrome iframes seem to eat key events, which we need to 
        // propagate up, if the iframe has nothing overflowing to scroll
        return (isFrame && isChrome) ? parent.keydown(event) : true;
    }

    var clientHeight = overflowing.clientHeight; 

    if (overflowing == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;         
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            if (overflowing == document.body && document.scrollingElement)
                overflowing = document.scrollingElement;
            y = -overflowing.scrollTop;
            break;
        case key.end:
            var scroll = overflowing.scrollHeight - overflowing.scrollTop;
            var scrollRemaining = scroll - clientHeight;
            y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;            
        default:
            return true; // a key we don't care about
    }

    scrollArray(overflowing, x, y);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}


/***********************************************
 * OVERFLOW
 ***********************************************/

var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();

var cacheX = {}; // cleared out after a scrolling session
var cacheY = {}; // cleared out after a scrolling session
var clearCacheTimer;
var smoothBehaviorForElement = {};

//setInterval(function () { cache = {}; }, 10 * 1000);

function scheduleClearCache() {
    clearTimeout(clearCacheTimer);
    clearCacheTimer = setInterval(function () { 
        cacheX = cacheY = smoothBehaviorForElement = {}; 
    }, 1*1000);
}

function setCache(elems, overflowing, x) {
    var cache = x ? cacheX : cacheY;
    for (var i = elems.length; i--;)
        cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
}

function getCache(el, x) {
    return (x ? cacheX : cacheY)[uniqueID(el)];
}

//  (body)                (root)
//         | hidden | visible | scroll |  auto  |
// hidden  |   no   |    no   |   YES  |   YES  |
// visible |   no   |   YES   |   YES  |   YES  |
// scroll  |   no   |   YES   |   YES  |   YES  |
// auto    |   no   |   YES   |   YES  |   YES  |

function overflowingAncestor(el) {
    var elems = [];
    var body = document.body;
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = getCache(el, false);
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
            var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
            if (isFrame && isContentOverflowing(root) || 
               !isFrame && isOverflowCSS) {
                return setCache(elems, getScrollRoot()); 
            }
        } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
            return setCache(elems, el);
        }
    } while ((el = el.parentElement));
}

function isContentOverflowing(el) {
    return (el.clientHeight + 10 < el.scrollHeight);
}

// typically for <body> and <html>
function overflowNotHidden(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow !== 'hidden');
}

// for all other elements
function overflowAutoOrScroll(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow === 'scroll' || overflow === 'auto');
}

// for all other elements
function isScrollBehaviorSmooth(el) {
    var id = uniqueID(el);
    if (smoothBehaviorForElement[id] == null) {
        var scrollBehavior = getComputedStyle(el, '')['scroll-behavior'];
        smoothBehaviorForElement[id] = ('smooth' == scrollBehavior);
    }
    return smoothBehaviorForElement[id];
}


/***********************************************
 * HELPERS
 ***********************************************/

function addEvent(type, fn, arg) {
    window.addEventListener(type, fn, arg || false);
}

function removeEvent(type, fn, arg) {
    window.removeEventListener(type, fn, arg || false);  
}

function isNodeName(el, tag) {
    return el && (el.nodeName||'').toLowerCase() === tag.toLowerCase();
}

function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}

if (window.localStorage && localStorage.SS_deltaBuffer) {
    try { // #46 Safari throws in private browsing for localStorage 
        deltaBuffer = localStorage.SS_deltaBuffer.split(',');
    } catch (e) { } 
}

function isTouchpad(deltaY) {
    if (!deltaY) return;
    if (!deltaBuffer.length) {
        deltaBuffer = [deltaY, deltaY, deltaY];
    }
    deltaY = Math.abs(deltaY);
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    deltaBufferTimer = setTimeout(function () {
        try { // #46 Safari throws in private browsing for localStorage
            localStorage.SS_deltaBuffer = deltaBuffer.join(',');
        } catch (e) { }  
    }, 1000);
    var dpiScaledWheelDelta = deltaY > 120 && allDeltasDivisableBy(deltaY); // win64 
    var tp = !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100) && !dpiScaledWheelDelta;
    if (deltaY < 50) return true;
    return tp;
} 

function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}

function allDeltasDivisableBy(divisor) {
    return (isDivisible(deltaBuffer[0], divisor) &&
            isDivisible(deltaBuffer[1], divisor) &&
            isDivisible(deltaBuffer[2], divisor));
}

function isInsideYoutubeVideo(event) {
    var elem = event.target;
    var isControl = false;
    if (document.URL.indexOf ('www.youtube.com/watch') != -1) {
        do {
            isControl = (elem.classList && 
                         elem.classList.contains('html5-video-controls'));
            if (isControl) break;
        } while ((elem = elem.parentNode));
    }
    return isControl;
}

var requestFrame = (function () {
      return (window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    ||
              function (callback, element, delay) {
                 window.setTimeout(callback, delay || (1000/60));
             });
})();

var MutationObserver = (window.MutationObserver || 
                        window.WebKitMutationObserver ||
                        window.MozMutationObserver);  

var getScrollRoot = (function() {
  var SCROLL_ROOT = document.scrollingElement;
  return function() {
    if (!SCROLL_ROOT) {
      var dummy = document.createElement('div');
      dummy.style.cssText = 'height:10000px;width:1px;';
      document.body.appendChild(dummy);
      var bodyScrollTop  = document.body.scrollTop;
      var docElScrollTop = document.documentElement.scrollTop;
      window.scrollBy(0, 3);
      if (document.body.scrollTop != bodyScrollTop)
        (SCROLL_ROOT = document.body);
      else 
        (SCROLL_ROOT = document.documentElement);
      window.scrollBy(0, -3);
      document.body.removeChild(dummy);
    }
    return SCROLL_ROOT;
  };
})();


/***********************************************
 * PULSE (by Michael Herf)
 ***********************************************/
 
/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}

function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}


/***********************************************
 * FIRST RUN
 ***********************************************/

var userAgent = window.navigator.userAgent;
var isEdge    = /Edge/.test(userAgent); // thank you MS
var isChrome  = /chrome/i.test(userAgent) && !isEdge; 
var isSafari  = /safari/i.test(userAgent) && !isEdge; 
var isMobile  = /mobile/i.test(userAgent);
var isIEWin7  = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () {
            supportsPassive = true;
        } 
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'; 

if (wheelEvent && isEnabledForBrowser) {
    addEvent(wheelEvent, wheel, wheelOpt);
    addEvent('mousedown', mousedown);
    addEvent('load', init);
}


/***********************************************
 * PUBLIC INTERFACE
 ***********************************************/

function SmoothScroll(optionsToSet) {
    for (var key in optionsToSet)
        if (defaultOptions.hasOwnProperty(key)) 
            options[key] = optionsToSet[key];
}
SmoothScroll.destroy = cleanup;

if (window.SmoothScrollOptions) // async API
    SmoothScroll(window.SmoothScrollOptions);

if (typeof define === 'function' && define.amd)
    define(function() {
        return SmoothScroll;
    });
else if ('object' == typeof exports)
    module.exports = SmoothScroll;
else
    window.SmoothScroll = SmoothScroll;

})();