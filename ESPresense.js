console.log('Plugin archifacile.fr / ESPresense V0.3 start')

$('#editeur').append('<textarea id="espresense" style="position: absolute;right:0;top:0;width: 200px;height: 100%;background-color: #eee"></textarea>')

setInterval(() => {
    let pieces = Array.isArray(archi.plan?.pieces) ? archi.plan.pieces : archi.pp.pieces;

    let yaml = 'rooms:\n' + pieces.filter(piece => !piece.exterieur).map(piece => {
        return '  - name: ' + piece.nom + '\n    points:\n' + piece.points.map(point => '      - [' + point.X + ', ' + point.Y + ']').join('\n')
    }).join('\n')

    $('#espresense').html(yaml)
}, 1000)