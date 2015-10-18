import _ from '../utils';
const expect = chai.expect;

/**
 * DOM
 */
describe('DOM', function() {
    /**
     * parseHTML
     */
    describe('parseHTML()', function() {
        let str, dom;
        it('should return \<div\>', () => {
            str = '<div class="test"><span>test</span></div>';
            dom = _.parseHTML(str);
            expect(dom.tagName).to.equal('DIV');
            expect(dom.className).to.equal('test');
        });
        it('should return two \<p\>', () => {
            str = '<p class="test">test1</p><p class="test">test2</p>';
            dom = _.parseHTML(str);
            expect(dom).to.have.length(2);
            expect(dom[0].className).to.equal('test');
        });
    });

    /**
     * getUrlParam
     */
    describe('getUrlParam()', function() {
        let pathname = window.location.pathname;
        let ret;
        if (history.pushState) {

            it('should return correct value', () => {
                history.pushState({}, '', pathname + '?name=test&&参数=测试');
                ret = _.getUrlParam('name');
                expect(ret).to.equal('test');
                ret = _.getUrlParam('参数');
                expect(ret).to.equal('测试');
            });

            it('should return empty', () => {
                history.pushState({}, '', pathname + '?name=');
                ret = _.getUrlParam('name');
                expect(ret).to.equal("");

                history.pushState({}, '', pathname);
                ret = _.getUrlParam('name');
                expect(ret).to.equal("");

            });
        }
    });
});

/**
 * Array
 */
describe('Array', function() {
    /**
     * duplicate
     */
    describe('duplicate()', function() {
        it('should return a unique array', () => {
            let arr = [3, 213, 213, true, false, undefined, null, false, -3.2, -3.2];
            let unique = [3, 213, true, false, undefined, null, -3.2];
            let ret = _.duplicate(arr);
            expect(ret).to.have.members(unique);
        })
    });

    /**
     * isArray
     */
    describe('isArray()', function() {
        it('should return true when args is an Array', () => {
            expect(_.isArray([])).to.be.true;
            expect(_.isArray([1,2,3])).to.be.true;
        });
        it('should return false when args is not an Array', () => {
            expect(_.isArray(true)).to.be.false;
            expect(_.isArray({name: [1,2,3]})).to.be.false;
            expect(_.isArray(undefined)).to.be.false;
            expect(_.isArray(null)).to.be.false;
            expect(_.isArray(100)).to.be.false;
        });
    });
});

/**
 * Utility
 */
describe('Utility', function() {
    /**
     * timestamp
     */
    describe('timestamp()', function() {
        it('should return a timestamp', () => {
            let now = _.timestamp();
            expect(now).to.be.a('number');
        });
    });

    /**
     * classNames
     */
    describe('classNames()', function() {
        it('should join classNames together', () => {
            expect(_.classNames('foo', 'bar')).to.equal('foo bar');
            expect(_.classNames('foo', { bar: true })).to.equal('foo bar');
            expect(_.classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')).to.equal('bar 1');
            expect(_.classNames('foo', { bar: true, duck: false }, 'baz')).to.equal('foo bar baz');
        });
    });

    /**
     * userAgent
     */
    describe('userAgent', function() {
        let uaStr;
        it('should detect PC browser', () => {
            uaStr = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.71 Safari/537.36';
            expect(_.userAgent.isMobile(uaStr)).to.be.false;
            expect(_.userAgent.isAndroid(uaStr)).to.be.false;
            expect(_.userAgent.isWeixin(uaStr)).to.be.false;
        });

        it('should detect IOS WeiXin', () => {
            uaStr = 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B176 MicroMessenger/4.3.2';
            expect(_.userAgent.isMobile(uaStr)).to.be.true;
            expect(_.userAgent.isAndroid(uaStr)).to.be.false;
            expect(_.userAgent.isWeixin(uaStr)).to.be.true;
        });

        it('should detect Android WeiXin', () => {
            uaStr = 'Mozilla/5.0 (Linux; U; Android 2.3.6; zh-cn; GT-S5660 Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 MicroMessenger/4.5.255';
            expect(_.userAgent.isMobile(uaStr)).to.be.true;
            expect(_.userAgent.isAndroid(uaStr)).to.be.true;
            expect(_.userAgent.isWeixin(uaStr)).to.be.true;
        });

        it('should detect IOS browser', () => {
            uaStr = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4';
            expect(_.userAgent.isMobile(uaStr)).to.be.true;
            expect(_.userAgent.isAndroid(uaStr)).to.be.false;
            expect(_.userAgent.isWeixin(uaStr)).to.be.false;
        });

        it('should detect Android browser', () => {
            uaStr = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.20 Mobile Safari/537.36';
            expect(_.userAgent.isMobile(uaStr)).to.be.true;
            expect(_.userAgent.isAndroid(uaStr)).to.be.true;
            expect(_.userAgent.isWeixin(uaStr)).to.be.false;
        });
    });

    describe('memoize', function() {
        it('should return a function', () => {
            expect(typeof _.memoize(() => {})).to.equal("function");
        });

        it('should return a function which behaves like the given function', () => {
            const fn = function(a, b) {
                return a * 10 + b;
            };
            const memoizedFn = _.memoize(fn);
            expect(memoizedFn(1, 2)).to.equal(fn(1, 2));
            expect(memoizedFn(2, 1)).to.equal(fn(2, 1));
        });
    });
});

/**
 * HTTP
 */
describe('HTTP', function() {
    describe('ajax()', function() {
        it('should return some data', (done) => {
            _.ajax({
                url: 'https://randomuser.me/api/',
                type: 'get',
                data: { name: 'jim' },
                success: (data) => {
                    expect(data).to.be.a('object');
                    done();
                }
            })
        });
    });
});