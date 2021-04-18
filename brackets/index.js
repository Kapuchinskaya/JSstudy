module.exports = function check(str, bracketsConfig) {
    const map = new Map();
    bracketsConfig.forEach((element) => map.set(element[0], element[1]));

    var stack = [];

    for (var i = 0; i < str.length; i++) {
        var item = str[i];
        const lastTag = stack[stack.length - 1];
        if (map.has(item)) {
            if (map.has(item) && map.get(item) === item) {
                if (lastTag && lastTag === item) {
                    stack.pop();
                } else {
                    stack.push(item);
                }
            } else {
                stack.push(item);
            }
        } else {
            if (item === map.get(lastTag)) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};
