/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var expect = chai.expect;

	/**
	 * DOM
	 */
	describe('DOM', function () {
	    /**
	     * parseHTML
	     */
	    describe('parseHTML()', function () {
	        var str = undefined,
	            dom = undefined;
	        it('should return \<div\>', function () {
	            str = '<div class="test"><span>test</span></div>';
	            dom = _utils2['default'].parseHTML(str);
	            expect(dom.tagName).to.equal('DIV');
	            expect(dom.className).to.equal('test');
	        });
	        it('should return two \<p\>', function () {
	            str = '<p class="test">test1</p><p class="test">test2</p>';
	            dom = _utils2['default'].parseHTML(str);
	            expect(dom).to.have.length(2);
	            expect(dom[0].className).to.equal('test');
	        });
	    });

	    /**
	     * getUrlParam
	     */
	    describe('getUrlParam()', function () {
	        var pathname = window.location.pathname;
	        var ret = undefined;
	        if (history.pushState) {

	            it('should return correct value', function () {
	                history.pushState({}, '', pathname + '?name=test&&参数=测试');
	                ret = _utils2['default'].getUrlParam('name');
	                expect(ret).to.equal('test');
	                ret = _utils2['default'].getUrlParam('参数');
	                expect(ret).to.equal('测试');
	            });

	            it('should return empty', function () {
	                history.pushState({}, '', pathname + '?name=');
	                ret = _utils2['default'].getUrlParam('name');
	                expect(ret).to.equal("");

	                history.pushState({}, '', pathname);
	                ret = _utils2['default'].getUrlParam('name');
	                expect(ret).to.equal("");
	            });
	        }
	    });
	});

	/**
	 * Array
	 */
	describe('Array', function () {
	    /**
	     * duplicate
	     */
	    describe('duplicate()', function () {
	        it('should return a unique array', function () {
	            var arr = [3, 213, 213, true, false, undefined, null, false, -3.2, -3.2];
	            var unique = [3, 213, true, false, undefined, null, -3.2];
	            var ret = _utils2['default'].duplicate(arr);
	            expect(ret).to.have.members(unique);
	        });
	    });

	    /**
	     * isArray
	     */
	    describe('isArray()', function () {
	        it('should return true when args is an Array', function () {
	            expect(_utils2['default'].isArray([])).to.be['true'];
	            expect(_utils2['default'].isArray([1, 2, 3])).to.be['true'];
	        });
	        it('should return false when args is not an Array', function () {
	            expect(_utils2['default'].isArray(true)).to.be['false'];
	            expect(_utils2['default'].isArray({ name: [1, 2, 3] })).to.be['false'];
	            expect(_utils2['default'].isArray(undefined)).to.be['false'];
	            expect(_utils2['default'].isArray(null)).to.be['false'];
	            expect(_utils2['default'].isArray(100)).to.be['false'];
	        });
	    });
	});

	/**
	 * Utility
	 */
	describe('Utility', function () {
	    /**
	     * timestamp
	     */
	    describe('timestamp()', function () {
	        it('should return a timestamp', function () {
	            var now = _utils2['default'].timestamp();
	            expect(now).to.be.a('number');
	        });
	    });

	    /**
	     * classNames
	     */
	    describe('classNames()', function () {
	        it('should join classNames together', function () {
	            expect(_utils2['default'].classNames('foo', 'bar')).to.equal('foo bar');
	            expect(_utils2['default'].classNames('foo', { bar: true })).to.equal('foo bar');
	            expect(_utils2['default'].classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')).to.equal('bar 1');
	            expect(_utils2['default'].classNames('foo', { bar: true, duck: false }, 'baz')).to.equal('foo bar baz');
	        });
	    });

	    /**
	     * userAgent
	     */
	    describe('userAgent', function () {
	        var uaStr = undefined;
	        it('should detect PC browser', function () {
	            uaStr = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36';
	            expect(_utils2['default'].userAgent.isMobile(uaStr)).to.be['false'];
	            expect(_utils2['default'].userAgent.isAndroid(uaStr)).to.be['false'];
	            expect(_utils2['default'].userAgent.isWeixin(uaStr)).to.be['false'];
	        });

	        it('should detect IOS WeiXin', function () {
	            uaStr = 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B176 MicroMessenger/4.3.2';
	            expect(_utils2['default'].userAgent.isMobile(uaStr)).to.be['true'];
	            expect(_utils2['default'].userAgent.isAndroid(uaStr)).to.be['false'];
	            expect(_utils2['default'].userAgent.isWeixin(uaStr)).to.be['true'];
	        });

	        it('should detect Android WeiXin', function () {
	            uaStr = 'Mozilla/5.0 (Linux; U; Android 2.3.6; zh-cn; GT-S5660 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MicroMessenger/4.5.255';
	            expect(_utils2['default'].userAgent.isMobile(uaStr)).to.be['true'];
	            expect(_utils2['default'].userAgent.isAndroid(uaStr)).to.be['true'];
	            expect(_utils2['default'].userAgent.isWeixin(uaStr)).to.be['true'];
	        });

	        it('should detect IOS browser', function () {
	            uaStr = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4';
	            expect(_utils2['default'].userAgent.isMobile(uaStr)).to.be['true'];
	            expect(_utils2['default'].userAgent.isAndroid(uaStr)).to.be['false'];
	            expect(_utils2['default'].userAgent.isWeixin(uaStr)).to.be['false'];
	        });

	        it('should detect Android browser', function () {
	            uaStr = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.20 Mobile Safari/537.36';
	            expect(_utils2['default'].userAgent.isMobile(uaStr)).to.be['true'];
	            expect(_utils2['default'].userAgent.isAndroid(uaStr)).to.be['true'];
	            expect(_utils2['default'].userAgent.isWeixin(uaStr)).to.be['false'];
	        });
	    });
	});

	/**
	 * HTTP
	 */
	describe('HTTP', function () {
	    describe('ajax()', function () {
	        it('should return some data', function (done) {
	            _utils2['default'].ajax({
	                url: 'https://randomuser.me/api/',
	                type: 'get',
	                data: { name: 'jim' },
	                success: function success(data) {
	                    expect(data).to.be.a('object');
	                    done();
	                }
	            });
	        });
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Array
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _arrayDuplicate = __webpack_require__(2);

	var _arrayDuplicate2 = _interopRequireDefault(_arrayDuplicate);

	var _arrayIsArray = __webpack_require__(3);

	var _arrayIsArray2 = _interopRequireDefault(_arrayIsArray);

	/**
	 * DOM
	 */

	var _domAddEventListener = __webpack_require__(4);

	var _domAddEventListener2 = _interopRequireDefault(_domAddEventListener);

	var _domGetUrlParam = __webpack_require__(5);

	var _domGetUrlParam2 = _interopRequireDefault(_domGetUrlParam);

	var _domParseHTML = __webpack_require__(6);

	var _domParseHTML2 = _interopRequireDefault(_domParseHTML);

	var _domScrollTo = __webpack_require__(7);

	var _domScrollTo2 = _interopRequireDefault(_domScrollTo);

	/**
	 * Utility
	 */

	var _utilityClassNames = __webpack_require__(8);

	var _utilityClassNames2 = _interopRequireDefault(_utilityClassNames);

	var _utilityTimestamp = __webpack_require__(9);

	var _utilityTimestamp2 = _interopRequireDefault(_utilityTimestamp);

	var _utilityUserAgent = __webpack_require__(10);

	var _utilityUserAgent2 = _interopRequireDefault(_utilityUserAgent);

	/**
	 * HTTP
	 */

	var _httpAjax = __webpack_require__(11);

	var _httpAjax2 = _interopRequireDefault(_httpAjax);

	exports['default'] = {
	  duplicate: _arrayDuplicate2['default'], isArray: _arrayIsArray2['default'],
	  addEventListener: _domAddEventListener2['default'], getUrlParam: _domGetUrlParam2['default'], parseHTML: _domParseHTML2['default'], scrollTo: _domScrollTo2['default'],
	  classNames: _utilityClassNames2['default'], timestamp: _utilityTimestamp2['default'], userAgent: _utilityUserAgent2['default'],
	  ajax: _httpAjax2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * 数组去重
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports["default"] = function (arr) {
	    return arr.filter(function (value, index) {
	        return arr.indexOf(value) === index;
	    });
	};

	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * 判断是否是数组
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = isArray;

	function isArray(arr) {
	    if (!Array.isArray) {
	        Array.isArray = function (arg) {
	            return Object.prototype.toString.call(arg) === '[object Array]';
	        };
	    }
	    return Array.isArray(arr);
	}

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * addEventListener
	 * @returns {{remove: Function}}  用于移除监听器
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = addEventListener;

	function addEventListener(target, eventType, callback) {
	    if (target.addEventListener) {
	        target.addEventListener(eventType, callback, false);
	        return {
	            remove: function remove() {
	                target.removeEventListener(eventType, callback, false);
	            }
	        };
	    } else if (target.attachEvent) {
	        target.attachEvent('on' + eventType, callback);
	        return {
	            remove: function remove() {
	                target.detachEvent('on' + eventType, callback);
	            }
	        };
	    }
	}

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * 获取地址栏URL参数
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = getUrlParam;

	function getUrlParam(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造正则表达式对象
	    var r = decodeURI(window.location.search).substr(1).match(reg); //匹配目标参数
	    return r === null ? '' : r[2];
	}

	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * 解析html,返回element
	 * 若是多个DOM,则返回数组
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = parseHTML;

	function parseHTML(str) {
	    var el = document.createElement('div');
	    el.innerHTML = str;
	    if (el.children.length === 1) {
	        return el.firstChild;
	    }
	    return el.children;
	}

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * 滚动到指定位置
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = scrollTo;

	function scrollTo(target) {
	    var time = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];

	    //若target为元素,则获取其与顶部距离
	    if (typeof target.offsetTop === 'number') {
	        target = target.offsetTop;
	    }

	    var offset = document.body.scrollTop; //滚动条位置
	    var step = Math.abs(offset - target) * 5 / time; //滚动步长

	    //滚动位置不超过底部
	    offset = preventOutOfPage(offset);

	    //定时器
	    var scroll = window.setInterval(function () {
	        if (target == offset) {
	            window.clearInterval(scroll);
	        } else if (offset - target > step) {
	            offset -= step;
	        } else if (target - offset > step) {
	            offset += step;
	        } else {
	            offset = target;
	        }
	        window.scrollTo(0, offset);
	    }, 5);
	}

	function preventOutOfPage(target) {
	    var clientHeight = document.documentElement.clientHeight;
	    var scrollHeight = document.body.scrollHeight;
	    if (target + clientHeight > scrollHeight) {
	        return scrollHeight - clientHeight;
	    }
	    return target;
	}
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Github: https://github.com/JedWatson/classnames
	 * 合并类名
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = classNames;

	function classNames() {
	    var classes = '';

	    for (var i = 0; i < arguments.length; i++) {
	        var arg = arguments[i];
	        if (!arg) continue;

	        var argType = typeof arg;

	        if (argType === 'string' || argType === 'number') {
	            classes += ' ' + arg;
	        } else if (Array.isArray(arg)) {
	            classes += ' ' + classNames.apply(null, arg);
	        } else if (argType === 'object') {
	            for (var key in arg) {
	                if (({}).hasOwnProperty.call(arg, key) && arg[key]) {
	                    classes += ' ' + key;
	                }
	            }
	        }
	    }

	    return classes.substr(1);
	}

	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * 时间戳,返回1970-01-01至今的毫秒数
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = timestamp;

	function timestamp() {
	  return Date.now() || new Date().getTime();
	}

	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * 检测userAgent
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports["default"] = {
	    isMobile: function isMobile(ua) {
	        var regExp = /(mobile|iphone|ipod|ipad|ios|android|windows phone)/i;
	        return regExp.test(ua || navigator.userAgent);
	    },
	    isAndroid: function isAndroid(ua) {
	        var regExp = /android/i;
	        return regExp.test(ua || navigator.userAgent);
	    },
	    isWeixin: function isWeixin(ua) {
	        var regExp = /MicroMessenger/i;
	        return regExp.test(ua || navigator.userAgent);
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * 简易ajax
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	exports['default'] = ajax;

	function ajax(conf) {
	    var url = conf.url;
	    var data = conf.data;
	    var success = conf.success;
	    var _conf$type = conf.type;
	    var type = _conf$type === undefined ? 'get' : _conf$type;
	    var _conf$dataType = conf.dataType;
	    var dataType = _conf$dataType === undefined ? 'json' : _conf$dataType;

	    type = type.toLowerCase();
	    dataType = dataType.toLowerCase();

	    var params = [];
	    for (var _name in data) {
	        params.push(encodeURIComponent(_name) + "=" + encodeURIComponent(conf.data[_name]));
	    }
	    data = params.join("&");

	    var xhr = new XMLHttpRequest();

	    xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4 && xhr.status === 200 && success) {
	            if (dataType === "text") {
	                success(xhr.responseText);
	            } else if (dataType === "xml") {
	                success(xhr.responseXML);
	            } else if (dataType === "json") {
	                success(JSON.parse(xhr.responseText));
	            }
	        }
	    };

	    if (type === 'get') {
	        xhr.open(type, url + '?' + data, true);
	        xhr.send(null);
	    } else if (type === "post") {
	        xhr.open(type, url, true);
	        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	        xhr.send(data);
	    }
	}

	module.exports = exports['default'];

/***/ }
/******/ ]);