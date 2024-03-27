"use strict";
// create a function
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Artist one", "The first album"));
console.log(make_album("Artist two", "The second album", 12));
console.log(make_album("Artist three", "The 3rd Album"));
