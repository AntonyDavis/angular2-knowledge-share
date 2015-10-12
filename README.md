# HTML5 Memory Test Suite

version: 0.1.0

This project will be used to test memory usage on individual widgets of the HTML5 Framework.


## Setup

After cloning the project repository, you will need to run both commands from the project's folder:

    $ ./setup.sh
    
This will bower link `html5-framework-shell`, `html5-framework-kendo-components`, `html5-framework-widgets` and `html5-framework-core-components`.

To install a standalone version of the HTML5 Memory Test Suite that uses the latest code in the develop branches instead of linking:

    $ ./setup.sh standalone
    
Please note that these commands require the dependencies listed at the end of this README file.


## Usage

- `grunt server` Runs a [Node.js](http://nodejs.org/) based server for locally testing your application.
- `grunt protractortest` Runs all memory suites. Also excepts suites as arguments e.g. `grunt protractortest:grid`
- `grunt info` Displays a list of tasks/arguments that can be run. See output below.

##### To run a memory test, execute any of the following grunt tasks (and arguments):

1. `protractortest` - Run complete suite, or ddescribe/iit
2. `protractortest:megamenu` - Run mega-menu tests, or ddescribe/iit in mega-menu folder
3. `protractortest:kendo` - Run kendo-components tests, or ddescribe/iit in kendo-components folder
4. `protractortest:grid` - Run sg-grid tests, or ddescribe/iit in sg-grid folder

- Example: To run the memory tests for only option 4 (sg-grid) type: `grunt protractortest:grid`
- Multiple arguments are also possible e.g.: `grunt protractortest:megamenu:kendo`

Individual tests can be run using `iit` or `ddescribe`.

*Note: All these commands require the latest version of [Grunt](http://gruntjs.com/) installed; if you need help, check the [installing Grunt page on wiki](https://www.csa.sungard.com/wiki/x/HIUzAw).*


## Add Component

Each component is location on its own page with an entry in the `navigation.json` so that the test can browse directly to the component and to isolate the memory usage of the component.

To add a component you need to add a view, set up a new "page" in the `navigation.json` and in some cases add a controller.

#### Adding the view

Create a new `html` file in the relevant `app/view` folder.

Below is an example of the `numberField.html` page:

```
<section ng-controller="mtsNumberField">
    <header sg-page-header sg-title="sgNumberField Widget"></header>
    
    <div class="sgSpan4">
        <div sg-panel sg-title="Tree View Example">
        <!-- Add the component here. -->
        
            <form name="number-field">
               <div sg-fields>
                    <div sg-number-field
                         ng-model-input="myNumber">
                    </div>
               </div>
            </form>
            
        </div>
    </div>

</section>
```

#### Adding the navigation

To add a new page to the navigation, add a entry in the `api/navigation.json` to the relevant section.

Below is the Number Field's navigation entry:

```
{
    "id": "numberfield",
    "label": "Number Field",
    "module": "html5-memory-test-suite",
    "title": "Number Field",
    "partial": "views/sg-kendo-components/numberField.html"
}
```

#### Adding the controller (optional)

To add a controller (if needed), create a new file in the `app/scripts/controllers` directory.

Below is an example of the `mtsNumberField.js` page:

```
angular.module('html5MemoryTestSuite').controller('mtsNumberField', ['$scope', function ($scope) {
    'use strict';

    $scope.myNumber = 1000;

}]);
```

Then add the file to `index.html`:

```
<script src="scripts/controllers/mtsNumberField.js"></script>
```

## Add Test

#### For an existing component

Tests can be added to the relevant `.spec` file for that component. Add a new `it` and the test will be run along with the current suite/folder it is part of.

```
it('click numberfield increment button to increment number', function () {
    // Test iterations
    var iterations = 250;
    
    browser.sleep(1000);

    // Required, as this gets passed into runTestFunction.
    var that = this;

    // Browse to URL (based on navigation.json entry), then execute runTestFunction
    browser.get('#/sg-kendo-components/components/numberfield', 30000).then(function () {
        sgpt.memory.runTestFunction(that, iterations, function (i) {
                // Test actions
            },
            {
                preTestInitFunction: function () {
                    // Test action that will be executed before the memory measurement starts. Should be the same as 1 iteration of the test actions for the full test.
                }
            }
        );
    });
}, itTimeout);
```

#### For a new component

Create a new `.spec` file in the relevant folder in `test/e2e`.

The `.spec` file should look as follows:

```
describe('Test memory consumption of the Number Field', function () {
    var sgpt = require('sg-protractor-tools');

    beforeEach(function () {
        browser.get('');
    });

    // Set to a high value to avoid timeout by Protractor and error
    // "A Jasmine spec timed out. Resetting the WebDriver Control Flow."
    var itTimeout = 1000000;

    // Add "it" here (see above).
});
```

#### Add suite

In `protractor.conf.js`, add the new suite to the suites object:

```
suites: {
    kendo: 'test/e2e/sg-kendo-components/*.spec',
    all: 'test/e2e/**/*.spec'
}
```

All suites are executable with the suite name as an argument e.g. `protractortest:kendo`.

Also add the suite as an entry to the `grunt info` task.

## Get to know more

This project is using some web frameworks, it might be worth taking the time to check the documentation of each of these:

- [AngularJS](http://angularjs.org/)
- [KendoUI](http://www.kendoui.com/)
- [SunGard HTML5-framework](https://www.csa.sungard.com/wiki/display/html/HTML5+Rich+Client+Framework+Home)


## Required tools

- [Node.js](http://nodejs.org/)
- [NPM](https://npmjs.org/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/)
- [Yeoman](http://yeoman.io/)


- - - -

Copyright © SunGard 2014 - All rights reserved
