let user = {
    cookies: {
        agreed: true // o false, a seconda del caso
    }
};

function CollectData(user) {
    console.log("Raccolgo dati per l'utente:", user);
}


if (user.cookies.agreed) {
    CollectData(user);
} else {
    CollectData(user);
}
