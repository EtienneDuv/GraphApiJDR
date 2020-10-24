/* RESET SCHEMA */
DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA public AUTHORIZATION postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;



/* CREATE TABLES */
CREATE TABLE player (
    id      SERIAL PRIMARY KEY NOT NULL,
    surname     VARCHAR (50) NOT NULL,
    name  VARCHAR (50) NOT NULL,
    mail    VARCHAR (50) UNIQUE NOT NULL
);
CREATE TABLE game(
    id              SERIAL PRIMARY KEY NOT NULL,
    surname             VARCHAR (50),
    characterData  JSON NOT NULL

);
CREATE TABLE map (
    id          SERIAL PRIMARY KEY NOT NULL,
    idPlayer    INTEGER REFERENCES player(id),
    surname         VARCHAR (50) NOT NULL,
    map       VARCHAR (500)  /*LIEN VERS L'IMAGE*/
);
CREATE TABLE character (
    id          SERIAL PRIMARY KEY NOT NULL,
    idPlayer    INTEGER REFERENCES player(id),
    idGame       INTEGER REFERENCES game(id),
    surname         VARCHAR (50) NOT NULL,
    info        JSON NOT NULL
);
CREATE TABLE campain (
    id      SERIAL PRIMARY KEY NOT NULL,
    surname     VARCHAR (50),
    idGame     INTEGER REFERENCES game(id),
    idDm1   INTEGER REFERENCES player(id) NOT NULL,
    idDm2   INTEGER REFERENCES player(id),
    idDm3   INTEGER REFERENCES player(id)
);  
CREATE TABLE scenario (
    id          SERIAL PRIMARY KEY NOT NULL,
    idCampain  INTEGER REFERENCES campain(id),
    content   VARCHAR (5000)
);
CREATE TABLE log (
    id          SERIAL PRIMARY KEY NOT NULL,
    idCampain  INTEGER REFERENCES campain(id),
    content   VARCHAR (50000)
);	
CREATE TABLE note (
    id          SERIAL PRIMARY KEY NOT NULL,
    idCampain  INTEGER REFERENCES campain(id),
    content   VARCHAR (5000)
);



/* PROCEDURES */
CREATE OR REPLACE FUNCTION generate_log_note_scenario()
    RETURNS trigger
    as $$
    BEGIN
        INSERT INTO log(idCampain, content)
            VALUES (new.id, '{}');
        INSERT INTO note(idCampain, content)
            VALUES (new.id, '{}');
        INSERT INTO scenario(idCampain, content)
            VALUES (new.id, '{}');
        RETURN NULL;
    END;
    $$ LANGUAGE plpgsql;



/* TRIGGERS */
CREATE TRIGGER generate_log_note_scenario
    AFTER INSERT ON campain
    FOR EACH ROW 
    EXECUTE PROCEDURE generate_log_note_scenario()
