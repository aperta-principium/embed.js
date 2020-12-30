# Embed
Embed just about anything... in the browser

[Demo](https://embed.filiptronicek.now.sh/)

## Setup

First include the scripts
```html
<script src="https://cdn.jsdelivr.net/gh/jquery/jquery@3.2.1/dist/jquery.min.js"> </script>
```

Then just create a div
```html
<div id="embed"> </div>
```
and set the link
```html
<script type="module"> 

import { embed } from "https://cdn.jsdelivr.net/gh/aperta-principium/Embed/embed.min.js";

embed("https://github.com/filiptronicek.png");
</script>
```
And you're done!


## To-dos:
* SoundCloud embed
* PasteBin Embed
* Streamable embed
