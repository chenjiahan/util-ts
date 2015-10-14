var expect = chai.expect;

/**
 * DOM/parseHTML.js
 */
describe('DOM', function() {
    describe('#parseHTML()', function() {
        it('should return \<div\>', function () {
            var str = '<div class="test"><span>test</span></div>';
            var dom = parseHTML(str);
            expect(dom.tagName).to.equal('DIV');
            expect(dom.className).to.equal('test');
        });

        it('should return two \<p\>', function () {
            var str = '<p class="test">test1</p><p class="test">test2</p>';
            var dom = parseHTML(str);
            expect(dom).to.have.length(2);
            expect(dom[0].className).to.equal('test');
        });
    });
});
