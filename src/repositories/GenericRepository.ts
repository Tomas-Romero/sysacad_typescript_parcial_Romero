export class GenericRepository<T> {
    constructor(
        protected readonly model: any,
        protected readonly includes?: any
    ) {}

    async crear(data: T): Promise<T> {
        try {
            let dataToPersist: any = data;
            if (data && typeof (data as any).toPlainObject === "function") {
                dataToPersist = (data as any).toPlainObject();
            }

            const entidadCreada = await this.model.create({
                data: dataToPersist,
                include: this.includes
            });
            return entidadCreada as T;
        } catch (error: any) {
            throw new Error(`Error al crear entidad: ${error}`);
        }
    }

    async buscarPorId(id: number): Promise<T | null> {
        try {
            return await this.model.findUnique({
                where: { id },
                include: this.includes
            });
        } catch (error: any) {
            throw new Error(`Error al obtener entidad con id ${id}: ${error}`);
        }
    }

    async actualizar(id: number, nuevosDatos: Partial<T>): Promise<T | null> {
        try {
            if ("id" in nuevosDatos) {
                delete (nuevosDatos as any).id; // evitar modificar id
            }

            return await this.model.update({
                where: { id },
                data: nuevosDatos,
                include: this.includes
            });
        } catch (error: any) {
            throw new Error(`Error al actualizar entidad con id ${id}: ${error}`);
        }
    }

    async eliminar(id: number): Promise<T | null> {
        try {
            return await this.model.delete({
                where: { id }
            });
        } catch (error: any) {
            throw new Error(`Error al eliminar entidad con id ${id}: ${error}`);
        }
    }
}
