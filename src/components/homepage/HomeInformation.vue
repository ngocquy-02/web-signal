<template>
    <section class="information section">
        <div class="container">
            <div class="row flex-reverse">
                <div class="col-lg-4 col-12">
                    <h2 class="mb-4">Chia sẻ Không Ngại Lỗ hổng</h2>
                    <p class="body1"> Phương thức mã hoá hai đầu cuối tân tiến (được hỗ trợ bởi Giao thức Signal mã nguồn
                        mở) để
                        giữ các cuộc trò chuyện của bạn được an toàn. Chúng tôi không đọc được tin nhắn của bạn hoặc nghe
                        được
                        cuộc gọi của bạn, và cũng không ai khác có thể. Quyền riêng tư không phải là một chế độ tùy chọn —
                        đó
                        đơn giản là cách Signal hoạt động. Mọi tin nhắn, mọi cuộc gọi, mọi lúc.</p>
                </div>
                <div class="col-lg-8 col-12 pb-4">
                    <div class="d-flex justify-content-end">
                        <div class="information-QA">
                            <img src="../../assets/img/Q&A.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HomeInformation",
}
</script>

<style>
.information-QA {
    max-width: 650px;
    background-color: #a5cad5;
    border-radius: 16px;
    padding: 16px;
}

@media (max-width: 992px) {
    .flex-reverse {
        flex-direction: column-reverse;
    }
}
</style>