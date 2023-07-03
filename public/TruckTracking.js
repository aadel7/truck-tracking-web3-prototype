// const Web3 = require('web3');
const web3 = new Web3('ws://127.0.0.1:8545');

// Se obtiene al realizar el deployment del Smart Contract en Remix IDE.
const contractAddress = '0x11ea0a88a38a2C7901d1e347Ba39Fa5B71054324';

// Se obtiene al compilar el Smart Contract en Remix IDE
const contractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "shipmentId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "origin",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "destination",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "carrier",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "status",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "materialId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "origen",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "fechaCosecha",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "fechaEnvasado",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "fechaCaducidad",
                "type": "string"
            }
        ],
        "name": "ShipmentCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "shipmentId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "origin",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "destination",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "carrier",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "status",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "materialId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "origen",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "fechaCosecha",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "fechaEnvasado",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "fechaCaducidad",
                "type": "string"
            }
        ],
        "name": "ShipmentUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_origin",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_destination",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_carrier",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_status",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_materialId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_materialOrigen",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_materialFechaCosecha",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_materialFechaEnvasado",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_materialFechaCaducidad",
                "type": "string"
            }
        ],
        "name": "createShipment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllShipments",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "shipmentId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "origin",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "destination",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "carrier",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "status",
                        "type": "string"
                    },
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "materialId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "origen",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "fechaCosecha",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "fechaEnvasado",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "fechaCaducidad",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct TruckTracking.Material",
                        "name": "material",
                        "type": "tuple"
                    }
                ],
                "internalType": "struct TruckTracking.Shipment[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_shipmentId",
                "type": "uint256"
            }
        ],
        "name": "getShipment",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "shipmentId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "origin",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "destination",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "carrier",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "materialId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "materialOrigen",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "materialFechaCosecha",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "materialFechaEnvasado",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "materialFechaCaducidad",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getShipmentCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "shipmentCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "shipments",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "shipmentId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "origin",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "destination",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "carrier",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "status",
                "type": "string"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "materialId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "origen",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fechaCosecha",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fechaEnvasado",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "fechaCaducidad",
                        "type": "string"
                    }
                ],
                "internalType": "struct TruckTracking.Material",
                "name": "material",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_shipmentId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_newOrigin",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_newDestination",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_newCarrier",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_newStatus",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_newMaterialId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_newMaterialOrigen",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_newMaterialFechaCosecha",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_newMaterialFechaEnvasado",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_newMaterialFechaCaducidad",
                "type": "string"
            }
        ],
        "name": "updateShipment",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


let selectedAccount = "";
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

async function initContract() {
    try {
      // Obtiene las cuentas disponibles en el proveedor
      const accounts = await web3.eth.getAccounts();
  
      // Llena el desplegable con las cuentas
      const accountSelect = document.getElementById("accountSelect");
      accounts.forEach(account => {
        const option = document.createElement("option");
        option.value = account;
        option.innerText = account;
        accountSelect.appendChild(option);
      });

      accountSelect.addEventListener("change", async () => {
        const selectedAccount = accountSelect.value;
        const balance = await web3.eth.getBalance(selectedAccount);
      
        // Muestra la cuenta seleccionada y su saldo en la tarjeta
        document.getElementById("selectedAccount").innerText = selectedAccount;
        document.getElementById("balance").innerText = web3.utils.fromWei(balance, "ether") + " ETH";
      
        console.log(`Cuenta usada: ${selectedAccount}`);

      });

      accountSelect.dispatchEvent(new Event("change"));

    // Agrega un detector de eventos al botón de continuar
    document.getElementById("continueBtn").addEventListener("click", async () => {
        selectedAccount = accountSelect.value;
    
        console.log(`Cuenta usada: ${selectedAccount}`);
    
        // Oculta la página de selección de cuenta y muestra la página de TruckTracking
        document.getElementById("accountSelectionPage").classList.add("hidden");
        document.getElementById("truckTrackingPage").classList.remove("hidden");
        });
    
        registerEventListeners();
  
    } catch (error) {
      console.error("Error al inicializar el contrato:", error);
    }
    
  }

