import { instanciaUniversidad as universidad } from "./utils"

test("deberia crear una instacia de la clase universidad y leer sus atributos", () => {

    expect(universidad).toBeTruthy()
    expect(universidad.nombre).toBe("Universidad Tecnologica Nacional")
    expect(universidad.sigla).toBe("UTN")
})
