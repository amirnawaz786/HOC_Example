
const BASE_URL_TEST = "https://api.stripe.com/v1";

class paymentHelper {
    constructor(props) {
    }

    //---------------------------- Stripe Modules API Request ----------------------------//


    //---------------------------- Generating Token ----------------------------//


    getToken = async(data,STRIPE_PUBLISHABLE_KEY,callback) => {

        // const card = {
        //     'card[number]':     creditCardData.values.number.replace(/ /g, ''),
        //     'card[exp_month]':  creditCardData.values.expiry.split('/')[0],
        //     'card[exp_year]':   creditCardData.values.expiry.split('/')[1],
        //     'card[cvc]':        creditCardData.values.cvc,
        //     'card[name]':       creditCardData.values.name
        // };
        const card = {
            'card[number]':     data.cardNumber,
            'card[exp_month]':  data.exp_month,
            'card[exp_year]':   data.exp_year,
            'card[cvc]':        data.cvc,
            'card[name]':       data.name
        };
         await fetch(`${BASE_URL_TEST}/tokens`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`
            },
            method: 'post',
            body: Object.keys(card)
                .map(key => key + '=' + card[key])
                .join('&')
        }).then((response)=>{
            response.json().then((response)=>{
                callback(response)
            })
        });
    };


    //---------------------------- Charge a Account ----------------------------//


    chargeAccount = async(SECRET_KEY_DEV,token,price,callback) => {

        let description = 'Charge';
        let properties = {
            amount: Math.round(price * 100),
            currency: 'usd',
            source: token,
            description: description,
        };
         await fetch(`${BASE_URL_TEST}/charges`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${SECRET_KEY_DEV}`
            },
            method: 'post',
            body: Object.entries(properties)
                .map(([key, value]) => `${key}=${value}`)
                .reduce((previous, current) => `${previous}&${current}`, '')
        }).then((resp)=>{
          resp.json().then((response)=>{
              callback(response);
          })
        });
    }


    //---------------------------- Retrieve Account Balance ----------------------------//


    retrieveBalance = async(SECRET_KEY_DEV,callback) => {

         await fetch(`${BASE_URL_TEST}/balance`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${SECRET_KEY_DEV}`
            },
            method: 'get',
        }).then((res)=>{
             res.json().then((response)=>{
                 callback(response);
             })
        });
    };


    //---------------------------- Create Customer ----------------------------//


    createCustomer = async(SECRET_KEY_DEV,description,email,name,token) => {
        console.log("Helper token",token)
        let params = {
            description: description,
            email:email,
            name:name,
            source: token.id,
        };
        return await fetch(`${BASE_URL_TEST}/customers`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${SECRET_KEY_DEV}`
            },
            method: 'post',
            body: Object.entries(params)
                .map(([key, value]) => `${key}=${value}`)
                .reduce((previous, current) => `${previous}&${current}`, '')
        }).then((resp) => resp.json());
    };


    //---------------------------- Create Product ----------------------------//


    createProduct = async(SECRET_KEY_DEV,name) => {
        let params = {
            name:name
        };
        return await fetch(`${BASE_URL_TEST}/products`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${SECRET_KEY_DEV}`
            },
            method: 'post',
            body: Object.entries(params)
                .map(([key, value]) => `${key}=${value}`)
                .reduce((previous, current) => `${previous}&${current}`, '')
        }).then((resp) => resp.json());
    };


    //---------------------------- Create Price of the created Product ----------------------------//


    createPriceOfProduct = async(SECRET_KEY_DEV,amount,interval,currency,productId) => {
        let recurring = {
            interval: interval
        };
        let params = {
            unit_amount:amount,
            currency:currency,
            recurring: recurring,
            product:productId
        };
        console.log("Object",params)
        return await fetch(`${BASE_URL_TEST}/prices`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${SECRET_KEY_DEV}`
            },
            method: 'post',
            body: Object.entries(params)
                .map(([key, value]) => `${key}=${value}`)
                .reduce((previous, current) => `${previous}&${current}`, '')
        }).then((resp) => resp.json());
    };


    //---------------------------- Fetch All Products----------------------------//


    retrieveAllProducts = async(SECRET_KEY_DEV) => {

        return await fetch(`${BASE_URL_TEST}/products`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${SECRET_KEY_DEV}`
            },
            method: 'get',
        }).then((resp) => resp.json());
    };


    //---------------------------- Fetch All Product Price----------------------------//


    retrieveProductPrice = async(SECRET_KEY_DEV,product_Id) => {
        console.log("Id received",product_Id)
        return await fetch(`${BASE_URL_TEST}/prices`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${SECRET_KEY_DEV}`
            },
            method: 'get',
        }).then((resp) => resp.json());
    }


    //---------------------------- Create a Plan ----------------------------//


    createPlan = async(SECRET_KEY_DEV,amount,currency,interval,product_id) => {

        let params = {
            amount:   amount,
            currency: currency,
            interval: interval,
            product:  product_id,
        };
        console.log("Object",params)
        return await fetch(`${BASE_URL_TEST}/plans`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${SECRET_KEY_DEV}`
            },
            method: 'POST',
            body:  Object.entries(params)
                .map(([key, value]) => `${key}=${value}`)
                .reduce((previous, current) => `${previous}&${current}`, '')
        }).then((resp) => resp.json());
    };



    //---------------------------- Subscription ----------------------------//


    subscribe = async(SECRET_KEY_DEV,customer_id,price_id,plan) => {

        var formBody = []

        var encodedKey = encodeURIComponent("customer");
        var encodedValue = encodeURIComponent(customer_id);
        formBody.push(encodedKey + "=" + encodedValue);

        var encodedKey1 = encodeURIComponent(`items[0][${plan}]`);
        var encodedValue1 = encodeURIComponent(price_id );
        formBody.push(encodedKey1 + "=" + encodedValue1);

        formBody = formBody.join("&");

        return await fetch(`${BASE_URL_TEST}/subscriptions`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                Authorization: `Bearer ${SECRET_KEY_DEV}`
            },
            method: 'POST',
            body: formBody
        }).then((resp) => resp.json());
    };



}



const PaymentHelper = new paymentHelper();

export default PaymentHelper;
