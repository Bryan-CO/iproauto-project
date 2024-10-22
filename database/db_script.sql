-- Active: 1728779917617@@127.0.0.1@5432@iproauto
-- CREATE DATABASE IPROAUTO;

--------------------------- ALL ABOUT VEHICLES -----------------------------
DROP TABLE IF EXISTS vehicle_brands;
CREATE TABLE vehicle_brands(
    id_brand SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS vehicle_models;
CREATE TABLE vehicle_models(
    id_model SERIAL PRIMARY KEY,
    id_brand INTEGER REFERENCES vehicle_brands(id_brand),
    name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS vehicle_colors;
CREATE TABLE vehicle_colors(
    id_color SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS vehicle_fuels;
CREATE TABLE vehicle_fuels(
    id_fuel SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS vehicle;
CREATE TABLE vehicle(
    id_vehicle SERIAL PRIMARY KEY,
    license_plate VARCHAR(20) NOT NULL,
    id_brand INTEGER NOT NULL REFERENCES vehicle_brands(id_brand),
    id_model INTEGER NOT NULL REFERENCES vehicle_models(id_model),
    id_color INTEGER NOT NULL REFERENCES vehicle_colors(id_color),
    year INTEGER NOT NULL, -- NO SE SI ES NOT NULL, PREGUNTAR ESO
    engine_capacity NUMERIC,
    chassis_number VARCHAR(50),
    id_fuel INTEGER NOT NULL REFERENCES vehicle_fuels(id_fuel),
    observations TEXT,
    -- AQUI VIENE EL PROPIETARIO O CLIENTE
    url_image TEXT
    -- PREGUNTAR TMB LO DEL SOAT, LO DE PROXIMA REVISION, Y VIEGNETE HASTA
)

-- PREGUNTAR SI EMPLEADO TIENE LOS MISMOS CAMPOS QUE CLIENTE

------------------------------- ALL ABOUT OWNERS / PROPIETARIES -----------------------------
DROP TABLE IF EXISTS provinces;
CREATE TABLE provinces(
    id_province SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS districts;
CREATE TABLE districts(
    id_district SERIAL PRIMARY KEY,
    id_province INTEGER NOT NULL REFERENCES provinces(id_province),
    name VARCHAR(255)
);




------------------------------ INSERTS ---------------------------------
-- Insertar datos en vehicle_brands (marcas de vehículos)
INSERT INTO vehicle_brands (name) VALUES
('Toyota'),
('Ford'),
('Chevrolet'),
('Honda'),
('Nissan'),
('BMW'),
('Mercedes-Benz'),
('Volkswagen'),
('Hyundai'),
('Kia');

-- Insertar datos en vehicle_models (modelos de vehículos)
INSERT INTO vehicle_models (id_brand, name) VALUES
(1, 'Corolla'),
(1, 'Camry'),
(2, 'F-150'),
(2, 'Mustang'),
(3, 'Silverado'),
(3, 'Malibu'),
(4, 'Civic'),
(4, 'Accord'),
(5, 'Altima'),
(5, 'Sentra'),
(6, 'Serie 3'),
(6, 'X5'),
(7, 'Clase C'),
(7, 'Clase E'),
(8, 'Golf'),
(8, 'Jetta'),
(9, 'Elantra'),
(9, 'Sonata'),
(10, 'Rio'),
(10, 'Sportage');

-- Insertar datos en vehicle_colors (colores de vehículos)
INSERT INTO vehicle_colors (name) VALUES
('Rojo'),
('Azul'),
('Negro'),
('Blanco'),
('Plateado'),
('Verde'),
('Amarillo'),
('Gris'),
('Naranja'),
('Púrpura');

-- Insertar datos en vehicle_fuels (tipos de combustible)
INSERT INTO vehicle_fuels (name) VALUES
('Gasolina'),
('Diésel'),
('Eléctrico'),
('Híbrido');

-- Insertar datos en vehicle (vehículos)
INSERT INTO vehicle (
    license_plate, id_brand, id_model, id_color, year, engine_capacity, chassis_number, id_fuel, observations, url_image
) VALUES
('ABC123', 1, 1, 1, 2020, 1.8, 'XYZ123456789', 1, 'Vehículo en buen estado.', 'https://example.com/image1.jpg'),
('XYZ789', 2, 4, 3, 2021, 2.0, 'XYZ987654321', 1, 'Mantenimiento regular requerido.', 'https://example.com/image2.jpg'),
('LMN456', 3, 6, 2, 2019, 2.5, 'ABC123456789', 1, 'Necesita pintura.', 'https://example.com/image3.jpg'),
('JKL012', 4, 8, 5, 2022, 1.5, 'ABC987654321', 1, 'Se instalaron llantas nuevas.', 'https://example.com/image4.jpg'),
('NOP345', 5, 10, 4, 2023, 2.2, 'XYZ123456123', 2, 'En excelente estado.', 'https://example.com/image5.jpg');

-- Insertar datos en provinces (provincias)
-- Insertar datos en provinces (provincias de Perú)
INSERT INTO provinces (name) VALUES
('Lima'),
('Callao'),
('Arequipa'),
('Cusco'),
('La Libertad'),
('Piura'),
('Junín'),
('Ica'),
('Lambayeque'),
('Ayacucho');

-- Insertar datos en districts (distritos de Perú)
INSERT INTO districts (id_province, name) VALUES
(1, 'Lima Centro'),
(1, 'Miraflores'),
(1, 'San Isidro'),
(1, 'Barranco'),
(1, 'San Borja'),
(1, 'Surco'),
(1, 'La Molina'),
(2, 'Callao Centro'),
(2, 'La Perla'),
(2, 'Ventanilla'),
(2, 'Bellavista'),
(3, 'Arequipa'),
(3, 'Cayma'),
(3, 'José Luis Bustamante y Rivero'),
(4, 'Cusco'),
(4, 'Santiago'),
(4, 'San Sebastián'),
(5, 'Trujillo'),
(5, 'Ascope'),
(5, 'Otuzco'),
(6, 'Piura'),
(6, 'Paita'),
(6, 'Sullana'),
(7, 'Huancayo'),
(7, 'El Tambo'),
(7, 'Concepción'),
(8, 'Ica'),
(8, 'Chincha Alta'),
(8, 'Pisco'),
(9, 'Chiclayo'),
(9, 'Lambayeque'),
(9, 'Ferreñafe'),
(10, 'Ayacucho'),
(10, 'Huamanga'),
(10, 'Cangallo');


-------------------------- PROCEDIMIENTOS Y FUNCIONES -----------------------
-- OBTENER LAS MARCAS DE VEHICULOS
CREATE OR REPLACE FUNCTION public.get_vehicle_brands()
 RETURNS TABLE(id_brand integer, name character varying)
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT VB.id_brand, VB.name from vehicle_brands VB;
END;
$function$













































CREATE TABLE person_document_type(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS persons CASCADE;

CREATE TABLE type_persons(
    id_type_person SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS fares(
    id_fare SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

DROP TABLE persons;
CREATE TABLE IF NOT EXISTS persons(
    id_person SERIAL PRIMARY KEY,
    document_type_id INTEGER NOT NULL REFERENCES person_document_type(id_document_type),
    document_number VARCHAR(255) NOT NULL,
    id_province INTEGER NOT NULL REFERENCES provinces(id_province),
    id_district INTEGER NOT NULL REFERENCES districts(id_district),
    address VARCHAR(255) NOT NULL,
    self_phone VARCHAR(255) NOT NULL,
    reference_phone VARCHAR(255),
    email VARCHAR(255),
    observations VARCHAR(255),
    id_fare INTEGER NOT NULL REFERENCES fares(id_fare),
    UNIQUE(document_number)
);

DROP TABLE natural_persons;
CREATE TABLE IF NOT EXISTS natural_persons(
    id_natural_person SERIAL PRIMARY KEY,
    id_person INTEGER NOT NULL REFERENCES persons(id_person) UNIQUE,
    names VARCHAR(255) NOT NULL,
    last_names VARCHAR(255) NOT NULL
    --date_of_birth DATE NOT NULL
);

DROP TABLE natural_clients;
CREATE TABLE IF NOT EXISTS natural_clients( -- FALTA DEFINIR SI SERA PROPIETARIO O CLIENTE
    id_client SERIAL PRIMARY KEY,
    id_person INTEGER NOT NULL REFERENCES persons(id_person) UNIQUE,
    customer_since DATE DEFAULT CURRENT_DATE
);

DROP TABLE employees;
CREATE TABLE IF NOT EXISTS employees(
    id_employee SERIAL PRIMARY KEY,
    id_person INTEGER NOT NULL REFERENCES persons(id_person) UNIQUE,
    employee_since DATE DEFAULT CURRENT_DATE
)


DROP TABLE enterprises_clients;
CREATE TABLE IF NOT EXISTS enterprises_clients(
    id_enterprise SERIAL PRIMARY KEY,
    id_person INTEGER NOT NULL REFERENCES persons(id_person),
    company_name VARCHAR(255) NOT NULL, -- QUEDA EN PIE VER SI UNIQUE, YA QUE COMO LO COMPRUEBO?
    contact_person VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(255) NOT NULL
)



DELETE FROM PERSONS;

INSERT INTO persons (id_type_person, document_type_id, document_number, id_province, id_district, address, self_phone, reference_phone, email, observations) VALUES
(1, 1, '12345678', 1, 1, 'Calle 1, N° 123', '987654321', '123456789', 'cliente1@example.com', 'Ninguna'), -- Persona Natural
(2, 2, '87654321', 1, 2, 'Calle 2, N° 456', '987654322', NULL, 'empresa1@example.com', 'Observación 1'), -- Empresa
(1, 1, '23456789', 2, 1, 'Calle 3, N° 789', '987654323', '123456780', 'cliente2@example.com', NULL), -- Persona Natural
(2, 2, '98765432', 2, 2, 'Calle 4, N° 101', '987654324', NULL, 'empresa2@example.com', 'Observación 2'), -- Empresa
(1, 1, '34567890', 3, 3, 'Calle 5, N° 102', '987654325', '123456781', 'cliente3@example.com', 'Observación 3'), -- Persona Natural
(2, 2, '45678901', 3, 1, 'Calle 6, N° 103', '987654326', NULL, 'empresa3@example.com', 'Ninguna'), -- Empresa
(1, 1, '56789012', 1, 2, 'Calle 7, N° 104', '987654327', '123456782', 'cliente4@example.com', 'Observación 4'), -- Persona Natural
(1, 2, '67890123', 2, 3, 'Calle 8, N° 105', '987654328', NULL, 'cliente5@example.com', NULL), -- Persona Natural
(2, 2, '10901234', 3, 1, 'Calle 9, N° 106', '987654329', '123456783', 'empresa4@example.com', 'Ninguna'), -- Empresa
(1, 1, '89012345', 1, 2, 'Calle 10, N° 107', '987654330', NULL, 'cliente6@example.com', 'Observación 5'); -- Persona Natural

-- Insertar datos en la tabla natural_persons
INSERT INTO natural_persons (id_person, names, last_names, date_of_birth) VALUES
(21, 'Juan', 'Pérez', '1990-01-01'),
(23, 'María', 'Gómez', '1985-05-15'),
(25, 'Carlos', 'Sánchez', '1992-03-20'),
(27, 'Ana', 'Martínez', '1998-07-30'),
(29, 'Luis', 'Ramírez', '1995-12-10'),
(30, 'Sofía', 'López', '1991-11-25');

-- Insertar datos en la tabla natural_clients
INSERT INTO natural_clients (id_person, customer_since) VALUES
(21, '2020-01-15'),
(23, '2021-03-10'),
(25, '2022-02-20'),
(27, '2020-05-05'),
(29, '2021-07-15');

-- Insertar datos en la tabla employees
INSERT INTO employees (id_person, employee_since) VALUES
(21, '2021-06-15'),  -- Persona Natural
(23, '2018-11-30'),  -- Persona Natural
(30, '2023-03-10'); -- Persona Natural

-- Insertar datos en la tabla enterprises_clients
INSERT INTO enterprises_clients (id_person, company_name) VALUES
(22, 'Empresa Uno S.A.'),
(24, 'Empresa Dos S.A.'),
(26, 'Empresa Tres S.A.'),
(29, 'Empresa Cinco S.A.');


SELECT P.*, TP.NAME FROM PERSONS P INNER JOIN TYPE_PERSONS TP ON P.id_type_person = TP.id_type_person;

SELECT P.ID_PERSON, TP.NAME, D.NAME, P.DOCUMENT_NUMBER, P.ADDRESS, P.EMAIL, P.OBSERVATIONS
FROM PERSONS P INNER JOIN TYPE_PERSONS TP ON P.id_type_person = TP.id_type_person
INNER JOIN PERSON_DOCUMENT_TYPE D ON P.document_type_id = D.id_document_type
ORDER BY P.ID_PERSON;

SELECT * FROM persons;
SELECT * FROM natural_persons;
SELECT * FROM natural_clients;
SELECT * FROM employees;
SELECT * FROM enterprises_clients;

