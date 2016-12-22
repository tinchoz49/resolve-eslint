# resolve-eslint
[![Build Status](https://travis-ci.org/tinchoz49/resolve-eslint.svg?branch=master)](https://travis-ci.org/tinchoz49/resolve-eslint)
[![Build status](https://ci.appveyor.com/api/projects/status/79aukwwjushp9k9i?svg=true
)](https://ci.appveyor.com/project/tinchoz49/resolve-eslint)
> Try to execute a local bin eslint before to execute a global fallback eslint.

Sections |
--- |
[Why](#why) |
[Install](#install) |

## <a name="why"></a> Why
I have several projects using different eslint's versions and when I run syntastic + eslint in my vim it's always trying to run my global configuration. So my first issue is that I want a CLI that can check if I have an eslint in the current working directory.

Other issue is that I have a project with subprojects using different eslint versions and searching an eslint bin in my current working directory is not enough.

`resolve-eslint` try to find an eslint in the directory of your current file, if is not there is going to start a recursive searching for a eslint instance and finally as a fallback is going to use an eslint bin provided by `resolve-eslint`.

## <a name="install"></a> Install

> It's important that you don't have eslint installed as a global package.

```
npm install -g resolve-eslint
```

## License

MIT
