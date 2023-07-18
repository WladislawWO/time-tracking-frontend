import httpClient from '../api/httpClient';

class TimeService {
  async addTime(data) {
    return httpClient.patch('/time', data).then((res) => res);
  }

  async getTimeList() {
    return httpClient.get('/time').then((res) => res);
  }
}

export const timeService = new TimeService();
