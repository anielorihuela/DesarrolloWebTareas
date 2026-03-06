from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

dicc_usuarios = {
    1: {"Nombre":"Juan"},
    2: {"Nombre":"Pepe"}
}
@app.get("/v1/usuarios")
def read_users():
    return dicc_usuarios

@app.get("/v1/usuario/{id}")
def read_item_ejercicio(id: int):
    try:
        return dicc_usuarios[id]
    except:
        return {"Error":"Usuario no encontrado"}
    
@app.post("/v1/usuario")
def create_user(usuario_nombre: str):
    dicc_usuarios[len(dicc_usuarios)+1] = {"nombre": usuario_nombre}
    
class UsuarioDTO(BaseModel):
    nombre: str

@app.post("/v1/usuario-incorrecto")
def create_user_body(usuario: UsuarioDTO):
    id_usuario = len(dicc_usuarios)+1
    nuevo_usuario = {"Nombre": usuario.nombre}
    dicc_usuarios[id_usuario] = nuevo_usuario
    return dicc_usuarios[id_usuario]
    