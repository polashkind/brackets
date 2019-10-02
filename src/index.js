/**
 * @param {string} str
 * @param {[string, string][]} bracketsConfig
 * @returns {boolean}
 */
module.exports = function check(str, bracketsConfig) {
    const brackets = str.split('');
    const stack = [];
    for (let i = 0; i < brackets.length; i++) {
        let configPosition;
        let bracketPosition;
        let configIsEqual = false;
        const bracket = brackets[i];

        for (let j = 0; j < bracketsConfig.length; j++) {
            const config = bracketsConfig[j];
            for (let k = 0; k < 2; k++) {
                const configBracket = config[k];
                if (bracket === configBracket) {
                    configPosition = j;
                    bracketPosition = k;

                    if (config[0] === config[1]) {
                        configIsEqual = true;
                    } 

                    break;
                } else if (k === 0) {
                    continue;
                } else {
                    break;
                }
            }
        }

        if (configIsEqual) {
            if (configPosition === stack[stack.length - 1]) {
                stack.pop();
            } else {
                stack.push(configPosition);
            }
        } else if (bracketPosition === 0) {
            stack.push(configPosition);
        } else {
            if (configPosition === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if (stack.length === 0) {
        return true;
    } else { 
        return false;
    }
}
