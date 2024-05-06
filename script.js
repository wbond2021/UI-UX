document.addEventListener('DOMContentLoaded', function() {
    const lightSwitches = document.querySelectorAll('.light-control input[type="checkbox"]');
    const lightStatuses = document.querySelectorAll('.light-control .light-status');
    const temperatureInput = document.getElementById('temperature-input');
    const setTemperatureBtn = document.getElementById('set-temperature-btn');
    const temperatureStatus = document.getElementById('temperature-status');
    const tipElement = document.getElementById('tip');
    const report = document.getElementById('report');

    // Sustainability tips array
    const tips = [
        'Tip: Use energy-saving light bulbs to reduce your energy consumption.',
        'Tip: Unplug devices when they are not in use to save power.',
        'Tip: Take shorter showers to conserve water.',
        'Tip: Recycle and compost to reduce waste.',
        'Tip: Use public transportation or carpool to reduce carbon emissions.'
    ];

    let currentTipIndex = 0;

    // Function to display a new tip with sliding animation
    function displayNewTip() {
        // Remove the class to reset the animation
        tipElement.classList.remove('tip-content');

        // Trigger a reflow in between removing and adding the class
        void tipElement.offsetWidth;

        // Update the tip content
        tipElement.textContent = tips[currentTipIndex];

        // Add the class to start the animation
        tipElement.classList.add('tip-content');

        // Increment the tip index
        currentTipIndex = (currentTipIndex + 1) % tips.length;
    }

    // Display the first tip
    displayNewTip();

    // Update the tip every 30 seconds
    setInterval(displayNewTip, 30000);

    // Fetch energy usage data from server or device
    const energyUsage = 50; // This would be fetched from a server or device

    // Display energy usage data
    const ctx = document.getElementById('consumption-chart').getContext('2d');
    const consumptionChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Water', 'Electricity', 'Gas'],
            datasets: [{
                label: 'Consumption',
                data: [50, 200, 30],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
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

    // Dark Mode Toggle
    document.getElementById('dark-mode-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

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
