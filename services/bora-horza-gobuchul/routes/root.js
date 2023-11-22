/// <reference path="../global.d.ts" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.get('/', async (request, reply) => {
    const limitingFactorPayload = await request['limitingFactor'].get()
    return { ...limitingFactorPayload, 'bora-horza-gobuchul': fastify.example }
  })
}
