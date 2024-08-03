class Storage {
    constructor(key, defaultData = {}, options = {}) {
        this.options = {
            key: key,
            useLocalStorage: true,
            useCookies: true,
            cookieExpirationDays: 365,
            ...options
        };

        this._data = this.load(defaultData);

        //with set interval save the object
        setInterval(() => {
            this.save();
        }, 1000);

        return this._data;
    }

    load(defaultData) {
        let data;
        if (this.options.useLocalStorage && this.isLocalStorageAvailable()) {
            data = localStorage.getItem(this.options.key);
        }
        if (!data && this.options.useCookies) {
            data = this.getCookie(this.options.key);
        }
        return data ? JSON.parse(data) : defaultData;
    }

    save() {
        const data = JSON.stringify(this._data);
        if (this.options.useLocalStorage && this.isLocalStorageAvailable()) {
            localStorage.setItem(this.options.key, data);
        }
        if (this.options.useCookies) {
            this.setCookie(this.options.key, data, this.options.cookieExpirationDays);
        }
    }

    clear() {
        this._data = {};
        if (this.options.useLocalStorage && this.isLocalStorageAvailable()) {
            localStorage.removeItem(this.options.key);
        }
        if (this.options.useCookies) {
            this.setCookie(this.options.key, '', -1);
        }
    }

    isLocalStorageAvailable() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch (e) {
            return false;
        }
    }

    setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}
