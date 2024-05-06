document.addEventListener('DOMContentLoaded', function() {
    const reportElement = document.getElementById('full-report');

    // Dummy data for the report
    const dummyData = {
        water: '120 gallons',
        electricity: '350 kWh',
        gas: '40 cubic feet'
    };

    // Generate and display the report
    let reportContent = '<h2>Your Detailed Consumption Report</h2>';
    for (const [resource, amount] of Object.entries(dummyData)) {
        reportContent += `<p>${resource.charAt(0).toUpperCase() + resource.slice(1)}: ${amount}</p>`;
    }

    reportElement.innerHTML = reportContent;
});
