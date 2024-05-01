document.addEventListener('DOMContentLoaded', function() {
    const lightSwitches = document.querySelectorAll('.light-control input[type="checkbox"]');
    const lightStatuses = document.querySelectorAll('.light-control .light-status');
    const temperatureInput = document.getElementById('temperature-input');
    const setTemperatureBtn = document.getElementById('set-temperature-btn');
    const temperatureStatus = document.getElementById('temperature-status');
    const tip = document.getElementById('tip');
    const report = document.getElementById('report');

    // Fetch energy usage data from server or device
    const energyUsage = 50; // This would be fetched from a server or device

    // Display energy usage data
    document.getElementById('energy-usage').textContent = `Current energy usage: ${energyUsage} kWh`;

    // Function to handle lighting control
    lightSwitches.forEach((lightSwitch, index) => {
        lightSwitch.addEventListener('change', function() {
            if (lightSwitch.checked) {
                // Code to turn on lights
                lightStatuses[index].textContent = 'On';
                lightStatuses[index].style.backgroundColor = 'green';
            } else {
                // Code to turn off lights
                lightStatuses[index].textContent = 'Off';
                lightStatuses[index].style.backgroundColor = 'red';
            }
        });
    });

    // Function to handle thermostat control
    setTemperatureBtn.addEventListener('click', function() {
        const temperature = parseFloat(temperatureInput.value);
        if (!isNaN(temperature) && temperature >= 10 && temperature <= 30) {
            // Code to set temperature
            temperatureStatus.textContent = 'Temperature set to: ' + temperature + '°C';
        } else {
            alert('Please enter a valid temperature between 10 and 30°C');
        }
    });

    // Display a sustainability tip
    tip.textContent = 'Tip: Use energy-saving light bulbs to reduce your energy consumption.';

    // Fetch consumption data from server or device
    const consumptionData = {
        water: 50, // in gallons
        electricity: 200, // in kWh
        gas: 30, // in cubic feet
    };

    // Generate consumption report
    let consumptionReport = 'Your consumption for this month:\n';
    for (const [resource, amount] of Object.entries(consumptionData)) {
        consumptionReport += `${resource.charAt(0).toUpperCase() + resource.slice(1)}: ${amount}\n`;
    }

    // Display consumption report
    report.textContent = consumptionReport;
});
