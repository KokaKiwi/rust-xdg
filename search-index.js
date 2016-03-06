var searchIndex = {};
searchIndex['xdg'] = {"items":[[3,"BaseDirectories","xdg","BaseDirectories allows to look up paths to configuration, data,\ncache and runtime files in well-known locations according to\nthe [X Desktop Group Base Directory specification][xdg-basedir].\n[xdg-basedir]: http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html",null,null],[3,"BaseDirectoriesError","","",null,null],[11,"fmt","","",0,{"inputs":[{"name":"basedirectorieserror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"basedirectorieserror"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"basedirectorieserror"}],"output":{"name":"option"}}],[11,"fmt","","",0,{"inputs":[{"name":"basedirectorieserror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Reads the process environment, determines the XDG base directories,\nand returns a value that can be used for lookup.\nThe following environment variables are examined:",1,{"inputs":[{"name":"basedirectories"}],"output":{"name":"result"}}],[11,"with_prefix","","Same as [`new()`](#method.new), but `prefix` is implicitly prepended to\nevery path that is looked up.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"result"}}],[11,"with_profile","","Same as [`with_prefix()`](#method.with_prefix),\nwith `profile` also implicitly prepended to every path that is looked up,\nbut only for user-specific directories.",1,{"inputs":[{"name":"basedirectories"},{"name":"p1"},{"name":"p2"}],"output":{"name":"result"}}],[11,"has_runtime_directory","","Returns `true` if `XDG_RUNTIME_DIR` is available, `false` otherwise.",1,{"inputs":[{"name":"basedirectories"}],"output":{"name":"bool"}}],[11,"place_config_file","","Given a relative path `path`, returns an absolute path in\n`XDG_CONFIG_HOME` where a configuration file may be stored.\nLeading directories in the returned path are pre-created;\nif that is not possible, an error is returned.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"ioresult"}}],[11,"place_data_file","","Like [`place_config_file()`](#method.place_config_file), but for\na data file in `XDG_DATA_HOME`.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"ioresult"}}],[11,"place_cache_file","","Like [`place_config_file()`](#method.place_config_file), but for\na cache file in `XDG_CACHE_HOME`.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"ioresult"}}],[11,"place_runtime_file","","Like [`place_config_file()`](#method.place_config_file), but for\na runtime file in `XDG_RUNTIME_DIR`.\nIf `XDG_RUNTIME_DIR` is not available, panics.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"ioresult"}}],[11,"find_config_file","","Given a relative path `path`, returns an absolute path to an existing\nconfiguration file, or `None`. Searches `XDG_CONFIG_HOME` and then\n`XDG_CONFIG_DIRS`.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"option"}}],[11,"find_data_file","","Given a relative path `path`, returns an absolute path to an existing\nconfiguration file, or `None`. Searches `XDG_DATA_HOME` and then\n`XDG_DATA_DIRS`.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"option"}}],[11,"find_cache_file","","Given a relative path `path`, returns an absolute path to an existing\nconfiguration file, or `None`. Searches `XDG_CACHE_HOME`.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"option"}}],[11,"find_runtime_file","","Given a relative path `path`, returns an absolute path to an existing\nruntime file, or `None`. Searches `XDG_RUNTIME_DIR`.\nIf `XDG_RUNTIME_DIR` is not available, panics.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"option"}}],[11,"create_config_directory","","Given a relative path `path`, returns an absolute path to a configuration\ndirectory in `XDG_CONFIG_HOME`. The directory and all directories\nleading to it are created if they did not exist;\nif that is not possible, an error is returned.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"ioresult"}}],[11,"create_data_directory","","Like [`create_config_directory()`](#method.create_config_directory),\nbut for a data directory in `XDG_DATA_HOME`.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"ioresult"}}],[11,"create_cache_directory","","Like [`create_config_directory()`](#method.create_config_directory),\nbut for a cache directory in `XDG_CACHE_HOME`.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"ioresult"}}],[11,"create_runtime_directory","","Like [`create_config_directory()`](#method.create_config_directory),\nbut for a runtime directory in `XDG_RUNTIME_DIR`.\nIf `XDG_RUNTIME_DIR` is not available, panics.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"ioresult"}}],[11,"list_config_files","","Given a relative path `path`, list absolute paths to all files\nin directories with path `path` in `XDG_CONFIG_HOME` and\n`XDG_CONFIG_DIRS`.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"vec"}}],[11,"list_config_files_once","","Like [`list_config_files`](#method.list_config_files), but\nonly the first occurence of every distinct filename is returned.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"vec"}}],[11,"list_data_files","","Given a relative path `path`, lists absolute paths to all files\nin directories with path `path` in `XDG_DATA_HOME` and\n`XDG_DATA_DIRS`.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"vec"}}],[11,"list_data_files_once","","Like [`list_data_files`](#method.list_data_files), but\nonly the first occurence of every distinct filename is returned.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"vec"}}],[11,"list_cache_files","","Given a relative path `path`, lists absolute paths to all files\nin directories with path `path` in `XDG_CACHE_HOME`.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"vec"}}],[11,"list_runtime_files","","Given a relative path `path`, lists absolute paths to all files\nin directories with path `path` in `XDG_RUNTIME_DIR`.\nIf `XDG_RUNTIME_DIR` is not available, panics.",1,{"inputs":[{"name":"basedirectories"},{"name":"p"}],"output":{"name":"vec"}}],[11,"get_data_home","","Returns the user-specific data directory (set by `XDG_DATA_HOME`).",1,{"inputs":[{"name":"basedirectories"}],"output":{"name":"pathbuf"}}],[11,"get_config_home","","Returns the user-specific configuration directory (set by\n`XDG_CONFIG_HOME`).",1,{"inputs":[{"name":"basedirectories"}],"output":{"name":"pathbuf"}}],[11,"get_cache_home","","Returns the user-specific directory for non-essential (cached) data\n(set by `XDG_CACHE_HOME`).",1,{"inputs":[{"name":"basedirectories"}],"output":{"name":"pathbuf"}}],[11,"get_data_dirs","","Returns a preference ordered (preferred to less preferred) list of\nsupplementary data directories, ordered by preference (set by\n`XDG_DATA_DIRS`).",1,{"inputs":[{"name":"basedirectories"}],"output":{"name":"vec"}}],[11,"get_config_dirs","","Returns a preference ordered (preferred to less preferred) list of\nsupplementary configuration directories (set by `XDG_CONFIG_DIRS`).",1,{"inputs":[{"name":"basedirectories"}],"output":{"name":"vec"}}]],"paths":[[3,"BaseDirectoriesError"],[3,"BaseDirectories"]]};
initSearch(searchIndex);
