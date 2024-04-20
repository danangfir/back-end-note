const { addnotehandler, getallnoteshandler, getnotebyidhandler, editNoteByIdhandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addnotehandler,
    },

    {
        method: 'GET',
        path: '/notes',
        handler: getallnoteshandler,
    },

    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getnotebyidhandler,
    },

    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdhandler,
    },

    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    }
];

module.exports = routes;
