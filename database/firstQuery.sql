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

CREATE TABLE "Countrys"(
    id SERIAL,
    "countryName" character varying(50) UNIQUE NOT NULL,
    PRIMARY KEY(id)
);

ALTER TABLE Users OWNER to brian;
/*------------------------------------------^^^^^^^^^^^^^^^^^^^^^^------------------------------------------- Verified*/
CREATE TABLE "Rols"(
    id SERIAL,
    "rolName" int,
    description character varying(255),
    PRIMARY KEY(id);
);

CREATE TABLE "Provinces"(
    id SERIAL,
    "provinceName" character varying(50) NOT NULL,
    "countryId" integer NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE "Addresses"(
    id SERIAL,
    "zipcode" character varying(20) NOT NULL,
    "city" character varying(50) NOT NULL
    PRIMARY KEY(id)
);

CREATE TABLE "Typeofestablishments"(
    "typeOfEstablishmentId" SERIAL NOT NULL PRIMARY KEY,
    "typeOfEstablishmentName" character varying(50) NOT NULL
);

CREATE TABLE "Establishments"(
    "establishmentId" SERIAL NOT NULL PRIMARY KEY,
    "establishmentName" character varying(50) NOT NULL
);

CREATE TABLE "Branchoffices"("branchOfficeId" SERIAL NOT NULL PRIMARY KEY);

CREATE TABLE "Categorys"(
    "categoryId" SERIAL NOT NULL PRIMARY KEY,
    "categoryName" character varying(50) NOT NULL,
    "description" character varying(255) NOT NULL
);

CREATE TABLE "Products"(
    "productId" SERIAL NOT NULL PRIMARY KEY,
    "barCode" character varying(30) UNIQUE NOT NULL,
    "productName" character varying(60) NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL
);

CREATE TABLE "Images"(
    "imageId" SERIAL NOT NULL PRIMARY KEY,
    "url" character varying(255) NOT NULL
);

CREATE TABLE "Prices"(
    "priceId" SERIAL NOT NULL PRIMARY KEY,
    "price" money NOT NULL,
    "ifmain" bit,
    "vote" int
);


/*Create Table de Product_BranchOffice y foreign key*/
CREATE TABLE "Products_branchoffices"(
    "productId" INT,
    "branchOfficeId" INT,
    PRIMARY KEY("productId", "branchOfficeId"),
    FOREIGN KEY ("productId") REFERENCES "Products",
    FOREIGN KEY ("branchOfficeId") REFERENCES "Branchoffices"
);

/*create Table de Precio_Producto_Sucursal y foreign key*/
CREATE TABLE "Prices_products_branchoffices"(
    "productId" INT,
    "branchOfficeId" INT,
    "priceId" INT,
    PRIMARY KEY("productId", "branchOfficeId", "priceId"),
    FOREIGN KEY ("productId", "branchOfficeId") REFERENCES "Products_branchoffices",
    FOREIGN KEY ("priceId") REFERENCES "Prices"
);
/*create table de Users_rols y foreign key*/
CREATE TABLE "Users_rols"(
    "userId" INT,
    "rolId" INT,
    FOREIGN KEY("userId") REFERENCES "Users",
    FOREIGN KEY("rolId") REFERENCES "Rols"
);
/*create table de addresses_users y foreign key*/
CREATE TABLE "Addresses_users"(
    "userId" INT,
    "addressId" INT,
    FOREIGN KEY("userId") REFERENCES "Users",
    FOREIGN KEY("addressId") REFERENCES "Addresses"
);
/*ALTER TABLE para agregar las foreign key*/

/*Tabla Direciones, se agrega columna idcountry, idprovince*/
ALTER TABLE
    "Addresses"
ADD
    COLUMN "countryId" INT;

ALTER TABLE
    "Addresses"
ADD
    COLUMN "provinceId" INT;

/*Se añade a foreign key para hacer relacion*/
/*Tabla direcciones*/
ALTER TABLE
    "Addresses"
ADD
    FOREIGN KEY ("countryId") REFERENCES "Countrys";

ALTER TABLE
    "Addresses"
ADD
    FOREIGN KEY ("provinceId") REFERENCES "Provinces";

/*Tabla De Establecimientos*/
ALTER TABLE
    "Establishments"
ADD
    COLUMN "typeOfEstablishmentId" INT;

/*tabla  Foreign key establecimientos*/
ALTER TABLE
    "Establishments"
ADD
    FOREIGN KEY ("typeOfEstablishmentId") REFERENCES "Typeofestablishments";

/*Tabla De Sucursales*/
ALTER TABLE
    "Branchoffices"
ADD
    COLUMN "addressId" INT;

ALTER TABLE
    "Branchoffices"
ADD
    COLUMN "establishmentId" INT;

/*Tabla sucursales FOREIGN key*/
ALTER TABLE
    "Branchoffices"
ADD
    FOREIGN KEY ("addressId") REFERENCES "Addresses";
ALTER TABLE
    "Branchoffices"
ADD
    FOREIGN KEY ("establishmentId") REFERENCES "Establishments";

/*Tabla productos*/
ALTER TABLE
    "Products"
ADD
    COLUMN "categoryId" INT;
ALTER TABLE
    "Products"
ADD
    FOREIGN KEY ("categoryId") REFERENCES "Categorys";

/*Tabla De Imagenes*/
ALTER TABLE
    "Images"
ADD
    COLUMN "productId" INT;

/*Tabla imagenes foreign key*/
ALTER TABLE
    "Images"
ADD
    FOREIGN KEY ("productId") REFERENCES "Products";