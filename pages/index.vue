<script setup>

//  篩選條件
const queryInfo = reactive({
    page: 1,
    pageSize: 10,
    startDate: '',
    endDate: '',
})

// 取得最新消息
const { data: news, pending, refresh } = await useAsyncData('getnews', () =>
    $fetch('/api/v1/webNews', {
        params: queryInfo
    }),
    { watch: [queryInfo] }
)

// 下一頁
const nextPage = () => {
    queryInfo.page++
}
// 上一頁
const prevPage = () => {
    queryInfo.page--
}
const changeTab = (tabVal) => {
    console.log(tabVal)
}

</script>
<template>
    <!-- news -->
     {{news}}
    <h1 id="title" class="mb-4">最新消息</h1>
    <!-- 上方頁籤 -->
    <div class="card mb-4">
        <div class="card-body pb-0">
            <div class="row">
                <!-- News Tabs Items -->
                <div class="col-12 col-md-auto order-1 order-md-0 ">
                    <ul class="nav nav-tabs style1 border-0" id="newsCategoryTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="all_tab" data-bs-toggle="tab" data-bs-target="#all"
                                type="button" role="tab" aria-controls="all" aria-selected="true"
                                @click="changeTab('0')">全部</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="assoc_announcement_tab" data-bs-toggle="tab"
                                data-bs-target="#assoc_announcement" type="button" role="tab"
                                aria-controls="assoc_announcement" aria-selected="false"
                                @click="changeTab('1')">協會公告</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="system_announcement_tab" data-bs-toggle="tab"
                                data-bs-target="#system_announcement" type="button" role="tab"
                                aria-controls="system_announcement" aria-selected="false"
                                @click="changeTab('2')">系統公告</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="hot_news_tab" data-bs-toggle="tab" data-bs-target="#hot_news"
                                type="button" role="tab" aria-controls="hot_news" aria-selected="false"
                                @click="changeTab('3')">熱門消息</button>
                        </li>
                    </ul>
                </div>
                <!-- Search Date -->
                <div class="col-12 col-md mt-2 mt-md-0 mb-2 mb-md-0 order-0 order-md-1">
                    <input type="date" class="form-control ms-auto w-50">
                </div>
            </div>
        </div>
    </div>
    <!-- 頁籤內容 -->
    <div class="tab-content">
        <!-- Tab-全部 -->
        <div class="tab-pane active" id="all" role="tabpanel" aria-labelledby="all_tab">
            <!-- 目前只有"全部"頁籤會顯示 -->
            <div class="row">
                <!-- 左上大框 -->
                <div class="col-12 col-lg-7">
                    <div class="card main-news-item">
                        <div class="card-body p-4">
                            <div class="main-image"
                                style="background-image: url('/images/placeholder/Rectangle 544643.png')">
                            </div>
                            <div class="row mt-4">
                                <div class="col-12">
                                    <span class="news-badge">熱門消息</span>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <!-- title -->
                                <div class="col title">
                                    <a href="news-detail.html">AI引領未來！數位新貿易模式計畫首場說明會吸引近百企業補文字補文字補文字補文字</a>
                                </div>
                                <div class="col-auto">
                                    <!-- share link -->
                                    <a href="javascript: alert('todo share');" class="share-link">
                                        <img class="" src="/icons/share.svg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-12 desc">
                                    <!-- desc -->
                                    受惠高效能運算及人工智慧等新興科技應用需求不斷攀升，經濟部統計處表示，預期今年第1季積體電路業產值由黑翻紅，且在比較基數相對偏低下，全年產值皆可望呈正...

                                    <!-- date -->
                                    <span class="d-block mt-3">2024/03/22</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右上大框 -->
                <div class="col-12 col-lg-5 mt-4 mt-lg-0">
                    <div class="card h-100">
                        <div class="card-body p-4">
                            <!-- 一則消息(用js複製多個模擬) -->
                            <div class="news-style2-item">
                                <div class="row">
                                    <div class="col-5 image-wrapper">
                                        <div class="image"
                                            style="background-image: url('/images/placeholder/Rectangle 17599.png')">
                                        </div>
                                    </div>
                                    <div class="col content">
                                        <div class="title">
                                            <a href="news-detail.html">
                                                經部估積體電路第1季產值由黑翻紅 全年正成長
                                            </a>
                                        </div>
                                        <div class="date">
                                            2024/03/22
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <!-- share link -->
                                        <a href="javascript: alert('todo share');" class="share-link">
                                            <img class="" src="/icons/share.svg" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- 下方區塊 -->
            <div class="row mt-4">
                <!-- 一則消息(用js複製多個模擬) -->
                <div class="col-12 col-md-6 pb-4" v-for="item in []">
                    <div class="card news-style3-item">
                        <div class="card-body">
                            <div class="row">
                                <!-- 主要內容 -->
                                <div class="col content">
                                    <div class="info">
                                        <span class="news-badge">熱門消息</span>
                                    </div>
                                    <div class="title mt-2">
                                        <a href="news-detail.html">
                                            {{ item.title }}
                                        </a>
                                    </div>
                                    <div class="desc mt-2">
                                        {{ item.introText }}
                                    </div>
                                    <div class="date mt-4">
                                        2024/03/22
                                    </div>
                                </div>
                                <!-- actions -->
                                <div class="col-auto">
                                    <!-- share link -->
                                    <a href="javascript: alert('todo share');" class="share-link">
                                        <img class="" src="/icons/share.svg" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 頁碼(這部分正常會用uitkit做，有可能不會用到我這版，可能就需要自己調整樣式了) -->
            <div class="row mt-4">
                <div class="col-12">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="javascript:void(0);" @click="prevPage">
                                    <img src="/icons/arrow-left.png" alt="">
                                </a></li>
                            <li class="page-item active"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);" @click="nextPage">
                                    <img src="/icons/arrow-right.png" alt="">
                                </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="tab-pane" id="assoc_announcement" role="tabpanel" aria-labelledby="assoc_announcement_tab">
            assoc_announcement_tab</div>
        <div class="tab-pane" id="system_announcement" role="tabpanel" aria-labelledby="system_announcement_tab">
            system_announcement_tab</div>
        <div class="tab-pane" id="hot_news" role="tabpanel" aria-labelledby="hot_news_tab">hot_news_tab</div>
    </div>
</template>

<style scoped>
@import "@/assets/css/pages/news.css";
</style>
