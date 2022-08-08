import axios from "axios";

export const postModule = {
    state: () => ({
        posts: [
        ],
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
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
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
            state.selectedSort = selectedSort
        },
        isPostsLoading(state, isPostsLoading) {
            state.isPostsLoading = isPostsLoading
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
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        }
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
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page + 1);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
                commit('setPosts',[...state.posts, ...response.data] )
            } catch (e) {
                console.log(e);
            }
        }
    },
    namespaced: true
}
