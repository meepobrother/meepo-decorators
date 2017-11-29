import deprecated from 'deprecated-decorator';

@deprecated('Bar', '0.1.0', 'http://meepo.com.cn/')
class Foo {
    static method() {
        console.log('static method');
     }
}
/* 
    Class `Foo` has been deprecated since version 0.1.0, use `Bar` instead.
    at /Users/meepo/Desktop/meepo-decorators/bld/001.js:21:11
    Check out http://vane.life/ for more information.
    Class `Foo` has been deprecated since version 0.1.0, use `Bar` instead.
        at /Users/meepo/Desktop/meepo-decorators/bld/001.js:22:5
    Check out http://vane.life/ for more information.
    static method
*/
let foo = new Foo();
Foo.method();
