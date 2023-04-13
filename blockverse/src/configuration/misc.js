export function trunc(text) {
    return text.length > 10 ? `${text.substr(0, 10)}...` : text;
}

export function truncAddr(text) {
    if (text.length > 11) {
        let start = text.substring(0, 4);
        let end = text.substring(text.length - 4, text.length);
        while (start.length + end.length < 11) {
            start = start + '.';
        }
        return start + end;
    }
    return text;
}

export function getDarkMode(){
    if(localStorage.getItem("darkMode") === undefined){
        localStorage.setItem("darkMode", true);
        return true;
    }else{
        return localStorage.getItem("darkMode")==="true"?true:false;
    }
}

export function setDarkMode(darkMode, setMode) {
    setMode(darkMode);
    window.location.reload();
    localStorage.setItem("darkMode", darkMode);
}