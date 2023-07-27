<template>
    <section class="documentation section">
        <div class="container">
            <div class="row align-items-center py-3">
                <div class="col-md-6 col-12">
                    <h1>Technical information</h1>
                    <p class="body1"> Specifications and software libraries for developers</p>
                </div>
                <div class="col-md-6 col-12">
                    <img src="../assets/img/header-developers.png">
                </div>
            </div>
        </div>
    </section>

    <section class="section docs">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-12">
                    <h2 class="mb-4">Specifications</h2>
                    <p class="body1"> Encryption in messaging environments integrates many ideas which often need to be
                        composed separately in different applications. We make an effort to break out ideas into independent
                        specifications so that they can be integrated as appropriate for different projects.</p>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-6 col-12">
                    <p class="body2 semibold"> <a href="#">XEdDSA and VXEdDSA</a></p>
                    <p class="body2 spec"> This document describes how to create and verify EdDSA-compatible signatures
                        using public key and private key formats initially defined for the X25519 and X448 elliptic curve
                        Diffie-Hellman functions. This document also describes "VXEdDSA" which extends XEdDSA to make it a
                        verifiable random function, or VRF.</p>
                    <p class="body2 semibold"> <a href="#">X3DH</a></p>
                    <p class="body2 spec"> This document describes the "X3DH" (or "Extended Triple Diffie-Hellman") key
                        agreement protocol. X3DH establishes a shared secret key between two parties who mutually
                        authenticate each other based on public keys. X3DH provides forward secrecy and cryptographic
                        deniability.</p>
                </div>
                <div class="col-md-6 col-12">
                    <p class="body2 semibold"> <a href="#">Double Ratchet</a></p>
                    <p class="body2 spec"> This document describes the Double Ratchet algorithm, which is used by two
                        parties to exchange encrypted messages based on a shared secret key. The parties derive new keys for
                        every Double Ratchet message so that earlier keys cannot be calculated from later ones. The parties
                        also send Diffie-Hellman public values attached to their messages. The results of Diffie-Hellman
                        calculations are mixed into the derived keys so that later keys cannot be calculated from earlier
                        ones. These properties give some protection to earlier or later encrypted messages in case of a
                        compromise of a party's keys.</p>
                    <p class="body2 semibold"> <a href="#">Sesame</a></p>
                    <p class="body2 spec"> This document describes the Sesame algorithm for managing message encryption
                        sessions in an asynchronous and multi-device setting.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section docs">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Software libraries</h2>
                    <p class="semibold"><a href="https://github.com/signalapp/libsignal">Signal Protocol library</a></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "DeveloperView"
}
</script>

<style>
.documentation {
    background-color: #f6f6f6;
    margin-bottom: 40px;
    padding-bottom: 0;
    padding-top: 0;
}

.semibold {
    font-weight: 600 !important;
}
</style>