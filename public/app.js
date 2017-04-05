webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component__["a"]; });
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(53);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * Base class for every Material component in this package
 * NOTE: every component should add a ref by the name of `control` to its root dom for autoInit Properties
 *
 * @export
 * @class MaterialComponent
 * @extends {Component}
 */

var MaterialComponent = function (_Component) {
	_inherits(MaterialComponent, _Component);

	function MaterialComponent() {
		_classCallCheck(this, MaterialComponent);

		// Attributes inside this array will be check for boolean value true
		// and will be converted to mdc classes
		var _this = _possibleConstructorReturn(this, (MaterialComponent.__proto__ || Object.getPrototypeOf(MaterialComponent)).call(this));

		_this._mdcProps = [];
		// This will again be used to add apt classname to the component
		_this.componentName = "";
		// The final class name given to the dom
		_this.classText = "";
		return _this;
	}

	_createClass(MaterialComponent, [{
		key: "attachRipple",
		value: function attachRipple() {
			if (this.props.ripple && this.control) {
				__WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].attachTo(this.control);
			}
		}
		// Build the className

	}, {
		key: "buildClassName",
		value: function buildClassName(props) {
			this.classText = "mdc-" + this.componentName;
			for (var propKey in this.props) {
				if (this.props.hasOwnProperty(propKey)) {
					var prop = this.props[propKey];
					if (typeof prop === "boolean" && prop) {
						if (this._mdcProps.indexOf(propKey) !== -1) {
							this.classText += " mdc-" + this.componentName + "--" + propKey;
						}
					}
				}
			}
		}
	}, {
		key: "getClassName",
		value: function getClassName(element) {
			if (element && element.attributes.className) {
				return this.classText + " " + element.attributes.className;
			}
			return this.classText;
		}
	}, {
		key: "getAutoInitNames",
		value: function getAutoInitNames() {
			return this.autoInitText;
		}
		// Components must implement this method for their specific DOM structure

	}, {
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"div",
				props,
				props.children
			);
		}
	}, {
		key: "render",
		value: function render() {
			this.buildClassName();
			// Fetch a VNode
			var element = this.materialDom(this.props);
			var autoInits = this.getAutoInitNames();
			// Fix for className
			element.attributes.class = this.getClassName(element);
			// Clean this shit of proxy attributes
			this._mdcProps.forEach(function (prop) {
				delete element.attributes[prop];
			});
			return element;
		}
	}]);

	return MaterialComponent;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MaterialComponent);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCorrectEventName;
/* unused harmony export getCorrectPropertyName */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var eventTypeMap = {
  animationstart: {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart'
  },
  animationend: {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd'
  },
  animationiteration: {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration'
  },
  transitionend: {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd'
  }
};

var cssPropertyMap = {
  animation: {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  transform: {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  transition: {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

function hasProperShape(windowObj) {
  return windowObj.document !== undefined && typeof windowObj.document.createElement === 'function';
}

function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

// If 'animation' or 'transition' exist as style property, webkit prefix isn't necessary. Since we are unable to
// see the event types on the element, we must rely on the corresponding style properties.
function getJavaScriptEventName(eventType, map, el) {
  switch (eventType) {
    case 'animationstart':
    case 'animationend':
    case 'animationiteration':
      return 'animation' in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    case 'transitionend':
      return 'transition' in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    default:
      return map[eventType].noPrefix;
  }
}

// Helper function to determine browser prefix for CSS3 animation events
// and property names
//
// Parameters:
// windowObject: Object -- Contains Document with a `createElement()` method
// eventType: string -- The type of animation
//
// returns the value of the event as a string, prefixed if necessary.
// If proper arguments are not supplied, this function will return
// the property or event type without webkit prefix.
//
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj.document.createElement('div');
  var eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.
//
// Parameters:
// windowObject: Object -- Contains Document with a `createElement()` method
// eventType: string -- The type of animation
//
// returns the value of the event as a string, prefixed if necessary.
// If proper arguments are not supplied, this function will return
// the property or event type without webkit prefix.
//
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 *  @prop dense = false
 *  @prop raised = false
 *  @prop compact = false
 *  @prop primary = false
 *  @prop accent = false
 *  @prop disabled = false
 */

var Button = function (_MaterialComponent) {
	_inherits(Button, _MaterialComponent);

	function Button() {
		_classCallCheck(this, Button);

		var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

		_this.componentName = "button";
		_this._mdcProps = ["dense", "raised", "compact", "primary", "accent"];
		return _this;
	}

	_createClass(Button, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), "attachRipple", this).call(this);
		}
	}, {
		key: "materialDom",
		value: function materialDom(props) {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"button",
				_extends({
					ref: function ref(control) {
						_this2.control = control;
					}
				}, props),
				this.props.children
			);
		}
	}]);

	return Button;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["d"] = animateWithClass;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNormalizedEventCoords;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function supportsCssVariables(windowObj) {
  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');
  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

function animateWithClass(rippleAdapter, cls, endEvent) {
  var cancelled = false;
  var cancel = function cancel() {
    if (cancelled) {
      return;
    }
    cancelled = true;
    rippleAdapter.removeClass(cls);
    rippleAdapter.deregisterInteractionHandler(endEvent, cancel);
  };
  rippleAdapter.registerInteractionHandler(endEvent, cancel);
  rippleAdapter.addClass(cls);
  return cancel;
}

function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchend') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @prop dense = false
 * @prop two-line = false
 * @prop interactive = false
 */

var List = function (_MaterialComponent) {
	_inherits(List, _MaterialComponent);

	function List() {
		_classCallCheck(this, List);

		var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));

		_this.componentName = "list";
		_this._mdcProps = ["dense", "two-line"];
		return _this;
	}

	_createClass(List, [{
		key: "materialDom",
		value: function materialDom(props) {
			var _this2 = this;

			if (props.interactive) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"nav",
					{ ref: function ref(control) {
							return _this2.control = control;
						} },
					props.children
				);
			}

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"ul",
				_extends({}, props, { ref: function ref(control) {
						return _this2.control = control;
					} }),
				props.children
			);
		}
	}]);

	return List;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ListItem = function (_MaterialComponent2) {
	_inherits(ListItem, _MaterialComponent2);

	function ListItem() {
		_classCallCheck(this, ListItem);

		var _this3 = _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this));

		_this3.componentName = "list-item";
		return _this3;
	}

	_createClass(ListItem, [{
		key: "materialDom",
		value: function materialDom(props) {
			var _this4 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"li",
				_extends({ role: "option" }, props, { ref: function ref(control) {
						return _this4.control = control;
					} }),
				props.children
			);
		}
	}]);

	return ListItem;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var LinkItem = function (_MaterialComponent3) {
	_inherits(LinkItem, _MaterialComponent3);

	function LinkItem() {
		_classCallCheck(this, LinkItem);

		var _this5 = _possibleConstructorReturn(this, (LinkItem.__proto__ || Object.getPrototypeOf(LinkItem)).call(this));

		_this5.componentName = "list-item";
		return _this5;
	}

	_createClass(LinkItem, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_get(LinkItem.prototype.__proto__ || Object.getPrototypeOf(LinkItem.prototype), "attachRipple", this).call(this);
		}
	}, {
		key: "materialDom",
		value: function materialDom(props) {
			var _this6 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"a",
				_extends({ role: "option" }, props, { ref: function ref(control) {
						return _this6.control = control;
					} }),
				props.children
			);
		}
	}]);

	return LinkItem;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop start-detail = true
 * @prop end-detail = false
 */


var ListItemIcon = function (_MaterialComponent4) {
	_inherits(ListItemIcon, _MaterialComponent4);

	function ListItemIcon() {
		_classCallCheck(this, ListItemIcon);

		var _this7 = _possibleConstructorReturn(this, (ListItemIcon.__proto__ || Object.getPrototypeOf(ListItemIcon)).call(this));

		_this7.componentName = "mdc-list-item__icon";
		return _this7;
	}

	_createClass(ListItemIcon, [{
		key: "materialDom",
		value: function materialDom(props) {
			var className = 'material-icons ';
			// default behavior
			props['start-detail'] = props['start-detail'] || true;

			// setting class names mutually exclusive
			if (props['end-detail']) {
				className += 'mdc-list-item__end-detail';
			} else if (props['start-detail']) {
				className += 'mdc-list-item__start-detail';
			}
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"i",
				_extends({ className: className, "aria-hidden": "true" }, props),
				props.children
			);
		}
	}]);

	return ListItemIcon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

List.Item = ListItem;
List.LinkItem = LinkItem;
List.ItemIcon = ListItemIcon;

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }
  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }
  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }
  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }
  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCFoundation);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["d"] = animateWithClass;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNormalizedEventCoords;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function supportsCssVariables(windowObj) {
  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');
  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

function animateWithClass(rippleAdapter, cls, endEvent) {
  var cancelled = false;
  var cancel = function cancel() {
    if (cancelled) {
      return;
    }
    cancelled = true;
    rippleAdapter.removeClass(cls);
    rippleAdapter.deregisterInteractionHandler(endEvent, cancel);
  };
  rippleAdapter.registerInteractionHandler(endEvent, cancel);
  rippleAdapter.addClass(cls);
  return cancel;
}

function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchend') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["d"] = animateWithClass;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNormalizedEventCoords;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function supportsCssVariables(windowObj) {
  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');
  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

function animateWithClass(rippleAdapter, cls, endEvent) {
  var cancelled = false;
  var cancel = function cancel() {
    if (cancelled) {
      return;
    }
    cancelled = true;
    rippleAdapter.removeClass(cls);
    rippleAdapter.deregisterInteractionHandler(endEvent, cancel);
  };
  rippleAdapter.registerInteractionHandler(endEvent, cancel);
  rippleAdapter.addClass(cls);
  return cancel;
}

function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchend') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = supportsCssVariables;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMatchesProperty;
/* harmony export (immutable) */ __webpack_exports__["c"] = getNormalizedEventCoords;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function supportsCssVariables(windowObj) {
  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');
  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @prop mini = false
 * @prop plain = false
 */

var FormField = function (_MaterialComponent) {
	_inherits(FormField, _MaterialComponent);

	function FormField() {
		_classCallCheck(this, FormField);

		var _this = _possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).call(this));

		_this.componentName = "form-field";
		_this._mdcProps = ["align-end"];
		return _this;
	}

	_createClass(FormField, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"div",
				props,
				props.children
			);
		}
	}]);

	return FormField;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (FormField);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @prop disabled = false
 */

