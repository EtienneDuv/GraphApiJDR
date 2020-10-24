INSERT INTO campain (surname, idGame, idDm1) VALUES
    ('Campain avec les potes', 1, 1),
    ('Les Terres de Naheulbeuk', 2, 2),
    ('Campain 1', 1, 3),
    ('Campain 2', 2, 2);

INSERT INTO map (idPlayer, surname, map) VALUES
    (1, 'Mines', 'urlToMap'),
    (1, 'Donjon', 'urlToMap'),
    (2, 'Bâtiment', 'urlToMap'),
    (3, 'Endroit', 'urlToMap');

INSERT INTO character(idPlayer, idGame, surname, info) VALUES
    (1, 1, 'Kragor', '{}'),
    (1, 2, 'Gomaloth', '{}'),
    (2, 1, 'Alagaros', '{}'),
    (3, 1, 'Trauwen', '{}'),
    (3, 2, 'Nemy', '{}');