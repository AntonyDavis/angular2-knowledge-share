define(["require", "exports"], function (require, exports) {
    var Column = (function () {
        function Column(name, descr) {
            this.name = name;
            this.descr = descr;
        }
        return Column;
    })();
    exports.Column = Column;
});
