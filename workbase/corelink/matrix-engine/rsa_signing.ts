export class SigningEngine {
  private keyPairPromise: Promise<CryptoKeyPair>

  constructor() {
    this.keyPairPromise = crypto.subtle.generateKey(
      {
        name: "RSASSA-PKCS1-v1_5",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256",
      },
      true,
      ["sign", "verify"]
    )
  }

  private async getKeyPair(): Promise<CryptoKeyPair> {
    return this.keyPairPromise
  }

  async sign(data: string): Promise<string> {
    const keyPair = await this.getKeyPair()
    const enc = new TextEncoder().encode(data)
    const sig = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", keyPair.privateKey, enc)
    return Buffer.from(sig).toString("base64")
  }

  async verify(data: string, signature: string): Promise<boolean> {
    const keyPair = await this.getKeyPair()
    const enc = new TextEncoder().encode(data)
    const sig = Buffer.from(signature, "base64")
    return crypto.subtle.verify("RSASSA-PKCS1-v1_5", keyPair.publicKey, sig, enc)
  }

  async exportPublicKey(): Promise<string> {
    const keyPair = await this.getKeyPair()
    const spki = await crypto.subtle.exportKey("spki", keyPair.publicKey)
    return Buffer.from(spki).toString("base64")
  }

  async exportPrivateKey(): Promise<string> {
    const keyPair = await this.getKeyPair()
    const pkcs8 = await crypto.subtle.exportKey("pkcs8", keyPair.privateKey)
    return Buffer.from(pkcs8).toString("base64")
  }

  async importPublicKey(spkiB64: string): Promise<CryptoKey> {
    const spki = Buffer.from(spkiB64, "base64")
    return crypto.subtle.importKey(
      "spki",
      spki,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      true,
      ["verify"]
    )
  }

  async importPrivateKey(pkcs8B64: string): Promise<CryptoKey> {
    const pkcs8 = Buffer.from(pkcs8B64, "base64")
    return crypto.subtle.importKey(
      "pkcs8",
      pkcs8,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      true,
      ["sign"]
    )
  }
}
