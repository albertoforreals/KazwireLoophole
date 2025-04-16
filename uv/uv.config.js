// This file overwrites the stock UV config.js

self.__uv$config = {
    bare: "/bare/",
    prefix: "/service/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/uv/uv.handler.js?v=8-25-24",
    client: "/uv/uv.client.js?v=8-25-24",
    bundle: "/uv/uv.bundle.js?v=8-25-24",
    config: "/uv/uv.config.js?v=8-25-24",
    sw: "/uv/uv.sw.js?v=8-25-24",
};