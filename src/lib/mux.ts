import Mux from "@mux/mux-node"
export const mux = new Mux({
    tokenId:process.env.MUX_ACCESS_TOKEN_ID,
    tokenSecret:process.env.MUX_SECET_KEY
})