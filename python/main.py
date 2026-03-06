from fastapi import FastAPI

app = FastAPI()


@app.get("/v1/hola-mundo") #si pusieras /hola, lo que sea que está en el def solo aparecería con la ruta completa
def read_root():
    return {"Hello": "World"}

@app.post("/v1/hola-mundo")
def hola_mundo_post():
    return {"Hola": "Mundo-Post"}

@app.get("/v1/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}

@app.get("/info")
def read_info():
    return {
        "nombre":"Aniel Orihuela",
        "edad":"20",
        "color favorito":"87E8DD"
        }
@app.get("/v1/usuario/{id}")
def read_item_ejercicio(id: int):
    try:
        personas = {
            1: {"nombre": "Liliana", "edad":46},
            2: {"nombre": "Rodrigo", "edad":22},
            3: {"nombre": "Proni", "edad":15},
            4: {"nombre": "Verónica", "edad":21},
            5: {"nombre": "Aleks", "edad":20}
                }
        return personas[id]
    except:
        return {"Error":"Usuario no encontrado"}
    