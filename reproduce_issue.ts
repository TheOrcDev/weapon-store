
const apiKey = 'creem_test_1mGHLeGL6e92jbWJcgp3Oi';

async function testApiKey() {
    console.log(`Testing API key: ${apiKey}`);
    try {
        const response = await fetch('https://test-api.creem.io/v1/checkouts', {
            method: 'POST', // Checkouts usually created via POST
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`, // Assuming Bearer auth, need to verify
                'x-api-key': apiKey // Or maybe x-api-key? Let's try both or check docs if available. Library usage suggests it just passes it to the client.
            },
            body: JSON.stringify({
                productId: 'prod_7e1R5dIyUTjaMkd4uQDu5p', // Using product ID from user request
                units: 1
            })
        });

        console.log(`Status: ${response.status}`);
        const body = await response.text();
        console.log(`Body: ${body}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

testApiKey();
