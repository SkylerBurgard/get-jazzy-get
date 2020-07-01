$(document).ready(onReady);

let songs = [];
let artist = [];

function onReady() {
    $.ajax({
        type: 'GET',
        url: '/artist'
    }).then(function (response) {
        artist = response;
        for (let info of artist) {
            $('#artistTableBody').append(`
                <tr>
                    <td>${info.name}</td>
                    <td>${info.born}</td>
                    <td>${info.died}</td>
                </tr>
            `);
        }
    });

    $.ajax({
        type: 'GET',
        url: '/songs'
    }).then(function (response) {
        song = response;
        for (let info of song) {
            $('#songTableBody').append(`
                <tr>
                    <td>${info.title}</td>
                    <td>${info.artist}</td>
                </tr>
            `);
        }
    });
    // TODO Add ajax request for /songs and display on DOM
}