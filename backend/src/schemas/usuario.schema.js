import z from 'zod';

const usuarioSchema = z.object({
    id_rol_fk: z.number({
        required_error: 'id_rol_fk es requerido',
        invalid_type_error: 'id_rol_fk debe ser un number'
    }).int().positive(),
    id_tipo_documento_fk: z.number({
        required_error: 'id_tipo_documento_fk es requerido',
        invalid_type_error: 'id_tipo_documento_fk debe ser un number'
    }).int().positive(),
    nombres: z.string({
        required_error: 'nombres es requerido',
        invalid_type_error: 'nombres debe ser un string'
    }).min(1).max(50),
    apellidos: z.string({
        required_error: 'apellidos es requerido',
        invalid_type_error: 'apellidos debe ser un string'
    }).min(1).max(50),
    documento: z.string({
        required_error: 'documento es requerido',
        invalid_type_error: 'documento debe ser un string'
    }).min(1).max(20),
    password: z.string({
        required_error: 'password es requerido',
        invalid_type_error: 'password debe ser un string'
    }).min(1).max(30)
});

export function validateUsuario (input) {
    return usuarioSchema.safeParse(input);
};

export function validatePartialUsuario (input) {
    return usuarioSchema.partial().safeParse(input);
};