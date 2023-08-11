var request = window.indexedDB.open('myDatabase', 1);
var db;

request.onerror = function(event) {
    console.error('Erro ao abrir o banco de dados:', event.target.errorCode);
};

request.onsuccess = function(event) {
    db = event.target.result;
    console.log('Banco de dados aberto com sucesso');

    // AQUI você define o onupgradeneeded
    db.onupgradeneeded = function(event) {
        var db = event.target.result;

        if (!db.objectStoreNames.contains('myStore')) {
            var objectStore = db.createObjectStore('myStore', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('name', 'name', { unique: false });
            objectStore.createIndex('description', 'description', { unique: false });
            objectStore.createIndex('age_group', 'age_group', { unique: false });
            objectStore.createIndex('number_players', 'number_players', { unique: false });
            objectStore.createIndex('counter_players', 'counter_players', { unique: false });

            console.log('Loja de objetos criada com sucesso');
        }
    };

    // Você também pode chamar a função para manipular dados aqui, se necessário
};
