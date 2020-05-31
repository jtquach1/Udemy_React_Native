import axios from 'axios';

export default axios.create({
    // property, root URL that we want to make the request to
    // NO forward slash at the end!
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer X1VReYCSKhVL5tAwF6_u8gSpUcf5WY3AxpSUc2l9idX5rggud_YnzfnQ-V2fIrsw17lTG4XUir18ioZHu1G_NPwripnV3GFhN44XlPDqWSS82xWCPYg0mHWoYhHTXnYx'    
    },

});
