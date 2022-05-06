
# Javascript Foundation - I

basics of javascript



## Chapter 1

Basics of browers , V8 engines, Interpreted v/s compiled language, garbase collections




## V8 engine and Interpreted language

Javascript is a interpreted language and chrome and microsoft edge uses the v8 engine in their browsers

- Brendan Eich is the person created the Javascript language
- AST explorer -> astexplorer.net to see how Javascript code is converted to tree like structure(Json) for parsers to parse.
- Javascript is first converted into AST into Interpreter then it is Compiled i.e HLL is converted to optimized code using JIT compiler for better performance.

### Avoid this while writing Optimised code

- eval() function is not good for optimized code and also not secure.
- arguments , this is a predefined var to access the arguments of a function.
- for in, this loop is used to loop the object properties.
- with, it is not recommended use
- delete, used on a property of an object to delete alternative is filter or spread operator.
- Hidden classes : order of operation on a object can effect the performance
- Inline caching : if a function results in same value compiler make cache the value.

### Javascript Run time
- Call Stack
- Memory Heap
- Web API(window object)
    - DOM
    - fetch
    - setTimeout()

- Event loop
    - Callback queue

-  http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

