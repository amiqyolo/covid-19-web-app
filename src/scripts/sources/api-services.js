class ApiServices {
    static async searchClub(keyword) {
        try {
            const options = {
                method: 'GET',
                headers: {
                  'X-Access-Token': '1e29ed29-066c-4494-ae5d-a6174a8fc551',
                },
            };
    
            const response = await fetch(`https://api.covid19api.com/summary`, options);
            const responseJson = await response.json();
    
            const jsonObject = responseJson.Countries;
    
            jsonObject.forEach((item, index) => {
                if (item.Country.toLowerCase() === keyword.toLowerCase()) {
                    console.log(item);
                    return item;
                }
            });
        } catch (error) {
            return error;
        }
    }
};
  
export default ApiServices;