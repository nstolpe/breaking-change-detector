import { type FastifyReply, type FastifyPluginAsync } from 'fastify'

declare namespace limitingFactor {
  export interface LimitingFactor {
    get(req?: GetRequest): Promise<GetResponses>;
  }
  export interface LimitingFactorOptions {
    url: string
  }
  export const limitingFactor: LimitingFactorPlugin;
  export { limitingFactor as default };
  export interface FullResponse<T, U extends number> {
    'statusCode': U;
    'headers': Record<string, string>;
    'body': T;
  }

  export interface GetRequest {
  }

  export interface GetResponseOK {
  }

  type GetResponses = 
    GetResponseOK

}

type LimitingFactorPlugin = FastifyPluginAsync<NonNullable<limitingFactor.LimitingFactorOptions>>

declare module 'fastify' {
  interface ConfigureLimitingFactor {
    getHeaders(req: FastifyRequest, reply: FastifyReply): Promise<Record<string,string>>;
  }
  interface FastifyInstance {
    configureLimitingFactor(opts: ConfigureLimitingFactor): unknown
  }

  interface FastifyRequest {
    'limitingFactor': limitingFactor.LimitingFactor;
  }
}

declare function limitingFactor(...params: Parameters<LimitingFactorPlugin>): ReturnType<LimitingFactorPlugin>;
export = limitingFactor;
