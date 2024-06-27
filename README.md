# Banco Criptomonedas 
Proyecto Base de datos
Hecho por Cisneros Valero José Manuel.

---

## Introducción
- Este proyecto tiene como objetivo desarrollar un **sistema de bases de datos para un banco de criptomonedas.** Este sistema permitirá a los usuarios gestionar sus cuentas y carteras de criptomonedas, realizar transacciones y consultar información relevante de manera **segura** y **eficiente**.

----

## Querys

``` sql
  CREATE DATABASE BancoCriptomonedas;
USE BancoCriptomonedas;

-- Tabla de Clientes
CREATE TABLE Clientes (
    ClienteID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Telefono VARCHAR(15),
    FechaRegistro DATE DEFAULT (CURDATE())
);

-- Tabla de Tipos de Cuentas
CREATE TABLE Tipos_Cuentas (
    TipoCuentaID INT AUTO_INCREMENT PRIMARY KEY,
    Descripcion VARCHAR(50) NOT NULL
);

-- Tabla de Cuentas
CREATE TABLE Cuentas (
    CuentaID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT,
    TipoCuentaID INT,
    NumeroCuenta VARCHAR(20) UNIQUE,
    Saldo DECIMAL(18, 2) DEFAULT 0.00,
    FechaApertura DATE DEFAULT (CURDATE()),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    FOREIGN KEY (TipoCuentaID) REFERENCES Tipos_Cuentas(TipoCuentaID)
);

-- Tabla de Criptomonedas
CREATE TABLE Criptomonedas (
    CriptomonedaID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL UNIQUE,
    Simbolo VARCHAR(10) NOT NULL UNIQUE,
    Descripcion TEXT
);

-- Tabla de Transacciones
CREATE TABLE Transacciones (
    TransaccionID INT AUTO_INCREMENT PRIMARY KEY,
    CuentaID INT,
    TipoTransaccionID INT,
    CriptomonedaID INT,
    Monto DECIMAL(18, 8) NOT NULL,
    FechaTransaccion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CuentaID) REFERENCES Cuentas(CuentaID),
    FOREIGN KEY (TipoTransaccionID) REFERENCES Tipo_Transacciones(TipoTransaccionID),
    FOREIGN KEY (CriptomonedaID) REFERENCES Criptomonedas(CriptomonedaID)
);

-- Tabla de Tipos de Transacciones
CREATE TABLE Tipo_Transacciones (
    TipoTransaccionID INT AUTO_INCREMENT PRIMARY KEY,
    Descripcion VARCHAR(50) NOT NULL
);

-- Tabla de Carteras
CREATE TABLE Carteras (
    CarteraID INT AUTO_INCREMENT PRIMARY KEY,
    ClienteID INT,
    Nombre VARCHAR(100) NOT NULL,
    FechaCreacion DATE DEFAULT (CURDATE()),
    FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);

-- Tabla de Saldo de Carteras
CREATE TABLE Saldo_Carteras (
    SaldoCarteraID INT AUTO_INCREMENT PRIMARY KEY,
    CarteraID INT,
    CriptomonedaID INT,
    Saldo DECIMAL(18, 8) DEFAULT 0.00,
    FOREIGN KEY (CarteraID) REFERENCES Carteras(CarteraID),
    FOREIGN KEY (CriptomonedaID) REFERENCES Criptomonedas(CriptomonedaID)
);

-- Tabla de Historial de Precios
CREATE TABLE Historial_Precios (
    HistorialPrecioID INT AUTO_INCREMENT PRIMARY KEY,
    CriptomonedaID INT,
    Fecha DATE NOT NULL,
    Precio DECIMAL(18, 8) NOT NULL,
    FOREIGN KEY (CriptomonedaID) REFERENCES Criptomonedas(CriptomonedaID)
);

```

---


## Modelo EER

