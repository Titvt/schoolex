import axios from 'axios'
import qs from 'qs'

export function get(url, succ, fail) {
  axios.get(url).then(value => {
    if (value.data['status'] === 'ok') {
      succ(value.data['data'])
    } else {
      fail(value.data['status'])
    }
  }, reason => fail(reason)).catch(reason => fail(reason))
}

export function post(url, data, succ, fail) {
  axios.post(url, qs.stringify(data)).then(value => {
    if (value.data['status'] === 'ok') {
      succ(value.data['data'])
    } else {
      fail(value.data['status'])
    }
  }, reason => fail(reason)).catch(reason => fail(reason))
}
