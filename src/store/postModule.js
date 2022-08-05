import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [
        ],
        // dialogVisible: false,
        modificatorValue: '',
        isPostsLoading: false,
        selectedSort: '',
        sortOptions: [
            {value: 'title', name: 'по названию'},
            {value: 'body', name: 'по описанию'},
            {value: 'id', name: 'по id'},
        ],
        searchQuery: '',
        page: 1,
        limit: 10,
        totalPages: 0,
    }),
    getters: {
        sortedPosts(state){
            return [...state.posts].sort((post1,post2) => String(post1[state.selectedSort])?.localeCompare(String(post2[state.selectedSort]), 'en', {numeric: true})
            )
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery))
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;

        },
        setLoading(state, bool) {
            state.isPostsLoading = bool
        },
        setSelectedSort(state, selectedSort) {
            state.isPostsLoading = selectedSort
        },
        setSortOptions(state, sortOptions) {
            state.sortOptions = sortOptions
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setPage(state, page) {
            state.page = page
        },

    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
                commit('setLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts' , {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                })
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts', response.data)
            }
            catch (e) {
                alert('ошибка')
            }
            finally {
                commit('setLoading', false)
            }
        },
        async loadMorePosts(state, commit) {
            try {
                commit('setPage', state.page + 1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / this.limit));
                commit('setPosts',[...this.posts, ...response.data] )
            } catch (e) {
                alert('Ошибка')
            }
        }
    }
}