![Base de datos](https://github.com/Lstrappare/Base-de-datos/assets/119477560/5ca65206-ea9b-4fdb-9d15-5116822e44fb)


## Procedimientos almacenados (15)

``` sql
  DELIMITER //

-- Procedimiento para agregar un cliente
CREATE PROCEDURE AgregarCliente(
    IN p_Nombre VARCHAR(100),
    IN p_Apellido VARCHAR(100),
    IN p_Email VARCHAR(100),
    IN p_Telefono VARCHAR(15)
)
BEGIN
    INSERT INTO Clientes (Nombre, Apellido, Email, Telefono, FechaRegistro)
    VALUES (p_Nombre, p_Apellido, p_Email, p_Telefono, CURDATE());
END //

-- Procedimiento para modificar un cliente
CREATE PROCEDURE ModificarCliente(
    IN p_ClienteID INT,
    IN p_Nombre VARCHAR(100),
    IN p_Apellido VARCHAR(100),
    IN p_Email VARCHAR(100),
    IN p_Telefono VARCHAR(15)
)
BEGIN
    UPDATE Clientes
    SET Nombre = p_Nombre, Apellido = p_Apellido, Email = p_Email, Telefono = p_Telefono
    WHERE ClienteID = p_ClienteID;
END //

-- Procedimiento para eliminar un cliente
CREATE PROCEDURE EliminarCliente(
    IN p_ClienteID INT
)
BEGIN
    DELETE FROM Clientes WHERE ClienteID = p_ClienteID;
END //

-- Procedimiento para agregar una cuenta
CREATE PROCEDURE AgregarCuenta(
    IN p_ClienteID INT,
    IN p_TipoCuentaID INT,
    IN p_NumeroCuenta VARCHAR(20)
)
BEGIN
    INSERT INTO Cuentas (ClienteID, TipoCuentaID, NumeroCuenta, Saldo, FechaApertura)
    VALUES (p_ClienteID, p_TipoCuentaID, p_NumeroCuenta, 0.00, CURDATE());
END //

-- Procedimiento para modificar una cuenta
CREATE PROCEDURE ModificarCuenta(
    IN p_CuentaID INT,
    IN p_NumeroCuenta VARCHAR(20),
    IN p_Saldo DECIMAL(18, 2)
)
BEGIN
    UPDATE Cuentas
    SET NumeroCuenta = p_NumeroCuenta, Saldo = p_Saldo
    WHERE CuentaID = p_CuentaID;
END //

-- Procedimiento para eliminar una cuenta
CREATE PROCEDURE EliminarCuenta(
    IN p_CuentaID INT
)
BEGIN
    DELETE FROM Cuentas WHERE CuentaID = p_CuentaID;
END //

-- Procedimiento para agregar una criptomoneda
CREATE PROCEDURE AgregarCriptomoneda(
    IN p_Nombre VARCHAR(50),
    IN p_Simbolo VARCHAR(10),
    IN p_Descripcion TEXT
)
BEGIN
    INSERT INTO Criptomonedas (Nombre, Simbolo, Descripcion)
    VALUES (p_Nombre, p_Simbolo, p_Descripcion);
END //

-- Procedimiento para modificar una criptomoneda
CREATE PROCEDURE ModificarCriptomoneda(
    IN p_CriptomonedaID INT,
    IN p_Nombre VARCHAR(50),
    IN p_Simbolo VARCHAR(10),
    IN p_Descripcion TEXT
)
BEGIN
    UPDATE Criptomonedas
    SET Nombre = p_Nombre, Simbolo = p_Simbolo, Descripcion = p_Descripcion
    WHERE CriptomonedaID = p_CriptomonedaID;
END //

-- Procedimiento para eliminar una criptomoneda
CREATE PROCEDURE EliminarCriptomoneda(
    IN p_CriptomonedaID INT
)
BEGIN
    DELETE FROM Criptomonedas WHERE CriptomonedaID = p_CriptomonedaID;
END //

-- Procedimiento para agregar una transacción
CREATE PROCEDURE AgregarTransaccion(
    IN p_CuentaID INT,
    IN p_TipoTransaccionID INT,
    IN p_CriptomonedaID INT,
    IN p_Monto DECIMAL(18, 8)
)
BEGIN
    INSERT INTO Transacciones (CuentaID, TipoTransaccionID, CriptomonedaID, Monto, FechaTransaccion)
    VALUES (p_CuentaID, p_TipoTransaccionID, p_CriptomonedaID, p_Monto, NOW());
END //

-- Procedimiento para agregar una cartera
CREATE PROCEDURE AgregarCartera(
    IN p_ClienteID INT,
    IN p_Nombre VARCHAR(100)
)
BEGIN
    INSERT INTO Carteras (ClienteID, Nombre, FechaCreacion)
    VALUES (p_ClienteID, p_Nombre, CURDATE());
END //

-- Procedimiento para modificar una cartera
CREATE PROCEDURE ModificarCartera(
    IN p_CarteraID INT,
    IN p_Nombre VARCHAR(100)
)
BEGIN
    UPDATE Carteras
    SET Nombre = p_Nombre
    WHERE CarteraID = p_CarteraID;
END //

-- Procedimiento para eliminar una cartera
CREATE PROCEDURE EliminarCartera(
    IN p_CarteraID INT
)
BEGIN
    DELETE FROM Carteras WHERE CarteraID = p_CarteraID;
END //

-- Procedimiento para agregar saldo a una cartera
CREATE PROCEDURE AgregarSaldoCartera(
    IN p_CarteraID INT,
    IN p_CriptomonedaID INT,
    IN p_Saldo DECIMAL(18, 8)
)
BEGIN
    INSERT INTO Saldo_Carteras (CarteraID, CriptomonedaID, Saldo)
    VALUES (p_CarteraID, p_CriptomonedaID, p_Saldo)
    ON DUPLICATE KEY UPDATE Saldo = Saldo + p_Saldo;
END //

-- Procedimiento para modificar el saldo de una cartera
CREATE PROCEDURE ModificarSaldoCartera(
    IN p_SaldoCarteraID INT,
    IN p_Saldo DECIMAL(18, 8)
)
BEGIN
    UPDATE Saldo_Carteras
    SET Saldo = p_Saldo
    WHERE SaldoCarteraID = p_SaldoCarteraID;
END //

-- Procedimiento para eliminar el saldo de una cartera
CREATE PROCEDURE EliminarSaldoCartera(
    IN p_SaldoCarteraID INT
)
BEGIN
    DELETE FROM Saldo_Carteras WHERE SaldoCarteraID = p_SaldoCarteraID;
END //

-- Procedimiento para agregar el precio de una criptomoneda al historial
CREATE PROCEDURE AgregarHistorialPrecio(
    IN p_CriptomonedaID INT,
    IN p_Fecha DATE,
    IN p_Precio DECIMAL(18, 8)
)
BEGIN
    INSERT INTO Historial_Precios (CriptomonedaID, Fecha, Precio)
    VALUES (p_CriptomonedaID, p_Fecha, p_Precio);
END //

DELIMITER ;

```

## Consultas Sencillas (15)

``` sql
-- Consulta de todos los clientes
SELECT * FROM Clientes;

-- Consulta de todas las cuentas
SELECT * FROM Cuentas;

-- Consulta de todas las criptomonedas
SELECT * FROM Criptomonedas;

-- Consulta de todas las transacciones
SELECT * FROM Transacciones;

-- Consulta de todos los tipos de cuentas
SELECT * FROM Tipos_Cuentas;

-- Consulta de todos los tipos de transacciones
SELECT * FROM Tipo_Transacciones;

-- Consulta de todas las carteras
SELECT * FROM Carteras;

-- Consulta de todos los saldos de carteras
SELECT * FROM Saldo_Carteras;

-- Consulta de todo el historial de precios
SELECT * FROM Historial_Precios;

-- Consulta de clientes registrados en el último mes
SELECT * FROM Clientes WHERE FechaRegistro > CURDATE() - INTERVAL 1 MONTH;

-- Consulta de cuentas con saldo mayor a 1000
SELECT * FROM Cuentas WHERE Saldo > 1000;

-- Consulta de transacciones realizadas en el último día
SELECT * FROM Transacciones WHERE FechaTransaccion > NOW() - INTERVAL 1 DAY;

-- Consulta de carteras creadas en el último mes
SELECT * FROM Carteras WHERE FechaCreacion > CURDATE() - INTERVAL 1 MONTH;

-- Consulta de precios históricos de una criptomoneda específica
SELECT * FROM Historial_Precios WHERE CriptomonedaID = 1;

-- Consulta de saldo de una cartera específica
SELECT * FROM Saldo_Carteras WHERE CarteraID = 1;

```

## Consultas Multitabla (15)
``` sql
-- Consulta de clientes y sus cuentas
SELECT Clientes.Nombre, Clientes.Apellido, Cuentas.NumeroCuenta, Cuentas.Saldo
FROM Clientes
JOIN Cuentas ON Clientes.ClienteID = Cuentas.ClienteID;

-- Consulta de cuentas y sus tipos
SELECT Cuentas.NumeroCuenta, Cuentas.Saldo, Tipos_Cuentas.Descripcion
FROM Cuentas
JOIN Tipos_Cuentas ON Cuentas.TipoCuentaID = Tipos_Cuentas.TipoCuentaID;

-- Consulta de transacciones y sus tipos
SELECT Transacciones.Monto, Tipo_Transacciones.Descripcion, Transacciones.FechaTransaccion
FROM Transacciones
JOIN Tipo_Transacciones ON Transacciones.TipoTransaccionID = Tipo_Transacciones.TipoTransaccionID;

-- Consulta de transacciones y criptomonedas
SELECT Transacciones.Monto, Criptomonedas.Nombre, Criptomonedas.Simbolo, Transacciones.FechaTransaccion
FROM Transacciones
JOIN Criptomonedas ON Transacciones.CriptomonedaID = Criptomonedas.CriptomonedaID;

-- Consulta de carteras y sus clientes
SELECT Carteras.Nombre, Clientes.Nombre AS ClienteNombre, Clientes.Apellido
FROM Carteras
JOIN Clientes ON Carteras.ClienteID = Clientes.ClienteID;

-- Consulta de carteras y sus saldos
SELECT Carteras.Nombre, Criptomonedas.Nombre AS Criptomoneda, Saldo_Carteras.Saldo
FROM Carteras
JOIN Saldo_Carteras ON Carteras.CarteraID = Saldo_Carteras.CarteraID
JOIN Criptomonedas ON Saldo_Carteras.CriptomonedaID = Criptomonedas.CriptomonedaID;

-- Consulta de clientes y sus transacciones
SELECT Clientes.Nombre, Clientes.Apellido, Transacciones.Monto, Transacciones.FechaTransaccion
FROM Clientes
JOIN Cuentas ON Clientes.ClienteID = Cuentas.ClienteID
JOIN Transacciones ON Cuentas.CuentaID = Transacciones.CuentaID;

-- Consulta de transacciones y tipos de transacciones
SELECT Transacciones.Monto, Tipo_Transacciones.Descripcion
FROM Transacciones
JOIN Tipo_Transacciones ON Transacciones.TipoTransaccionID = Tipo_Transacciones.TipoTransaccionID;

-- Consulta de cuentas y clientes
SELECT Cuentas.NumeroCuenta, Cuentas.Saldo, Clientes.Nombre, Clientes.Apellido
FROM Cuentas
JOIN Clientes ON Cuentas.ClienteID = Clientes.ClienteID;

-- Consulta de saldos de carteras y criptomonedas
SELECT Carteras.Nombre, Criptomonedas.Nombre AS Criptomoneda, Saldo_Carteras.Saldo
FROM Carteras
JOIN Saldo_Carteras ON Carteras.CarteraID = Saldo_Carteras.CarteraID
JOIN Criptomonedas ON Saldo_Carteras.CriptomonedaID = Criptomonedas.CriptomonedaID;

-- Consulta de precios históricos y criptomonedas
SELECT Criptomonedas.Nombre, Historial_Precios.Fecha, Historial_Precios.Precio
FROM Criptomonedas
JOIN Historial_Precios ON Criptomonedas.CriptomonedaID = Historial_Precios.CriptomonedaID;

-- Consulta de clientes y tipos de cuentas
SELECT Clientes.Nombre, Clientes.Apellido, Tipos_Cuentas.Descripcion
FROM Clientes
JOIN Cuentas ON Clientes.ClienteID = Cuentas.ClienteID
JOIN Tipos_Cuentas ON Cuentas.TipoCuentaID = Tipos_Cuentas.TipoCuentaID;

-- Consulta de clientes y criptomonedas en sus carteras
SELECT Clientes.Nombre, Clientes.Apellido, Criptomonedas.Nombre AS Criptomoneda, Saldo_Carteras.Saldo
FROM Clientes
JOIN Carteras ON Clientes.ClienteID = Carteras.ClienteID
JOIN Saldo_Carteras ON Carteras.CarteraID = Saldo_Carteras.CarteraID
JOIN Criptomonedas ON Saldo_Carteras.CriptomonedaID = Criptomonedas.CriptomonedaID;

-- Consulta de clientes y sus transacciones con tipos de transacciones
SELECT Clientes.Nombre, Clientes.Apellido, Transacciones.Monto, Tipo_Transacciones.Descripcion, Transacciones.FechaTransaccion
FROM Clientes
JOIN Cuentas ON Clientes.ClienteID = Cuentas.ClienteID
JOIN Transacciones ON Cuentas.CuentaID = Transacciones.CuentaID
JOIN Tipo_Transacciones ON Transacciones.TipoTransaccionID = Tipo_Transacciones.TipoTransaccionID;

-- Consulta de clientes y sus transacciones con criptomonedas
SELECT Clientes.Nombre, Clientes.Apellido, Transacciones.Monto, Criptomonedas.Nombre AS Criptomoneda, Transacciones.FechaTransaccion
FROM Clientes
JOIN Cuentas ON Clientes.ClienteID = Cuentas.ClienteID
JOIN Transacciones ON Cuentas.CuentaID = Transacciones.CuentaID
JOIN Criptomonedas ON Transacciones.CriptomonedaID = Criptomonedas.CriptomonedaID;
```

## Capturas del Proyecto
