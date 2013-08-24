var bookModel = Backbone.Model.extend({
    urlRoot: '/books',
    defaults: {
        title: '',
        author: '',
        isbn: '',
        coverArt: '',
        description: '',
        tokens: []
    }
});