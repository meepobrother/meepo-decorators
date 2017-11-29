import when = require('decorator-when')

class Demo {
    @when(Demo.prototype.should)
    method() {
        console.log('method');
    }
    should() {
        return Math.random() > 0.5
    }
}

new Demo().method();