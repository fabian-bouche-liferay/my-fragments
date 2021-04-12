console.group('PGN Viewer');
console.log('fragmentElement', fragmentElement);
console.log('configuration', configuration);

function loadBoard() {

    var boardElt = fragmentElement.querySelector('.board'); 
    boardElt.id =  fragmentElement.id + "-board";

    var pgn = configuration.pgn;
    var board = PGNV.pgnView(boardElt.id, {pgn: pgn});

}

var scriptId = '@mliebelt/pgn-viewer@1.5.1';
var scriptSrc = 'https://cdn.jsdelivr.net/npm/@mliebelt/pgn-viewer@1.5.1/lib/pgnv.min.js';
loadScript(scriptSrc, scriptId);

action(loadBoard, scriptId);

console.groupEnd();
