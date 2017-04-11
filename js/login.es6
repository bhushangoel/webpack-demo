let login = (username, password) => {
    if (username != "admin" || password != "admin") {
        console.log('Invalid credentials');
    }
};

login("admin", "admin123")
