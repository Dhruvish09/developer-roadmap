| Method         | Description                                                                    | Sample Usage                                        |
| -------------- | ------------------------------------------------------------------------------ | --------------------------------------------------- |
| `clear()`      | Removes all items from the dictionary.                                         | `d.clear()` → `{}`                                  |
| `copy()`       | Returns a shallow copy of the dictionary.                                      | `d2 = d.copy()` → `{'a': 1, 'b': 2}`                |
| `fromkeys()`   | Creates a new dictionary with keys from a sequence and a set value.            | `dict.fromkeys(['x', 'y'], 0)` → `{'x': 0, 'y': 0}` |
| `get()`        | Returns the value for the specified key if key is in dictionary.               | `d.get('a')` → `1`                                  |
| `items()`      | Returns a view object of key-value pairs.                                      | `list(d.items())` → `[('a', 1), ('b', 2)]`          |
| `keys()`       | Returns a view object of keys.                                                 | `list(d.keys())` → `['a', 'b']`                     |
| `values()`     | Returns a view object of values.                                               | `list(d.values())` → `[1, 2]`                       |
| `pop()`        | Removes specified key and returns the corresponding value.                     | `d.pop('b')` → removes `'b'` and returns its value  |
| `popitem()`    | Removes and returns the last inserted key-value pair (in Python 3.7+).         | `d.popitem()` → `('b', 2)`                          |
| `setdefault()` | Returns the value of a key if it exists. If not, inserts the key with a value. | `d.setdefault('c', 99)` → adds `'c': 99` if missing |
| `update()`     | Updates dictionary with key-value pairs from another dictionary or iterable.   | `d.update({'d': 4})` → adds/updates `'d': 4`        |