// Function to register the event listeners
async function registerEventListeners() {
    // Event listener for ShipmentCreated event
    const shipmentCreatedEventListener = contractInstance.events.ShipmentCreated({}, (error, event) => {
        if (error) {
            console.error("Error processing ShipmentCreated event:", error);
            saveResultToDOM("Error");
        } else {
            const shipmentId = event.returnValues.shipmentId;
            console.log("Shipment created with ID:", shipmentId);
            
        }
    });

    // Event listener for ShipmentUpdated event
    const shipmentUpdatedEventListener = contractInstance.events.ShipmentUpdated({}, (error, event) => {
        if (error) {
            console.error("Error processing ShipmentUpdated event:", error);
            saveResultToDOM("Error");
        } else {
            const shipmentId = event.returnValues.shipmentId;
            console.log("Shipment updated with ID:", shipmentId);
        }
    });
}

// Function to save the result in the DOM
function saveResultToDOM(result) {
    const resultElement = document.createElement("p");
    resultElement.textContent = result;
    document.getElementById("resultContainer").appendChild(resultElement);
}



async function getShipmentData(shipmentId) {
    try {
        const shipmentData = await contractInstance.methods.getShipment(shipmentId).call();

        document.getElementById("shipmentId").innerText = shipmentData.shipmentId;
        document.getElementById("originInfo").innerText = shipmentData.origin;
        document.getElementById("destinationInfo").innerText = shipmentData.destination;
        document.getElementById("carrierInfo").innerText = shipmentData.carrier;
        document.getElementById("statusInfo").innerText = shipmentData.status;

        const material = {
            materialId: shipmentData[6],
            origen: shipmentData[7],
            fechaCosecha: shipmentData[8],
            fechaEnvasado: shipmentData[9],
            fechaCaducidad: shipmentData[10]
        };

        document.getElementById("materialIdInfo").innerText = material.materialId;
        document.getElementById("materialOriginInfo").innerText = material.origen;
        document.getElementById("materialHarvestDateInfo").innerText = material.fechaCosecha;
        document.getElementById("materialPackagingDateInfo").innerText = material.fechaEnvasado;
        document.getElementById("materialExpirationDateInfo").innerText = material.fechaCaducidad;

        console.log(document.getElementById("materialIdInfo").innerText);

        // Supongamos que el timestamp es 1617687460000 (15 de abril de 2021 10:31:00 UTC)
        // const timestamp = shipmentData.timestamp;
        // const timestampInMilliseconds = timestamp * 1000;
        // const date = new Date(timestampInMilliseconds);
        // const day = ("0" + date.getDate()).slice(-2);
        // const month = ("0" + (date.getMonth() + 1)).slice(-2);
        // const year = date.getFullYear();
        // const hours = ("0" + date.getHours()).slice(-2);
        // const minutes = ("0" + date.getMinutes()).slice(-2);
        // const seconds = ("0" + date.getSeconds()).slice(-2);
        // const dateString = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        // console.log(dateString);

        // document.getElementById("timestamp").innerText = dateString;

        // Muestra la cuenta seleccionada en la card de datos del envío
        document.getElementById("accountInfo").innerText = selectedAccount;
        console.log(`Cuenta usada: ${selectedAccount}`);

    
        // Muestra la card con los datos del envío
        document.getElementById("shipmentDataCard").style.display = "block";
  
        // Actualiza la línea de tiempo según el estado del envío
        const createdTruck = document.querySelector(".truck-icon.created");
        const sentTruck = document.querySelector(".truck-icon.sent");
        const transitTruck = document.querySelector(".truck-icon.transit");
        const completedTruck = document.querySelector(".truck-icon.completed");

        // Elimina la clase 'active' de todos los camiones
        createdTruck.classList.remove("active");
        sentTruck.classList.remove("active");
        transitTruck.classList.remove("active");
        completedTruck.classList.remove("active");

        // Añade la clase 'active' según el estado del envío
        if (shipmentData.status === "Creado") {
        createdTruck.classList.add("active");
        } else if (shipmentData.status === "Enviado") {
        createdTruck.classList.add("active");
        sentTruck.classList.add("active");
        } else if (shipmentData.status === "En Tránsito") {
        createdTruck.classList.add("active");
        sentTruck.classList.add("active");
        transitTruck.classList.add("active");
        } else if (shipmentData.status === "Completado") {
        createdTruck.classList.add("active");
        sentTruck.classList.add("active");
        transitTruck.classList.add("active");
        completedTruck.classList.add("active");
        }

    } catch (error) {
      console.error('Error al obtener los datos del shipment:', error);
    }
  }
  
  async function createShipment(origin, destination, carrier, status, material) {
    try {
        const gasEstimate = await contractInstance.methods
        .createShipment(origin, destination, carrier, status, material.materialId, material.materialOrigen, material.materialFechaCosecha, material.materialFechaEnvasado, material.materialFechaCaducidad)
        .estimateGas({ from: selectedAccount });

        const result = await contractInstance.methods
        .createShipment(origin, destination, carrier, status, material.materialId, material.materialOrigen, material.materialFechaCosecha, material.materialFechaEnvasado, material.materialFechaCaducidad)
        .send({
          from: selectedAccount,
          gas: gasEstimate,
        });

        console.log("Transacción exitosa:", result);

        const shipmentCounter = await contractInstance.methods.getShipmentCounter().call();
        return parseInt(shipmentCounter);
    } catch (error) {
        console.error("Error al crear el envío:", error);
    }
}

