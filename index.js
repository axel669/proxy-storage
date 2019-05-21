'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const storageProxy = storage => new Proxy(
    storage,
    {
        get(source, prop) {
            if (prop === "clear") {
                return () => source.clear()
            }
            const item = source.getItem(prop);

            if (item === null) {
                return undefined
            }

            return JSON.parse(item)
        },
        set(source, prop, value) {
            source.setItem(prop, JSON.stringify(value));
        },
        deleteProperty(source, prop) {
            source.removeItem(prop);
            return true
        },
        has(source, prop) {
            return (prop in source)
        }
    }
);

const local = storageProxy(localStorage);
const session = storageProxy(sessionStorage);

exports.local = local;
exports.session = session;
