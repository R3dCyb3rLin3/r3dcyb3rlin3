// Verificar si el navegador soporta la API de Bluetooth
if (!navigator.bluetooth) {
    alert("Tu navegador no soporta la API Web Bluetooth.");
}

document.getElementById("buscar").addEventListener("click", function() {
    // Iniciar la búsqueda de dispositivos Bluetooth
    navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service'] // Puedes agregar otros servicios Bluetooth aquí
    })
    .then(device => {
        // Mostrar el nombre del dispositivo encontrado
        console.log("Dispositivo encontrado:", device.name);
        addDeviceToList(device.name);
    })
    .catch(error => {
        console.log("Error al encontrar el dispositivo:", error);
    });
});

// Función para añadir un dispositivo a la lista en la interfaz de usuario
function addDeviceToList(deviceName) {
    const list = document.getElementById("listaDispositivos");
    const listItem = document.createElement("li");
    listItem.textContent = deviceName;
    list.appendChild(listItem);
}
