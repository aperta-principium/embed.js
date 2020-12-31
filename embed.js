import {
    videoCheck,
    documentCheck,
    musicCheck,
    textCheck,
    testImage,
    vimYTvalidate
} from './checks.js';
import { hide } from './pollyfills.js';

/**
 * @param  {} url
 * @param  {} el="#embed" - HTML selector
 */
export function embed(url, el = "#embed") {

    function record(url, result) {
        if (result == "success") {
            document.querySelector("#imgShow").setAttribute("src", `https://interclip.app/proxy?url=${url}`);
        } else {
            hide("#imgShow");
        }
    }

    if (videoCheck(url)) {
        document.querySelector(el).innerHTML = `<video id="player" width="100%" playsinline controls><source src="${url}" id="videoSource"/></video>`;
    } else {
        hide("#player");
    }

    if (documentCheck(url)) {
        document.querySelector(el).innerHTML = "<iframe id='documentEmbed' width='100%' height='623px' frameborder='0'>";
        document.querySelector("#documentEmbed").setAttribute("src", `https://drive.google.com/viewerng/viewer?embedded=true&url=${url}`);
    } else {
        hide("#documentEmbed");
    }

    if (musicCheck(url)) {
        document.querySelector(el).innerHTML = `<audio controls><source src="${url}"></audio> `;
    }
    if (textCheck(url)) {
        document.querySelector(el).load(url);
    }

    testImage(url, record);
    vimYTvalidate(url);
}
