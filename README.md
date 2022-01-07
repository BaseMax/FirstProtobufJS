# First Protobuf (`.proto`) Javascript

If you know what is **JSON** and how its work, you can see how much **Proto-Buf** is easy.

What you dont know you think its hard but when you start to test and working on, you will see its easy.

- First example implenment using JSON at `json.js` file,
- And next same example implenment using Protobuf inside `protobuf.js` file.

## Download `protoc`

You need to install `protoc` program on your system, you can download it from https://github.com/protocolbuffers/protobuf/releases depends on your Operation system. whatever your system is Liunx, Windows or OSX.

If you want to install/setup it globally you have to mv `bin` and `include` directory to your system directory.

You need to copy these directory to the system **dir**:
- `bin` -> `/usr/bin/`
- `include` -> `/usr/include/`

Maybe, A command to help you:
```
$ cp -a * /usr/
```

## Build proto scheme

```
$ protoc --js_out=import_style=commonjs,binary:. employees.proto
```

