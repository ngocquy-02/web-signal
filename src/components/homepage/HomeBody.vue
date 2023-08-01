<template>
    <section class="banner section">
        <div class="container">
            <div class="row">
                <div class="col-7 col-lg-5">
                    <h1>Nói chuyện Tự do</h1>
                    <p class="body1">Bắt đầu một trải nghiệm nhắn tin khác biệt. Các tính năng hỗ trợ quyền riêng tư ngoài
                        mong đợi, kết
                        hợp với những tính năng nhắn tin bạn mong chờ.</p>
                    <p> <router-link class="button button-white" :to="{ name: 'GetSignal' }"> Tải Signal </router-link></p>
                </div>
                <div class="col-5 col-lg-7 position-relative mobile-screenshots">
                    <img class="screenshot1" src="../../assets/img/signal-iphone.png">
                    <img class="screenshot2" src="../../assets/img/signal-pixel.png">
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HomeBody",
}
</script>

<style>
.banner {
    background-color: #9DBBF8;
    color: #1b1b1b;
    max-height: 760px;
    margin-bottom: 64px;
    overflow: hidden;
}

.banner h1 {
    margin: 0;
}

.banner p {
    font-size: 20px;
    font-weight: 400;
}

@media (min-width: 1024px) {
    .banner {
        max-height: 680px;
    }

    .banner h1 {
        margin: 120px 0 24px;
    }
}

.button {
    background-color: #2c6bed;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    box-shadow: none;
    display: inline-flex;
    align-items: center;
    height: 2.5em;
    position: relative;
    vertical-align: top;
    padding-bottom: calc(0.5em - 1px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 1px);

}

.button-white {
    background-color: #fff;
    color: #2C6BED;
    font-size: 20px;
    line-height: 28px;
    padding: 0 20px;
}

.mobile-screenshots img {
    transform: rotate(22.5deg);
    width: 218px;
}

.mobile-screenshots .screenshot1 {
    margin-left: -50px;
    margin-top: 55px;
}

.mobile-screenshots .screenshot2 {
    margin-left: -32px;
    position: absolute;
    top: 0px;
}

@media (min-width: 1024px) {
    .mobile-screenshots .screenshot1 {
        margin-left: 0px;
        margin-top: 46px;
        width: 320px;
    }

    .mobile-screenshots .screenshot2 {
        width: 300px;
    }
}


@media (max-width: 992px) {
    .banner {
        margin-bottom: 0;
    }
}
</style>
