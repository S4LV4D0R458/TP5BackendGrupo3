-- -----------------------------------------------------
-- Script para recrear la base de datos
-- -----------------------------------------------------

DROP DATABASE IF EXISTS distribuidora;
CREATE DATABASE distribuidora CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE distribuidora;

-- -----------------------------------------------------
-- Tablas
-- -----------------------------------------------------

CREATE TABLE proveedores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  contacto VARCHAR(100),
  telefono VARCHAR(30),
  email VARCHAR(100),
  direccion VARCHAR(150),
  ciudad VARCHAR(80),
  activo TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB;

CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(80) NOT NULL UNIQUE,
  descripcion VARCHAR(200),
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB;

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  descripcion VARCHAR(255),
  precio DECIMAL(10,2) NOT NULL CHECK (precio >= 0),
  stock INT NOT NULL DEFAULT 0 CHECK (stock >= 0),
  proveedor_id INT NOT NULL,
  -- Permite conservar productos sin categoría cuando se elimina una categoría.
  categoria_id INT NULL,
  activo TINYINT(1) NOT NULL DEFAULT 1,
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  FOREIGN KEY (proveedor_id) REFERENCES proveedores(id),
  -- Al borrar la categoría, sus productos quedan con categoria_id en NULL.
  FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100),
  empresa VARCHAR(100),
  telefono VARCHAR(30),
  email VARCHAR(100) UNIQUE,
  direccion VARCHAR(150),
  ciudad VARCHAR(80),
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB;

CREATE TABLE empleados (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  cargo VARCHAR(80),
  email VARCHAR(100) UNIQUE,
  telefono VARCHAR(30),
  fecha_ingreso DATE,
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB;

CREATE TABLE companias_envio (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(30),
  email VARCHAR(100),
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB;

CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  empleado_id INT NOT NULL,
  compania_envio_id INT NOT NULL,
  fecha_pedido DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_envio DATETIME NULL,
  estado ENUM('pendiente','enviado','entregado','cancelado') NOT NULL DEFAULT 'pendiente',
  costo_envio DECIMAL(10,2) NOT NULL DEFAULT 0,
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  FOREIGN KEY (cliente_id) REFERENCES clientes(id),
  FOREIGN KEY (empleado_id) REFERENCES empleados(id),
  FOREIGN KEY (compania_envio_id) REFERENCES companias_envio(id)
) ENGINE=InnoDB;

-- Tabla intermedia pedido <-> producto (detalle de la factura)
CREATE TABLE detalle_pedido (
  pedido_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT NOT NULL CHECK (cantidad > 0),
  precio_unitario DECIMAL(10,2) NOT NULL CHECK (precio_unitario >= 0),
  descuento DECIMAL(4,2) NOT NULL DEFAULT 0,
  created_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (pedido_id, producto_id),
  FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE,
  FOREIGN KEY (producto_id) REFERENCES productos(id)
) ENGINE=InnoDB;

-- -----------------------------------------------------
-- Datos de prueba
-- -----------------------------------------------------

INSERT INTO proveedores (nombre, contacto, telefono, email, direccion, ciudad) VALUES
('Lácteos del Sur', 'Marta Gómez', '2920-111111', 'ventas@lacteossur.com', 'Ruta 3 km 10', 'Viedma'),
('Bebidas Patagonia', 'Jorge Pérez', '2920-222222', 'contacto@bebidaspatagonia.com', 'Av. Costanera 450', 'Carmen de Patagones'),
('Molinos Andinos', 'Laura Díaz', '2920-333333', 'info@molinosandinos.com', 'Calle 25 de Mayo 120', 'Bahía Blanca');

INSERT INTO categorias (nombre, descripcion) VALUES
('Lácteos', 'Leche, quesos, yogures'),
('Bebidas', 'Gaseosas, aguas y jugos'),
('Almacén', 'Harinas, fideos, conservas');

INSERT INTO productos (nombre, descripcion, precio, stock, proveedor_id, categoria_id) VALUES
('Leche entera 1L', 'Sachet de leche entera', 1200.00, 200, 1, 1),
('Queso cremoso x kg', 'Queso cremoso en horma', 8500.00, 50, 1, 1),
('Gaseosa cola 2.25L', 'Botella descartable', 2800.00, 120, 2, 2),
('Agua mineral 500ml', 'Sin gas', 900.00, 300, 2, 2),
('Harina 000 x kg', 'Harina de trigo', 1100.00, 400, 3, 3),
('Fideos tallarín 500g', 'Pasta seca', 1600.00, 250, 3, 3);

INSERT INTO clientes (nombre, apellido, empresa, telefono, email, direccion, ciudad) VALUES
('Carlos', 'Rodríguez', 'Kiosco El Sol', '2920-444444', 'carlos@elsol.com', 'San Martín 100', 'Viedma'),
('Ana', 'López', 'Supermercado La Esquina', '2920-555555', 'ana@laesquina.com', 'Belgrano 200', 'Viedma'),
('Pedro', 'Martínez', 'Almacén Don Pedro', '2920-666666', 'pedro@donpedro.com', 'Mitre 300', 'San Antonio Oeste');

INSERT INTO empleados (nombre, apellido, cargo, email, telefono, fecha_ingreso) VALUES
('Lucía', 'Fernández', 'Vendedora', 'lucia@distribuidora.com', '2920-777777', '2023-03-01'),
('Martín', 'Suárez', 'Vendedor', 'martin@distribuidora.com', '2920-888888', '2024-06-15');

INSERT INTO companias_envio (nombre, telefono, email) VALUES
('Transporte Rápido', '2920-999999', 'info@transporterapido.com'),
('Envíos del Valle', '2920-121212', 'contacto@enviosvalle.com');

INSERT INTO pedidos (cliente_id, empleado_id, compania_envio_id, fecha_pedido, fecha_envio, estado, costo_envio) VALUES
(1, 1, 1, '2026-09-01 10:00:00', '2026-09-02 09:00:00', 'entregado', 1500.00),
(2, 2, 2, '2026-09-05 11:30:00', '2026-09-06 08:00:00', 'enviado', 2000.00),
(3, 1, 1, '2026-09-10 15:45:00', NULL, 'pendiente', 1800.00);

INSERT INTO detalle_pedido (pedido_id, producto_id, cantidad, precio_unitario, descuento) VALUES
(1, 1, 20, 1200.00, 0),
(1, 3, 10, 2800.00, 0.05),
(2, 2, 5, 8500.00, 0),
(2, 4, 50, 900.00, 0.10),
(3, 5, 30, 1100.00, 0),
(3, 6, 20, 1600.00, 0);
