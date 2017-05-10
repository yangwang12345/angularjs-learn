1.service都是单例的
2、$injector负责实例化，不需要new
3.在整个应用的生命周期中存在，可以用来共享数据
4、在需要使用的地方利用依赖注入机制注入service
5、自定义的service需要写在内置的service后面
6.内置service的命名以$符号开头，自定义service应该避免