var Icon = function (_MaterialComponent) {
	_inherits(Icon, _MaterialComponent);

	function Icon() {
		_classCallCheck(this, Icon);

		var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this));

		_this.componentName = "icon";
		return _this;
	}

	_createClass(Icon, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"i",
				_extends({}, props, { className: "material-icons" }),
				props.children
			);
		}
	}]);

	return Icon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Icon__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ButtonsPage_ButtonsPage_jsx__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FabPage_FabPage_jsx__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CheckboxPage_CheckboxPage_jsx__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SwitchPage_SwitchPage_jsx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DialogPage_DialogPage_jsx__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ElevationPage_ElevationPage_jsx__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__RadioPage_RadioPage_jsx__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routie__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__routie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_preact_material_components_Icon_style_css__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_preact_material_components_Icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_preact_material_components_Icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_preact_material_components_Toolbar_style_css__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_preact_material_components_Toolbar_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_preact_material_components_Toolbar_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_preact_material_components_Drawer_style_css__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_preact_material_components_Drawer_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_preact_material_components_Drawer_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_preact_material_components_List_style_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_preact_material_components_List_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_preact_material_components_List_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Home_css__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__Home_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			__WEBPACK_IMPORTED_MODULE_12__routie___default()('/', function (component) {
				_this2.setState({
					component: null,
					toolbarTitle: ""
				});
			});
			__WEBPACK_IMPORTED_MODULE_12__routie___default()('/component/:name', function (component) {
				_this2.setState({
					component: component,
					toolbarTitle: component
				});
			});
		}
	}, {
		key: 'closeDrawer',
		value: function closeDrawer() {
			this.drawer.MDComponent.open = false;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'home' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: this.state.component ? "hero collapsed" : "hero" },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */],
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */].Row,
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */].Section,
								{ 'align-start': true },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */].Icon,
									{ href: '#', onClick: function onClick(e) {
											e.preventDefault();
											_this3.drawer.MDComponent.open = true;
										} },
									'menu'
								),
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Toolbar__["a" /* default */].Title,
									null,
									this.state.toolbarTitle
								)
							)
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'svg',
						{ width: '200', height: '200', xmlns: 'http://www.w3.org/2000/svg', preserveAspectRatio: 'xMinYMid' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'g',
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'title',
								null,
								'background'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('rect', { fill: 'none', id: 'canvas_background', height: '202', width: '202', y: '-1', x: '-1' })
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'g',
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'title',
								null,
								'Layer 1'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { stroke: '#673ab8', id: 'svg_19', fill: '#673ab8', d: 'm100,6.87844l83.36915,46.56078l0,93.12156l-83.36915,46.56078l-83.36914,-46.56078l0,-93.12156l83.36914,-46.56078z' }),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'g',
								{ id: 'svg_34' },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									'g',
									{ stroke: 'null', id: 'svg_5' },
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('circle', { stroke: 'null', id: 'svg_1', r: '56.999668', cy: '99.999997', cx: '99.333339', 'class': 'st0' }),
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { stroke: 'null', id: 'svg_2', d: 'm59.433574,60.100231l79.799535,0l0,79.799535l-79.799535,0l0,-79.799535z', 'class': 'st1' }),
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { stroke: 'null', id: 'svg_3', d: 'm139.233109,60.100231l-39.899768,79.799535l-39.899768,-79.799535l79.799535,0z', 'class': 'st2' }),
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('path', { stroke: 'null', id: 'svg_4', d: 'm42.333671,43.000329l113.999336,0l0,113.999336l-113.999336,0l0,-113.999336z', 'class': 'st3' })
								),
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('ellipse', { ry: '1.999985', rx: '1.999985', id: 'svg_25', cy: '93.333385', cx: '99.333336', 'stroke-width': 'null', stroke: 'null', fill: '#673ab8' })
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								'g',
								{ stroke: 'null', id: 'svg_36' },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('ellipse', { stroke: '#673ab8', transform: 'matrix(0.17321515449627276,0.17321515449627273,-0.17321515449627273,0.17321515449627276,63.46362017579341,27.139604895916065) ', ry: '20.957719', rx: '75.190925', id: 'svg_32', cy: '89.457308', cx: '296.539126', 'fill-opacity': 'null', 'stroke-width': '5', fill: 'none' }),
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('ellipse', { stroke: '#673ab8', transform: 'matrix(0.17321515449627276,-0.17321515449627273,0.17321515449627273,0.17321515449627276,28.182048694186207,62.16614021567621) ', ry: '20.957719', rx: '75.190925', id: 'svg_35', cy: '297.275314', cx: '113.492909', 'fill-opacity': 'null', 'stroke-width': '5', fill: 'none' })
							)
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						{ className: 'mdc-typography--display2 name' },
						'preact-material-components'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].TemporaryDrawer,
					{ ref: function ref(drawer) {
							_this3.drawer = drawer;
						} },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].TemporaryDrawerHeader,
						{ className: 'mdc-theme--primary-bg' },
						'Components'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Drawer__["a" /* default */].TemporaryDrawerContent,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */],
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].LinkItem,
								{ onClick: function onClick() {
										__WEBPACK_IMPORTED_MODULE_12__routie___default()('/');
										_this3.closeDrawer();
									} },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'home'
								),
								'Home'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].LinkItem,
								{ onClick: function onClick() {
										__WEBPACK_IMPORTED_MODULE_12__routie___default()('/component/button');
										_this3.closeDrawer();
									} },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Button'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Card'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].LinkItem,
								{ onClick: function onClick() {
										__WEBPACK_IMPORTED_MODULE_12__routie___default()('/component/checkbox');
										_this3.closeDrawer();
									} },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Checkbox'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].LinkItem,
								{ onClick: function onClick() {
										__WEBPACK_IMPORTED_MODULE_12__routie___default()('/component/dialog');
										_this3.closeDrawer();
									} },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Dialog'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Drawer'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].LinkItem,
								{ onClick: function onClick() {
										__WEBPACK_IMPORTED_MODULE_12__routie___default()('/component/elevation');
										_this3.closeDrawer();
									} },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Elevation'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].LinkItem,
								{ onClick: function onClick() {
										__WEBPACK_IMPORTED_MODULE_12__routie___default()('/component/fab');
										_this3.closeDrawer();
									} },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Fab'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'FormField'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Icon'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'IconToggle'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'List'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].LinkItem,
								{ onClick: function onClick() {
										__WEBPACK_IMPORTED_MODULE_12__routie___default()('/component/radio');
										_this3.closeDrawer();
									} },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Radio'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Select'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Snackbar'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].LinkItem,
								{ onClick: function onClick() {
										__WEBPACK_IMPORTED_MODULE_12__routie___default()('/component/switch');
										_this3.closeDrawer();
									} },
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Switch'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Textfield'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].Item,
								null,
								__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
									__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List__["a" /* default */].ItemIcon,
									null,
									'code'
								),
								'Toolbar'
							)
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'content' },
					this.state.component === 'button' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5__ButtonsPage_ButtonsPage_jsx__["a" /* default */], null),
					this.state.component === 'fab' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6__FabPage_FabPage_jsx__["a" /* default */], null),
					this.state.component === 'checkbox' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_7__CheckboxPage_CheckboxPage_jsx__["a" /* default */], null),
					this.state.component === 'switch' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_8__SwitchPage_SwitchPage_jsx__["a" /* default */], null),
					this.state.component === 'dialog' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_9__DialogPage_DialogPage_jsx__["a" /* default */], null),
					this.state.component === 'elevation' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_10__ElevationPage_ElevationPage_jsx__["a" /* default */], null),
					this.state.component === 'radio' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_11__RadioPage_RadioPage_jsx__["a" /* default */], null)
				)
			);
		}
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button_style_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ButtonsPage_css__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ButtonsPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ButtonsPage_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ButtonsPage = function (_Component) {
	_inherits(ButtonsPage, _Component);

	function ButtonsPage() {
		_classCallCheck(this, ButtonsPage);

		return _possibleConstructorReturn(this, (ButtonsPage.__proto__ || Object.getPrototypeOf(ButtonsPage)).apply(this, arguments));
	}

	_createClass(ButtonsPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-buttons' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Props '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'ul',
					{ className: 'props' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'ripple'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds riple effect to the button'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'accent'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds accent colors to the button'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'primary'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds primary colors to the button'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'dense'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds dense padding to the button'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'compact'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds compact padding to the button'
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Flats '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					null,
					'Flat button without ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ ripple: true },
					'Flat button with ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ accent: true },
					'Accented Flat button'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ dense: true },
					'Dense Flat button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ compact: true },
					'Compact Flat button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ primary: true },
					'Primary Flat button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Raised '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true },
					'Raised button without ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true, ripple: true },
					'Raised button with ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true, accent: true },
					'Accented Raised button'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true, dense: true },
					'Dense Raised button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true, compact: true },
					'Compact Raised button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ raised: true, primary: true },
					'Primary Raised button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Raised '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true },
					'Disabled button without ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true, ripple: true },
					'Disabled button with ripple'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true, accent: true },
					'Accented Disabled button'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true, dense: true },
					'Dense Disabled button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true, compact: true },
					'Compact Disabled button '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Button__["a" /* default */],
					{ disabled: true, primary: true },
					'Primary Disabled button '
				)
			);
		}
	}]);

	return ButtonsPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ButtonsPage);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Checkbox__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_FormField__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_Button_style_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_Button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_preact_material_components_Button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_preact_material_components_Checkbox_style_css__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_preact_material_components_Checkbox_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_preact_material_components_Checkbox_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CheckboxPage_css__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CheckboxPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__CheckboxPage_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var CheckboxPage = function (_Component) {
	_inherits(CheckboxPage, _Component);

	function CheckboxPage() {
		_classCallCheck(this, CheckboxPage);

		return _possibleConstructorReturn(this, (CheckboxPage.__proto__ || Object.getPrototypeOf(CheckboxPage)).apply(this, arguments));
	}

	_createClass(CheckboxPage, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-checkbox' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Props '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body2' },
					'none'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_3_preact_material_components_FormField__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Checkbox__["a" /* default */], { id: 'basic-checkbox-label', ref: function ref(cb) {
							_this2.cb = cb;
						} }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'label',
						{ 'for': 'basic-checkbox', id: 'basic-checkbox-label' },
						'This is my checkbox'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__["a" /* default */],
					{ raised: true, onClick: function onClick() {
							_this2.cb.MDComponent.indeterminate = true;
						} },
					'Make indeterminate'
				)
			);
		}
	}]);

	return CheckboxPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (CheckboxPage);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_List_style_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_List_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_preact_material_components_List_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_preact_material_components_Button_style_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_preact_material_components_Button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_preact_material_components_Button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_preact_material_components_Dialog_style_css__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_preact_material_components_Dialog_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_preact_material_components_Dialog_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DialogPage_css__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DialogPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__DialogPage_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var DialogPage = function (_Component) {
	_inherits(DialogPage, _Component);

	function DialogPage() {
		_classCallCheck(this, DialogPage);

		return _possibleConstructorReturn(this, (DialogPage.__proto__ || Object.getPrototypeOf(DialogPage)).apply(this, arguments));
	}

	_createClass(DialogPage, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-dialog' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Props '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body1' },
					'none'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__["a" /* default */],
					{ primary: true, raised: true, onClick: function onClick() {
							_this2.normalDlg.MDComponent.show();
						} },
					'Show Dialog'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Button__["a" /* default */],
					{ primary: true, raised: true, onClick: function onClick() {
							_this2.scrollingDlg.MDComponent.show();
						} },
					'Show Scrollable Dialog'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */],
					{ ref: function ref(normalDlg) {
							_this2.normalDlg = normalDlg;
						} },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Header,
						null,
						'Use Google\'s location service?'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Body,
						null,
						'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Footer,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].FooterButton,
							{ cancel: true },
							'Decline'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].FooterButton,
							{ accept: true },
							'Accept'
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */],
					{ ref: function ref(scrollingDlg) {
							_this2.scrollingDlg = scrollingDlg;
						} },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Header,
						null,
						'Scroll for me ;)'
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Body,
						{ scrollable: true },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */],
							null,
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */].Item,
								null,
								'Item 1'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */].Item,
								null,
								'Item 2'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */].Item,
								null,
								'Item 3'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */].Item,
								null,
								'Item 4'
							),
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_3_preact_material_components_List__["a" /* default */].Item,
								null,
								'Item 5'
							)
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].Footer,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].FooterButton,
							{ cancel: true },
							'Decline'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Dialog__["a" /* default */].FooterButton,
							{ accept: true },
							'Accept'
						)
					)
				)
			);
		}
	}]);

	return DialogPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (DialogPage);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Elevation_style_css__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Elevation_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Elevation_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ElevationPage_css__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ElevationPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ElevationPage_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ElevationPage = function (_Component) {
	_inherits(ElevationPage, _Component);

	function ElevationPage() {
		_classCallCheck(this, ElevationPage);

		return _possibleConstructorReturn(this, (ElevationPage.__proto__ || Object.getPrototypeOf(ElevationPage)).call(this));
	}

	_createClass(ElevationPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-elevation' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Props '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'ul',
					{ className: 'props' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'z1..z25'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds height effect to the container'
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
					{ z0: true },
					'Z0'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
					{ z1: true },
					'Z1'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
					{ z2: true },
					'Z2'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
					{ z3: true },
					'Z3'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Elevation__["a" /* default */],
					{ z4: true },
					'Z4'
				)
			);
		}
	}]);

	return ElevationPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ElevationPage);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Fab_style_css__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Fab_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Fab_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FabPage_css__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FabPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__FabPage_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var FabPage = function (_Component) {
	_inherits(FabPage, _Component);

	function FabPage() {
		_classCallCheck(this, FabPage);

		return _possibleConstructorReturn(this, (FabPage.__proto__ || Object.getPrototypeOf(FabPage)).apply(this, arguments));
	}

	_createClass(FabPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-fab' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Props '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'ul',
					{ className: 'props' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'ripple'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds riple effect to the fab'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'plain'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Adds plain colors to the fab'
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'mini'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Shrinks the size of the fab'
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Defaults '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ ripple: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ mini: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Plain '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ plain: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ plain: true, ripple: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ plain: true, mini: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Disabled '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ disabled: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ disabled: true, ripple: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Fab__["a" /* default */],
					{ disabled: true, mini: true },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Icon__["a" /* default */],
						null,
						'favorite_border'
					)
				)
			);
		}
	}]);

	return FabPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (FabPage);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_FormField_style_css__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_FormField_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_material_components_FormField_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_Radio_style_css__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_material_components_Radio_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_preact_material_components_Radio_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RadioPage_css__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RadioPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__RadioPage_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var RadioPage = function (_Component) {
	_inherits(RadioPage, _Component);

	function RadioPage() {
		_classCallCheck(this, RadioPage);

		return _possibleConstructorReturn(this, (RadioPage.__proto__ || Object.getPrototypeOf(RadioPage)).call(this));
	}

	_createClass(RadioPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-radio' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Props '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--body1' },
					'none'
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__["a" /* default */], { id: 'r1', name: 'opts' }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'label',
						{ 'for': 'r1' },
						'Radio 1'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__["a" /* default */], { id: 'r2', name: 'opts' }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'label',
						{ 'for': 'r2' },
						'Radio 2'
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_FormField__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Radio__["a" /* default */], { id: 'r3', name: 'opts', disabled: true }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'label',
						{ 'for': 'r3' },
						'Disabled Radio '
					)
				)
			);
		}
	}]);

	return RadioPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RadioPage);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Switch__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Switch_style_css__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Switch_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Switch_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SwitchPage_css__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SwitchPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SwitchPage_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var SwitchPage = function (_Component) {
	_inherits(SwitchPage, _Component);

	function SwitchPage() {
		_classCallCheck(this, SwitchPage);

		return _possibleConstructorReturn(this, (SwitchPage.__proto__ || Object.getPrototypeOf(SwitchPage)).apply(this, arguments));
	}

	_createClass(SwitchPage, [{
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-switch' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Props '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'ul',
					{ className: 'props' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'li',
						{ className: 'prop' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--headline' },
							'disabled'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							'true/false'
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--body1' },
							'Disables the switch'
						)
					)
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--display2' },
					'Demo '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Default '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Switch__["a" /* default */], null),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'mdc-typography--title' },
					'Disabled '
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Switch__["a" /* default */], { disabled: true })
			);
		}
	}]);

	return SwitchPage;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SwitchPage);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * routie - a tiny hash router
 * v0.3.2
 * http://projects.jga.me/routie
 * copyright Greg Allen 2016
 * MIT License
*/
var Routie = function Routie(a, b) {
  var c = [],
      d = {},
      e = "routie",
      f = a[e],
      g = function g(a, b) {
    this.name = b, this.path = a, this.keys = [], this.fns = [], this.params = {}, this.regex = h(this.path, this.keys, !1, !1);
  };g.prototype.addHandler = function (a) {
    this.fns.push(a);
  }, g.prototype.removeHandler = function (a) {
    for (var b = 0, c = this.fns.length; c > b; b++) {
      var d = this.fns[b];if (a == d) return void this.fns.splice(b, 1);
    }
  }, g.prototype.run = function (a) {
    for (var b = 0, c = this.fns.length; c > b; b++) {
      this.fns[b].apply(this, a);
    }
  }, g.prototype.match = function (a, b) {
    var c = this.regex.exec(a);if (!c) return !1;for (var d = 1, e = c.length; e > d; ++d) {
      var f = this.keys[d - 1],
          g = "string" == typeof c[d] ? decodeURIComponent(c[d]) : c[d];f && (this.params[f.name] = g), b.push(g);
    }return !0;
  }, g.prototype.toURL = function (a) {
    var b = this.path;for (var c in a) {
      b = b.replace("/:" + c, "/" + a[c]);
    }if (b = b.replace(/\/:.*\?/g, "/").replace(/\?/g, ""), -1 != b.indexOf(":")) throw new Error("missing parameters for url: " + b);return b;
  };var h = function h(a, b, c, d) {
    return a instanceof RegExp ? a : (a instanceof Array && (a = "(" + a.join("|") + ")"), a = a.concat(d ? "" : "/?").replace(/\/\(/g, "(?:/").replace(/\+/g, "__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function (a, c, d, e, f, g) {
      return b.push({ name: e, optional: !!g }), c = c || "", "" + (g ? "" : c) + "(?:" + (g ? c : "") + (d || "") + (f || d && "([^/.]+?)" || "([^/]+?)") + ")" + (g || "");
    }).replace(/([\/.])/g, "\\$1").replace(/__plus__/g, "(.+)").replace(/\*/g, "(.*)"), new RegExp("^" + a + "$", c ? "" : "i"));
  },
      i = function i(a, b) {
    var e = a.split(" "),
        f = 2 == e.length ? e[0] : null;a = 2 == e.length ? e[1] : e[0], d[a] || (d[a] = new g(a, f), c.push(d[a])), d[a].addHandler(b);
  },
      j = function j(a, b) {
    if ("function" == typeof b) i(a, b), j.reload();else if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
      for (var c in a) {
        i(c, a[c]);
      }j.reload();
    } else "undefined" == typeof b && j.navigate(a);
  };j.lookup = function (a, b) {
    for (var d = 0, e = c.length; e > d; d++) {
      var f = c[d];if (f.name == a) return f.toURL(b);
    }
  }, j.remove = function (a, b) {
    var c = d[a];c && c.removeHandler(b);
  }, j.removeAll = function () {
    d = {}, c = [];
  }, j.navigate = function (a, b) {
    b = b || {};var c = b.silent || !1;c && o(), setTimeout(function () {
      window.location.hash = a, c && setTimeout(function () {
        n();
      }, 1);
    }, 1);
  }, j.noConflict = function () {
    return a[e] = f, j;
  };var k = function k() {
    return window.location.hash.substring(1);
  },
      l = function l(a, b) {
    var c = [];return b.match(a, c) ? (b.run(c), !0) : !1;
  },
      m = j.reload = function () {
    for (var a = k(), b = 0, d = c.length; d > b; b++) {
      var e = c[b];if (l(a, e)) return;
    }
  },
      n = function n() {
    a.addEventListener ? a.addEventListener("hashchange", m, !1) : a.attachEvent("onhashchange", m);
  },
      o = function o() {
    a.removeEventListener ? a.removeEventListener("hashchange", m) : a.detachEvent("onhashchange", m);
  };return n(), b ? j : void (a[e] = j);
}; false ? Routie(window) : module.exports = Routie(window, !0);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Components_Home_Home_jsx__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Typography_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_preact_material_components_Theme_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_css__);





__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Components_Home_Home_jsx__["a" /* default */], null), document.querySelector('.app'));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
    }
  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{
      // Subclasses can override this to do any additional setup work that would be considered part of a
      // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
      // initialized. Any additional arguments besides root and foundation will be passed in here.
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    // Wrapper method to add an event listener to the component's root element. This is most useful when
    // listening for custom events.

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    // Wrapper method to remove an event listener to the component's root element. This is most useful when
    // unlistening for custom events.

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    // Fires a cross-browser-compatible custom event from the component root of the given type,
    // with the given data.

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, { detail: evtData });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, false, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

