#include <node.h>
#include <v8.h>

using namespace v8;
//实现预定义的方法
Handle<value> SayHello(const Arguments& args){
    HandleScope scope;
    return scope.Close(String::New("Hello world!"));
}

//给传入的目标对象添加sayHello()方法
void Init_Hello(Handle<object> target){
    target->Set(string::NewSymbol("sayHello"),functionTemplate::New(SayHello)->GetFunction());
}

// 调用NODE_MODULE()方法将注册方法定义到内存中
NODE_MODULE(hello,Init_hello)