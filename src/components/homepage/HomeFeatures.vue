<template>
    <section class="section features">
        <div class="container">
            <div class="row ">
                <div class="col-md-6 col-12 pb-4">
                    <div class="box"> <img src="../../assets/features/Media.png">
                        <h3>Nói bất cứ điều gì</h3>
                        <p class="body2">Chia sẻ miễn phí văn bản, tin nhắn thoại, hình ảnh, video, ảnh động và tập tin.
                            Signal sử dụng kết nối dữ liệu di động của bạn để bạn có thể tránh các phí SMS và MMS.</p>
                    </div>
                </div>
                <div class="col-md-6 col-12 pb-4">
                    <div class="box"> <img src="../../assets/features/Calls.png">
                        <h3>Nói chuyện Tự do</h3>
                        <p class="body2">Thực hiện các cuộc gọi thoại và video cực rõ với bất cứ ai sống bên kia thành phố,
                            hoặc bên kia bờ đại dương, mà không phải tốn phí gọi đường dài.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-12 pb-4">
                    <div class="box"> <img src="../../assets/features/Stickers.png">
                        <h3>Quyền Riêng Tư &amp; Nhãn Dán</h3>
                        <p class="body2">Thêm một lớp biểu cảm cho các cuộc trò chuyện của bạn với nhãn dán được mã hoá. Bạn
                            cũng có thể tạo và chia sẻ các bộ nhãn dán của riêng mình.</p>
                    </div>
                </div>
                <div class="col-md-6 col-12 pb-4">
                    <div class="box"> <img src="../../assets/features/Groups.png">
                        <h3>Gặp nhau qua Nhóm</h3>
                        <p class="body2">Trò chuyện nhóm giúp bạn giữ liên lạc với gia đình, bạn bè, và đồng nghiệp một cách
                            dễ dàng.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HomeFeatures"
}
</script>

<style>
.features {
    background-color: #F6F6F6;
}

.features .box {
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.08);
    height: 100%;
    padding: 30px;
    color: #4a4a4a;
    display: block;
    text-align: center;
}

.features h3 {
    color: #1b1b1b;
    font-size: 28px;
    font-weight: 800;
    line-height: 32px;
    margin-top: 18px;
    margin-bottom: 4px;
}

.features img {
    width: 280px;
}

@media (min-width: 768px) {
    .features img {
        width: 370px;
    }
}
</style>