/* harmony default export */ __webpack_exports__["a"] = (MDCComponent);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ROOT = 'mdc-checkbox';

var cssClasses = {
  ROOT: 'mdc-checkbox',
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};

var strings = {
  NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate'
};

var numbers = {
  ANIM_END_LATCH_MS: 100
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(29);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var CB_PROTO_PROPS = ['checked', 'indeterminate'];

var MDCCheckboxFoundation = function (_MDCFoundation) {
  _inherits(MDCCheckboxFoundation, _MDCFoundation);

  _createClass(MDCCheckboxFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerAnimationEndHandler: function registerAnimationEndHandler() /* handler: EventListener */{},
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler() /* handler: EventListener */{},
        registerChangeHandler: function registerChangeHandler() /* handler: EventListener */{},
        deregisterChangeHandler: function deregisterChangeHandler() /* handler: EventListener */{},
        getNativeControl: function getNativeControl() /* HTMLInputElement */{},
        forceLayout: function forceLayout() {},
        isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
      };
    }
  }]);

  function MDCCheckboxFoundation(adapter) {
    _classCallCheck(this, MDCCheckboxFoundation);

    var _this = _possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, Object.assign(MDCCheckboxFoundation.defaultAdapter, adapter)));

    _this.currentCheckState_ = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INIT;
    _this.currentAnimationClass_ = '';
    _this.animEndLatchTimer_ = 0;
    _this.animEndHandler_ = function () {
      clearTimeout(_this.animEndLatchTimer_);
      _this.animEndLatchTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(_this.currentAnimationClass_);
        _this.adapter_.deregisterAnimationEndHandler(_this.animEndHandler_);
      }, __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */].ANIM_END_LATCH_MS);
    };
    _this.changeHandler_ = function () {
      return _this.transitionCheckState_();
    };
    return _this;
  }

  _createClass(MDCCheckboxFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].UPGRADED);
      this.adapter_.registerChangeHandler(this.changeHandler_);
      this.installPropertyChangeHooks_();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterChangeHandler(this.changeHandler_);
      this.uninstallPropertyChangeHooks_();
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }
  }, {
    key: 'isIndeterminate',
    value: function isIndeterminate() {
      return this.getNativeControl_().indeterminate;
    }
  }, {
    key: 'setIndeterminate',
    value: function setIndeterminate(indeterminate) {
      this.getNativeControl_().indeterminate = indeterminate;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.getNativeControl_().disabled = disabled;
    }
  }, {
    key: 'installPropertyChangeHooks_',
    value: function installPropertyChangeHooks_() {
      var _this2 = this;

      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, {
            get: desc.get,
            set: function set(state) {
              desc.set.call(nativeCb, state);
              _this2.transitionCheckState_();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable
          });
        }
      });
    }
  }, {
    key: 'uninstallPropertyChangeHooks_',
    value: function uninstallPropertyChangeHooks_() {
      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    }
  }, {
    key: 'transitionCheckState_',
    value: function transitionCheckState_() {
      var nativeCb = this.adapter_.getNativeControl();
      if (!nativeCb) {
        return;
      }
      var oldState = this.currentCheckState_;
      var newState = this.determineCheckState_(nativeCb);
      if (oldState === newState) {
        return;
      }

      // Check to ensure that there isn't a previously existing animation class, in case for example
      // the user interacted with the checkbox before the animation was finished.
      if (this.currentAnimationClass_.length > 0) {
        clearTimeout(this.animEndLatchTimer_);
        this.adapter_.forceLayout();
        this.adapter_.removeClass(this.currentAnimationClass_);
      }

      this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
      this.currentCheckState_ = newState;

      // Check for parentNode so that animations are only run when the element is attached
      // to the DOM.
      if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
        this.adapter_.addClass(this.currentAnimationClass_);
        this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
      }
    }
  }, {
    key: 'determineCheckState_',
    value: function determineCheckState_(nativeCb) {
      var TRANSITION_STATE_INDETERMINATE = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INDETERMINATE,
          TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;


      if (nativeCb.indeterminate) {
        return TRANSITION_STATE_INDETERMINATE;
      }
      return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    }
  }, {
    key: 'getTransitionAnimationClass_',
    value: function getTransitionAnimationClass_(oldState, newState) {
      var TRANSITION_STATE_INIT = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_INIT,
          TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */].TRANSITION_STATE_UNCHECKED;
      var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
          ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
          ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
          ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
          ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
          ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
          ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;


      switch (oldState) {
        case TRANSITION_STATE_INIT:
          if (newState === TRANSITION_STATE_UNCHECKED) {
            return '';
          }
        // fallthrough
        case TRANSITION_STATE_UNCHECKED:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
        case TRANSITION_STATE_CHECKED:
          return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
        // TRANSITION_STATE_INDETERMINATE
        default:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
      }
    }
  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        indeterminate: false,
        disabled: false
      };
    }
  }]);

  return MDCCheckboxFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCCheckboxFoundation);


function validDescriptor(inputPropDesc) {
  return inputPropDesc && typeof inputPropDesc.set === 'function';
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_animation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__foundation__ = __webpack_require__(30);
/* unused harmony reexport MDCCheckboxFoundation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCCheckbox; });
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










var MDCCheckbox = function (_MDCComponent) {
  _inherits(MDCCheckbox, _MDCComponent);

  _createClass(MDCCheckbox, [{
    key: 'nativeCb_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR;

      return this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCCheckbox(root);
    }
  }]);

  function MDCCheckbox() {
    var _ref;

    _classCallCheck(this, MDCCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCCheckbox, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__material_ripple_util__["a" /* getMatchesProperty */])(HTMLElement.prototype);
      var adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this2.nativeCb_[MATCHES](':active');
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeCb_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeCb_.removeEventListener(type, handler);
        },
        computeBoundingRect: function computeBoundingRect() {
          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          var DIM = 40;
          return {
            top: top,
            left: left,
            right: left + DIM,
            bottom: top + DIM,
            width: DIM,
            height: DIM
          };
        }
      });
      var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["b" /* MDCRippleFoundation */](adapter);
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](this.root_, foundation);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_4__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
          return _this3.root_.addEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'), handler);
        },
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
          return _this3.root_.removeEventListener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'), handler);
        },
        registerChangeHandler: function registerChangeHandler(handler) {
          return _this3.nativeCb_.addEventListener('change', handler);
        },
        deregisterChangeHandler: function deregisterChangeHandler(handler) {
          return _this3.nativeCb_.removeEventListener('change', handler);
        },
        getNativeControl: function getNativeControl() {
          return _this3.nativeCb_;
        },
        forceLayout: function forceLayout() {
          return _this3.root_.offsetWidth;
        },
        isAttachedToDOM: function isAttachedToDOM() {
          return Boolean(_this3.root_.parentNode);
        }
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCCheckbox.prototype.__proto__ || Object.getPrototypeOf(MDCCheckbox.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }, {
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }
  }, {
    key: 'indeterminate',
    get: function get() {
      return this.foundation_.isIndeterminate();
    },
    set: function set(indeterminate) {
      this.foundation_.setIndeterminate(indeterminate);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }]);

  return MDCCheckbox;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROOT */
/* unused harmony export UPGRADED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ROOT = 'mdc-ripple';
var UPGRADED = ROOT + '-upgraded';

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: UPGRADED,
  UNBOUNDED: UPGRADED + '--unbounded',
  BG_ACTIVE: UPGRADED + '--background-active',
  BG_BOUNDED_ACTIVE_FILL: UPGRADED + '--background-bounded-active-fill',
  FG_BOUNDED_ACTIVE_FILL: UPGRADED + '--foreground-bounded-active-fill',
  FG_UNBOUNDED_ACTIVATION: UPGRADED + '--foreground-unbounded-activation',
  FG_UNBOUNDED_DEACTIVATION: UPGRADED + '--foreground-unbounded-deactivation'
};

var strings = {
  VAR_SURFACE_WIDTH: '--' + ROOT + '-surface-width',
  VAR_SURFACE_HEIGHT: '--' + ROOT + '-surface-height',
  VAR_FG_SIZE: '--' + ROOT + '-fg-size',
  VAR_FG_UNBOUNDED_OPACITY_DURATION: '--' + ROOT + '-fg-unbounded-opacity-duration',
  VAR_FG_UNBOUNDED_TRANSFORM_DURATION: '--' + ROOT + '-fg-unbounded-transform-duration',
  VAR_LEFT: '--' + ROOT + '-left',
  VAR_TOP: '--' + ROOT + '-top',
  VAR_TRANSLATE_END: '--' + ROOT + '-translate-end',
  VAR_FG_APPROX_XF: '--' + ROOT + '-fg-approx-xf',
  VAR_FG_SCALE: '--' + ROOT + '-fg-scale',
  VAR_FG_TRANSLATE_START: '--' + ROOT + '-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--' + ROOT + '-fg-translate-end'
};

var numbers = {
  FG_TRANSFORM_DELAY_MS: 80,
  OPACITY_DURATION_DIVISOR: 3,
  ACTIVE_OPACITY_DURATION_MS: 110,
  MIN_OPACITY_DURATION_MS: 200,
  UNBOUNDED_TRANSFORM_DURATION_MS: 200,
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus'
};

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',


    // We compute this property so that we are not querying information about the client
    // until the point in time where the foundation requests it. This prevents scenarios where
    // client-side feature-detection may happen too early, such as when components are rendered on the server
    // and then initialized at mount time on the client.
    get: function get() {
      return this.adapter_.browserSupportsCssVars();
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;
    _this.frame_ = { width: 0, height: 0 };
    _this.activationState_ = _this.defaultActivationState_();
    _this.xfDuration_ = 0;
    _this.initialSize_ = 0;
    _this.maxRadius_ = 0;
    _this.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];
    _this.listeners_ = {
      activate: function activate(e) {
        return _this.activate_(e);
      },
      deactivate: function deactivate(e) {
        return _this.deactivate_(e);
      },
      focus: function focus() {
        return requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_ACTIVE);
        });
      },
      blur: function blur() {
        return requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_ACTIVE);
        });
      }
    };
    _this.unboundedOpacityFadeTimer_ = 0;
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    _this.cancelBgBounded_ = function () {};
    _this.cancelFgBounded_ = function () {};
    _this.cancelFgUnbounded_ = function () {};
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.fgScale_ = 0;
    return _this;
  }

  _createClass(MDCRippleFoundation, [{
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationStartTime: 0,
        activationEvent: null
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_) {
        return;
      }
      this.addEventListeners_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
        }
        _this2.layoutInternal_();
      });
    }
  }, {
    key: 'addEventListeners_',
    value: function addEventListeners_() {
      var _this3 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
        });
      });
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this4 = this;

      var activationState = this.activationState_;

      if (activationState.isActivated) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

      activationState.activationStartTime = Date.now();
      requestAnimationFrame(function () {
        // This needs to be wrapped in an rAF call b/c web browsers
        // report active states inconsistently when they're called within
        // event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this4.adapter_.isSurfaceActive() : true;
        if (activationState.wasElementMadeActive) {
          _this4.animateActivation_();
        } else {
          // Reset activation state immediately if element was not made active.
          _this4.activationState_ = _this4.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.activate_(null);
    }
  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this5 = this;

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE = _MDCRippleFoundation$2.BG_ACTIVE,
          BG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$2.BG_BOUNDED_ACTIVE_FILL,
          FG_UNBOUNDED_DEACTIVATION = _MDCRippleFoundation$2.FG_UNBOUNDED_DEACTIVATION,
          FG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$2.FG_BOUNDED_ACTIVE_FILL;

      // If ripple is currently deactivating, cancel those animations.

      [BG_BOUNDED_ACTIVE_FILL, FG_UNBOUNDED_DEACTIVATION, FG_BOUNDED_ACTIVE_FILL].forEach(function (c) {
        return _this5.adapter_.removeClass(c);
      });
      this.cancelBgBounded_();
      this.cancelFgBounded_();
      this.cancelFgUnbounded_();
      if (this.unboundedOpacityFadeTimer_) {
        clearTimeout(this.unboundedOpacityFadeTimer_);
        this.unboundedOpacityFadeTimer_ = 0;
      }

      this.adapter_.addClass(BG_ACTIVE);
      if (this.adapter_.isUnbounded()) {
        this.animateUnboundedActivation_();
      }
    }
  }, {
    key: 'animateUnboundedActivation_',
    value: function animateUnboundedActivation_() {
      var FG_UNBOUNDED_ACTIVATION = MDCRippleFoundation.cssClasses.FG_UNBOUNDED_ACTIVATION;

      this.adapter_.addClass(FG_UNBOUNDED_ACTIVATION);
    }
  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this6 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.

      if (!activationState.isActivated) {
        return;
      }
      // Programmatic deactivation.
      if (activationState.isProgrammatic) {
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(null, Object.assign({}, activationState));
        });
        this.activationState_ = this.defaultActivationState_();
        return;
      }
      var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
      var expectedActivationType = activationState.activationEvent.type;
      // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
      // Essentially, what we need to do here is decouple the deactivation UX from the actual
      // deactivation state itself. This way, touch/pointer events in sequence do not trample one
      // another.
      var needsDeactivationUX = actualActivationType === expectedActivationType;
      var needsActualDeactivation = needsDeactivationUX;
      if (activationState.wasActivatedByPointer) {
        needsActualDeactivation = e.type === 'mouseup';
      }

      var state = Object.assign({}, activationState);
      if (needsDeactivationUX) {
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(e, state);
        });
      }
      if (needsActualDeactivation) {
        this.activationState_ = this.defaultActivationState_();
      }
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.deactivate_(null);
    }
  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive,
          activationStartTime = _ref.activationStartTime,
          isProgrammatic = _ref.isProgrammatic;
      var BG_ACTIVE = MDCRippleFoundation.cssClasses.BG_ACTIVE;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.adapter_.removeClass(BG_ACTIVE);
        var isPointerEvent = isProgrammatic ? false : e.type === 'touchend' || e.type === 'pointerup' || e.type === 'mouseup';
        if (this.adapter_.isUnbounded()) {
          this.animateUnboundedDeactivation_(this.getUnboundedDeactivationInfo_(activationStartTime));
        } else {
          this.animateBoundedDeactivation_(e, isPointerEvent);
        }
      }
    }
  }, {
    key: 'animateUnboundedDeactivation_',
    value: function animateUnboundedDeactivation_(_ref2) {
      var _this7 = this;

      var opacityDuration = _ref2.opacityDuration,
          transformDuration = _ref2.transformDuration,
          approxCurScale = _ref2.approxCurScale;
      var _MDCRippleFoundation$3 = MDCRippleFoundation.cssClasses,
          FG_UNBOUNDED_ACTIVATION = _MDCRippleFoundation$3.FG_UNBOUNDED_ACTIVATION,
          FG_UNBOUNDED_DEACTIVATION = _MDCRippleFoundation$3.FG_UNBOUNDED_DEACTIVATION;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.strings,
          VAR_FG_UNBOUNDED_OPACITY_DURATION = _MDCRippleFoundation$4.VAR_FG_UNBOUNDED_OPACITY_DURATION,
          VAR_FG_UNBOUNDED_TRANSFORM_DURATION = _MDCRippleFoundation$4.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
          VAR_FG_APPROX_XF = _MDCRippleFoundation$4.VAR_FG_APPROX_XF;


      this.adapter_.updateCssVariable(VAR_FG_APPROX_XF, 'scale(' + approxCurScale + ')');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_OPACITY_DURATION, opacityDuration + 'ms');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_TRANSFORM_DURATION, transformDuration + 'ms');
      this.adapter_.addClass(FG_UNBOUNDED_DEACTIVATION);
      this.adapter_.removeClass(FG_UNBOUNDED_ACTIVATION);
      // We use setTimeout here since we know how long the fade will take.
      this.unboundedOpacityFadeTimer_ = setTimeout(function () {
        _this7.adapter_.removeClass(FG_UNBOUNDED_DEACTIVATION);
      }, opacityDuration);
    }
  }, {
    key: 'getUnboundedDeactivationInfo_',
    value: function getUnboundedDeactivationInfo_(activationStartTime) {
      var msElapsed = Date.now() - activationStartTime;
      var _MDCRippleFoundation$5 = MDCRippleFoundation.numbers,
          FG_TRANSFORM_DELAY_MS = _MDCRippleFoundation$5.FG_TRANSFORM_DELAY_MS,
          OPACITY_DURATION_DIVISOR = _MDCRippleFoundation$5.OPACITY_DURATION_DIVISOR,
          ACTIVE_OPACITY_DURATION_MS = _MDCRippleFoundation$5.ACTIVE_OPACITY_DURATION_MS,
          UNBOUNDED_TRANSFORM_DURATION_MS = _MDCRippleFoundation$5.UNBOUNDED_TRANSFORM_DURATION_MS,
          MIN_OPACITY_DURATION_MS = _MDCRippleFoundation$5.MIN_OPACITY_DURATION_MS;


      var approxCurScale = 0;
      if (msElapsed > FG_TRANSFORM_DELAY_MS) {
        var percentComplete = Math.min((msElapsed - FG_TRANSFORM_DELAY_MS) / this.xfDuration_, 1);
        approxCurScale = percentComplete * this.fgScale_;
      }

      var transformDuration = UNBOUNDED_TRANSFORM_DURATION_MS;
      var approxOpacity = Math.min(msElapsed / ACTIVE_OPACITY_DURATION_MS, 1);
      var opacityDuration = Math.max(MIN_OPACITY_DURATION_MS, 1000 * approxOpacity / OPACITY_DURATION_DIVISOR);

      return { transformDuration: transformDuration, opacityDuration: opacityDuration, approxCurScale: approxCurScale };
    }
  }, {
    key: 'animateBoundedDeactivation_',
    value: function animateBoundedDeactivation_(e, isPointerEvent) {
      var startPoint = void 0;
      if (isPointerEvent) {
        startPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* getNormalizedEventCoords */])(e, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }

      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      var _MDCRippleFoundation$6 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$6.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$6.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$7 = MDCRippleFoundation.cssClasses,
          BG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$7.BG_BOUNDED_ACTIVE_FILL,
          FG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$7.FG_BOUNDED_ACTIVE_FILL;

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, startPoint.x + 'px, ' + startPoint.y + 'px');
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, endPoint.x + 'px, ' + endPoint.y + 'px');
      this.cancelBgBounded_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* animateWithClass */])(this.adapter_, BG_BOUNDED_ACTIVE_FILL, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectEventName */])(window, 'transitionend'));
      this.cancelFgBounded_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* animateWithClass */])(this.adapter_, FG_BOUNDED_ACTIVE_FILL, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'));
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this8 = this;

      if (!this.isSupported_) {
        return;
      }
      this.removeEventListeners_();

      var _MDCRippleFoundation$8 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$8.ROOT,
          UNBOUNDED = _MDCRippleFoundation$8.UNBOUNDED;

      requestAnimationFrame(function () {
        _this8.adapter_.removeClass(ROOT);
        _this8.adapter_.removeClass(UNBOUNDED);
        _this8.removeCssVars_();
      });
    }
  }, {
    key: 'removeEventListeners_',
    value: function removeEventListeners_() {
      var _this9 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this9.adapter_.deregisterInteractionHandler(info[k], _this9.listeners_[k]);
        });
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this10 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this10.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this11 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this11.layoutInternal_();
        _this11.layoutFrame_ = 0;
      });
    }
  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      this.frame_ = this.adapter_.computeBoundingRect();

      var maxDim = Math.max(this.frame_.height, this.frame_.width);
      var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

      // 60% of the largest dimension of the surface
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

      // Diameter of the surface + 10px
      this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;
      this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
      this.updateLayoutCssVars_();
    }
  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$9 = MDCRippleFoundation.strings,
          VAR_SURFACE_WIDTH = _MDCRippleFoundation$9.VAR_SURFACE_WIDTH,
          VAR_SURFACE_HEIGHT = _MDCRippleFoundation$9.VAR_SURFACE_HEIGHT,
          VAR_FG_SIZE = _MDCRippleFoundation$9.VAR_FG_SIZE,
          VAR_FG_UNBOUNDED_TRANSFORM_DURATION = _MDCRippleFoundation$9.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
          VAR_LEFT = _MDCRippleFoundation$9.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$9.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$9.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, this.frame_.width + 'px');
      this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, this.frame_.height + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_TRANSFORM_DURATION, this.xfDuration_ + 'ms');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }
  }]);

  return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getMatchesProperty */])(HTMLElement.prototype);



