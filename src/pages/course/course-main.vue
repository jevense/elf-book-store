<template>
    <imed-nav :title="title" :rightText="true" @change-show="changedShow">
        <drawer :show="show" @change-show="changedShow">
            <!--PanelLeft-->
            <panel-left slot="drawer" @change-show="changedShow"/>
            <!--content-->
            <div name="search" class="bar">
                <div class="searchbar">
                    <a class="searchbar-cancel">取消</a>
                    <div class="search-input">
                        <label class="icon icon-search" for="search"></label>
                        <input type="search" placeholder='输入关键字...' @keyup.13="search"/>
                    </div>
                </div>
            </div>
            <div class="content" style="margin:4.5rem 0 0 0;">
                <div class="list-block media-list">
                    <ul>
                        <li>
                            <router-link to="/book/10" class="item-link item-content">
                                <div class="item-media">
                                    <img src="https://mall.imed.org.cn/upload/coverImages/imed-exam-2018-1.jpg">
                                </div>
                                <div class="item-inner">
                                    <div class="imed-item-title">中医科</div>
                                    <div class="imed-item-sub-title"><span style="color: red">2990</span> 阅点</div>
                                    <div class="imed-item-sub-title">作者：医视界</div>
                                    <div class="imed-item-sub-title">图书类型：通关包</div>
                                    <div class="imed-item-sub-title">大小：2M</div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </drawer>
    </imed-nav>
</template>

<script>
    import ImedNav from '../../components/imed-nav'
    import Drawer from '../../components/drawer'
    import PanelLeft from './panel-left'

    export default {
        name: "course-main",
        data() {
            return {
                title: '住培疾病诊疗规范教程',
                show: false,
            }
        },
        components: {ImedNav, Drawer, PanelLeft,},
        methods: {
            search() {
                console.log('======')
            },
            changedShow(state) {
                this.show = state
            }
        }
    }
</script>

<style scoped>

    .list-block {
        margin: 0.5rem 0;
    }

    .list-block .item-content {
        padding-left: 0.5rem;
    }

    .list-block.media-list .item-inner {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }

    .imed-item-title {
        font-size: 0.9rem;
    }

    .imed-item-sub-title {
        font-size: 0.8rem;
        color: #666;
    }

    .item-media > img {
        width: 5.5rem;
    }

    .icon.icon-search {
        margin: 0;
    }

</style>