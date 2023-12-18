import z from 'zod';

const usuarioSchema = z.object({
    nombres: z.string({
        required_error: 'nombres es requerido',
        invalid_type_error: 'nombres debe ser un string'
    }).min(1).max(50),
    tipo_documento: z.string({
        required_error: 'tipo_documento es requerido',
        invalid_type_error: 'tipo_documento debe ser un string'
    }).min(1).max(50),
    apellidos: z.string({
        required_error: 'apellidos es requerido',
        invalid_type_error: 'apellidos debe ser un string'
    }).min(1).max(50),
    documento: z.string({
        required_error: 'documento es requerido',
        invalid_type_error: 'documento debe ser un string'
    }).min(1).max(20),
    email: z.string({
        required_error: 'email es requerido',
        invalid_type_error: 'email debe ser un string'
    }).min(1).max(255),
});

export function validateUsuario (input) {
    return usuarioSchema.safeParse(input);
};

export function validatePartialUsuario (input) {
    return usuarioSchema.partial().safeParse(input);
};