async function updateShipment(shipmentId, origin, destination, carrier, status, material) {
    try {
        const gasEstimate = await contractInstance.methods
        .updateShipment(shipmentId, origin, destination, carrier, status, material.materialId, material.materialOrigen, material.materialFechaCosecha, material.materialFechaEnvasado, material.materialFechaCaducidad)
        .estimateGas({ from: selectedAccount });
      
      const result = await contractInstance.methods
        .updateShipment(shipmentId, origin, destination, carrier, status, material.materialId, material.materialOrigen, material.materialFechaCosecha, material.materialFechaEnvasado, material.materialFechaCaducidad)
        .send({
          from: selectedAccount,
          gas: gasEstimate,
        });

        console.log("Transacción exitosa:", result);
        return shipmentId;
    } catch (error) {
        console.error("Error al actualizar el envío:", error);
    }
}

// Función para obtener todos los envíos existentes
async function getAllShipments() {
    const shipmentCards = document.querySelectorAll(".card");
    shipmentCards.forEach((card, index) => {
      if (index >= shipmentData.length) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    });
    
    const shipmentCount = await contractInstance.methods.getShipmentCounter().call(); // Obtiene el contador de envíos
    const allShipments = [];
  
    for (let i = 1; i <= shipmentCount; i++) {
      const shipment = await contractInstance.methods.getShipment(i).call(); // Obtiene los detalles de cada envío
      allShipments.push(shipment);
    }
  
    return allShipments;
  }
  
  async function updateDashboard() {
    // Ocultar el resto de las tarjetas
  
    const shipmentData = await getAllShipments(); // Obtener todos los envíos
  
    const allShipmentsCard = document.getElementById("allShipmentsCard");
    const shipmentList = document.getElementById("shipmentList");
    shipmentList.innerHTML = ""; // Limpiar la lista de envíos

    console.log(shipmentData);
  
    shipmentData.forEach(shipment => {
        const listItem = document.createElement("li");
        listItem.classList.add("shipment-item");
      
        const fieldsContainer = document.createElement("div");
        fieldsContainer.classList.add("fields-container");
      
        const idField = document.createElement("span");
        idField.classList.add("shipment-field");
        idField.textContent = `ID: ${shipment.shipmentId}`;
      
        const originField = document.createElement("span");
        originField.classList.add("shipment-field");
        originField.textContent = `Origin: ${shipment.origin}`;
      
        const destinationField = document.createElement("span");
        destinationField.classList.add("shipment-field");
        destinationField.textContent = `Destination: ${shipment.destination}`;
      
        const carrierField = document.createElement("span");
        carrierField.classList.add("shipment-field");
        carrierField.textContent = `Carrier: ${shipment.carrier}`;
      
        const statusField = document.createElement("span");
        statusField.classList.add("shipment-field");
        statusField.textContent = `Status: ${shipment.status}`;
      
        // Agregar los nuevos campos de material
        const materialIdField = document.createElement("span");
        materialIdField.classList.add("shipment-field");
        materialIdField.textContent = `Material ID: ${shipment.materialId}`;
      
        const materialOrigenField = document.createElement("span");
        materialOrigenField.classList.add("shipment-field");
        materialOrigenField.textContent = `Material Origen: ${shipment.materialOrigen}`;
      
        const materialFechaCosechaField = document.createElement("span");
        materialFechaCosechaField.classList.add("shipment-field");
        materialFechaCosechaField.textContent = `Material Fecha Cosecha: ${shipment.materialFechaCosecha}`;
      
        const materialFechaEnvasadoField = document.createElement("span");
        materialFechaEnvasadoField.classList.add("shipment-field");
        materialFechaEnvasadoField.textContent = `Material Fecha Envasado: ${shipment.materialFechaEnvasado}`;
      
        const materialFechaCaducidadField = document.createElement("span");
        materialFechaCaducidadField.classList.add("shipment-field");
        materialFechaCaducidadField.textContent = `Material Fecha Caducidad: ${shipment.materialFechaCaducidad}`;
      
        fieldsContainer.appendChild(idField);
        fieldsContainer.appendChild(originField);
        fieldsContainer.appendChild(destinationField);
        fieldsContainer.appendChild(carrierField);
        fieldsContainer.appendChild(statusField);
      
        // Agregar los nuevos campos de material al contenedor de campos
        fieldsContainer.appendChild(materialIdField);
        fieldsContainer.appendChild(materialOrigenField);
        fieldsContainer.appendChild(materialFechaCosechaField);
        fieldsContainer.appendChild(materialFechaEnvasadoField);
        fieldsContainer.appendChild(materialFechaCaducidadField);
      
        listItem.appendChild(fieldsContainer);
        shipmentList.appendChild(listItem);
        console.log(shipmentList);
      });
      
  
    // Mostrar la tarjeta de todos los envíos
    allShipmentsCard.style.display = "block";
  }

