import grpc from 'grpc-web';
const {HelloRequest, HelloReply} = require('./helloworld_pb');
const {GreeterPromiseClient} = require('./helloworld_grpc_web_pb');

const client = new GreeterPromiseClient("api.buhta.com");

const request = new HelloRequest();
request.setName('Dake');

client.sayHello(request, (err, response) => {
    if (err) {
        console.log(err);
    }
    else
        console.log(response.getMessage());
});

console.log(request);


