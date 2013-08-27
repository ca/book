var bookView = Backbone.View.extend({
    events: {
        'submit #add-book': 'onAddBookSubmit'
    },
    
    onAddBookSumbit: function (e) {
        e.preventDefault();
        
        var book = new bookModel();
        book.save({
            title: this.$('#book-title').val(),
            author: this.$('#book-author').val(),
            isbn: this.$('#book-isbn').val()
        },
        {
            success: function (book) {
                console.warn(book.toJSON());
            }
        });
    }
});