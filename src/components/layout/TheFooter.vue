<template>
    <footer class="footer text-center">
        <div class="container text-center text-md-start">
            <!-- Grid row -->
            <div class="row mt-3">
                <!-- Grid column -->
                <div class="col-md-4 col-lg-4 col-xl-4 col-12 mx-auto mb-4 footer-title">
                    <p class="mb-3"> © 2013-2023 Signal, a 501c3 nonprofit.
                        Signal is a registered trademark in the United States and other countries. </p>

                    <p>For media inquiries, contact <span class="footer-link">press@signal.org</span></p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 col-6 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class=" fw-bold mb-3">
                        Organization
                    </h6>
                    <p>
                        <a href="#!" class="footer-link">Donate</a>
                    </p>
                    <p>
                        <a href="#!" class="footer-link">Careers</a>
                    </p>
                    <p>
                        <a href="#!" class="footer-link">Blog</a>
                    </p>
                    <p>
                        <a href="#!" class="footer-link">Terms & Privacy Policy</a>
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 col-6 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class=" fw-bold mb-3">
                        Download
                    </h6>
                    <p>
                        <a href="#!" class="footer-link">Android</a>
                    </p>
                    <p>
                        <a href="#!" class="footer-link">iPhone & iPad</a>
                    </p>
                    <p>
                        <a href="#!" class="footer-link">Windows</a>
                    </p>
                    <p>
                        <a href="#!" class="footer-link">Mac</a>
                    </p>
                    <p>
                        <a href="#!" class="footer-link">Linux</a>
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 col-6 mx-auto mb-md-0 mb-4">
                    <!-- Links -->
                    <h6 class=" fw-bold mb-3">Social</h6>
                    <p>
                        <a href="#!" class="footer-link">GitHub</a>
                    </p>
                    <p>
                        <a href="#!" class="footer-link">Twitter</a>
                    </p>
                    <p>
                        <a href="#!" class="footer-link">Instagram</a>
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 col-6 mx-auto mb-md-0 mb-4">
                    <!-- Links -->
                    <h6 class=" fw-bold mb-3">Help</h6>
                    <p>
                        <a href="#!" class="footer-link">Support Center</a>
                    </p>
                    <p>
                        <a href="#!" class="footer-link">Community</a>
                    </p>
                </div>
                <!-- Grid column -->
            </div>
            <!-- Grid row -->
        </div>

    </footer>
</template>

<script>
export default {
    name: "TheFooter",
}
</script>

<style>
.footer {
    background-color: #3C3744;
    color: #E9E9E9;
    line-height: 22px;
    padding: 48px 24px 58px
}

.footer p {
    margin-bottom: 0;
}

.footer-link {
    color: #E9E9E9;
    text-decoration: none;
}

.footer-link:hover {
    text-decoration: underline;
    cursor: pointer;
}

@media (max-width: 1024px) {
    .footer-title {
        order: 5;
    }
}
</style>