var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  function MDCRipple() {
    _classCallCheck(this, MDCRipple);

    return _possibleConstructorReturn(this, (MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).apply(this, arguments));
  }

  _createClass(MDCRipple, [{
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    },
    set: function set(unbounded) {
      var UNBOUNDED = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].cssClasses.UNBOUNDED;

      this.unbounded_ = Boolean(unbounded);
      if (this.unbounded_) {
        this.root_.classList.add(UNBOUNDED);
      } else {
        this.root_.classList.remove(UNBOUNDED);
      }
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isUnbounded = _ref.isUnbounded,
          isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = isUnbounded;
      }
      return ripple;
    }
  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* supportsCssVariables */])(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel'
};

var strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept',
  FOCUSABLE_ELEMENTS: 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' + 'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]'
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(35);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
   */




var MDCDialogFoundation = function (_MDCFoundation) {
  _inherits(MDCDialogFoundation, _MDCFoundation);

  _createClass(MDCDialogFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        hasClass: function hasClass() /* className: string */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setAttr: function setAttr() /* attr: string, val: string */{},
        addBodyClass: function addBodyClass() /* className: string */{},
        removeBodyClass: function removeBodyClass() /* className: string */{},
        eventTargetHasClass: function eventTargetHasClass() {
          return (/* target: EventTarget, className: string */ /* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        registerFocusTrappingHandler: function registerFocusTrappingHandler() /* handler: EventListener */{},
        deregisterFocusTrappingHandler: function deregisterFocusTrappingHandler() /* handler: EventListener */{},
        numFocusableTargets: function numFocusableTargets() {
          return (/* number */0
          );
        },
        setDialogFocusFirstTarget: function setDialogFocusFirstTarget() {},
        setInitialFocus: function setInitialFocus() {},
        getFocusableElements: function getFocusableElements() {
          return (/* handler: EventListener */ /* Array<Element> */[]
          );
        },
        saveElementTabState: function saveElementTabState() /* el: Element */{},
        restoreElementTabState: function restoreElementTabState() /* el: Element */{},
        makeElementUntabbable: function makeElementUntabbable() /* el: Element */{},
        setBodyAttr: function setBodyAttr() /* attr: string, val: string */{},
        rmBodyAttr: function rmBodyAttr() /* attr: string */{},
        getFocusedTarget: function getFocusedTarget() {},
        setFocusedTarget: function setFocusedTarget() /* target: EventTarget */{},
        notifyAccept: function notifyAccept() {},
        notifyCancel: function notifyCancel() {}
      };
    }
  }]);

  function MDCDialogFoundation(adapter) {
    _classCallCheck(this, MDCDialogFoundation);

    var _this = _possibleConstructorReturn(this, (MDCDialogFoundation.__proto__ || Object.getPrototypeOf(MDCDialogFoundation)).call(this, Object.assign(MDCDialogFoundation.defaultAdapter, adapter)));

    _this.lastFocusedTarget_ = null;
    _this.currentFocusedElIndex_ = -1;
    _this.isOpen_ = false;
    _this.isResettingToFirstFocusTarget_ = false;
    _this.componentClickHandler_ = function () {
      return _this.cancel(true);
    };
    _this.dialogClickHandler_ = function (evt) {
      return _this.handleDialogClick_(evt);
    };
    _this.focusHandler_ = function (evt) {
      return _this.setFocus_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.cancel(true);
      }
    };
    return _this;
  }

  _createClass(MDCDialogFoundation, [{
    key: 'destroy',
    value: function destroy() {
      // Ensure that dialog is cleaned up when destroyed
      this.close();
    }
  }, {
    key: 'open',
    value: function open() {
      this.lastFocusedTarget_ = this.adapter_.getFocusedTarget();
      this.makeTabbable_();
      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.setInitialFocus();
      this.adapter_.registerFocusTrappingHandler(this.focusHandler_);
      this.disableScroll_();
      this.adapter_.setBodyAttr('aria-hidden', 'true');
      this.adapter_.setAttr('aria-hidden', 'false');
      this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
      this.isOpen_ = true;
      this.currentFocusedElIndex_ = this.adapter_.numFocusableTargets() - 1;
    }
  }, {
    key: 'close',
    value: function close() {
      this.makeUntabbable_();
      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.deregisterFocusTrappingHandler(this.focusHandler_);
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
      this.enableScroll_();
      this.adapter_.rmBodyAttr('aria-hidden');
      this.adapter_.setAttr('aria-hidden', 'true');

      if (this.lastFocusedTarget_) {
        this.adapter_.setFocusedTarget(this.lastFocusedTarget_);
      }
      this.lastFocusedTarget_ = null;
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }
  }, {
    key: 'accept',
    value: function accept(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyAccept();
      }

      this.close();
    }
  }, {
    key: 'cancel',
    value: function cancel(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyCancel();
      }

      this.close();
    }
  }, {
    key: 'handleDialogClick_',
    value: function handleDialogClick_(evt) {
      evt.stopPropagation();
      var target = evt.target;

      if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].ACCEPT_BTN)) {
        this.accept(true);
      } else if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].CANCEL_BTN)) {
        this.cancel(true);
      }
    }
  }, {
    key: 'makeUntabbable_',
    value: function makeUntabbable_() {
      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.saveElementTabState(elements[i]);
          this.adapter_.makeElementUntabbable(elements[i]);
        }
      }
    }
  }, {
    key: 'makeTabbable_',
    value: function makeTabbable_() {
      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.restoreElementTabState(elements[i]);
        }
      }
    }
  }, {
    key: 'setFocus_',
    value: function setFocus_(evt) {
      if (!evt.relatedTarget) {
        // Do not increment the focused el index when re-focusing on same element, e.g. switching windows
        return;
      }

      if (this.isResettingToFirstFocusTarget_) {
        return;
      }

      this.currentFocusedElIndex_ = (this.currentFocusedElIndex_ + 1) % this.adapter_.numFocusableTargets();

      if (this.currentFocusedElIndex_ === 0) {
        this.isResettingToFirstFocusTarget_ = true;
        this.adapter_.setDialogFocusFirstTarget();
        this.isResettingToFirstFocusTarget_ = false;
      }
    }
  }, {
    key: 'disableScroll_',
    value: function disableScroll_() {
      this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
    }
  }, {
    key: 'enableScroll_',
    value: function enableScroll_() {
      this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */].SCROLL_LOCK);
    }
  }]);

  return MDCDialogFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCDialogFoundation);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(41);
/* unused harmony reexport MDCDialogFoundation */
/* unused harmony reexport util */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCDialog; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */










