import httpClient from '../api/httpClient';

class TimeService {
  addTime({ _id, time }) {
    return httpClient.post('time/add-time', { _id, time }).then((res) => res);
  }

  getTimeList() {
    return httpClient.get('time/time-list').then((res) => res);
  }

  getTime({ id }) {
    return httpClient.get(`time/${id}`).then((res) => res);
  }
}

export const timeService = new TimeService();
