import httpClient from '../api/httpClient';

class TimeService {
  updateTimeStatistics() {
    return httpClient.post('time/update').then((res) => res);
  }

  updateTimeCategory({ _id, minTime }) {
    return httpClient.post(`time/update-min-time/${_id}`, { minTime }).then((res) => res);
  }

  addTime({ _id, time, date }) {
    return httpClient.post('time/add-time', { _id, time, date }).then((res) => res);
  }

  getTimeList() {
    return httpClient.get('time/time-list').then((res) => res);
  }

  getTime(id) {
    return httpClient.get(`time/${id}`).then((res) => res);
  }

  getTotal() {
    return httpClient.get('time/total').then((res) => res);
  }
}

export const timeService = new TimeService();
