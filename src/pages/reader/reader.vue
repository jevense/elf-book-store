<template>
    <imed-nav :title="showTitle({title:pdfDetail.title, text:pdfDetail.text})">
        <div class="content imed-reader">
            <!--<div class="imed-title" v-text="showTitle({title:pdfDetail.title, text:pdfDetail.text})"></div>-->
            <div v-for="mod in pdfDetail.content">
                <div v-if="mod.title||mod.text" class="imed-title" v-html="showTitle(mod)"></div>
                <div v-for="item in mod.guide" v-if="item.text" style="padding: .5rem 0">
                    <div class="imed-title">【提纲挈领——章节指南】</div>
                    <p class="imed-content" v-html="item.text"></p>
                </div>
                <div v-for="item in mod.content" style="margin-top: 4rem;">
                    <template v-if="item.content">
                        <div class="imed-title">【图文并茂——章节解析】</div>
                        <div class="imed-chapter" v-html="showTitle(item)"></div>
                    </template>
                    <imed-content :key="uuid()" v-for="content in item.content" :data="content"/>
                    <template v-if="item.keyPoint">
                        <div class="imed-title">【临考必备——记忆点睛】</div>
                        <imed-content :key="uuid()" v-for="keyPoint in item.keyPoint" :data="keyPoint"/>
                    </template>
                </div>
            </div>
        </div>
    </imed-nav>
</template>

<script>
    import ImedContent from "../../components/imed-content"
    import uuid from "uuid/v4"
    import {mapState} from 'vuex'
    import ImedNav from '../../components/imed-nav'

    export default {
        components: {
            ImedNav,
            ImedContent
        },
        name: "reader",
        methods: {
            uuid: () => uuid(),
            showTitle: ({title = '', text = ''}) => title + ' ' + text
        },
        data() {
            return {}
        },
        computed: {
            ...mapState({
                pdfDetail: state => state.pdfDetail,
            }),
        },
    }
</script>

<style scoped>
    .imed-reader {
        padding: 1rem;
    }

    .imed-title {
        font-size: 1rem;
        text-align: center;
        margin: 0.5rem 0;
    }

    .imed-chapter {
        margin: 0.5rem 0;
        font-size: .9rem;
        text-align: center;
    }

    .imed-content {
        font-size: .8rem;
    }
</style>
<style>
    body {
        overflow: scroll !important;
    }
</style>