// Funciones para interactuar con la interfaz de usuario
function setupUI() {

    document.getElementById("createShipmentButton").addEventListener("click", async () => {
        console.log("Create Data Button clicked.");
        const origin = document.getElementById("origin").value;
        const destination = document.getElementById("destination").value;
        const carrier = document.getElementById("carrier").value;
        const status = document.getElementById("status").value;
      
        const material = {
          materialId: document.getElementById("materialId").value,
          materialOrigen: document.getElementById("materialOrigin").value,
          materialFechaCosecha: document.getElementById("materialHarvestDate").value,
          materialFechaEnvasado: document.getElementById("materialPackagingDate").value,
          materialFechaCaducidad: document.getElementById("materialExpirationDate").value,
        };

        console.log(material.materialFechaCosecha);
      
        const shipmentId = await createShipment(origin, destination, carrier, status, material);
        await getShipmentData(shipmentId);
      });
    
      document.getElementById("updateShipmentButton").addEventListener("click", async () => {
        console.log("Update Data Button clicked.");
        const shipmentId = document.getElementById("updateShipmentId").value;
        const origin = document.getElementById("updateOrigin").value;
        const destination = document.getElementById("updateDestination").value;
        const carrier = document.getElementById("updateCarrier").value;
        const status = document.getElementById("updateStatus").value;
        const material = {
          materialId: document.getElementById("updateMaterialId").value,
          materialOrigen: document.getElementById("updateMaterialOrigin").value,
          materialFechaCosecha: document.getElementById("updateMaterialHarvestDate").value,
          materialFechaEnvasado: document.getElementById("updateMaterialPackagingDate").value,
          materialFechaCaducidad: document.getElementById("updateMaterialExpirationDate").value,
        };
      
        await updateShipment(shipmentId, origin, destination, carrier, status, material);
        await getShipmentData(shipmentId);
      });
  
      document.getElementById("getShipmentButton").addEventListener("click", async () => {
        console.log("Get Data Button clicked.");
        const shipmentId = document.getElementById("getShipmentId").value;
        await getShipmentData(shipmentId); // Solo llamamos a la función 'getShipmentData' y no necesitamos actualizar el cuadro de texto aquí
      });

      document.getElementById("allShipments").addEventListener("click", async () => {
        console.log("Update Dashboard Button clicked.");
        updateDashboard();
      });

      const menuLinks = document.querySelectorAll('.menu a');
      const cards = document.querySelectorAll('.card');
      const updateCurrentShipmentButton = document.getElementById("updateCurrentShipmentButton");
    
      function showCard(cardId) {
        cards.forEach(card => {
          if (card.id === cardId) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      }
    
      menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          showCard(this.getAttribute('href').substring(1));
        });
      });

    const updateShipmentButton = document.getElementById("updateShipmentButton");
    const updateShipmentId = document.getElementById("updateShipmentId");
    const updateOrigin = document.getElementById("updateOrigin");
    const updateDestination = document.getElementById("updateDestination");
    const updateCarrier = document.getElementById("updateCarrier");
    const updateMaterialId = document.getElementById("updateMaterialId");
    const updateMaterialOrigin = document.getElementById("updateMaterialOrigin");
    const updateMaterialHarvestDate = document.getElementById("updateMaterialHarvestDate");
    const updateMaterialPackagingDate = document.getElementById("updateMaterialPackagingDate");
    const updateMaterialExpirationDate = document.getElementById("updateMaterialExpirationDate");
    const shipmentIdInfo = document.getElementById("shipmentId");
    const originInfo = document.getElementById("originInfo");
    const destinationInfo = document.getElementById("destinationInfo");
    const carrierInfo = document.getElementById("carrierInfo");
    const materialIdInfo = document.getElementById("materialIdInfo");
    const materialOriginInfo = document.getElementById("materialOriginInfo");
    const materialHarvestDateInfo = document.getElementById("materialHarvestDateInfo");
    const materialPackagingDateInfo = document.getElementById("materialPackagingDateInfo");
    const materialExpirationDateInfo = document.getElementById("materialExpirationDateInfo");

      updateCurrentShipmentButton.addEventListener("click", function() {
        showCard("updateCard");
        updateShipmentId.value = shipmentIdInfo.textContent;
        updateOrigin.value = originInfo.textContent;
        updateDestination.value = destinationInfo.textContent;
        updateCarrier.value = carrierInfo.textContent;
        updateMaterialId.value = materialIdInfo.textContent;
        updateMaterialOrigin.value = materialOriginInfo.textContent;
        updateMaterialHarvestDate.value = materialHarvestDateInfo.textContent;
        updateMaterialPackagingDate.value = materialPackagingDateInfo.textContent;
        updateMaterialExpirationDate.value = materialExpirationDateInfo.textContent;
      });
      
  }
  
  // Llamamos a la función setupUI después de que se haya cargado el DOM
  document.addEventListener("DOMContentLoaded", () => {
    initContract().then(() => { 
        setupUI();
    });
  });