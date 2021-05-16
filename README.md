# Simple jekyll theme
Quick guide.

## Creating a post
Just create a `.markdown` file in _posts with the following type of name:

    _posts\
      YYYY-MM-DD-name-of-post.markdown

## Front matter variables
    layout: post | compactPost | page
    title: "title of post"
    assets: "folder name"
    show_excerpts: true | false
    excerpt_separator: <!--more-->
    autoFillImages: true | false
    autoFillAudios: true | false
    imageDescription: "An image description"
    audioDescription: "A video description"  

- `Layout` can be: post, compactPost, page
- `title` is optional. It will be the printed title. No matter what the file name of the post is, this variable will be printed. If not specified, the title of the post with be the title specified in the name of the file.
- `assets` defines the name of a folder in /assets
- `show_excerpts` can be `true` or `false`. Is displays an excerpt of the post in index.markdown. The excerpt can be defined with the following variable.
- `excerpt_separator` is defined by the html comment `<!--more-->` and is used to define where you want your excerpt to end.
- `autoFillImages`: display all images of `assets` or not
- `autoFillAudios`: display all audios of `assets` or not
- `imageDescription`: Use this variable to give a description of the automatically filled images.

Protip: if you need to write a long mutli-line description, you can use this | at the beginning:

    imageDescription: "|
    A long and surely interesting description,
    "

- `audioDescription`: Same as `imageDescription` but for the automatically filled audio.

*Watch out*: all images have to end by `.jpg` or `.png`. Other file extensions (`.tif`, ...) won't work for the moment. The file extensions are case sensitive too: `.JPG`,... won't work.


## Adding media to your post
The media/assets of a new post go in a folder that you will name as you wish in the `assets` folder.

E.g: If I've just created a post titled "Why squirrels actually don't exist", I'll create a folder in assets with a name like `squirrelsOrNot`.

    assets\
      ...
      squirrelsOrNot\
        gouv.jpg
        chewbaccaSounds.mp3
        ...
