export function hide(el) {
    document.querySelector(el).style.display = "none";
}

export function show(el) {
    document.querySelector(el).style.display = "";
}

export const $ajax = (() => {
    const that = {};
    that.send = (url, options) => {
      const on_success = options.onSuccess || function () {},
        on_error = options.onError || function () {},
        on_timeout = options.onTimeout || function () {},
        timeout = options.timeout || 10000;
  
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          try {
            var data = JSON.parse(xmlhttp.responseText);
          } catch (err) {
            console.error(`${err.message} in ${xmlhttp.responseText}`);
            return;
          }
          on_success(data);
        } else {
          if (xmlhttp.readyState == 4) {
            on_error();
          }
        }
      };
      xmlhttp.timeout = timeout;
      xmlhttp.ontimeout = () => {
        on_timeout();
      };
      xmlhttp.open('GET', url, true);
      xmlhttp.send();
    };
    return that;
  })();