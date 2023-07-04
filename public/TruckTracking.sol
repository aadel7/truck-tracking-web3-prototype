// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.18;

contract TruckTracking {
    // Contador de envíos
    uint256 public shipmentCounter = 0;
    
    // Estructura del material
    struct Material {
        uint256 materialId;
        string origen;
        string fechaCosecha;
        string fechaEnvasado;
        string fechaCaducidad;
    }

    // Estructura de un envío
    struct Shipment {
        uint256 shipmentId;
        uint256 timestamp;
        string origin;
        string destination;
        string carrier;
        string status;
        Material material; // Subestructura Material
    }
    
    // Mapeo de envíos por ID
    mapping(uint256 => Shipment) public shipments;
    
    // Evento que se emite cuando se crea un nuevo envío
    event ShipmentCreated(
        uint256 indexed shipmentId,
        uint256 timestamp,
        string origin,
        string destination,
        string carrier,
        string status,
        uint256 materialId,
        string origen,
        string fechaCosecha,
        string fechaEnvasado,
        string fechaCaducidad
    );

    // Evento que se emite cuando se actualiza un envío
    event ShipmentUpdated(
        uint256 indexed shipmentId,
        uint256 timestamp,
        string origin,
        string destination,
        string carrier,
        string status,
        uint256 materialId,
        string origen,
        string fechaCosecha,
        string fechaEnvasado,
        string fechaCaducidad
    );
    
    // Función para crear un nuevo envío
    function createShipment(
        string memory _origin,
        string memory _destination,
        string memory _carrier,
        string memory _status,
        uint256 _materialId,
        string memory _materialOrigen,
        string memory _materialFechaCosecha,
        string memory _materialFechaEnvasado,
        string memory _materialFechaCaducidad
    ) public {
        // Incrementar el contador de envíos
        shipmentCounter++;
        
        // Crear un nuevo envío y guardarlo en el mapeo
        shipments[shipmentCounter] = Shipment(
            shipmentCounter,
            block.timestamp,
            _origin,
            _destination,
            _carrier,
            _status,
            Material(
                _materialId,
                _materialOrigen,
                _materialFechaCosecha,
                _materialFechaEnvasado,
                _materialFechaCaducidad
            )
        );
        
        // Emitir el evento ShipmentCreated
        emit ShipmentCreated(
            shipmentCounter,
            block.timestamp,
            _origin,
            _destination,
            _carrier,
            _status,
            _materialId,
            _materialOrigen,
            _materialFechaCosecha,
            _materialFechaEnvasado,
            _materialFechaCaducidad
        );
    }

    // Función para obtener información de un envío específico por ID
    function getShipment(uint256 _shipmentId) public view returns (
        uint256 shipmentId,
        uint256 timestamp,
        string memory origin,
        string memory destination,
        string memory carrier,
        string memory status,
        uint256 materialId,
        string memory materialOrigen,
        string memory materialFechaCosecha,
        string memory materialFechaEnvasado,
        string memory materialFechaCaducidad
    ) {
        // Obtener el envío del mapeo
        Shipment memory shipment = shipments[_shipmentId];
        
        // Devolver la información del envío
        return (
            shipment.shipmentId,
            shipment.timestamp,
            shipment.origin,
            shipment.destination,
            shipment.carrier,
            shipment.status,
            shipment.material.materialId,
            shipment.material.origen,
            shipment.material.fechaCosecha,
            shipment.material.fechaEnvasado,
            shipment.material.fechaCaducidad
        );
    }

    function updateShipment(
        uint256 _shipmentId, 
        string memory _newOrigin, 
        string memory _newDestination, 
        string memory _newCarrier, 
        string memory _newStatus,
        uint256 _newMaterialId,  // Updated parameter type
        string memory _newMaterialOrigen,
        string memory _newMaterialFechaCosecha,
        string memory _newMaterialFechaEnvasado,
        string memory _newMaterialFechaCaducidad

    ) public {
        Shipment storage shipment = shipments[_shipmentId];
        shipment.origin = _newOrigin;
        shipment.destination = _newDestination;
        shipment.carrier = _newCarrier;
        shipment.status = _newStatus;
        shipment.material.materialId = _newMaterialId; 
        shipment.material.origen = _newMaterialOrigen;
        shipment.material.fechaCosecha = _newMaterialFechaCosecha;
        shipment.material.fechaEnvasado = _newMaterialFechaEnvasado;
        shipment.material.fechaCaducidad = _newMaterialFechaCaducidad;

        emit ShipmentUpdated(
            shipment.shipmentId,
            block.timestamp,
            _newOrigin,
            _newDestination,
            _newCarrier,
            _newStatus,
            _newMaterialId,
            _newMaterialOrigen,
            _newMaterialFechaCosecha,
            _newMaterialFechaEnvasado,
            _newMaterialFechaCaducidad
        );

    }


    function getShipmentCounter() public view returns (uint256) {
        return shipmentCounter;
    }

      // Nueva función para obtener todos los envíos existentes
    function getAllShipments() public view returns (Shipment[] memory) {
        Shipment[] memory allShipments = new Shipment[](shipmentCounter);
        
        for (uint256 i = 1; i <= shipmentCounter; i++) {
            allShipments[i - 1] = shipments[i];
        }
        
        return allShipments;
    }

}
