const admin = require('firebase-admin');

if(!admin.apps.length){
    admin.initializeapp({
        credential: admin.credential.cert({
            proyectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),

        }),
    });
}

module.exports=admin;
