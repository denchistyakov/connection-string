"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
var a = new src_1.ConnectionString('protocol://');
var b = new src_1.ConnectionString('protocol://', {});
var c = new src_1.ConnectionString('protocol://', {
    path: ['one', 'two']
});
if ('protocol' in a) {
    var protocol = a.protocol;
    var pass = a.password;
}
var segment1 = a.path[0];
var param1 = a.params['first'];
a.params['first'] = 'hello';
a.params = {
    first: '123',
    second: 'hello!'
};
var cs = a.toString({ encodeDollar: true });
a.setDefaults({
    hosts: [
        { name: '[::]', port: 123, isIPv6: true }
    ]
});
a.setDefaults({
    user: '',
    password: ''
});
cs = a.toString({ encodeDollar: true });
var qq = a.setDefaults(new src_1.ConnectionString(''));
var parseHost = src_1.ConnectionString.parseHost('abc');
