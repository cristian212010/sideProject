import z from 'zod';

const candidatoSchema = z.object({
    id_usuario_fk: z.number({
        required_error: 'id_usuario_fk es requerido',
        invalid_type_error: 'id_usuario_fk debe ser un number'
    }).int().positive(),
    id_especialidad_fk: z.number({
        required_error: 'id_especialidad_fk es requerido',
        invalid_type_error: 'id_especialidad_fk debe ser un number'
    }).int().positive(),
    id_nivel_ingles_fk: z.number({
        required_error: 'id_nivel_ingles_fk es requerido',
        invalid_type_error: 'id_nivel_ingles_fk debe ser un number'
    }).int().positive(),
    avatar: z.string({
        required_error: 'avatar es requerido',
        invalid_type_error: 'avatar debe ser un string'
    }).min(1).max(50),
    disponibilidad_viajar: z.boolean({
        required_error: 'disponibilidad_viajar es requerido',
        invalid_type_error: 'disponibilidad_viajar debe ser un booleano'
    }),
    descripcion: z.string({
        invalid_type_error: 'descripcion debe ser un string'
    }).nullable(),
});

export function validateCandidato(input) {
    return candidatoSchema.safeParse(input);
};

export function validatePartialCandidato(input) {
    return candidatoSchema.partial().safeParse(input);
}