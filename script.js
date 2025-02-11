document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Data login sementara
    const validUsername = "nefultra";
    const validPassword = "12345";

    // Ambil input user
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Validasi login
    if (username === validUsername && password === validPassword) {
        alert("Login berhasil")
        window.location.href = "dashboard.html"; // Redirect ke halaman lain
    } else {
        document.getElementById("message").textContent = "Username atau password salah!";
    }
});
