<template>
    <section class=" donate section">
        <div class="container">
            <div class="row my-4">
                <div class="col-12 text-center">
                    <h2 class="">Ủng hộ Signal</h2>
                    <p class="mb-3">
                        <a href="#" class="">Hoặc ủng hộ bằng tiền điện tử &raquo;</a>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5 col-12 text-md-end text-center">
                    <img class="me-5" src="../assets/img/Donate.jpg" alt="" width="300">
                </div>
                <div class="col-md-7 col-12">
                    <p class="body1">Đội ngũ Signal cam kết thực hiện sứ mệnh phát triển công nghệ bảo vệ quyền riêng tư mã
                        nguồn mở nhằm bảo vệ quyền tự do ngôn luận và tạo ra một môi trường giao tiếp toàn cầu an toàn. Sự
                        đóng góp của bạn thúc đẩy việc này. Không quảng cáo. Không theo dõi. Không đùa.</p>
                    <p class="body1">Khoản ủng hộ của bạn giúp chúng tôi thanh toán chi phí phát triển, máy chủ, và băng
                        thông của một ứng dụng được hàng triệu người trên thế giới sử dụng để liên lạc một cách riêng tư và
                        tức thời.</p>
                    <p class="body1">Khi bạn cung cấp địa chỉ email của mình, bạn sẽ nhận được email xác nhận cho hồ sơ thuế
                        của mình. Signal Technology Foundation là một tổ chức phi lợi nhuận độc lập và được miễn thuế theo
                        mục 501c3 của Bộ Luật Thuế Vụ. Số ID Thuế Liên bang của chúng tôi là 82-4506840.</p>
                    <p class="body1">Chú ý: Signal không thể gửi tặng huy hiệu cho bạn nếu bạn ủng hộ theo cách này thay vì
                        đăng nhập bằng Google Pay hoặc Apple Pay trong ứng dụng.</p>
                </div>
            </div>
            <hr style="margin-top: -1em; margin-bottom: -4em;">
            <div style="padding-top: 6rem;" class="row">
                <div class="col-md-5 col-12 text-md-end text-center">
                    <iframe class="me-5" frameborder="0" width="300" height="600" scrolling="no"
                        src="https://tgbwidget.com/?charityID=824506840">
                    </iframe>
                </div>
                <div class="col-md-7 col-12">
                    <h4>Ủng hộ bằng Tiền Điện tử</h4>
                    <p class="body1">Các khoản ủng hộ cho Signal bằng tiền điện tử sẽ được gửi thông qua
                        <a href="https://www.thegivingblock.com/why-donate-bitcoin">The Giving Block</a>.
                    </p>
                    <p class="body1">Nếu bạn muốn nhận được khoản khấu trừ thuế ở Hoa Kỳ trên giá trị khoản ủng hộ bằng tiền
                        điện tử của mình, bạn có thể chọn cung cấp địa chỉ email để nhận biên lai thuế. The Giving Block
                        cũng đồng thời hỗ trợ bạn thực hiện các khoản ủng hộ ẩn danh.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="donate-help section">
        <div class="container">
            <div class="row">
                <p class="col-md-6 col-12 text-md-end text-center border-end border-secondary">
                    <a href="https://support.signal.org/hc/en-us/articles/360031949872">Câu hỏi thường gặp về Nhà Ủng hộ</a>
                </p>
                <p class="col-md-6 col-12 text-md-start text-center">
                    <a href="https://support.signal.org/hc/en-us/articles/360032293251">Chính sách Riêng tư cho Nhà Ủng hộ</a>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "DonateView"
}
</script>

<style>
@media (max-width: 768px) {
    .donate img {
        margin-right: 0 !important;
    }

    .donate-help .border-end {
        border-right: none !important;
    }
}
</style>