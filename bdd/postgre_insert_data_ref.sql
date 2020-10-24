-- TRUNCATE TABLE campain RESTART IDENTITY CASCADE;
-- TRUNCATE TABLE map RESTART IDENTITY;
-- TRUNCATE TABLE character RESTART IDENTITY;
-- TRUNCATE TABLE player RESTART IDENTITY;

INSERT INTO player (surname, name, mail) VALUES 
    ( 'Duverney',   'Etienne',      'etienne.duverney@gmail.com' ),
    ( 'Chiaverini', 'Marie',        'marie.chiaverini@gmail.com' ),
    ( 'TestNom',    'Test-Présurname',  'test.test@gmail.com' );

INSERT INTO game (surname, characterData) VALUES
    ('Degenesis',
        '{  "pseudo":"",
            "sexe":"",
            "alignement":"",
            "faction":"",
            "stats":{
                "force":0,
                "intelligence":0,
                "charisme":0,
                "agilité":0
                }
        }'

    ),
    ('Naheulbeuk',
        '{
        "pseudo": "",
        "sexe": "",
        "alignement": "",
        "Religion": "",
        "stats" : {
            "force": 0,
            "intelligence": 0,
            "charisme": 0,
            "agilité": 0 
            }
        }'
    );
