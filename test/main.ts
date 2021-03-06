import {ConnectionString, IHost} from '../src'

const a = new ConnectionString('protocol://');
const b = new ConnectionString('protocol://', {});
const c = new ConnectionString('protocol://', {
    path: ['one', 'two']
});

if ('protocol' in a) {
    const protocol = a.protocol;
    const pass = a.password;
}

const segment1: string = a.path[0];
const param1: string = a.params['first'];

a.params['first'] = 'hello';

a.params = {
    first: '123',
    second: 'hello!'
};

let cs = a.toString({encodeDollar: true});
a.setDefaults({
    hosts: [
        {name: '[::]', port: 123, isIPv6: true}
    ]
});

a.setDefaults({
    user: '',
    password: ''
});

cs = a.toString({encodeDollar: true});

const qq: ConnectionString = a.setDefaults(new ConnectionString(''));

const parseHost: IHost = ConnectionString.parseHost('abc');
