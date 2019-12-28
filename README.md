# typescript

### Version Check
```bash=
$ tsc -v
# Version 3.7.4
```

### Transfiling
```bash=
$ tsc filename
# default compile target: ES3

# if you want to change compile target version
$ tsc filename -t es6
# or
$ tsc filename --target es6
```
[Typescript Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

### TS Config
```bash=
tsc --init
```