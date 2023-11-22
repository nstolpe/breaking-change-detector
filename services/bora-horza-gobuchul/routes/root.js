/// <reference path="../global.d.ts" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.get('/', async (request, reply) => {
    const limitingFactorPayload = await request['limitingFactor'].get()
    console.log(await request['limitingFactor'].get())
    console.log('foobar', fastify.example)
    return { ...limitingFactorPayload, 'bora-horza-gobuchul': fastify.example }
  })
}
