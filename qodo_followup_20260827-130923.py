"""Follow-up commit on the published PR - exercises the push re-review path."""


import subprocess


def run_user_cmd(user_input):
    # shell=True on user input - deliberate command-injection finding
    return subprocess.run(user_input, shell=True, capture_output=True)


def read_config(path, cache={}):
    # mutable default argument - deliberate finding
    if path not in cache:
        cache[path] = open(path).read()
    return cache[path]
