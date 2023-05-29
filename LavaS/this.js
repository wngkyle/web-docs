// Keyword this
// the object that is executing the current function 
// Method, a function in an object -> 'this' refers to the object itself
// Function, not part of an object -> 'this' refers to the global object, windown object

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};
video.length = 90;
video.play(); // prints video object
video.stop = function() {
    console.log(this);
};
video.stop(); // print video object
// The above code prints out the video object itself

function playVideo() {
    console.log(this);
}
playVideo(); 
// prints window object

function Video(title) { // object constructor
    this.title = title;
    console.log(this);
}
const v = new Video("title1");
// prints out the video object
// Video object is different to video object

// new operator creates an empty object and sets the Video object properties 
// to the empty object

const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            // console.log(this.title, tag); // will be undefined
            // 'this' will be undefined because you are inside a function that
            // is not method of the video2 object. So when you use this, it will
            // refer to the window object

            console.log(this.title, tag);
        }, this); // add 'this' in here to ensure it is refering to calling object
    }
};
video2.showTags();

