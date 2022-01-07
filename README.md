# First Protobuf (`.proto`) Javascript

### A quick and practical look at Protobuf. 

If you know what is **JSON** and how its work, you can see how much **Proto-Buf** is easy.

What you dont know you think its hard but when you start to test and working on, you will see its easy.

- First example implenment using JSON at `json.js` file,
- And next same example implenment using Protobuf inside `protobuf.js` file.

## Build proto scheme

```bash
$ protoc --js_out=import_style=commonjs,binary:. employees.proto
```

### Compare JSON and Protobuf Data size

> [max@workstation grpc-series-protobuf-js]$ ls -al

| Size |   Filename    | Method   |
|------|---------------|----------|
| 123  | employees.json| JSON     |
| 48   | employees.bin | Protobuf |

## Output of examples

> [max@workstation grpc-series-protobuf-js]$ node protobuf.js 

```
Ali name is: ALI
Reza name is: REZA
Javad name is: JAVAD
Data: 1001,ALI,50001,1002,REZA,50002,1003,JAVAD,50003
Binary: 10,13,8,233,7,18,3,65,76,73,29,0,81,67,71,10,14,8,234,7,18,4,82,69,90,65,29,0,82,67,71,10,15,8,235,7,18,5,74,65,86,65,68,29,0,83,67,71
Read data from bytes: 1001,ALI,50001,1002,REZA,50002,1003,JAVAD,50003
```

> [max@workstation grpc-series-protobuf-js]$ node json.js 

```
Ali name is: ALI
Reza name is: REZA
Javad name is: REZA
Data: [object Object],[object Object],[object Object]
JSON: [{"id":1001,"name":"ALI","salary":50001},{"id":1002,"name":"REZA","salary":50002},{"id":1002,"name":"REZA","salary":50002}]
Read data from JSON: [object Object],[object Object],[object Object]
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

## Go next

If you want to learn protobuf funcitonally deeply, you can check and read the generated file by Protoc at [`employees_pb.js`](employees_pb.js). [c](https://www.youtube.com/watch?v=46O73On0gyI)
