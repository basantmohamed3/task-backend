/*
 =======================================
 file role: helper file
 =======================================
 */

//  create helper class
// dependencies
const Path = require("path");
class Helpers {
    // method to clean object from empty properties
    cleanObject(obj) {
            if (typeof obj === "object") {
                Object.keys(obj).forEach((key) => {
                    if (obj[key] == undefined || obj[key] == null) {
                        delete obj[key];
                        return obj;
                    }
                });
                return obj;
            } else {
                return false;
            }
        }
        // methd to check if it object
    isObject(obj) {
            if (typeof obj == "object") {
                return obj;
            } else {
                return false;
            }
        }
        // method to check if the object is empty or not
    notEmpty(obj) {
        if (Object.keys(obj).length > 0) {
            return obj;
        } else {
            return false;
        }
    }
    strip_html_tags(str) {
            if ((str === null) || (str === ''))
                return false;
            else
                str = str.toString();
            return str.replace(/<[^>]*>/g, '');
        }
        // validate the email
    checkEmail(str) {
        str = str !== undefined ? str : "";
        str = str.trim();
        var regEx = new RegExp("@", "gi");
        if (str !== "" || str.length < 1) {
            return regEx.test(str);
        }
    }
    notEmptyString(str) {
            str = str !== undefined ? str : "";
            str = str.trim();
            if (str === "" || str.length < 1) {
                var empty = false;
                return empty
            } else {
                return str;
            }
        }
        // method to check if it is string
    isString(str) {
            if (typeof str === "string") {
                return str;
            } else {
                return false;
            }
        }
        // method to check if it is string
    isNumber(num) {
            if (typeof num === "number") {
                return num;
            } else {
                return false;
            }
        }
        //  method to check type is image of url
    checkIsImage(url) {
        let extname = Path.extname(url);
        if (extname == ".png" || extname == ".jpg" || extname == "jpe" || extname == "jpeg" || extname == "ief") {
            return url;
        } else {
            return false;
        }
    }
}

// instantiate helpers
module.exports = new Helpers();