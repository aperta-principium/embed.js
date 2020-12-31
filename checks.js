export function videoCheck(url) {
    return url.match(/\.(mp4|mkv)$/i) != null;
}

export function documentCheck(url) {
    return(url.match(/\.(doc|docx|xls|xlsx|ppt|pptx|pdf|pages|eps|ps|ttf|xps)$/i) != null);
}

export function textCheck(url) {
    return url.match(/\.(txt)$/i) != null;
}

export function musicCheck(url) {
    return url.match(/\.(mp3|waw|ogg)$/i) != null;
}


/**
   * @param  {} url
   * @param  {} callback
   * @param  {} timeout
*/
export function testImage(url, callback, timeout) {
    timeout = timeout || 5000;
    let timedOut = false,
        timer;
    const img = new Image();
    img.onerror = img.onabort = () => {
        if (! timedOut) {
            clearTimeout(timer);
            callback(url, "error");
        }
    };
    img.onload = () => {
        if (! timedOut) {
            clearTimeout(timer);
            callback(url, "success");
        }
    };
    timer = setTimeout(() => {
        timedOut = true;
        callback(url, "timeout");
    }, timeout);
}


/* Vimeo and YouTube */

export function vimYTvalidate(url, el) {
    if (url != undefined || url != "") {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/i;
        const match = url.match(regExp);
        if (match && match[2].length == 11) {
            // Do anything for being valid
            // if need to change the url to embed url then use below line)
            document.querySelector(el).html('<iframe id="yt" width="100%" height="500" frameborder="0"> </iframe>');

            document.querySelector("#yt").attr("src", `https://www.youtube.com/embed/${
                match[2]
            }?autoplay=0&rel=0`);
        } else {
            if (GetVimeoIDbyUrl(url)) {
                id = GetVimeoIDbyUrl(url);
                document.querySelector(el).html('<iframe id="vimeoPlayer" src="" width="100%" height="500" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
                document.querySelector("#vimeoPlayer").attr("src", `//player.vimeo.com/video/${id}?title=0&amp;byline=0&amp;portrait=0&amp;color=ffff00"`);
            } else {
                document.querySelector("#yt").hide();
            }
            // Do anything for not being valid
        }
    } else {
        document.querySelector("#player").hide();
        document.querySelector("#imgShow").hide();
        // Do anything for not being valid
    }
}
/**
   * Used to get video id from Vimeo URL
   * @param  {} url
   */

  export function GetVimeoIDbyUrl(url) {
    let id = false;
    $.ajax({
        url: `https://vimeo.com/api/oembed.json?url=${url}`,
        async: false,
        success: (response) => {
            if (response.video_id) {
                id = response.video_id;
            }
        }
    });
    return id;
}
