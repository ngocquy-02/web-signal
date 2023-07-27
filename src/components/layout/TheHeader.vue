<template>
    <nav class="header">
        <div class="container">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid align-items-baseline">
                    <router-link class="navbar-brand" :to="{ name: 'Home' }"><img class="signal-logo" src="../../assets/logo.png" alt=""></router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end navbar-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 py-2 mb-lg-0">
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'GetSignal'}">Get Signal</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Help'}">Help</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Blog'}">Blog</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Developer'}">Developers</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Career'}">Careers</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'Donate'}">Donate</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://twitter.com/signalapp"><i class='bx bxl-twitter'></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://instagram.com/signal_app/"><i class='bx bxl-instagram'></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link d-flex align-items-center" href="#"><i class='bx bx-globe'></i> <span class="ms-1">Tiếng Việt</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </nav>
    <header class="header-top"></header>
</template>

<script>
export default {
    name: "TheHeader",
}
</script>

<style>

.header {
    background-color: #fff;
    border-bottom: 1px solid #ebeaeb;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    z-index: 99;
}

.header-top {
    margin-top: 80px;
}

.nav-link {
    color: #1b1b1b;
    padding: 8px 12px !important;
}

.nav-link:hover {
    color: #2C6BED;
}



.bx {
    font-size: 1.6rem;
}

.signal-logo {
    height: 30px;
    vertical-align: middle;
}

@media (min-width: 1024px) {
    .signal-logo {
        height: 50px;
    }
}

@media (max-width: 992px) {
    .navbar-menu {
    background-color: #fff;
    border: 1px solid #ebeaeb;
    position: absolute;
    top: 68px;
    left: 0;
    width: 100%;;
}
}

</style>