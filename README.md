# First Protobuf (`.proto`) Javascript

If you know what is **JSON** and how its work, you can see how much **Proto-Buf** is easy.

What you dont know you think its hard but when you start to test and working on, you will see its easy.

- First example implenment using JSON at `json.js` file,
- And next same example implenment using Protobuf inside `protobuf.js` file.

## Build proto scheme

```bash
$ protoc --js_out=import_style=commonjs,binary:. employees.proto
```

## Download `protoc`

You need to install `protoc` program on your system, you can download it from https://github.com/protocolbuffers/protobuf/releases depends on your Operation system. whatever your system is Liunx, Windows or OSX.

Next you can run `bin/protoc` by typing its full path.

For example:
```bash
$ /to-the-path/bin/protoc --js_out=import_style=commonjs,binary:. /your-source-path/employees.proto
```

### Setup protoc globally on your system

If you want to install/setup it globally you have to mv `bin` and `include` directory to your system directory.

You need to copy these directory to the system **dir**:
- `bin` -> `/usr/bin/`
- `include` -> `/usr/include/`

Maybe, A command to help you:

```bash
$ cp -a * /usr/
```