var MDCDialog = function (_MDCComponent) {
  _inherits(MDCDialog, _MDCComponent);

  function MDCDialog() {
    _classCallCheck(this, MDCDialog);

    return _possibleConstructorReturn(this, (MDCDialog.__proto__ || Object.getPrototypeOf(MDCDialog)).apply(this, arguments));
  }

  _createClass(MDCDialog, [{
    key: 'initialize',
    value: function initialize() {
      this.lastFocusedTarget = null;
      this.footerBtnRipples_ = [];

      var footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
      for (var i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
        this.footerBtnRipples_.push(new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](footerBtn));
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.footerBtnRipples_.forEach(function (ripple) {
        return ripple.destroy();
      });
    }
  }, {
    key: 'show',
    value: function show() {
      this.foundation_.open();
    }
  }, {
    key: 'close',
    value: function close() {
      this.foundation_.close();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var FOCUSABLE_ELEMENTS = __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.FOCUSABLE_ELEMENTS;


      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setAttr: function setAttr(attr, val) {
          return _this2.root_.setAttribute(attr, val);
        },
        addBodyClass: function addBodyClass(className) {
          return document.body.classList.add(className);
        },
        removeBodyClass: function removeBodyClass(className) {
          return document.body.classList.remove(className);
        },
        eventTargetHasClass: function eventTargetHasClass(target, className) {
          return target.classList.contains(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(evt, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(evt, handler, __WEBPACK_IMPORTED_MODULE_3__util__["a" /* applyPassive */]());
        },
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.addEventListener(evt, handler);
        },
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.removeEventListener(evt, handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        registerFocusTrappingHandler: function registerFocusTrappingHandler(handler) {
          return document.addEventListener('focus', handler, true);
        },
        deregisterFocusTrappingHandler: function deregisterFocusTrappingHandler(handler) {
          return document.removeEventListener('focus', handler, true);
        },
        numFocusableTargets: function numFocusableTargets() {
          return _this2.dialogSurface_.querySelectorAll(FOCUSABLE_ELEMENTS).length;
        },
        setDialogFocusFirstTarget: function setDialogFocusFirstTarget() {
          return _this2.dialogSurface_.querySelectorAll(FOCUSABLE_ELEMENTS)[0].focus();
        },
        setInitialFocus: function setInitialFocus() {
          return _this2.acceptButton_.focus();
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.dialogSurface_.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_3__util__["b" /* saveElementTabState */](el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_3__util__["c" /* restoreElementTabState */](el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        setBodyAttr: function setBodyAttr(attr, val) {
          return document.body.setAttribute(attr, val);
        },
        rmBodyAttr: function rmBodyAttr(attr) {
          return document.body.removeAttribute(attr);
        },
        getFocusedTarget: function getFocusedTarget() {
          return document.activeElement;
        },
        setFocusedTarget: function setFocusedTarget(target) {
          return target.focus();
        },
        notifyAccept: function notifyAccept() {
          return _this2.emit('MDCDialog:accept');
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit('MDCDialog:cancel');
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }
  }, {
    key: 'acceptButton_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ACCEPT_SELECTOR);
    }
  }, {
    key: 'dialogSurface_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.DIALOG_SURFACE_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCDialog(root);
    }
  }]);

  return MDCDialog;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROOT */
/* unused harmony export UPGRADED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ROOT = 'mdc-ripple';
var UPGRADED = ROOT + '-upgraded';

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: UPGRADED,
  UNBOUNDED: UPGRADED + '--unbounded',
  BG_ACTIVE: UPGRADED + '--background-active',
  BG_BOUNDED_ACTIVE_FILL: UPGRADED + '--background-bounded-active-fill',
  FG_BOUNDED_ACTIVE_FILL: UPGRADED + '--foreground-bounded-active-fill',
  FG_UNBOUNDED_ACTIVATION: UPGRADED + '--foreground-unbounded-activation',
  FG_UNBOUNDED_DEACTIVATION: UPGRADED + '--foreground-unbounded-deactivation'
};

var strings = {
  VAR_SURFACE_WIDTH: '--' + ROOT + '-surface-width',
  VAR_SURFACE_HEIGHT: '--' + ROOT + '-surface-height',
  VAR_FG_SIZE: '--' + ROOT + '-fg-size',
  VAR_FG_UNBOUNDED_OPACITY_DURATION: '--' + ROOT + '-fg-unbounded-opacity-duration',
  VAR_FG_UNBOUNDED_TRANSFORM_DURATION: '--' + ROOT + '-fg-unbounded-transform-duration',
  VAR_LEFT: '--' + ROOT + '-left',
  VAR_TOP: '--' + ROOT + '-top',
  VAR_TRANSLATE_END: '--' + ROOT + '-translate-end',
  VAR_FG_APPROX_XF: '--' + ROOT + '-fg-approx-xf',
  VAR_FG_SCALE: '--' + ROOT + '-fg-scale',
  VAR_FG_TRANSLATE_START: '--' + ROOT + '-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--' + ROOT + '-fg-translate-end'
};

var numbers = {
  FG_TRANSFORM_DELAY_MS: 80,
  OPACITY_DURATION_DIVISOR: 3,
  ACTIVE_OPACITY_DURATION_MS: 110,
  MIN_OPACITY_DURATION_MS: 200,
  UNBOUNDED_TRANSFORM_DURATION_MS: 200,
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(9);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus'
};

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',


    // We compute this property so that we are not querying information about the client
    // until the point in time where the foundation requests it. This prevents scenarios where
    // client-side feature-detection may happen too early, such as when components are rendered on the server
    // and then initialized at mount time on the client.
    get: function get() {
      return this.adapter_.browserSupportsCssVars();
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;
    _this.frame_ = { width: 0, height: 0 };
    _this.activationState_ = _this.defaultActivationState_();
    _this.xfDuration_ = 0;
    _this.initialSize_ = 0;
    _this.maxRadius_ = 0;
    _this.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];
    _this.listeners_ = {
      activate: function activate(e) {
        return _this.activate_(e);
      },
      deactivate: function deactivate(e) {
        return _this.deactivate_(e);
      },
      focus: function focus() {
        return requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_ACTIVE);
        });
      },
      blur: function blur() {
        return requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_ACTIVE);
        });
      }
    };
    _this.unboundedOpacityFadeTimer_ = 0;
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    _this.cancelBgBounded_ = function () {};
    _this.cancelFgBounded_ = function () {};
    _this.cancelFgUnbounded_ = function () {};
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.fgScale_ = 0;
    return _this;
  }

  _createClass(MDCRippleFoundation, [{
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationStartTime: 0,
        activationEvent: null
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_) {
        return;
      }
      this.addEventListeners_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
        }
        _this2.layoutInternal_();
      });
    }
  }, {
    key: 'addEventListeners_',
    value: function addEventListeners_() {
      var _this3 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
        });
      });
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this4 = this;

      var activationState = this.activationState_;

      if (activationState.isActivated) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

      activationState.activationStartTime = Date.now();
      requestAnimationFrame(function () {
        // This needs to be wrapped in an rAF call b/c web browsers
        // report active states inconsistently when they're called within
        // event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this4.adapter_.isSurfaceActive() : true;
        if (activationState.wasElementMadeActive) {
          _this4.animateActivation_();
        } else {
          // Reset activation state immediately if element was not made active.
          _this4.activationState_ = _this4.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.activate_(null);
    }
  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this5 = this;

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE = _MDCRippleFoundation$2.BG_ACTIVE,
          BG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$2.BG_BOUNDED_ACTIVE_FILL,
          FG_UNBOUNDED_DEACTIVATION = _MDCRippleFoundation$2.FG_UNBOUNDED_DEACTIVATION,
          FG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$2.FG_BOUNDED_ACTIVE_FILL;

      // If ripple is currently deactivating, cancel those animations.

      [BG_BOUNDED_ACTIVE_FILL, FG_UNBOUNDED_DEACTIVATION, FG_BOUNDED_ACTIVE_FILL].forEach(function (c) {
        return _this5.adapter_.removeClass(c);
      });
      this.cancelBgBounded_();
      this.cancelFgBounded_();
      this.cancelFgUnbounded_();
      if (this.unboundedOpacityFadeTimer_) {
        clearTimeout(this.unboundedOpacityFadeTimer_);
        this.unboundedOpacityFadeTimer_ = 0;
      }

      this.adapter_.addClass(BG_ACTIVE);
      if (this.adapter_.isUnbounded()) {
        this.animateUnboundedActivation_();
      }
    }
  }, {
    key: 'animateUnboundedActivation_',
    value: function animateUnboundedActivation_() {
      var FG_UNBOUNDED_ACTIVATION = MDCRippleFoundation.cssClasses.FG_UNBOUNDED_ACTIVATION;

      this.adapter_.addClass(FG_UNBOUNDED_ACTIVATION);
    }
  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this6 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.

      if (!activationState.isActivated) {
        return;
      }
      // Programmatic deactivation.
      if (activationState.isProgrammatic) {
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(null, Object.assign({}, activationState));
        });
        this.activationState_ = this.defaultActivationState_();
        return;
      }
      var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
      var expectedActivationType = activationState.activationEvent.type;
      // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
      // Essentially, what we need to do here is decouple the deactivation UX from the actual
      // deactivation state itself. This way, touch/pointer events in sequence do not trample one
      // another.
      var needsDeactivationUX = actualActivationType === expectedActivationType;
      var needsActualDeactivation = needsDeactivationUX;
      if (activationState.wasActivatedByPointer) {
        needsActualDeactivation = e.type === 'mouseup';
      }

      var state = Object.assign({}, activationState);
      if (needsDeactivationUX) {
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(e, state);
        });
      }
      if (needsActualDeactivation) {
        this.activationState_ = this.defaultActivationState_();
      }
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.deactivate_(null);
    }
  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive,
          activationStartTime = _ref.activationStartTime,
          isProgrammatic = _ref.isProgrammatic;
      var BG_ACTIVE = MDCRippleFoundation.cssClasses.BG_ACTIVE;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.adapter_.removeClass(BG_ACTIVE);
        var isPointerEvent = isProgrammatic ? false : e.type === 'touchend' || e.type === 'pointerup' || e.type === 'mouseup';
        if (this.adapter_.isUnbounded()) {
          this.animateUnboundedDeactivation_(this.getUnboundedDeactivationInfo_(activationStartTime));
        } else {
          this.animateBoundedDeactivation_(e, isPointerEvent);
        }
      }
    }
  }, {
    key: 'animateUnboundedDeactivation_',
    value: function animateUnboundedDeactivation_(_ref2) {
      var _this7 = this;

      var opacityDuration = _ref2.opacityDuration,
          transformDuration = _ref2.transformDuration,
          approxCurScale = _ref2.approxCurScale;
      var _MDCRippleFoundation$3 = MDCRippleFoundation.cssClasses,
          FG_UNBOUNDED_ACTIVATION = _MDCRippleFoundation$3.FG_UNBOUNDED_ACTIVATION,
          FG_UNBOUNDED_DEACTIVATION = _MDCRippleFoundation$3.FG_UNBOUNDED_DEACTIVATION;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.strings,
          VAR_FG_UNBOUNDED_OPACITY_DURATION = _MDCRippleFoundation$4.VAR_FG_UNBOUNDED_OPACITY_DURATION,
          VAR_FG_UNBOUNDED_TRANSFORM_DURATION = _MDCRippleFoundation$4.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
          VAR_FG_APPROX_XF = _MDCRippleFoundation$4.VAR_FG_APPROX_XF;


      this.adapter_.updateCssVariable(VAR_FG_APPROX_XF, 'scale(' + approxCurScale + ')');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_OPACITY_DURATION, opacityDuration + 'ms');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_TRANSFORM_DURATION, transformDuration + 'ms');
      this.adapter_.addClass(FG_UNBOUNDED_DEACTIVATION);
      this.adapter_.removeClass(FG_UNBOUNDED_ACTIVATION);
      // We use setTimeout here since we know how long the fade will take.
      this.unboundedOpacityFadeTimer_ = setTimeout(function () {
        _this7.adapter_.removeClass(FG_UNBOUNDED_DEACTIVATION);
      }, opacityDuration);
    }
  }, {
    key: 'getUnboundedDeactivationInfo_',
    value: function getUnboundedDeactivationInfo_(activationStartTime) {
      var msElapsed = Date.now() - activationStartTime;
      var _MDCRippleFoundation$5 = MDCRippleFoundation.numbers,
          FG_TRANSFORM_DELAY_MS = _MDCRippleFoundation$5.FG_TRANSFORM_DELAY_MS,
          OPACITY_DURATION_DIVISOR = _MDCRippleFoundation$5.OPACITY_DURATION_DIVISOR,
          ACTIVE_OPACITY_DURATION_MS = _MDCRippleFoundation$5.ACTIVE_OPACITY_DURATION_MS,
          UNBOUNDED_TRANSFORM_DURATION_MS = _MDCRippleFoundation$5.UNBOUNDED_TRANSFORM_DURATION_MS,
          MIN_OPACITY_DURATION_MS = _MDCRippleFoundation$5.MIN_OPACITY_DURATION_MS;


      var approxCurScale = 0;
      if (msElapsed > FG_TRANSFORM_DELAY_MS) {
        var percentComplete = Math.min((msElapsed - FG_TRANSFORM_DELAY_MS) / this.xfDuration_, 1);
        approxCurScale = percentComplete * this.fgScale_;
      }

      var transformDuration = UNBOUNDED_TRANSFORM_DURATION_MS;
      var approxOpacity = Math.min(msElapsed / ACTIVE_OPACITY_DURATION_MS, 1);
      var opacityDuration = Math.max(MIN_OPACITY_DURATION_MS, 1000 * approxOpacity / OPACITY_DURATION_DIVISOR);

      return { transformDuration: transformDuration, opacityDuration: opacityDuration, approxCurScale: approxCurScale };
    }
  }, {
    key: 'animateBoundedDeactivation_',
    value: function animateBoundedDeactivation_(e, isPointerEvent) {
      var startPoint = void 0;
      if (isPointerEvent) {
        startPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* getNormalizedEventCoords */])(e, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }

      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      var _MDCRippleFoundation$6 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$6.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$6.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$7 = MDCRippleFoundation.cssClasses,
          BG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$7.BG_BOUNDED_ACTIVE_FILL,
          FG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$7.FG_BOUNDED_ACTIVE_FILL;

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, startPoint.x + 'px, ' + startPoint.y + 'px');
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, endPoint.x + 'px, ' + endPoint.y + 'px');
      this.cancelBgBounded_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* animateWithClass */])(this.adapter_, BG_BOUNDED_ACTIVE_FILL, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectEventName */])(window, 'transitionend'));
      this.cancelFgBounded_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* animateWithClass */])(this.adapter_, FG_BOUNDED_ACTIVE_FILL, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'));
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this8 = this;

      if (!this.isSupported_) {
        return;
      }
      this.removeEventListeners_();

      var _MDCRippleFoundation$8 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$8.ROOT,
          UNBOUNDED = _MDCRippleFoundation$8.UNBOUNDED;

      requestAnimationFrame(function () {
        _this8.adapter_.removeClass(ROOT);
        _this8.adapter_.removeClass(UNBOUNDED);
        _this8.removeCssVars_();
      });
    }
  }, {
    key: 'removeEventListeners_',
    value: function removeEventListeners_() {
      var _this9 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this9.adapter_.deregisterInteractionHandler(info[k], _this9.listeners_[k]);
        });
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this10 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this10.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this11 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this11.layoutInternal_();
        _this11.layoutFrame_ = 0;
      });
    }
  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      this.frame_ = this.adapter_.computeBoundingRect();

      var maxDim = Math.max(this.frame_.height, this.frame_.width);
      var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

      // 60% of the largest dimension of the surface
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

      // Diameter of the surface + 10px
      this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;
      this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
      this.updateLayoutCssVars_();
    }
  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$9 = MDCRippleFoundation.strings,
          VAR_SURFACE_WIDTH = _MDCRippleFoundation$9.VAR_SURFACE_WIDTH,
          VAR_SURFACE_HEIGHT = _MDCRippleFoundation$9.VAR_SURFACE_HEIGHT,
          VAR_FG_SIZE = _MDCRippleFoundation$9.VAR_FG_SIZE,
          VAR_FG_UNBOUNDED_TRANSFORM_DURATION = _MDCRippleFoundation$9.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
          VAR_LEFT = _MDCRippleFoundation$9.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$9.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$9.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, this.frame_.width + 'px');
      this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, this.frame_.height + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_TRANSFORM_DURATION, this.xfDuration_ + 'ms');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }
  }]);

  return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(9);
/* unused harmony reexport MDCRippleFoundation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getMatchesProperty */])(HTMLElement.prototype);



