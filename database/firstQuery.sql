/* Create the role & database if not exist */
create role "brian" NOINHERIT LOGIN ENCRYPTED PASSWORD '@33dqaDAd2#3ff{]dad@sad]da@da22rf' CONNECTION LIMIT 1;

SELECT 'CREATE DATABASE zugoinet with owner brian'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'zugoinet')\gexec

/* Create the tables */
CREATE TABLE "Users"
(
    id serial,
    "name" character varying(25) NOT NULL,
    "lastName" character varying(25) NOT NULL,
    "email" character varying(256) NOT NULL UNIQUE,
    "phone" character varying(25) UNIQUE,
    "sex" char NOT NULL,
    "password" character varying(255) NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL,
    PRIMARY KEY (id)
);
/*  Aqui falta algo!!! */
ALTER TABLE Users OWNER to brian;