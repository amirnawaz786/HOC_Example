const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const stripe = require("stripe")
("sk_test_51K9ldQB4O0YFNEohTflPKeNKI9zCmpmqzAUlJW8O99U6FdZO5TFV2Lq84n34pJEiTSY7apdHyhfyOlT5zmigIecG00muNIpQ6D");
exports.completePaymentWithStripe = functions.https.onRequest((request,response)=>{
    stripe.charges.create({
        amount:request.body.amount ,
        currency:request.body.currency ,
        source:'tok_mastercard'
    }).then((charge)=>{
        response.send(charge);
    }).catch((error)=>{
        console.log("error in payment ===>>>", error);
    });
});
