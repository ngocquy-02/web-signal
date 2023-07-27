<template>
    <section class="blog section">
        <div class=" container">
            <div class="row">
                <div class="col-lg-8 col-12 m-auto">
                    <div class="blog-post-content post">
                        <img class="author" src="../../assets/blogs/meredith-signal.png" alt="">
                        <h3 class="text-center">Standing firm against threats to private and safe communication</h3>
                        <p class="body2 text-center"> <a href="https://github.com/meredith-signal">meredith-signal</a> on 09
                            Mar
                            2023</p>
                        <img class="mb-4" src="../../assets/blogs/uk-online-safety-bill.png" alt="">
                        <p>
                            Signal exists to provide people everywhere with a tool for real privatecommunication. That’s our
                            only goal, and we take it very seriously. We’re structured as a nonprofit to ensure that market
                            forces can never put profit or expediency over the safety of those who rely on us. Our work also
                            resonates beyond the Signal app. The Signal Protocol has become the foundation for end-to-end
                            encryption technology that is used and trusted by many private messaging services to protect
                            billions of messages every day.
                        </p>
                        <p>
                            We recognize that privacy is a human right and that free expression and the ability to dissent
                            are
                            fundamental to a safe and vibrant society. But the current state of the Online Safety Bill in
                            the UK
                            puts the future of privacy and expression in grave jeopardy.
                        </p>
                        <p>While it may seem surprising that <a href="https://en.wikipedia.org/wiki/Online_Safety_Bill">a
                                bill
                                whose namesake is “online safety”</a> could weaken the technological foundation that keeps
                            billions of people safe online, that’s sadly what is happening. As written, the Bill contains
                            provisions that are positioned to undermine encryption, and could create an unprecedented regime
                            of
                            mass surveillance that would all but eliminate the ability of people in the UK to communicate
                            with
                            each other outside of government interference.</p>

                        <p>Let me be blunt: encryption is either broken for everyone, or it works for everyone. There is no
                            way
                            to create a safe backdoor.</p>

                        <p>As a whole, the Online Safety Bill is a grab bag. Sensible proposals are positioned next to
                            dangerous
                            “spy clauses” and vague “duty of care” provisions that make providers responsible for policing
                            the
                            content of every message sent by every user. A <a
                                href="https://www.internetsociety.org/resources/doc/2022/iib-encryption-uk-online-safety-bill/">report
                                from the Internet Society</a> makes the stakes clear: “the only way for service providers
                            that
                            offer end-to-end encryption to comply with this duty of care would be to remove or weaken the
                            encryption that they offer.” Experts from the UK-based Open Rights Group have <a
                                href="https://cloud.openrightsgroup.org/nextcloud/s/QpfdMcjiiNqEiwW">also criticized</a> the
                            Bill’s potential to offer future configurations of the UK government “considerable leeway” to
                            “introduce draconian and authoritarian-style censorship,” expanding the scope of government
                            control
                            over expression. Some supporters negligently assure the public that such mass government
                            inspection
                            of messages is compatible with strong end-to-end encryption. We know that it is not.</p>

                        <p>The history of digital technology is littered with the magical thinking of governments that have
                            tried and failed to create backdoors that can only be accessed by “the good guys” while
                            remaining
                            secure against threats from “everyone else.” These efforts have failed because what they’re
                            attempting is impossible. The <a href="https://en.wikipedia.org/wiki/Clipper_chip">infamous
                                Clipper
                                Chip</a> is only one example. Millions of dollars have been spent on dead ends, and projects
                            shelved over and over again. The truth is that any scheme that provides access for “us” can just
                            as
                            quickly be exploited by “them” – hostile actors eager to compromise critical infrastructures on
                            which the UK’s government, economy, and institutions rely.</p>

                        <p>Others express an equally dangerous but more novel variant of magical thinking. They concede that
                            backdoors aren’t the way forward. Instead, they propose mass surveillance “outside” of
                            encryption,
                            generally pointing to so-called client-side scanning systems. Don’t worry, these proponents
                            assure
                            us, we will scan your messages on your device <em>before</em> they’re encrypted, checking them
                            against opaque databases of banned speech to ensure that you’re staying within
                            government-approved
                            boundaries of expression. After that? Sure, go ahead and encrypt. This kind of faustian bargain
                            nullifies the whole premise of encryption by mandating deeply insecure technology that would
                            enable
                            the government to literally check every utterance before it is expressed.</p>

                        <p>So how did a bill that contains such a significant threat to privacy, safety, and fundamental
                            rights
                            make it so far? One reason could be the emotional gravity of the problems it claims to solve.
                            Harm
                            to children is a monstrous topic to contemplate. Everyone feels a jolt of horror on hearing
                            accounts
                            of such abuse. And in the face of grave horror, there is a reflex to act. For many, the Bill is
                            an
                            easy way to “do something.”</p>

                        <p>But we cannot let well-meaning emotions lead us to authoritarian futures. As Cambridge’s Dr. Ross
                            Anderson <a href="https://arxiv.org/abs/2210.08958">has explained</a>, there is scant evidence
                            that
                            the mass surveillance suggested in the Bill would address the complex social problems at the
                            root of
                            child exploitation and abuse. There is, however, a wealth of evidence suggesting that
                            non-technical
                            remedies like providing more resources to responders, improving social safety nets, and
                            addressing
                            the familial and institutional contexts within which abuse occurs have a much better track
                            record of
                            actually aiding the people these provisions claim to support.</p>

                        <p>As written, the provisions in the Online Safety Bill are poised to eviscerate privacy while
                            opening
                            new vectors for exploitation that threaten the safety and security of everyone in the UK. As one
                            of
                            the first of its kind, it could also create a template that would certainly be copied by
                            authoritarian governments. We oppose the Bill in its current form, and believe key provisions
                            need
                            to be fundamentally reconsidered.</p>

                        <p>When the Iranian government blocked Signal, we recognized that the people in Iran who needed
                            privacy
                            were not represented by the authoritarian state, and we <a href="#">worked with our
                                community</a> to set up proxies and other means to ensure that Iranians could access Signal.
                        </p>

                        <p>As in Iran, we will continue to do everything in our power to ensure that people in the UK have
                            access to Signal and to private communications. But we <em>will not</em> undermine or compromise
                            the
                            privacy and safety promises we make to people in the UK, and everywhere else in the world.</p>

                        <p><strong>Meredith Whittaker, President of Signal</strong></p>

                        <p> <router-link :to="{ name: 'Blog' }"><i class='bx bx-arrow-back'></i> Back</router-link></p>
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
.blog-post-content {
    margin-bottom: 20px;
    margin-top: 80px;
    padding: 80px 0;
    position: relative;
}

.blog-post-content p {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
}

@media (max-width: 768px) {
    .blog-post-content p {
        font-size: 16px;
        line-height: 24px;
    }

}
</style>