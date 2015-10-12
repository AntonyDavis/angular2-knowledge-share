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
define(["require", "exports", 'angular2/angular2', './contact'], function (require, exports, angular2_1, contact_1) {
    var ContactList = (function () {
        function ContactList() {
            this.contacts = [];
        }
        ContactList.prototype.addContact = function (name, phone) {
            var contact = new contact_1.Contact(name, phone);
            this.contacts.push(contact);
        };
        ContactList.prototype.removeContact = function (contact) {
            var index = this.contacts.indexOf(contact);
            this.contacts.splice(index, 1);
        };
        ContactList = __decorate([
            angular2_1.Component({
                selector: 'contact-list'
            }),
            angular2_1.View({
                templateUrl: './components/contact-list/contact-list.html',
                directives: [angular2_1.NgFor]
            }), 
            __metadata('design:paramtypes', [])
        ], ContactList);
        return ContactList;
    })();
    exports.ContactList = ContactList;
});