var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  function MDCRipple() {
    _classCallCheck(this, MDCRipple);

    return _possibleConstructorReturn(this, (MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).apply(this, arguments));
  }

  _createClass(MDCRipple, [{
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    },
    set: function set(unbounded) {
      var UNBOUNDED = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].cssClasses.UNBOUNDED;

      this.unbounded_ = Boolean(unbounded);
      if (this.unbounded_) {
        this.root_.classList.add(UNBOUNDED);
      } else {
        this.root_.classList.remove(UNBOUNDED);
      }
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isUnbounded = _ref.isUnbounded,
          isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = isUnbounded;
      }
      return ripple;
    }
  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* supportsCssVariables */])(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["b"] = saveElementTabState;
/* harmony export (immutable) */ __webpack_exports__["c"] = restoreElementTabState;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TAB_DATA = 'data-mdc-tabindex';
var TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

var supportsPassive_ = void 0;

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ROOT = 'mdc-temporary-drawer';

var cssClasses = {
  ROOT: ROOT,
  OPEN: ROOT + '--open',
  ANIMATING: ROOT + '--animating',
  RIGHT: ROOT + '--right'
};

var strings = {
  DRAWER_SELECTOR: '.' + ROOT + '__drawer',
  OPACITY_VAR_NAME: '--' + ROOT + '-opacity',
  FOCUSABLE_ELEMENTS: 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' + 'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]'
};

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(42);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var MDCTemporaryDrawerFoundation = function (_MDCFoundation) {
  _inherits(MDCTemporaryDrawerFoundation, _MDCFoundation);

  _createClass(MDCTemporaryDrawerFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        hasClass: function hasClass() /* className: string */{},
        hasNecessaryDom: function hasNecessaryDom() {
          return (/* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        setTranslateX: function setTranslateX() /* value: number | null */{},
        updateCssVariable: function updateCssVariable() /* value: string */{},
        getFocusableElements: function getFocusableElements() /* NodeList */{},
        saveElementTabState: function saveElementTabState() /* el: Element */{},
        restoreElementTabState: function restoreElementTabState() /* el: Element */{},
        makeElementUntabbable: function makeElementUntabbable() /* el: Element */{},
        isRtl: function isRtl() {
          return (/* boolean */false
          );
        },
        getDrawerWidth: function getDrawerWidth() {
          return (/* number */0
          );
        },
        isDrawer: function isDrawer() {
          return (/* el: Element */ /* boolean */false
          );
        }
      };
    }
  }]);

  function MDCTemporaryDrawerFoundation(adapter) {
    _classCallCheck(this, MDCTemporaryDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTemporaryDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation)).call(this, Object.assign(MDCTemporaryDrawerFoundation.defaultAdapter, adapter)));

    _this.transitionEndHandler_ = function (ev) {
      if (_this.adapter_.isDrawer(ev.target)) {
        _this.adapter_.removeClass(MDCTemporaryDrawerFoundation.cssClasses.ANIMATING);
        _this.adapter_.deregisterTransitionEndHandler(_this.transitionEndHandler_);
      }
    };

    _this.inert_ = false;

    _this.componentClickHandler_ = function () {
      return _this.close();
    };
    _this.drawerClickHandler_ = function (evt) {
      return evt.stopPropagation();
    };
    _this.componentTouchStartHandler_ = function (evt) {
      return _this.handleTouchStart_(evt);
    };
    _this.componentTouchMoveHandler_ = function (evt) {
      return _this.handleTouchMove_(evt);
    };
    _this.componentTouchEndHandler_ = function (evt) {
      return _this.handleTouchEnd_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.close();
      }
    };
    return _this;
  }

  _createClass(MDCTemporaryDrawerFoundation, [{
    key: 'init',
    value: function init() {
      var _MDCTemporaryDrawerFo = MDCTemporaryDrawerFoundation.cssClasses,
          ROOT = _MDCTemporaryDrawerFo.ROOT,
          OPEN = _MDCTemporaryDrawerFo.OPEN;


      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      } else {
        this.detabinate_();
        this.isOpen_ = false;
      }

      // Make browser aware of custom property being used in this element.
      // Workaround for certain types of hard-to-reproduce heisenbugs.
      this.adapter_.updateCssVariable(0);

      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.registerDrawerInteractionHandler('click', this.drawerClickHandler_);
      this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
      this.adapter_.deregisterDrawerInteractionHandler('click', this.drawerClickHandler_);
      this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
      // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    }
  }, {
    key: 'open',
    value: function open() {
      // Make sure custom property values are cleared before starting.
      this.adapter_.updateCssVariable('');

      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.addClass(MDCTemporaryDrawerFoundation.cssClasses.ANIMATING);
      this.adapter_.addClass(MDCTemporaryDrawerFoundation.cssClasses.OPEN);
      this.retabinate_();
      this.isOpen_ = true;
    }
  }, {
    key: 'close',
    value: function close() {
      // Make sure custom property values are cleared before making any changes.
      this.adapter_.updateCssVariable('');

      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.addClass(MDCTemporaryDrawerFoundation.cssClasses.ANIMATING);
      this.adapter_.removeClass(MDCTemporaryDrawerFoundation.cssClasses.OPEN);
      this.detabinate_();
      this.isOpen_ = false;
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }

    /**
     *  Render all children of the drawer inert when it's closed.
     */

  }, {
    key: 'detabinate_',
    value: function detabinate_() {
      if (this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.saveElementTabState(elements[i]);
          this.adapter_.makeElementUntabbable(elements[i]);
        }
      }

      this.inert_ = true;
    }

    /**
     *  Make all children of the drawer tabbable again when it's open.
     */

  }, {
    key: 'retabinate_',
    value: function retabinate_() {
      if (!this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.restoreElementTabState(elements[i]);
        }
      }

      this.inert_ = false;
    }
  }, {
    key: 'handleTouchStart_',
    value: function handleTouchStart_(evt) {
      if (!this.adapter_.hasClass(MDCTemporaryDrawerFoundation.cssClasses.OPEN)) {
        return;
      }
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.direction_ = this.adapter_.isRtl() ? -1 : 1;
      this.drawerWidth_ = this.adapter_.getDrawerWidth();
      this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
      this.currentX_ = this.startX_;
      this.touchingSideNav_ = true;

      requestAnimationFrame(this.updateDrawer_.bind(this));
    }
  }, {
    key: 'handleTouchMove_',
    value: function handleTouchMove_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
    }
  }, {
    key: 'handleTouchEnd_',
    value: function handleTouchEnd_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.touchingSideNav_ = false;
      this.adapter_.setTranslateX(null);
      this.adapter_.updateCssVariable('');

      var newPos = null;
      if (this.direction_ === 1) {
        newPos = Math.min(0, this.currentX_ - this.startX_);
      } else {
        newPos = Math.max(0, this.currentX_ - this.startX_);
      }

      // Did the user close the drawer by more than 50%?
      if (Math.abs(newPos / this.drawerWidth_) >= 0.5) {
        this.close();
      } else {
        // Triggering an open here means we'll get a nice animation back to the fully open state.
        this.open();
      }
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      if (!this.touchingSideNav_) {
        return;
      }

      requestAnimationFrame(this.updateDrawer_.bind(this));

      var newPos = null;
      var newOpacity = null;

      if (this.direction_ === 1) {
        newPos = Math.min(0, this.currentX_ - this.startX_);
      } else {
        newPos = Math.max(0, this.currentX_ - this.startX_);
      }

      newOpacity = Math.max(0, 1 + this.direction_ * (newPos / this.drawerWidth_));

      this.adapter_.setTranslateX(newPos);
      this.adapter_.updateCssVariable(newOpacity);
    }
  }]);

  return MDCTemporaryDrawerFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCTemporaryDrawerFoundation);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(45);
/* unused harmony reexport MDCTemporaryDrawerFoundation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCTemporaryDrawer; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var MDCTemporaryDrawer = function (_MDCComponent) {
  _inherits(MDCTemporaryDrawer, _MDCComponent);

  function MDCTemporaryDrawer() {
    _classCallCheck(this, MDCTemporaryDrawer);

    return _possibleConstructorReturn(this, (MDCTemporaryDrawer.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawer)).apply(this, arguments));
  }

  _createClass(MDCTemporaryDrawer, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var _MDCTemporaryDrawerFo = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings,
          FOCUSABLE_ELEMENTS = _MDCTemporaryDrawerFo.FOCUSABLE_ELEMENTS,
          OPACITY_VAR_NAME = _MDCTemporaryDrawerFo.OPACITY_VAR_NAME;


      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.drawer);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["b" /* applyPassive */]());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["b" /* applyPassive */]());
        },
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler);
        },
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* remapEvent */](evt), handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.drawer.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.drawer.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: function getDrawerWidth() {
          return _this2.drawer.offsetWidth;
        },
        setTranslateX: function setTranslateX(value) {
          return _this2.drawer.style.setProperty(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getTransformPropertyName */](), value === null ? null : 'translateX(' + value + 'px)');
        },
        updateCssVariable: function updateCssVariable(value) {
          if (__WEBPACK_IMPORTED_MODULE_2__util__["d" /* supportsCssCustomProperties */]()) {
            _this2.root_.style.setProperty(OPACITY_VAR_NAME, value);
          }
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["e" /* saveElementTabState */](el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return __WEBPACK_IMPORTED_MODULE_2__util__["f" /* restoreElementTabState */](el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        isDrawer: function isDrawer(el) {
          return el === _this2.drawer;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }

    /* Return the drawer element inside the component. */

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].strings.DRAWER_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTemporaryDrawer(root);
    }
  }]);

  return MDCTemporaryDrawer;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = remapEvent;
/* harmony export (immutable) */ __webpack_exports__["c"] = getTransformPropertyName;
/* harmony export (immutable) */ __webpack_exports__["d"] = supportsCssCustomProperties;
/* harmony export (immutable) */ __webpack_exports__["b"] = applyPassive;
/* harmony export (immutable) */ __webpack_exports__["e"] = saveElementTabState;
/* harmony export (immutable) */ __webpack_exports__["f"] = restoreElementTabState;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TAB_DATA = 'data-mdc-tabindex';
var TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

var storedTransformPropertyName_ = void 0;
var supportsPassive_ = void 0;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName) {
  var globalObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (!('ontouchstart' in globalObj.document)) {
    switch (eventName) {
      case 'touchstart':
        return 'pointerdown';
      case 'touchmove':
        return 'pointermove';
      case 'touchend':
        return 'pointerup';
      default:
        return eventName;
    }
  }

  return eventName;
}

// Choose the correct transform property to use on the current browser.
function getTransformPropertyName() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : '-webkit-transform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  if ('CSS' in globalObj) {
    return globalObj.CSS.supports('(--color: red)');
  }
  return false;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

// Save the tab state for an element.
function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var ROOT = 'mdc-radio';

var MDCRadioFoundation = function (_MDCFoundation) {
  _inherits(MDCRadioFoundation, _MDCFoundation);

  function MDCRadioFoundation() {
    _classCallCheck(this, MDCRadioFoundation);

    return _possibleConstructorReturn(this, (MDCRadioFoundation.__proto__ || Object.getPrototypeOf(MDCRadioFoundation)).apply(this, arguments));
  }

  _createClass(MDCRadioFoundation, [{
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;

      this.getNativeControl_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        disabled: false
      };
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return {
        ROOT: ROOT,
        DISABLED: ROOT + '--disabled'
      };
    }
  }, {
    key: 'strings',
    get: function get() {
      return {
        NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control'
      };
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        getNativeControl: function getNativeControl() /* HTMLInputElement */{}
      };
    }
  }]);

  return MDCRadioFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCRadioFoundation);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(46);
/* unused harmony reexport MDCRadioFoundation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRadio; });
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var MDCRadio = function (_MDCComponent) {
  _inherits(MDCRadio, _MDCComponent);

  _createClass(MDCRadio, [{
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCRadio(root);
    }
  }]);

  function MDCRadio() {
    var _ref;

    _classCallCheck(this, MDCRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCRadio.__proto__ || Object.getPrototypeOf(MDCRadio)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCRadio, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = Object.assign(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */].createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
        // UI we desire.
        isSurfaceActive: function isSurfaceActive() {
          return false;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeControl_.removeEventListener(type, handler);
        },
        computeBoundingRect: function computeBoundingRect() {
          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          var DIM = 40;
          return {
            top: top,
            left: left,
            right: left + DIM,
            bottom: top + DIM,
            width: DIM,
            height: DIM
          };
        }
      });
      var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["b" /* MDCRippleFoundation */](adapter);
      return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["a" /* MDCRipple */](this.root_, foundation);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCRadio.prototype.__proto__ || Object.getPrototypeOf(MDCRadio.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        getNativeControl: function getNativeControl() {
          return _this3.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR);
        }
      });
    }
  }, {
    key: 'nativeControl_',
    get: function get() {
      return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.NATIVE_CONTROL_SELECTOR);
    }
  }]);

  return MDCRadio;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROOT */
