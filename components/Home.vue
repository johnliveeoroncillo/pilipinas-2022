<template>
    <main class="w-screen h-screen lg:overflow-hidden p-5 bg-gray-100 flex flex-col">
        <div class="pb-5">
            <img src="@/assets/logo.png" class="w-[200px] mx-auto" />
        </div>

        <div class="relative lg:grid lg:grid-cols-4 gap-5 w-full flex-1 ">
            <div class="h-full lg:flex-1 flex flex-col">
                <div class="bg-blue-700 text-white font-bold py-4 pl-4 pr-16 text-xl title tracking-wide rounded">President</div>
                
                <div class="relative flex-1 w-full">
                    <div class="absolute w-full h-full overflow-auto py-5 flex flex-col gap-5 ">
                        <div class="rounded bg-white shadow-sm px-6 py-2 text-gray-900" v-for="(data, i) in presidents" :key="i">
                            <div>
                                <span class="font-bold text-lg">{{data.candidateName}}</span>
                                <span class="text-gray-500 text-sm font-medium block">{{data.partyNameShort}}</span>
                            </div>
                            <div class="font-bold text-blue-700">
                                <span class="text-lg">{{format(data.voteCount)}}</span>
                                <span class="text-gray-500 text-sm font-medium">votes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="h-full lg:flex-1 flex flex-col">
                <div class="bg-blue-700 text-white font-bold py-4 pl-4 pr-16 text-xl title tracking-wide rounded">Vice President</div>
                
                <div class="relative flex-1 w-full">
                    <div class="absolute w-full h-full overflow-auto py-5 flex flex-col gap-5 ">
                        <div class="rounded bg-white shadow-sm px-6 py-2 text-gray-900" v-for="(data, i) in vice_presidents" :key="i">
                            <div>
                                <span class="font-bold text-lg">{{data.candidateName}}</span>
                                <span class="text-gray-500 text-sm font-medium block">{{data.partyNameShort}}</span>
                            </div>
                            <div class="font-bold text-blue-700">
                                <span class="text-lg">{{format(data.voteCount)}}</span>
                                <span class="text-gray-500 text-sm font-medium">votes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="h-full lg:flex-1 flex flex-col">
                <div class="bg-blue-700 text-white font-bold py-4 pl-4 pr-16 text-xl title tracking-wide rounded">Senator</div>
                
                <div class="relative flex-1 w-full">
                    <div class="absolute w-full h-full overflow-auto py-5 flex flex-col gap-5 ">
                        <div class="rounded bg-white shadow-sm px-6 py-2 text-gray-900" v-for="(data, i) in senators" :key="i">
                            <div>
                                <span class="font-bold text-lg">{{data.candidateName}}</span>
                                <span class="text-gray-500 text-sm font-medium block">{{data.partyNameShort}}</span>
                            </div>
                            <div class="font-bold text-blue-700">
                                <span class="text-lg">{{format(data.voteCount)}}</span>
                                <span class="text-gray-500 text-sm font-medium">votes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="h-full lg:flex-1 flex flex-col">
                <div class="bg-blue-700 text-white font-bold py-4 pl-4 pr-16 text-xl title tracking-wide rounded">Partylist</div>
                
                <div class="relative flex-1 w-full">
                    <div class="absolute w-full h-full overflow-auto py-5 flex flex-col gap-5 ">
                        <div class="rounded bg-white shadow-sm px-6 py-2 text-gray-900" v-for="(data, i) in partylist" :key="i">
                            <div>
                                <span class="font-bold text-lg">{{data.candidateName}}</span>
                            </div>
                            <div class="font-bold text-blue-700">
                                <span class="text-lg">{{format(data.voteCount)}}</span>
                                <span class="text-gray-500 text-sm font-medium">votes</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            presidents_feed: {},
            presidents: [],
            vice_presidents_feed: {},
            vice_presidents: [],
            senators_feed: {},
            senators: [],
            partylist_feed: {},
            partylist: [],
        }
    },
    methods: {
        format(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        async loadPresFeed() {
            await this.$axios.get('https://blob-prod-president.abs-cbn.com/misc/feed-president.json')
                    .then(res => {
                        const { data } = res;
                        this.presidents_feed = Object.assign({}, this.presidents_feed, data);
                    })
        },
        async loadVPresFeed() {
            await this.$axios.get('https://blob-prod-vice-president.abs-cbn.com/misc/feed-vice-president.json')
                    .then(res => {
                        const { data } = res;
                        this.vice_presidents_feed = Object.assign({}, this.vice_presidents_feed, data);
                    })
        },
        async loadSenatorsFeed() {
            await this.$axios.get('https://blob-prod-senator.abs-cbn.com/misc/feed-senator.json')
                    .then(res => {
                        const { data } = res;
                        this.senators_feed = Object.assign({}, this.senators_feed, data);
                    })
        },
        async loadPartylistFeed() {
            await this.$axios.get('https://blob-prod-party-list.abs-cbn.com/misc/feed-party-list.json')
                    .then(res => {
                        const { data } = res;
                        this.partylist_feed = Object.assign({}, this.partylist_feed, data);
                    })
        },
        async loadPresidents() {
            await this.$axios.get(`https://blob-prod-president.abs-cbn.com/feed-${this.presidents_feed.feedNo}/president-00199000-nation-location-1.json`)
                    .then(res => {
                        const { data } = res;
                        this.presidents = data.result;
                    })
        },
       async loadVPresidents() {
            await this.$axios.get(`https://blob-prod-vice-president.abs-cbn.com/feed-${this.vice_presidents_feed.feedNo}/vice-president-00299000-nation-location-1.json`)
                    .then(res => {
                        const { data } = res;
                        this.vice_presidents = data.result;
                    })
        },
        async loadSenators() {
            await this.$axios.get(`https://blob-prod-senator.abs-cbn.com/feed-${this.senators_feed.feedNo}/senator-00399000-nation-location-1.json`)
                    .then(res => {
                        const { data } = res;
                        this.senators = data.result;
                    })
        },
        async loadPartylist() {
            await this.$axios.get(`https://blob-prod-party-list.abs-cbn.com/feed-${this.partylist_feed.feedNo}/party-list-01199000-nation-location-1.json`)
                    .then(res => {
                        const { data } = res;
                        this.partylist = data.result;
                    })
        },
        async refresh() {
            await Promise.all([
                await this.loadPresFeed(),
                await this.loadPresidents(),
                await this.loadVPresFeed(),
                await this.loadVPresidents(),
                await this.loadSenatorsFeed(),
                await this.loadSenators(),
                await this.loadPartylistFeed(),
                await this.loadPartylist()
            ]);
        }
    },
    async created() {
        await this.refresh();

        setInterval(() => {
            this.refresh();
        }, 10000);
    }
}
</script>

<style>
html, body {
    font-family: 'Poppins', sans-serif;
}

main {
    background: url(@/assets/bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.title {
    position: relative;
    overflow: hidden;
}

.title::after {
    z-index: 0;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    position: absolute;
    background: url(@/assets/logo-white.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    opacity: 0.2;
}
</style>