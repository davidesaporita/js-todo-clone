/**
 * 
 * ToDo list 
 * 
 * Ricreare la todo list vista oggi durante la lezione (focus dell’esercizio la logica)
 * Usiamo i template in html e il clone per separare la parte logica (JS) dalla parte di markup (HTML)
 * recap funzionalità: mostrare, aggiungere e eliminare elementi dalla lista
 * 
 */

$(document).ready(function() {
    
    // References
    var list = $('.todo');
    var newInput = $('.new-input');

    // Variables
    var template = $('.template li').clone();

    // Array per popolare liste
    var easyList = [
        'Make a to do list',
        'Check off first thing on the to do list',
        'Realise you\'ve already accomplished 2 things on the list',
        'Reward yourself with a cookie'
    ];

    // Popolazione lista
    addItemsToList(easyList);

    newInput.keyup(function(e) {
        if(e.which === 13 || e.keyCode === 13) {
            var text = $(this).val().trim();
            if(text !== '') {
                addItemsToList(text);
            }
        }
    });
    






    // Funzione per popolare lista e aggiungere nuovi elementi
    function addItemsToList(items = 0) {
        
        // Ricerca ultimo id (data-id attribute) presente in lista
        var lastId = $('.todo li').last().attr('data-id');
        if(isNaN(lastId)) lastId = 0;     

        // Controllo se si vuole inserire un array o un singolo elemento
        if(typeof(items) === 'object') var itemsNumber = items.length;
        else                           var itemsNumber = 1;
        
        // Ciclo di inserimento
        for (var i = 0; i < itemsNumber; i++) {            
            var newItem = template.clone();
            newItem.attr('data-id', (lastId++));
            if(itemsNumber === 1) {
                newItem.prepend(items);
            } else {
                newItem.prepend(items[i]);
            }
            
            list.append(newItem);
        }
    }

}); // End of ready function