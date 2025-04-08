/*
Prg par Jérôme SAYNES le 08/04/2025
https://github.com/jsys/ESPresence-plugin
MIT License
*/

console.log('Plugin www.archifacile.fr / ESPresense start')

$('#editeur').append('<textarea id="espresense" style="position: absolute;right:0;top:0;width: 200px;height: 100%;background-color: #eee"></textarea>')

setInterval(() => {
    let yaml = 'rooms:\n' + (archi.plan || archi.pp).pieces.map(piece => {
        return '  - name: ' + piece.nom + '\n    points:\n' + piece.points.map(point => '      - [' + point.X + ', ' + point.Y + ']').join('\n')
    }).join('\n')

    $('#espresense').html(yaml)
}, 1000)