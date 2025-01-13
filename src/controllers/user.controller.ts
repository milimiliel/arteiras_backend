import { FastifyRequest, FastifyReply } from "fastify"
import { signup, edit } from "../usecases/user.usercases"

export class UserController {
    async create(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { name, email, password }: any = req.body
            const user = await signup({ name, email, password })
            
            return reply.code(200).send(user)
            
        } catch (error) {
            throw new Error(`Erro: ${error}`)
        }
    }

    async update(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { id, name, email, old_password, password }: any = req.body
            const user = await edit(id, { name, email, old_password, password })
            return reply.code(200).send(user)
            
        } catch (error) {
            throw new Error(`Erro: ${error}`)
        }
    }
}