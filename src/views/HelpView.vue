<template>
    <section class="section help-header">
        <div class="container">
            <div class="row align-items-center  ">
                <div class="col-6 text-center m-auto">
                    <h2 class="mb-4">Chúng tôi có thể giúp gì cho bạn?</h2>
                    <div class="position-relative">
                        <input type="text" placeholder="Tìm kiếm">
                        <i class='bx bx-search help-search' ></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section blocks">
        <div class="container">
            <ul class="blocks-list row text-center">
                <li class="blocks-item col-4">
                    <a href="#" class="blocks-item-link">
                        <h4 class="blocks-item-title">Bắt đầu</h4>
                        <p class="blocks-item-description">Hiểu kiến thức cơ bản về Signal trên Android, iOS và Máy tính
                            để bàn.</p>
                    </a>
                </li>
                <li class="blocks-item col-4">
                    <a href="#" class="blocks-item-link">
                        <h4 class="blocks-item-title">Tính năng</h4>
                        <p class="blocks-item-description">Khám phá thêm các tính năng đa dạng của tin nhắn bảo mật.</p>
                    </a>
                </li>
                <li class="blocks-item col-4">
                    <a href="#" class="blocks-item-link">
                        <h4 class="blocks-item-title">An ninh</h4>
                        <p class="blocks-item-description">Mục này bao gồm các câu hỏi thường gặp về độ an toàn và ổn
                            định của công nghệ được dùng trong các ứng dụng.</p>
                    </a>
                </li>
                <li class="blocks-item col-6">
                    <a href="#" class="blocks-item-link">
                        <h4 class="blocks-item-title">Khắc phục lỗi</h4>
                        <p class="blocks-item-description"></p>
                    </a>
                </li>
                <li class="blocks-item col-6">
                    <a href="#" class="blocks-item-link">
                        <h4 class="blocks-item-title">Chung</h4>
                        <p class="blocks-item-description"></p>
                    </a>
                </li>
            </ul>
        </div>
    </section>

    <section class="help-footer">
        <div class="footer-donate-request">
            Signal cam kết với sự riêng tư của bạn. Là một tổ chức phi lợi nhuận, Signal hoạt động dựa trên đóng góp.
            Không quảng cáo, không theo dõi.
            <router-link :to="{name: 'Donate'}">Đóng góp ở đây!</router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: "HelpView"
}
</script>

<style>
.help-header {
    background-color: #9DBBF8;
    background-position: center;
    background-size: cover;
    max-height: 300px;
    padding: 60px 20px;
    text-align: center;
    width: 100%;
}

.help-header input {
    border: none;
    outline: none;
    border-radius: 30px;
    box-sizing: border-box;
    color: #999;
    height: 40px;
    padding-left: 40px;
    padding-right: 20px;
    width: 100%;
}

.help-header input:focus {
    border: 1px solid rgba(0, 114, 239, 1);
    color: #555;
}

.help-search {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
}

.blocks-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
}

.blocks-item {
    border: 0px;
    background-color: #fff;
    border: 2px solid #fff;
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    flex: 1 0 340px;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 30px;
    max-width: 100%;
    text-align: center;
    padding: 0;
}

.blocks-item:hover {
    border: 2px solid #9dbbf8;
}

.blocks-item-link {
    color: rgba(27, 27, 27, 1);
    height: 100%;
    padding: 20px 30px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.08);
    border: 1px solid #fff;
    border-radius: 8px;
    text-decoration: none;
}

.blocks-item-title {
    margin-bottom: 0;
}

.blocks-item-description {
    margin-bottom: 0;
}

.help-footer {
    border-top: 1px solid #ddd;
    text-align: center;
    padding: 30px 0;
}

@media (min-width: 768px) {
    .blocks-item {
        margin: 0 15px 30px;
    }

}
</style>