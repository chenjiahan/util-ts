var expect = chai.expect;

/**
 * DOM
 */
describe('DOM', function() {
    /**
     * parseHTML
     */
    describe('#parseHTML()', function() {
        var str, dom;
        it('should return \<div\>', function () {
            str = '<div class="test"><span>test</span></div>';
            dom = parseHTML(str);
            expect(dom.tagName).to.equal('DIV');
            expect(dom.className).to.equal('test');
        });
        it('should return two \<p\>', function () {
            str = '<p class="test">test1</p><p class="test">test2</p>';
            dom = parseHTML(str);
            expect(dom).to.have.length(2);
            expect(dom[0].className).to.equal('test');
        });
    });

    /**
     * getUrlParams
     */
    describe('#getUrlParams()', function() {
        var pathname = window.location.pathname;
        var ret;

        it('should return empty', function() {
            history.pushState({}, '', pathname);
            ret = getUrlParam('name');
            expect(ret).to.equal("");

            history.pushState({}, '', pathname + '?name=');
            ret = getUrlParam('name');
            expect(ret).to.equal("");
        });

        it('should return correct value', function() {
            history.pushState({}, '', pathname + '?name=test&&参数=测试');
            ret = getUrlParam('name');
            expect(ret).to.equal('test');
            ret = getUrlParam('参数');
            expect(ret).to.equal('测试');
        });
    });
});

/**
 * Array
 */
describe('Array', function() {
    describe('duplicate', function() {
        it('should return a unique array', function() {
            var arr = [3, 213, 213, true, false, undefined, null, false, -3.2, -3.2];
            var unique = [3, 213, true, false, undefined, null, -3.2];
            var ret = duplicate(arr);
            expect(ret).to.have.members(unique);
        })
    });
});

/**
 * HTTP
 */
describe('HTTP', function() {
    describe('#ajax()', function() {
        it('should return some data', function(done) {
            ajax({
                url: 'https://randomuser.me/api/',
                type: 'get',
                data: {
                    name: 'jim'
                },
                success: function(data) {
                    expect(data).to.be.a('object');
                    done();
                }
            })
        });
    });
});