/* unused harmony export UPGRADED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ROOT = 'mdc-ripple';
var UPGRADED = ROOT + '-upgraded';

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: UPGRADED,
  UNBOUNDED: UPGRADED + '--unbounded',
  BG_ACTIVE: UPGRADED + '--background-active',
  BG_BOUNDED_ACTIVE_FILL: UPGRADED + '--background-bounded-active-fill',
  FG_BOUNDED_ACTIVE_FILL: UPGRADED + '--foreground-bounded-active-fill',
  FG_UNBOUNDED_ACTIVATION: UPGRADED + '--foreground-unbounded-activation',
  FG_UNBOUNDED_DEACTIVATION: UPGRADED + '--foreground-unbounded-deactivation'
};

var strings = {
  VAR_SURFACE_WIDTH: '--' + ROOT + '-surface-width',
  VAR_SURFACE_HEIGHT: '--' + ROOT + '-surface-height',
  VAR_FG_SIZE: '--' + ROOT + '-fg-size',
  VAR_FG_UNBOUNDED_OPACITY_DURATION: '--' + ROOT + '-fg-unbounded-opacity-duration',
  VAR_FG_UNBOUNDED_TRANSFORM_DURATION: '--' + ROOT + '-fg-unbounded-transform-duration',
  VAR_LEFT: '--' + ROOT + '-left',
  VAR_TOP: '--' + ROOT + '-top',
  VAR_TRANSLATE_END: '--' + ROOT + '-translate-end',
  VAR_FG_APPROX_XF: '--' + ROOT + '-fg-approx-xf',
  VAR_FG_SCALE: '--' + ROOT + '-fg-scale',
  VAR_FG_TRANSLATE_START: '--' + ROOT + '-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--' + ROOT + '-fg-translate-end'
};

var numbers = {
  FG_TRANSFORM_DELAY_MS: 80,
  OPACITY_DURATION_DIVISOR: 3,
  ACTIVE_OPACITY_DURATION_MS: 110,
  MIN_OPACITY_DURATION_MS: 200,
  UNBOUNDED_TRANSFORM_DURATION_MS: 200,
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus'
};

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',


    // We compute this property so that we are not querying information about the client
    // until the point in time where the foundation requests it. This prevents scenarios where
    // client-side feature-detection may happen too early, such as when components are rendered on the server
    // and then initialized at mount time on the client.
    get: function get() {
      return this.adapter_.browserSupportsCssVars();
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;
    _this.frame_ = { width: 0, height: 0 };
    _this.activationState_ = _this.defaultActivationState_();
    _this.xfDuration_ = 0;
    _this.initialSize_ = 0;
    _this.maxRadius_ = 0;
    _this.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];
    _this.listeners_ = {
      activate: function activate(e) {
        return _this.activate_(e);
      },
      deactivate: function deactivate(e) {
        return _this.deactivate_(e);
      },
      focus: function focus() {
        return requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_ACTIVE);
        });
      },
      blur: function blur() {
        return requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_ACTIVE);
        });
      }
    };
    _this.unboundedOpacityFadeTimer_ = 0;
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    _this.cancelBgBounded_ = function () {};
    _this.cancelFgBounded_ = function () {};
    _this.cancelFgUnbounded_ = function () {};
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.fgScale_ = 0;
    return _this;
  }

  _createClass(MDCRippleFoundation, [{
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationStartTime: 0,
        activationEvent: null
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_) {
        return;
      }
      this.addEventListeners_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
        }
        _this2.layoutInternal_();
      });
    }
  }, {
    key: 'addEventListeners_',
    value: function addEventListeners_() {
      var _this3 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
        });
      });
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this4 = this;

      var activationState = this.activationState_;

      if (activationState.isActivated) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

      activationState.activationStartTime = Date.now();
      requestAnimationFrame(function () {
        // This needs to be wrapped in an rAF call b/c web browsers
        // report active states inconsistently when they're called within
        // event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this4.adapter_.isSurfaceActive() : true;
        if (activationState.wasElementMadeActive) {
          _this4.animateActivation_();
        } else {
          // Reset activation state immediately if element was not made active.
          _this4.activationState_ = _this4.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.activate_(null);
    }
  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this5 = this;

      var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE = _MDCRippleFoundation$2.BG_ACTIVE,
          BG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$2.BG_BOUNDED_ACTIVE_FILL,
          FG_UNBOUNDED_DEACTIVATION = _MDCRippleFoundation$2.FG_UNBOUNDED_DEACTIVATION,
          FG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$2.FG_BOUNDED_ACTIVE_FILL;

      // If ripple is currently deactivating, cancel those animations.

      [BG_BOUNDED_ACTIVE_FILL, FG_UNBOUNDED_DEACTIVATION, FG_BOUNDED_ACTIVE_FILL].forEach(function (c) {
        return _this5.adapter_.removeClass(c);
      });
      this.cancelBgBounded_();
      this.cancelFgBounded_();
      this.cancelFgUnbounded_();
      if (this.unboundedOpacityFadeTimer_) {
        clearTimeout(this.unboundedOpacityFadeTimer_);
        this.unboundedOpacityFadeTimer_ = 0;
      }

      this.adapter_.addClass(BG_ACTIVE);
      if (this.adapter_.isUnbounded()) {
        this.animateUnboundedActivation_();
      }
    }
  }, {
    key: 'animateUnboundedActivation_',
    value: function animateUnboundedActivation_() {
      var FG_UNBOUNDED_ACTIVATION = MDCRippleFoundation.cssClasses.FG_UNBOUNDED_ACTIVATION;

      this.adapter_.addClass(FG_UNBOUNDED_ACTIVATION);
    }
  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this6 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.

      if (!activationState.isActivated) {
        return;
      }
      // Programmatic deactivation.
      if (activationState.isProgrammatic) {
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(null, Object.assign({}, activationState));
        });
        this.activationState_ = this.defaultActivationState_();
        return;
      }
      var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
      var expectedActivationType = activationState.activationEvent.type;
      // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
      // Essentially, what we need to do here is decouple the deactivation UX from the actual
      // deactivation state itself. This way, touch/pointer events in sequence do not trample one
      // another.
      var needsDeactivationUX = actualActivationType === expectedActivationType;
      var needsActualDeactivation = needsDeactivationUX;
      if (activationState.wasActivatedByPointer) {
        needsActualDeactivation = e.type === 'mouseup';
      }

      var state = Object.assign({}, activationState);
      if (needsDeactivationUX) {
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(e, state);
        });
      }
      if (needsActualDeactivation) {
        this.activationState_ = this.defaultActivationState_();
      }
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.deactivate_(null);
    }
  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive,
          activationStartTime = _ref.activationStartTime,
          isProgrammatic = _ref.isProgrammatic;
      var BG_ACTIVE = MDCRippleFoundation.cssClasses.BG_ACTIVE;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.adapter_.removeClass(BG_ACTIVE);
        var isPointerEvent = isProgrammatic ? false : e.type === 'touchend' || e.type === 'pointerup' || e.type === 'mouseup';
        if (this.adapter_.isUnbounded()) {
          this.animateUnboundedDeactivation_(this.getUnboundedDeactivationInfo_(activationStartTime));
        } else {
          this.animateBoundedDeactivation_(e, isPointerEvent);
        }
      }
    }
  }, {
    key: 'animateUnboundedDeactivation_',
    value: function animateUnboundedDeactivation_(_ref2) {
      var _this7 = this;

      var opacityDuration = _ref2.opacityDuration,
          transformDuration = _ref2.transformDuration,
          approxCurScale = _ref2.approxCurScale;
      var _MDCRippleFoundation$3 = MDCRippleFoundation.cssClasses,
          FG_UNBOUNDED_ACTIVATION = _MDCRippleFoundation$3.FG_UNBOUNDED_ACTIVATION,
          FG_UNBOUNDED_DEACTIVATION = _MDCRippleFoundation$3.FG_UNBOUNDED_DEACTIVATION;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.strings,
          VAR_FG_UNBOUNDED_OPACITY_DURATION = _MDCRippleFoundation$4.VAR_FG_UNBOUNDED_OPACITY_DURATION,
          VAR_FG_UNBOUNDED_TRANSFORM_DURATION = _MDCRippleFoundation$4.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
          VAR_FG_APPROX_XF = _MDCRippleFoundation$4.VAR_FG_APPROX_XF;


      this.adapter_.updateCssVariable(VAR_FG_APPROX_XF, 'scale(' + approxCurScale + ')');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_OPACITY_DURATION, opacityDuration + 'ms');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_TRANSFORM_DURATION, transformDuration + 'ms');
      this.adapter_.addClass(FG_UNBOUNDED_DEACTIVATION);
      this.adapter_.removeClass(FG_UNBOUNDED_ACTIVATION);
      // We use setTimeout here since we know how long the fade will take.
      this.unboundedOpacityFadeTimer_ = setTimeout(function () {
        _this7.adapter_.removeClass(FG_UNBOUNDED_DEACTIVATION);
      }, opacityDuration);
    }
  }, {
    key: 'getUnboundedDeactivationInfo_',
    value: function getUnboundedDeactivationInfo_(activationStartTime) {
      var msElapsed = Date.now() - activationStartTime;
      var _MDCRippleFoundation$5 = MDCRippleFoundation.numbers,
          FG_TRANSFORM_DELAY_MS = _MDCRippleFoundation$5.FG_TRANSFORM_DELAY_MS,
          OPACITY_DURATION_DIVISOR = _MDCRippleFoundation$5.OPACITY_DURATION_DIVISOR,
          ACTIVE_OPACITY_DURATION_MS = _MDCRippleFoundation$5.ACTIVE_OPACITY_DURATION_MS,
          UNBOUNDED_TRANSFORM_DURATION_MS = _MDCRippleFoundation$5.UNBOUNDED_TRANSFORM_DURATION_MS,
          MIN_OPACITY_DURATION_MS = _MDCRippleFoundation$5.MIN_OPACITY_DURATION_MS;


      var approxCurScale = 0;
      if (msElapsed > FG_TRANSFORM_DELAY_MS) {
        var percentComplete = Math.min((msElapsed - FG_TRANSFORM_DELAY_MS) / this.xfDuration_, 1);
        approxCurScale = percentComplete * this.fgScale_;
      }

      var transformDuration = UNBOUNDED_TRANSFORM_DURATION_MS;
      var approxOpacity = Math.min(msElapsed / ACTIVE_OPACITY_DURATION_MS, 1);
      var opacityDuration = Math.max(MIN_OPACITY_DURATION_MS, 1000 * approxOpacity / OPACITY_DURATION_DIVISOR);

      return { transformDuration: transformDuration, opacityDuration: opacityDuration, approxCurScale: approxCurScale };
    }
  }, {
    key: 'animateBoundedDeactivation_',
    value: function animateBoundedDeactivation_(e, isPointerEvent) {
      var startPoint = void 0;
      if (isPointerEvent) {
        startPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* getNormalizedEventCoords */])(e, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }

      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      var _MDCRippleFoundation$6 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$6.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$6.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$7 = MDCRippleFoundation.cssClasses,
          BG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$7.BG_BOUNDED_ACTIVE_FILL,
          FG_BOUNDED_ACTIVE_FILL = _MDCRippleFoundation$7.FG_BOUNDED_ACTIVE_FILL;

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, startPoint.x + 'px, ' + startPoint.y + 'px');
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, endPoint.x + 'px, ' + endPoint.y + 'px');
      this.cancelBgBounded_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* animateWithClass */])(this.adapter_, BG_BOUNDED_ACTIVE_FILL, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectEventName */])(window, 'transitionend'));
      this.cancelFgBounded_ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* animateWithClass */])(this.adapter_, FG_BOUNDED_ACTIVE_FILL, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__material_animation__["a" /* getCorrectEventName */])(window, 'animationend'));
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this8 = this;

      if (!this.isSupported_) {
        return;
      }
      this.removeEventListeners_();

      var _MDCRippleFoundation$8 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$8.ROOT,
          UNBOUNDED = _MDCRippleFoundation$8.UNBOUNDED;

      requestAnimationFrame(function () {
        _this8.adapter_.removeClass(ROOT);
        _this8.adapter_.removeClass(UNBOUNDED);
        _this8.removeCssVars_();
      });
    }
  }, {
    key: 'removeEventListeners_',
    value: function removeEventListeners_() {
      var _this9 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this9.adapter_.deregisterInteractionHandler(info[k], _this9.listeners_[k]);
        });
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this10 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this10.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this11 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this11.layoutInternal_();
        _this11.layoutFrame_ = 0;
      });
    }
  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      this.frame_ = this.adapter_.computeBoundingRect();

      var maxDim = Math.max(this.frame_.height, this.frame_.width);
      var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

      // 60% of the largest dimension of the surface
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

      // Diameter of the surface + 10px
      this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;
      this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
      this.updateLayoutCssVars_();
    }
  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$9 = MDCRippleFoundation.strings,
          VAR_SURFACE_WIDTH = _MDCRippleFoundation$9.VAR_SURFACE_WIDTH,
          VAR_SURFACE_HEIGHT = _MDCRippleFoundation$9.VAR_SURFACE_HEIGHT,
          VAR_FG_SIZE = _MDCRippleFoundation$9.VAR_FG_SIZE,
          VAR_FG_UNBOUNDED_TRANSFORM_DURATION = _MDCRippleFoundation$9.VAR_FG_UNBOUNDED_TRANSFORM_DURATION,
          VAR_LEFT = _MDCRippleFoundation$9.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$9.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$9.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, this.frame_.width + 'px');
      this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, this.frame_.height + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_UNBOUNDED_TRANSFORM_DURATION, this.xfDuration_ + 'ms');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }
  }]);

  return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getMatchesProperty */])(HTMLElement.prototype);



var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  function MDCRipple() {
    _classCallCheck(this, MDCRipple);

    return _possibleConstructorReturn(this, (MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).apply(this, arguments));
  }

  _createClass(MDCRipple, [{
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    },
    set: function set(unbounded) {
      var UNBOUNDED = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].cssClasses.UNBOUNDED;

      this.unbounded_ = Boolean(unbounded);
      if (this.unbounded_) {
        this.root_.classList.add(UNBOUNDED);
      } else {
        this.root_.classList.remove(UNBOUNDED);
      }
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isUnbounded = _ref.isUnbounded,
          isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = isUnbounded;
      }
      return ripple;
    }
  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* supportsCssVariables */])(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return numbers; });
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_SURFACE_WIDTH: '--mdc-ripple-surface-width',
  VAR_SURFACE_HEIGHT: '--mdc-ripple-surface-height',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 300
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus'
};

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',


    // We compute this property so that we are not querying information about the client
    // until the point in time where the foundation requests it. This prevents scenarios where
    // client-side feature-detection may happen too early, such as when components are rendered on the server
    // and then initialized at mount time on the client.
    get: function get() {
      return this.adapter_.browserSupportsCssVars();
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* cssClasses */];
    }
  }, {
    key: 'strings',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* strings */];
    }
  }, {
    key: 'numbers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* numbers */];
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;
    _this.frame_ = { width: 0, height: 0 };
    _this.activationState_ = _this.defaultActivationState_();
    _this.xfDuration_ = 0;
    _this.initialSize_ = 0;
    _this.maxRadius_ = 0;
    _this.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];
    _this.listeners_ = {
      activate: function activate(e) {
        return _this.activate_(e);
      },
      deactivate: function deactivate(e) {
        return _this.deactivate_(e);
      },
      focus: function focus() {
        return requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      },
      blur: function blur() {
        return requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      }
    };
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.fgScale_ = 0;
    _this.activationTimer_ = 0;
    _this.activationAnimationHasEnded_ = false;
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };
    return _this;
  }

  _createClass(MDCRippleFoundation, [{
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationStartTime: 0,
        activationEvent: null,
        isProgrammatic: false
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_) {
        return;
      }
      this.addEventListeners_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
        }
        _this2.layoutInternal_();
      });
    }
  }, {
    key: 'addEventListeners_',
    value: function addEventListeners_() {
      var _this3 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
        });
      });
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this4 = this;

      var activationState = this.activationState_;

      if (activationState.isActivated) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';
      activationState.activationStartTime = Date.now();

      requestAnimationFrame(function () {
        // This needs to be wrapped in an rAF call b/c web browsers
        // report active states inconsistently when they're called within
        // event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this4.adapter_.isSurfaceActive() : true;
        if (activationState.wasElementMadeActive) {
          _this4.animateActivation_();
        } else {
          // Reset activation state immediately if element was not made active.
          _this4.activationState_ = _this4.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.activate_(null);
    }
  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this5 = this;

      var _MDCRippleFoundation$2 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$3 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE_FILL = _MDCRippleFoundation$3.BG_ACTIVE_FILL,
          FG_DEACTIVATION = _MDCRippleFoundation$3.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$3.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(BG_ACTIVE_FILL);
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this5.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }
  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var activationState = this.activationState_;
      var activationEvent = activationState.activationEvent,
          wasActivatedByPointer = activationState.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* getNormalizedEventCoords */])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }
  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_ = this.activationState_,
          hasDeactivationUXRun = _activationState_.hasDeactivationUXRun,
          isActivated = _activationState_.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;
      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        // Note that we don't need to remove this here since it's removed on re-activation.
        this.adapter_.addClass(FG_DEACTIVATION);
      }
    }
  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE_FILL = _MDCRippleFoundation$4.BG_ACTIVE_FILL,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;

      this.adapter_.removeClass(BG_ACTIVE_FILL);
      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this6 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.

      if (!activationState.isActivated) {
        return;
      }
      // Programmatic deactivation.
      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(evtObject, Object.assign({}, activationState));
        });
        this.activationState_ = this.defaultActivationState_();
        return;
      }

      var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
      var expectedActivationType = activationState.activationEvent.type;
      // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
      // Essentially, what we need to do here is decouple the deactivation UX from the actual
      // deactivation state itself. This way, touch/pointer events in sequence do not trample one
      // another.
      var needsDeactivationUX = actualActivationType === expectedActivationType;
      var needsActualDeactivation = needsDeactivationUX;
      if (activationState.wasActivatedByPointer) {
        needsActualDeactivation = e.type === 'mouseup';
      }

      var state = Object.assign({}, activationState);
      requestAnimationFrame(function () {
        if (needsDeactivationUX) {
          _this6.activationState_.hasDeactivationUXRun = true;
          _this6.animateDeactivation_(e, state);
        }

        if (needsActualDeactivation) {
          _this6.activationState_ = _this6.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.deactivate_(null);
    }
  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;
      var BG_FOCUSED = MDCRippleFoundation.cssClasses.BG_FOCUSED;

      if (wasActivatedByPointer || wasElementMadeActive) {
        // Remove class left over by element being focused
        this.adapter_.removeClass(BG_FOCUSED);
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this7 = this;

      if (!this.isSupported_) {
        return;
      }
      this.removeEventListeners_();

      var _MDCRippleFoundation$5 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$5.ROOT,
          UNBOUNDED = _MDCRippleFoundation$5.UNBOUNDED;

      requestAnimationFrame(function () {
        _this7.adapter_.removeClass(ROOT);
        _this7.adapter_.removeClass(UNBOUNDED);
        _this7.removeCssVars_();
      });
    }
  }, {
    key: 'removeEventListeners_',
    value: function removeEventListeners_() {
      var _this8 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this8.adapter_.deregisterInteractionHandler(info[k], _this8.listeners_[k]);
        });
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this9 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this9.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this10 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this10.layoutInternal_();
        _this10.layoutFrame_ = 0;
      });
    }
  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      this.frame_ = this.adapter_.computeBoundingRect();

      var maxDim = Math.max(this.frame_.height, this.frame_.width);
      var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

      // 60% of the largest dimension of the surface
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

      // Diameter of the surface + 10px
      this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;
      this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
      this.updateLayoutCssVars_();
    }
  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$6 = MDCRippleFoundation.strings,
          VAR_SURFACE_WIDTH = _MDCRippleFoundation$6.VAR_SURFACE_WIDTH,
          VAR_SURFACE_HEIGHT = _MDCRippleFoundation$6.VAR_SURFACE_HEIGHT,
          VAR_FG_SIZE = _MDCRippleFoundation$6.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$6.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$6.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$6.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, this.frame_.width + 'px');
      this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, this.frame_.height + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }
  }]);

  return MDCRippleFoundation;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["b" /* MDCFoundation */]);

/* harmony default export */ __webpack_exports__["a"] = (MDCRippleFoundation);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(11);
/* unused harmony reexport MDCRippleFoundation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MDCRipple; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var MATCHES = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* getMatchesProperty */])(HTMLElement.prototype);



