<template>
    <section class="blog section">
        <div class=" container">
            <div class="row">
                <div class="col-lg-8 col-12 m-auto text-center">
                    <div class="blog-post-preview post">
                        <img class="author" src="../assets/blogs/meredith-signal.png" alt="">
                        <h3><router-link :to="{ name: 'BlogDetail' }">Standing firm against threats to private and safe
                                communication</router-link></h3>
                        <p class="body2"> <a href="https://github.com/meredith-signal">meredith-signal</a> on 09 Mar 2023
                        </p>
                        <img class="mb-4" src="../assets/blogs/uk-online-safety-bill.png" alt="">
                        <p class="text-start">
                            Signal exists to provide people everywhere with a tool for real privatecommunication. That’s our
                            only goal, and we take it very seriously. We’re structured as a nonprofit to ensure that market
                            forces can never put profit or expediency over the safety of those who rely on us. Our work also
                            resonates beyond the Signal app. The Signal Protocol has become the foundation for end-to-end
                            encryption technology that is used and trusted by many private messaging services to protect
                            billions of messages every day.
                        </p>
                        <p class="text-start">
                            We recognize that privacy is a human right and that free expression and the ability to dissent
                            are
                            fundamental to a safe and vibrant society. But the current state of the Online Safety Bill in
                            the UK
                            puts the future of privacy and expression in grave jeopardy.
                        </p>
                        <p class="text-start"> <router-link :to="{ name: 'BlogDetail' }">Read more...</router-link></p>
                    </div>

                    <div class="blog-post-preview post">
                        <img class="author" src="../assets/blogs/nina-signal.jpg" alt="">
                        <h3><router-link :to="{ name: 'BlogDetail' }">Signal is for everyone, and everyone is
                                different</router-link></h3>
                        <p class="body2"> <a href="https://github.com/nina-signal">nina-signal</a> on 07 Mar 2023</p>
                        <img class="mb-4" src="../assets/blogs/global-header.png" alt="">
                        <p class="text-start">
                            The tech industry–its products, conceptual frameworks, linguistic conventions, and cultural
                            norms–is
                            largely centered in the US (and, increasingly, China. But we’re focused here on the US, where
                            Signal
                            is based). This is not because the US has better programmers or more visionary entrepreneurs,
                            but
                            due primarily to historical material conditions. For example, early investments in networked
                            computation from the US military, which happened around the same time that the US was becoming a
                            global superpower, which was followed by the privatization and then commercialization of
                            networked
                            computation, then the dot com boom, etc. etc., and here we are.
                        </p>
                        <p class="text-start"> <router-link :to="{ name: 'BlogDetail' }">Read more...</router-link></p>
                    </div>

                    <div class="blog-post-preview post">
                        <img class="author" src="../assets/blogs/nina-signal.jpg" alt="">
                        <h3><router-link :to="{ name: 'BlogDetail' }">Story Time</router-link></h3>
                        <p class="body2"> <a href="https://github.com/nina-signal">nina-signal</a> on 07 Nov 2022</p>
                        <img class="mb-4" src="../assets/blogs/stories-header.png" alt="">
                        <p class="text-start">
                            If your favorite way to update your friends about life disappears in 24 hours, we’ve got some
                            happy
                            news for you.
                        </p>
                        <p class="text-start">
                            Stories are now available on Signal for Android and iOS, with Desktop coming soon!
                        </p>
                        <p class="text-start"> <router-link :to="{ name: 'BlogDetail' }">Read more...</router-link></p>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    name: "BlogView"
}
</script>

<style>
.blog-post-preview {
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    margin-top: 80px;
    padding: 80px 100px;
    position: relative;
}

.blog-post-preview p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 20px;
}

.blog-post-preview h3 a {
    color: #1b1b1b;
}

.blog-post-preview h3 a:hover {
    color: #1b1b1b;
    text-decoration: none;
}

.blog-post-preview p a:hover {
    color: #1851B4;
    text-decoration: underline;
}

.post .author {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    display: block;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -40px;
    width: 80px;
}

.post img {
    display: block;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .blog-post-preview {
        padding: 60px 20px;
    }
}</style>