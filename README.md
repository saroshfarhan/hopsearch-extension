# HopSearch

_`Alt+/` to jump to the search box in a jiffy!_

Twitter, Google Search and a few others have it, but, possibly, your favorite website doesn't allow you to use a key-combo to jump to the search field.

## What is it? :confused:

HopSearch is a Chrome **browser extension** that allows you to use the key-combo `Alt+/` to jump to the search input box on any page. Ofcourse, the extension doesn't know-it-all and hence requires your help in discovering new pages, which, again, is just a _click_ away.

## How to use it? :wrench:

If you're here, you're probably not going to install it via the Chrome Extensions store but, hey, that's the easiest way to go.

Nonetheless, here's how you install it from this repository:

- Clone this repository or _download as ZIP_ and extract the ZIP
- Open Chrome
- Open the Extension Management page by navigating to `chrome://extensions`
- Enable _Developer Mode_ by clicking the toggle switch next to _Developer mode_
- Click the _Load unpacked_ button and select the cloned / extracted directory

Now hit `Alt+H` to fire up the extension _(and maybe ... pin it?)_.

## Features _(as FAQs)_ :gem:

### How to make it work for _this_ website? 

- Open your [favorite website](https://www.reddit.com/r/selfhosted/)
- `AltH` or click on the extension button in the Chrome toolbar
- Click on _Locate Search Box_
- Click on the search input field on the website
- You should now see an alert stating that the config has been saved

Try `Alt+/` and you should find the cursor at the search box.

### It's officious, how do I stop it?

It could be meddlesome while typing with heavy shortcuts, I understand. Just `Alt+H` or click on the extension button in the Chrome toolbar and then click on _Pause_.

## Discovering websites? :pencil:

As I said in the first section, this extension ain't a know-it-all and I require _your_ help in extending it to websites I've not visited before. It helps other users who would visit the same website in the future.

Once you've made it work for an undiscovered page, as explained above in features:

- `AltH` or click on the extension button in the Chrome toolbar
- Click on _Copy Config_
- [Create a new issue](https://github.com/theGeekyLad/hopsearch-extension/issues/new) with the config

I'll merge it upstream every week.

---

Made with :heart: by `theGeekyLad`Add 

<!--
## To-Do

- Supported pages must have ext. icon active
-->