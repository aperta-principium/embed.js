# embed.js
Embed just about anything... in the browser

## Supported embeds
- YouTube Videos
- Vimeo videos
### Supported file extensions
- `.jpg`
- `.jpeg`
- `.png`
- `.webp`
- `.mp3`
- `.wav`
- `.ogg`
- `.txt`
- `.mp4`
- `.mkv`
- `.doc`
- `.docx`
- `.xls`
- `.xlsx`
- `.ppt`
- `.pptx`
- `.pdf`
- `.pages`
- `.eps`
- `.ps`
- `.ttf`
- `.xps`


[Demo](https://embed.filiptronicek.now.sh/)

## Setup

Then just create a div
```html
<div id="embed"> </div>
```
and set the link
```html
<script type="module"> 
import { embed } from "https://cdn.jsdelivr.net/gh/aperta-principium/embed.js/embed.min.js";

embed("https://github.com/filiptronicek.png");
</script>
```
And you're done!


## To-dos
* SoundCloud embed
* PasteBin Embed
* Streamable embed
