<template>
    <section class="download section">
        <div class="container">

            <div class="row">
                <div class="col-md-6 col-12 text-center">
                    <h2 class="mb-4"> Signal cho Điện thoại</h2>
                    <div class="download-window">
                        <div class="download-window-wrapper">
                            <img src="../assets/screenshots/download-mobile.png" width="360">
                        </div>
                    </div>
                    <a class="button" href="https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms">
                        Android </a>
                    <a class="button" href="https://apps.apple.com/us/app/signal-private-messenger/id874139669"> iPhone hoặc
                        iPad </a>
                    <p class="mb-0">&nbsp;</p>
                    <p class="mb-5"> Hoặc truy cập <a href="https://signal.org/install">signal.org/install</a> từ điện thoại của bạn</p>
                </div>
                <div class="col-md-6 col-12 text-center">
                    <h2 class="mb-4"> Signal cho Desktop</h2>
                    <div id="Windows" class="">
                        <div class="download-window">
                            <div class="download-window-wrapper">
                                <img src="../assets/screenshots/download-desktop-windows.png" width="438">
                            </div>
                        </div>
                        <a href="https://updates.signal.org/desktop/signal-desktop-win-6.26.0.exe"
                            class="download-primary download-windows button large-button"> Tải cho Windows </a>
                        <article class="message">
                            <div class="message-body"> Để sử dụng ứng dụng Signal phiên bản máy tính, Signal phải được cài
                                đặt trước trên điện thoại của bạn.</div>
                        </article>
                        <h3>Không dùng Windows?</h3>
                        <ul>
                            <li> <a href="https://updates.signal.org/desktop/signal-desktop-mac-universal-6.26.0.dmg"
                                    class="download-primary download-mac"> Signal cho Mac </a></li>
                            <li> <a href="#" class="download-primary download-linux"> Signal cho Linux - Các bản phân phối
                                    dựa trên Debian </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "GetSignal"
}
</script>

<style>
.download-window {
    background-color: #9dbbf8;
    border-radius: 12px;
    padding: 40px 0 0;
    height: 300px;
    margin: 0;
    margin-bottom: 25px;
}

.download .button {
    margin: 15px 30px;
}

.download-window .download-window-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    margin: 0 auto;
}

.download .message {
    background: #f6f6f6;
    margin-top: 16px;
}

.download .message-body {
    border: none;
    font-size: 14px;
    line-height: 20px;
}

.download ul li a:hover {
    color: #1851B4;
    text-decoration: underline;
}

.message-body {
    border-color: #dbdbdb;
    border-radius: 4px;
    border-style: solid;
    border-width: 0 0 0 4px;
    color: #4a4a4a;
    padding: 1.25em 1.5em;
}

</style>