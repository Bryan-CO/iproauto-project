-- Active: 1725690348102@@localhost@5432@iproauto
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
