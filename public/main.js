
    const { ethereum } = window;
    const connectMetaMask = async () => {
        try {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            console.log("accounts: ", accounts);
            const acc = accounts;
            axios.put('https://64c654d00a25021fde9186d7.mockapi.io/var/1', {"AccountAddress": acc[0] })
            .then(response => {
             console.log('Request successful!');
             //console.log('Response data:', response.data);
               })
            .catch(error => {
             console.error('An error occurred:', error);
             });
            
        } catch (err) {
            console.error("error occured while connecting to MetaMask: ", err)
        }
    }

    