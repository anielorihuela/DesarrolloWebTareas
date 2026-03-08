// Guardar token que ingresa el usuario
const boton = document.getElementById("guardarToken");
boton.addEventListener('click', guardaToken);

function guardaToken() {
    const token = document.getElementById('tokenInput').value;
    if (!token) {
        alert('Por favor, ingresa un token.');
        return;
    }
    sessionStorage.setItem('token', token);
    alert('Token guardado en sessionStorage');
}

// Escuchar cambio en select
const cancionSelect = document.getElementById('trackSelect');
cancionSelect.addEventListener('change', infoCancion);

async function infoCancion() {
    const cancionToken = cancionSelect.value;
    const tokenAcceso = sessionStorage.getItem('token');
    if (!tokenAcceso) {
        alert('Primero escriba y guarde un token de acceso');
        return;
    }
    await verificarToken(tokenAcceso, cancionToken);
}

async function verificarToken(tokenAVer, cancionToken) {
    try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = `https://api.spotify.com/v1/tracks/${cancionToken}`;

        const res = await fetch(proxyUrl + apiUrl, {
            headers: {
                'Authorization': `Bearer ${tokenAVer}`,
                'x-requested-with': 'XMLHttpRequest'
            }
        });

        if (!res.ok) {
            const errorData = await res.text();
            throw new Error(`Error: ${res.status} - ${errorData}`);
        }

        const datosCancion = await res.json();

        let htmlArtistas = '';
        datosCancion.artists.forEach(artista => {
            htmlArtistas += `<p>${artista.name}</p>`;
        });

        const htmlCancion = `
            <div class="card mt-3">
                <div class="card-body">
                    <h2>${datosCancion.name}</h2>
                    <p><strong>Álbum:</strong> ${datosCancion.album.name}</p>
                    <p><strong>Total de tracks:</strong> ${datosCancion.album.total_tracks}</p>
                    <p><strong>Tipo de álbum:</strong> ${datosCancion.album.album_type}</p>
                    <p><strong>Artistas:</strong> ${htmlArtistas}</p>
                </div>
            </div>
        `;
        document.getElementById('trackInfo').innerHTML = htmlCancion;
    } catch (error) {
        console.error("Error completo:", error);
        const htmlDanger = `<div class="alert alert-danger" role="alert"> Error al cargar la información de la canción: ${error.message} </div>`;
        document.getElementById('danger').innerHTML = htmlDanger;
        //alert(`Error al cargar la información de la canción: ${error.message}`);
    }
}

// Limpiar
const limp = document.getElementById('limpiar');
limp.addEventListener('click', limpiar);

function limpiar() {
    sessionStorage.clear();
    document.getElementById('tokenInput').value = '';
    document.getElementById('trackInfo').innerHTML = '';
    document.getElementById('trackSelect').selectedIndex = 0;
    document.getElementById('danger').innerHTML = '';
    alert('Se han limpiado los datos de sessionStorage');
}


