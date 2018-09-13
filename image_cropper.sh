#!/bin/bash

for f in archive/*.{png,jpg};
  do filename=$(basename "$f" | cut -d. -f1);
  echo $filename
  convert archive/$filename.* -gravity center -resize 350x240\^ -crop 350x240+0+0 +repage static/$filename.png
done

