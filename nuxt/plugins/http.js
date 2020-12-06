// export const axios

export default ({ $axios }) => {
    $axios.defaults.xsrfCookieName = 'csrftoken'
    $axios.defaults.xsrfHeaderName = 'X-CSRFToken'

    // axios = $axios
}
