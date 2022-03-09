function RubyWord(options) {
    this.contentID = 'content';
    this.json;
    this.contentElement;
    this.contents;
    this.rubyWords;
    this.init = function () {
        if (this.json = options.json) this.rubyWords = JSON.parse(this.json);
        if (options.contentID) this.contentID = options.contentID;
        this.contentElement = document.getElementById(this.contentID);
    }
    this.convert = function () {
        this.init();
        let contents = this.contentElement.innerHTML;
        //TODO map
        this.rubyWords.forEach(function (ruby_word) {
            let tag = `<ruby>${ruby_word.word}<rt>${ruby_word.kana}</rt></ruby>`;
            contents = contents.replace(ruby_word.word, tag);
        });
        this.contents = contents;
        this.contentElement.innerHTML = this.contents;
    }
}