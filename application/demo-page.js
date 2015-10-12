var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2', './components/tree-view/tree-view', './components/contact-list/contact-list', './components/bound-textbox/bound-textbox', './components/tree-view/directory', './components/grid/grid', './components/grid/column', './components/core-directives/core-directives', './components/non-bindable/non-bindable', './components/greeting/greeting', './components/http/http', './components/spreadsheet/spreadsheet', './components/card/card', './components/red/red'], function (require, exports, angular2_1, tree_view_1, contact_list_1, bound_textbox_1, directory_1, grid_1, column_1, core_directives_1, non_bindable_1, greeting_1, http_1, spreadsheet_1, card_1, red_1) {
    var DemoPage = (function () {
        function DemoPage() {
            this.currentComponent = 'card';
            this.loadDirectories();
            this.people = this.getPeople();
            this.columns = this.getColumns();
        }
        DemoPage.prototype.selectComponent = function (component) {
            this.currentComponent = component;
        };
        DemoPage.prototype.isActive = function (component) {
            return component === this.currentComponent;
        };
        DemoPage.prototype.getActiveClass = function (component) {
            if (this.isActive(component)) {
                return 'active';
            }
        };
        DemoPage.prototype.getPeople = function () {
            return [
                { firstName: 'Joe', lastName: 'Jackson', age: 20 },
                { firstName: 'Peter', lastName: 'Smith', age: 30 },
                { firstName: 'Jane', lastName: 'Doe', age: 50 },
                { firstName: 'Tim', lastName: 'Smith', age: 80 }
            ];
        };
        DemoPage.prototype.getColumns = function () {
            return [
                new column_1.Column('firstName', 'First Name'),
                new column_1.Column('lastName', 'Last Name'),
                new column_1.Column('age', 'Age')
            ];
        };
        DemoPage.prototype.loadDirectories = function () {
            var fall2014 = new directory_1.Directory('Fall 2014', [], ['image1.jpg', 'image2.jpg', 'image3.jpg']);
            var summer2014 = new directory_1.Directory('Summer 2014', [], ['image10.jpg', 'image20.jpg', 'image30.jpg']);
            var pics = new directory_1.Directory('Pictures', [summer2014, fall2014], []);
            var music = new directory_1.Directory('Music', [], ['song1.mp3', 'song2.mp3']);
            this.directories = [pics, music];
        };
        DemoPage = __decorate([
            angular2_1.Component({
                selector: 'demo-page'
            }),
            angular2_1.View({
                templateUrl: './demo-page.html',
                directives: [red_1.Red, card_1.Card, spreadsheet_1.Spreadsheet, http_1.HttpSample, greeting_1.Greeting, contact_list_1.ContactList, tree_view_1.TreeView, bound_textbox_1.BoundTextbox, grid_1.Grid, core_directives_1.CoreDirectives, non_bindable_1.IgnoreBindings, angular2_1.NgIf, angular2_1.NgClass]
            }), 
            __metadata('design:paramtypes', [])
        ], DemoPage);
        return DemoPage;
    })();
    exports.DemoPage = DemoPage;
});
