<template>
    <section class="section advertive">
        <div class="container">
            <div class="row mb-5">
                <div class="col-lg-4 col-12">
                    <h2>Không quảng cáo. Không theo dõi. Không đùa.</h2>
                    <p class="body1"> Signal không hề có bất kỳ mục quảng cáo, bên quảng cáo thứ ba nào, và không theo dõi
                        người dùng. Vì vậy, hãy cứ tập trung cho những khoảnh khắc quan trọng với bạn với những người quan
                        trọng.</p>
                </div>

                <div class="col-lg-8 col-12"> <img src="../../assets/features/No-Ads.png">
                </div>
            </div>

            <div class="row flex-reverse">
                <div class="col-lg-8 col-12 d-flex justify-content-lg-end"> <img src="../../assets/features/Nonprofit.png">
                </div>
                <div class="col-lg-4 col-12">
                    <h2>Miễn phí cho tất cả mọi người</h2>
                    <p class="body1"> Signal là một tổ chức phi lợi nhuận độc lập. Chúng tôi không có liên kết với các công
                        ty công nghệ lớn, và chúng tôi sẽ không bao giờ bị mua bởi các công ty này. Việc phát triển Signal
                        được hỗ trợ bởi các khoản trợ cấp và khoản ủng hộ từ các cá nhân như bạn. <br> <br> 
                        <router-link class="button button2" :to="{name: 'Donate'}"> Ủng hộ Signal </router-link></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HomeAdvertise"
}
</script>

<style>
.advertive img {
    width: 384px;
    border-radius: 16px;
}

.button2 {
    background-color: #fff;
    border-radius: 8px;
    border: 2px solid #2c6bed;
    color: #2c6bed;
    font-size: 20px;
    line-height: 28px;
}

@media (min-width: 768px) {
    .advertive img {
        width: 680px;
    }
}

@media (max-width: 992px) {
    .flex-reverse {
        flex-direction: column-reverse;
    }
}

</style>