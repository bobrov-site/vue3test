import {onMounted, ref} from "vue";
import axios from "axios";
export function usePosts(limit) {
    const posts = ref([])
    const totalPages = ref(0)
    const isPostLoading = ref(true)
    const fetching = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts' , {
                params: {
                    _page: state.page,
                    _limit: state.limit
                }
            });
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
            posts.value = response.data
        }
        catch (e) {
            alert('ошибка')
        }
        finally {
            isPostLoading.value = false
        }
    }
    onMounted(fetching)
    return {
        posts, isPostLoading, totalPages
    }
}