var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  function MDCRipple() {
    _classCallCheck(this, MDCRipple);

    return _possibleConstructorReturn(this, (MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).apply(this, arguments));
  }

  _createClass(MDCRipple, [{
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */](MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    },
    set: function set(unbounded) {
      var UNBOUNDED = __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */].cssClasses.UNBOUNDED;

      this.unbounded_ = Boolean(unbounded);
      if (this.unbounded_) {
        this.root_.classList.add(UNBOUNDED);
      } else {
        this.root_.classList.remove(UNBOUNDED);
      }
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isUnbounded = _ref.isUnbounded,
          isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = isUnbounded;
      }
      return ripple;
    }
  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* supportsCssVariables */])(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(__WEBPACK_IMPORTED_MODULE_0__material_base__["a" /* MDCComponent */]);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_checkbox___ = __webpack_require__(31);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 */

var Checkbox = function (_MaterialComponent) {
	_inherits(Checkbox, _MaterialComponent);

	function Checkbox() {
		_classCallCheck(this, Checkbox);

		var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));

		_this.componentName = "checkbox";
		return _this;
	}

	_createClass(Checkbox, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_checkbox___["a" /* MDCCheckbox */](this.control);
		}
	}, {
		key: "materialDom",
		value: function materialDom(props) {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"div",
				{ "class": "mdc-checkbox", ref: function ref(control) {
						_this2.control = control;
					} },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", _extends({
					type: "checkbox",
					"class": "mdc-checkbox__native-control"
				}, props)),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ "class": "mdc-checkbox__background" },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						"svg",
						{
							version: "1.1",
							"class": "mdc-checkbox__checkmark",
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 24 24"
						},
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("path", {
							"class": "mdc-checkbox__checkmark__path",
							fill: "none",
							stroke: "white",
							d: "M1.73,12.91 8.1,19.28 22.79,4.59"
						})
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "mdc-checkbox__mixedmark" })
				)
			);
		}
	}]);

	return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_dialog___ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__(4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 */

var Dialog = function (_MaterialComponent) {
	_inherits(Dialog, _MaterialComponent);

	function Dialog() {
		_classCallCheck(this, Dialog);

		var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this));

		_this.componentName = "dialog";
		return _this;
	}

	_createClass(Dialog, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.MDComponent = new __WEBPACK_IMPORTED_MODULE_2__material_dialog___["a" /* MDCDialog */](this.control);
		}
	}, {
		key: "materialDom",
		value: function materialDom(props) {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"aside",
				_extends({
					role: "alertdialog",
					"aria-hidden": "true",
					ref: function ref(control) {
						_this2.control = control;
					}
				}, props),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ "class": "mdc-dialog__surface" },
					props.children
				),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "mdc-dialog__backdrop" })
			);
		}
	}]);

	return Dialog;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var DialogHeader = function (_MaterialComponent2) {
	_inherits(DialogHeader, _MaterialComponent2);

	function DialogHeader() {
		_classCallCheck(this, DialogHeader);

		var _this3 = _possibleConstructorReturn(this, (DialogHeader.__proto__ || Object.getPrototypeOf(DialogHeader)).call(this));

		_this3.componentName = "dialog__header";
		return _this3;
	}

	_createClass(DialogHeader, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"header",
				props,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"h2",
					{ id: "my-mdc-dialog-label", "class": "mdc-dialog__header__title" },
					props.children
				)
			);
		}
	}]);

	return DialogHeader;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop scrollable = false
 */


var DialogBody = function (_MaterialComponent3) {
	_inherits(DialogBody, _MaterialComponent3);

	function DialogBody() {
		_classCallCheck(this, DialogBody);

		var _this4 = _possibleConstructorReturn(this, (DialogBody.__proto__ || Object.getPrototypeOf(DialogBody)).call(this));

		_this4.componentName = "dialog__body";
		_this4._mdcProps = ["scrollable"];
		return _this4;
	}

	_createClass(DialogBody, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"section",
				props,
				props.children
			);
		}
	}]);

	return DialogBody;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var DialogFooter = function (_MaterialComponent4) {
	_inherits(DialogFooter, _MaterialComponent4);

	function DialogFooter() {
		_classCallCheck(this, DialogFooter);

		var _this5 = _possibleConstructorReturn(this, (DialogFooter.__proto__ || Object.getPrototypeOf(DialogFooter)).call(this));

		_this5.componentName = "dialog__footer";
		return _this5;
	}

	_createClass(DialogFooter, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"footer",
				props,
				props.children
			);
		}
	}]);

	return DialogFooter;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop cancel = false
 * @prop accept = false
 */


var DialogFooterButton = function (_Button) {
	_inherits(DialogFooterButton, _Button);

	function DialogFooterButton() {
		_classCallCheck(this, DialogFooterButton);

		var _this6 = _possibleConstructorReturn(this, (DialogFooterButton.__proto__ || Object.getPrototypeOf(DialogFooterButton)).call(this));

		_this6.componentName = "dialog__footer__button";
		_this6._mdcProps = ["cancel", "accept"];
		return _this6;
	}

	_createClass(DialogFooterButton, [{
		key: "materialDom",
		value: function materialDom(props) {
			var _this7 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"button",
				{ className: "mdc-button", ref: function ref(control) {
						_this7.control = control;
					} },
				props.children
			);
		}
	}]);

	return DialogFooterButton;
}(__WEBPACK_IMPORTED_MODULE_3__Button__["a" /* default */]);

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.FooterButton = DialogFooterButton;

/* harmony default export */ __webpack_exports__["a"] = (Dialog);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_drawer_temporary__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__List__ = __webpack_require__(6);
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var TemporaryDrawer = function (_MaterialComponent) {
	_inherits(TemporaryDrawer, _MaterialComponent);

	function TemporaryDrawer() {
		_classCallCheck(this, TemporaryDrawer);

		var _this = _possibleConstructorReturn(this, (TemporaryDrawer.__proto__ || Object.getPrototypeOf(TemporaryDrawer)).call(this));

		_this.componentName = "temporary-drawer";
		return _this;
	}

	_createClass(TemporaryDrawer, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.MDComponent = __WEBPACK_IMPORTED_MODULE_2__material_drawer_temporary__["a" /* MDCTemporaryDrawer */].attachTo(this.control);
		}
	}, {
		key: "materialDom",
		value: function materialDom(props) {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"aside",
				_extends({ className: "mdc-typography", ref: function ref(control) {
						_this2.control = control;
					} }, props),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"nav",
					{ "class": "mdc-temporary-drawer__drawer" },
					props.children
				)
			);
		}
	}]);

	return TemporaryDrawer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var TemporaryDrawerHeader = function (_MaterialComponent2) {
	_inherits(TemporaryDrawerHeader, _MaterialComponent2);

	function TemporaryDrawerHeader() {
		_classCallCheck(this, TemporaryDrawerHeader);

		var _this3 = _possibleConstructorReturn(this, (TemporaryDrawerHeader.__proto__ || Object.getPrototypeOf(TemporaryDrawerHeader)).call(this));

		_this3.componentName = "temporary-drawer__header";
		return _this3;
	}

	_createClass(TemporaryDrawerHeader, [{
		key: "materialDom",
		value: function materialDom(props) {
			var _this4 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"header",
				_extends({ ref: function ref(control) {
						_this4.control = control;
					} }, props),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ "class": "mdc-temporary-drawer__header-content" },
					props.children
				)
			);
		}
	}]);

	return TemporaryDrawerHeader;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var TemporaryDrawerContent = function (_MaterialComponent3) {
	_inherits(TemporaryDrawerContent, _MaterialComponent3);

	function TemporaryDrawerContent() {
		_classCallCheck(this, TemporaryDrawerContent);

		var _this5 = _possibleConstructorReturn(this, (TemporaryDrawerContent.__proto__ || Object.getPrototypeOf(TemporaryDrawerContent)).call(this));

		_this5.componentName = "temporary-drawer__content";
		return _this5;
	}

	_createClass(TemporaryDrawerContent, [{
		key: "materialDom",
		value: function materialDom(props) {
			var _this6 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"nav",
				_extends({ className: "mdc-list", ref: function ref(control) {
						_this6.control = control;
					} }, props),
				props.children
			);
		}
	}]);

	return TemporaryDrawerContent;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop spacer = false
 */


var PermanentDrawer = function (_MaterialComponent4) {
	_inherits(PermanentDrawer, _MaterialComponent4);

	function PermanentDrawer() {
		_classCallCheck(this, PermanentDrawer);

		var _this7 = _possibleConstructorReturn(this, (PermanentDrawer.__proto__ || Object.getPrototypeOf(PermanentDrawer)).call(this));

		_this7.componentName = "permanent-drawer";
		return _this7;
	}

	_createClass(PermanentDrawer, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"nav",
				{ className: "mdc-typography" },
				props.spacer && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "mdc-permanent-drawer__toolbar-spacer" }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ "class": "mdc-permanent-drawer__content" },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						"nav",
						{ "class": "mdc-list" },
						props.children
					)
				)
			);
		}
	}]);

	return PermanentDrawer;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop selected = false
 */


var DrawerItem = function (_List$LinkItem) {
	_inherits(DrawerItem, _List$LinkItem);

	function DrawerItem() {
		_classCallCheck(this, DrawerItem);

		return _possibleConstructorReturn(this, (DrawerItem.__proto__ || Object.getPrototypeOf(DrawerItem)).call(this));
	}

	_createClass(DrawerItem, [{
		key: "materialDom",
		value: function materialDom(props) {
			var returnedNode = _get(DrawerItem.prototype.__proto__ || Object.getPrototypeOf(DrawerItem.prototype), "materialDom", this).call(this, props);
			/* Logic to add selected class */
			if (props.selected) {
				returnedNode.attributes['className'] = 'mdc-temporary-drawer--selected mdc-permanent-drawer--selected';
			}
			return returnedNode;
		}
	}]);

	return DrawerItem;
}(__WEBPACK_IMPORTED_MODULE_3__List__["a" /* default */].LinkItem);

var Drawer = {};

Drawer.DrawerItem = DrawerItem;
Drawer.TemporaryDrawerHeader = TemporaryDrawerHeader;
Drawer.TemporaryDrawerContent = TemporaryDrawerContent;
Drawer.TemporaryDrawer = TemporaryDrawer;
Drawer.PermanentDrawer = PermanentDrawer;

/* harmony default export */ __webpack_exports__["a"] = (Drawer);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @prop mini = false
 * @prop plain = false
 */

var Elevation = function (_MaterialComponent) {
	_inherits(Elevation, _MaterialComponent);

	function Elevation() {
		_classCallCheck(this, Elevation);

		var _this = _possibleConstructorReturn(this, (Elevation.__proto__ || Object.getPrototypeOf(Elevation)).call(this));

		_this.componentName = "elevation";
		_this._mdcProps = [];
		for (var elevationIndex = 0; elevationIndex < 25; elevationIndex++) {
			_this._mdcProps.push("z" + elevationIndex);
		}
		return _this;
	}

	_createClass(Elevation, [{
		key: "materialDom",
		value: function materialDom(props) {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"p",
				_extends({}, props, { ref: function ref(control) {
						return _this2.control = control;
					} }),
				props.children
			);
		}
	}]);

	return Elevation;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Elevation);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @prop mini = false
 * @prop plain = false
 */

var Fab = function (_MaterialComponent) {
	_inherits(Fab, _MaterialComponent);

	function Fab() {
		_classCallCheck(this, Fab);

		var _this = _possibleConstructorReturn(this, (Fab.__proto__ || Object.getPrototypeOf(Fab)).call(this));

		_this.componentName = "fab";
		_this._mdcProps = ["mini", "plain"];
		return _this;
	}

	_createClass(Fab, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_get(Fab.prototype.__proto__ || Object.getPrototypeOf(Fab.prototype), "attachRipple", this).call(this);
		}
	}, {
		key: "materialDom",
		value: function materialDom(props) {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"button",
				_extends({}, props, { ref: function ref(control) {
						return _this2.control = control;
					} }),
				props.children
			);
		}
	}]);

	return Fab;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Fab);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_radio___ = __webpack_require__(47);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * @prop mini = false
 * @prop plain = false
 */

var Radio = function (_MaterialComponent) {
	_inherits(Radio, _MaterialComponent);

	function Radio() {
		_classCallCheck(this, Radio);

		var _this = _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this));

		_this.componentName = "radio";
		return _this;
	}

	_createClass(Radio, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.MDComponent = __WEBPACK_IMPORTED_MODULE_2__material_radio___["a" /* MDCRadio */].attachTo(this.control);
		}
	}, {
		key: "materialDom",
		value: function materialDom(props) {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"div",
				{ ref: function ref(control) {
						_this2.control = control;
					} },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", _extends({ "class": "mdc-radio__native-control", type: "radio" }, props, { name: "radios" })),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ "class": "mdc-radio__background" },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "mdc-radio__outer-circle" }),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "mdc-radio__inner-circle" })
				)
			);
		}
	}]);

	return Radio;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Radio);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @prop disabled = false
 */

var Switch = function (_MaterialComponent) {
	_inherits(Switch, _MaterialComponent);

	function Switch() {
		_classCallCheck(this, Switch);

		var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this));

		_this.componentName = "switch";
		_this._mdcProps = ["disabled"];
		return _this;
	}

	_createClass(Switch, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"div",
				props,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", { type: "checkbox", id: "basic-switch", "class": "mdc-switch__native-control" }),
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					"div",
					{ "class": "mdc-switch__background" },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { "class": "mdc-switch__knob" })
				)
			);
		}
	}]);

	return Switch;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @prop fixed = false
 */

var Toolbar = function (_MaterialComponent) {
	_inherits(Toolbar, _MaterialComponent);

	function Toolbar() {
		_classCallCheck(this, Toolbar);

		var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this));

		_this.componentName = "toolbar";
		_this._mdcProps = ["fixed"];
		return _this;
	}

	_createClass(Toolbar, [{
		key: "materialDom",
		value: function materialDom(props) {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"header",
				_extends({ ref: function ref(control) {
						_this2.control = control;
					} }, props),
				props.children
			);
		}
	}]);

	return Toolbar;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ToolbarRow = function (_MaterialComponent2) {
	_inherits(ToolbarRow, _MaterialComponent2);

	function ToolbarRow() {
		_classCallCheck(this, ToolbarRow);

		var _this3 = _possibleConstructorReturn(this, (ToolbarRow.__proto__ || Object.getPrototypeOf(ToolbarRow)).call(this));

		_this3.componentName = "toolbar__row";
		return _this3;
	}

	return ToolbarRow;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop align-end = false
 * @prop align-start = false
 */


var ToolbarSection = function (_MaterialComponent3) {
	_inherits(ToolbarSection, _MaterialComponent3);

	function ToolbarSection() {
		_classCallCheck(this, ToolbarSection);

		var _this4 = _possibleConstructorReturn(this, (ToolbarSection.__proto__ || Object.getPrototypeOf(ToolbarSection)).call(this));

		_this4.componentName = "toolbar__section";
		_this4._mdcProps = ["align-start", "align-end"];
		return _this4;
	}

	_createClass(ToolbarSection, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"section",
				props,
				props.children
			);
		}
	}]);

	return ToolbarSection;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var ToolbarIcon = function (_MaterialComponent4) {
	_inherits(ToolbarIcon, _MaterialComponent4);

	function ToolbarIcon() {
		_classCallCheck(this, ToolbarIcon);

		var _this5 = _possibleConstructorReturn(this, (ToolbarIcon.__proto__ || Object.getPrototypeOf(ToolbarIcon)).call(this));

		_this5.componentName = "toolbal__icon";
		_this5._mdcProps = ["align-end"];
		return _this5;
	}

	_createClass(ToolbarIcon, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"a",
				_extends({ className: "material-icons" }, props),
				props.children || 'menu'
			);
		}
	}]);

	return ToolbarIcon;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/**
 * @prop title = ''
 */


var ToolbarTitle = function (_MaterialComponent5) {
	_inherits(ToolbarTitle, _MaterialComponent5);

	function ToolbarTitle() {
		_classCallCheck(this, ToolbarTitle);

		var _this6 = _possibleConstructorReturn(this, (ToolbarTitle.__proto__ || Object.getPrototypeOf(ToolbarTitle)).call(this));

		_this6.componentName = "toolbar__title";
		return _this6;
	}

	_createClass(ToolbarTitle, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				"span",
				props,
				props.children
			);
		}
	}]);

	return ToolbarTitle;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Toolbar.Section = ToolbarSection;
Toolbar.Icon = ToolbarIcon;
Toolbar.Title = ToolbarTitle;
Toolbar.Row = ToolbarRow;

/* harmony default export */ __webpack_exports__["a"] = (Toolbar);

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 69 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 70 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[27]);